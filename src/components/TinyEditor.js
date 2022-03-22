import React, { useState, useRef } from 'react';
import { Editor } from '@tinymce/tinymce-react';

export default function TinyEditor(props) {

const editorRef = useRef(null);
const [isPickedLogo, setIsPickedLogo] = useState(false);
const [logo, setLogo] = useState(false);

const handleClick = () => {
  if (editorRef.current) {
    let logoString = editorRef.current.getContent();
    props.updateCoupon(logoString); //cb in StepLogo.js
    setIsPickedLogo(true);
    setLogo(logoString);
  }
}; 

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
};

  return (
    <div>
        <Editor
            apiKey="69wczpmvrwl3efu8wt4yoxrygv2rouack6dnd61okwlmizpw"
            onInit={(evt, editor) => editorRef.current = editor}
            initialValue="<p></p>"
            init={{
              height: 300,
              menubar: false,
              plugins: [
                'advlist autolink lists image charmap print preview',
                'searchreplace visualblocks code fullscreen',
                'insertdatetime media table paste code help wordcount'
              ],
              toolbar: `${ toolBarOptions }`,
              content_style: 'body { font-family:Helvetica neue,sans-serif; font-size:14px; background:red}',
            }}
          />
          <button className='btn btn-secondary-reverse' onClick={handleClick}>LADDA UPP LOGGA</button>
          {isPickedLogo ? 
          <div>
            <h4>Din fil är uppladdad.</h4>
          </div>
          : ''}
          
    </div>
  )
};

//TODO remove p tag wrapper

//https://www.tiny.cloud/blog/tinymce-add-menu-item-dynamically/

//testImg: https://storage.googleapis.com/orchestra-cafe-7jp1kqsp/uploads/2022/02/8abe153a-hemglass-nyheter-1024x576.jpg