export type Review = {
  id: string;
  user: {
    name: string;
    avatar: string;
  };
  book: string;
  comment: string;
  rating: number;
  date: string;
};

export type Book = {
  id: string;
  title: string;
  author: string;
  rating: number;
  cover: string;
  description: string;
};
