import React from 'react';
import PropTypes from 'prop-types';
import DeleteIcon from '@material-ui/icons/Delete';
import LazyImage from 'components/images/lazyImage/LazyImage';
import cx from 'classnames';
import style from './CartItem.module.scss';

const CartItem = ({ id, image, title, author, onDelete }) => {
  const handleDelete = () => {
    onDelete(id);
  };

  return (
    <div className={cx(style.item)}>
      <div className={style.image}>
        <LazyImage src={image} effect="blur" height="3rem" />
      </div>
      <div className={style.info}>
        <p className="title is-6">{title}</p>
        <p className="is-6">{author}</p>
      </div>
      <div className={style.delete}>
        <button type="button" onClick={handleDelete}>
          <DeleteIcon />
        </button>
      </div>
    </div>
  );
};

CartItem.propTypes = {
  id: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default CartItem;
