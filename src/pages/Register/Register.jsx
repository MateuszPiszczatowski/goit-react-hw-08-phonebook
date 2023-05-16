import { Link } from "react-router-dom";

const Register = () => {
  return (
    <>
      <form>
        <label>
          Name:
          <input type="text" />
        </label>
        <label>
          E-mail:
          <input type="email" />
        </label>
        <label>
          Password:
          <input type="password" />
        </label>
        <input type="submit" value="Log in" />
      </form>
      <p>
        Already have an account? Login <Link to={`/login`}>here</Link>
      </p>
    </>
  );
};

export default Register;
