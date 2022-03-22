function UpdateCoupon(coupon) {
    fetch('http://localHost:3001/coupons/update', {

        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        }, 
        body: JSON.stringify(coupon)
    })
    .then(data => data.json())
    .then(res => {
        console.log("res from couponsRouter:", res);
    });
}

export default UpdateCoupon;