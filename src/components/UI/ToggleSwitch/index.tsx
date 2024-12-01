import {
  Container,
  ToggleSwitchContainer,
  ToggleSwitchLabel,
  ToggleSwitchSpan,
  ToggleSwitchInput,
} from './styles';

import type { IToggleSwitchProps } from './types';

export const UiToggleSwitch = ({
  checked,
  labelLeft,
  labelRight,
  className,
  onChange,
}: IToggleSwitchProps) => (
  <Container className={className}>
    <ToggleSwitchLabel>{labelLeft}</ToggleSwitchLabel>

    <ToggleSwitchContainer className="switch">
      <ToggleSwitchInput
        type="checkbox"
        checked={checked}
        onChange={onChange}
      />
      <ToggleSwitchSpan className="switch-slider" />
    </ToggleSwitchContainer>

    <ToggleSwitchLabel>{labelRight}</ToggleSwitchLabel>
  </Container>
);
