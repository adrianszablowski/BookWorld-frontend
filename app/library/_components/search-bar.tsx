import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export default function SearchBar() {
  return (
    <form className="flex w-full max-w-sm items-center gap-2">
      <Input
        type="text"
        placeholder="Search for books..."
        className="flex-grow"
      />
      <Button type="submit">
        <Search className="size-4" /> Search
      </Button>
    </form>
  );
}
