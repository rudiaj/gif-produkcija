import { motion } from "framer-motion";
import styled from "styled-components";

export const VideoItem = styled(motion.article)`
  position: relative;
  overflow: hidden;
  width: 50%;
  grid-column: span ${({ span }) => (span ? 2 : 1)};
  aspect-ratio: 16/9;
  cursor: pointer;
`;

export const Row = styled(motion.div)`
  display: flex;
  position: relative;
  &[data-apply-overlay="true"] {
    &::before {
      transition: opacity 0.2s ease-in-out;
      pointer-events: none;
      content: "";
      position: absolute;
      inset: 0;
      background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.5) 0%,
        rgba(0, 0, 0, 0.7) 100%
      );
      z-index: 1;
      opacity: 1;
    }
    &:hover {
      &::before {
        opacity: 0;
      }
    }
  }
  &[data-apply-overlay="false"] {
    &::before {
      transition: opacity 0.2s ease-in-out;
      pointer-events: none;
      content: "";
      position: absolute;
      inset: 0;
      background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.5) 0%,
        rgba(0, 0, 0, 0.7) 100%
      );
      z-index: 1;
      opacity: 0;
    }
  }
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

export const CollapsedImageWrapper = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;

export const Content = styled(motion.div)`
  box-sizing: border-box;
  position: absolute;
  padding: 40px;
  display: flex;
  align-items: flex-end;
  height: 100%;
  z-index: 10;
  pointer-events: none;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  pointer-events: none;
  text-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
`;

export const Date = styled.span`
  margin-right: 16px;
`;

export const Headline = styled.h3`
  color: rgba(255, 255, 255, 0.8);
  font-size: 18px;
  line-height: 23px;
  letter-spacing: 0.1em;
`;

export const Subtitle = styled.h4`
  color: rgba(255, 255, 255, 0.6);
  font-size: 18px;
  line-height: 23px;
  letter-spacing: 0.1em;
`;
