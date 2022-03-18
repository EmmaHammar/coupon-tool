import React from 'react';

export default function Footer() {
    let nextBtnText = 'SPARA OCH GÅ VIDARE'
  return (
    <footer className='outline h-16 md:h-20 bg-yellow-100 fixed bottom-0 inset-x-0 px-10'>
      <div className='flex justify-between'>
        <button id='backBtn' className='btn btn-royal'>Tillbaka</button>
        <button id='nextBtn' className='btn btn-royal'>{nextBtnText}</button>
      </div>
        
    </footer>
  )
};