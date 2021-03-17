// React
import React, { ButtonHTMLAttributes, forwardRef, Ref } from 'react';
import Spinner from '../spinner/Spinner';

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
    {
      children,
      disabled,
      height = '2.7rem',
      width = '9rem',
      loading,
      spinnerColor,
      spinnerHeight,
      spinnerWidth,
      ...props
    }: Props,
    ref: Ref<HTMLButtonElement>
  ) => {
    return (
      <ButtonStyled
        ref={ref}
        disabled={disabled}
        height={height}
        width={width}
        loading={loading}
        {...props}
      >
        {loading ? (
          <Spinner
            color={spinnerColor}
            height={spinnerHeight}
            width={spinnerWidth}
          />
        ) : (
          children
        )}
      </ButtonStyled>
    );
  }
);

export default Button;
