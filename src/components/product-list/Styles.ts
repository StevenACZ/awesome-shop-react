import styled from 'styled-components';

export const ProductListStyled = styled.ul`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-auto-rows: 400px;
  grid-column-gap: 40px;
  grid-row-gap: 40px;
`;
