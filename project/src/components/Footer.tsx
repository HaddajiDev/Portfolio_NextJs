import React from 'react'
import itch from '@/app/imgs/itch.png';
import Image from 'next/image';
import linki from '@/app/imgs/link.png';
import git from '@/app/imgs/git.png';

function Footer() {
  return (
    <div className='container-fluid'>
        <h5 className='find'>Find me on</h5>
        <div className='links'>
            <div className='hover-target link'>
                <a href='https://haddajidev.itch.io/' target='_blank' style={{all: 'unset'}}><Image src={itch} alt=''/></a>
                <a href='https://haddajidev.itch.io/' target='_blank' style={{all: 'unset'}}><p>ItchIo</p></a>
            </div>
            <div className='hover-target link' >
                <a href='https://www.linkedin.com/in/ahmed-haddaji-b70953299/' target='_blank' style={{all: 'unset'}}><Image src={linki} alt=''/></a>
                <a href='https://www.linkedin.com/in/ahmed-haddaji-b70953299/' target='_blank' style={{all: 'unset'}}><p>LinkedIn</p></a>
            </div>
            <div className='hover-target link'>
                <a href='https://github.com/HaddajiDev/' target='_blank' style={{all: 'unset'}}><Image src={git} alt=''/></a>
                <a href='https://github.com/HaddajiDev' target='_blank' style={{all: 'unset'}}><p>GitHub</p></a>
            </div>
        </div>        
        <p className='mt-5 point-sec'>© Made with &lt;/&gt; by Ahmed Haddaji. Tunisia 2024.</p>
    </div>
  )
}

export default Footer