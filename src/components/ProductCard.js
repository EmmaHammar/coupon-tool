import React from 'react'

export default function ProductCard(props) {
    let imgSrc = 'https://www.siaglass.se/media/1834/1005-trollis.jpg?width=800&height=600&bgcolor=fff'; 

    const handleClick = (evt) => {
      let pickedProdObj = {
        'prodId': props.prodId,
        'prodImg': props.prodImgLink,
        'codeLink': props.codeLink,
        'terms': props.prodTerms
      };
      console.log("pickedProdObj:", pickedProdObj);
      //TODO save to state / db
    }
    return (
      <div id={props.prodId} className='w-48'>
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