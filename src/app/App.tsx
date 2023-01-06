import React from 'react';
import { CartModal } from './components/modals/CartModal';
import { cartItems } from './components/modals/CartModal/data';
import { ContactModal } from './components/modals/ContactModal';
import { useModal } from './hooks/useModal';
import { Button } from './components/common/Button';
import styles from './App.module.scss';


export const App = () => {
  const cartModal = useModal();
  const contactModal = useModal();
  return (
    <div className={styles.root}>
      <div className={styles.buttons}>
        <Button onClick={cartModal.open}>Cart</Button>
        <Button onClick={contactModal.open}>Contact</Button>
      </div>
      <ContactModal isOpen={contactModal.isOpen} onClose={contactModal.close} />
      <CartModal items={cartItems} isOpen={cartModal.isOpen} onClose={cartModal.close} />
    </div>
  );
};
