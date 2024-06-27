import { useEffect } from 'react';
import { useAnimation } from 'framer-motion';

const useScrollAnimation = (id: any) => {
    const controls = useAnimation();

    useEffect(() => {
        const handleScroll = () => {
            const element = document.getElementById(id);
            if (element) {
                const { top } = element.getBoundingClientRect();
                const isInView = top >= 0 && top <= window.innerHeight;
                if (isInView) {
                    controls.start({ x: 0, opacity: 1 });
                } else {
                    controls.start({ x: -50, opacity: 0 });
                }
            }
        };

        handleScroll();
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [controls, id]);

    return controls;
};
import React from 'react';
import { motion } from 'framer-motion';
import { AllProjects } from './Project';
import Image from 'next/image';
import arrow from '@/app/imgs/Arrow.png';
import arrow_black from '@/app/imgs/Arrow_black.png';


function ProjectCard() {    
    const renderProjects = (projects: any) => {
        return projects.map((el: any) => {
            const controls = useScrollAnimation(el.name);

            return (
                <motion.div
                    key={el.name}
                    id={el.name}
                    initial={{ x: -50, opacity: 0 }}
                    animate={controls}
                    transition={{ duration: 0.5 }}
                >
                    <div className='project-img'>
                        <Image src={el.img} alt='' style={{ height: el.height, width: el.width }} className='img-fluid hover-target' />
                        <h2 className='project-name'>{el.name}</h2>
                        <Image src={arrow} alt='' width={50} className='arrow' />
                    </div>
                </motion.div>
            );
        });
    };

    const controlsForSpecialProject = useScrollAnimation('_project');

    return (
        <div className='container-fluid'>
            <div className='project-holder'>
                {renderProjects(AllProjects.filter((el) => el.name !== "E-commerce app"))}
            </div>
            <div className='project-holder'>
                <motion.div
                    id='_project'
                    initial={{ x: -50, opacity: 0 }}
                    animate={controlsForSpecialProject}
                    transition={{ duration: 0.5 }}
                >
                    <div className='project-img'>
                        <Image src={AllProjects[2].img} alt='' style={{ height: AllProjects[2].height, width: AllProjects[2].width }} className='img-fluid hover-target' />
                        <h2 className='project-name black'>{AllProjects[2].name}</h2>
                        <Image src={arrow_black} alt='' width={50} className='arrow hover-target' />
                    </div>
                </motion.div>
            </div>
        </div>
    );
}

export default ProjectCard;
