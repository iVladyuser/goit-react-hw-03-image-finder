import { Component } from 'react';
import { Overlay, ModalImage } from './Modal.styles';

class Modal extends Component {
  state = {};
  render() {
    return (
      <Overlay>
        <ModalImage>
          <img src="" alt="" />
        </ModalImage>
      </Overlay>
    );
  }
}

export default Modal;
