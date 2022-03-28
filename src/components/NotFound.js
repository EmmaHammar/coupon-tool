import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <>
      <div id="notFoundWrapper" className='flex flex-col justify-center items-center h-72'>
        <h4 className='my-6'>Oj då, denna sida kan inte hittas...</h4>
        <Link to='/'> 
          <button className='btn btn-secondary-reverse'>Besök startsidan</button>
        </Link>
      </div>
    </>
  )
};