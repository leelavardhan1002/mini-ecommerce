export interface Option {
  name: string;
  image?: string;
  quantity?: number;
  optionOnClick?: () => void;
}

export interface Product {
  name: string;
  price: number;
  description: string;
  image: string;
  quantity: number;
  category: string;
  rating: number;
  totalReviews: number;
}

export interface ButtonProps {
  text?: string;
  Icon?: React.ElementType;
  variant?: "solid" | "outline";
  onClick?: () => void;
  className?: string;
  type?: string;
}

export interface DropdownProps {
  options: Option[];
  label: string;
  title: string;
  Icon?: React.ElementType;
  dropdownWidth?: string;
}

export interface FormInputProps {
  id: string;
  label: string;
  type: string;
  placeholder?: string;
}

export interface FormProps {
  inputs: FormInputProps[];
  buttonText: string;
  onSubmit: (formData: { [key: string]: string }) => void;
}

export interface InputProps {
  id: string;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
  type: string;
  placeholder?: string;
}

export interface PillProps {
  label: string;
  isSelected: boolean;
  onClick: (label: string) => void;
  onSelect: (label: string) => void;
}

export interface ProductCardProps {
  name: string;
  price: number;
  description: string;
  image: string;
  rating: number;
  reviews: number;
  onAddToCart: () => void;
}

export interface LoginProps {
  formInputs: {
    id: string;
    label: string;
    type: string;
    placeholder?: string;
  }[];
  onSubmit: (formData: { [key: string]: string }) => void;
  handleBack: () => void;
}

export interface SignupProps {
  formInputs: {
    id: string;
    label: string;
    type: string;
    placeholder?: string;
  }[];
  onSubmit: (formData: { [key: string]: string }) => void;
  handleBack: () => void;
}