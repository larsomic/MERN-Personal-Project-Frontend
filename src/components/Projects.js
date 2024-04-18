import * as React from 'react';
import Project from './Project.js'

const Projects = (props) => {
    const [projects, setProjects] =  React.useState([]);
    React.useEffect(() => {
        setProjects(
            {data:[
                {id:0, name: "WIP: Friend Finder", languages: ["Next.js", "JS", "React"], description: "An under development \"social media app\". The app matches users who have similar \"friend\" prefrences. The site utilizes jwt tokens to handle user authentication and uses a central store to manage user state including color theme.", github_url: "https://github.com/larsomic/MERN-Personal-Project-Frontend", demo_url:"https://friend-finder.mike-larson.me/", backend_github:"https://github.com/larsomic/friend-finder-backend"},
                {id:1, name: "Microsoft: Astronomalies", languages: ["Python", "JS", "React"], description: "A project about gas anomaly detection using machine learning to fuse data from satellites and ground weather stations was recently completed in collaboration with Microsoft for my senior project. This resulted in a cutting-edge solution that combines the advantages of satellite data with the accuracy of ground-based weather stations.", github_url: "https://github.com/wsu-cpts421-sp22/microsoft", demo_url:"https://astronomalies.netlify.app/"},
                {id:2, name: "Personal Portfolio", languages: ["JS", "React"], description: "My portfolio website, built with JavaScript and React, to showcase my skills and projects. The platform provides a comprehensive overview of my background and offers a window into my talent and expertise, making it the perfect platform to demonstrate the skills to potential employers and clients.", github_url: "https://github.com/larsomic/MERN-Personal-Project-Frontend", demo_url:"https://mike-larson.me/"},
                {id:3, name: "March Madness Picker", languages: ["JS", "React"], description: "A for fun project that harnesses publicly available statistics to predict outcomes of March Madness games, it is a novel approach (that didn't perform well this year) to understanding and predicting tournament results.", github_url: "https://github.com/larsomic/MERN-Personal-Project-Frontend/blob/main/src/components/MarchMadness2024.js", demo_url:"https://mike-larson.me/march-madness"},
                {id:4, name: "Fantasy Football Standings", languages: ["JS", "React"], description: "A quick project to display fantasy football standings for a fantasy football league.", github_url: "https://github.com/larsomic/MERN-Personal-Project-Frontend/blob/main/src/components/FantasyFootball.js", demo_url:"https://mike-larson.me/fantasy-football"}
            ]})
    }, [])
    
    return (
        <div style={{width: '100%', height:'100%'}}>
            { (projects.data) ? (projects.data.map((project, index)=><Project project={project} key={index} numProjects={projects.data.length}/>)): 'No Projects'}
        </div>
  );
};
export default Projects;