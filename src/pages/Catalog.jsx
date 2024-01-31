// import ContactForm from "components/FormContact/ContactForm";
// import ContactList from "components/ContactList/ContactList";
// import Filter from "components/Filter/Filter";
import { Container } from "styles/Container/Container";
import css from "./Catalog.module.css";
// import Loader from "components/Loader/Loader";
// import { selectLoading } from "redux/contacts/selectors";
// import { useSelector } from "react-redux";

const Catalog = () => {
  // const isLoading = useSelector(selectLoading);
  return (
    <Container>
      <main className={css.mainContacts}>
        <div className={css.mainContacts}>
          <h1 className={css.h1}>Rent a Car</h1>

          <h2 className={css.h2}>Main</h2>
        </div>
      </main>
    </Container>
  );
};
export default Catalog;
