import React from 'react';
import { Link } from 'react-router-dom';

export default function Header(props) {

  //show highlight of picked step in stepper
  switch (props.currentStep) {
    case 'logo':
      document.getElementById('nav-logo').classList.add('picked-step');
      document.getElementById('nav-background').classList.remove('picked-step');
      document.getElementById('nav-text').classList.remove('picked-step');
      document.getElementById('nav-product').classList.remove('picked-text');
      document.getElementById('nav-summary').classList.remove('picked-step');
      break;
    case 'background':
      document.getElementById('nav-background').classList.add('picked-step');
      document.getElementById('nav-logo').classList.remove('picked-step');
      document.getElementById('nav-text').classList.remove('picked-step');
      document.getElementById('nav-product').classList.remove('picked-text');
      document.getElementById('nav-summary').classList.remove('picked-step');
      break;
    case 'text':
      document.getElementById('nav-text').classList.add('picked-step');
      document.getElementById('nav-logo').classList.remove('picked-step');
      document.getElementById('nav-background').classList.remove('picked-step');
      document.getElementById('nav-product').classList.remove('picked-text');
      document.getElementById('nav-summary').classList.remove('picked-step');
      break;
    case 'product':
      document.getElementById('nav-product').classList.add('picked-step');
      document.getElementById('nav-logo').classList.remove('picked-step');
      document.getElementById('nav-background').classList.remove('picked-step');
      document.getElementById('nav-text').classList.remove('picked-step');
      document.getElementById('nav-summary').classList.remove('picked-step');
      break;
    case 'summary':
      document.getElementById('nav-summary').classList.add('picked-step');
      document.getElementById('nav-logo').classList.remove('picked-step');
      document.getElementById('nav-background').classList.remove('picked-step');
      document.getElementById('nav-text').classList.remove('picked-step');
      document.getElementById('nav-product').classList.remove('picked-step');
      break;
    default: 
      break;
  }
  return (
    <header className=''>
        <div className='flex justify-between'>
          <Link to='/'>
            <h1 className='font-bold hover-text'>Adoveo</h1>
          </Link>
            <div className='btn btn-secondary'>LOGGA UT</div>
        </div>
        <div className='lg:flex justify-start mt-4'>
            <h2 className='lg:w-2/5'>Glasskupong mars 2022</h2>
            <nav className='justify-between lg:w-3/5 flex flex-wrap'>
                <Link to='/steg1'>
                  <h3 id='nav-logo' className='nav-menu-item'>LOGGA</h3>
                </Link>
                <Link to='/steg2'>
                  <h3 id='nav-background' 
                  className='nav-menu-item'>BAKGRUND</h3>
                </Link>
                <Link to='/steg3'>
                  <h3 id='nav-text' className='nav-menu-item'>DIN HÄLSNING</h3>
                </Link>
                <Link to='/steg4'>
                  <h3 id='nav-product' className='nav-menu-item'>VÄLJ PRODUKT</h3>
                </Link>
                <Link to='/steg5'>
                  <h3 id='nav-summary' className='nav-menu-item'>SUMMERING</h3>
                </Link>
            </nav>
        </div>
    </header>
  )
};