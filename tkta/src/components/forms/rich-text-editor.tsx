import {
  Bold,
  Italic,
  Underline,
  Strikethrough,
  AlignLeft,
  AlignCenter,
  AlignRight,
  AlignJustify,
} from "lucide-react";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Card } from "../ui/card";

export default function RichTextEditor() {
  return (
    <Card className="flex flex-row gap-1">
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

      <ToggleGroup type="single" variant={"outline"}>
        <ToggleGroupItem value="align-left" aria-label="Toggle align left">
          <AlignLeft className="h-4 w-4" />
        </ToggleGroupItem>

        <ToggleGroupItem value="align-center" aria-label="Toggle align center">
          <AlignRight className="h-4 w-4" />
        </ToggleGroupItem>

        <ToggleGroupItem value="align-right" aria-label="Toggle align right">
          <AlignCenter className="h-4 w-4" />
        </ToggleGroupItem>

        <ToggleGroupItem
          value="align-justify"
          aria-label="Toggle align justify"
        >
          <AlignJustify className="h-4 w-4" />
        </ToggleGroupItem>
      </ToggleGroup>
    </Card>
  );
}
