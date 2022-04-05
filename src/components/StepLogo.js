import React, { useState, useEffect, useContext } from 'react';
// import Loader from './Loader';
import TinyEditor from './TinyEditor';
import { AccountContext } from '../App';
import GetCoupon from '../services/GetCoupon';

export default function StepLogo(props) {
  // const [isNextBtnActive, setIsNextBtnActive] = useState(false);
  const account = useContext(AccountContext);

  useEffect( () => {
    props.setContent(''); //empty setContent so content from other step isn't there TODO move to Footer? If content=== '' => nextBtn inactive???
    // props.setShowPreview(true);
    props.setCurrentStep('logo');
    props.setLinkPath('/steg2'); //send linkPath to Footer.js so nextBtn navigate to next step
    props.setLinkPathBack('/'); //linkPath for backBtn in Footer
    // props.setToolBarOptions(`undo redo | image | alignleft aligncenter alignright | help`);
    props.setToolBarOptions(`undo redo | image`);
  });

  //show db value in editor when printing editor UI
  // useEffect( () => {
  //   if (props.currentStep !== '') {
  //     let info = 
  //     {
  //       'pickedCouponId': account.pickedCouponId, 
  //       'currentStep': props.currentStep
  //     };

  //     const cb = (res) => {
  //       // console.log("res in cb, logo:", res.coupon[0].logo);
  //       props.setEditorValue(res.coupon[0].logo); //print db value initial in editor
  //     };

  //     GetCoupon(cb, info); //get data from db
  //   } else {
  //     console.log("ERROR: props.currentStep === '' -> show loader?");
  //   };
  // });

  return (
    // <AccountContext.Consumer>
    //   { account => 
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
                editorValue={props.editorValue}
              />
          </div>
        </>
      // }
    // </AccountContext.Consumer>
  )
};

//TODO Remove AccountContext.Consumer?