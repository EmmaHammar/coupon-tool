import React, { useState, useEffect, useContext } from 'react';
import TinyEditor from './TinyEditor';
import { AccountContext } from '../App';
import GetCoupon from '../services/GetCoupon';

export default function StepBackground(props) {
  // const [bgColor, setBgColor] = useState('');
  const account = useContext(AccountContext);


  useEffect( () => {
    // props.setShowPreview(true);
    props.setCurrentStep('background');
    props.setLinkPath('/steg3'); //send linkPath to Footer.js so nextBtn navigate to next step
    props.setLinkPathBack('/steg1'); //linkPath for backBtn in Footer

    // props.setToolBarOptions(`undo redo`); //TODO remove later

    if (props.content === '') {
      props.setIsNextBtnActive(false);
    } else {
      props.setIsNextBtnActive(true);
    };
 
  });

   //show db value in editor when printing editor UI
   useEffect( () => {

    if (props.currentStep !== '') {
      //get from db

      let info = 
      {
        'pickedCouponId': account.pickedCouponId, 
        'currentStep': props.currentStep
      }
      ;
      console.log("info StepLogo.js:", info);

      const cb = (res) => {
        // console.log("res", res.coupon[0].props.currentStep)
        console.log("res in cb, background:", res.coupon[0].background);
        props.setEditorValue(res.coupon[0].background); //print db value initial in editor
      };

      GetCoupon(cb, info);
      // console.log("props.currentStep", props.currentStep); //not err outside cb(), only inside cb()
      
    } else {
      console.log("ERROR: props.currentStep === '' -> show loader?");
    };
   });

  const inputChange = (evt) => {
    // console.log("evt.target", evt.target.value);
    props.setContent(evt.target.value);

    //TODO onClick -> save to db (fix so remove TinyEditor)
  };

  return (
    <div id='stepBackgroundWrapper' className=''>
      <h4>2. Välj bakgrundsfärg. </h4>
      <p>Ange färgen i hex, ex: #00FFFF</p>
      
      {/* <label for='bgColor'>Bakgrundsfärg</label> */}
      <input className='btn' type='text' id='bgColor' name='bgColor' value={props.editorValue} onChange={inputChange}></input>
    </div>
  )
};