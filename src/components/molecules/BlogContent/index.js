import React from 'react';
import { Heading , P } from '../../atoms';

// De molecule BlogContent bevat de titel, content en datum van de post.
// Het time-element is een valide HTML-element: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/time
export const BlogContent = ({ title, content, date }) => (
  <section>
    <Heading level="h1">{title}</Heading>
    <time datetime={date}>{date}</time>
    <P>{content}</P>
  </section>
)