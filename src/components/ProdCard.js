import React from 'react'

export default function ProdCard() {
    let imgSrc = 'https://www.siaglass.se/media/1834/1005-trollis.jpg?width=800&height=600&bgcolor=fff'; 

  return (
    <div id="prodCardWrapper" className='mt-6'>
        <div id='prodCard' className='w-48'>
            <img src={imgSrc} alt='Trollis Ice Cream, waffle with vanilla and chocolate ice cream.' className='w-48'></img>
            <div id='prodCardText' className='bg-blue'>
                <h4 className='text-creme'>Cool Down</h4>
                <p className='text-creme'>Välj en valfri GB-glass.</p>
                <p className='text-creme'>Pris: 9 kr/st</p>
                <button id='addProdBtn' className='btn btn-secondary'>LÄGG TILL</button>
            </div>
        </div>
    </div>
  )
}
