import React from "react";
import Head from "../../components/Head";
import { Container, LeftContainer, RightContainer } from "./styles";
import image from "../../assets/images/perfil-menor.jpg";
const Home = () => {
  return (
    <div>
      <Head title="Home" />
      <Container>
        <LeftContainer>
          <h1>
            Riordan
            <br /> dos Santos
          </h1>
          <p>FRONT-END DEVELOPER</p>
          <p>Olá, seja bem vindo!</p>
          <ul>
            <li className="list-item">Tenho 23 anos;</li>
            <li className="list-item">Sou maranhense;</li>
            <li className="list-item">Bacharel em Ciência e Tecnologia(UFMA);</li>
            <li className="list-item">Graduando em Engenharia da Computação(UFMA)</li>
          </ul>
          <p>
            Trabalho há 1 ano e meio com Front-end, utilizando diariamente JavaScript com React.Js.
          </p>
        </LeftContainer>
        <RightContainer>
          <img src={image} alt="perfil" />
        </RightContainer>
      </Container>
    </div>
  );
};

export default Home;
