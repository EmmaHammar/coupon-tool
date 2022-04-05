import React, { useState, useEffect, useContext } from 'react';
import ProductCard from './ProductCard';
import GetProducts from '../services/GetProducts';
import { AccountContext } from '../App';
import GetCoupon from '../services/GetCoupon';

export default function StepProduct(props) {
  // const [stepType, setStepType] = useState('product');
  const [productList, setProductList] = useState([]);
  const account = useContext(AccountContext);
  const [pickedProdId, setPickedProdId] = ('ejj');
  
  //get all products from db in order to print them
  useEffect( () => {
    props.setShowPreview(false);
    
    //get all products from db
    GetProducts( (products) => {
      setProductList(products);
    });
    props.setCurrentStep('product');

    props.setLinkPath('/steg5'); //send linkPath to Footer.js so nextBtn navigate to next step
    props.setLinkPathBack('/steg3'); //linkPath for backBtn in Footer

  }, []);

  //first render: show active btn class if a product is picked in db
  useEffect( () => {
    let info = 
    {
      'pickedCouponId': account.pickedCouponId, 
    //   'currentStep': props.currentStep
    };

    const cb = (res) => {
      console.log("res in cb, prodId, initialProdId:", res.coupon[0].prodId);
      if (res.coupon[0].prodId === '') {
        props.setIsNextBtnActive(false);
        props.setInitialProdId(res.coupon[0].prodId)
        
      } else {
        props.setIsNextBtnActive(true);
        props.setInitialProdId(res.coupon[0].prodId)

        document.getElementById(res.coupon[0].prodId).classList.add('btn-primary');
        document.getElementById(res.coupon[0].prodId).classList.remove('btn-secondary');
        document.getElementById(res.coupon[0].prodId).innerText='TILLAGD';

      };

      //TODO need to empty states? 
      // props.setInitialContent('');
      // props.setContent('');
    
    };

    GetCoupon(cb, info); //get data from db
  }, []);

  // useEffect( () => {
  //   //add active class on btn if user has picked a prod that is saved in db
  //   document.getElementById(res.coupon[0].prodId).remove('btn-secondary');
  //   // console.log("div:", document.getElementById(res.coupon[0].prodId));

  //   document.getElementById(res.coupon[0].prodId).add('btn-primary');
  //   // document.getElementById(res.coupon[0].prodId).innerText='TILLAGD';
  // }, [props.setIsNextBtnActive])

  //in return, map prodArr and print each prodCard with new return 
  return (
    <>
      <div id='stepProductWrapper' className=''>
        <h4>4. Välj vilka produkter du vill skicka.</h4>
        <p>Varje produkt har en unik kod som mottagaren scannar i butik.</p>
        <div id="prodCardWrapper" className='mt-6 flex flex-row flex-wrap gap-4'>
          {
            productList.map( (product, index) => {
              return (
                <ProductCard 
                  prodId={product.prodId}
                  prodImgLink={product.imgLink}
                  prodImgAltText={product.imgAltText}
                  prodHeading={product.heading}
                  prodDescription={product.description}
                  prodPrice={product.price}
                  prodTerms={product.terms}
                  codeLink={product.codeLink}
                  key={index}
                  setPickedProd={props.setPickedProd}
                  setIsNextBtnActive={props.setIsNextBtnActive}
                  setShowPreview={props.setShowPreview}
                /> 
              )
            })
          }
        </div>
      </div>
    </>
  )
};