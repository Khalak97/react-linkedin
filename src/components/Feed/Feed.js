import React from "react";

import "./Feed.css";

import FeedOption from "./FeedOption";

import CreateIcon from "@material-ui/icons/Create";

function Feed() {
  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <CreateIcon />
          <form>
            <input type="text" />
            <button type="submit">Send</button>
          </form>
        </div>
        <div className="feed__inputOptions">
          <FeedOption />
          <FeedOption />
          <FeedOption />
          <FeedOption />
        </div>
      </div>
    </div>
  );
}

export default Feed;
