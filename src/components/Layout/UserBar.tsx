import LogoutIcon from "@mui/icons-material/Logout";
import PersonIcon from "@mui/icons-material/Person";
const UserBar = () => {
  return (
    <div className="flex items-center gap-4">
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <span className="font-medium">USER!!</span>
          <div className="w-10 h-10 bg-sage rounded-full flex items-center justify-center text-sage">
            <PersonIcon className="w-5 h-5" />
          </div>
        </div>
        <button className="flex items-center gap-2 hover:text-sage transition-colors">
          <span>Log out</span>
          <LogoutIcon className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default UserBar;
