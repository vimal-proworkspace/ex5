import React, { useState } from "react";

function PostForm({ onAdd }) {
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (content.trim() === "") return;
    onAdd(content);
    setContent("");
  };

  return (
    <form className="post-form" onSubmit={handleSubmit}>
      <textarea
        value={content}
        onChange={e => setContent(e.target.value)}
        placeholder="What's happening?"
        rows={2}
        className="post-textarea"
      />
      <button className="post-btn" type="submit">Post</button>
    </form>
  );
}

export default PostForm;