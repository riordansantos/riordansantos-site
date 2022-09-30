import styled from "styled-components";
import theme from "../../styles/theme";
export const Container = styled.section`
  padding: 1rem 10%;
  background: ${({ theme }) => theme.color.bg};
  display: flex;
`;
export const LeftContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;

  flex-direction: column;

  h1 {
    font-size: 3em;
    font-weight: 500 ;
  }
  p {
    text-align: left;
    margin: 1rem 0rem;
  }
  li {
    margin-bottom: 0.3rem;
  }

  ul {
    list-style: none;

    li {
        display: flex;
      &:before {
        content: "";
        display: block;
        margin-top: 0.25rem;
        width: 0.5rem;
        height: 0.5rem;
        margin-right: 0.5rem;
        background: ${({ theme }) => theme.color.secondaryColor};
      }
    }
    
  }
`;
export const RightContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: flex-end;
  img {
    max-width: 300px;
    border-radius: 50%;
  }
`;
