import { Gallery } from './ImageGallery.styles';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

const ImageGallery = ({photos}) => (
  <Gallery>
    {photos !== null && photos.map(({ webformatURL, id, tags }) => (
      <ImageGalleryItem data-id={id} tags={tags} smallUrl={webformatURL} />
    ))}
  </Gallery>
);

export default ImageGallery;
