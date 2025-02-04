import { Book } from "@/types/types";
import map from "lodash/map";
import BookCard from "./book-card";

type BooksGridProps = {
  header: string;
  books: Book[];
};

export function BooksGrid({ header, books }: Readonly<BooksGridProps>) {
  return (
    <div>
      <h2 className="mb-4 text-2xl font-semibold">{header}</h2>
      <div className="flex flex-wrap gap-6">
        {map(books, (book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
}
