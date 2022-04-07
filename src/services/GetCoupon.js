function GetCoupon(cb, info) {
    // console.log("info i GetCoupon():", info);

    fetch('http://localhost:3001/coupons/show', {
    // fetch(`https://coupon-tool-backend.herokuapp.com/coupons/show`, {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        }, 
        body: JSON.stringify(info)
    })
    .then(response => response.json())
    .then( res => {
      console.log("Res from CouponsRouter!:", res);
    cb(res);
    });
};

export default GetCoupon;



// function GetCoupon(cb, info) {
//     // console.log("info i GetCoupon():", info);

//     // fetch('http://localhost:3001/coupons/show', {

//     fetch(`https://coupon-tool-backend.herokuapp.com/coupons/show`, {
//         method: 'post',
//         headers: {
//             'Content-Type': 'application/json'
//         }, 
//         body: JSON.stringify(info)
//     })
//     .then(response => response.json())
//     .then( res => {
//       console.log("Res from CouponsRouter!:", res);
//     cb(res);
//     });
// };

// export default GetCoupon;