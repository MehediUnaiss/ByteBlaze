import React, { useEffect, useState } from "react";
import { NavLink } from "react-router";

const Navbar = () => {
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);
  //   console.log(theme);
  const handleToggle = (e) => {
    if (e.target.checked) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  return (
    <nav className="navbar sticky top-0 bg-base-100 shadow-lg px-6 z-10">
      <div className="flex-1">
        <a className="gap-0 text-secondary font-bold normal-case text-2xl">
          Byte<span className="text-primary">Blaze</span>
        </a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1  gap-3">
          <li className="font-bold">
            <NavLink
              className={({ isActive }) =>
                isActive ? "font-bold text-primary" : ""
              }
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li className="font-bold">
            <NavLink
              className={({ isActive }) =>
                isActive ? "font-bold text-primary" : ""
              }
              to="/blogs"
            >
              blogs
            </NavLink>
          </li>
          <li className="font-bold">
            <NavLink
              className={({ isActive }) =>
                isActive ? "font-bold text-primary" : ""
              }
              to="/bookmarks"
            >
              Bookmarks
            </NavLink>
          </li>
        </ul>
        <label className="toggle text-base-content">
          <input
            onChange={handleToggle}
            type="checkbox"
            className="theme-controller"
          />

          <svg
            aria-label="sun"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="12" cy="12" r="4"></circle>
              <path d="M12 2v2"></path>
              <path d="M12 20v2"></path>
              <path d="m4.93 4.93 1.41 1.41"></path>
              <path d="m17.66 17.66 1.41 1.41"></path>
              <path d="M2 12h2"></path>
              <path d="M20 12h2"></path>
              <path d="m6.34 17.66-1.41 1.41"></path>
              <path d="m19.07 4.93-1.41 1.41"></path>
            </g>
          </svg>

          <svg
            aria-label="moon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2"
              fill="none"
              stroke="currentColor"
            >
              <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
            </g>
          </svg>
        </label>
      </div>
    </nav>
  );
};

export default Navbar;
