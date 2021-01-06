import dynamic from "next/dynamic";
import * as React from "react";
import { ComponentType, FC, useState } from "react";
import { IEditorProp } from "./Editor/editor";
import {
  useLoadData,
  useSaveCallback,
  useSetData,
} from "./Editor/editor-hooks";
import data from "./Editor/data.json";

const Editor = dynamic(
  () => import("./Editor/editor").then((mod) => mod.EditorContainer),
  { ssr: false }
);

export default function Story() {
  const [editor, setEditor] = useState(null);
  const onSave = useSaveCallback(editor);
  //   const [data, loading] = useLoadData();
  useSetData(editor, data);

  const EditorProps: IEditorProp = {
    editorRef: setEditor,
    children: null,
    data: data,
    options: { readOnly: false },
  };

  const toggleReadOnly = () => {
    if (!!editor) {
      editor.readOnly.toggle();
    }
  };
  return (
    <div>
      <Editor {...EditorProps} />
    </div>
  );
}
