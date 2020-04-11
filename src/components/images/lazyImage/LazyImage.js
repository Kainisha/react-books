import React from 'react';
import PropTypes from 'prop-types';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import style from './LazyImage.module.scss';

const LazyImage = ({ src, height, effect }) => (
  <LazyLoadImage wrapperClassName={style.image} src={src} height={height} effect={effect} />
);

LazyImage.propTypes = {
  src: PropTypes.string.isRequired,
  height: PropTypes.string,
  effect: PropTypes.string,
};

LazyImage.defaultProps = {
  height: 'auto',
  effect: '',
};

export default LazyImage;
