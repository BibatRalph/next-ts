"use client";

import { useState } from 'react';

const LikeButton: React.FC = () => {
  const [liked, setLiked] = useState(false);

  const handleClick = () => {
    setLiked(!liked);
  };

  return (
    <button
      onClick={handleClick}
      className={`inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm ${
        liked ? 'text-red-600 bg-red-100 hover:bg-red-200' : 'text-gray-700 bg-gray-100 hover:bg-gray-200'
      } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500`}
    >
      <span>{liked ? 'Liked' : 'Like'}</span>
    </button>
  );
};

export default LikeButton;
