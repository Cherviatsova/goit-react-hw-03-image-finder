import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import React from 'react';
import { ImageGalleryList } from './ImageGallery.styled';
import PropTypes from 'prop-types';

export default function ImageGallery({ images, onClickImage }) {
  return (
    <ImageGalleryList>
      {images.map(({ id, webformatURL, largeImageURL, alt }) => (
        <ImageGalleryItem
          key={id}
          src={webformatURL}
          alt={alt}
          largeImageURL={largeImageURL}
          onClickImage={onClickImage}
        ></ImageGalleryItem>
      ))}
    </ImageGalleryList>
  );
}

ImageGallery.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
  onClickImage: PropTypes.func.isRequired,
};
