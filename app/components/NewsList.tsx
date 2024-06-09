import React from 'react';
import NewsItem from './NewsItem';
import { News, NewsListProps } from '../types/types';

const NewsList: React.FC<NewsListProps> = ({ posts }) => {
  return (
    <main className='grid grid-flow-row gap-6'>
      {posts.map((post) => (
        <NewsItem
          key={post.id}
          {...post}
        />
      ))}
    </main>
  );
}

export default NewsList;
