import React, { useCallback, useRef, HTMLAttributes, MouseEvent } from 'react';
import { useTransition } from 'react-spring';

import { ContainerBackdrop, Container } from './styles';

interface PopupProps extends HTMLAttributes<HTMLDivElement> {
  show: boolean;
  onClose: Function;
}

const Popup: React.FC<PopupProps> = ({ children, show, onClose }) => {
  const containerRef = useRef(null);

  const transitions = useTransition(show, null, {
    from: { transform: 'scale(0)' },
    enter: { transform: 'scale(1)' },
    leave: { transform: 'scale(0)' },
  });

  const handleClose = useCallback(
    (event: MouseEvent) => {
      event.stopPropagation();

      if (event.target === containerRef.current) {
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
            <ContainerBackdrop key={key} onClick={handleClose}>
              <Container ref={containerRef} style={props}>
                {children}
              </Container>
            </ContainerBackdrop>
          ),
      )}
    </>
  );
};

export default Popup;
