import { useSelector } from "react-redux";
import "./App.css";
import RoutesComponent from "./Routes";
import { getError, getIsLoading } from "./redux/selectors";
import Loader from "./components/Loader/Loader";
import { useEffect } from "react";
import { Notify } from "notiflix";
const App = () => {
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);
  useEffect(() => {
    if (error) {
      Notify.failure(error);
    }
  }, [error]);
  return (
    <div className="App">
      {isLoading && <Loader />}
      <RoutesComponent />
    </div>
  );
};

export default App;
