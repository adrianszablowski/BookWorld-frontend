import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ReadingList } from "@/types/types";
import map from "lodash/map";
import { BookOpen } from "lucide-react";

type ReadingListsProps = {
  lists: ReadingList[];
};

export default function ReadingLists({ lists }: Readonly<ReadingListsProps>) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Reading Lists</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4 sm:grid-cols-2">
          {map(lists, (list) => (
            <Card key={list.id}>
              <CardContent className="flex items-center gap-2 p-4">
                <BookOpen className="size-5 text-muted-foreground" />
                <div>
                  <h3 className="font-semibold">{list.name}</h3>
                  <p className="text-sm text-muted-foreground">
                    {list.bookCount} books
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
