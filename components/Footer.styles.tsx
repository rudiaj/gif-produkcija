import styled from "styled-components";
import { motion } from "framer-motion";
import { breakpoints } from "../constants";

export const Wrapper = styled.div`
  background: #212529;
  flex: 1;
  min-height: 50vh;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
`;

export const List = styled.ul``;

export const ListItem = styled(motion.li)`
  color: rgba(255, 255, 255, 0.8);
  font-family: var(--geomanist-font);
  font-size: 18px;
  line-height: 23px;
  text-transform: ${({ uppercase }) => (uppercase ? "uppercase" : "initial")};
  &:not(:last-of-type) {
    margin-bottom: 6px;
  }
`;

export const Anchor = styled.a`
  color: rgba(255, 255, 255, 0.8);
  font-family: var(--geomanist-font);
  font-size: 18px;
  line-height: 23px;
  text-decoration: none;
`;

export const ListsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px;
  width: 100%;
  margin-bottom: 94px;
  @media (min-width: ${breakpoints.SM}px) {
    width: 50%;
    grid-template-columns: 1fr 1fr 1fr;
  }
`;
