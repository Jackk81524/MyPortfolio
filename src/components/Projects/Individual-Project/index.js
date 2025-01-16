
import { Link, useLocation, useParams } from 'react-router-dom';
import './index.scss'
import projectData from './project-data';
import Loader from 'react-loaders';
import AnimatedLetters from '../../AnimatedLetters';
import { useEffect, useState } from 'react';
import Logo from '../../../assets/images/J-logo.png'
import ImageCarousel from '../Image-Carousal';

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
                        {project.title.map((titlePart, index) => (
                            <div key={index}>
                                <AnimatedLetters
                                    letterClass={letterClass}
                                    strArray={titlePart} 
                                    idx={9}
                                />
                                <br/>
                            </div>
                        ))}
                    </h1>
                    <h2 className='tech-box'>{project.technology}</h2>
                    {project.description.map((paragraph, index) => (
                        <p className='description' key={index}>{paragraph}</p>
                    ))}
                    <div className='multiple-buttons'>
                        {project.video && (
                            <a href={project.video} className="flat-button">
                                Video Overview
                            </a>
                        )}
                        {project.site && (
                            <a href={project.site} className="flat-button">
                                View Site Here
                            </a>
                        )}
                        <a href={project.repo} className="flat-button">
                            Github
                        </a>
                    </div>
                </div>
                <div className='logo-space'>
                    <ImageCarousel images={project.content} labels={project.labels} className='my-logo' />
                </div>
            </div>
            <Loader type="pacman" />
        </>
    )

}

export default ProjectDetails