export type Review = {
  id: number;
  user: string;
  book: string;
  comment: string;
  avatar: string;
};

export type Book = {
  id: number;
  title: string;
  author: string;
  rating: number;
  cover: string;
};
