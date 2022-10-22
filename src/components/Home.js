import * as React from 'react';
import Header from "./Header.js"
import { Typography } from '@mui/material';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

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
  }

  render(){
    return (
      <div>
        <div style={{display: 'none'}}>
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
              <ArrowForwardIosIcon className='lightBlueArrow'/>
              <ArrowForwardIosIcon className='darkBlueArrow'/>
            </div>
          </section>
          <section id='section2'>
            About Me
          </section>
          <section id='section3'>
            See My Work!
          </section>
        </div>
      </div>
    );
  }
};
export default Home;