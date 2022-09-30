import React from "react";
import { NavLink } from "react-router-dom";
import { Container } from "./styles";
import perfil from "../../assets/images/perfil-menor.jpg"
function Header() {
  return (
    <Container>
      
      <div className="navigation">
      <nav>
        <NavLink to="/" end>
          Skills
        </NavLink>{" "}
        |<NavLink to="educacao">Educacão</NavLink> |
        <NavLink to="experiencia">Experiência</NavLink> |
        <NavLink to="portifolio">Portifólio</NavLink> |
        <NavLink to="contato">Contato</NavLink>
      </nav>
      </div>
     
    </Container>
  );
}

export default Header;
