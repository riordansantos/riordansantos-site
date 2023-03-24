import React from "react";
import { Container } from "./styles";

const LogoBar = () => {
  return (
    <Container>
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg"
        height="60px"
        width="70px"
        alt="html-logo"
        className="pulse"
      />
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg"
        height="60px"
        width="70px"
        alt="css-logo"
        className="pulse"
      />

      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
        height="60px"
        width="70px"
        alt="js-logo"
        className="pulse"
      />
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
        height="60px"
        width="70px"
        alt="typescript-logo"
        className="pulse"
      />
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg"
        height="60px"
        width="70px"
        alt="react-logo"
        className="pulse react"
      />
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg"
        width="70px"
        height="60px"
        alt="next-logo"
        className="pulse"
      />
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg"
        height="60px"
        width="70px"
        alt="sass-logo"
        className="pulse"
      />

      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original-wordmark.svg"
        width="70px"
        height="60px"
        alt="tailwind-logo"
        className="pulse"
      />
    </Container>
  );
};

export default LogoBar;
