import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function UserPage() {
  const navigate = useNavigate(); 
    
  const handleClick = () => {
    console.log("visa");
    navigate('/steg1');
  }
  return (
    <div id='userPageWrapper' className='outline'>
      <h2>HEJ FRIDA!</h2>
      <button className='btn' onClick={handleClick}>Skapa ny kampanj</button>
    </div>
  )
};


//min-h-[70vh]