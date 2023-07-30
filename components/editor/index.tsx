"use client";
import React from 'react'
import { BlockNoteEditor } from "@blocknote/core";
import { BlockNoteView, useBlockNote } from "@blocknote/react";
import "@blocknote/core/style.css";

const Editor = () => {
  // const editor: BlockNoteEditor | null = useBlockNote({});
  const editor: BlockNoteEditor | null = useBlockNote({
    theme: "light"
  });

  return <div className='editor-block'>
    <BlockNoteView editor={editor} />
  </div>;
}

export default Editor