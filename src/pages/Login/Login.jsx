import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { getCurrentUserOp, loginOp } from "../../redux/operations";
import { useEffect } from "react";
import { getUser } from "../../redux/selectors";

const Login = () => {
  const dispatch = useDispatch();
  const user = useSelector(getUser);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.elements);
    let { email, password } = e.target.elements;
    email = email.value;
    password = password.value;
    dispatch(loginOp({ email, password }));
  };

  useEffect(() => {
    if (user.token && user.name) {
      navigate("/phonebook");
    }
    if (user.token === null) {
      return;
    }
    dispatch(getCurrentUserOp(user.token));
  }, [user, navigate, dispatch]);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          E-mail:
          <input type="email" name="email" required />
        </label>
        <label>
          Password:
          <input type="password" name="password" required />
        </label>
        <input type="submit" value="Log in" />
      </form>
      <p>
        Don't have an account? Register <Link to={`/register`}>here</Link>
      </p>
    </>
  );
};

export default Login;
