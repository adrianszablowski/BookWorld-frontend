import { books } from "@/mocks/mocks";
import map from "lodash/map";
import BookCard from "./book-card";

export function BookGrid() {
  return (
    <div>
      <h2 className="mb-4 text-2xl font-semibold">Popular Books</h2>
      <div className="flex flex-wrap gap-6">
        {map(books, (book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
}
