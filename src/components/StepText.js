import React, { useState, useEffect, useContext } from 'react';
import TinyEditor from './TinyEditor';
import { AccountContext } from '../App';
import GetCoupon from '../services/GetCoupon';

export default function StepText(props) {
  const account = useContext(AccountContext);

  useEffect( () => {
    // props.setShowPreview(true);
    props.setCurrentStep('text');
    props.setLinkPath('/steg4'); //send linkPath to Footer.js so nextBtn navigate to next step
    props.setLinkPathBack('/steg2'); //linkPath for backBtn in Footer
    props.setToolBarOptions(`undo redo | fontsizeselect | fontselect | bold italic forecolor backcolor | alignleft aligncenter alignright | help`);
  });

  //show db value in editor when printing editor UI
  // useEffect( () => {
  //   if (props.currentStep !== '') {
      
  //     let info =
  //     {
  //       'pickedCouponId': account.pickedCouponId, 
  //       'currentStep': props.currentStep
  //     }
  //     ;
  //     const cb = (res) => {
  //       // console.log("res in cb, text:", res.coupon[0].text);
  //       props.setEditorValue(res.coupon[0].text); //print db value initial in editor
  //     };

  //     GetCoupon(cb, info); //get data from db
  //   } else {
  //     console.log("ERROR: props.currentStep === '' -> show loader?");
  //   };
  // });
  
  return (
    <div id='stepTextWrapper' className=''>
      <h4>3. Skriv en personlig hälsning.</h4>
      <p>Här väljer du också formateringen på rubrik och brödtext. </p>
      <TinyEditor 
        currentStep={props.currentStep}
        content={props.content}
        setContent={props.setContent}
        toolBarOptions={props.toolBarOptions}
        setToolBarOptions={props.setToolBarOptions}
        setIsNextBtnActive={props.setIsNextBtnActive}
        editorValue={props.editorValue}
      />
    </div>
  )
};

//TODO???TEST move TinyEditor to App.js?

//kom ihåg: TinyMCE 5.10.3 (kanske bättre med 6.0 men då fungerar inte alla false odyl i init)