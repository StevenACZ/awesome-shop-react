// React
import React from 'react';
import Button from '../../button/Button';

// Styles
import { SignupStyled, Form, LabelInput } from './Styles';

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
          <input type="text" placeholder="Your user name" />
        </LabelInput>
        <LabelInput>
          <p>Email</p>
          <input type="text" placeholder="Your email" />
        </LabelInput>
        <LabelInput>
          <p>Password</p>
          <input type="text" placeholder="Your password" />
        </LabelInput>
        <Button width="100%">Submit</Button>
      </Form>
    </SignupStyled>
  );
};

export default Signup;
