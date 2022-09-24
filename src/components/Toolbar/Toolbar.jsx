import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";
import adminImg from "../../assets/edited.jpg";

import "./Toolbar.css";

const Toolbar = (props) => {
  return (
    <header className="navbar Toolbar">
      <div className="menu-toggle">Menu</div>

      {/* <Logo /> */}
      <div className="DesktopOnly">
        <div className="profile-section">
          <button className="flex-none btn btn-ghost btn-circle">
            <div className="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
              <span className="badge badge-xs badge-primary indicator-item"></span>
            </div>
          </button>

          <div className="flex flex-row justify-center items-center">
            <div className="flex flex-col justify-center items-center px-3">
              <h3 className="mb-1">{props.user.user_name}</h3>
              <p className="text-xs">Admin</p>
            </div>

            <div className="max">
              <label
                tabIndex={0}
                className="btn m-1 btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img src={adminImg} alt="admin" />
                </div>
              </label>

              <ul tabIndex={0} className="dropdown-content min">
                <li>
                  <Link to="/" className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </Link>
                </li>

                <li>
                  <Link to="/">Settings</Link>
                </li>
                <li>
                  <Link to="/logout">Logout</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Toolbar;
