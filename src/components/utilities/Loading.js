import React from 'react';
import styled, { keyframes } from 'styled-components';
import AutorenewIcon from '@material-ui/icons/Autorenew';

const rotate = keyframes`
    100% {
        transform: rotate(360deg);
    }
`;

const LoadingWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(10, 10, 10, 0.86);
  z-index: 1500;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const IconWrapper = styled.div`
  svg {
    animation: ${rotate} 2s infinite;
    font-size: 5rem;
  }
`;

const Loading = () => (
  <LoadingWrapper>
    <IconWrapper>
      <AutorenewIcon />
    </IconWrapper>
  </LoadingWrapper>
);

export default Loading;
