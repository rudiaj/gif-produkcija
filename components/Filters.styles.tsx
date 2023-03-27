import styled from "styled-components";
import { motion } from "framer-motion";

import { Container } from "../styles/styles";

export const Wrapper = styled(motion.div)`
  display: flex;
  align-items: center;
  padding-block: 12px;
  border-top: 1px solid #e9ecef;
  gap: 12px;
`;

export const Button = styled(motion.button)`
  border: 1px solid #dee2e6;
  padding: 12px;
  background: transparent;
  color: #495057;
  border-radius: 100px;
  font-size: 12px;
  line-height: 15px;
  cursor: pointer;
  font-family: var(--geomanist-font);
  &[data-active="true"] {
    color: #f8f9fa;
    background: #212529;
  }
`;

export const StickyContainer = styled(Container)`
  position: sticky;
  top: 82px;
  z-index: 12;
  background: rgba(255, 255, 255);
`;
