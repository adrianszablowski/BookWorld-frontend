import { books } from "@/mocks/mocks";
import { BooksGrid } from "./_components/books-grid";
import { RecentReviews } from "./_components/recent-reviews";

export default function Home() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Welcome to BookWorld</h1>
      <RecentReviews />
      <BooksGrid header="Popular Books" books={books} />
    </div>
  );
}
