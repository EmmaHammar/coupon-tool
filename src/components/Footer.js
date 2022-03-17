import React from 'react';

export default function Footer() {
    let nextBtnText = 'SPARA OCH GÅ VIDARE'
  return (
    <footer className='outline'>
        <button id='backBtn' className='btn btn-royal'>Tillbaka</button>
        <button id='nextBtn'>{nextBtnText}</button>
    </footer>
  )
};