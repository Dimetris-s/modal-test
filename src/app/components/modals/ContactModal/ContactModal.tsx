import React, { FC, useCallback, useState } from 'react';
import cn from 'classnames';
import styles from './ContactModal.module.scss';
import { Input } from '../../common/Input';
import { Modal, ModalProps } from '../../common/Modal';
import { Button } from '../../common/Button';
import { Select } from '../../common/Select';
import { countries, cities } from './data';

const initialData = {
  name: '',
  lastname: '',
  email: '',
  country: '',
  city: '',
  address: '',
};

interface ContactModalProps extends ModalProps {
}

export const ContactModal: FC<ContactModalProps> = ({ isOpen, onClose, className }) => {
  const [data, setData] = useState(initialData);

  const changeHandler = useCallback(({ name, value }: { name: string, value: string }) => {
    setData(prev => ({ ...prev, [name]: value }));
  }, [setData]);

  const checkout = useCallback(() => {
    onClose?.();
    alert(JSON.stringify(data, null, 2));
    setData(initialData);
  }, [onClose, setData, data]);

  return (
    <Modal className={styles.modal} isOpen={isOpen} onClose={onClose}>
      <div className={cn(styles.root, className)}>
        <div className={styles.header}>
          <h2>
            Contact form
          </h2>
        </div>
        <div className={styles.body}>
          <div className={styles.row}>
            <Input onChange={changeHandler} value={data.name} name="name" label="Name" />
            <Input onChange={changeHandler} value={data.lastname} name="lastname" label="Last Name" />
          </div>
          <div className={styles.row}>
            <Input onChange={changeHandler} value={data.email} name="email" type="email" label="Email" />
          </div>
          <div className={styles.row}>
            <Select options={countries} onChange={changeHandler} value={data.country} name="country" label="Country" />
            <Select options={cities} onChange={changeHandler} value={data.city} name="city" label="City" />
            <Input onChange={changeHandler} value={data.address} name="address" label="Address" />
          </div>
        </div>
        <div className={styles.footer}>
          <Button onClick={checkout}>Checkout</Button>
        </div>
      </div>
    </Modal>
  );
};
