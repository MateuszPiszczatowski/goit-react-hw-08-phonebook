import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { getCurrentUserOp, loginOp } from "../../redux/operations";
import { useEffect } from "react";
import { getUser } from "../../redux/selectors";
import css from "./Login.module.css";
import { nanoid } from "nanoid";
import Button from "../../components/Button/Button";

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

  const passwordFieldId = nanoid();
  const emailFieldId = nanoid();

  return user.name ? (
    <h2>Redirecting...</h2>
  ) : user.token ? (
    <h2>Loading user data</h2>
  ) : (
    <div className={css.LoginPage}>
      <form className={css.LoginForm} onSubmit={handleSubmit}>
        <label htmlFor={emailFieldId}>E-mail:</label>
        <input type="email" name="email" required id={emailFieldId} />
        <label htmlFor={passwordFieldId}>Password:</label>
        <input type="password" name="password" required id={passwordFieldId} />
        <Button className={css.SubmitButton} type="submit">
          Log in
        </Button>
      </form>
      <p className={css.RegisterRedirect}>
        Don't have an account? Register{" "}
        <Link to={`/register`} className={css.RegisterLink}>
          here
        </Link>
      </p>
    </div>
  );
};

export default Login;
