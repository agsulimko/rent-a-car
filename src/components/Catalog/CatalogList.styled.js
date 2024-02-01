import styled from 'styled-components';
export const CardContainer = styled.div`
  display: flex;
  flex-flow: column wrap;
  gap: 20px;
  margin-top: 40px;
  align-items: center;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 16px;
  }
  @media screen and (min-width: 1440px) {
    width: 1300px;
    flex-basis: calc((100% - 64px) / 5);
  }
`;
