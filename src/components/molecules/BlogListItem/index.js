import React from 'react';
import { Link } from 'react-router-dom';

export const BlogListItem = ({ date, link, children }) => (
  <li>
    <Link to={link}>{date} :: {children}</Link>
  </li>
);