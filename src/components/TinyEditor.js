import React, { useState, useRef, useEffect } from 'react';
import { Editor } from '@tinymce/tinymce-react';
// import Loader from './Loader';

export default function TinyEditor(props) {

  //TODO clean states!!
const editorRef = useRef(null);
const [isPicked, setIsPicked] = useState(false); //clickUpload
const [fileUploadMsg, setFileUploadMsg] = useState('');
const [showUploadBtn, setShowUploadBtn] = useState(false);
const [isToolBar, setIsToolBar] = useState(false);
const [isLoadingStep, setIsLoadingStep] = useState(true);

//prevent printing Editor before right toolbarOptions is added:
useEffect( () => {
  setIsToolBar(true)
}, [props.toolBarOptions]);

useEffect( () => {
  setTimeout( () => {
    setIsLoadingStep(false)
  }, 500);
});


//check if editor is empty or not -> inactive/active nextBtn
const onEditorChange = () => {
  props.setContent(editorRef.current.getContent()); //update content state in App.js
 
  document.getElementById('errorMsg').innerHTML = ''; //empty errorMsg

  if (editorRef.current.getContent() === '') {
    props.setIsNextBtnActive(false);
  } else {
    props.setIsNextBtnActive(true);
  }
};

  return (
    <>
    {/* { isLoadingStep ? <Loader /> : */} 
      <div id='tinyEditorWrapper' className='my-6'>
        {isToolBar ? 
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
                toolbar: `${ props.toolBarOptions }`,
                content_style: 'body { font-family:Helvetica neue,sans-serif; font-size:14px; cursor:pointer;}',
              }}
              onEditorChange={onEditorChange}
            />
            : ''}    
        </div>
      {/* } */}
    </>
  )
};

//TODO 
//remove p tag wrapper
//handle ie replace() or similar for åäö etc in tinyMCE
//when printing tinyEditor - check if data in db exists - if true -> print saved ex logo, bg, text?
//decide if remove or comment back loader
