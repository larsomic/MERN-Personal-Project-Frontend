/* global $ */
import React, { useEffect, useState, useRef } from 'react';
import { Autocomplete, Box, TextField, Typography, useTheme, useMediaQuery, Button} from '@mui/material';

const TeamStats = ({team}) => {
  return (
    <Box>
      <Typography>
        Region: {team.Region}
      </Typography>
      <Typography>
        Adjusted Efficiency Margin: {team.AdjEM}
      </Typography>
      <Typography>
        Adjusted Tempo: {team.AdjT}
      </Typography>
    </Box>
  )
}

function normDist(x) {
  const mean = 0
  const std = 10.37
  const cumulative = true
  if (cumulative) {
    let z = (x - mean) / std;
    let t = 1 / (1 + 0.2315419 * Math.abs(z));
    let d = 0.3989423 * Math.exp(-z * z / 2);
    let prob = d * t * (
      0.3193815 + t * (
        -0.3565638 + t * (
          1.781478 + t * (
            -1.821256 + t * 1.330274
          )
        )
      )
    );
    if (z > 0) return 1 - prob;
    else return prob;
  } else {
    let factor = 1 / (std * Math.sqrt(2 * Math.PI));
    return factor * Math.exp(-0.5 * Math.pow((x - mean) / std, 2));
  }
}

const MarchMadness2024 = () => {
  const sliderRef = useRef(null);

  const [tournamentData, setTournamentData] = useState({});
  const [firstTeam, setFirstTeam] = useState(null);
  const [teamOnePercentage, setTeamOnePercentage] = useState(50);
  
  const [secondTeam, setSecondTeam] = useState(null);
  const [pointDiff1, setPointDiff1] = useState(null);
  const [pointDiff2, setPointDiff2] = useState(null);

  const [simulatedWinner, setSimulatedWinner] = useState("");

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('sm'));

  useEffect(() => {
  if (firstTeam && secondTeam && tournamentData) {
    const team1EM = Number(tournamentData[firstTeam].AdjEM)
    const team1T = Number(tournamentData[firstTeam].AdjT)
    const team2EM = Number(tournamentData[secondTeam].AdjEM)
    const team2T = Number(tournamentData[secondTeam].AdjT)

    const t1PointDiff = (team1EM - team2EM) * (team1T + team2T) / 200
    setPointDiff1(t1PointDiff)
    setPointDiff2(-t1PointDiff)
    setTeamOnePercentage(normDist(t1PointDiff)*100)
  }
}, [firstTeam, secondTeam, tournamentData]);

