import * as React from 'react';
import Header from "./Header.js"
import { Typography } from '@mui/material';

const Home = () => {
    return (
      <div>
        <Header/>
        <div className='content'>
          <section>
            <img src='./../../static/images/mikeSquare.jpg' alt='' style={{width: '30%'}}/>
            <Typography>Full Stack Developer</Typography>
            <Typography>I love to work on projects and learn new skills.</Typography>
          </section>
          <section>
            About Me
          </section>
          <section>
            See My Work!
          </section>
        </div>
      </div>
  );
};
export default Home;