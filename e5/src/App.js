import React, { useState } from "react";
import { initialUsers, initialPosts } from "./data";
import UserList from "./UserList";
import Feed from "./Feed";
import PostForm from "./PostForm";
import Profile from "./Profile";
import "./App.css";

function App() {
  const [users, setUsers] = useState(initialUsers);
  const [posts, setPosts] = useState(initialPosts);
  const currentUserId = 1;

  // Add new post
  const handleAddPost = (content) => {
    const newPost = {
      id: posts.length + 1,
      userId: currentUserId,
      content,
      createdAt: Date.now(),
      likes: 0
    };
    setPosts([newPost, ...posts]);
  };

  // Like a post
  const handleLikePost = (postId) => {
    setPosts(posts.map(post =>
      post.id === postId ? { ...post, likes: post.likes + 1 } : post
    ));
  };

  // Follow/unfollow user
  const handleFollowToggle = (id) => {
    setUsers(users.map(user =>
      user.id === id
        ? { ...user, isFollowed: !user.isFollowed }
        : user
    ));
    // Update follower count (simple logic for demo)
    setUsers(users.map(user => {
      if (user.id === id) {
        return { ...user, followers: user.isFollowed ? user.followers - 1 : user.followers + 1 };
      }
      if (user.id === currentUserId) {
        return { ...user, following: user.isFollowed ? user.following - 1 : user.following + 1 };
      }
      return user;
    }));
  };

  return (
    <div className="container">
      <header>
        <h1>Microblog</h1>
      </header>
      <main>
        <Profile currentUser={users.find(u => u.id === currentUserId)} />
        <PostForm onAdd={handleAddPost} />
        <section>
          <h2>Feed</h2>
          <Feed
            posts={posts}
            users={users}
            currentUserId={currentUserId}
            onLike={handleLikePost}
          />
        </section>
        <section>
          <h2>Who to follow</h2>
          <UserList
            users={users}
            currentUserId={currentUserId}
            onFollowToggle={handleFollowToggle}
          />
        </section>
      </main>
      <footer>
        
      </footer>
    </div>
  );
}

export default App;