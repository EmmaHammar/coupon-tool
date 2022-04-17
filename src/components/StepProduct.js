import React, { useState, useEffect, useContext } from 'react';
import ProductCard from './ProductCard';
import GetProducts from '../services/GetProducts';
import { AccountContext } from '../App';
import GetCoupon from '../services/GetCoupon';

export default function StepProduct(props) {
  const [couponStepProduct, setCouponStepProduct] = useState('');
  const [productList, setProductList] = useState([]);
  const account = useContext(AccountContext);
  const [pickedProdId, setPickedProdId] = ('');
  
  //get all products from db in order to print them
  useEffect( () => {
    // props.setShowPreview(false);
    props.setShowFooter(true);
    props.setCurrentStep('product');
    props.setLinkPath('/steg5'); //send linkPath to Footer.js so nextBtn navigate to next step
    props.setLinkPathBack('/steg3'); //linkPath for backBtn in Footer

    //get all products from db
    GetProducts( (products) => {
      setProductList(products);
    });

    document.getElementById('errorMsg').innerHTML = '';
  }, []);

  // show initialContent in editor after first render, only if edit old coupon
  useEffect( () => {
    const cbProduct = (res) => {
      // console.log("StepLogo.js: hämta fr db", res.coupon[0]);
      setCouponStepProduct(res.coupon[0].prodId);
    };

    GetCoupon(cbProduct, {'pickedCouponId': account.pickedCouponId}); //get data from db
  }, []);

  useEffect( () => {
    if (couponStepProduct === '') {
      props.setIsNextBtnActive(false);

    } else {
      props.setIsNextBtnActive(true);
      document.getElementById(couponStepProduct).classList.add('btn-primary');
      document.getElementById(couponStepProduct).classList.remove('btn-secondary');
      document.getElementById(couponStepProduct).innerText='TILLAGD';
    };
      props.setInitialContent('');
      props.setContent('');
  }, [couponStepProduct])

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
                  // setShowPreview={props.setShowPreview}
                /> 
              )
            })
          }
        </div>
      </div>
    </>
  )
};