import { Container, CategoriesContainer, MenuContainer, Footer, FooterContainer } from './styles';

import Header from '../components/Header';

export default function Main() {
  return (
    <>
      <Container>
        <Header />

        <CategoriesContainer></CategoriesContainer>

        <MenuContainer></MenuContainer>

      </Container>

      <FooterContainer>
        <Footer></Footer>
      </FooterContainer>

    </>
  );
}
