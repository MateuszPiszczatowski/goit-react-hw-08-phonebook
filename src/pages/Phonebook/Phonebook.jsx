import { useDispatch, useSelector } from "react-redux";
import ContactForm from "../../components/ContactForm/ContactForm";
import ContactsList from "../../components/ContactsList/ContactsList";
import Filter from "../../components/Filter/Filter";
import { getUser } from "../../redux/selectors";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getCurrentUserOp } from "../../redux/operations";
import UserMenu from "../../components/UserMenu/UserMenu";
import css from "./Phonebook.module.css";
import Button from "../../components/Button/Button";

const Phonebook = () => {
  const [userMenuVisible, setUserMenuVisible] = useState(false);
  const navigate = useNavigate();
  const user = useSelector(getUser);
  const dispatch = useDispatch();

  const showUserMenu = () => {
    setUserMenuVisible(true);
    console.log(userMenuVisible);
  };

  const hideUserMenu = (e) => {
    if (e.target === e.currentTarget) {
      setUserMenuVisible(false);
    }
  };

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
    <div className={css.PhonebookPage}>
      {userMenuVisible && <UserMenu hide={hideUserMenu} />}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}>
        <h1>Phonebook</h1>
        <Button type="button" onClick={showUserMenu}>
          User Menu
        </Button>
      </div>
      <h2 className={css.Header}>Add a contact</h2>
      <ContactForm />
      <h2 className={css.Header}>Contacts</h2>
      <Filter />
      <ContactsList />
    </div>
  ) : user.token ? (
    <h2>Loading user data</h2>
  ) : (
    <h2>Redirecting...</h2>
  );
};

export default Phonebook;
