'use client';

import React, {
  useEffect,
  useRef,
  forwardRef,
  useImperativeHandle,
} from 'react';
import Quill from 'quill';
import 'quill/dist/quill.snow.css';

export type RichTextEditorHandle = {
  getContent: () => string;
};

interface RichTextEditorProps {
  value: string; // controlled content
  onChange: (html: string) => void;
}

const RichTextEditor = forwardRef<RichTextEditorHandle, RichTextEditorProps>(
  ({ value, onChange }, ref) => {
    const editorRef = useRef<HTMLDivElement>(null);
    const toolbarRef = useRef<HTMLDivElement>(null);
    const quillRef = useRef<Quill | null>(null);

    // Initialize Quill only once
    useEffect(() => {
      if (editorRef.current && toolbarRef.current && !quillRef.current) {
        quillRef.current = new Quill(editorRef.current, {
          theme: 'snow',
          modules: {
            toolbar: toolbarRef.current,
          },
          placeholder: 'Write something...',
        });

        // Listen for changes and notify parent
        quillRef.current.on('text-change', () => {
          if (quillRef.current) {
            const html = quillRef.current.root.innerHTML;
            if (html !== value) {
              onChange(html);
            }
          }
        });
      }
    }, [onChange, value]);

    // Sync external value changes to editor content (avoid infinite loops)
    useEffect(() => {
      if (quillRef.current) {
        const editorContent = quillRef.current.root.innerHTML;
        if (value !== editorContent) {
          quillRef.current.root.innerHTML = value;
        }
      }
    }, [value]);

    // Expose imperative handle to get content
    useImperativeHandle(ref, () => ({
      getContent: () => (quillRef.current ? quillRef.current.root.innerHTML : ''),
    }));

    return (
      <div>
        <div ref={toolbarRef} style={{ marginBottom: 8 }}>
          <span className="ql-formats">
            <select className="ql-header" defaultValue="">
              <option value="1"></option>
              <option value="2"></option>
              <option value="3"></option>
              <option value=""></option>
            </select>
          </span>
          <span className="ql-formats">
            <button className="ql-bold" type="button" aria-label="Bold"></button>
            <button className="ql-italic" type="button" aria-label="Italic"></button>
            <button className="ql-underline" type="button" aria-label="Underline"></button>
            <button className="ql-strike" type="button" aria-label="Strike"></button>
          </span>
          <span className="ql-formats">
            <button className="ql-list" value="ordered" type="button" aria-label="Ordered List"></button>
            <button className="ql-list" value="bullet" type="button" aria-label="Bullet List"></button>
          </span>
          <span className="ql-formats">
            <button className="ql-link" type="button" aria-label="Link"></button>
            <button className="ql-image" type="button" aria-label="Image"></button>
          </span>
          <span className="ql-formats">
            <button className="ql-clean" type="button" aria-label="Clear Formatting"></button>
          </span>
        </div>

        <div ref={editorRef} style={{ minHeight: '180px' }} />
      </div>
    );
  }
);

RichTextEditor.displayName = 'RichTextEditor';

export default RichTextEditor;
