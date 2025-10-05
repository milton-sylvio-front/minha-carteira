import { useState, useRef, useEffect } from 'react';

import type { IDropdownProps, IDropdownPosition } from './types';
import { DropdownContainer, DropdownButton, DropdownMenu } from './styles';

// export const UiDropdown = ({
//   defaultValue,
//   id,
//   onChange,
//   options,
//   required,
//   ...rest
// }: IDropdownProps) => (
//   <Container
//     id={id}
//     onChange={onChange}
//     defaultValue={defaultValue}
//     required={required}
//     className="dropdown"
//     {...rest}
//   >
//     {options.map((option) => (
//       <option key={option.value} value={option.value}>
//         {option.label}
//       </option>
//     ))}
//   </Container>
// );
export const UiDropdown = ({
  buttonText,
  children,
  icon,
  isOpen,
  onToggle,
  position = 'bottom',
}: IDropdownProps) => {
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [menuPosition, setMenuPosition] = useState<IDropdownPosition>(position);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsFocused(isOpen);

    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsFocused(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  useEffect(() => {
    const updateMenuPosition = () => {
      if (buttonRef.current) {
        const { bottom } = buttonRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        setMenuPosition('bottom');

        if (windowHeight - bottom < 100) {
          setMenuPosition('top');
        }
      }
    };

    updateMenuPosition();
    window.addEventListener('resize', updateMenuPosition);

    return () => {
      window.removeEventListener('resize', updateMenuPosition);
    };
  }, [isOpen]);

  return (
    <DropdownContainer>
      <DropdownButton ref={buttonRef} onClick={onToggle} type="button">
        {icon ?? buttonText}
      </DropdownButton>
      {isFocused && (
        <DropdownMenu ref={menuRef} position={menuPosition} isOpen={isFocused}>
          {children}
        </DropdownMenu>
      )}
    </DropdownContainer>
  );
};
