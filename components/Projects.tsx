"use client";

import { projects } from "../constants";
import ProjectRow from "./ProjectRow";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div className="container mx-auto px-4 mb-48">
      <motion.div
        className="flex flex-col rounded-md overflow-hidden"
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
          ease: [0.76, 0, 0.24, 1],
        }}
      >
        {projects.map((project, index) => (
          <ProjectRow key={index} project={project} index={index} />
        ))}
      </motion.div>
    </div>
  );
};

export default Projects;
