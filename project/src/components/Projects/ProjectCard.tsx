import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import Image from 'next/image';
import arrow from '@/app/imgs/Arrow.png';
import arrow_black from '@/app/imgs/Arrow_black.png';
import { AllProjects } from './Project';

const useScrollAnimation = (id: string) => {
    const controls = useAnimation();
    const [hasAnimated, setHasAnimated] = React.useState(false);

    React.useEffect(() => {
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
        return () => window.removeEventListener('scroll', handleScroll);
    }, [controls, hasAnimated, id]);

    return controls;
};

const ProjectComponent = ({ project }: { project: typeof AllProjects[number] }) => {
    const controls = useScrollAnimation(project.name);

    return (
        <motion.div
            id={project.name}
            initial={{ x: -50, opacity: 0 }}
            animate={controls}
            transition={{ duration: 0.5 }}
        >
            <div className='project-img col-sm-12 col-md-12'>
                <a style={{ all: 'unset' }} href={project.url} target='_blank' rel="noopener noreferrer">
                    <Image 
                        src={project.img} 
                        alt={project.name} 
                        style={{ height: project.height, width: project.width }}
                        className='img-fluid hover-target'
                    />
                </a>
                <h2 className={`project-name ${project.arrowColor === 'black' ? 'black' : ''}`}>
                    {project.name}
                </h2>
                <a style={{ all: 'unset' }} href={project.url} target='_blank' rel="noopener noreferrer">
                    <Image 
                        src={project.arrowColor === 'black' ? arrow_black : arrow} 
                        alt="Arrow icon" 
                        width={50}
                        className='arrow' 
                    />
                </a>
            </div>
        </motion.div>
    );
};

const ProjectCard = () => {
    const groupedProjects = AllProjects.reduce((acc, project) => {
        const row = project.row.toString();
        acc[row] = acc[row] || [];
        acc[row].push(project);
        return acc;
    }, {} as Record<string, typeof AllProjects>);

    return (
        <div className='container-fluid'>
            {Object.entries(groupedProjects).map(([rowNumber, projects]) => (
                <div className='row' key={`row-${rowNumber}`}>
                    <div className='project-holder'>
                        {projects.map((project) => (
                            <ProjectComponent 
                                key={project.name} 
                                project={project} 
                            />
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ProjectCard;