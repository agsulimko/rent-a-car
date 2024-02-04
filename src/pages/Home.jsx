import { Container } from "styles/Container/Container";

import { H1, H2, MainHome } from "./HomeStyled";
const Home = () => {
  return (
    <Container>
      <MainHome>
        <section>
          <H1>Welcome to Rent a Car!</H1>
          <H2>
            The Rent a Car app is an easy to use app that created for a company
            that provides car rental services in Ukraine. Try today!
          </H2>
        </section>
      </MainHome>
    </Container>
  );
};
export default Home;
