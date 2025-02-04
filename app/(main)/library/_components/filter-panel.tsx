import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Slider } from "@/components/ui/slider";
import { genres } from "@/mocks/mocks";
import map from "lodash/map";

type FilterPanelProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function FilterPanel({
  isOpen,
  onClose,
}: Readonly<FilterPanelProps>) {
  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Filters</SheetTitle>
        </SheetHeader>
        <div className="space-y-6">
          <div className="space-y-2">
            <h3 className="text-lg font-semibold">Genre</h3>
            {map(genres, (genre) => (
              <div key={genre} className="flex items-center gap-2">
                <Checkbox id={genre} />
                <Label htmlFor={genre}>{genre}</Label>
              </div>
            ))}
          </div>
          <div className="space-y-2">
            <h3 className="text-lg font-semibold">Publication Year</h3>
            <Slider
              min={1800}
              max={new Date().getFullYear()}
              step={1}
              value={[2000]}
            />
            <div className="flex justify-between">
              <span>{2024}</span>
              <span>{2025}</span>
            </div>
          </div>
          <div className="space-y-2">
            <h3 className="text-lg font-semibold">Minimum Rating</h3>
            <Slider min={0} max={5} step={0.5} value={[4]} />
            <div className="flex justify-between">
              <span>0</span>
              <span>4</span>
              <span>5</span>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
