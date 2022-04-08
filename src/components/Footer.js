import React, { useEffect } from 'react';
// import { SaveContext } from '../App';
import { Link } from 'react-router-dom';

export default function Footer(props) {
    let nextBtnText = 'SPARA OCH GÅ VIDARE';
  return (
    // <SaveContext.Consumer>
      // { saveClick => 
        <footer id='navFooter' className='outline h-16 md:h-20 bg-blue fixed bottom-0 inset-x-0 px-10 flex justify-between items-center'>
          {/* <div className=''> */}
          <Link to={props.linkPathBack}>
            <button id='backBtn' className='btn btn-primary-reverse' onClick={props.saveClick}>TILLBAKA</button>
          </Link>
            {
            props.isNextBtnActive ? 
              <Link to={props.linkPath}> 
              <button id='nextBtn' className='btn btn-primary' onClick={props.saveClick}>{nextBtnText}</button>
              </Link>
            : <button id='nextBtn' className='btn btn-primary-inactive' onClick={props.saveClick}>{nextBtnText}</button>
            }
        </footer>
      // }
    // </SaveContext.Consumer>   
  )
};