import { useDispatch, useSelector } from "react-redux";
import { getToken } from "../../redux/selectors";
import { logoutOp } from "../../redux/operations";
import Button from "../Button/Button";

const LogoutButton = () => {
  const token = useSelector(getToken);
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(logoutOp(token));
  };

  return (
    <Button $red onClick={handleClick}>
      Log out
    </Button>
  );
};

export default LogoutButton;
