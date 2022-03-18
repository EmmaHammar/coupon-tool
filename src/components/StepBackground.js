import React from 'react';
import TinyEditor from './TinyEditor';

export default function StepBackground() {
  return (
    <div id='stepBackgroundWrapper' className='outline'>
      <h4>2. Välj vad du vill ha som bakgrundsbild. </h4>
      <p>Ladda upp en bild eller välj en färg.</p>
     
      {/* <TinyEditor toolBarOptions={ toolBarOptions }/> */}
      <TinyEditor />

    </div>
  )
};