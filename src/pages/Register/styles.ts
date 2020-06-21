import styled from 'styled-components';

interface ModalProps {
  show: boolean;
}

export const Container = styled.div`
  padding: 0 20px;
  background: linear-gradient(#8e9eab, #eef2f3);

  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > button {
    width: 170px;
    margin-top: 100px;
  }

  p {
    text-align: center;
  }

  p + p {
    margin-top: 10px;
  }
`;

export const QrReaderBox = styled.div`
  width: 100%;
  padding: 0 30px;

  span {
    width: 100%;
    display: block;
    position: relative;

    &:before {
      display: block;
      content: '';
      width: 40px;
      height: 40px;
      position: absolute;
      bottom: -20px;
      left: -20px;
      border-bottom: 8px solid #2d3436;
      border-left: 8px solid #2d3436;
      border-bottom-left-radius: 20px;
    }

    &:after {
      display: block;
      content: '';
      width: 40px;
      height: 40px;
      position: absolute;
      bottom: -20px;
      right: -20px;
      border-bottom: 8px solid #2d3436;
      border-right: 8px solid #2d3436;
      border-bottom-right-radius: 20px;
    }
  }

  section {
    position: relative;

    &:before {
      display: block;
      content: '';
      width: 40px;
      height: 40px;
      position: absolute;
      top: -20px;
      left: -20px;
      border-top: 8px solid #2d3436;
      border-left: 8px solid #2d3436;
      border-top-left-radius: 20px;
    }

    &:after {
      display: block;
      content: '';
      width: 40px;
      height: 40px;
      position: absolute;
      top: -20px;
      right: -20px;
      border-top: 8px solid #2d3436;
      border-right: 7px solid #2d3436;
      border-top-right-radius: 20px;
    }
  }
`;

export const ModalFooter = styled.div`
  min-height: 60px;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;

  > button {
    width: 170px;
  }
`;

export const ProductList = styled.ul`
  list-style: none;
  margin-top: 30px;
  height: 80%;
  overflow: auto;
  align-self: stretch;

  li {
    border-top: 1px solid #dfe6e9;
    padding: 10px 0;

    &:last-child {
      border-bottom: 1px solid #dfe6e9;
    }
  }

  p {
    text-align: left;
  }
`;
