import * as React from 'react';
import { Button, Container, Stack, Typography } from '@mui/material';
import LanguageTag from './LanguageTag';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';

const Project = (props) => {
    return (
        <div className='item' id={"project-" + props.project.id}>
            <Container className="fullHeight">
                <Stack spacing={1} className="fullHeight alignCenter">
                    <div>
                        <Typography className='projectTitle'>
                            {props.project.name}
                        </Typography>
                        <div className='projectDescription'>
                            {props.project.description}
                        </div>
                    </div>
                    <div className='fullSize'>
                        <iframe src="https://astronomalies.netlify.app/" title="description" className='projectIframe'></iframe> 
                    </div>  
                    <div className='projectButtons'> 
                        <Button onClick={()=>{window.open(props.project.demo_url,'_blank')}} variant="contained" className='repositoryButton'>
                            Full Demo
                        </Button>
                        <div className='widthGap'></div>
                        <Button onClick={()=>{window.open(props.project.github_url,'_blank')}} variant="contained" className='repositoryButton'>
                            Visit Repository
                        </Button>
                    </div>
                    <div className='languageButtons'>
                        <Stack direction="row" spacing={1} className="alignItemsCenter">
                            {props.project.id != 0 ? <ArrowCircleLeftIcon className='arrowIcon' onClick={()=>{document.getElementById("project-" + (props.project.id - 1)).scrollIntoView({behavior: "smooth"});}}/> : <></>}
                            {props.project.languages.map((language)=> <LanguageTag language={language}/>)}
                            {props.project.id != props.numProjects - 1 ? <ArrowCircleRightIcon className='arrowIcon' onClick={()=>{document.getElementById("project-" + (props.project.id + 1)).scrollIntoView({behavior: "smooth"});}}/> : <></>}
                        </Stack>
                    </div>
                </Stack>
            </Container>
        </div>
  );
};
export default Project;
