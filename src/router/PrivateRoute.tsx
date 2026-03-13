import { Navigate } from "react-router-dom";

interface Props {
  children: React.ReactNode;
}

export default function PrivateRoute({ children }: Props) {
  const isAuth = true; // ileride Redux veya context'ten gelecek

  if (!isAuth) {
    return <Navigate to="/login" replace />;
  }

  return children;
}
