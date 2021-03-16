// React
import React, { ButtonHTMLAttributes, forwardRef, Ref } from 'react';

// Styles
import { ButtonStyled } from './Styles';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  height?: string;
  width?: string;
  loading?: boolean;
  spinnerColor?: string;
  spinnerHeight?: number;
  spinnerWidth?: number;
}

const Button = forwardRef(
  (
    { children, disabled, height = '2.7rem', width = '9rem', loading }: Props,
    ref: Ref<HTMLButtonElement>
  ) => {
    return (
      <ButtonStyled
        ref={ref}
        disabled={disabled}
        height={height}
        width={width}
        loading={loading}
      >
        {children}
      </ButtonStyled>
    );
  }
);

export default Button;
