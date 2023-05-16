import { useDispatch, useSelector } from "react-redux";
import { getToken } from "../../redux/selectors";
import { logoutOp } from "../../redux/operations";

const LogoutButton = () => {
  const token = useSelector(getToken);
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(logoutOp(token));
  };

  return <button onClick={handleClick}>Log out</button>;
};

export default LogoutButton;
