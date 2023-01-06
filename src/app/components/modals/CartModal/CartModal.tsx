import React, { FC } from 'react';
import cn from 'classnames';
import styles from './CartModal.module.scss';
import { Modal, ModalProps } from '../../common/Modal';
import { CartItem } from './data';
import { Button } from '../../common/Button';
import { uah } from '../../../utils/currency';

interface CartModalProps extends ModalProps {
  items: CartItem[];
}

export const CartModal: FC<CartModalProps> = (
  {
    className,
    onClose,
    isOpen,
    items = [],
  }) => {

  const totalPrice = items.reduce((acc, item) => acc + item.price * item.count, 0)
  return (
    <Modal isOpen={isOpen} onClose={onClose} className={styles.modal}>
      <div className={cn(styles.root, className)}>
        <header className={styles.header}>
          <h3>Кошик</h3>
        </header>
        <div className={styles.body}>
          <ul className={styles.cartList}>
            {
              items.map(({ count, price, id, name }) => (
                <li key={id} className={styles.cartItem}>
                  <span>{id}. {name}. Ціна: {uah(price)}</span> <span>{count}шт.</span>
                </li>
              ))
            }
          </ul>
        </div>
        <footer className={styles.footer}>
          <span className={styles.total}>
            Всього до сплати: {uah(totalPrice)}
          </span>
          <Button className={styles.btn} onClick={onClose}>Сплатити</Button>
        </footer>
      </div>
    </Modal>
  );
};
