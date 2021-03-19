import React from 'react';
import { DynamicImage } from '../components';
import { RightArrow } from '../icons';
import { Link } from 'gatsby';

export default function Blog({ blog }) {
  return (
    <div className="shadow-1 bg-white rounded-sm">
      <DynamicImage
        style={{ justifySelf: 'flex-end' }}
        src={blog.image}
        alt={blog.title}
      />
      <div className="p-4">
        <p className="mb-3 text-primary">{blog.category}</p>
        <p className="text-lg mb-1">{blog.title}</p>
        <p className="text-sm text-primary mb-2">{blog.date}</p>
        <article>{blog.content}</article>

        <Link className="mt-4" to={blog.url}>
          Read More <RightArrow className="ml-1" />
        </Link>
      </div>
    </div>
  );
}
