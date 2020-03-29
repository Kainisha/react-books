import React from 'react';
import styled from 'styled-components';
import ButtonIcon from 'components/buttons/ButtonIcon';

const BoxButtonsStyled = styled.div`
  width: 100%;
  height: 2rem;
  display: flex;
  justify-content: flex-end;
`;

const BoxButtons = ({ onCartClick, onWhishlistClick }) => (
  <BoxButtonsStyled>
    <ButtonIcon whishlist onClick={onWhishlistClick} />
    <ButtonIcon cart onClick={onCartClick} />
  </BoxButtonsStyled>
);

export default BoxButtons;
