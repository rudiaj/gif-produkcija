import styled from "styled-components";
import { motion } from "framer-motion";

export const NavBar = styled(motion.nav)`
  position: sticky;
  top: 0;
  z-index: 12;
  background: rgba(255, 255, 255);
  margin-bottom: 130px;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 25px 0;
`;

export const Button = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  font-family: var(--geomanist-font);
  color: #495057;
  padding: 0;
  font-size: 12px;
  line-height: 15px;
`;
