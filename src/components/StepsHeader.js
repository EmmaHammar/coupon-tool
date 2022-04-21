import React, { useEffect, useState } from 'react';


export default function StepsHeader(props) {
    const [campaignTitle, setCampaignTitle] = useState('');

    useEffect( () => {
        //get couponTitle from lS if it exists, else it's ''
        if (JSON.parse(localStorage.getItem('pickedCampaign')) !== null) {
            setCampaignTitle(JSON.parse(localStorage.getItem('pickedCampaign')).couponTitle);
        };
    }, []);

    useEffect( () => {


        let navLogo = document.getElementById('nav-logo');
        let navBackground = document.getElementById('nav-background');
        let navText = document.getElementById('nav-text');
        let navProduct = document.getElementById('nav-product');
        let navSummary = document.getElementById('nav-summary');

        //style currentStep 
        switch (props.currentStep) {
        case 'logo': 
            navLogo.classList.add('current-step');
            navBackground.classList.remove('current-step');
            navText.classList.remove('current-step');
            navProduct.classList.remove('current-step');
            navSummary.classList.remove('current-step');
            break;
        case 'background': 
            navLogo.classList.remove('current-step');
            navBackground.classList.add('current-step');
            navText.classList.remove('current-step');
            navProduct.classList.remove('current-step');
            navSummary.classList.remove('current-step');
            break;
        case 'text': 
            navLogo.classList.remove('current-step');
            navBackground.classList.remove('current-step');
            navText.classList.add('current-step');
            navProduct.classList.remove('current-step');
            navSummary.classList.remove('current-step');
            break;
        case 'product': 
            navLogo.classList.remove('current-step');
            navBackground.classList.remove('current-step');
            navText.classList.remove('current-step');
            navProduct.classList.add('current-step');
            navSummary.classList.remove('current-step');
            break;
        case 'summary': 
            navLogo.classList.remove('current-step');
            navBackground.classList.remove('current-step');
            navText.classList.remove('current-step');
            navProduct.classList.remove('current-step');
            navSummary.classList.add('current-step');
            break;
        default:
            break;
        };
        
      }, [props.currentStep]); 


  return (

        <div id='couponHeader' className='max-w-4xl'>
            {/* <h2 className='lg:w-2/5'>Kampanj: {JSON.parse(localStorage.getItem('pickedCampaign')).couponTitle}</h2> */}
           
            {/* <h2 id='couponTitleHolder' className='lg:w-2/5'>Kampanj:XX</h2> */}

            <h2 className='lg:w-2/5'>Kampanj: {campaignTitle}</h2>
            <nav className='md:border-solid md:border-blue md:border-2'>
              <ul className='md:flex md:justify-between md:items-center lg:min-w-fit '>
                <li>
                  <h3 id='nav-logo' className='nav-menu-item'>1. Logga</h3>
                </li>
                <li>
                  <h3 id='nav-background' className='nav-menu-item'>2. Bakgrund</h3>
                </li>
                <li>
                  <h3 id='nav-text' className='nav-menu-item'>3. Din hälsning</h3>
                </li>
                <li>
                  <h3 id='nav-product' className='nav-menu-item'>4. Välj produkt</h3>
                </li>
                <li>
                  <h3 id='nav-summary' className='nav-menu-item'>5. Summering</h3>
                </li>
              </ul>  
            </nav>
        </div>  
  )
};