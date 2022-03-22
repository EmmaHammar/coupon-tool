import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className='outline'>
        <div className='flex justify-between'>
          <Link to='/'>
            <h1 className='font-bold hover-text'>Adoveo</h1>
          </Link>
            <div className='btn btn-secondary'>LOGGA UT</div>
        </div>
        <div className='lg:flex justify-start'>
            <h2 className='lg:w-2/5'>Glasskupong mars 2022</h2>
            <nav className='justify-between lg:w-3/5 lg:justify-between border-blue border-2 flex flex-wrap'>
                <Link to='/steg1'>
                  <h3 className='text-1xl underline'>LOGGA</h3>
                </Link>
                <Link to='/steg2'>
                  <h3>BAKGRUND</h3>
                </Link>
                <Link to='/steg3'>
                  <h3>DIN HÄLSNING</h3>
                </Link>
                <Link to='/steg4'>
                  <h3>VÄLJ PRODUKT</h3>
                </Link>
                <Link to='/steg5'>
                  <h3>SUMMERING</h3>
                </Link>
            </nav>
        </div>
    </header>
  )
};