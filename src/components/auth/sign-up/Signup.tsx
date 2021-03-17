// React
import React from 'react';

// Styles
import { SignupStyled, Form, LabelInput } from './Styles';

// Components
import Button from '../../button/Button';

interface Props {
  active: boolean;
}

const Signup: React.FC<Props> = ({ active }) => {
  return (
    <SignupStyled active={active}>
      <Form>
        <h3>Sign up to AwesomeShop</h3>
        <LabelInput>
          <p>Username</p>
          <input type="text" name="username" placeholder="Your username" />
        </LabelInput>
        <LabelInput>
          <p>Email</p>
          <input type="text" name="email" placeholder="Your email" />
        </LabelInput>
        <LabelInput>
          <p>Password</p>
          <input type="text" name="password" placeholder="Your password" />
        </LabelInput>
        <Button width="100%">Submit</Button>
      </Form>
    </SignupStyled>
  );
};

export default Signup;
