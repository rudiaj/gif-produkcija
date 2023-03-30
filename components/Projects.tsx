import { useRouter } from "next/router";
import { useMemo } from "react";
import { projects } from "../constants";
import { Container } from "../styles/styles";

import ProjectRow from "./ProjectRow";
import { Grid } from "./Projects.styles";

const Projects = () => {
  const { query } = useRouter();

  const filteredProjects = useMemo(() => {
    if (query.filter) {
      return projects.filter((project) => {
        if (project.category === query.filter) {
          return project;
        }
      });
    }

    return projects;
  }, [query.filter]);

  return (
    <Container style={{ marginBottom: "200px" }}>
      <Grid
        initial={{
          y: 40,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 0.5,
        }}
      >
        {filteredProjects.map((project, index) => {
          return (
            <ProjectRow key={project.name} project={project} index={index} />
          );
        })}
      </Grid>
    </Container>
  );
};

export default Projects;
