//can I change state like that, setCoupon? See also Preview.js
function GetCoupon(pickedCouponId, setCoupon) {
    
    // fetch(`http://localhost:3001/coupons/${pickedCouponId}`)
    fetch(`https://coupon-tool-backend.herokuapp.com/coupons/${pickedCouponId}`)
    .then(response => response.json())
    .then( coupon => {

            console.log("Show this coupon in preview:", coupon[0]);
            setCoupon(coupon[0]);
        
    });
};

export default GetCoupon;