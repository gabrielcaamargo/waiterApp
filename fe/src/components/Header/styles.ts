import styled from 'styled-components';

export const Container = styled.header`
  background-color: #D73035;
  height: 198px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 1216px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .page-details {
    h1 {
      color: #FFF;
      font-size: 32px;
    }

    h2 {
      color: #FFF;
      font-weight: 400;
      font-size: 16px;
      opacity: 0.9;
      margin-top: 6px;
    }
  }
`;
