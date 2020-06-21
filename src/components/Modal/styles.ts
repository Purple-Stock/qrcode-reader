import styled from 'styled-components';
import { animated } from 'react-spring';

export const ContainerBackdrop = styled.div`
  height: 100vh;
  width: 100vw;
  position: absolute;
`;

export const Container = styled(animated.div)`
  height: 90vh;
  width: 100vw;
  background: #fff;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  padding: 30px 20px 0;
  position: absolute;
  bottom: 0;

  display: flex;
  flex-direction: column;
  align-items: center;
`;
