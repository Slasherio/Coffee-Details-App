import React from "react";
import "./Navigation.css";
import { Link } from "react-router-dom";

import FaHome from "react-icons/lib/fa/home";
import MdDashboard from "react-icons/lib/md/dashboard";
import MdShowChart from "react-icons/lib/md/show-chart";
import MdBookmark from "react-icons/lib/md/bookmark";
import FaFile from "react-icons/lib/fa/file";
import MdHelp from "react-icons/lib/md/help";
import MdSettings from "react-icons/lib/md/settings";

const Navigation = () => {
  return (
    <aside className="sidebar">
      <ul>
        <li>
          <Link to="/">
            <FaHome className="sidebar-icon" />
          </Link>
        </li>
        <li>
          <Link to="/">
            <MdDashboard className="sidebar-icon" />
          </Link>
        </li>
        <li>
          <Link to="/">
            <MdShowChart className="sidebar-icon" />
          </Link>
        </li>
        <li>
          <Link to="/">
            <MdBookmark className="sidebar-icon" />
          </Link>
        </li>
        <li>
          <Link to="/">
            <FaFile className="sidebar-icon" />
          </Link>
        </li>
        <li>
          <Link to="/">
            <MdHelp className="sidebar-icon" />
          </Link>
        </li>
      </ul>
      <Link to="/">
        <MdSettings className="sidebar-icon" />
      </Link>
    </aside>
  );
};

export default Navigation;
