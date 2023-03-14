import { motion } from "framer-motion";
import styled from "styled-components";

export const StyledProject = styled(motion.article)`
  position: relative;
  overflow: hidden;
  width: 100%;
  grid-column: span ${(props) => (props.span ? 2 : 1)};
  padding-top: calc((1 / 1.4986225895) * 100%);
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
  pointer-events: auto;
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
export const ImageContainer = styled(motion.div)`
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  position: absolute;
  z-index: 2;
`;

export const Overlay = styled.div`
  height: 100%;
  pointer-events: none;
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
`;
