import { useDispatch } from "react-redux";
import css from "./Filter.module.css";
import { debounce } from "lodash";
import { setFilter } from "../../redux/filterSlice";

const Filter = () => {
  const dispatch = useDispatch();
  const handleFilter = (event) => {
    dispatch(setFilter(event.target.value));
  };
  return (
    <form className={css.Filter}>
      <label>Find contacts by name: </label>
      <input type="text" onChange={debounce(handleFilter, 500)}></input>
    </form>
  );
};

export default Filter;
