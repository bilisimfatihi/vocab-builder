import { Link } from "react-router-dom";

const UserNav = () => {
  return (
    <nav className="flex items-center gap-4">
      <Link
        to="/dictionary"
        className="text-sm font-medium hover:text-blue-600"
      >
        Dictionary
      </Link>

      <Link to="/recommend" className="text-sm font-medium hover:text-blue-600">
        Recommend
      </Link>

      <Link to="/training" className="text-sm font-medium hover:text-blue-600">
        Training
      </Link>
    </nav>
  );
};

export default UserNav;
