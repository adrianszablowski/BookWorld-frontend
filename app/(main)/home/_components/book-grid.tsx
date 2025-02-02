import map from "lodash/map";
import BookCard from "./book-card";

const books = [
  {
    id: 1,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    rating: 4.5,
    cover: "/placeholder.svg",
  },
  {
    id: 2,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    rating: 4.8,
    cover: "/placeholder.svg",
  },
  {
    id: 3,
    title: "1984",
    author: "George Orwell",
    rating: 4.6,
    cover: "/placeholder.svg",
  },
  {
    id: 4,
    title: "Pride and Prejudice",
    author: "Jane Austen",
    rating: 4.7,
    cover: "/placeholder.svg",
  },
  {
    id: 5,
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    rating: 4.3,
    cover: "/placeholder.svg",
  },
  {
    id: 6,
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    rating: 4.9,
    cover: "/placeholder.svg",
  },
];

export function BookGrid() {
  return (
    <div>
      <h2 className="mb-4 text-2xl font-semibold">Popular Books</h2>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {map(books, (book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
}
