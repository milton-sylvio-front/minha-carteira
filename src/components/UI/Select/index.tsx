import { Container } from './styles';
import type { ISelect } from './types';

export const UiSelect = ({ options, required, defaultValue }: ISelect) => (
  <Container
    defaultValue={defaultValue}
    required={required}
    className="dropdown"
  >
    {options.map((option) => (
      <option key={option.value} value={option.value}>
        {option.label}
      </option>
    ))}
  </Container>
);
