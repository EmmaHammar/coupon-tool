import React, { useState, useEffect, useContext } from 'react';
import TinyEditor from './TinyEditor';
import { AccountContext } from '../App';
import GetCoupon from '../services/GetCoupon';

export default function StepText(props) {
  const [couponStepText, setCouponStepText] = useState('');
  const account = useContext(AccountContext);

  useEffect( () => {
    // props.setShowPreview(false);
    props.setShowFooter(true);
    props.setCurrentStep('text');
    props.setLinkPath('/steg4'); //send linkPath to Footer.js so nextBtn navigate to next step
    props.setLinkPathBack('/steg2'); //linkPath for backBtn in Footer
    props.setToolBarOptions(`undo redo | fontsizeselect | fontselect | bold italic forecolor backcolor | alignleft aligncenter alignright | help`);

    document.getElementById('errorMsg').innerHTML = '';
  });

  //show initialContent in editor after first render
  useEffect( () => {
    const cbText = (res) => {
      // console.log("StepText.js: hämta fr db", res.coupon[0].text);
      setCouponStepText(res.coupon[0].text);
    };

    GetCoupon(cbText, {'pickedCouponId': account.pickedCouponId}); //get data from db
  }, []);

  useEffect( () => {
    if (couponStepText === '') {
      props.setIsNextBtnActive(false);
    } else {
      props.setIsNextBtnActive(true);
    };
      props.setInitialContent(couponStepText);
      props.setContent(couponStepText);
  }, [couponStepText])

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
        initialContent={props.initialContent}
      />
    </div>
  )
};