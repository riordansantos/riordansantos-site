import styled from "styled-components";
import theme from "../../styles/theme";
export const Container = styled.header`
  background: ${({theme}) => theme.color.primaryColor};
  padding: 2rem 0;
  padding-right: 2rem;
  color: ${({theme}) => theme.color.white};
  nav {
    display: flex;
    justify-content: flex-end;
    gap: 1.5rem;
    align-items: center;
    flex-wrap: wrap;
  }
  a {
    color: #fff;
    font-size: 1.375rem;
    position: relative;
    font-weight: 500;
    z-index: 1;
    text-decoration: none;
    :hover{
      color: ${({theme}) => theme.color.darkGrey};
      
    }
  }
  .active {
    z-index: 1;
  color: ${({theme}) => theme.color.darkGrey};
    
    @keyframes surgeMark {
      to {
        border-radius: 3px;
      }
    }
  }
`;
