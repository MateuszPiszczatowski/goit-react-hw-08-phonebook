import { useDispatch, useSelector } from "react-redux";
import ContactForm from "../../components/ContactForm/ContactForm";
import ContactsList from "../../components/ContactsList/ContactsList";
import Filter from "../../components/Filter/Filter";
import LogoutButton from "../../components/LogoutButton/LogoutButton";
import { getUser } from "../../redux/selectors";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getCurrentUserOp } from "../../redux/operations";

const Phonebook = () => {
  const navigate = useNavigate();
  const user = useSelector(getUser);
  const dispatch = useDispatch();
  useEffect(() => {
    if (user.token === null) {
      navigate("/");
      return;
    }
    if (user.name === null) {
      dispatch(getCurrentUserOp(user.token));
      return;
    }
  }, [user, navigate, dispatch]);

  return user.name ? (
    <div>
      <LogoutButton />
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactsList />
    </div>
  ) : user.token ? (
    <p>Loading user data</p>
  ) : (
    <p>Redirecting...</p>
  );
};

export default Phonebook;
