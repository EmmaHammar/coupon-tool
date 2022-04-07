import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AccountContext } from '../App';

export default function UserPage(props) {
  useEffect( () => {
    props.setCurrentStep('userpage');
    props.setShowFooter(false);

  });

  const navigate = useNavigate(); 
    
  const handleClick = () => {
    navigate('/steg1');
  };

  return (
    <AccountContext.Consumer>
      { account => 
      <div id='userPageWrapper' className=''>
        <h2>Hej {account.userId}!</h2>
        <button className='btn btn-primary-reverse mt-2' onClick={handleClick}>Skapa ny kampanj</button>
        <div className='mt-6'>
          <h3>Dina sparade kampanjer</h3>
          <ul className='mt-2 flex flex-col bg-mint'>
            <li className='btn btn-secondary text-center mb-2'>Kampanj1</li>
            <li className='btn btn-secondary text-center mb-2'>Kampanj2</li>
            <li className='btn btn-secondary text-center mb-2'>Kampanj3</li>
          </ul>
        </div>
      </div>
      }
    </AccountContext.Consumer>
  )
};


//min-h-[70vh]

//OBS <UserContext.Consumer> can only have 1 child