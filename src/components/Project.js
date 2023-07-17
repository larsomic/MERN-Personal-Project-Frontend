import * as React from 'react';
import { Button, Container, Stack, Typography } from '@mui/material';
import LanguageTag from './LanguageTag';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import { anime } from 'react-anime';

class Project extends React.Component {
    componentDidMount(){
        anime({
        targets: ['.arrowIcon'],
        keyframes: [
            {scale: 0.92, color:'#38AECC'},
            {scale: 0.92, color:'#38AECC'},
            {scale: 0.92, color:'#38AECC'},
            {scale: 1, color:'#0090C1'},
            {scale: 1, color:'#0090C1'},
            {scale: 1, color:'#0090C1'},
        ],
        easing: 'linear',
        loop: true
      });
    }
    

    render(){
        return (
            <div className='item' id={"project-" + this.props.project.id}>
                <Container className="fullHeight">
                    <Stack spacing={1} className="fullHeight alignCenter">
                        <div>
                            <Typography className='projectTitle'>
                                {this.props.project.name}
                            </Typography>
                            <div className='projectDescription'>
                                {this.props.project.description}
                            </div>
                        </div>
                        <div className='fullSize'>
                            <iframe src={this.props.project.demo_url} title="description" className='projectIframe'></iframe> 
                        </div>  
                        <div className='projectButtons'> 
                            <Button onClick={()=>{window.open(this.props.project.demo_url,'_blank')}} variant="contained" className='repositoryButton'>
                                Full Demo
                            </Button>
                            <div className='widthGap'></div>
                            <Button onClick={()=>{window.open(this.props.project.github_url,'_blank')}} variant="contained" className='repositoryButton'>
                                Visit Repo
                            </Button>
                            <div className='widthGap'></div>
                            {this.props.project.backend_github ?
                                <Button onClick={()=>{window.open(this.props.project.github_url,'_blank')}} variant="contained" className='repositoryButton'>
                                    Visit Backend Repo
                                </Button>
                                :<></>
                            }
                        </div>
                        <div className='languageButtons'>
                            <Stack direction="row" spacing={1} className="alignItemsCenter">
                                {this.props.project.id !== 0 ? <ArrowCircleLeftIcon className='arrowIcon' onClick={()=>{document.getElementById("project-" + (this.props.project.id - 1)).scrollIntoView({behavior: "smooth"});}}/> : <></>}
                                {this.props.project.languages.map((language)=> <LanguageTag language={language}/>)}
                                {this.props.project.id !== this.props.numProjects - 1 ? <ArrowCircleRightIcon className='arrowIcon' onClick={()=>{document.getElementById("project-" + (this.props.project.id + 1)).scrollIntoView({behavior: "smooth"});}}/> : <></>}
                            </Stack>
                        </div>
                    </Stack>
                </Container>
            </div>
    );
    }
};
export default Project;
