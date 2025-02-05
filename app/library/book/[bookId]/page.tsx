import { books } from "@/mocks/mocks";
import BookDetail from "./_components/book-detail";
import { ReviewSection } from "./_components/review-section";

export default function BookDetails() {
  return (
    <div className="space-y-6">
      <BookDetail book={books[0]} />
      <ReviewSection />
    </div>
  );
}
