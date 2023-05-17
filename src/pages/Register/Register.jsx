import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { getCurrentUserOp, signupOp } from "../../redux/operations";
import { useEffect } from "react";
import { getUser } from "../../redux/selectors";
import { nanoid } from "nanoid";
import css from "./Register.module.css";
import Button from "../../components/Button/Button";

const Register = () => {
  const dispatch = useDispatch();
  const user = useSelector(getUser);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.elements);
    let { name, email, password } = e.target.elements;
    name = name.value;
    email = email.value;
    password = password.value;
    dispatch(signupOp({ name, email, password }));
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

  const nameId = nanoid();
  const emailId = nanoid();
  const passwordId = nanoid();
  return user.name ? (
    <h2>Redirecting...</h2>
  ) : user.token ? (
    <h2>Loading user data</h2>
  ) : (
    <div className={css.RegisterPage}>
      <form onSubmit={handleSubmit} className={css.RegisterForm}>
        <label htmlFor={nameId}>Name:</label>
        <input type="text" name="name" required id={nameId} />
        <label htmlFor={emailId}>E-mail:</label>
        <input type="email" name="email" required id={emailId} />
        <label htmlFor={passwordId}>Password:</label>
        <input
          type="password"
          name="password"
          pattern="^.{7,}$"
          title="Minimum 7 characters"
          required
          id={passwordId}
        />
        <Button type="submit" className={css.SubmitButton}>
          Register
        </Button>
      </form>
      <p className={css.LoginRedirect}>
        Already have an account? Login{" "}
        <Link className={css.LoginLink} to={`/login`}>
          here
        </Link>
      </p>
    </div>
  );
};

export default Register;
