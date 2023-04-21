import styled from "styled-components";
export const Container = styled.section`
  padding: 2rem 10%;
  background: ${({ theme }) => theme.color.bg};
  display: flex;
  @media(max-width: 768px){
    flex-direction: column-reverse;
    align-items: center;
    padding: 2rem 3%;
  }
`;
export const LeftContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;

  flex-direction: column;

  h1 {
    font-size: 3em;
    font-weight: 500;
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
  .animaLeft {
    opacity: 0;
    transform: translateX(-20px);
    animation: animaLeft 0.5s forwards;
  }
  @keyframes animaLeft {
    to {
      opacity: 1;
      transform: initial;
    }
  }
  @media(max-width: 768px){
    width: 90%;
    margin-top: 2rem;
  }
`;
export const RightContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  img {
    max-width: 300px;
    width: 250px;
    height: 320px;
    border-radius: 10%;
    &:hover {
      animation: noBorder 1s forwards;
      -webkit-animation-name: noBorder;
      animation-name: noBorder;
    }
  }
  @-webkit-keyframes noBorder {
    to {
      -webkit-border-radius: 1px;
    }
  }

  @keyframes noBorder {
    to {
      border-radius: 1px;
    }
  }

  .animaRight {
    opacity: 0;
    transform: translateX(20px);
    animation: animaRight 0.5s forwards;
  }
  @keyframes animaRight {
    to {
      opacity: 1;
      transform: initial;
    }
  }
`;
