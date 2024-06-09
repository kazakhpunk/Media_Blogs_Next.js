import React from 'react';
import NewsItem from './NewsItem';
import { News } from '../types/types'

import image1 from './images/image1.png';
import image2 from './images/image2.png';
import image3 from './images/image3.png';

  
  const NewsList: React.FC<News> = ({ posts }) => {
    return (
      <main className='grid grid-flow-row gap-6'>
        {posts.map((post: News) => (
          <NewsItem
            key={post.id}
            {...post}
          />
        ))}
      </main>
    );
  }