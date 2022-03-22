import React from 'react';

export default function Footer(props) {
    let nextBtnText = 'SPARA OCH GÅ VIDARE'

    const Save = (evt) => {
      props.onClick(evt); //cb App.js
    }
  return (
    <footer className='outline h-16 md:h-20 bg-blue fixed bottom-0 inset-x-0 px-10'>
      <div className='flex justify-between items-baseline'>
        <button id='backBtn' className='btn btn-primary-reverse'>Tillbaka</button>
        <button id='nextBtn' className='btn btn-primary' onClick={Save}>{nextBtnText}</button>
      </div>
        
    </footer>
  )
};