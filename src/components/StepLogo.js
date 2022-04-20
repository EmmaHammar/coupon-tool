import React, { useState, useEffect, useContext } from 'react';
import TinyEditor from './TinyEditor';
import { AccountContext } from '../App';
import GetCoupon from '../services/GetCoupon';

export default function StepLogo(props) {
  const [couponStepLogo, setCouponStepLogo] = useState({
    'logo': '',
  });
  const account = useContext(AccountContext);

  useEffect( () => {
    // props.setShowPreview(false);
    props.setShowFooter(true);
    props.setCurrentStep('logo');
    props.setLinkPathNext('/steg2'); //send linkPath to Footer.js so nextBtn navigate to next step
    props.setLinkPathBack('/'); //linkPath for backBtn in Footer
    props.setToolBarOptions(`undo redo | image`);
  });

  //show initialContent in editor after first render, only if edit old coupon
  useEffect( () => {
    const cbLogo = (res) => {
      // console.log("StepLogo.js: hämta fr db", res.coupon[0]);
      if (res.coupon[0] !== undefined) {
        setCouponStepLogo({
          'logo': res.coupon[0].logo,
        });
      } else {
        // console.log("logo finns ej sparad sen innan");
      }
    };

    GetCoupon(cbLogo, {'pickedCouponId': account.pickedCouponId}); //get data from db
  }, []);

  useEffect( () => {
    if (couponStepLogo.logo === '') {
      props.setIsNextBtnActive(false);
    } else {
      props.setIsNextBtnActive(true);
    };
      props.setInitialContent(couponStepLogo.logo);
      props.setContent(couponStepLogo.logo);
  }, [couponStepLogo])

  return (
    <>
      <div id='stepLogoWrapper' className=''>
        <h4>1. Börja med att ladda upp din företagslogga.</h4>
        <p>Välj en logga bland dina filer eller klistra in en bildadress. Justera storleken genom att dra i hörnen. Maxstorlek på filen: 50 K.</p>
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
    </>
  )
};