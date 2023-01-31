import styled from "styled-components";
export const Container = styled.section`
  padding: 2rem 10%;
  background: ${({ theme }) => theme.color.bg};
  display: flex;
  height: 80vh;
  .contacts {
    display: flex;
    gap: 1rem;
    a {
      padding: 0.5rem 1.3rem;
      text-decoration: none;
      border-radius: 10px;
      border: solid 2px ${({ theme }) => theme.color.primaryColor};
      color: ${({ theme }) => theme.color.primaryColor};
      //max-width: max-content;
      &:hover {
        transform: scale(1.1);
        transition: 0.4s;
      }
      img{
        max-width: 40px;
      height: max-content;
      }
    }
    .whatsapp{
     display: flex;
     align-items: center;
     gap: 0.5rem;
    }
  }

  .courses {
    display: flex;
    .left,
    .right {
      text-align: center;
      p {
        border-left: solid 2px ${({ theme }) => theme.color.primaryColor};
        margin: 0.5rem;
        padding: 0.4rem;
        background: #cddef4;
      }
    }
  }
`;
export const LeftContainer = styled.div`
  //margin-top: -6rem;
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
`;
export const RightContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;

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
