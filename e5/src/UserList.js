import React from "react";
import { getAvatar } from "./utils";

function UserList({ users, currentUserId, onFollowToggle }) {
  return (
    <div className="user-list">
      {users
        .filter(user => user.id !== currentUserId)
        .map(user => (
          <div
            key={user.id}
            className={`user-list-item${user.isFollowed ? " followed" : ""}`}
          >
            <span className="avatar">{getAvatar(user.name)}</span>
            <span className="user-name">{user.name}</span>
            <span className="user-stats">
              <span title="Followers">👥 {user.followers}</span>
              <span title="Following">➡️ {user.following}</span>
            </span>
            <button
              className={`follow-btn${user.isFollowed ? " unfollow" : ""}`}
              onClick={() => onFollowToggle(user.id)}
            >
              {user.isFollowed ? "Unfollow" : "Follow"}
            </button>
          </div>
        ))}
    </div>
  );
}

export default UserList;