"use client";

import RichTextEditor from "@/components/forms/rich-text-editor";
import GoogleMapComponent from "@/components/maps/google-map";
import { Card } from "@/components/ui/card";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import TextAlign from "@tiptap/extension-text-align";

export default function Map() {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      TextAlign,
    ],
    content: ``,
    onUpdate: () => {
    },
  });

  return (
    <div className="flex flex-col gap-20 w-full items-end px-16">
      <h2 className="text-textPrimary font-bold text-4xl w-full justify-center text-center uppercase">
        Bizimlə Əlaqə
      </h2>

      <div className="w-full flex flex-row justify-between">
        <Card>
          <RichTextEditor editor={editor}></RichTextEditor>
          <EditorContent editor={editor} />
        </Card>

        <Card className="h-96 w-1/3 flex justify-right">
          <GoogleMapComponent />
        </Card>
      </div>
    </div>
  );
}
