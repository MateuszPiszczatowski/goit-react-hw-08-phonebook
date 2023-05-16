import css from "./ContactsList.module.css";
import { nanoid } from "nanoid";
import { getContacts, getToken } from "../../redux/selectors";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { deleteContactOp, getContactsOp } from "../../redux/operations";

const ContactsList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const token = useSelector(getToken);
  useEffect(() => {
    if (token) {
      dispatch(getContactsOp(token));
    }
  }, [dispatch, token]);

  return (
    <>
      {contacts.length === 0 ? (
        <p>There is no one to show</p>
      ) : (
        <ul className={css.ContactsList}>
          {contacts.map((contact) => {
            const handleRemove = () => {
              dispatch(deleteContactOp({ id: contact.id, token: token }));
            };
            return (
              <li key={nanoid()} className={css.ListItem}>
                <div className={css.ListItemContainer}>
                  {`${contact.name}: ${contact.number}`}
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
