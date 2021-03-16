import styled from 'styled-components';
import { color } from '../../theme/variables';

export const ProductHerosStyled = styled.div`
  display: flex;
  width: 50%;
  border: 1px solid ${color.colorPrimary};
  padding: 20px;
  margin: 0 auto;
`;

export const ProductImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  & > img {
    display: block;
    width: 200px;
    height: 200px;
  }
`;

export const ProductDetail = styled.div`
  padding: 0 20px;
`;

export const Description = styled.div`
  padding-bottom: 10px;

  & > p {
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 15px;
    color: ${color.colorPrimary};
  }

  & > span {
    font-size: 16px;
    color: ${color.colorGreyLight3};
  }
`;
export const Price = styled.div`
  padding: 10px 0;
  border-top: 1px solid ${color.colorGreyLight4};
  border-bottom: 1px solid ${color.colorGreyLight4};

  & > p > span {
    color: ${color.colorGreyLight3};
  }
`;

export const Stock = styled.div`
  padding: 10px 0;
  border-bottom: 1px solid ${color.colorGreyLight4};
`;

export const AddToCart = styled.div`
  padding: 20px 0;
`;

export const Counter = styled.div`
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  & > button {
    padding: 8px 16px;
  }
`;
