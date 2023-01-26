import React from "react";
import { Container } from "./styles";
import Card from "../Card/Card";
import { DATA } from "../data";

const Projects = () => {
  return (
    <Container>
      <h2>Projetos Favoritos</h2>
      <div className="cards">
        {DATA.map((elem) => {
          return (
            <Card
              key={elem.id}
              image={elem.image}
              title={elem.title}
              text={elem.text}
              link={elem.link}
            />
          );
        })}
      </div>
    </Container>
  );
};

export default Projects;
