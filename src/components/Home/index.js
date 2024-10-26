import { Link } from 'react-router-dom'
// import LogoTitle from '../../assets/images/logo-s.png'
import LogoTitle from '../../assets/images/J-Logo2.png'
import SelfPicture from '../../assets/images/Self-Picture.JPG'
import './index.scss'
import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import Loader from 'react-loaders'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = ['a', 'c', 'k', ' ','K', 'n', 'o', 'x', '!']
  const welcomeArray = ['W', 'e', 'l', 'c', 'o', 'm', 'e', ' ', 't', 'o', ' ', 'm', 'y']
  const welcomeArray2 = ['P','e', 'r','s','o','n','o','l',' ','P', 'o', 'r', 't', 'f', 'o', 'l', 'i', 'o','!']

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)

    return () => clearTimeout(timeoutId)
  }, [])

  return (
    <>
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          <span className={letterClass}>H</span>
          <span className={`${letterClass} _12`}>i,</span>
          <br />
          <span className={`${letterClass} _13`}>I</span>
          <span className={`${letterClass} _14`}>'m</span>
          <img src={LogoTitle} alt="developer" />
          <AnimatedLetters
            letterClass={letterClass}
            strArray={nameArray}
            idx={15}
          />
          <br />
          <AnimatedLetters
            letterClass={letterClass}
            strArray={welcomeArray}
            idx={18}
          />
          <br />
          <AnimatedLetters
            letterClass={letterClass}
            strArray={welcomeArray2}
            idx={17}
          />
        </h1>
        <h2>Full Stack Developer</h2>
        <Link to="/contact" className="flat-button">
          CONTACT ME
        </Link>
      </div>
      <div>
        <img
          className='self-picture'
          src={SelfPicture}
          alt="Picture of Me"
        />
      </div>
    </div>
    <Loader type = "pacman"></Loader>
    </>
  )
}

export default Home
