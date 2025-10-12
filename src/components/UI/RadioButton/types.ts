interface IRadioButtonOption {
  label: string;
  value: string | number;
  icon?: React.ReactNode; // Optional icon component
}

export type IRadioButtonSize = 'sm' | 'md' | 'lg';

export interface IRadioButtonProps {
  name: string; // The 'name' attribute for the radio group
  options: IRadioButtonOption[]; // Array of radio button options
  selectedValue: string; // The currently selected value
  size?: IRadioButtonSize; // Optional size prop
  onChange: (value: string) => void; // Callback for when a radio button is selected
  className?: string;
  key?: string | number;
  disabled?: boolean;
}
