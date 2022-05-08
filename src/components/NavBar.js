import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <>
      <ul>
        <li>
          <NavLink to="/">HOME</NavLink>
        </li>
        <li>
          <NavLink to="contactList">CONTACT LIST</NavLink>
        </li>
        <li>
          <NavLink to="addContact">ADD NEW CONTACT</NavLink>
        </li>
      </ul>
    </>
  );
}
export default NavBar;
