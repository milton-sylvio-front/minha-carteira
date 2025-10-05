import Spinner from '../Spinner';

import type { IButtonProps } from './types';
import { ButtonIcon, Container } from './styles';

export const UiButton = ({
  borderRadius = 'md',
  children,
  fullWidth,
  icon,
  leftIcon,
  rightIcon,
  isLoading = false,
  variant = 'primary',
  ...rest
}: IButtonProps) => {
  const ButtonContent = () => (
    <>
      {leftIcon && !rightIcon && <ButtonIcon mr={2}>{leftIcon}</ButtonIcon>}
      {children}
      {rightIcon && !leftIcon && <ButtonIcon ml={2}>{rightIcon}</ButtonIcon>}
    </>
  );

  return (
    <Container
      borderRadius={borderRadius}
      fullWidth={fullWidth}
      variant={variant}
      {...rest}
    >
      {icon}
      {isLoading ? <Spinner /> : <ButtonContent />}
    </Container>
  );
};
