import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(256, 256, 256, 0.7);
  z-index: 1200;
`;

  export const ModalImage = styled.div`
    max-width: 98vh;
    max-height: 98vh;
  `;
