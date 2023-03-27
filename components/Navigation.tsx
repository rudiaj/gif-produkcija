import { useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useUI } from "../context/UIProvider";
import { Container } from "../styles/styles";

import { Button, NavBar, Wrapper } from "./Navigation.styles";

const Navigation = () => {
  const { setApplyOverlay } = useUI();
  const { scrollYProgress } = useScroll();

  useTransform(scrollYProgress, (pos) => {
    setApplyOverlay(pos > 0);
  });

  return (
    <NavBar
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        duration: 0.5,
      }}
    >
      <Container>
        <Wrapper>
          <Image alt="logo" src="/logo.svg" width={166} height={32} />
          <Button>Kontakt</Button>
        </Wrapper>
      </Container>
    </NavBar>
  );
};

export default Navigation;
