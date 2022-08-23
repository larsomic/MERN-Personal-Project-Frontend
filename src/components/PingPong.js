import * as React from 'react';
import Header from "./Header.js"
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

const PingPong = () => {
  const [redScore, setRedScore] = React.useState(0) 
  const [blueScore, setBlueScore] = React.useState(0) 
  const [finalScore, setFinalScore] = React.useState(-1) 
  
  function resetScores() {
    setBlueScore(0);
    setRedScore(0);
    setFinalScore(-1);
  }

  function increaseScore(setScore, score){
    setScore(score + 1)
  }

  function setConfettii(color){
    let fullPage = document.getElementById('fullPage')
    if(color && fullPage){
      fullPage.style.backgroundImage = `url(./../../static/images/${color}Confetti.gif)`
      fullPage.style.backgroundSize = 'cover'
    }
    else if (fullPage){
      fullPage.style.backgroundImage = null
    }
  }

  if(redScore === finalScore ){
    setConfettii('red')
  }
  else if(blueScore === finalScore){
    setConfettii('blue')
  }
  else{
    setConfettii(null)
  }

  return (
    <div className='fullPage' id='fullPage'>
      <Header/>
      <Container maxWidth="m">
        { finalScore === -1 ?
          <div id='scoreChoice'>
            <Typography variant="h5" sx={{textAlign:'center', marginTop:'3%'}}>What do you want to play to?</Typography>
            <Stack spacing={2} direction={'row'} alignItems="center" justifyContent="center">
              <Button variant="contained" onClick={() => setFinalScore(1)}>11</Button>
              <Button variant="contained" onClick={() => setFinalScore(21)}>21</Button>
            </Stack>
          </div> 
          :
          <div>
          { (finalScore !== redScore && finalScore !== blueScore) ?
            <div id='scoreSection'>
              <Stack spacing={2} direction={{ xs: 'column', sm: 'row' }} alignItems="center" justifyContent="center" sx={{ marginTop: '3%' }}>
                  <Card className='noselect' sx={{ minWidth: 275, aspectRatio: '1/1', backgroundColor: '#ff003070'}} onClick={() => increaseScore(setRedScore, redScore)}>
                    <CardContent sx={{textAlign:'center'}}>
                      <Typography variant="h1" sx={{color: "white"}}>Red</Typography>
                      <Typography variant="h1" sx={{color: "white"}}>{redScore}</Typography>
                    </CardContent>
                  </Card>
                  <Card className='noselect' sx={{ minWidth: 275, aspectRatio: '1/1', backgroundColor: '#647dc8a8' }} onClick={() => increaseScore(setBlueScore, blueScore)}>
                    <CardContent sx={{textAlign:'center'}}>
                      <Typography variant="h1" sx={{color: "white"}}>Blue</Typography>
                      <Typography variant="h1" sx={{color: "white"}}>{blueScore}</Typography>
                    </CardContent>
                  </Card>
              </Stack>
              <Button sx={{marginTop: '3%'}} variant="contained" className='underFullPagePaper' onClick={() => resetScores()}>Reset</Button>
            </div>
            :
            <div className='noselect'>
              <Stack spacing={2} alignItems="center" justifyContent="center" sx={{ marginTop: '20%' }}>
                <Typography style= {{textAlign:'center'}} variant="h1">
                { redScore > blueScore ? 'Red Wins!!!' : 'Blue Wins!!!'}
                </Typography>
                <Button sx={{marginTop: '3%'}} variant="contained" onClick={() => resetScores()}>Reset</Button>
              </Stack>
            </div>
          }
          </div>
        }        
      </Container>
    </div>
  );
};
export default PingPong;