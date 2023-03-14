import Image from "next/image";
import { projects } from "../constants";
import { Container } from "../styles/styles";

import { NavBar } from "./Navigation.styles";
import Project from "./Project";
import { Grid } from "./Projects.styles";

const Projects = () => {
  return (
    <Container style={{ marginBottom: "200px" }}>
      <Grid>
        {projects.map((project, index) => (
          <Project key={project.name} project={project} index={index} />
        ))}
      </Grid>
    </Container>
  );
};

export default Projects;
