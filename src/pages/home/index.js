import React from "react";
import Head from "../../components/Head";
import LogoBar from "../../components/LogoBar/LogoBar";
import { Container, LeftContainer, RightContainer } from "./styles";
import image from "../../assets/images/perfil-menor.jpg";
const Home = () => {
  return (
    <div>
      <Head title="Home" />
      <Container>
        <LeftContainer>
          <h1 className="animaLeft">
            Riordan
            <br /> dos Santos
          </h1>
          <p className="animaLeft">FRONT-END DEVELOPER</p>
          <p className="animaLeft">Olá, seja bem vinda(o)!</p>
          <ul className="animaLeft">
            <li className="list-item">Tenho 23 anos;</li>
            <li className="list-item">Sou maranhense;</li>
            <li className="list-item">
              Bacharel em Ciência e Tecnologia(UFMA);
            </li>
            <li className="list-item">
              Graduando em Engenharia da Computação(UFMA).
            </li>
          </ul>
          <p className="animaLeft">
            Trabalho há 1 ano e meio com Front-end, utilizando diariamente
            JavaScript com React.Js.
          </p>
        </LeftContainer>
        <RightContainer>
          <div className="animaRight">
            <img className="perfil" src={image} alt="perfil" />
          </div>
        </RightContainer>
      </Container>
      <LogoBar />
    </div>
  );
};

export default Home;
