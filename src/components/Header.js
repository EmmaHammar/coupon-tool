import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {

  return (
    <header className=''>
        <div className='flex justify-between'>
          <Link to='/'>
            <h1 className='font-bold hover-text'>Adoveo</h1>
          </Link>
            <button className='btn btn-secondary'>LOGGA UT</button>
        </div>
    </header>
  )
};