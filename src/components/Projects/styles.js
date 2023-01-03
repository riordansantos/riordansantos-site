import styled from "styled-components";

export const Container = styled.div`
  background: ${({theme}) => theme.color.bg};
  padding: 2rem 5vw;
  h2{
    text-align: center;
    font-size: 2rem;
    font-weight: 400;
    padding: 1.5rem 10%;
  }
  .cards{
    display: flex;
    column-gap: 1rem;
    display: flex;
    justify-content: center;
  }
`;
