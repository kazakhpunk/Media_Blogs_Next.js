import Image from 'next/image';
import { News } from '../types/types';
import React from 'react';
import Link from 'next/link';

export default function NewsItem  ({ id, title, body, reactions, tags, views }: News ) {
  return (
    <div className="bg-white shadow rounded-lg p-2 flex items-start mb-10">
      <div className="flex-1 space-y-5">
        <div className="text-sm text-gray-500 flex items-center space-x-2 mb-2">
          <div className='space-x-1'>
            <span className="font-bold">Authors name</span>
            <span>about</span>
            <span className="font-bold">{tags[0]}, {tags[1]}, and {tags[2]}</span>
          </div>
          <span>|</span>
          <span>7 July</span>
        </div>
        <h2 className="text-2xl font-bold mb-2">{title}</h2>
        <p className="text-gray-600 mb-4">{body}</p>
        <div className="pt-10 text-sm text-gray-500 flex items-center space-x-2">
          <span className="bg-gray-200 px-2 py-1 rounded">{tags[0]}</span>
          <span className="bg-gray-200 px-2 py-1 rounded">{tags[1]}</span>
          <span className="bg-gray-200 px-2 py-1 rounded">{tags[2]}</span>
          <span>|</span>
          <span className="px-2 py-1">12 min read</span>
          <Link href={`/posts/${id}`} className="px-2 py-1">
						<p className='text-slate-400 cursor-pointer hover:text-black'>Read more...</p>
					</Link>
        </div>
      </div>
      <div className="flex-shrink-0 ml-8">
       {/* ? <Image className="h-[265px] w-[265px] object-cover" src={imageUrl} al="News Image" width={265} height={265} /> */}
      </div>
    </div>
  );
}
