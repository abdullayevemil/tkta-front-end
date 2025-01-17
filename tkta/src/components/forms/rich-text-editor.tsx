// "use client";

// import {
//   Bold,
//   Italic,
//   Underline,
//   Strikethrough,
//   AlignLeft,
//   AlignCenter,
//   AlignRight,
//   AlignJustify,
//   ListOrdered,
//   List,
//   Link,
//   Undo2,
//   Redo2,
// } from "lucide-react";
// import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import { useState } from "react";
// import { HexColorInput, HexColorPicker } from "react-colorful";
// import { Editor } from "@tiptap/react";
// import { Image as ImageIcon } from "lucide-react";

// interface Props {
//   editor: Editor | null;
// }

// export default function RichTextEditor({ editor }: Props) {
//   const [color, setColor] = useState("#aabbcc");

//   const [isOpen, setIsOpen] = useState(false);

//   if (!editor) {
//     return null;
//   }

//   return (
//     <div className="flex flex-row h-1/6 gap-1 w-full border-b px-4 items-center">
//       <div className="flex flex-row gap-1 h-fit">
//         <button
//           className="p-2"
//           onClick={() => editor.chain().focus().undo().run()}
//         >
//           <Undo2 className="h-4 w-4" />
//         </button>

//         <button
//           className="p-2"
//           onClick={() => editor.chain().focus().redo().run()}
//         >
//           <Redo2 className="h-4 w-4" />
//         </button>
//       </div>

//       <div className="relative h-fit">
//         <button
//           onClick={() => setIsOpen((prev) => !prev)}
//           className="w-9 h-9 rounded-full border border-gray-300"
//           style={{ backgroundColor: color }}
//         ></button>
//         {isOpen && (
//           <div
//             tabIndex={-1}
//             onBlur={(e) => e.relatedTarget === null && setIsOpen(false)}
//             className="absolute top-12 left-0 z-10 p-4 bg-white border border-gray-200 rounded-lg shadow-lg"
//           >
//             <HexColorPicker color={color} onChange={setColor} />

//             <HexColorInput
//               color={color}
//               onChange={setColor}
//               placeholder="Type a color"
//               prefixed
//               alpha
//               className="w-full mt-2 px-3 py-2 border border-gray-300 rounded-md text-sm"
//             />
//           </div>
//         )}
//       </div>

//       <Select>
//         <SelectTrigger className="w-[180px]">
//           <SelectValue placeholder="Text type" />
//         </SelectTrigger>
//         <SelectContent>
//           <SelectItem value="heading-1">Header 1</SelectItem>
//           <SelectItem value="heading-2">Header 2</SelectItem>
//           <SelectItem value="heading-3">Header 3</SelectItem>
//           <SelectItem value="heading-4">Header 4</SelectItem>
//           <SelectItem value="heading-5">Header 5</SelectItem>
//           <SelectItem value="heading-6">Header 6</SelectItem>
//           <SelectItem value="normal-text">Normal text</SelectItem>
//         </SelectContent>
//       </Select>

//       <ToggleGroup type="multiple" variant={"outline"} className="h-fit">
//         <ToggleGroupItem
//           onClick={() => editor.chain().focus().toggleBold().run()}
//           value="bold"
//           aria-label="Toggle bold"
//         >
//           <Bold className="h-4 w-4" />
//         </ToggleGroupItem>

//         <ToggleGroupItem
//           onClick={() => editor.chain().focus().toggleItalic().run()}
//           value="italic"
//           aria-label="Toggle italic"
//         >
//           <Italic className="h-4 w-4" />
//         </ToggleGroupItem>

//         <ToggleGroupItem
//           onClick={() => editor.chain().focus().toggleUnderline().run()}
//           value="underline"
//           aria-label="Toggle underline"
//         >
//           <Underline className="h-4 w-4" />
//         </ToggleGroupItem>

//         <ToggleGroupItem
//           onClick={() => editor.chain().focus().toggleStrike().run()}
//           value="strikethrough"
//           aria-label="Toggle strikethrough"
//         >
//           <Strikethrough className="h-4 w-4" />
//         </ToggleGroupItem>
//       </ToggleGroup>

//       <ToggleGroup type="single" variant={"outline"} className="h-fit">
//         <ToggleGroupItem
//           value="align-left"
//           aria-label="Toggle align left"
//           onClick={() => editor.chain().focus().setTextAlign("left").run()}
//         >
//           <AlignLeft className="h-4 w-4" />
//         </ToggleGroupItem>

//         <ToggleGroupItem
//           value="align-center"
//           aria-label="Toggle align center"
//           onClick={() => editor.chain().focus().setTextAlign("right").run()}
//         >
//           <AlignRight className="h-4 w-4" />
//         </ToggleGroupItem>

//         <ToggleGroupItem
//           value="align-right"
//           aria-label="Toggle align right"
//           onClick={() => editor.commands.setTextAlign("center")}
//         >
//           <AlignCenter className="h-4 w-4" />
//         </ToggleGroupItem>

//         <ToggleGroupItem
//           value="align-justify"
//           aria-label="Toggle align justify"
//           onClick={() => editor.commands.setTextAlign("justify")}
//         >
//           <AlignJustify className="h-4 w-4" />
//         </ToggleGroupItem>
//       </ToggleGroup>

//       <ToggleGroup type="multiple" variant={"outline"} className="h-fit">
//         <ToggleGroupItem
//           onClick={() => editor.chain().focus().toggleBulletList().run()}
//           value="unordered-list"
//           aria-label="Toggle unordered list"
//         >
//           <List className="h-4 w-4" />
//         </ToggleGroupItem>

//         <ToggleGroupItem
//           onClick={() => editor.chain().focus().toggleOrderedList().run()}
//           value="ordered-list"
//           aria-label="Toggle ordered list"
//         >
//           <ListOrdered className="h-4 w-4" />
//         </ToggleGroupItem>

//         <ToggleGroupItem value="link" aria-label="Toggle link">
//           <Link className="h-4 w-4" />
//         </ToggleGroupItem>

//         <ToggleGroupItem value="image" aria-label="Toggle image">
//           <ImageIcon className="h-4 w-4" />
//         </ToggleGroupItem>
//       </ToggleGroup>
//     </div>
//   );
// }
