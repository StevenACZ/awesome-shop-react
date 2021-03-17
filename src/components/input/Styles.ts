import styled from 'styled-components';
import { color } from '../../theme/variables';

export const InputStyled = styled.label`
  display: block;
  width: 100%;
  margin-bottom: 14px;

  & > p {
    margin-bottom: 5px;
  }

  & > input {
    outline: none;
    width: 100%;
    padding: 10px 0 10px 10px;
  }
`;

export const Error = styled.p`
  margin-top: 6px;
  color: ${color.colorGreyLight5};
`;
