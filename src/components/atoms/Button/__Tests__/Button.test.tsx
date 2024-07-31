import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { FaRegHeart } from 'react-icons/fa';
import Button from '../../Button';

describe('Button', () => {
  test('renders with text', () => {
    render(<Button text="Click me" />);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  test('renders an icon when provided', () => {
    render(<Button Icon={FaRegHeart} />);
    expect(screen.getByTestId('icon')).toBeInTheDocument();
  });

  test('handles onClick event', () => {
    const handleClick = jest.fn();
    render(<Button text="Clickable" onClick={handleClick} />);
    fireEvent.click(screen.getByText('Clickable'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
