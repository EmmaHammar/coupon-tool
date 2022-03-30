import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import GetProducts from '../services/GetProducts';

export default function StepProduct(props) {
  const [stepType, setStepType] = useState('product');
  const [productList, setProductList] = useState([]);
  
  useEffect( () => {
    //get all products from db
    GetProducts( (products) => {
      setProductList(products);
    });
    props.setCurrentStep(stepType);

    props.setLinkPath('/steg5'); //send linkPath to Footer.js so nextBtn navigate to next step
  }, []);

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
                /> 
              )
            })
          }
        </div>
      </div>
    </>
  )
};