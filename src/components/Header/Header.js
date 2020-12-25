import React from "react";

import "./Header.css";

import HeaderOption from "./HeaderOption";

import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import ChatIcon from "@material-ui/icons/Chat";
import NotificationsIcon from "@material-ui/icons/Notifications";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <img
          src="https://www.flaticon.com/svg/static/icons/svg/174/174857.svg"
          alt="linkedin"
        />
        <div className="header__search">
          <SearchIcon />
          <input type="text" />
        </div>
      </div>

      <div className="header__right">
        <HeaderOption Icon={HomeIcon} title="home" />
        <HeaderOption Icon={SupervisorAccountIcon} title="network" />
        <HeaderOption Icon={BusinessCenterIcon} title="job" />
        <HeaderOption Icon={ChatIcon} title="chat" />
        <HeaderOption Icon={NotificationsIcon} title="notification" />
        <HeaderOption avatar={AccountCircleIcon} title="user_name" />
      </div>
    </div>
  );
}

export default Header;
