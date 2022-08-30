import * as React from 'react';
import Header from "./Header.js"
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const Contact = () => {
    return (
        <div>
          <Header/>
          <Container>
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="100"
                  image="./../../static/images/GitHub.png"
                  alt="GitHub"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    GitHub
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Check out my projects here.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="100"
                  image="./../../static/images/GitHub.png"
                  alt="GitHub"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    LinkedIn
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Connect with me on LinkedIn!
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Container>
        </div>
  );
};
export default Contact;