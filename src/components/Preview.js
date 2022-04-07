import React, { useEffect, useState, useContext } from 'react';
import GetCoupon from '../services/GetCoupon';
import { AccountContext } from '../App';

export default function Preview() {
    const [coupon, setCoupon] = useState({});
    const [couponTemplate, setCouponTemplate] = useState('');

    const account = useContext(AccountContext);
    
    useEffect( () => {
      let info = 
      {
        'pickedCouponId': account.pickedCouponId, 
      //   'currentStep': props.currentStep
      };

      const cb = (res) => {
        console.log("fetch i Preview.js:", res.coupon[0]);
        setCoupon(res.coupon[0]);
      };
        
      GetCoupon(cb, info); //get data from db
    }, []);

    useEffect( () => {
      setCouponTemplate(`
        <header id='previewHeader'></header>
        <div id='previewMain'>
          <div style='background-color:${coupon.background}; display:flex; flex-direction:column; padding:8px;'>
            <div style='max-width:200px; padding-top:8px;margin-bottom:8px;'>${coupon.logo}</div>
            <div id='couponText' style='padding-bottom:8px; margin-top:20px'>${coupon.text}</div>
            <img id='prodImg' alt='TODO addera fr db' src=${coupon.prodImg} style='margin-bottom:8px;'></img>
            <button id='showCodeBtn' style='margin-top:8px;'>Visa koden</button>
          </div>
          <p id='couponTerms'>${coupon.terms}</p>
        </div>
        <footer id='previewFooter'></footer>
      `);


    }, [coupon]);

    useEffect( () => {
      setTimeout( () => {

        document.getElementById('mobileWrapper').innerHTML = couponTemplate;

        //add tailwind class components to element
        document.getElementById('showCodeBtn').classList.add('btn', 'btn-secondary');
        document.getElementById('previewHeader').classList.add('preview-header');
        document.getElementById('previewMain').classList.add('preview-main');
        document.getElementById('couponTerms').classList.add('coupon-terms');
        document.getElementById('previewFooter').classList.add('preview-footer');      }, 5000);
    });

    
    

  return (
    <div id='mobileWrapper' className='outline w-[300px] h-[534px] flex flex-col justify-between rounded-3xl'></div>
  )
};


//TO DO This is not working correctly
// <div id='prodImgWrapper' className='bg-yellow-50'>
//     <img src={props.prodImgLink} alt={props.prodImgAltText} className='object-cover h-48 w-48'></img>
// </div>  

//TODO fix margin padding så logo o text inte flyter ihop om text är stor alt liten

//kom ihåg
  //375×667 (3.75%)
  //70% -> 263 x 467
  //80% height because of battery icon etc -> 374px ska synas -> 93 ska bort -> /2 top bottom = 47 -> 12 i tailwind



// You have to install npm i react-html-parser import it to your component import ReactHtmlParser from "react-html-parser";"; and render it

// <div className="wysiwyg">
// {ReactHtmlParser(wysiwyg)}
// </div>

//REMEMBER
// //get src path from logo img
// let str = coupon[0].logo;
// console.log("str", str);
// const words = str.split(' ');
// // console.log("words", words);
// // console.log("src?", words[1]);  