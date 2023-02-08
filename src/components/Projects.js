import * as React from 'react';
import { Octokit } from "octokit";
import Project from './Project.js'

const Projects = (props) => {
    const [projects, setProjects] =  React.useState([]);
    React.useEffect(() => {
        setProjects(
            {data:[
                {id:0, name: "Microsoft: Astronomalies", languages: ["Python", "JS", "React"], description: "A project about gas anomaly detection using machine learning to fuse data from satellites and ground weather stations was recently completed in collaboration with Microsoft for my senior project. This resulted in a cutting-edge solution that combines the advantages of satellite data with the accuracy of ground-based weather stations.", github_url: "https://github.com/wsu-cpts421-sp22/microsoft", demo_url:"https://astronomalies.netlify.app/"},
            ]})
    }, [])
    
    return (
        <div style={{width: '100%', height:'100%'}}>
            { (projects.data) ? (projects.data.map((project, index)=><Project project={project} key={index} numProjects={projects.data.length}/>)): 'No Projects'}
        </div>
  );
};
export default Projects;