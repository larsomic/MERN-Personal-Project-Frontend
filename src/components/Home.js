import * as React from 'react';

import Header from "./Header.js"
import Projects from './Projects.js';
import CompactResume from './CompactResume.js'
import Contact from './Contact.js';

import { Typography } from '@mui/material';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Stack } from '@mui/system';

import { anime } from 'react-anime';

function isElementVisible(el) {
  if(!el){
    return false;
  }

  var rect     = el.getBoundingClientRect(),
      vWidth   = window.innerWidth || document.documentElement.clientWidth,
      vHeight  = window.innerHeight || document.documentElement.clientHeight,
      efp      = function (x, y) { return document.elementFromPoint(x, y) };     

  // Return false if it's not in the viewport
  if (rect.right < 0 || rect.bottom < 0 
          || rect.left > vWidth || rect.top > vHeight)
      return false;

  // Return true if any of its four corners are visible
  return (
        el.contains(efp(rect.left,  rect.top))
    ||  el.contains(efp(rect.right, rect.top))
    ||  el.contains(efp(rect.right, rect.bottom))
    ||  el.contains(efp(rect.left,  rect.bottom))
  );
}


class Home extends React.Component {
  componentDidMount(){
    window.addEventListener('scroll', function (event) {
      if (!isElementVisible(document.querySelector('#section1'))) {
        document.querySelector('#app > div > div').style.display = 'block';
      } else{
        document.querySelector('#app > div > div').style.display = 'none';
      }
    }, true);

    anime({
      targets: ['.lightBlueArrow'],
      keyframes: [
        {scale: 0.85},
        {scale: 1},
      ],
      easing: 'linear',
      loop: true
    });
  }

  render(){
    return (
      <div>
        <div className='headerContainer'>
          <Header />
        </div>
        <div className='content'>
          <section className='homeBackground' id='section1'>
            <Paper className='centeredPaper'>
                <div className='split left'>
                  <div className='firstCircle'></div>
                  <div className='secondCircle'></div>
                  <div className='userImageCircle'></div>
                </div>
                <div className='split right'>
                  <Container>
                    <div id='centeredName'>
                      <Typography variant="h2" className='homeFirstName'>Michael</Typography>
                      <Typography variant="h2" className='homeSecondName'>Larson</Typography>
                    </div>
                  </Container>                
                </div>
            </Paper>
            <div className='arrowGroup'  onClick={()=>{document.getElementById("section2").scrollIntoView({behavior: "smooth"})}}>
              <ArrowForwardIosIcon className='darkBlueArrow'/>
              <ArrowForwardIosIcon className='lightBlueArrow'/>
            </div>
          </section>
          <section id='section2'>
          <Paper className='centeredPaper' id='scrollSection2'>
                <div className='split left'>
                <Container>
                    <div id='centeredName'>
                      <Typography variant="h2" className='homeFirstName'>About</Typography>
                      <Typography variant="h2" className='homeSecondName'>Me.</Typography>
                    </div>
                  </Container>     
                </div>
                <div className='split right'>
                  <Container>
                    <div id='centeredText'>
                      <Typography variant="h2" className='homeAboutMeText'>
                        I am a software engineer, specializing in web development. For the last 6 years, I have been developing using JavaScript, Python, C++, and other programming languages.
                      </Typography>
                    </div>
                  </Container>                
                </div>
            </Paper>
            <div className='arrowGroup'  onClick={()=>{document.getElementById("section3").scrollIntoView({behavior: "smooth"})}}>
              <ArrowForwardIosIcon className='darkBlueArrow'/>
              <ArrowForwardIosIcon className='lightBlueArrow'/>
            </div>
          </section>
          <section id='section3'>
            <Paper className='centeredPaper'>
              <div className='split left'>
              <Container>
                  <div id='centeredName'>
                    <Typography variant="h2" className='homeFirstName'>My</Typography>
                    <Typography variant="h2" className='homeSecondName'>Projects.</Typography>
                  </div>
                </Container>     
              </div>
              <div className='split right'>
                <Container className='fullContainer' id='centeredStack'>
                  <div className="carousel"> 
                    <Projects/>
                  </div>
                </Container>                
              </div>
            </Paper>
            <div className='arrowGroup'  onClick={()=>{document.getElementById("section4").scrollIntoView({behavior: "smooth"})}}>
              <ArrowForwardIosIcon className='darkBlueArrow'/>
              <ArrowForwardIosIcon className='lightBlueArrow'/>
            </div>
          </section>
          <section id='section4'>
          <Paper className='centeredPaper'>
              <div className='split left'>
              <Container>
                  <div id='centeredName'>
                    <Typography variant="h2" className='homeFirstName'>My</Typography>
                    <Typography variant="h2" className='homeSecondName'>Resume.</Typography>
                  </div>
                </Container>     
              </div>
              <div className='split right'>
                <CompactResume/>             
              </div>
            </Paper>
            <div className='arrowGroup'  onClick={()=>{document.getElementById("section5").scrollIntoView({behavior: "smooth"})}}>
              <ArrowForwardIosIcon className='darkBlueArrow'/>
              <ArrowForwardIosIcon className='lightBlueArrow'/>
            </div>
          </section>
          <section id='section5'>
            <Paper className='centeredPaper'>
              <div className='split left'>
              <Container>
                  <div id='centeredName'>
                    <Typography variant="h2" className='homeFirstName'>Contact</Typography>
                    <Typography variant="h2" className='homeSecondName'>Me.</Typography>
                  </div>
                </Container>     
              </div>
              <div className='split right'>
                <Container className='fullContainer'>
                  <div className='fullContainer'>
                    <Stack className='fullContainer' id='centeredStack'>
                      <Contact/>
                    </Stack>
                  </div>
                </Container>                
              </div>
            </Paper>
          </section>
        </div>
      </div>
    );
  }
};
export default Home;