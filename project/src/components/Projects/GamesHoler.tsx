import React from 'react';
import { motion } from 'framer-motion';
import {AllGames, AllGames_2, AllGames_3, AllGames_4, AllGames_5, AllProjects} from './Project';
import Image from 'next/image';
import arrow from '@/app/imgs/Arrow.png';
import arrow_black from '@/app/imgs/Arrow_black.png';

function GamesHoler() {
  return (
    <div className='container-fluid'>
        <div className='row'>
            <div className='project-holder'>
                {AllGames.map((el) => 
                    <motion.div                        
                        >
                        <div className='project-img col-sm-12 col-md-12'>
                            <Image src={el.img} alt='' width={el.width} height={el.height} className='img-fluid hover-target'/>
                            <h2 className='project-name'>{el.name}</h2>
                            <a style={{all: 'unset'}} href={el.url} target='_blank'><Image src={arrow} alt='' width={50} className='arrow'/></a>
                        </div>
                    </motion.div>
                )}
            </div>
        </div>        
        <div className='row'>
            <div className='project-holder'>
                {AllGames_2.map((el) =>
                    <motion.div                        
                        >
                        <div className='project-img'>
                            <Image src={el.img} alt='' width={el.width} height={el.height} className='img-fluid hover-target'/>
                            <h2 className='project-name'>{el.name}</h2>
                            <a style={{all: 'unset'}} href={el.url} target='_blank'><Image src={arrow} alt='' width={50} className='arrow'/></a>
                        </div>
                    </motion.div>
                )}
            </div>
        </div>
        <div className='project-holder'>
            {AllGames_3.map((el) => 
                <motion.div                        
                    >
                    <div className='project-img'>
                        <Image src={el.img} alt='' width={el.width} height={el.height} className='img-fluid hover-target'/>
                        <h2 className='project-name'>{el.name}</h2>
                        <a style={{all: 'unset'}} href={el.url} target='_blank'><Image src={arrow} alt='' width={50} className='arrow'/></a>
                    </div>
                </motion.div>
            )}
        </div>
        <div className='project-holder'>
            {AllGames_4.map((el) => 
                <motion.div                        
                    >
                    <div className='project-img'>
                        <Image src={el.img} alt='' width={el.width} height={el.height} className='img-fluid hover-target'/>
                        <h2 className='project-name'>{el.name}</h2>
                        <a style={{all: 'unset'}} href={el.url} target='_blank'><Image src={arrow} alt='' width={50} className='arrow'/></a>
                    </div>
                </motion.div>
            )}
        </div>
        <div className='project-holder'>
            {AllGames_5.map((el) => 
                <motion.div                        
                    >
                    <div className='project-img'>
                        <Image src={el.img} alt='' width={el.width} height={el.height} className='img-fluid hover-target'/>
                        <h2 className='project-name'>{el.name}</h2>
                        <a style={{all: 'unset'}} href={el.url} target='_blank'><Image src={arrow} alt='' width={50} className='arrow'/></a>
                    </div>
                </motion.div>
            )}
        </div>
    </div>
  )
}

export default GamesHoler