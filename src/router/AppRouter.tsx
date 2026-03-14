import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginPage from "../pages/LoginPage/LoginPage";
import RegisterPage from "../pages/RegisterPage/RegisterPage";
import DictionaryPage from "../pages/DictionaryPage/DictionaryPage";
import RecommendPage from "../pages/RecommendPage/RecommendPage";
import TrainingPage from "../pages/TrainingPage/TrainingPage";

import AppLayout from "../components/Layout/AppLayout";

import PrivateRoute from "./PrivateRoute";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public routes */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        {/* Private routes */}
        <Route path="/" element={<AppLayout />}>
          <Route
            path="/dictionary"
            element={
              <PrivateRoute>
                <DictionaryPage />
              </PrivateRoute>
            }
          />

          <Route
            path="/recommend"
            element={
              <PrivateRoute>
                <RecommendPage />
              </PrivateRoute>
            }
          />

          <Route
            path="/training"
            element={
              <PrivateRoute>
                <TrainingPage />
              </PrivateRoute>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
