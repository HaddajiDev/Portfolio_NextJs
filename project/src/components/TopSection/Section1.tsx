import logo from '@/app/Logo.png';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import Roller from './Roller';


const words = ['motion', 'webapps', 'games', 'mobile apps', 'things'];

function Section1() {   

  return (
    <div className='section-1'>
        <Image className='logo' src={logo} alt=''/>
        <div className="cont">
            <main className="main">
                <div className="verticalLine"></div>
                <div className="content">
                    <p className='point-sec'>start /></p>
                    <h1>Hi, my name is <span className="highlight">Ahmed Haddaji</span></h1>      
                    <h1><i>i design</i> and develop <b><Roller /></b></h1>
                    <h5 className='point-sec' style={{marginTop: 50}}>Let me show You...</h5>
                </div>
            </main>
        </div>
    </div>
  )
}

export default Section1;