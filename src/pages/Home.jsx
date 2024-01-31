import { Container } from "styles/Container/Container";
import css from "./Home.module.css";
const Home = () => {
  return (
    <Container>
      <main className={css.mainHome}>
        <section className={css.sectionContacts}>
          <div className={css.url}></div>
          <h1 className={css.h1}>Welcome to Rent a Car!</h1>
          <h2 className={css.h2}>
            The Rent a Car app is an easy to use app that created for a company
            that provides car rental services in Ukraine. Try today!
          </h2>
        </section>
      </main>
    </Container>
  );
};
export default Home;
