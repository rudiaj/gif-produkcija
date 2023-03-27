import { motion } from "framer-motion";
import styled from "styled-components";

export const StyledProject = styled(motion.article)`
  position: relative;
  overflow: hidden;
  width: 100%;
  grid-column: span ${({ span }) => (span ? 2 : 1)};
  padding-top: calc((1 / 1.4986225895) * 100%);
  border-radius: 0;
  cursor: pointer;
`;

export const ExpandedCard = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
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

export const Content = styled.div`
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  box-sizing: border-box;
  position: absolute;
  padding: 40px;
  display: flex;
  align-items: flex-end;
  z-index: 10;
  pointer-events: none;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  pointer-events: none;
  text-shadow: 0 0 6px rgba(0, 0, 0, 0.12);
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

export const Overlay = styled(motion.div)`
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  box-sizing: border-box;
  position: absolute;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.5) 0%,
    rgba(0, 0, 0, 0.7) 100%
  );
  &[data-applyOverlay="true"] {
    opacity: 1;
  }
  &[data-applyOverlay="false"] {
    opacity: 0;
  }
`;
