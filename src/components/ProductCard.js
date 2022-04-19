import React, { useEffect } from 'react';

export default function ProductCard(props) {
  useEffect( () => {
    if (props.couponStepProduct === '') {
      props.setIsNextBtnActive(false);

    } else {
      props.setIsNextBtnActive(true);
      document.getElementById(props.couponStepProduct).classList.add('btn-primary');
      document.getElementById(props.couponStepProduct).classList.remove('btn-secondary');
      document.getElementById(props.couponStepProduct).innerText='TILLAGD';
    };
  }, [props.couponStepProduct]);

  const handleClick = (evt) => {
    // props.setShowPreview(true);
    
    let pickedProdObj = {
      'prodId': props.prodId,
      'prodImg': props.prodImgLink,
      'prodImgAltText': props.prodImgAltText,
      'codeLink': props.codeLink,
      'terms': props.prodTerms
    };
    props.setPickedProd(pickedProdObj);

    const btnContainer = document.querySelector('#prodCardWrapper');
    const btns = btnContainer.querySelectorAll('div.bg-blue > button');
    
    //remove active class (btn-primary) on all btns except the clicked btn: 
    //1) remove active class on all btns
    for (let i = 0; i<btns.length; i++) {
      if (btns[i].classList.contains('btn-primary')) {
        btns[i].classList.remove('btn-primary');
        btns[i].classList.add('btn-secondary');
        btns[i].innerText='LÄGG TILL';
      };
    };

    //2) add active class on clicked btn
    evt.target.classList.remove('btn-secondary');
    evt.target.classList.add('btn-primary'); //active class
    evt.target.innerText='TILLAGD';

    //enable nextBtn if picked prod
    document.getElementById('nextBtn').classList.remove('btn-primary-inactive');
    document.getElementById('nextBtn').classList.add('btn-primary');

    //nextBtn onClick show next step
    props.setIsNextBtnActive(true);
  };

  return (
    <div className='w-48 bg-pink-100 flex flex-col justify-between outline'>
        <div id='prodImgWrapper' className='bg-yellow-50'>
          <img src={props.prodImgLink} alt={props.prodImgAltText} className='object-cover h-48 w-48'></img>
        </div>
        <div className='bg-blue flex flex-col justify-between gap-y-2 pt-2 h-40 md:h-48 p-2'>
            <h5 className='text-creme'>{props.prodHeading}</h5>
            <p className='text-creme'>{props.prodDescription}</p>
            <p className='text-creme'>Pris: {props.prodPrice}</p>
            <button id={props.prodId} className='btn btn-secondary' onClick={handleClick}>LÄGG TILL</button>
        </div>
    </div>
  )
};