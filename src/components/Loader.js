import React from 'react';
import adoveoLogo from '../img/adoveo-logo.png';
export default function Loader() {
  return (
    <div id='loaderWrapper' className='flex justify-center'>
        <img src={adoveoLogo} className='animate-spin w-40 mt-20' alt='Spinning logo meanwhile page is loading.'></img>
    </div>
  )
}
