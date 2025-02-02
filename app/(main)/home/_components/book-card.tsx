import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Book } from "@/types/types";
import { Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type BookCardProps = {
  book: Book;
};

export default function BookCard({ book }: Readonly<BookCardProps>) {
  return (
    <Link
      href={`library/book/${book.id}`}
      prefetch={false}
      className="w-full sm:w-auto"
    >
      <Card>
        <CardContent className="flex justify-center p-6">
          <Image
            src={book.cover}
            alt={book.title}
            width={200}
            height={400}
            className="h-60 object-fill"
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
    </Link>
  );
}
