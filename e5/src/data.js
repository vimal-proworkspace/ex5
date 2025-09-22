// src/data.js
// Initial mock users and posts

export const initialUsers = [
  { id: 1, name: "Alice", isFollowed: true, followers: 2, following: 1 },
  { id: 2, name: "Bob", isFollowed: false, followers: 1, following: 2 },
  { id: 3, name: "Charlie", isFollowed: true, followers: 1, following: 1 }
];

export const initialPosts = [
  { id: 1, userId: 1, content: "Hello, this is Alice's first post!", createdAt: Date.now() - 1000 * 60 * 60, likes: 2 },
  { id: 2, userId: 3, content: "Charlie here. Excited to join!", createdAt: Date.now() - 1000 * 60 * 20, likes: 1 },
  { id: 3, userId: 1, content: "Another update from Alice.", createdAt: Date.now() - 1000 * 60 * 2, likes: 0 }
];