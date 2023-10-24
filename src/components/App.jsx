import { Component } from 'react';

import { Searchbar, ImageGallery } from 'components/';

class App extends Component {
  state = {
    hit: null,
  };

  componentDidMount() {
    fetch(
      'https://pixabay.com/api/?q=cat&page=1&key=39440146-e742bf3c7a957201e6286a658&image_type=photo&orientation=horizontal&per_page=12'
    )
      .then(res => res.json())
      .then(hit => this.setState({ hit }));
  }
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
        {/* <Modal /> */}
      </div>
    );
  }
}

export default App;
