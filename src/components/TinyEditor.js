import React, { useState, useRef, useEffect } from 'react';
import { Editor } from '@tinymce/tinymce-react';

export default function TinyEditor(props) {

const editorRef = useRef(null);
const [isPickedLogo, setIsPickedLogo] = useState(false); //clickUploadLogo
const [fileUploadMsg, setFileUploadMsg] = useState('');
const [showUploadBtn, setShowUploadBtn] = useState(false);

const changeEditor = () => {
  setShowUploadBtn(true);
  setFileUploadMsg('');

  //uploadLogoBtn active if change in editor (i.e. upload new file a second time)
  document.getElementById('uploadLogoBtn').classList.remove('btn-primary-inactive');
  document.getElementById('uploadLogoBtn').classList.add('btn-secondary-reverse');

    //nextBtn inactive if change in editor (need to upload the new file before click nextBtn)
  document.getElementById('nextBtn').classList.remove('btn-primary');
  document.getElementById('nextBtn').classList.add('btn-primary-inactive');
};

const handleClick = () => {
  if (editorRef.current) {
    let logoString = editorRef.current.getContent(); //save textAreaContent
    setIsPickedLogo(true);

    if (logoString !== '') {
      setFileUploadMsg('Din fil är uppladdad.');
      // console.log("Din fil är uppladdad.", logoString);
    
      //uploadLogoBtn inactive if file is already uploaded
      document.getElementById('uploadLogoBtn').classList.remove('btn-secondary-reverse');
      document.getElementById('uploadLogoBtn').classList.add('btn-primary-inactive');
      
      //nextBtn active if file is uploaded
      document.getElementById('nextBtn').classList.remove('btn-primary-inactive');
      document.getElementById('nextBtn').classList.add('btn-primary');
        
    } else {
      setFileUploadMsg('Du behöver välja en logga först.');
      // console.log('Du behöver välja en logga först.', logoString);
    };

    props.setLogo(logoString); //update state owned by App.js
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
              content_style: 'body { font-family:Helvetica neue,sans-serif; font-size:14px; cursor:pointer;}',
            }}
            onChange={changeEditor}
          />
          {showUploadBtn ? 
            <button id='uploadLogoBtn' className='btn btn-secondary-reverse mt-4' onClick={handleClick}>LADDA UPP LOGGA</button>
          : ''}
         
          {isPickedLogo ? 
          <div>
            <h4>{fileUploadMsg}</h4>
          </div>
          : ''}
          
    </div>
  )
};

//TODO remove p tag wrapper

//https://www.tiny.cloud/blog/tinymce-add-menu-item-dynamically/

//testImg: https://storage.googleapis.com/orchestra-cafe-7jp1kqsp/uploads/2022/02/8abe153a-hemglass-nyheter-1024x576.jpg