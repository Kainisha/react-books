import React from 'react';
import LazyImage from 'components/images/lazyImage/LazyImage';
import cx from 'classnames';
import style from './Box.module.scss';

const Box = ({ image, title, author }) => (
  <div className={cx('box', 'has-background-white', style.box)}>
    <article className="media">
      <div className="media-left">
        <figure className={cx('image', 'is-64x64', style.image)}>
          <LazyImage src={image} effect="blur" height="64px" />
        </figure>
      </div>
      <div className="media-content">
        <div className="content">
          <p>
            <strong>{title}</strong>
            <br />
            {author}
          </p>
        </div>
      </div>
    </article>
  </div>
);

export default Box;
