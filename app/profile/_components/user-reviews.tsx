import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Review } from "@/types/types";
import map from "lodash/map";
import times from "lodash/times";
import { Star } from "lucide-react";
import Image from "next/image";

type UserReviewsProps = {
  reviews: Review[];
};

export default function UserReviews({ reviews }: Readonly<UserReviewsProps>) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Reviews</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {map(reviews, (review) => (
            <Card key={review.id}>
              <CardContent className="flex items-start p-4">
                <Image
                  src={
                    "https://m.media-amazon.com/images/I/81aY1lxk+9L._AC_UF1000,1000_QL80_.jpg"
                  }
                  alt={review.book}
                  width={60}
                  height={90}
                  className="mr-4 object-cover"
                />
                <div>
                  <h3 className="font-semibold">{review.book}</h3>
                  <div className="my-1 flex items-center">
                    {map(times(5), (_, i) => (
                      <Star
                        key={i}
                        className={`size-4 ${i < review.rating ? "fill-current text-yellow-400" : "text-gray-300"}`}
                      />
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {review.rating}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
