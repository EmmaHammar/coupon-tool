import React from 'react';
import { SaveContext } from '../App';

export default function Footer(props) {
    let nextBtnText = 'SPARA OCH GÅ VIDARE'


  return (
    <SaveContext.Consumer>
      { saveClick => 
        <footer className='outline h-16 md:h-20 bg-blue fixed bottom-0 inset-x-0 px-10'>
          <div className='flex justify-between items-baseline'>
            <button id='backBtn' className='btn btn-primary-reverse mt-4'>TILLBAKA</button>
            <button id='nextBtn' className='btn btn-primary-inactive' onClick={saveClick}>{nextBtnText}</button>
          </div>
            
        </footer>
      }
    </SaveContext.Consumer>   
  )
};