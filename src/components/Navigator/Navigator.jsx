import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../redux/selectors";
import { useNavigate } from "react-router-dom";
import { getCurrentUserOp } from "../../redux/operations";
import { useEffect } from "react";

const Navigator = () => {
  const navigate = useNavigate();
  const userState = useSelector(getUser);
  const dispatch = useDispatch();

  useEffect(() => {
    if (userState.token === null) {
      navigate("/login");
      return;
    }
    if (userState.token && userState.name) {
      navigate("/phonebook");
      return;
    }
    dispatch(getCurrentUserOp(userState.token));
  }, [dispatch, navigate, userState]);
  return <p>Loading...</p>;
};

export default Navigator;
