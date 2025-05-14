import React, { useEffect, useState } from 'react';
import { Card, Button } from 'antd';
import { EyeOutlined, MessageOutlined, HeartOutlined } from '@ant-design/icons';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';

const CardComponent = ({ _id, title, short_description, views, __v, reaction_length }) => (
  <Card className='w-full shadow-md hover:shadow-lg duration-300'>
    <Link to={`/blog/${_id}`}>
      <h2 className='font-bold text-[18px] mb-4 text-green-700 hover:underline cursor-pointer'>
        {title}
      </h2>
    </Link>
    <p className='mb-6'>{short_description}</p>
    <div className='flex justify-around border-t pt-3 text-gray-500'>
      <div><EyeOutlined /> {views}</div>
      <div><MessageOutlined /> {__v}</div>
      <div><HeartOutlined /> {reaction_length}</div>
    </div>
  </Card>
);

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async (search = '') => {
    try {
      const response = await fetch(
        `https://green-shop-backend.onrender.com/api/user/blog?access_token=6803bab0f2a99d0247959f21&search=${search}`
      );
      const data = await response.json();
      setBlogs(data?.data || []);
    } catch (err) {
      console.error('Failed to fetch blogs:', err);
    }
  };

  const handleSearch = () => {
    fetchData(searchTerm);
  };

  return (
    <div className='text-center px-4 md:px-10'>
      {/* Top banner with images */}
      <div className='py-10 bg-[#f5f5f5] flex flex-wrap justify-center gap-6'>
        {[1, 2, 3, 4, 5].map((num) => (
          <img
            key={num}
            src={`https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Fimages%2Fblog_avatar_${num}.png?alt=media&token=`}
            alt={`Avatar ${num}`}
            className='w-[100px] h-[50px] object-contain'
          />
        ))}
      </div>

      {/* Heading & Description */}
      <div className='mt-10'>
        <h2 className='text-3xl md:text-6xl font-black leading-tight'>
          Monetize your content with <span className='text-[#49a358]'>GreenShop</span>
        </h2>
        <h3 className='text-lg md:text-2xl mt-4 mb-6'>
          Greenshop - a platform for buying and selling, publishing and
          monetizing all types of flowers: articles, notes, video, photos,
          podcasts or songs.
        </h3>
        <Link to="/">
        <Button type='primary' className='bg-green-600 text-white'>
          Join Greenshop
        </Button>
        </Link>
      </div>

      {/* Search */}
      <h2 className='text-2xl font-bold mt-16 mb-4'>My Feed</h2>
      <div className='w-full max-w-xl mx-auto flex items-center border border-[#d9d9d9] rounded-md overflow-hidden mb-10 h-10'>
        <input
          type='text'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className='w-full px-4 h-full outline-none text-sm'
          placeholder='Search blog...'
        />
        <button
          onClick={handleSearch}
          className='h-full w-10 flex items-center justify-center bg-gray-200 hover:bg-gray-300 transition'
        >
          <SearchIcon fontSize='small' />
        </button>
      </div>

      {/* Blog cards */}
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 pb-20'>
        {blogs.map((blog) => (
          <CardComponent key={blog?._id} {...blog} />
        ))}
      </div>
    </div>
  );
};

export default Blog;
