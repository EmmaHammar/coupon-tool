function GetAllCoupons(cb) {
    fetch('http://localhost:3001/coupons/show/all')
    // fetch('https://coupon-tool-backend.herokuapp.com/coupons/show/all')
    .then(response => response.json())
    .then(coupons => {
        cb(coupons); 
        // console.log("coupons:", coupons);
      
    });
};

export default GetAllCoupons;