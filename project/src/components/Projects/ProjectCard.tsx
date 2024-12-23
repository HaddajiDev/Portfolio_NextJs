import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { AllProjects } from './Project';
import Image from 'next/image';
import arrow from '@/app/imgs/Arrow.png';
import arrow_black from '@/app/imgs/Arrow_black.png';

const useScrollAnimation = (id: any) => {
    const controls = useAnimation();
    const [hasAnimated, setHasAnimated] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const element = document.getElementById(id);
            if (element) {
                const { top } = element.getBoundingClientRect();
                const isInView = top >= 0 && top <= window.innerHeight;
                if (isInView && !hasAnimated) {
                    controls.start({ x: 0, opacity: 1 });
                    setHasAnimated(true);
                }
            }
        };

        handleScroll();
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [controls, hasAnimated, id]);

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
            <div className='project-img col-sm-12 col-md-12'>
                <a style={{ all: 'unset' }} href={project.url} target='_blank'><Image src={project.img} alt='' style={{ height: project.height, width: project.width }} className='img-fluid hover-target' /></a>
                {project.name == "E-commerce app" || project.name == "Savage Blog"|| project.name == "Savage Files"
                    ?<h2 className='project-name black'>{project.name}</h2>
                    :<h2 className='project-name'>{project.name}</h2>
                }
                {project.name == "E-commerce app" || project.name == "Savage Blog" || project.name == "Savage Files"
                ?   <a style={{ all: 'unset' }} href={project.url} target='_blank'><Image src={arrow_black} alt='' width={50} className='arrow' /></a>
                :   <a style={{ all: 'unset' }} href={project.url} target='_blank'><Image src={arrowImg} alt='' width={50} className='arrow' /></a>
                }
            </div>
        </motion.div>
    );
};

const ProjectCard = () => {
    const controlsForSpecialProject = useScrollAnimation('_project');

    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='project-holder'>
                    {AllProjects.filter((el) => el.name !== "E-commerce app" && el.name !== "Savage Blog" && el.name !== "Savage Files").map((el) => (
                        <Project key={el.name} project={el} arrowImg={arrow} />
                    ))}
                </div>
            </div>
            <div className='row'>
                <div className='project-holder'>
                    {AllProjects.filter((el) => el.name !== "Agency app" && el.name !== "Weather app"  && el.name !== "Savage Files").map((el) => (
                        <Project key={el.name} project={el} arrowImg={arrow} />
                    ))}
                </div>
            </div>
            <div className='row'>
                <div className='project-holder'>
                    {AllProjects.filter((el) => el.name !== "Agency app" && el.name !== "Weather app" && el.name !== "E-commerce app" && el.name !== "Savage Blog").map((el) => (
                        <Project key={el.name} project={el} arrowImg={arrow} />
                    ))}
                </div>
            </div>
            {/* <div style={{display: 'flex'}}>
                <div className='project-holder'>
                    <motion.div
                        id='_project'
                        initial={{ x: -50, opacity: 0 }}
                        animate={controlsForSpecialProject}
                        transition={{ duration: 0.5 }}
                    >
                        <div className='project-img'>
                            <a style={{ all: 'unset' }} href={AllProjects[2].url} target='_blank'><Image src={AllProjects[2].img} alt='' style={{ height: AllProjects[2].height, width: AllProjects[2].width }} className='img-fluid hover-target' /></a>
                            <h2 className='project-name black'>{AllProjects[2].name}</h2>
                            <a style={{ all: 'unset' }} href={AllProjects[2].url} target='_blank'><Image src={arrow_black} alt='' width={50} className='arrow' /></a>
                        </div>
                    </motion.div>
                </div>
                <div className='project-holder'>
                    <motion.div
                        id='_project'
                        initial={{ x: -50, opacity: 0 }}
                        animate={controlsForSpecialProject}
                        transition={{ duration: 0.5 }}
                    >
                        <div className='project-img'>
                            <a style={{ all: 'unset' }} href={AllProjects[3].url} target='_blank'><Image src={AllProjects[3].img} alt='' style={{ height: AllProjects[3].height, width: AllProjects[3].width }} className='img-fluid hover-target' /></a>
                            <h2 className='project-name black'>{AllProjects[3].name}</h2>
                            <a style={{ all: 'unset' }} href={AllProjects[3].url} target='_blank'><Image src={arrow_black} alt='' width={50} className='arrow' /></a>
                        </div>
                    </motion.div>
                </div>
            </div> */}
            
        </div>
    );
};

export default ProjectCard;
