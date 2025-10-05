import { useRef, useEffect } from 'react';

import { Container as Button } from '@/components/UI/Button/styles';

import type { IMenuButtonProps } from './types';

export const UiMenuButton = ({
  as: As,
  children,
  onTogglePosition,
  ...rest
}: IMenuButtonProps) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const Element = As || Button;

  useEffect(() => {
    const updateMenuPosition = () => {
      if (buttonRef.current) {
        const { bottom } = buttonRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        if (onTogglePosition) {
          onTogglePosition('bottom');

          if (windowHeight - bottom < 100) {
            onTogglePosition('top');
          }
        }
      }
    };

    updateMenuPosition();
    window.addEventListener('resize', updateMenuPosition);

    return () => {
      window.removeEventListener('resize', updateMenuPosition);
    };
  }, [onTogglePosition]);

  return (
    <Element
      position="relative"
      onClick={onTogglePosition}
      ref={buttonRef}
      {...rest}
    >
      <span>{children}</span>
    </Element>
  );
};
