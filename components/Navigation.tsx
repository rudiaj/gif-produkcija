import Image from "next/image";
import { Container } from "../styles/styles";

import { Button, NavBar, Wrapper } from "./Navigation.styles";

const Navigation = () => {
  return (
    <NavBar>
      <Container>
        <Wrapper>
          <Image alt="logo" src="/logo.svg" width={166} height={32} />
          <Button>kontakt</Button>
        </Wrapper>
      </Container>
    </NavBar>
  );
};

export default Navigation;
