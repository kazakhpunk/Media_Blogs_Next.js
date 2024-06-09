export interface News {
    id: number;
	title: string;
	body: string;
	likes: string;
	dislikes: string;
	tags: string[];
	views: string;
}


  
export interface NewsListProps {
    posts: News[];
  }