import React, { useState, useEffect } from 'react';
import ProdCard from './ProdCard';
import GetProducts from '../services/GetProducts';

export default function StepProduct(props) {
  const [stepType, setStepType] = useState('product');
  
  useEffect( () => {
    props.setCurrentStep(stepType);
    GetProducts();
  })

  //get prodArr from db

  let products = {
    
  }

  //in return, map prodArr and print each prodCard with new return 


  return (
    <div id='stepProductWrapper' className=''>
      <h4>4. Välj vilka produkter du vill skicka.</h4>
      <p>Via en QR-kod kan mottagaren hämta produkten på Pressbyrån eller 7Eleven.</p>
      <ProdCard /> 
    </div>
  )
};


// const products = [
//   {
//     prodId: 'prodId1',
//     prodImg: 'https://www.siaglass.se/media/1834/1005-trollis.jpg?width=800&height=600&bgcolor=fff', 
//     prodTitle: 'Cool Down',
//     prodDescription: 'Välj en valfri GB-glass.',
//     prodPrice: '9kr/st',
//     codeLink: '',
//     prodTerms: 'Välj valfri GB-glass på 7Eleven eller Pressbyrån. Visa upp QR-koden senast 2023-12-31. Vid frågor: support@adoveo.com',
//   }, {
//     prodId: 'prodId2',
//     prodImg: 'https://www.partyhallen.se/cache/a0/799x799-b_glad-pask-paskagg-med-godis-1.jpg', 
//     prodTitle: 'Påskjakt',
//     prodDescription: 'Härligt godisägg från Cloetta.',
//     prodPrice: '',
//     codeLink: '',
//     prodTerms: 'Hämta ut ett godisägg på Hemköp. Visa upp QR-koden 2022-05-31. Vid frågor: support@adoveo.com',
//   }
// ];
// console.log("products", products);
