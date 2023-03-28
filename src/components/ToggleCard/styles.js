import styled from "styled-components";

export const Card = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin: 1rem 0rem;
  button {
    width: 20vw;
    padding: 0.5rem 1.3rem;
    border: none;
    border-radius: 10px;
    background-color: ${({theme}) => theme.color.primaryColor};
    color: ${({theme}) => theme.color.white};
    //max-width: max-content;
    &:hover{
        transform: scale(1.1);
        transition: 0.4s;
    }
    &.pai{
        font-size: 1.5vw;
    }
  }
  .card{
   
    margin-top: 1rem;
    padding: 1rem;
    border-radius: 10px;
  }

  h2{
    font-size: 1.8rem;
    border-bottom: solid 2px ${({theme}) => theme.color.primaryColor};
    max-width: max-content;
    text-align: center;
    padding-bottom: 0.4rem;
    margin-bottom: 0.6rem;
  }
  .title{
    display: flex;
    justify-content: center;
  }
  #lineBigger{
    line-height: 1.3rem;
   
  }

`;
