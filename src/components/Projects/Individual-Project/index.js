
import { useLocation, useParams } from 'react-router-dom';
import './index.scss'
import projectData from './project-data';

const ProjectDetails = () => {
    const { projectId } = useParams();
    const project = projectData[projectId];

    return (
        <div className="new-test">
            <h1>{project.title}</h1>
            <p>{project.description}</p>
            <p>Technologies: {project.technology}</p>
        </div>
    )

}

export default ProjectDetails