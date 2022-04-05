import React, { useState, useRef, useEffect } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import { click } from '@testing-library/user-event/dist/click';
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

//TODO IF NOT editorchange, dvs man ändrar inget -> vad ska hända? (just nu följer det content från steget man kommer ifrån 

//check if editor is empty or not -> inactive/active nextBtn
const onEditorChange = () => {
  props.setContent(editorRef.current.getContent()); //update content state in App.js
  // console.log("setContent():", editorRef.current.getContent());
 
  document.getElementById('errorMsg').innerHTML = ''; //empty errorMsg

  if (editorRef.current.getContent() === '') {
    props.setIsNextBtnActive(false);
    // console.log("ev setContent('')??");//TODO fixa så det blir rätt med setContent?
  } else {
    props.setIsNextBtnActive(true);
    // console.log("ev setContent('fetch logo db')??");
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

                content_style: 'body { font-family:Helvetica neue,sans-serif; font-size:14px; cursor:pointer;}img {max-width: 100px;}', //TODO change style 
                // content_css: '../tinyEditor.css',
               
               //======== START of File picker for local files ======== 
               // code from tinyMCE docs: https://www.tiny.cloud/docs/demo/file-picker/ but adjusted to React
              /* enable title field in the Image dialog*/
                image_title: true,
              /* enable automatic uploads of images represented by blob or data URIs*/
                automatic_uploads: true,
              /*
                URL of our upload handler (for more details check: https://www.tiny.cloud/docs/configure/file-image-upload/#images_upload_url)
                images_upload_url: 'postAcceptor.php',
                here we add custom filepicker only to Image dialog
              */
                file_picker_types: 'image',
              /* and here's our custom image picker*/
              
              file_picker_callback: function (cb, value, meta) {
                var input = document.createElement('input');
                input.setAttribute('type', 'file');
                input.setAttribute('accept', 'image/*');

                /*
                  Note: In modern browsers input[type="file"] is functional without
                  even adding it to the DOM, but that might not be the case in some older
                  or quirky browsers like IE, so you might want to add it to the DOM
                  just in case, and visually hide it. And do not forget do remove it
                  once you do not need it anymore.
                */

                input.onchange = function () {
                  console.log("onchange filepicker, syns när fil är vald + uppladdad"); //TODO Filen syns ej i "källa fönstret" 
                  var file = this.files[0];
                  console.log("file", file);

                  var reader = new FileReader();
                  reader.onload = function () {
                    console.log("reader.onload");
                    /*
                      Note: Now we need to register the blob in TinyMCEs image blob
                      registry. In the next release this part hopefully won't be
                      necessary, as we are looking to handle it internally.
                    */
                    var id = 'blobid' + (new Date()).getTime();
                    var blobCache =  window.tinymce.activeEditor.editorUpload.blobCache;
                    var base64 = reader.result.split(',')[1];
                    var blobInfo = blobCache.create(id, file, base64);
                    blobCache.add(blobInfo);

                    /* call the callback and populate the Title field with the file name */
                    cb(blobInfo.blobUri(), { title: file.name });
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
      {/* } */}
    </>
  )
};

//TODO 
// https://www.tiny.cloud/docs/demo/file-picker/
//Fix code above for local file uploader



//https://www.tiny.cloud/docs-3x/customization/TinyMCE3x@Creating_a_skin/ 
//add proper tags depending img or text
//choose color picker for bg, not file upload
//handle ie replace() or similar for åäö etc in tinyMCE
//when printing tinyEditor - check if data in db exists - if true -> print saved ex logo, bg, text?
//decide if remove or comment back loader

//plugins from start
// plugins: [
//   'advlist autolink lists image charmap print preview',
//   'searchreplace visualblocks code fullscreen',
//   'insertdatetime media table paste code help wordcount'
// ],

//<img src="https://cdn.logo.com/hotlink-ok/logo-social.png" alt="" width="1184" height="622" />


//TODO add custom fonts: https://www.tiny.cloud/blog/tinymce-custom-font-family/ 


//specify file type: https://www.tiny.cloud/docs/configure/file-image-upload/ 


//Add css to tinyEditor: https://www.tiny.cloud/docs-3x/reference/Configuration3x/Configuration3x@content_css/ (skin, content css")


//remove html wrapper around tinymce??

//TODO add aria labels to all buttons in whole project