// React
import React from 'react';

// React Hook Form
import { useForm } from 'react-hook-form';

// Styles
import { SignupStyled, Form } from './Styles';

// Components
import Button from '../../button/Button';
import Input from '../../input/Input';

interface Props {
  active: boolean;
}

const Signup: React.FC<Props> = ({ active }) => {
  const { register, errors, handleSubmit } = useForm<{
    username: string;
    email: string;
    password: string;
  }>();

  const handleSignup = handleSubmit((data) => {
    console.log(data);
  });

  return (
    <SignupStyled active={active}>
      <Form onSubmit={handleSignup}>
        <h3>Sign up to AwesomeShop</h3>
        <Input
          name="username"
          label="Username"
          placeholder="Your username"
          error={errors.username?.message}
          ref={register({
            required: 'Username is required',
            minLength: {
              value: 3,
              message: 'Username must be at least 3 characters',
            },
            maxLength: {
              value: 20,
              message: 'Username must not be greater than 20 characters',
            },
          })}
        />
        <Input
          name="email"
          label="Email"
          placeholder="Your email"
          error={errors.email?.message}
          ref={register({
            required: 'Email is required',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Email is in wrong format',
            },
          })}
        />
        <Input
          name="password"
          label="Password"
          placeholder="Your password"
          error={errors.password?.message}
          ref={register({
            required: 'Password is required',
            minLength: {
              value: 6,
              message: 'Password must be at least 6 characters',
            },
            maxLength: {
              value: 50,
              message: 'Password must not be greater than 50 characters',
            },
          })}
        />
        <Button width="100%">Submit</Button>
      </Form>
    </SignupStyled>
  );
};

export default Signup;
