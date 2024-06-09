'use client';

import React, { useEffect, useState } from 'react';
import NewsList from '../components/NewsList';
import { getPosts } from '../services/api';
import { News } from '../types/types';


const Posts: React.FC = () => {
	const [posts, setPosts] = useState<News[]>([]);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const fetchPosts = async () => {
			try {
				const fetched: News[] = await getPosts();
				setPosts(fetched);
			} catch (error) {
				setError('Error fetching posts');
			}
		};

		fetchPosts();
	}, []);

	if (error) {
		return <div className='container text-center mt-[20%]'>{error}</div>;
	}

	return (
		<main className='container mx-auto py-10'>
			<NewsList posts={posts} />
		</main>
	);
};

export default Posts;