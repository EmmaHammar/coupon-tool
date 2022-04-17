import React, { useState, useEffect, useContext } from 'react';
import TinyEditor from './TinyEditor';
import { AccountContext } from '../App';
import GetCoupon from '../services/GetCoupon';

export default function StepBackground(props) {
  const [couponStepBackground, setCouponStepBackground] = useState('');
  const [bgColor, setBgColor] = useState('');
  const account = useContext(AccountContext);

  useEffect( () => {
    // document.getElementById('errorMsg').innerHTML=''; 
    props.setShowPreview(false);
    props.setShowFooter(true);
    props.setCurrentStep('background');
    props.setLinkPath('/steg3'); //send linkPath to Footer.js so nextBtn navigate to next step
    props.setLinkPathBack('/steg1'); //linkPath for backBtn in Footer

    if (props.content === '') {
      props.setIsNextBtnActive(false);
    } else {
      props.setIsNextBtnActive(true);
    };

    document.getElementById('errorMsg').innerHTML = '';
  });

  //show initialContent in editor after first render
  useEffect( () => {
    const cbBackground = (res) => {
      console.log("StepBackground.js: hämta fr db", res.coupon[0]);
      setCouponStepBackground(res.coupon[0].background);
    };

      GetCoupon(cbBackground, {'pickedCouponId': account.pickedCouponId}); //get data from db
  }, []);

  useEffect( () => {
    if (couponStepBackground === '') {
      props.setIsNextBtnActive(false);
    } else {
      props.setIsNextBtnActive(true);
    };
    props.setInitialContent(couponStepBackground);
    props.setContent(couponStepBackground);
    setBgColor(couponStepBackground);
  }, [couponStepBackground])

  const inputChange = (evt) => {
    props.setContent(evt.target.value); //save right in saveClick() in App
    setBgColor(evt.target.value);
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