import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import RegisterPage from "../pages/RegisterPage";
import LoginPage from "../pages/LoginPage";
import DictionaryPage from "../pages/DictionaryPage";

const AppRouter = () => {
  const isLoggedIn = false;

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/register"
          element={
            !isLoggedIn ? <RegisterPage /> : <Navigate to="/dictionary" />
          }
        />
        <Route
          path="/login"
          element={!isLoggedIn ? <LoginPage /> : <Navigate to="/dictionary" />}
        />
        <Route
          path="/dictionary"
          element={isLoggedIn ? <DictionaryPage /> : <Navigate to="/login" />}
        />
        <Route path="/" element={<Navigate to="/dictionary" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
