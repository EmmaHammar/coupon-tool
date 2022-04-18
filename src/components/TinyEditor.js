import React, { useState, useRef, useEffect } from 'react';
import { Editor } from '@tinymce/tinymce-react';

export default function TinyEditor(props) {
const editorRef = useRef(null);
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

  //add tab focus for toolbarBtns in TinyEditor
  let toolbarBtns = document.getElementsByClassName('tox-toolbar__group')[0];
  if (toolbarBtns !== undefined) {
    if (toolbarBtns.ariaDisabled === true) {
      toolbarBtns.tabIndex = -1;
      // console.log("tabIndex -1");
    } else {
      toolbarBtns.tabIndex = 0;
      // console.log("tabIndex 0");
    }
  };
});

//check if editor is empty or not -> inactive/active nextBtn
const onEditorChange = () => {

  props.setContent(editorRef.current.getContent()); //update content state in App.js
 
  document.getElementById('errorMsg').innerHTML = ''; //empty errorMsg

  if (editorRef.current.getContent() === '') {
    props.setIsNextBtnActive(false);
  } else {
    props.setIsNextBtnActive(true);
  };
};

  return (
    <>
      <div id='tinyEditorWrapper' className='my-6 hover:cursor-pointer'>
        {isToolBar ? 
          <Editor
              apiKey="69wczpmvrwl3efu8wt4yoxrygv2rouack6dnd61okwlmizpw"
              onInit={(evt, editor) => editorRef.current = editor}
              initialValue={props.initialContent} 
              init={{

                force_br_newlines : true, //don't wrap in p tag
                force_p_newlines : false, //don't wrap in p tag
                forced_root_block : '', //don't wrap in p tag

                entity_encoding : "raw", //allow åäö
          
                language: 'sv_SE',
                image_dimensions: false, //remove customized widht and height
                
                toolbar_mode: 'sliding', //makes toolbar 2 rows when click dots btn if mobile screen
                theme_advanced_font_sizes: "10px,12px,13px,14px,16px,18px,20px",
                font_size_style_values : "10px,12px,13px,14px,16px,18px,20px",

                height: 300,
                // width: 348,
                menubar: false,
                plugins: [
                  'advlist autolink lists image charmap print preview',
                  'searchreplace visualblocks code',
                  'insertdatetime media table paste code help wordcount'
                ],
                toolbar: `${ props.toolBarOptions }`,
                content_style: 'body { font-family:Helvetica neue,sans-serif; font-size:14px; cursor:pointer;}img {max-width: 100px;}', 

                //======== START of File picker for local files ======== 
                // code from tinyMCE docs: https://www.tiny.cloud/docs/demo/file-picker/ but adjusted to React
                image_title: true,
                automatic_uploads: true,
                file_picker_types: 'image',
                file_picker_callback: function (cb, value, meta) {
                  var input = document.createElement('input');
                  input.setAttribute('type', 'file');
                  input.setAttribute('accept', 'image/*');
                  input.onchange = function () {
                    var file = this.files[0];
                    var reader = new FileReader();

                    reader.onload = function () {
                      var id = 'blobid' + (new Date()).getTime();
                      var blobCache =  window.tinymce.activeEditor.editorUpload.blobCache;
                      var base64 = reader.result.split(',')[1];
                      var blobInfo = blobCache.create(id, file, base64);

                      let imageSize = blobInfo.blob().size / 1000; //image size in kbytes
                      if (imageSize > 50) {
                        document.getElementById('errorMsg').innerHTML = 'Bildstorleken är för stor, testa att ladda upp en logga som är mindre än 50 K.';
                      } else {
                        blobCache.add(blobInfo);
                        cb(blobInfo.blobUri(), { title: file.name });
                      }
                    };

                    reader.readAsDataURL(file);
                  };

                  input.click(); //Opens file
                },
                //======== END of File picker for local files ======== 

              }}
              onEditorChange={onEditorChange}
            />
            : ''}    
        </div>
    </>
  )
};