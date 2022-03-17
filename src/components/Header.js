import React from 'react';

export default function Header() {
  return (
    <header className='outline'>
        <div className='flex justify-between'>
            <h1 className='font-bold hover-text'>Adoveo</h1>
            <div className='btn'>LOGGA UT</div>
        </div>
        <div className='flex justify-between'>
            <h2 className='w-2/5'>Glasskupong mars 2022</h2>
            <nav className='w-3/5 justify-between bg-yellow-100 lg:flex'>
                <h3 className='text-1xl underline'>LOGGA</h3>
                <h3>BAKGRUND</h3>
                <h3>DIN HÄLSNING</h3>
                <h3>VÄLJ PRODUKT</h3>
                <h3>SUMMERING</h3>
            </nav>
        </div>
    </header>
  )
};