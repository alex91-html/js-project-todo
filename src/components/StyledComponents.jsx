import styled from 'styled-components';

export const MainContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background: #f7f8fa;
  display: flex;
  flex-direction: column;
  padding: 0;

  @media (min-width: 700px) {
    padding: 40px 0;
  }

  @media (min-width: 1024px) {
    max-width: 600px;
    margin: 40px auto;
    border-radius: 32px;
    background: #fff;
    box-shadow: 0 8px 32px rgba(0,0,0,0.08);
    padding: 48px 0;
  }
`;