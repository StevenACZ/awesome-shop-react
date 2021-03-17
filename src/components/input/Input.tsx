// React
import React, { forwardRef, InputHTMLAttributes, Ref } from 'react';

// Styles
import { InputStyled, Error } from './Styles';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  type?: string;
}

const Input = forwardRef(
  (
    { label, error, type = 'text', ...props }: Props,
    ref: Ref<HTMLInputElement>
  ) => {
    return (
      <InputStyled>
        <p>{label}</p>
        <input type={type} {...props} ref={ref} />
        {error && <Error>{error}</Error>}
      </InputStyled>
    );
  }
);

export default Input;
