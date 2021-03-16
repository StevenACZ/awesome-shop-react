import styled from 'styled-components';
import { color } from '../../../theme/variables';

export const ProductItemStyled = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  cursor: pointer;
  box-shadow: -1px 0px 9px -5px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: -1px 0px 9px -5px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: -1px 0px 9px -5px rgba(0, 0, 0, 0.75);
  transition: 400ms ease-out;

  &:hover {
    box-shadow: -1px 0px 9px 0px rgba(0, 0, 0, 0.75);
    -webkit-box-shadow: -1px 0px 9px 0px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: -1px 0px 9px 0px rgba(0, 0, 0, 0.75);
  }
`;

export const Top = styled.div`
  width: 200px;
  height: 200px;

  & > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const Bottom = styled.div`
  margin-top: 25px;
  text-align: center;

  & > p {
    font-size: 24px;
    color: ${color.colorPrimary};
  }

  & > span {
    display: block;
    margin-top: 14px;
    font-size: 24px;
    color: ${color.colorGreyLight3};
  }
`;
