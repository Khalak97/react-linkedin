import React from "react";

import "./Sidebar.css";

import { Avatar } from "@material-ui/core";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img
          src="https://content.linkedin.com/content/dam/me/brand/en-us/brand-home/logos/01-dsk-e6-v2.png.original.png"
          alt="background"
        />
        <Avatar className="sidebar__avatar" />
        <h2>user name</h2>
        <h4>user@gmail.com</h4>
      </div>

      <div className="sidebar__stats">
        <div className="sidebar__stats">
          <div className="sidebar__stat">
            <p>Who viewed you</p>
            <p className="sidebar__statNumber">1234</p>
          </div>
          <div className="sidebar__stat">
            <p>Views on post</p>
            <p className="sidebar__statNumber">1234</p>
          </div>
        </div>
      </div>

      <div className="sidebar__bottom">
        <p>Recent</p>
      </div>
    </div>
  );
}

export default Sidebar;
