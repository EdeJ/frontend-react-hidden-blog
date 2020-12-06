import React from 'react';
import { Link } from 'react-router-dom';
import { useAuthentication } from '../../hooks/authentication';
import posts from '../../data/posts.json'

export const Blog = () => {
  const { isAuthenticated } = useAuthentication();
  return (
    <>
      <h1>Blogposts {posts.length}</h1>
      <ul>
        {posts.map((post) => (
          <>
            {(!post.private || isAuthenticated) && (
              <li>
                <Link to={`/blog/${post.id}`}>{post.title}</Link>
              </li>
            )}
          </>
        ))}
      </ul>
    </>
  );
};