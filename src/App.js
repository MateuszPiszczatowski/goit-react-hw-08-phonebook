import { useSelector } from "react-redux";
import "./App.css";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactsList from "./components/ContactsList/ContactsList";
import Filter from "./components/Filter/Filter";
import { getIsLoading } from "./redux/selectors";
import Loader from "./components/Loader/Loader";

const App = () => {
  const isLoading = useSelector(getIsLoading);
  return (
    <div className="App">
      {isLoading && <Loader />}
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactsList />
    </div>
  );
};

export default App;
