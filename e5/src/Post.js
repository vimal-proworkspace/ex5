import React from "react";
import { getAvatar, timeAgo } from "./utils";

function Post({ user, content, createdAt, likes, onLike }) {
  return (
    <div className="post">
      <span className="avatar">{getAvatar(user.name)}</span>
      <div className="post-body">
        <div className="post-header">
          <span className="post-author">{user.name}</span>
          <span className="post-time">{timeAgo(createdAt)}</span>
        </div>
        <div className="post-content">{content}</div>
        <div className="post-actions">
          <button className="like-btn" onClick={onLike}>👍 {likes}</button>
        </div>
      </div>
    </div>
  );
}

export default Post;