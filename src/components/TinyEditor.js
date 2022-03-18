import React, { useState, useRef } from 'react';
import { Editor } from '@tinymce/tinymce-react';

export default function TinyEditor(props) {

const editorRef = useRef(null);
const log = () => {
  if (editorRef.current) {
  console.log(editorRef.current.getContent());
  }
}; //useRef Hook directly create a reference to the DOM element in the functional component. Returns a mutable ref obj. 

let toolBarOptions;
switch (props.stepType) {
  case 'logo':
    toolBarOptions = `undo redo | image | alignleft aligncenter alignright | help`;
    break;
  case 'background':
    toolBarOptions = `undo redo | image | help`;
    break;
  case 'text':
    toolBarOptions = `undo redo | fontsizeselect | fontselect | bold italic forecolor backcolor | alignleft aligncenter alignright | help`;
    break;
  default:
    break;

}


// if (props.stepType === 'logo') {
//   console.log("fr logo");
//   toolBarOptions = `undo redo | image | alignleft aligncenter alignright | help`;
// }
// if (props.stepType === 'background') {
//   console.log("fr background");
//   toolBarOptions = `undo redo | image | help`;
// }
// if (props.stepType === 'text') {
//   console.log("fr text");
//   toolBarOptions = `undo redo | formatselect | bold italic backcolor | alignleft aligncenter alignright | help`;
// }

  return (
    <div>
        <Editor
            apiKey="69wczpmvrwl3efu8wt4yoxrygv2rouack6dnd61okwlmizpw"
            onInit={(evt, editor) => editorRef.current = editor}
            initialValue="<p></p>"
            init={{
              height: 500,
              menubar: false,
              plugins: [
                'advlist autolink lists image charmap print preview anchor',
                'searchreplace visualblocks code fullscreen',
                'insertdatetime media table paste code help wordcount'
              ],
              toolbar: `${ toolBarOptions }`,
              content_style: 'body { font-family:Helvetica neue,sans-serif; font-size:14px; background:red}'
            }}
          />
          <button onClick={log}>Log editor content</button>
    </div>
  )
};

//https://www.tiny.cloud/blog/tinymce-add-menu-item-dynamically/

//testImg: https://storage.googleapis.com/orchestra-cafe-7jp1kqsp/uploads/2022/02/8abe153a-hemglass-nyheter-1024x576.jpg