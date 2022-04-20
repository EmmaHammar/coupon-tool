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
      console.log("cbAllCoupons:", coupons);
      setCoupons(coupons);
    };

    GetAllCoupons(cbAllCoupons);
  }, []);

  const navigate = useNavigate(); 
    
  const handleClickBtn = () => {
    if (document.getElementById('inputCampaignTitle').value !== '') {
      let newCouponTitle = document.getElementById('inputCampaignTitle').value; 
    
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
    // console.log("newCoupon:", newCoupon);
    props.setShowCouponId(newCoupon.couponId);

    SaveCoupon(newCoupon);

    navigate('/steg1');
    } else {
      document.getElementById('errorMsgCampaignTitle').innerHTML='Du måste skriva en kampanjtitel för att kunna skapa en kampanj.'
    };
  };

  const handleClickInput = (evt) => {
    document.getElementById('errorMsgCampaignTitle').innerHTML='';
  }

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
          <button className='btn btn-primary-reverse mt-2' onClick={handleClickBtn}>SKAPA NY KAMPANJ</button>
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