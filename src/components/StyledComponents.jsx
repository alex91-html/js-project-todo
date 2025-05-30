import styled from 'styled-components';

export const MainContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background: ${({ theme }) => theme === 'dark' ? '#23272f' : '#fff'};
  display: flex;
  flex-direction: column;
  padding: 0;

  @media (min-width: 1024px) {
    max-width: 600px;
    min-height: 90vh;
    margin: 40px auto;
    border-radius: 32px;
    box-shadow: 0 8px 32px rgba(0,0,0,0.08);
    position: relative;
  }
`;