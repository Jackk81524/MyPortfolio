import './index.scss'
import { Link, NavLink } from 'react-router-dom'
import Logo from '../../assets/images/J-Logo-Name.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUser, faEnvelope, faCode } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => (
    <div className="nav-bar">
        <Link className="logo" to = "/">
            <img src={Logo} alt="logo" />
        </Link>

        <nav>
            <NavLink exact="true" activeclassname="active" to="/">
                <FontAwesomeIcon icon = {faHome} color='#4d4d4e' />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className ="about-link" to="/about">
                <FontAwesomeIcon icon = {faUser} color='#4d4d4e' />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className= "contact-link" to="/contact">
                <FontAwesomeIcon icon = {faEnvelope} color='#4d4d4e' />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className= "projects-link" to="/projects">
                <FontAwesomeIcon icon = {faCode} color='#4d4d4e' />
            </NavLink>
        </nav>
        <ul>
            <li>
                <a 
                    target="_blank"
                    rel="norefferer" 
                    href = "https://www.linkedin.com/in/jackknox815/"
                >
                    <FontAwesomeIcon icon={faLinkedin} color = "#4d4d4e" />
                </a>
            </li>
            <li>
                <a 
                    target="_blank"
                    rel="norefferer" 
                    href = "https://github.com/Jackk81524"
                >
                    <FontAwesomeIcon icon={faGithub} color = "#4d4d4e" />
                </a>
            </li>
        </ul>
    </div>
)

export default Sidebar