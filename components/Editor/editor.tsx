import React, { useEffect, useState } from "react";
import EditorJS, { EditorConfig } from "@editorjs/editorjs";
import { tools } from "./tools";
/**
 *
 * @param {EditorJS.Tool[]} toolsList
 * @param {*} param1
 * @param {EditorJS.EditorConfig} options
 */
export const useEditor = (toolsList, { data, editorRef }, options) => {
  const [editorInstance, setEditor] = useState(null);
  // const {
  //   data: ignoreData,
  //   tools: ignoreTools,
  //   holder: ignoreHolder,
  //   ...editorOptions
  // } = options;

  // initialize
  useEffect(() => {
    // create instance
    const editor = new EditorJS({
      /**
       * Id of Element that should contain the Editor
       */
      holder: "editor-js",

      /**
       * Available Tools list.
       * Pass Tool's class or Settings object for each Tool you want to use
       */
      tools: toolsList,

      /**
       * Previously saved data that should be rendered
       */
      data: data || {},

      initialBlock: "paragraph",

      // Override editor options
      // ...editorOptions,
      ...options,
    });

    setEditor(editor);

    // cleanup
    return () => {
      editor.isReady
        .then(() => {
          editor.destroy();
          setEditor(null);
        })
        .catch((e) => console.error("ERROR editor cleanup", e));
    };
  }, [toolsList]);

  // set reference
  useEffect(() => {
    if (!editorInstance) {
      return;
    }
    // Send instance to the parent
    if (editorRef) {
      editorRef(editorInstance);
    }
  }, [editorInstance, editorRef]);

  return { editor: editorInstance };
};
export type IEditorProp = {
  editorRef: any;
  children: React.ReactNode | null;
  data: any;
  options: EditorConfig;
};
export const EditorContainer = ({
  editorRef,
  children,
  data,
  options,
}: IEditorProp) => {
  useEditor(tools, { data, editorRef }, options);

  return (
    <>
      <div id="editor-js"></div>
    </>
  );
};
