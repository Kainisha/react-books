import React, { useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import cx from 'classnames';
import {
  toggleCartModal as toggleCartModalAction,
  deleteFromCart as deleteFromCartAction,
} from 'actions';
import CloseIcon from '@material-ui/icons/Close';
import CartItem from 'components/modal/cart/cartItem/CartItem';
import style from './Cart.module.scss';

const Cart = ({ isCartModalShow, toggleCartModal, deleteFromCart, cart }) => {
  const background = useRef(null);

  const listener = (event) => {
    if (!background.current.contains(event.target)) {
      return;
    }

    toggleCartModal(false);
  };

  useEffect(() => {
    document.addEventListener('mousedown', listener);

    return () => {
      document.removeEventListener('mousedown', listener);
    };
  });

  const modalClasses = cx(style.modal, { [style['modal--show']]: isCartModalShow });

  const hideModal = () => toggleCartModal(false);

  const handleDelete = (id) => {
    deleteFromCart(id);
  };

  return (
    <div className={modalClasses}>
      <div className={style.background} ref={background} />
      <div className={style.cart}>
        <div className={style.header}>
          <span className={cx(style.title, 'title is-4')}>Cart</span>
          <button className={style.close} type="button" onClick={hideModal}>
            <CloseIcon className={style.close__icon} />
          </button>
        </div>
        <div className={style.content}>
          {!cart.length ? (
            <div className={style.empty}>Empty cart</div>
          ) : (
            <div className={style.list}>
              {cart.map(({ id, image, author, title }) => (
                <CartItem
                  id={id}
                  image={image}
                  author={author}
                  title={title}
                  key={`cart-${id}`}
                  onDelete={handleDelete}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  const { isCartModalShow, cart } = state;
  return { isCartModalShow, cart };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleCartModal: (isShow) => dispatch(toggleCartModalAction(isShow)),
    deleteFromCart: (id) => dispatch(deleteFromCartAction(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
