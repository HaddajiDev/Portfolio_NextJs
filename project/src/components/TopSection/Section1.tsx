import logo from '@/app/Logo.png';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const words = ['motion', 'webapps', 'games', 'mobile apps', 'things'];

function Section1() {    
  const [currentText, setCurrentText] = useState<string>('');
  const dataText: string[] = words;

  useEffect(() => {
    function typeWriter(text: string, i: number, fnCallback: () => void) {
      if (i < text.length) {
        const newText = text.substring(0, i + 1);
        setCurrentText(newText);
        setTimeout(() => {
          typeWriter(text, i + 1, fnCallback);
        }, 100);
      } else if (typeof fnCallback === 'function') {
        setTimeout(fnCallback, 700);
      }
    }

    function startTextAnimation(i: number) {
      if (i < dataText.length) {
        typeWriter(dataText[i], 0, () => {
          startTextAnimation(i + 1);
        });
      } else {        
        setTimeout(() => {
          startTextAnimation(0);
        }, 700);
      }
    }
    startTextAnimation(0);
  }, []); 

  return (
    <div className='section-1'>
        <Image className='logo hover-target' src={logo} alt=''/>
        <div className="cont">
            <main className="main">
                <div className="verticalLine"></div>
                <div className="content">
                    <p className='point-sec'>Start /&gt;</p>
                    <h1>Hi, my name is <span className="highlight"><b>Ahmed Haddaji</b></span></h1>      
                    <h1 className=''><i>i design</i> and develop <b className='typing'>{currentText}</b></h1>
                    <h1 className='ss'></h1>
                    <h5 className='point-sec' style={{marginTop: 50}}>Let me show You...</h5>
                </div>
            </main>
        </div>
    </div>
  )
}

export default Section1;