import React from 'react'

export default function ProductCard(props) {
    const handleClick = (evt) => {
      let pickedProdObj = {
        'prodId': props.prodId,
        'prodImg': props.prodImgLink,
        'codeLink': props.codeLink,
        'terms': props.prodTerms
      };
      props.setPickedProd(pickedProdObj);

      //remove active class (btn-primary) on all btns except the clicked btn: 
      // remove active class on all btns
      const btnContainer = document.querySelector('#prodCardWrapper');
      const btns = btnContainer.querySelectorAll('div.bg-blue > button');    
      for (let i = 0; i<btns.length; i++) {
        if (btns[i].classList.contains('btn-primary')) {
          btns[i].classList.remove('btn-primary');
          btns[i].classList.add('btn-secondary');
          btns[i].innerText='LÄGG TILL';
        };
      };

      //add active class on clicked btn
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
      <div className='w-48'>
          <img src={props.prodImgLink} alt={props.prodImgAltText} className='w-48'></img>
          <div className='bg-blue'>
              <h4 className='text-creme'>{props.prodHeading}</h4>
              <p className='text-creme'>{props.prodDescription}</p>
              <p className='text-creme'>Pris: {props.prodPrice}</p>
              <button id={props.prodId} className='btn btn-secondary' onClick={handleClick}>LÄGG TILL</button>
          </div>
      </div>
        
    )
};


//REMEMBER
//Toggle state:
  //setState false if true and vice versa
  //props.setIsAdded(!props.isAdded);