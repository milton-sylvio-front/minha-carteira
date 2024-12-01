import { Container } from './styles';
import type { IDropdownProps } from './types';

export const UiDropdown = ({
  defaultValue,
  id,
  onChange,
  options,
  required,
  ...rest
}: IDropdownProps) => (
  <Container
    id={id}
    onChange={onChange}
    defaultValue={defaultValue}
    required={required}
    className="dropdown"
    {...rest}
  >
    {options.map((option) => (
      <option key={option.value} value={option.value}>
        {option.label}
      </option>
    ))}
  </Container>
);
