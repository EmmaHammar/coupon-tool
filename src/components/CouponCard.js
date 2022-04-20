import React from 'react';

export default function CouponCard(props) {
  return (
    <li id={props.couponId} className='btn btn-secondary text-center mb-2' tabIndex={0} onClick={props.clickSavedCoupon}>{props.couponTitle}</li>
  )
};