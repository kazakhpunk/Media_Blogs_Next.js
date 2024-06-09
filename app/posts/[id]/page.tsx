'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';
import { News } from '@/app/types/types';
import { useParams } from 'next/navigation';
import Link from 'next/link';

const PostDetail: React.FC = () => {
  const params = useParams();
	const { id } = params;
  const [post, setPost] = useState<News | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);


  useEffect(() => {
    if (id) {
      const fetchPost = async () => {
        try {
          const response = await axios.get(`https://dummyjson.com/posts/${id}`);
          setPost(response.data);
        } catch (error) {
          setError('Error fetching post');
        } finally {
          setLoading(false);
        }
      };

      fetchPost();
    }
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="max-w-5xl mx-auto p-6 bg-gray-900 text-white rounded-lg shadow-lg min-h-[30vh] space-y-10">
        <div className="flex justify-between items-center mb-4">
          <Link href={`/posts`} className="px-2 py-1">
              <p className='text-slate-400 cursor-pointer hover:text-black'>Go back...</p>
          </Link>
          <h1 className="text-2xl font-bold">{post.title}</h1>
          <button className="text-gray-400 hover:text-white">Add Post</button>
        </div>
        <p className="text-lg mb-4">{post.body}</p>
        <div className="flex items-center space-x-4 text-gray-400">
          <div className="flex items-center space-x-1">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"></path>
            </svg>
            <span>{post.reactions['likes']}</span>
          </div>
          <button className="text-blue-500">Edit</button>
        </div>
      </div>
    </div>
  );
}

export default PostDetail;
