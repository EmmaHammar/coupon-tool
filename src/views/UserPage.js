import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AccountContext } from '../App';

export default function UserPage() {
  const navigate = useNavigate(); 
    
  const handleClick = () => {
    console.log("visa");
    navigate('/steg1');
  }
  return (
    <AccountContext.Consumer>
      { account => 
      <div id='userPageWrapper' className='outline'>
        <h2>HEJ {account.userId}!</h2>
        <button className='btn' onClick={handleClick}>Skapa ny kampanj</button>
      </div>
      }
    </AccountContext.Consumer>
  )
};


//min-h-[70vh]

//OBS <UserContext.Consumer> can only have 1 child