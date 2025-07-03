import { Link } from "react-router";
import { ModeToggle } from "../darkmode-toggle";

const Navbar = () => {
  return (
    <header className="bg-green-600">
      <nav className="section py-2 my-0 flex justify-between items-center">
        <div>
          <p className="font-bold text-2xl">Master</p>
        </div>
        <div className="space-x-4">
          <Link to="/">Home</Link>
          <Link to="/tasks">Tasks</Link>
          <Link to="/users">Users</Link>
        </div>
        <div>
          <ModeToggle />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
