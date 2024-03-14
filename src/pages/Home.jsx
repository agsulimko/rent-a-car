import { Container } from "styles/Container/Container";

import { H1, H2, MainHome, Img1, Img2 } from "./HomeStyled";
const Home = () => {
  return (
    <Container>
      <MainHome>
        <section>
          <Img1
            src="https://ftp.goit.study/img/cars-test-task/audi_a5.jpeg"
            alt="audi_a5"
            width={370}
          />
          <H1>Welcome to Rent a Car!</H1>
          <H2>
            The Rent a Car app is an easy to use app that created for a company
            that provides car rental services in Ukraine. Try today!
          </H2>
          <Img2
            src="https://ftp.goit.study/img/cars-test-task/lamborghini_murcielago.jpeg"
            alt="lamborghini"
            width={400}
          />
        </section>
      </MainHome>
    </Container>
  );
};
export default Home;
