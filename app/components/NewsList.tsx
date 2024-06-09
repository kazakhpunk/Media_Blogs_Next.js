import React from 'react';
import NewsItem from './NewsItem';
import { News, NewsListProps } from '../types/types';

import image1 from './images/image1.png';
import image2 from './images/image2.png';
import image3 from './images/image3.png';



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
