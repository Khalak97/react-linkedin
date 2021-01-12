import React from "react";
import { useSelector } from "react-redux";

import "./Sidebar.css";

import { selectUser } from "../../features/userSlice";

import { Avatar } from "@material-ui/core";

function Sidebar() {
  const user = useSelector(selectUser);

  const recentItem = (topic) => (
    <div className="sidebar__recentItem">
      <span className="sidebar__hash">#</span>
      <p>{topic}</p>
    </div>
  );

  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img
          className="sidebar__backImg"
          src="https://content.linkedin.com/content/dam/me/brand/en-us/brand-home/logos/01-dsk-e6-v2.png.original.png"
          alt="background"
        />
        <Avatar className="sidebar__avatar">{user.email[0]}</Avatar>
        <h2>{user.displayName}</h2>
        <h4>{user.email}</h4>
      </div>

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

      <div className="sidebar__bottom">
        <p>Recent</p>
        {recentItem("reactjs")}
        {recentItem("javascript")}
        {recentItem("programing")}
      </div>
    </div>
  );
}

export default Sidebar;
