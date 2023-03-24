import styled from "styled-components";

export const Container = styled.div`
  background: #dbf4ff;
  width: 27vw;
  display: flex;
  flex-direction: column;

  border-radius: 15px;
  .image {
    img {
      max-width: 100%;
    }
  }
  .bottom {
    padding: 0.6rem;
    padding-bottom: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .title {
    h3 {
      font-size: 1.3em;
      font-weight: 500;
      margin-bottom: 0.7rem;
    }
  }
  .text {
    p {
      text-align: justify;
    }
    margin-bottom: 0.7rem;
  }
  .link {
    a {
      text-decoration: none;
      font-weight: 400;
    }
  }
`;
