import dynamic from "next/dynamic";
import * as React from "react";
import { ComponentType, FC, useState } from "react";
import { IEditorProp } from "./Editor/EditorContainer";
import { useLoadData, useSaveCallback, useSetData } from "./Editor/editorHooks";
import defaultData from "./Editor/data.json";

const Editor = dynamic(
  () => import("./Editor/EditorContainer").then((mod) => mod.EditorContainer),
  { ssr: false }
);

export default function Story(props) {
  const { initData } = props;
  const [editor, setEditor] = useState(null);
  const onSave = useSaveCallback(editor);
  const data = initData ? {} : defaultData;
  //   const [data, loading] = useLoadData();
  if (data == {}) {
    useSetData(editor, data);
  }

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
