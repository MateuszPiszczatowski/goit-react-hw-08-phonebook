import css from "./ContactsList.module.css";
import { nanoid } from "nanoid";
import { getContacts, getError } from "../../redux/selectors";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { deleteContactOp, getContactsOp } from "../../redux/operations";

const ContactsList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const error = useSelector(getError);
  useEffect(() => {
    dispatch(getContactsOp());
  }, [dispatch]);

  return (
    <>
      {error ?? <p>{error}</p>}
      {contacts.length === 0 ? (
        <p>There is no one to show</p>
      ) : (
        <ul className={css.ContactsList}>
          {contacts.map((contact) => {
            const handleRemove = () => {
              dispatch(deleteContactOp(contact.id));
            };
            return (
              <li key={nanoid()} className={css.ListItem}>
                <div className={css.ListItemContainer}>
                  {`${contact.name}: ${contact.phone}`}
                  <button onClick={handleRemove}>Delete</button>
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};

export default ContactsList;
