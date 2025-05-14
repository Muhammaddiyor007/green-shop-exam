import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const BlogDetail = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await fetch(
          `https://green-shop-backend.onrender.com/api/user/blog/${id}?access_token=6803bab0f2a99d0247959f21`
        );
        const data = await response.json();
        setBlog(data?.data);
      } catch (error) {
        console.error('Error fetching blog:', error);
      }
    };

    fetchBlog();
  }, [id]);

  if (!blog) return <div className="text-center mt-10">Loading...</div>;

  return (
    <div className='max-w-3xl mx-auto px-4 py-10'>
      <h1 className='text-3xl font-bold mb-4'>{blog.title}</h1>
      <p className='text-gray-600 mb-6'>{blog.short_description}</p>
      <div className='border-t pt-4 text-gray-500'>
        Views: {blog.views} | Comments: {blog.__v} | Likes: {blog.reaction_length}
      </div>
    </div>
  );
};

export default BlogDetail;
