import { useEffect, useRef, useState } from 'react';

import type { IUiMenuList } from './types';
import { Container } from './styles';

export const UiMenuList = ({
  children,
  isOpen,
  position = 'bottom',
  ...rest
}: IUiMenuList) => {
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsFocused(isOpen);

    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsFocused(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    isFocused && (
      <Container
        id="menu-list"
        ref={ref}
        position={position}
        isOpen={isOpen}
        {...rest}
      >
        {children}
      </Container>
    )
  );
};
