import { NavLink } from "react-router";
const Header = () => {
  return (
    <>
      <nav className="shadow-sm fixed w-full top-0 left-0 z-50 text-gray-800">
        <ul className="px-8 flex flex-row justify-end items-center">
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
