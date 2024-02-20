import { useContext } from "react";

import Auth from "../utils/auth";

const NavBar = () => {
  const handleLogout = () => {
    Auth.logout();
  };

  if (!Auth.loggedIn()) {
    return (
      <header>
        <nav>
          <ul className="nav_links">
            <li>
              <a href="/lists">Lists</a>
            </li>
            <li>
              <a href="/settings">Settings</a>
            </li>

            <li>
              <a href="/login">Login</a>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
  return (
    <header>
      <nav>
        <ul className="nav_links">
          <li>
            <a href="/lists">Lists</a>
          </li>
          <li>
            <a href="/settings">Settings</a>
          </li>

          <li>
            <a href="/" onClick={handleLogout}>
              Logout
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
