import React from 'react';
import client, { urlFor } from '@/app/components/client';
import { PortableText } from '@portabletext/react';

const Post = async ({ params }) => {
  const { slug } = params;
  let query = `*[_type == "blog" && slug.current == '${slug}']{content, title,  blogimage}[0]`;
  const blog = await client.fetch(query);

  const postStyle = {
    maxWidth: '800px',
    margin: 'auto',
    padding: '20px',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  };

  const titleStyle = {
    fontSize: '2.5rem',
    color: '#007BFF',
    marginBottom: '10px',
    fontFamily: 'Arial, sans-serif',
  };

  const authorStyle = {
    fontSize: '1rem',
    color: '#333',
  };

  const dateStyle = {
    fontSize: '0.8rem',
    color: '#777',
  };

  return (
    <div style={postStyle}>
      <h1 style={titleStyle}>{blog.title}</h1>
      <div className="blogpost-meta">
        <div className="authour-info" style={authorStyle}>
          <b>
            <a href="index.html">Author - Priyavrat</a>
          </b>
        </div>
        <div style={dateStyle}>{blog.createdAt}</div>
      </div>
      <PortableText value={blog.content} />
    </div>
  );
};

export default Post;
