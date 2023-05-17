import css from "./Loader.module.css";
import { Circles } from "react-loader-spinner";

function Loader() {
  return (
    <div className={css.Loader}>
      <Circles color="#62442D" />
    </div>
  );
}

export default Loader;
