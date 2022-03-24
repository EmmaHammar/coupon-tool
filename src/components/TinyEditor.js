import React, { useState, useRef, useEffect } from 'react';
import { Editor } from '@tinymce/tinymce-react';

//TinyEditor for StepLogo and StepBackground
export default function TinyEditor(props) {

const editorRef = useRef(null);
const [isPicked, setIsPicked] = useState(false); //clickUpload
const [fileUploadMsg, setFileUploadMsg] = useState('');
const [showUploadBtn, setShowUploadBtn] = useState(false);
const [editorContent, setEditorContent] = useState('');

const changeEditor = () => {

  //only show uploadBtn if it's imgs
  if (props.stepType === 'text') {
    // console.log("text -> visa ej knapp");
    setShowUploadBtn(false);

    // console.log("tinymce:", );
    //nextBtn active if added text
    document.getElementById('nextBtn').classList.remove('btn-primary-inactive');
    document.getElementById('nextBtn').classList.add('btn-primary');

  } else {
    // console.log("bild -> visa knapp");
    setShowUploadBtn(true);
      //uploadBtn active if change in editor (i.e. upload new file a second time)
  document.getElementById('uploadBtn').classList.remove('btn-primary-inactive');
  document.getElementById('uploadBtn').classList.add('btn-secondary-reverse');

    //nextBtn inactive if change in editor (need to upload the new file before click nextBtn)
  document.getElementById('nextBtn').classList.remove('btn-primary');
  document.getElementById('nextBtn').classList.add('btn-primary-inactive');
  }
  // setShowUploadBtn(true);
  setFileUploadMsg('');


};

const handleClick = () => {
  
  if (editorRef.current) {
    let contentString = editorRef.current.getContent(); //save textAreaContent
    // var str = "{TinyMCE HTML string}"; 
    contentString = contentString.replace(`/^\<p\>/,""`).replace(`/\<\/p\>$/,""`);
    console.log("contentString after replace()", contentString);

    setIsPicked(true);

    if (contentString !== '') {
      setFileUploadMsg('Din fil är uppladdad.');
      // console.log("Din fil är uppladdad.", contentString);
    
      //uploadBtn inactive if file is already uploaded
      document.getElementById('uploadBtn').classList.remove('btn-secondary-reverse');
      document.getElementById('uploadBtn').classList.add('btn-primary-inactive');
      
      //nextBtn active if file is uploaded
      document.getElementById('nextBtn').classList.remove('btn-primary-inactive');
      document.getElementById('nextBtn').classList.add('btn-primary');
        
    } else {
      setFileUploadMsg('Du behöver välja en logga först.');
      // console.log('Du behöver välja en logga först.', contentString);
    };

    let contentObj = {
      [props.stepType]:contentString
    };
    console.log("contentObj", contentObj);

    //TODO if stepType text, how set this state? Because uploadBtn which has this click is not visible
    props.setContent(contentObj); //update state owned by App.js
  };
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
            <button id='uploadBtn' className='btn btn-secondary-reverse mt-4' onClick={handleClick}>LADDA UPP</button>
          : ''}
         
          {isPicked ? 
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