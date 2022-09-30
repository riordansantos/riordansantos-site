import React from "react";
import { NavLink } from "react-router-dom";
import { Container } from "./styles";
function Header() {
  return (
    <Container>
      <div className="navigation">
        <nav>
          <NavLink to="/" end>
            Home
          </NavLink>{" "}
          |<NavLink to="experiencia">Experiência</NavLink> |
          <NavLink to="portifolio">Portifólio</NavLink> |
          <NavLink to="contato">Contato</NavLink>
        </nav>
      </div>
    </Container>
  );
}

export default Header;
