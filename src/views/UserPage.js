import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AccountContext } from '../App';
import SaveCoupon from '../services/SaveCoupon';
import CouponCard from '../components/CouponCard';
import GetAllCoupons from '../services/GetAllCoupons';

export default function UserPage(props) {
  const [coupons, setCoupons] = useState([]);

  useEffect( () => {
    // props.setShowPreview(false);
    props.setCurrentStep('userpage');
    props.setShowFooter(false);

    document.getElementById('errorMsg').innerHTML = '';
  });

  useEffect( () => {
    const cbAllCoupons = (coupons) => {
      // console.log("cbAllCoupons:", coupons);
      setCoupons(coupons);
    };
    GetAllCoupons(cbAllCoupons);

    props.setPickedProd('');

    localStorage.removeItem('pickedCampaign');
  }, []);

  const navigate = useNavigate(); 
    
  const clickNewCoupon = () => {
    if (document.getElementById('inputCampaignTitle').value !== '') {
    
      let newCoupon = {
        couponId: Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1),
        couponTitle: document.getElementById('inputCampaignTitle').value,
        logo: '',
        background: '',
        text: '',
        prodId: '',
        prodImg: '',
        prodImgAltText: '',
        codeLink: '',
        terms: '',
      };
      // props.setShowCouponId(newCoupon.couponId);
      // localStorage.setItem('showCouponId', JSON.stringify(newCoupon.couponId));

      let pickedNewCampaign = {'couponId': newCoupon.couponId, 'couponTitle': newCoupon.couponTitle};
      localStorage.setItem('pickedCampaign', JSON.stringify(pickedNewCampaign)); //save couponId to ls so it survives refresh of page and is reachable for other components

      SaveCoupon(newCoupon);

      navigate('/steg1');
    } else {
      document.getElementById('errorMsgCampaignTitle').innerHTML='Du måste skriva en kampanjtitel för att kunna skapa en kampanj.'
    };
  };

  const handleClickInput = (evt) => {
    document.getElementById('errorMsgCampaignTitle').innerHTML='';
  };

  const clickSavedCoupon = (evt) => {
    // props.setShowCouponId(evt.target.id);
    // localStorage.setItem('showCouponId', JSON.stringify(evt.target.id)); 
 
    let pickedSavedCampaign = {'couponId': evt.target.id, 'couponTitle': evt.target.innerText};
    localStorage.setItem('pickedCampaign', JSON.stringify(pickedSavedCampaign)); //save couponId to ls so it survives refresh of page and is reachable for other components

    navigate('/steg1');
  };

  return (
    <AccountContext.Consumer>
      { account => 
      <div id='userPageStartWrapper' className='w-[200px] md:w-[250px]'>
        <h2>Välkommen {account.userName}!</h2>
        <div id='campaignTitleWrapper' className='flex flex-col mt-8'>
          <div>
            <h3>Kampanjtitel</h3>
            <input id='inputCampaignTitle'type='text' placeholder='Skriv kampanjtitel...' className='cursor-text btn text-center mb-2 w-[200px] md:w-[250px]' onClick={handleClickInput}></input>
          </div>
          <button className='btn btn-primary-reverse mt-2' onClick={clickNewCoupon}>SKAPA NY KAMPANJ</button>
          <p id='errorMsgCampaignTitle' className='errorMsg'></p>
        </div>
        <div className='mt-8'>
          <h3>Dina sparade kampanjer:</h3>
          <ul className='mt-2 flex flex-col'>
            {
              coupons.map( (coupon, index) => {
                return (
                  <CouponCard 
                    couponId={coupon.couponId}
                    couponTitle={coupon.couponTitle}
                    key={index}
                    clickSavedCoupon={clickSavedCoupon}
                  /> 
                )
              })
            }
          </ul>
        </div>
      </div>
      }
    </AccountContext.Consumer>
  )
};