import React from 'react';
import { useAuthentication } from '../../hooks/authentication';
import { Heading } from '../../components/atoms';
import { BlogListItem } from '../../components/molecules';
import posts from '../../data/posts.json'

export const Blog = () => {
  const { isAuthenticated } = useAuthentication();
  return (
    <>
      <Heading level="h1">Blogposts</Heading>
      <ul>
        {posts.map((post) => (
          <>
            {(!post.private || isAuthenticated) && (
              <BlogListItem link={`/blog/${post.id}`} date={post.date.split(' ')[0]}>
                {post.title}
              </BlogListItem>
            )}
          </>
        ))}
      </ul>
    </>
  );
};