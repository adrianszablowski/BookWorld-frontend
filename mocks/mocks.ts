import { Book, Review, User } from "@/types/types";

export const books: Book[] = [
  {
    id: "1",
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    rating: 4.8,
    cover:
      "https://m.media-amazon.com/images/I/81aY1lxk+9L._AC_UF1000,1000_QL80_.jpg",
    description:
      "A novel about the serious issues of rape and racial inequality.",
  },
  {
    id: "2",
    title: "1984",
    author: "George Orwell",
    rating: 4.7,
    cover:
      "https://m.media-amazon.com/images/I/81aY1lxk+9L._AC_UF1000,1000_QL80_.jpg",
    description:
      "A dystopian novel set in a totalitarian society under constant surveillance.",
  },
  {
    id: "3",
    title: "Pride and Prejudice",
    author: "Jane Austen",
    rating: 4.6,
    cover:
      "https://m.media-amazon.com/images/I/81aY1lxk+9L._AC_UF1000,1000_QL80_.jpg",
    description:
      "A romantic novel that deals with issues of class, marriage, and morality.",
  },
  {
    id: "4",
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    rating: 4.5,
    cover:
      "https://m.media-amazon.com/images/I/81aY1lxk+9L._AC_UF1000,1000_QL80_.jpg",
    description:
      "A novel that explores themes of decadence and excess in the Jazz Age.",
  },
  {
    id: "5",
    title: "Moby-Dick",
    author: "Herman Melville",
    rating: 4.2,
    cover:
      "https://m.media-amazon.com/images/I/81aY1lxk+9L._AC_UF1000,1000_QL80_.jpg",
    description:
      "A novel about Captain Ahab’s obsessive quest to kill the white whale.",
  },
];

export const reviews: Review[] = [
  {
    id: "101",
    user: {
      name: "John Doe",
      avatar: "",
    },
    book: "To Kill a Mockingbird",
    comment: "A must-read classic that touches on deep social issues.",
    rating: 5,
    date: "2024-02-02",
  },
  {
    id: "102",
    user: {
      name: "Jane Smith",
      avatar: "",
    },
    book: "1984",
    comment:
      "A terrifying look into a dystopian future that feels all too real.",
    rating: 5,
    date: "2024-01-20",
  },
  {
    id: "103",
    user: {
      name: "Alice Brown",
      avatar: "",
    },
    book: "Pride and Prejudice",
    comment: "A delightful and witty novel with timeless characters.",
    rating: 4,
    date: "2024-01-15",
  },
  {
    id: "104",
    user: {
      name: "Robert Wilson",
      avatar: "",
    },
    book: "The Great Gatsby",
    comment: "A beautifully written critique of the American Dream.",
    rating: 4,
    date: "2024-01-10",
  },
  {
    id: "105",
    user: {
      name: "Emily Davis",
      avatar: "",
    },
    book: "Moby-Dick",
    comment: "A dense but rewarding read about obsession and fate.",
    rating: 3,
    date: "2024-01-05",
  },
];

export const user: User = {
  id: "1",
  name: "Jane Doe",
  username: "@janereads",
  avatar: "",
  bio: "Avid reader, book reviewer, and aspiring author. I love getting lost in new worlds and discussing great stories.",
  readingLists: [
    { id: "1", name: "To Read", bookCount: 15 },
    { id: "2", name: "Currently Reading", bookCount: 3 },
    { id: "3", name: "Read", bookCount: 142 },
    { id: "4", name: "Favorites", bookCount: 27 },
  ],
  reviews: [
    {
      id: "1",
      user: { name: "Jane Doe", avatar: "" },
      book: "The Great Gatsby",
      comment: "A timeless classic that never fails to captivate...",
      rating: 5,
      date: "2024-02-01",
    },
    {
      id: "2",
      user: { name: "Jane Doe", avatar: "" },
      book: "1984",
      comment: "A chilling portrayal of a dystopian future...",
      rating: 4,
      date: "2024-02-02",
    },
    {
      id: "3",
      user: { name: "Jane Doe", avatar: "" },
      book: "To Kill a Mockingbird",
      comment: "Harper Lee's masterpiece continues to resonate...",
      rating: 5,
      date: "2024-02-03",
    },
  ],
  addedBooks: [
    {
      id: "1",
      title: "The Catcher in the Rye",
      cover:
        "https://m.media-amazon.com/images/I/81aY1lxk+9L._AC_UF1000,1000_QL80_.jpg",
      author: "J.D. Salinger",
      rating: 4.0,
      description: "A controversial coming-of-age novel.",
    },
    {
      id: "2",
      title: "Pride and Prejudice",
      cover:
        "https://m.media-amazon.com/images/I/81aY1lxk+9L._AC_UF1000,1000_QL80_.jpg",
      author: "Jane Austen",
      rating: 4.6,
      description:
        "A romantic novel that deals with issues of class, marriage, and morality.",
    },
    {
      id: "3",
      title: "The Hobbit",
      cover:
        "https://m.media-amazon.com/images/I/81aY1lxk+9L._AC_UF1000,1000_QL80_.jpg",
      author: "J.R.R. Tolkien",
      rating: 4.7,
      description: "A fantasy novel about a hobbit's adventurous quest.",
    },
  ],
};
