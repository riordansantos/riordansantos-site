import React from "react";
import { Container } from "./styles";

const Card = (props) => {
  const { image, title, text, link, id } = props;
  return (
    <Container image={image} title={title} text={text} id={id}>
      <div className="image">
        <img src={image} />
      </div>
      <div className="bottom">
        <div className="title">
          <h3>{title}</h3>
        </div>
        <div className="text">
          <p>{text}</p>
        </div>
        <div className="link">
          <a href={link} target="_blank">
            <p>Ir para projeto</p>
          </a>
        </div>
      </div>
    </Container>
  );
};

export default Card;
