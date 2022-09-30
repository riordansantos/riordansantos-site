import styled from "styled-components";
export const Container = styled.footer`
  background: ${({ theme }) => theme.color.primaryColor};
  padding: 2rem 0;
  color: ${({ theme }) => theme.color.white};
  p{
    text-align: center;
  }
`;
