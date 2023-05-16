import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { getCurrentUserOp, signupOp } from "../../redux/operations";
import { useEffect } from "react";
import { getUser } from "../../redux/selectors";

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

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" required />
        </label>
        <label>
          E-mail:
          <input type="email" name="email" required />
        </label>
        <label>
          Password:
          <input
            type="password"
            name="password"
            pattern="^.{7,}$"
            title="Minimum 7 characters"
            required
          />
        </label>
        <input type="submit" value="Register" />
      </form>
      <p>
        Already have an account? Login <Link to={`/login`}>here</Link>
      </p>
    </>
  );
};

export default Register;
