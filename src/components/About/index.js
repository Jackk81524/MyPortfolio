import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Loader from 'react-loaders'

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)

        return () => clearTimeout(timeoutId)
    }, [])

    return (
        <>
            <div className='container about-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters 
                            letterClass={letterClass}
                            strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                            idx={15}
                        />
                    </h1>
                    <p>
                        Hi, I’m Jack Knox! I graduated from Purdue University in May 2024 with a Bachelor’s degree in Computer Engineering, and I currently work as an Applications Developer. I am from Long Island, New York, and I love to travel, stay active, and watch baseball.
                    </p>
                    <p>
                        I’ve gained experience with a wide range of programming languages and frameworks, specializing in C#, .NET, C, C++, TypeScript, Angular, React, JavaScript, Python, Flask, and Swift. This website itself is built with JavaScript and React—a project I took on to showcase my skills and creativity!
                    </p>
                    <p>
                        My passion for technology’s rapid evolution inspired me to become a software developer, driving me to continually learn and grow in this dynamic field. I strive to stay on the cutting edge by mastering new frameworks, tackling challenging projects, and exploring emerging trends. With each step, I aim to hone my craft and make a meaningful impact on the world through innovative technology.
                    </p>
                </div>
            </div>
            <Loader type="pacman" />
        </>
    )
}

export default About