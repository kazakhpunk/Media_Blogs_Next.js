
'use client';

import Image from 'next/image';
import './globals.css';
import NewsList from './components/NewsList';
import { useAuth } from '@/context/AuthContext';
import { useState } from 'react';

export default function Home() {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const { login } = useAuth();

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		await login(username, password);
	};

	return (
    <div className="flex justify-center min-h-screen">
      <main className='container mx-auto px-4 mt-20'>
        <form
          onSubmit={handleSubmit}
          className='max-w-md mx-auto mt-10'
        >
          <div>
            <label htmlFor='username'>Username</label>
            <input
              type='text'
              id='username'
              value={username}
              onChange={e => setUsername(e.target.value)}
              className='w-full p-2 mt-2 border border-gray-300 rounded'
              placeholder='emilys'
            />
          </div>
          <div className='mt-4'>
            <label htmlFor='password'>Password</label>
            <input
              type='password'
              id='password'
              value={password}
              onChange={e => setPassword(e.target.value)}
              className='w-full p-2 mt-2 border border-gray-300 rounded mb-5'
              placeholder='emilyspass'
            />
          </div>
          <button
            type='submit'
            className='w-full p-2 mt-4 bg-blue-500 text-white rounded'
          >
            Login
          </button>
        </form>
      </main>
    </div>
	);
}
