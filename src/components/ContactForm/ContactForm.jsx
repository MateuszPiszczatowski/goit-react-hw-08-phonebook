import css from "./ContactForm.module.css";
import { useDispatch, useSelector } from "react-redux";
import { addContactOp } from "../../redux/operations";
import { getContacts } from "../../redux/selectors";
import { Notify } from "notiflix";

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.elements.name.value;
    if (contacts.some((contact) => contact.name.toLowerCase() === name.toLowerCase())) {
      Notify.failure(`${name} is already on the list!`);
    } else {
      const phone = form.elements.number.value;
      dispatch(addContactOp({ name, phone }));
    }
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit} className={css.ContactForm}>
      <label className={css.Label}>
        Name:
        <input
          className={css.Input}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label className={css.Label}>
        Number:
        <input
          className={css.Input}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <input type="submit" value="Add contact" />
      </label>
    </form>
  );
};

export default ContactForm;
