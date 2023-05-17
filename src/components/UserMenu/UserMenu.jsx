import { useSelector } from "react-redux";
import { getUser } from "../../redux/selectors";
import LogoutButton from "../LogoutButton/LogoutButton";
import css from "./UserMenu.module.css";
import PropTypes from "prop-types";
import Button from "../Button/Button";

const UserMenu = ({ hide }) => {
  const user = useSelector(getUser);
  return (
    <div className={css.UserMenuModal} onClick={hide}>
      <div className={css.UserMenu}>
        <Button $red $circle className={css.HideButton} onClick={hide}>
          X
        </Button>

        <p>
          Logged in as: <b>{user.name}</b>
        </p>
        <p>
          Your e-mail: <b>{user.email}</b>
        </p>
        <LogoutButton></LogoutButton>
      </div>
    </div>
  );
};

UserMenu.propTypes = {
  hide: PropTypes.func,
};

export default UserMenu;
