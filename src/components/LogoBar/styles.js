import styled from "styled-components";

export const Container = styled.div`
  background: #cddef4;
  display: flex;
  justify-content: space-around;
  //column-gap: 2rem;
  padding: 1rem 0;
  .react {
    > svg {
      fill: black;
    }
  }
  .pulse {
    animation: pulse 1s infinite;
    display: table;
    animation-direction: alternate;
    -webkit-animation-name: pulse;
    animation-name: pulse;
  }
  @-webkit-keyframes pulse {
    0% {
      -webkit-transform: scale(1);
    }
    100% {
      -webkit-transform: scale(1.1);
    }
  }

  @keyframes pulse {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(1.1);
    }
  }
  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
    row-gap: 1rem;
    padding: 1rem 0;
    .logo-item {
      display: flex;
      justify-content: center;
    }
  }
`;
