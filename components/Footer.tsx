import { Container } from "../styles/styles";
import { ListItem, Wrapper, ListsContainer, List } from "./Footer.styles";

const Footer = () => {
  return (
    <Wrapper>
      <Container>
        <ListsContainer>
          <List>
            <ListItem
              uppercase
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              GIF produkcija
            </ListItem>
            <ListItem
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              Radićeva 16
            </ListItem>
            <ListItem
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              47000 Karlovac
            </ListItem>
          </List>
          <List>
            <ListItem
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              kontakt@gif.hr
            </ListItem>
            <ListItem
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              +385977929943
            </ListItem>
          </List>
          <List>
            <ListItem
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
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
