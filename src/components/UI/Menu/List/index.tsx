import { useEffect, useRef } from 'react';
import type { IUiMenuList } from './types';
import { Container } from './styles';

export const UiMenuList = ({
  children,
  isOpen,
  onClose,
  ...rest
}: IUiMenuList) => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!isOpen) return;

    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        onClose?.();
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  return (
    <Container display={isOpen ? 'flex' : 'none'} ref={ref} {...rest}>
      {children}
    </Container>
  );
};
