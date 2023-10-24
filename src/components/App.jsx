import { Component } from 'react';

import { Searchbar, ImageGallery, Modal } from 'components/';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  render() {
    return (
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gridGap: '16px',
          paddingBottom: '24px',
        }}
      >
        <Searchbar />
        <ImageGallery />
        <Modal />
      </div>
    );
  }
}

export default App;
