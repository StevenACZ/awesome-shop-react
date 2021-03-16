import styled from 'styled-components';
import { color } from '../../../theme/variables';

export const HeaderStyled = styled.header`
  display: flex;
  padding: 0 30px;
  justify-content: space-between;
  align-items: center;
  background-color: ${color.colorBlack};
  height: 72px;

  & > a {
    text-decoration: none;
    color: white;
    padding: 5px 20px;
    background-color: ${color.colorGreyLight3};
    cursor: pointer;
    border: 1px solid transparent;

    &.active {
      background-color: ${color.colorPrimary};
      border: 1px solid ${color.colorGreyLight1};
    }
  }
`;
