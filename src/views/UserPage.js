import React from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../App';

export default function UserPage() {
  const navigate = useNavigate(); 
    
  const handleClick = () => {
    console.log("visa");
    navigate('/steg1');
  }
  return (
    <UserContext.Consumer>
      { user => 
      <div id='userPageWrapper' className='outline'>
        <h2>HEJ {user.userName}!</h2>
        <button className='btn' onClick={handleClick}>Skapa ny kampanj</button>
      </div>
      }
    </UserContext.Consumer>
  )
};


//min-h-[70vh]

//OBS <UserContext.Consumer> can only have 1 child