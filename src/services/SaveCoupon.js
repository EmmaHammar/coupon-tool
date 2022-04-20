function SaveCoupon(newCoupon) {
    // fetch('http://localHost:3001/coupons/add', {
        fetch('https://coupon-tool-backend.herokuapp.com/coupons/add', {
            method: 'post',
            headers: {
              'Content-Type': 'application/json'
            }, 
            body: JSON.stringify(newCoupon)
          })
          .then(data => data.json())
          .then(res => {
              // console.log("newCoupon är sparad", res);
          });
};

export default SaveCoupon;