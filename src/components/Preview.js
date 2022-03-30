import React, { useEffect, useState } from 'react';
import GetCoupons from '../services/GetCoupons';

export default function Preview() {
    const [coupon, setCoupon] = useState({})

    //TODO need to get each nextClick + stepperClick
    useEffect( () => {
        //get all coupons from db
        GetCoupons( (coupons) => {
            console.log("coupons from fetch:", coupons[0]);
            setCoupon(coupons[0]);
        });
    }, []);

  return (
    <div className=''>
        <div id='mobileWrapper' className='outline w-[263px] h-[467px]'>
            <img src={coupon.logo} alt='Alt-text logga' className=''></img>
            {/* <div>{coupon.background}</div> */}
            <div>{coupon.prodImg}</div>
            <img src={coupon.prodImg} alt='Alt-text prodImg' className=''></img>
            <button className='btn btn-secondary'>Hämta QR-koden</button>
            <div>{coupon.terms}</div>
            <img src={coupon.background} alt='Alt-text backgrund' className=''></img>
        </div>
    </div>
  )
};

//TO DO This is not working correctly
// <div id='prodImgWrapper' className='bg-yellow-50'>
//     <img src={props.prodImgLink} alt={props.prodImgAltText} className='object-cover h-48 w-48'></img>
// </div>  