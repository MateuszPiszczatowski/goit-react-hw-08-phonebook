import { useSelector } from "react-redux";
import ContactForm from "../../components/ContactForm/ContactForm";
import ContactsList from "../../components/ContactsList/ContactsList";
import Filter from "../../components/Filter/Filter";
import LogoutButton from "../../components/LogoutButton/LogoutButton";
import { getToken } from "../../redux/selectors";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Phonebook = () => {
  const navigate = useNavigate();
  const token = useSelector(getToken);
  useEffect(() => {
    if (token === null) {
      navigate("/");
    }
  }, [token, navigate]);

  return token ? (
    <div>
      <LogoutButton />
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactsList />
    </div>
  ) : (
    <p>Redirecting...</p>
  );
};

export default Phonebook;
