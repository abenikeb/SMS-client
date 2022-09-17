import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";

import "./Toolbar.css";
const Toolbar = (props) => {
  return (
    <header className="navbar Toolbar">
      <div className="menu">Menu</div>
      <Logo />
      <div className="DesktopOnly">
        <div className="flex items-center">
          {props.isAuth && (
            <button className=" flex-none btn btn-ghost btn-circle">
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
          )}

          {props.isAuth ? (
            <div>
              <h3>{props.user.user_name}</h3>
              <section className="drop-downWrap">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <img src="https://placeimg.com/80/80/people" />
                  </div>
                </label>

                <div className="drop-downContent">
                  <ul>
                    <li>
                      <Link to="/">Profile</Link>
                    </li>
                    <li>
                      <Link to="/">Settings</Link>
                    </li>
                    <li>
                      <Link to="/logout">Logout</Link>
                    </li>
                  </ul>
                </div>
              </section>
            </div>
          ) : (
            <Link to="/login">Login</Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Toolbar;
