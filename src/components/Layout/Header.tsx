import Logo from "./Logo";
import UserBar from "./UserBar";
import UserNav from "./UserNav";

const Header = () => {
  return (
    <header className="bg-white">
      <div className="container mx-auto h-20 flex max-w-7xl items-center justify-between px-4 py-3">
        <Logo />
        <UserNav />
        <UserBar />
      </div>
    </header>
  );
};

export default Header;
