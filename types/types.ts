export type ReadingList = {
  id: string;
  name: string;
  bookCount: number;
};

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
  cover: string;
  author: string;
  rating: number;
  description: string;
};

export type User = {
  id: string;
  name: string;
  username: string;
  avatar: string;
  bio: string;
  readingLists: ReadingList[];
  reviews: Review[];
  addedBooks: Book[];
};
