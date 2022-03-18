import React, { useState, useRef } from 'react';
import { Editor } from '@tinymce/tinymce-react';

export default function TinyEditor(props) {
const editorRef = useRef(null);

//send from components
// let toolBarOptions;
// toolBarOptions = 'undo redo | formatselect | ' +
// 'bold italic backcolor | alignleft aligncenter ' +
// 'alignright alignjustify | image | ' + 'help';
// toolBarOptions = `undo redo | image | alignleft aligncenter alignright`;
// console.log("toolBarOptions", toolBarOptions);

const log = () => {
    if (editorRef.current) {
    console.log(editorRef.current.getContent());
    }
}; //useRef Hook directly create a reference to the DOM element in the functional component. Returns a mutable ref obj. 

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
                'advlist autolink lists link image charmap print preview anchor',
                'searchreplace visualblocks code fullscreen',
                'insertdatetime media table paste code help wordcount'
              ],
              toolbar: `${ props.toolBarOptions }`,
              content_style: 'body { font-family:Inter,Arial,sans-serif; font-size:14px; background:red}'
            }}
          />
          <button onClick={log}>Log editor content</button>
    </div>
  )
};

//https://www.tiny.cloud/blog/tinymce-add-menu-item-dynamically/

//testImg: https://storage.googleapis.com/orchestra-cafe-7jp1kqsp/uploads/2022/02/8abe153a-hemglass-nyheter-1024x576.jpg