import React, { FC, ReactNode, useCallback, useEffect, useRef, useState } from 'react';
import cn from 'classnames';
import styles from './Modal.module.scss';
import { Portal } from '../Portal';

export interface ModalProps {
  isOpen: boolean;
  className?: string;
  children?: ReactNode;
  onClose?: () => void;
}

const ANIMATION_DELAY = 200;

export const Modal: FC<ModalProps> = ({isOpen, onClose, className, children}) => {
  const [isClosing, setIsClosing] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>();
  const contentClickHandler = (e: React.MouseEvent) => {
    e.stopPropagation();
  };
  const closeHandler = useCallback(() => {
    if (onClose) {
      setIsClosing(true);
      timeoutRef.current = setTimeout(() => {
        onClose();
        setIsClosing(false);
      }, ANIMATION_DELAY);
    }
  }, [onClose]);
  const onKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      closeHandler();
    }
  }, [closeHandler]);
  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keyup', onKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'initial';
    }
    return () => {
      clearTimeout(timeoutRef.current);
      window.removeEventListener('keyup', onKeyDown);
    };
  }, [isOpen, onKeyDown]);

  const cls = cn(
    styles.root,
    {
      [styles.opened]: isOpen,
      [styles.closing]: isClosing,
    })

  return (
    <Portal>
      <div className={cls}>
        <div className={styles.overlay} onMouseDown={closeHandler}>
          <div className={cn(styles.content, className)} onMouseDown={contentClickHandler}>
            {children}
          </div>
        </div>
      </div>
    </Portal>
  );
};
