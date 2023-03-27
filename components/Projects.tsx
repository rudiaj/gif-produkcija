import { useRouter } from "next/router";
import { useMemo, useState } from "react";
import { projects } from "../constants";
import { Container } from "../styles/styles";

import Project from "./Project";
import { Grid } from "./Projects.styles";

const Projects = () => {
  const { query } = useRouter();
  const [activeItemIndex, setActiveItemIndex] = useState(null);

  const memoedProjects = useMemo(() => {
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
    <Container
      style={{ marginBottom: "200px" }}
      data-expanded={activeItemIndex !== null}
    >
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
        {memoedProjects.map((project, index) => (
          <Project
            setActiveItemIndex={setActiveItemIndex}
            key={project.name}
            project={project}
            index={index}
            activeItemIndex={activeItemIndex}
          />
        ))}
      </Grid>
    </Container>
  );
};

export default Projects;
