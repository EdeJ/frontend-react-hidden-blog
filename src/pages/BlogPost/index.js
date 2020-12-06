import React from "react";
import { useParams } from "react-router-dom";
import posts from '../../data/posts.json'

export const BlogPost = () => {
  const { id } = useParams();
  const post = posts.find(p => p.id === id);

  return (
    <div className="App">
      {post && (
        <>
          <h1>{post.title}</h1>
          <div>{post.date}</div>
          <p>{post.content}</p>
        </>
      )}
    </div>
  );
};
