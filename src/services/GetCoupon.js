function GetCoupon(cb, info) {
    // fetch('http://localhost:3001/coupons/show', {
    fetch(`https://coupon-tool-backend.herokuapp.com/coupons/show`, {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        }, 
        body: JSON.stringify(info)
    })
    .then(response => response.json())
    .then( res => {
    //   console.log("GetCoupon - res from CouponsRouter!:", res);
    cb(res);
    });
};

export default GetCoupon;