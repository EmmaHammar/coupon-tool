function GetCoupon(cb, info) {
    const controller = new AbortController();
    const { signal } = controller;

    // fetch('http://localhost:3001/coupons/show', {
    fetch('https://coupon-tool-backend.herokuapp.com/coupons/show', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        }, 
        body: JSON.stringify(info)
    }, { signal })
    .then(response => response.json())
    .then( res => {
        // console.log("GetCoupon - success res from CouponsRouter!:", res);
        cb(res);
    })
    .catch(e => {
        console.warn(`Fetch error: ${e.message}`)
    });

    controller.abort();
};

export default GetCoupon;