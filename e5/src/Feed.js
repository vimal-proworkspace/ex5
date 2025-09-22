import React from "react";
import Post from "./Post";

function Feed({ posts, users, currentUserId, onLike }) {
  const followedIds = users
    .filter(u => u.isFollowed || u.id === currentUserId)
    .map(u => u.id);

  const filteredPosts = posts.filter(post =>
    followedIds.includes(post.userId)
  );

  return (
    <div className="feed">
      {filteredPosts.length === 0 ? (
        <p className="empty-feed">No posts yet!</p>
      ) : (
        filteredPosts.map(post => {
          const user = users.find(u => u.id === post.userId);
          return (
            <Post
              key={post.id}
              user={user}
              content={post.content}
              createdAt={post.createdAt}
              likes={post.likes}
              onLike={() => onLike(post.id)}
            />
          );
        })
      )}
    </div>
  );
}

export default Feed;