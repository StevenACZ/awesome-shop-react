import styled from 'styled-components';
import { color } from '../../../theme/variables';

interface Props {
  active: boolean;
}

export const SignupStyled = styled.div<Props>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.4);
  display: ${(p) => (p.active ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
`;

export const Form = styled.form`
  max-width: 350px;
  width: 350px;
  background-color: ${color.colorWhite};

  padding: 30px 30px;

  & > h3 {
    text-align: center;
    margin-bottom: 20px;
    color: ${color.colorPrimary};
    font-size: 20px;
    font-weight: 600;
  }
`;
