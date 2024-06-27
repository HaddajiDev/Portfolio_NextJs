import logo from '@/app/Logo.png';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';



const words = ['motion', 'webapps', 'games', 'mobile apps', 'things'];

function Section1() {   
  
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {      
      setIndex(prevIndex => (prevIndex + 1) % words.length);      
    }, 3000);
    return () => clearInterval(interval);
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
                    <h1 className=''><i>i design</i> and develop <b>{words[index]}</b></h1>
                    <h5 className='point-sec' style={{marginTop: 50}}>Let me show You...</h5>
                </div>
            </main>
        </div>
    </div>
  )
}

export default Section1;