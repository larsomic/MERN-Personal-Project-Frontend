import * as React from 'react';
import { Octokit } from "octokit";
import Project from './Project.js'

const Projects = (props) => {
    const [projects, setProjects] =  React.useState([]);
    React.useEffect(() => {
        const fetchData = async () => {   
            // Octokit.js
            // https://github.com/octokit/core.js#readme
            const octokit = new Octokit({
                auth: process.env.REACT_APP_GITHUB_AUTH_TOKEN,
            })
            setProjects(await octokit.request('GET /user/repos', {visibility: 'public', affiliation: 'owner'}))
        }
        
        fetchData().catch(console.error);
        // setProjects({data:[{id: 242554325, name: "ThanksgivingGameSFML", language: "C++", description: "CrimsonCode2020  WInning Submission", html_url: "https://github.com/larsomic/ThanksgivingGameSFML", updated_at: "2019-12-06T02:43:38Z"},
        // {id: 242554326, name: "ThanksgivingGameSFML", language: "C++", description: "CrimsonCode2020  WInning Submission", html_url: "https://github.com/larsomic/ThanksgivingGameSFML", updated_at: "2019-12-06T02:43:38Z"}]})
    }, [])
    
    return (
        <div style={{width: '100%', height:'100%'}}>
            { (projects.data) ? (projects.data.map((project)=> <Project project={project}/>)): 'No Projects'}
        </div>
  );
};
export default Projects;