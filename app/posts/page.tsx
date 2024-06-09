'use client';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import NewsList from '../components/NewsList';
import { getPosts } from '../services/api';
import { News } from '../types/types';
import { useAuth } from '@/context/AuthContext';
import Logout from '../components/header'

const Posts: React.FC = () => {
	const [posts, setPosts] = useState<News[]>([]);
	const [error, setError] = useState<string | null>(null);
	const { isAuthenticated } = useAuth();
	const router = useRouter();

	useEffect(() => {
		if (!isAuthenticated) {
			router.push('/');
			return;
		}

		const fetchPosts = async () => {
			try {
				const fetched: News[] = await getPosts();
				setPosts(fetched);
			} catch (error) {
				setError('Error fetching posts');
			}
		};

		fetchPosts();
	}, [isAuthenticated, router]);

	if (error) {
		return <div className='container text-center mt-[20%]'>{error}</div>;
	}

	return (
		<>
			<Logout/>
			<main className='container mx-auto py-10'>
				<NewsList posts={posts} />
			</main>
		</>
	);
};

export default Posts;