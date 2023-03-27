import styled from "styled-components";
import { motion } from "framer-motion";

export const Grid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-flow: dense;
`;
