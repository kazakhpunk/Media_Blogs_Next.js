export interface Reactions {
	likes: number;
	dislikes: number;
  }

export interface News {
    id: number;
	title: string;
	body: string;
	reactions: Reactions;
	tags: string[];
	views: string;
}

export interface NewsListProps {
	posts: News[];
  }