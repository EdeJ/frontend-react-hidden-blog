import React from "react";
import { useParams } from "react-router-dom";
import { BlogContent } from '../../components/molecules';
import posts from '../../data/posts.json'

export const BlogPost = () => {
  const { id } = useParams();
  const post = posts.find(p => p.id === id);

  return (
    <div className="App">
      {post && (
        <BlogContent
          title={post.title}
          content={post.content}
          date={post.date.split(' ')[0]}
        />
      )}
    </div>
  );
};
