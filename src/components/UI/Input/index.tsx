import { useRef } from 'react';

import { Container } from './styles';
import type { IInputProps } from './types';

export const UiInput = ({
  icon: Icon,
  maskInput: MaskInput,
  inputSize = 'md',
  className = '',
  ...rest
}: IInputProps) => {
  const getIcon = !!Icon;
  const inputRef = useRef(null);

  const setClassName = `${className} input-${inputSize}`;

  return (
    <Container showIcon={getIcon}>
      {Icon && <Icon />}
      {!MaskInput ? (
        <input ref={inputRef} className={setClassName} {...rest} />
      ) : (
        <MaskInput className={setClassName} {...rest} />
      )}
    </Container>
  );
};
