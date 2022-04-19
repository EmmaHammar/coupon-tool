function UpdateCoupon(coupon) {
    // fetch('http://localHost:3001/coupons/update', {
    fetch('https://coupon-tool-backend.herokuapp.com/coupons/update', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        }, 
        body: JSON.stringify(coupon)
    })
    .then(data => data.json())
    .then(res => {
        // console.log("UpdateCoupon - res from couponsRouter:", res);
    });
};

export default UpdateCoupon;