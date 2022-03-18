import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import StepLogo from '../components/StepLogo';
import StepBackground from '../components/StepBackground';
import StepText from '../components/StepText';
import StepProduct from '../components/StepProduct';

export default function UserPage() {
    
  return (
    <div id='userPageWrapper' className='outline font-Inter bg-pink-500 md:bg-green-500 lg:bg-yellow-500 mx-10 mt-10 mb-24'>
             
          {/* <Header />  */}

          <main>
            <div id='editWrapper' className='min-h-[70vh] bg-red-500'>
              USERPAGE content

        
                {/* <StepLogo /> */}
                {/* { showBackground ? <StepBackground /> : ''} */}
                {/* <StepText /> */}
                {/* <StepProduct />  */}
          
            </div>
          
          </main>
          {/* <Footer />  */}
     
    </div>
  )
};
