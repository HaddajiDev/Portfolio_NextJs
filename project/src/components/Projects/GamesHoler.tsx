import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { AllGames, AllGames_2, AllGames_3, AllGames_4, AllGames_5 } from './Project';
import Image from 'next/image';
import arrow from '@/app/imgs/Arrow.png';

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

const Project = ({ project }: any) => {
    const controls = useScrollAnimation(project.name);

    return (
        <motion.div
            key={project.name}
            id={project.name}
            initial={{ x: -50, opacity: 0 }}
            animate={controls}
            transition={{ duration: 0.5 }}
        >
            <div className='project-img col-sm-12 col-md-12'>
                <Image src={project.img} alt={project.name} width={project.width} height={project.height} className='img-fluid hover-target' />
                <h2 className='project-name'>{project.name}</h2>
                <a style={{ all: 'unset' }} href={project.url} target='_blank'>
                    <Image src={arrow} alt='arrow' width={50} className='arrow' />
                </a>
            </div>
        </motion.div>
    );
};

function GamesHoler() {
    const renderProjects = (projects: any) => {
        return projects.map((el: any) => (
            <Project key={el.name} project={el} />
        ));
    };

    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='project-holder'>
                    {renderProjects(AllGames)}
                </div>
            </div>
            <div className='row'>
                <div className='project-holder'>
                    {renderProjects(AllGames_2)}
                </div>
            </div>
            <div className='project-holder'>
                {renderProjects(AllGames_3)}
            </div>
            <div className='project-holder'>
                {renderProjects(AllGames_4)}
            </div>
            <div className='project-holder'>
                {renderProjects(AllGames_5)}
            </div>
        </div>
    );
}

export default GamesHoler;
