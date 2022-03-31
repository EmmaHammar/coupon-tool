import React, { useEffect, useState, useContext } from 'react';
import GetCoupon from '../services/GetCoupon';
import { AccountContext } from '../App';

export default function Preview() {
    const [coupon, setCoupon] = useState({});
    //TODO need to get each nextClick + stepperClick
    const account = useContext(AccountContext);
    
    useEffect( () => {
        //get coupon data from db -> show in preview
        let pickedCouponId = account.pickedCouponId;
        GetCoupon(pickedCouponId, setCoupon); //can I change state like that, setCoupon in GetCoupon.js?
    }, []);


    //parse string to DOM element
    // var xmlString = "<div id='foo'><a href='#'>Link</a><span></span></div>";
    var xmlString = '<img src="https://cdn.logo.com/hotlink-ok/logo-social.png" alt="" width="1184" height="622" />';
    
    // var doc = new DOMParser().parseFromString(xmlString, "text/xml");
    // console.log('Right?', doc.firstChild); // => <a href="#">Link...
    // console.log("still right?", new DOMParser().parseFromString(xmlString, "text/xml").firstChild);
    // let showLogo = new DOMParser().parseFromString(xmlString, "text/html").firstChild;
    // console.log("showLogo", showLogo.firstChild.innerHTML);
    // console.log(doc.firstChild.firstChild.innerHTML); // => Link

    // let res = new DOMParser().parseFromString(xmlString, "text/xml").firstChild.innerHTML;
    // // console.log("res", res);
    // console.log("PASTE?", new DOMParser().parseFromString(xmlString, "text/xml").firstChild.innerHTML);
   

  return (
    <div>
        <div id='mobileWrapper' className='outline w-[263px] h-[467px]'>
            {/* 
             */}
             {/* <img src="https://cdn.logo.com/hotlink-ok/logo-social.png" alt="" width="1184" height="622" /> */}
            {/* <div>{coupon.background}</div> */}
            {/* {doc.firstChild} */}
            {/* <div>{coupon.prodImg}</div> */}
            <img src={coupon.logo} alt='Alt-text logga' className=''></img>
            <p>{coupon.text}</p>
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


// You have to install npm i react-html-parser import it to your component import ReactHtmlParser from "react-html-parser";"; and render it

// <div className="wysiwyg">
// {ReactHtmlParser(wysiwyg)}
// </div>