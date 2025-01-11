"use client";

import {
  Bold,
  Italic,
  Underline,
  Strikethrough,
  AlignLeft,
  AlignCenter,
  AlignRight,
  AlignJustify,
  ListOrdered,
  List,
  Image,
  Link,
  Quote,
  Undo2,
  Redo2,
} from "lucide-react";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Card } from "../ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import { HexColorInput, HexColorPicker } from "react-colorful";

export default function RichTextEditor() {
  const [color, setColor] = useState("#aabbcc");

  const [isOpen, setIsOpen] = useState(false);

  return (
    <Card>
      <div className="flex flex-row gap-1 w-full border-b px-4 pt-3 pb-1">
        <div className="flex flex-row gap-1 h-fit">
          <button className="p-2">
            <Undo2 className="h-4 w-4" />
          </button>

          <button className="p-2">
            <Redo2 className="h-4 w-4" />
          </button>
        </div>

        <div className="relative h-fit">
          <button
            onClick={() => setIsOpen((prev) => !prev)}
            className="w-9 h-9 rounded-full border border-gray-300"
            style={{ backgroundColor: color }}
          ></button>
          {isOpen && (
            <div
              tabIndex={0}
              onBlur={() => setIsOpen(false)}
              className="absolute top-12 left-0 z-10 p-4 bg-white border border-gray-200 rounded-lg shadow-lg"
            >
              <HexColorPicker color={color} onChange={setColor} />

              <HexColorInput
                color={color}
                onChange={setColor}
                placeholder="Type a color"
                prefixed
                alpha
                className="w-full mt-2 px-3 py-2 border border-gray-300 rounded-md text-sm"
              />
            </div>
          )}
        </div>

        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Text type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="heading-1">Header 1</SelectItem>
            <SelectItem value="heading-2">Header 2</SelectItem>
            <SelectItem value="heading-3">Header 3</SelectItem>
            <SelectItem value="heading-4">Header 4</SelectItem>
            <SelectItem value="heading-5">Header 5</SelectItem>
            <SelectItem value="heading-6">Header 6</SelectItem>
            <SelectItem value="normal-text">Normal text</SelectItem>
          </SelectContent>
        </Select>

        <ToggleGroup type="multiple" variant={"outline"} className="h-fit">
          <ToggleGroupItem value="bold" aria-label="Toggle bold">
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

        <ToggleGroup type="single" variant={"outline"} className="h-fit">
          <ToggleGroupItem value="align-left" aria-label="Toggle align left">
            <AlignLeft className="h-4 w-4" />
          </ToggleGroupItem>

          <ToggleGroupItem
            value="align-center"
            aria-label="Toggle align center"
          >
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

        <ToggleGroup type="multiple" variant={"outline"} className="h-fit">
          <ToggleGroupItem
            value="unordered-list"
            aria-label="Toggle unordered list"
          >
            <List className="h-4 w-4" />
          </ToggleGroupItem>

          <ToggleGroupItem
            value="ordered-list"
            aria-label="Toggle ordered list"
          >
            <ListOrdered className="h-4 w-4" />
          </ToggleGroupItem>

          <ToggleGroupItem value="link" aria-label="Toggle link">
            <Link className="h-4 w-4" />
          </ToggleGroupItem>

          <ToggleGroupItem value="image" aria-label="Toggle image">
            <Image className="h-4 w-4" />
          </ToggleGroupItem>

          <ToggleGroupItem value="quote" aria-label="Toggle Quote">
            <Quote className="h-4 w-4" />
          </ToggleGroupItem>
        </ToggleGroup>
      </div>
    </Card>
  );
}
