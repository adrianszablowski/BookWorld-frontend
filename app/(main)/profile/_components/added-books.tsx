import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Book } from "@/types/types";
import map from "lodash/map";
import Image from "next/image";

type AddedBooksProps = {
  books: Book[];
};

export default function AddedBooks({ books }: Readonly<AddedBooksProps>) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Added Books</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {map(books, (book) => (
            <Card key={book.id}>
              <CardContent className="flex flex-col items-center p-4">
                <Image
                  src={book.cover}
                  alt={book.title}
                  width={120}
                  height={180}
                  className="mb-2 object-cover"
                />
                <h3 className="font-semibold">{book.title}</h3>
                <p className="text-sm text-muted-foreground">{book.author}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
