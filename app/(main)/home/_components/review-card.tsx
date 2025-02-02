import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Review } from "@/types/types";

type ReviewProps = {
  review: Review;
};

export default function ReviewCard({ review }: Readonly<ReviewProps>) {
  return (
    <div key={review.id} className="flex items-start gap-4">
      <Avatar>
        <AvatarImage src={review.avatar} alt={review.user} />
        <AvatarFallback>{review.user}</AvatarFallback>
      </Avatar>
      <div>
        <p className="text-sm font-medium">
          {review.user} on {review.book}
        </p>
        <p className="text-sm text-muted-foreground">{review.comment}</p>
      </div>
    </div>
  );
}
