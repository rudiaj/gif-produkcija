import { motion } from "framer-motion";
import styled from "styled-components";

export const VideoItem = styled(motion.article)`
  position: relative;
  overflow: hidden;
  width: 50%;
  aspect-ratio: 16/9;
  cursor: pointer;
`;

export const ExpandedCard = styled(motion.div)`
  position: fixed;
  inset: 0;
  z-index: 20;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ExpandedImageWrapper = styled(motion.div)`
  position: relative;
  height: ${({ height }) => height}px;
  width: ${({ width }) => width}px;
`;
