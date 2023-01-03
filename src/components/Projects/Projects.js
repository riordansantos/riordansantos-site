import React, { useState, useEffect } from "react";
import { Container } from "./styles";
import Card from "../Card/Card";
import useFetch from "../useFetch";
import axios from "axios";
import { DATA } from "../data";

const Projects = () => {
 {/*  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios
      .get("https://portfolio-api-riordan.fly.dev/posts")
      .then((response) => {
        setPosts(response.data);
      })
      .catch(() => {
        console.log("deu errado");
      });
  }, []);
 

  const {data, loading, error} = useFetch("https://portfolio-api-riordan.fly.dev/posts");

  if (loading) return <div>LOADING...</div>
  if (error) console.log(error);
*/}
 
  return (
    <Container>
      <h2>Projetos Favoritos</h2>
      {DATA.map((elem) => {
        return (
          <div className="cards">
            <Card
              key={elem.id}
              image={elem.image}
              title={elem.title}
              text={elem.text}
              link={elem.link}
            />
          </div>
        );
      })}
    </Container>
  );
};

export default Projects;
