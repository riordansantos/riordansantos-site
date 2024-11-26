import React from "react";
import Head from "../../components/Head";
import LogoBar from "../../components/LogoBar/LogoBar";
import Projects from "../../components/Projects/Projects";
import Footer from "../../components/Footer/Footer";
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
          <p className="animaLeft">Desenvolvedor de Software 👨‍💻</p>
          <p className="animaLeft">Olá, seja bem vinda(o)!</p>
          <ul className="animaLeft">
            <li className="list-item">Tenho 25 anos;</li>
            <li className="list-item">Sou maranhense;</li>
            <li className="list-item">
              Bacharel em Ciência e Tecnologia(UFMA);
            </li>
            <li className="list-item">
              Bacharel em Engenharia da Computação(UFMA).
            </li>
          </ul>
          <p className="animaLeft">
            Desenvolvo softwares há mais de 3 anos, com foco em tecnologias web.
          </p>
        </LeftContainer>
        <RightContainer>
          <div className="animaRight">
            <img className="perfil" src={image} alt="perfil" />
          </div>
        </RightContainer>
      </Container>
      <LogoBar />
      <Projects />
      <Footer />
    </div>
  );
};

export default Home;
