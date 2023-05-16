import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import HomeRedirect from "./components/HomeRedirect/HomeRedirect";
import Navigator from "./components/Navigator/Navigator";

const RoutesComponent = () => {
  const Phonebook = lazy(() => import("./pages/Phonebook/Phonebook"));
  const Login = lazy(() => import("./pages/Login/Login"));
  const Register = lazy(() => import("./pages/Register/Register"));
  return (
    <Suspense fallback={<div>Loading content...</div>}>
      <Routes>
        <Route path="/">
          <Route index element={<Navigator />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="phonebook" element={<Phonebook />} />
        </Route>
        <Route path="*" element={<HomeRedirect />} />
      </Routes>
    </Suspense>
  );
};

export default RoutesComponent;
