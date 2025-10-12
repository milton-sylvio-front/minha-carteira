import type { IRadioButtonProps } from './types';
import { Label, Radio } from './styles';

export const UiRadioButton = ({
  disabled = false,
  name,
  options,
  selectedValue,
  size = 'sm',
  onChange,
}: IRadioButtonProps) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <>
      {options.map((option, i) => (
        <Label
          className={`${disabled && 'disabled'} ${size} ${selectedValue === option.value ? 'active' : ''}`}
          key={i}
        >
          <Radio
            type="radio"
            name={name}
            value={option.value}
            checked={selectedValue === option.value}
            onChange={handleChange}
          />
          {option?.icon}
          {option.label}
        </Label>
      ))}
    </>
  );
};
