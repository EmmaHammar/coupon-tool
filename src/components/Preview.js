import React, { useEffect, useState, useContext } from 'react';
import GetCoupon from '../services/GetCoupon';
import { AccountContext } from '../App';

export default function Preview(props) {
    const [coupon, setCoupon] = useState({});
    const [couponTemplate, setCouponTemplate] = useState('');

    const account = useContext(AccountContext);

    useEffect( () => {
      document.getElementById('errorMsg').innerHTML = '';
      
      let info = 
      {
        'pickedCouponId': account.pickedCouponId, 
      };

      const cb = (res) => {
        // console.log("fetch i Preview.js:", res.coupon[0]);
        setCoupon(res.coupon[0]);
      };
        
      GetCoupon(cb, info); //get data from db
    }, []);

    useEffect( () => {
      setCouponTemplate(`
        <div id='previewHeader'></div>
        <div id='previewMain'>
          <div style='background-color:${coupon.background}; display:flex; flex-direction:column; padding:8px;'>
            <div style='max-width:200px; padding-top:8px;margin-bottom:8px;'>${coupon.logo}</div>
            <div id='couponText' style='padding-bottom:8px; margin-top:20px'>${coupon.text}</div>
            <img id='prodImg' alt='TODO addera fr db' src=${coupon.prodImg} style='margin-bottom:8px;'></img>
            <button id='showCodeBtn' style='margin-top:8px;'>Visa koden</button>
          </div>
          <p id='couponTerms'>${coupon.terms}</p>
        </div>
        <div id='previewFooter'></div>
      `);

    }, [coupon]);

    useEffect( () => {
        document.getElementById('mobileWrapper').innerHTML = couponTemplate;

        //add tailwind class components to element
        if ( (document.getElementById('showCodeBtn') !== null) && (document.getElementById('previewHeader') !== null) && (document.getElementById('previewMain') !== null) && (document.getElementById('couponTerms') !== null) && (document.getElementById('previewFooter') !== null) ) {
          document.getElementById('showCodeBtn').classList.add('btn', 'btn-secondary');
          document.getElementById('previewHeader').classList.add('preview-header');
          document.getElementById('previewMain').classList.add('preview-main');
          document.getElementById('couponTerms').classList.add('coupon-terms');
          document.getElementById('previewFooter').classList.add('preview-footer');
        };
    });

  return (
    <>
    </>
  )
};