import React from "react";
import { getAvatar } from "./utils";

function Profile({ currentUser }) {
  return (
    <div className="profile">
      <span className="avatar-lg">{getAvatar(currentUser.name)}</span>
      <div>
        <div className="profile-name">{currentUser.name}</div>
        <div className="profile-stats">
          <span><b>{currentUser.followers}</b> Followers</span>
          <span><b>{currentUser.following}</b> Following</span>
        </div>
      </div>
    </div>
  );
}

export default Profile;