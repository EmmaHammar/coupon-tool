import React, { useState, useRef, useEffect } from 'react';
import { Editor } from '@tinymce/tinymce-react';

export default function TinyEditor(props) {

const editorRef = useRef(null);
const [isPicked, setIsPicked] = useState(false); //clickUpload
const [fileUploadMsg, setFileUploadMsg] = useState('');
const [showUploadBtn, setShowUploadBtn] = useState(false);

//every change in editor
const onEditorChange = () => {
  props.setContent(editorRef.current.getContent()); //update content state in App.js
};

//only first change? TODO make uploadBtn + nextBtn inactive if textArea is empty 
const changeEditor = () => {

  //TODO move to app? 
  //only show uploadBtn if imgs
  
    if (props.currentStep === 'text') {
      setShowUploadBtn(false);
  
      //nextBtn active if added text
      document.getElementById('nextBtn').classList.remove('btn-primary-inactive');
      document.getElementById('nextBtn').classList.add('btn-primary');
  
    } else {
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

const handleClickUpload = () => {
    setIsPicked(true);

    if (props.content !== '') {
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
}; 

let toolBarOptions;
switch (props.currentStep) {
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
            onEditorChange={onEditorChange}
          />

          {showUploadBtn ? 
            <button id='uploadBtn' className='btn btn-secondary-reverse mt-4' onClick={handleClickUpload}>LADDA UPP</button>
          : ''}
         
          {isPicked ? 
          <div>
            <h4>{fileUploadMsg}</h4>
          </div>
          : ''}
          
    </div>
  )
};

//TODO 
//bug when click stepper OR nextBtn -> tiny mce baroptions is not following (only correct with first reload, move option state to App.js?)
//remove p tag wrapper
//handle ie replace() or similar for åäö etc in tinyMCE
//show disable btns if textarea is filled but then empty again
//when printing tinyEditor - check if data in db exists - if true -> print saved ex logo, bg, text?
