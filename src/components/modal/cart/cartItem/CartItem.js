import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import cx from 'classnames';
import style from './CartItem.module.scss';

const CartItem = ({ id, image, title, author, onDelete }) => {
  const handleDelete = () => {
    onDelete(id);
  };

  return (
    <div className={cx(style.item)}>
      <div className={style.image}>
        <img src={image} alt="" />
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

export default CartItem;
