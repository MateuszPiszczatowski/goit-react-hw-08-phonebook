import css from "./ContactForm.module.css";
import { useDispatch, useSelector } from "react-redux";
import { addContactOp } from "../../redux/operations";
import { getContacts, getToken } from "../../redux/selectors";
import { Notify } from "notiflix";
import { nanoid } from "nanoid";
import Button from "../Button/Button";

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const token = useSelector(getToken);
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.elements.name.value;
    if (contacts.some((contact) => contact.name.toLowerCase() === name.toLowerCase())) {
      Notify.failure(`${name} is already on the list!`);
    } else {
      const number = form.elements.number.value;
      dispatch(addContactOp({ token: token, contact: { name, number } }));
    }
    form.reset();
  };
  const nameId = nanoid();
  const numberId = nanoid();
  return (
    <form onSubmit={handleSubmit} className={css.ContactForm}>
      <label className={css.Label} htmlFor={nameId}>
        Name:
      </label>
      <input
        id={nameId}
        className={css.Input}
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      <label className={css.Label} htmlFor={numberId}>
        Number:
      </label>
      <input
        id={numberId}
        className={css.Input}
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      <Button type="submit">Add contact</Button>
    </form>
  );
};

export default ContactForm;
