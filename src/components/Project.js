import * as React from 'react';
import { Button, Container } from '@mui/material';
import GitHubIcons from './GitHubIcons.js';

const Project = (props) => {
    return (
        <div className='item' id={props.project.id}>
            <Container>
                <GitHubIcons/>
                <div>
                    {props.project.name}
                </div>
                <div>
                    {props.project.language}
                </div>
                <div>
                    {props.project.description}
                </div>
                <div>
                    {props.project.updated_at}
                </div>
                <Button onClick={()=>{window.open(props.project.html_url,'_blank')}} variant="contained">
                    Visit Repository
                </Button>
            </Container>
        </div>
  );
};
export default Project;