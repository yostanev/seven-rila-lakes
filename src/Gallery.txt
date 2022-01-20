import React from 'react'
import ImageGallery from 'react-image-gallery';
import "../node_modules/react-image-gallery/styles/css/image-gallery.css";
import B1 from './assets/b1.jpg';
import B2 from './assets/b2.jpg';
import B3 from './assets/b3.jpg';
import B4 from './assets/b4.jpeg';
import B5 from './assets/b5.jpg';

const images = [
  {
    original: B1,
    thumbnail: B1,
  },
  {
    original: B2,
    thumbnail: B2,
  },
  {
    original: B3,
    thumbnail: B3,
  },
  {
    original: B4,
    thumbnail: B4,
  },
  {
    original: B5,
    thumbnail: B5,
  },
];

class MyGallery extends React.Component {
  render() {
    return <ImageGallery items={images} />;
  }
}

export const Gallery = () => (
<MyGallery />
)
