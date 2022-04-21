import React, { useState, useEffect } from 'react';
import GetCoupon from '../services/GetCoupon';

export default function StepBackground(props) {
  const [couponStepBackground, setCouponStepBackground] = useState('');
  const [bgColor, setBgColor] = useState('');

  useEffect( () => {
    // props.setShowPreview(false);
    props.setShowFooter(true);
    props.setCurrentStep('background');
    props.setLinkPathNext('/steg3'); //send linkPath to Footer.js so nextBtn navigate to next step
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
      // console.log("StepBackground.js: hämta fr db", res.coupon[0]);
      setCouponStepBackground(res.coupon[0].background);
    };
      GetCoupon(cbBackground, {'pickedCouponId': JSON.parse(localStorage.getItem('pickedCampaign')).couponId}); //get id from localStorage and send the id to get right data from db
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
      <input className='btn' type='text' id='bgColorInput' name='bgColor' onChange={inputChange} value={bgColor}></input>
    </div>
  )
};