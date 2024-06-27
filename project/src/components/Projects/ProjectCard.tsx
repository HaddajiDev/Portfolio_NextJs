import React from 'react';
import { motion } from 'framer-motion';
import {AllGames, AllGames_2, AllGames_3, AllGames_4, AllProjects} from './Project';
import Image from 'next/image';
import arrow from '@/app/imgs/Arrow.png';
import arrow_black from '@/app/imgs/Arrow_black.png';

function ProjectCard() {
  return (
    <>
    <div className='container-fluid'>        
        <div className='project-holder'>
            {AllProjects.filter((el) => el.name != "E-commerce app").map((el) =>
                <motion.div                        
                >
                <div className='project-img'>
                    <Image src={el.img} alt='' style={{height: el.height, width: el.width}} className='img-fluid hover-target'/>
                    <h2 className='project-name'>{el.name}</h2>
                    <Image src={arrow} alt='' width={50} className='arrow'/>
                </div>
            </motion.div>
            )}
            
        </div>
        <div className='project-holder'>
            <motion.div
                    >
                    <div className='project-img'>
                        <Image src={AllProjects[2].img} alt='' style={{height: AllProjects[2].height, width: AllProjects[2].width}} className='img-fluid hover-target'/>
                        <h2 className='project-name black'>{AllProjects[2].name}</h2>
                        <Image src={arrow_black} alt='' width={50} className='arrow hover-target'/>
                    </div>
            </motion.div>
        </div>
    </div>
                
        
    </>
  )
}

export default ProjectCard