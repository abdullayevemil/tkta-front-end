"use client";

import RichTextEditor from "@/components/forms/rich-text-editor";
import GoogleMapComponent from "@/components/maps/google-map";
import { Card } from "@/components/ui/card";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import Logo from "@/assets/images/logo.png";
import TextAlign from "@tiptap/extension-text-align";
import ExternalLinks from "./external-links";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const editor = useEditor({
    extensions: [StarterKit, Underline, TextAlign],
    content: ``,
    onUpdate: () => {},
  });

  return (
    <div className="flex flex-col gap-20 w-full items-end p-16">
      <ExternalLinks />

      <div className="w-full flex flex-row">
        <Link href="/home" className="hover:cursor-pointer">
          <Image src={Logo} alt="TKTA logo" className="w-[194.4px] h-18" />
        </Link>

        <div className="flex flex-row gap-2">
            
        </div>
      </div>

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
