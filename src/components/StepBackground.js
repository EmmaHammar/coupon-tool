import React, { useState, useEffect, useContext } from 'react';
import TinyEditor from './TinyEditor';
import { AccountContext } from '../App';
import GetCoupon from '../services/GetCoupon';

export default function StepBackground(props) {
  // const [bgColor, setBgColor] = useState('');
  const account = useContext(AccountContext);
  const [bgColorInputValue, setBgColorInputValue] = useState('');


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

  //TODO testar om det printar rätt - EJ KLART
  // useEffect( () => {
  //   setBgColorInputValue(props.editorValue);
  // }, []);
  //SLUT TODO testar om det printar rätt - EJ KLART

   //show db value in editor when printing editor UI
  //  useEffect( () => {
  //   if (props.currentStep !== '') {
  //     let info = 
  //     {
  //       'pickedCouponId': account.pickedCouponId, 
  //       'currentStep': props.currentStep
  //     };

  //     const cb = (res) => {
  //       console.log("res in cb, background:", res.coupon[0].background);
  //       props.setEditorValue(res.coupon[0].background); //print db value initial in editor
  //     };

  //     GetCoupon(cb, info); //get data from db
      
  //   } else {
  //     console.log("ERROR: props.currentStep === '' -> show loader?");
  //   };
  // });

  
  const inputChange = (evt) => {
      //TODO testar om det printar rätt - EJ KLART
    // setBgColorInputValue(evt.target.value);
    // console.log("evt.target", evt.target.value);
    //SLUT TODO testar om det printar rätt - EJ KLART

    props.setContent(evt.target.value);

    //TODO onClick -> save to db (fix so remove TinyEditor)
  };

  return (
    <div id='stepBackgroundWrapper' className=''>
      <h4>2. Välj bakgrundsfärg. </h4>
      <p>Ange färgen i hex, ex: #00FFFF</p>
      
      {/* <label for='bgColor'>Bakgrundsfärg</label> */}
      <input className='btn' type='text' id='bgColorInput' name='bgColor' onChange={inputChange}></input>
    </div>
  )
};

//TODO ERROR:       <input className='btn' type='text' id='bgColorInput' name='bgColor' value={props.content} onChange={inputChange}></input> 
//value blir ej rätt, den tar innehållet från tidigare steg