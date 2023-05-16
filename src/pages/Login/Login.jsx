import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { loginOp } from "../../redux/operations";
import { useEffect } from "react";
import { getToken, getUser } from "../../redux/selectors";

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
    if (password !== "" && email !== "") {
      dispatch(loginOp({ email, password }));
    }
  };

  useEffect(() => {
    if (user.token && user.name) {
      navigate("/phonebook");
    }
  }, [user, navigate]);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          E-mail:
          <input type="email" name="email" />
        </label>
        <label>
          Password:
          <input type="password" name="password" />
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
