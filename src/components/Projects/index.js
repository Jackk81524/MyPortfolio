import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import ProjectPreview from './Projects-Preview'

const Projects = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)

        return () => clearTimeout(timeoutId)
    }, [])

    return (
        <>
            <div className='container projects-page'>
                <div className='text-zone'>
                    <h1 className='projects-header'>
                        <AnimatedLetters 
                            letterClass={letterClass}
                            strArray={['M', 'y', ' ', 'P', 'r', 'o', 'j', 'e', 'c', 't', 's']}
                            idx={15}
                        />
                    </h1>
                    <p>I enjoy experimenting and learning through personal projects, which allow me to explore new technologies and push my skills further. This website itself is one such project—a dynamic, responsive platform that I built using React. It serves as both my digital portfolio and a space to showcase my work,</p>
                </div>
                <div className='preview'>
                <ProjectPreview 
                    title="Personal Webpage and Portfolio"
                    description="This is the site you're on! It is designed to showcase my web development skills."
                    technology="JavaScript and ReactJS"
                    id="1"
                />
                </div>
            </div>
            <Loader type="pacman" />
        </>
    )
}

export default Projects