import { NavLink } from "react-router";
const Header = () => {
  return (
    <>
      <nav className="bg-base-100 shadow-sm ">
        <ul className="flex flex-row">
          <li>
            <NavLink className="btn btn-ghost text-xl" to="/">
              {" "}
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className="btn btn-ghost text-xl" to="destinations">
              {" "}
              Destinations
            </NavLink>
          </li>
          <li>
            <NavLink className="btn btn-ghost text-xl" to="contact">
              {" "}
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink className="btn btn-ghost text-xl" to="about">
              {" "}
              About
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};
export default Header;
