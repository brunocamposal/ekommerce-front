import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  max-width: 100vw;
  display: flex;
  justify-content: center;
  flex-direction: column;

  .MuiAppBar-positionFixed {
    position: inherit;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-grow: 3;
`;
