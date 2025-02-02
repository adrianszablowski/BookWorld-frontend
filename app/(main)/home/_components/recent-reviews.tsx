import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import map from "lodash/map";
import ReviewCard from "./review-card";

const reviews = [
  {
    id: 1,
    user: "Alice",
    book: "The Great Gatsby",
    comment: "A classic that never gets old!",
    avatar: "/placeholder.svg",
  },
  {
    id: 2,
    user: "Bob",
    book: "To Kill a Mockingbird",
    comment: "Powerful and moving story.",
    avatar: "/placeholder.svg",
  },
  {
    id: 3,
    user: "Charlie",
    book: "1984",
    comment: "Chilling and thought-provoking.",
    avatar: "/placeholder.svg",
  },
];

export function RecentReviews() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Reviews</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {map(reviews, (review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
