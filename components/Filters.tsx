import { Container } from "../styles/styles";
import { Button, Wrapper } from "./Filters.styles";

const Filters = () => {
  return (
    <Container>
      <Wrapper>
        <Button>Reklame</Button>
        <Button>Događaji</Button>
        <Button>Vjenčanja</Button>
      </Wrapper>
    </Container>
  );
};

export default Filters;
