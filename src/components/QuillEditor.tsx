import React, { useState } from "react";
import "react-quill/dist/quill.snow.css";
import ReactQuill from "react-quill";

const modules = {
  toolbar: [
    [{ header: "1" }, { header: "2" }, { font: [] }],
    [{ size: [] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["link", "image", "video"],
    ["clean"],
  ],
  clipboard: {
    // toggle to add extra line breaks when pasting HTML:
    matchVisual: false,
  },
};
/*
 * Quill editor formats
 * See https://quilljs.com/docs/formats/
 */
const formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
  "video",
];

export default function QuillEditor() {
  const [value, setValue] = useState("");
  const handleChange = (newValue) => {
    setValue(newValue);
    console.log(newValue);
  };
  return (
    <ReactQuill
      id="quill-editor"
      modules={modules}
      formats={formats}
      theme="snow"
      value={value}
      placeholder="Write your story here"
      onChange={(value) => handleChange(value)}
    />
  );

  //   return <ReactQuill theme="snow" value={value} onChange={setValue} />;
}
