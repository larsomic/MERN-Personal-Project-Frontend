import * as React from 'react';
import Header from "./Header.js"
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

// https://stackoverflow.com/questions/5525071/how-to-wait-until-an-element-exists
function waitForElm(selector) {
  return new Promise(resolve => {
      if (document.querySelector(selector)) {
          return resolve(document.querySelector(selector));
      }

      const observer = new MutationObserver(mutations => {
          if (document.querySelector(selector)) {
              resolve(document.querySelector(selector));
              observer.disconnect();
          }
      });

      observer.observe(document.body, {
          childList: true,
          subtree: true
      });
  });
}

class PingPong extends React.Component {
  constructor(){
    super();
    this.state = {redScore: 0, blueScore: 0, finalScore: -1, server: null, numPointsBeforeSwitch: 2};
  }

  resetScores() {
    this.setState({redScore: 0, blueScore: 0, finalScore: -1, server: null, numPointsBeforeSwitch: 2});
  }

  switchServe(){
    if (((this.state.redScore + this.state.blueScore + 1) % this.state.numPointsBeforeSwitch) === 0) {
      this.setState({server: this.state.server * -1})
    }
  }

  increaseRedScore(){
    this.setState({redScore: this.state.redScore + 1})
    this.switchServe()
  }

  increaseBlueScore(){
    this.setState({blueScore: this.state.blueScore + 1})
    this.switchServe()
  }

  async randomizeStartingServe(){
    let redCard = await waitForElm('#redCard')
    let blueCard = await waitForElm('#blueCard')
    
    if (redCard && blueCard){
      let randomStart = Math.floor(Math.random()*10) % 2
      if (randomStart === 1 ) {
        this.setState({server: 1})
      } else{
        this.setState({server: -1})
      }
    }
  }

  setConfettii(color){
    let fullPage = document.getElementById('fullPage')
    if(color && fullPage){
      fullPage.style.backgroundImage = `url(./../../static/images/${color}Confetti.gif)`
      fullPage.style.backgroundSize = 'cover'
    }
    else if (fullPage){
      fullPage.style.backgroundImage = null
    }
  }

  startGame(score){
    if (score === 21) {
      this.setState({numPointsBeforeSwitch: 5})
    }

    this.setState({finalScore: score})
    this.randomizeStartingServe()
  }

  render(){
    if(this.state.redScore === this.state.finalScore ){
      this.setConfettii('red')
    }
    else if(this.state.blueScore === this.state.finalScore){
      this.setConfettii('blue')
    }
    else{
      this.setConfettii(null)
    }
    return (
      <div className='fullPage' id='fullPage'>
        <Header/>
        <Container maxWidth="m">
          { this.state.finalScore === -1 ?
            <div id='scoreChoice'>
              <Typography variant="h5" sx={{textAlign:'center', marginTop:'3%'}}>What do you want to play to?</Typography>
              <Stack spacing={2} direction={'row'} alignItems="center" justifyContent="center">
                <Button variant="contained" onClick={() => this.startGame(11)}>11</Button>
                <Button variant="contained" onClick={() => this.startGame(21)}>21</Button>
              </Stack>
            </div> 
            :
            <div>
            { (this.state.finalScore !== this.state.redScore && this.state.finalScore !== this.state.blueScore) ?
              <div id='scoreSection'>
                <Stack spacing={2} direction={{ xs: 'column', sm: 'row' }} alignItems="center" justifyContent="center" sx={{ marginTop: '3%' }}>
                    <Card id='redCard' className='noselect' sx={{ minWidth: 275, aspectRatio: '1/1', backgroundColor: (this.state.server === 1 ? '#ff0030': '#ff003070')}} onClick={() => this.increaseRedScore()}>
                      <CardContent sx={{textAlign:'center'}}>
                        <Typography variant="h1" sx={{color: "white"}}>Red</Typography>
                        <Typography variant="h1" sx={{color: "white"}}>{this.state.redScore}</Typography>
                      </CardContent>
                    </Card>
                    <Card id='blueCard' className='noselect' sx={{ minWidth: 275, aspectRatio: '1/1', backgroundColor: (this.state.server === -1 ? '#204cce': '#204cce96') }} onClick={() => this.increaseBlueScore()}>
                      <CardContent sx={{textAlign:'center'}}>
                        <Typography variant="h1" sx={{color: "white"}}>Blue</Typography>
                        <Typography variant="h1" sx={{color: "white"}}>{this.state.blueScore}</Typography>
                      </CardContent>
                    </Card>
                </Stack>
                <Button sx={{marginTop: '3%'}} variant="contained" className='underFullPagePaper' onClick={() => this.resetScores()}>Reset</Button>
              </div>
              :
              <div className='noselect'>
                <Stack spacing={2} alignItems="center" justifyContent="center" sx={{ marginTop: '20%' }}>
                  <Typography style= {{ textAlign:'center'}} variant="h1">
                  { this.state.redScore > this.state.blueScore ? 'Red Wins!!!' : 'Blue Wins!!!'}
                  </Typography>
                  <Button sx={{marginTop: '3%'}} variant="contained" onClick={() => this.resetScores()}>Reset</Button>
                </Stack>
              </div>
            }
            </div>
          }        
        </Container>
      </div>
    );
  }
};
export default PingPong;