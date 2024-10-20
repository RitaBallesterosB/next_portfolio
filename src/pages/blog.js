import React from 'react';
import Link from 'next/link';

import { posts } from '../pages/profile';
import Layout from '@/components/Layout';

const PostCard = ({ post }) => {
  const handleReadClick = () => {
    window.open(post.url, '_blank'); // Abre la URL en una nueva pestaña
  };

  return (
    <div className="col-md-4">
      <div className="card mt-4 mb-3 mx-2">
        <div className="overflow">
          <img src={post.imageURL} alt="" className="card-img-top" />
        </div>
        <div className="card-body ">
          {/* Solo muestra el título sin enlace */}
          <h3>{post.title}</h3> {/* Carga dinámica del título */}
          <p>{post.content}</p>
          {/* El botón "Read" redirige a la URL dinámica */}
          <button className="btn btn-light" onClick={handleReadClick}>
            See more
          </button>
        </div>
      </div>
    </div>
  );
};


const blog = () => {
  return (
    <Layout title="My Blog" footer={false} dark>
      <div className='row'>
        {posts.map((post, i) => (
          <PostCard post={post} key={i}/>
        ))}
      </div>
    </Layout>
  );
};

export default blog