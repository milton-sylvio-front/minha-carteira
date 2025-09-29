interface IRadioButtonOption {
  label: string;
  value: string | number;
  icon?: React.ReactNode; // Optional icon component
}

export interface IRadioButtonProps {
  name: string; // The 'name' attribute for the radio group
  options: IRadioButtonOption[]; // Array of radio button options
  selectedValue: string; // The currently selected value
  size?: 'sm' | 'md' | 'lg'; // Optional size prop
  onChange: (value: string) => void; // Callback for when a radio button is selected
}
