import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { AllProjects } from './Project';
import Image from 'next/image';
import arrow from '@/app/imgs/Arrow.png';
import arrow_black from '@/app/imgs/Arrow_black.png';

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

const Project = ({ project, arrowImg }: any) => {
    const controls = useScrollAnimation(project.name);

    return (
        <motion.div
            id={project.name}
            initial={{ x: -50, opacity: 0 }}
            animate={controls}
            transition={{ duration: 0.5 }}
        >
            <div className='project-img'>
                <Image src={project.img} alt='' style={{ height: project.height, width: project.width }} className='img-fluid hover-target' />
                <h2 className='project-name'>{project.name}</h2>
                <Image src={arrowImg} alt='' width={50} className='arrow' />
            </div>
        </motion.div>
    );
};

const ProjectCard = () => {
    const controlsForSpecialProject = useScrollAnimation('_project');

    return (
        <div className='container-fluid'>
            <div className='project-holder'>
                {AllProjects.filter((el) => el.name !== "E-commerce app").map((el) => (
                    <Project key={el.name} project={el} arrowImg={arrow} />
                ))}
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
};

export default ProjectCard;