useEffect(() => {
  const initOrUpdateSlider = () => {
    if ($(sliderRef.current).data("roundSlider")) {
      $(sliderRef.current).roundSlider('setValue', 100 - teamOnePercentage);
    } else {
      $(sliderRef.current).roundSlider({
        sliderType: "min-range",
        handleShape: "round",
        width: 22,
        radius: 100,
        value: 100 - teamOnePercentage,
        editableTooltip: false,
        step: "0.1",
        startAngle: 90,
        change: function(args) {
          setTeamOnePercentage(100 - args.value);
        },
        showTooltip: false
      });
    }
  };

  if (window.$ && $.fn.roundSlider) {
    initOrUpdateSlider();
  } else {
    console.error("RoundSlider or jQuery not loaded");
  }

  // Cleanup function
  return () => {
    if (window.$ && $.fn.roundSlider && sliderRef.current) {
      $(sliderRef.current).roundSlider("destroy");
    }
  };
}, [teamOnePercentage]);

  useEffect(() => {
    const fetchMarchMadnessData = async () => {
      try {
        const response = await fetch('https://docs.google.com/spreadsheets/d/e/2PACX-1vSZMtc8qFzbNCHlQ-5V7oLV4xN40MnWG2ibCPS9D4RVYjCr2BgvKbgQqvmzxPYRwFkhYrZjh8HwSojz/pub?gid=1510267902&single=true&output=csv');
        const csvText = await response.text();
        const rows = csvText.trim().split('\n');
        const headers = rows[0].split(',');
        const data = rows.slice(1).map(row => {
          const values = row.split(',');
          return headers.reduce((object, header, index) => {
            object[header] = values[index];
            return object;
          }, {});
        });
  
        const newData = data.reduce((result, row) => {
          const teamName = row.Team;
          const { Team, ...restOfData } = row;
          result[teamName] = restOfData;
          return result;
        }, {});

        setTournamentData(newData);

      } catch (error) {
        console.log('Error:', error);
      }
    };
  
    fetchMarchMadnessData()
  }, []);

  // The styles for the diagonal split layout and the horizontal split layout
  const splitLayoutStyles = {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    width: '100vw',
    position: 'relative',
    overflow: 'hidden',
    '&::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: '#f0f0f0',
      clipPath: matches ? 'inset(50% 0 0 0)' : 'polygon(0 0, 100% 0, 0 100%)', // Diagonal split for larger screens, horizontal split for mobile
    },
  };

  const statsContainerStyle = {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    display: 'flex',
    flexDirection: 'column',
    gap: '10px', // Adjust the space between Typography elements
  };

  const leftStatsStyle = {
    ...statsContainerStyle,
    right: '60%', // Adjust based on the size and position of your donut chart
  };

  const rightStatsStyle = {
    ...statsContainerStyle,
    left: '60%', // Adjust based on the size and position of your donut chart
  };

  const autocompleteStyles1 = {
    position: 'absolute',
    width: '50%', // Adjust as needed
    '& .MuiAutocomplete-root': {
      position: 'absolute',
      left: '50%',
      top: '50%',
      transform: 'translate(-88%, 40%)',
    },
  };

  const autocompleteStyles2 = {
    position: 'absolute',
    width: '50%', 
    '& .MuiAutocomplete-root': {
      position: 'absolute',
      left: '50%',
      top: '50%',
      transform: 'translate(-112%, -160%)',
    },
  };

  const vsStyle = {
    position: 'absolute',
    width: '100%',
    textAlign: 'center',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    fontSize: '3rem', 
    fontWeight: 'bold',
    zIndex: 3, 
  };

  const sliderContainerStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '200px', 
    height: '200px', 
    zIndex: 2,
  };

  const simulateButtonStyle = {
    position: 'absolute',
    top: 'calc(50% + 120px)', // Position it below the donut chart
    left: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: 2,
  };

  const simulationTextStyle = {
    position: 'absolute',
    top: 'calc(50% + 150px)', // Position it just above the simulate button
    left: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: 2,
  };

  return (
    <Box sx={splitLayoutStyles}>
      <Box sx={{ ...autocompleteStyles1, top: matches ? '25%' : '0', left: matches ? '50%' : '25%' }}>
      <Autocomplete
            value={firstTeam}
            onChange={(event, newValue) => {
              setFirstTeam(newValue);
            }}
            options={Object.keys(tournamentData)}
            getOptionLabel={(option) => option || ''}
            renderInput={(params) => <TextField {...params} label="Choose a team" variant="outlined" />}
            fullWidth
          />
      </Box>
      {firstTeam && <TeamStats team={tournamentData[firstTeam]}/>}

      <Typography sx={vsStyle}>Vs.</Typography>
      <Box sx={{ ...autocompleteStyles2, top: matches ? '75%' : '100%', left: matches ? '50%' : '75%' }}>
      <Autocomplete
            value={secondTeam}
            onChange={(event, newValue) => {
              setSecondTeam(newValue);
            }}
            options={Object.keys(tournamentData)}
            getOptionLabel={(option) => option || ''}
            renderInput={(params) => <TextField {...params} label="Choose a team" variant="outlined" />}
            fullWidth
          />
      </Box>
      <Box sx={{...sliderContainerStyle}}>
        <div ref={sliderRef} ></div>
      </Box>
      {teamOnePercentage && pointDiff1 &&  pointDiff2 &&
      <>
      <Box sx={leftStatsStyle}>
        <Typography>Chance: {teamOnePercentage.toFixed(2)}%</Typography>
        <Typography>Point Diff: {pointDiff1?.toFixed(2)}</Typography>
      </Box>
      <Box sx={rightStatsStyle}>
        <Typography>Chance: {(100 - teamOnePercentage).toFixed(2)}%</Typography>
        <Typography>Point Diff: {pointDiff2?.toFixed(2)}</Typography>
      </Box>
</>
}
    {simulatedWinner && (
        <Typography sx={simulationTextStyle}>
          Winner: {simulatedWinner}
        </Typography>
      )}

      {firstTeam && secondTeam &&
             <Button 
        sx={simulateButtonStyle} 
        variant="contained" 
        size="small" 
        onClick={() => {
          
          setSimulatedWinner(Math.random()*100 <= teamOnePercentage ? firstTeam:secondTeam)
        }}
      >
        Simulate
      </Button> 
      }

      
    </Box>
  );
};

export default MarchMadness2024;

