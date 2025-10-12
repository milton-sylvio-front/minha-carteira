import { useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';

import { ModalOverlay, ModalContainer } from './styles';
import type { IModalProps } from './types';

export const UiModal = ({
  children,
  closeOnOverlayClick = true,
  isOpen,
  onClose,
  size = 'md',
}: IModalProps) => {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) onClose();
    };

    document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <ModalOverlay
          as={motion.div}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeOnOverlayClick ? onClose : undefined}
        >
          <motion.div
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            initial={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <ModalContainer
              className="modal-content"
              onClick={(e) => e.stopPropagation()}
              size={size}
            >
              {children}
            </ModalContainer>
          </motion.div>
        </ModalOverlay>
      )}
    </AnimatePresence>
  );
};
