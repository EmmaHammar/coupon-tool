function GetCoupons(cb) {
    // fetch('http://localHost:3001/coupons')
    fetch('https://coupon-tool-backend.herokuapp.com/coupons')
    .then(response => response.json())
    .then(coupons => {
        cb(coupons); //GetCoupons() is cb in StepProduct.js
    });
};

export default GetCoupons;