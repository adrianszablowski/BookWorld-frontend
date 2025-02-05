import { Card, CardContent } from "@/components/ui/card";
import { Book } from "@/types/types";
import map from "lodash/map";
import times from "lodash/times";
import { Star } from "lucide-react";
import Image from "next/image";

type BookDetailProps = {
  book: Book;
};

export default function BookDetail({ book }: Readonly<BookDetailProps>) {
  return (
    <Card>
      <CardContent className="flex flex-col gap-4 p-6 md:flex-row md:gap-0">
        <div className="md:flex-shrink-0">
          <Image
            priority
            src={book.cover}
            alt={book.title}
            width={300}
            height={450}
            className="h-full w-full object-cover md:w-48"
          />
        </div>
        <div className="space-y-2 md:p-8">
          <div className="text-sm font-semibold uppercase tracking-wide text-indigo-500">
            {book.author}
          </div>
          <h1 className="text-3xl font-bold leading-tight">{book.title}</h1>
          <div className="flex items-center">
            {map(times(5), (_, i) => (
              <Star
                key={i}
                className={`size-5 ${i < book.rating ? "fill-current text-yellow-400" : "text-gray-300"}`}
              />
            ))}
            <span className="ml-1 text-muted-foreground">
              {book.rating.toFixed(1)} ({book.rating} reviews)
            </span>
          </div>
          <p className="text-justify text-muted-foreground">
            {book.description}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
