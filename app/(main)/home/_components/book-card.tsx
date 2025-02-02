import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Star } from "lucide-react";
import Image from "next/image";

type BookCardProps = {
  book: {
    id: number;
    title: string;
    author: string;
    rating: number;
    cover: string;
  };
};

export default function BookCard({ book }: Readonly<BookCardProps>) {
  return (
    <Card>
      <CardContent>
        <Image
          src={book.cover || "/placeholder.svg"}
          alt={book.title}
          width={300}
          height={400}
          className="h-48 w-full object-cover"
        />
      </CardContent>
      <CardFooter className="flex-col items-start gap-1">
        <h3 className="text-lg font-semibold">{book.title}</h3>
        <p className="text-sm">{book.author}</p>
        <div className="flex items-center gap-1">
          <Star className="size-5 fill-current text-yellow-400" />
          <span className="text-sm text-muted-foreground">
            {book.rating.toFixed(1)}
          </span>
        </div>
      </CardFooter>
    </Card>
  );
}
