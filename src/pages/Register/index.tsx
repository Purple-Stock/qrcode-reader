import React, { useCallback, useState } from 'react';
import QrReader from 'react-qr-reader';
import { FiCheckCircle } from 'react-icons/fi';

import { Container, QrReaderBox, ProductList, ModalFooter } from './styles';
import Button from '../../components/Button';
import Modal from '../../components/Modal';
import Popup from '../../components/Popup';
import api from '../../services/api';

interface Product {
  id: string;
  name: string;
  quantity: number;
}

const Register: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [showAddPopup, setShowAddPopup] = useState(false);
  const [showSendPopup, setShowSendPopup] = useState(false);

  const handleOpenModal = useCallback(() => setShowModal(true), []);
  const handleCloseModal = useCallback(() => setShowModal(false), []);

  const handleCloseAddPopup = useCallback(() => setShowAddPopup(false), []);
  const handleCloseSendPopup = useCallback(() => {
    setShowSendPopup(false);
    setShowModal(false);
    setProducts([]);
  }, []);

  const addProduct = useCallback(
    (scannedProduct: Omit<Product, 'quantity'>) => {
      const productExists = products.find(
        product => product.id === scannedProduct.id,
      );

      if (productExists) {
        setProducts([
          ...products.map(product =>
            product.id === scannedProduct.id
              ? { ...product, quantity: product.quantity + 1 }
              : product,
          ),
        ]);
      } else {
        setProducts(state => [...state, { ...scannedProduct, quantity: 1 }]);
      }
    },
    [products],
  );

  const handleScan = useCallback(
    data => {
      if (data) {
        const product = JSON.parse(data);
        addProduct(product);
        setShowAddPopup(true);
      }
    },
    [addProduct],
  );

  const handleError = useCallback(err => {
    console.error(err);
  }, []);

  const handleEnviarProdutos = useCallback(async () => {
    const headers = { 'Content-Type': 'application/json' };
    const productsData = products.map(product => ({
      product_id: product.id,
      quantity: product.quantity,
    }));

    await api.post(
      'purchase_products/add_products',
      { products: productsData },
      { headers },
    );

    setShowSendPopup(true);
  }, [products]);

  return (
    <Container>
      <QrReaderBox>
        <QrReader
          delay={1000}
          showViewFinder={false}
          onError={handleError}
          onScan={handleScan}
          style={{ width: '100%' }}
          facingMode="user"
        />

        <span />
      </QrReaderBox>

      <Button isDisabled={!products.length} onClick={handleOpenModal}>
        Ver produtos ({products.length})
      </Button>

      <Modal show={showModal} onClose={handleCloseModal}>
        <h3>Produtos</h3>

        <ProductList>
          {products.map(product => (
            <li key={product.id}>
              <p>Nome: {product.name}</p>
              <p>Quantidade: {product.quantity}</p>
            </li>
          ))}
        </ProductList>

        <ModalFooter>
          <Button onClick={handleEnviarProdutos}>Enviar</Button>
        </ModalFooter>

        <Popup show={showSendPopup} onClose={handleCloseSendPopup}>
          <h2>Enviado com sucesso!</h2>

          <Button onClick={handleCloseSendPopup}>
            Ok
            <FiCheckCircle size={18} />
          </Button>
        </Popup>
      </Modal>

      <Popup show={showAddPopup} onClose={handleCloseAddPopup}>
        <h2>Produto Adicionado!</h2>

        <Button onClick={handleCloseAddPopup}>
          Ok
          <FiCheckCircle size={18} />
        </Button>
      </Popup>
    </Container>
  );
};

export default Register;
