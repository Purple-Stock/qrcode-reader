import styled from 'styled-components';
import { animated } from 'react-spring';

export const ContainerBackdrop = styled.div`
  height: 100vh;
  width: 100vw;
  background: rgba(0, 0, 0, 0.6);
  position: fixed;
  top: 0;
  left: 0;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled(animated.div)`
  height: 150px;
  width: 300px;
  padding: 30px 0;
  background: #fff;
  border-radius: 24px;
  z-index: 10;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  > button {
    display: flex;
    align-items: center;

    svg {
      margin-left: 10px;
    }
  }
`;
