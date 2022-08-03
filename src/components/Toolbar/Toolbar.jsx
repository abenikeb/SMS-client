import React from "react";
import NavigationItems from "../Navigation/NavigationItems";
import Logo from "../Logo/Logo";

import "./Toolbar.css";
const Toolbar = (props) => {
  return (
    <header className="Toolbar">
      <div className="menu">Menu</div>
      <Logo />
      <div className="DesktopOnly">
        <div class="flex-none">
          <div class="dropdown dropdown-end">
            <label tabindex="0" class="btn btn-ghost btn-circle avatar">
              <div class="w-10 rounded-full">
                <img src="https://placeimg.com/80/80/people" />
              </div>
            </label>
            <ul
              tabindex="0"
              class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a class="justify-between">
                  Profile
                  <span class="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
        {/* <nav>
          <NavigationItems />
        </nav> */}
      </div>
    </header>
  );
};

export default Toolbar;
