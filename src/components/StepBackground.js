import React, { useState, useEffect, useContext } from 'react';
import TinyEditor from './TinyEditor';
import { AccountContext } from '../App';
import GetCoupon from '../services/GetCoupon';

export default function StepBackground(props) {
  // const [bgColor, setBgColor] = useState('');
  const account = useContext(AccountContext);
  const [bgColor, setBgColor] = useState('');


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

  //show initialContent in editor after first render
//   useEffect( () => {
//     let info = 
//     {
//       'pickedCouponId': account.pickedCouponId, 
//     //   'currentStep': props.currentStep
//     };

//     const cb = (res) => {
//       if (res.coupon[0].background === '') {
//         props.setIsNextBtnActive(false);
//       } else {
//         props.setIsNextBtnActive(true);
//       };

//       props.setInitialContent(res.coupon[0].background);
//       props.setContent(res.coupon[0].background);
//       setBgColor(res.coupon[0].background);
//       };

//     GetCoupon(cb, info); //get data from db
// }, []);
  
  const inputChange = (evt) => {
      //TODO testar om det printar rätt - EJ KLART
    // setBgColorInputValue(evt.target.value);
    // console.log("evt.target", evt.target.value);
    //SLUT TODO testar om det printar rätt - EJ KLART

    props.setContent(evt.target.value); //save right in saveClick() in App
    setBgColor(evt.target.value); //show right?

    //TODO onClick -> save to db (fix so remove TinyEditor)
  };

  return (
    <div id='stepBackgroundWrapper' className=''>
      <h4>2. Välj bakgrundsfärg. </h4>
      <p>Ange färgen i hex, ex: #00FFFF</p>
      
      {/* <label for='bgColor'>Bakgrundsfärg</label> */}
      <input className='btn' type='text' id='bgColorInput' name='bgColor' onChange={inputChange} value={bgColor}></input>
    </div>
  )
};

//TODO ERROR:       <input className='btn' type='text' id='bgColorInput' name='bgColor' value={props.content} onChange={inputChange}></input> 
//value blir ej rätt, den tar innehållet från tidigare steg