import { Container } from "../styles/styles";
import { ListItem, Wrapper, ListsContainer, List } from "./Footer.styles";

const initial = { opacity: 0, y: -10 };
const whileInView = { opacity: 1, y: 0 };
const viewport = { once: true };

const Footer = () => {
  return (
    <Wrapper>
      <Container>
        <ListsContainer>
          <List>
            <ListItem
              uppercase
              initial={initial}
              whileInView={whileInView}
              viewport={viewport}
            >
              GIF produkcija
            </ListItem>
            <ListItem
              initial={initial}
              whileInView={whileInView}
              viewport={viewport}
              transition={{ delay: 0.1 }}
            >
              Radićeva 16
            </ListItem>
            <ListItem
              initial={initial}
              whileInView={whileInView}
              viewport={viewport}
              transition={{ delay: 0.2 }}
            >
              47000 Karlovac
            </ListItem>
          </List>
          <List>
            <ListItem
              initial={initial}
              whileInView={whileInView}
              viewport={viewport}
            >
              kontakt@gif.hr
            </ListItem>
            <ListItem
              initial={initial}
              whileInView={whileInView}
              viewport={viewport}
              transition={{ delay: 0.1 }}
            >
              +385977929943
            </ListItem>
          </List>
          <List>
            <ListItem
              initial={initial}
              whileInView={whileInView}
              viewport={viewport}
            >
              Facebook
            </ListItem>
          </List>
        </ListsContainer>
      </Container>
    </Wrapper>
  );
};

export default Footer;
