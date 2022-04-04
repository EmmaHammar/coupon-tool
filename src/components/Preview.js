import React, { useEffect, useState, useContext } from 'react';
// import GetCoupon from '../services/GetCoupon';
import { AccountContext } from '../App';

export default function Preview() {
    const [coupon, setCoupon] = useState({});
    // const [bgColor, setBgColor] = useState('');
    //TODO need to get each nextClick + stepperClick
    const account = useContext(AccountContext);
    
    useEffect( () => {
      //TODO: sometimes Uncaught (in promise) TypeError: Failed to fetch
      //TODO: err: Preview.js:41 Uncaught (in promise) TypeError: Cannot set properties of null (setting 'innerHTML')

      

      //get coupon data from db -> show in preview
      fetch(`https://coupon-tool-backend.herokuapp.com/coupons/${account.pickedCouponId}`)
      .then(response => response.json())
      .then( coupon => {

        console.log("Show this coupon in preview:", coupon[0]);
        
        //TODO är detta bäst för att ej få caught in promise?
        if (coupon !== null) {

          let couponTemplate = `
            <header id='previewHeader'></header>
            <div id='previewMain'>
              <div id='bgColorWrapper' style='background-color:${coupon[0].background}; display:flex; flex-direction:column; padding:8px;'>
                <div style='max-width:200px; padding-top:8px;margin-bottom:8px;'>${coupon[0].logo}</div>
                <div id='couponText' style='padding-bottom:8px; margin-top:20px'>${coupon[0].text}</div>
                <img id='prodImg' alt='TODO addera fr db' src=${coupon[0].prodImg} style='margin-bottom:8px;'></img>
                <button id='showCodeBtn' style='margin-top:8px;'>Visa koden</button>
              </div>
              <p id='couponTerms'>${coupon[0].terms}</p>
            </div>
            <footer id='previewFooter'></footer>
          `;
  
          //add tailwind class components to element
          document.getElementById('mobileWrapper').innerHTML=couponTemplate;
          document.getElementById('showCodeBtn').classList.add('btn', 'btn-secondary');
          document.getElementById('previewHeader').classList.add('previewHeader');
          document.getElementById('previewMain').classList.add('previewMain');
          document.getElementById('bgColorWrapper').classList.add('bgColorWrapper');
          document.getElementById('couponTerms').classList.add('couponTerms');
          document.getElementById('previewFooter').classList.add('previewFooter');
        };
      });
    }, []);

  return (
    <div id='mobileWrapper' className='outline w-[300px] h-[534px] flex flex-col justify-between rounded-3xl'>
    </div>
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