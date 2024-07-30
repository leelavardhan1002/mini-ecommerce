export interface Option {
  image: string;
  name: string;
  quantity: number;
}

export interface DropdownProps {
  options: Option[];
  label?: string;
  title?: string;
  Icon?: React.ElementType;
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
