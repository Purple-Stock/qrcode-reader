import React, { useCallback, useRef, MouseEvent, HTMLAttributes } from 'react';
import { useTransition } from 'react-spring';

import { ContainerBackdrop, Container } from './styles';

interface ModalProps extends HTMLAttributes<HTMLDivElement> {
  show: boolean;
  onClose: Function;
}

const Modal: React.FC<ModalProps> = ({ children, show, onClose }) => {
  const containerBackdropRef = useRef(null);

  const transitions = useTransition(show, null, {
    from: { bottom: '-120%' },
    enter: { bottom: '0%' },
    leave: { bottom: '-120%' },
  });

  const handleClose = useCallback(
    (event: MouseEvent) => {
      event.stopPropagation();

      if (event.target !== containerBackdropRef.current) {
        return;
      }

      onClose();
    },
    [onClose],
  );

  return (
    <>
      {transitions.map(
        ({ item, key, props }) =>
          item && (
            <ContainerBackdrop
              ref={containerBackdropRef}
              key={key}
              onClick={handleClose}
            >
              <Container style={props}>{children}</Container>
            </ContainerBackdrop>
          ),
      )}
    </>
  );
};

export default Modal;
