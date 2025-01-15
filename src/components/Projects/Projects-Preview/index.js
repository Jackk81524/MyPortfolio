import { Link } from 'react-router-dom'
import './index.scss'

const ProjectPreview = ({ title, description, technology, id }) => {

    return (
        <>
            <Link to={`/project/${id}`} className='preview-box'>
                <div className='preview-text'>
                    <div className='title'>
                        {title}
                    </div>
                    <div className='body'>
                       <p>{description}</p>
                       <p>{technology}</p>
                    </div>
                </div>
            </Link>
        </>
    )
}

export default ProjectPreview