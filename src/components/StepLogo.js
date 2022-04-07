import React, { useState, useEffect, useContext } from 'react';
// import Loader from './Loader';
import TinyEditor from './TinyEditor';
import { AccountContext } from '../App';
import GetCoupon from '../services/GetCoupon';

export default function StepLogo(props) {
  // const [isNextBtnActive, setIsNextBtnActive] = useState(false);
  const [couponStepLogo, setCouponStepLogo] = useState({});
  const account = useContext(AccountContext);


  useEffect( () => {
    // props.setContent(''); //empty setContent so content from other step isn't there TODO move to Footer? If content=== '' => nextBtn inactive???
    props.setShowPreview(false);
    props.setShowFooter(true);
    props.setCurrentStep('logo');
    props.setLinkPath('/steg2'); //send linkPath to Footer.js so nextBtn navigate to next step
    props.setLinkPathBack('/'); //linkPath for backBtn in Footer
    props.setToolBarOptions(`undo redo | image`);

  });

  // //show initialContent in editor after first render, only if edit old coupon
  useEffect( () => {
    console.log("StepLogo.js: hämta fr db");
    const cbLogo = (res) => {
      // console.log("fetch i StepLogo.js:", res.coupon[0]);
      // console.log("logo i StepLogo.js:", res.coupon[0].logo);

      setCouponStepLogo(res.coupon[0]);

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
        <p>Välj bland dina filer samt justera storleken.</p>
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

//TODO fix edit old?