import {
  Bold,
  Italic,
  Underline,
  Strikethrough,
} from "lucide-react";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Card } from "../ui/card";

export default function RichTextEditor() {
  return (
    <Card>
      <ToggleGroup type="multiple" variant={"outline"}>
        <ToggleGroupItem
          className="Toggle"
          value="bold"
          aria-label="Toggle bold"
        >
          <Bold className="h-4 w-4" />
        </ToggleGroupItem>

        <ToggleGroupItem value="italic" aria-label="Toggle italic">
          <Italic className="h-4 w-4" />
        </ToggleGroupItem>

        <ToggleGroupItem value="underline" aria-label="Toggle underline">
          <Underline className="h-4 w-4" />
        </ToggleGroupItem>

        <ToggleGroupItem
          value="strikethrough"
          aria-label="Toggle strikethrough"
        >
          <Strikethrough className="h-4 w-4" />
        </ToggleGroupItem>
      </ToggleGroup>
    </Card>
  );
}
