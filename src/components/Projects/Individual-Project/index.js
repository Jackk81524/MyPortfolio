
import { Link, useLocation, useParams } from 'react-router-dom';
import './index.scss'
import projectData from './project-data';
import Loader from 'react-loaders';
import AnimatedLetters from '../../AnimatedLetters';
import { useEffect, useState } from 'react';

const ProjectDetails = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const { projectId } = useParams();
    const project = projectData[projectId];

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)

        return () => clearTimeout(timeoutId)
    }, [])

    return (
        <>
            <div className="container individual-project-page">
                <div className='text-zone'>
                    <h1 className='projects-header'>
                        <AnimatedLetters 
                            letterClass={letterClass}
                            strArray={project.title}
                            idx={6}
                        />
                    </h1>
                    <h2 className='tech-box'>{project.technology}</h2>
                    <p>{project.description}</p>
                    <a href="https://github.com/Jackk81524/MyPortfolio" className="flat-button">
                        Github
                    </a>
                </div>
            </div>
            <Loader type="pacman" />
        </>
    )

}

export default ProjectDetails