import styled from "styled-components";
import { motion } from "framer-motion";

export const Wrapper = styled.div`
  background: #212529;
  flex: 1;
  padding-top: 312px;
  padding-bottom: 94px;
`;

export const List = styled.ul``;

export const ListItem = styled(motion.li)`
  color: rgba(255, 255, 255, 0.8);
  font-family: var(--geomanist-font);
  text-transform: ${({ uppercase }) => (uppercase ? "uppercase" : "initial")};
  &:not(:last-of-type) {
    margin-bottom: 6px;
  }
`;

export const ListsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 50%;
`;
