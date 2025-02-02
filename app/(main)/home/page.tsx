import { BookGrid } from "./_components/book-grid";
import { RecentReviews } from "./_components/recent-reviews";

export default function Home() {
  return (
    <div className="space-y-5">
      <h1 className="text-3xl font-bold">Welcome to BookWorld</h1>
      <RecentReviews />
      <BookGrid />
    </div>
  );
}
