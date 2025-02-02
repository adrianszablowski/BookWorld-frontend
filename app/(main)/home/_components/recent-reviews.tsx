import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { reviews } from "@/mocks/mocks";
import map from "lodash/map";
import ReviewCard from "./review-card";

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
