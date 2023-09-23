import React, { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Paper, Typography, Container, Box } from '@mui/material';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.common.white,
  fontSize: 16,
  fontWeight: 'bold',
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
}));

const FantasyFootball = () => {
  const initScores = [];
  useEffect(() => {
  const fetchDataAndUpdateScores = async () => {
    let tempScores = [];

    try {
      const response = await fetch('https://docs.google.com/spreadsheets/d/e/2PACX-1vTh4BhFId1P5wcC9eJWxnkTxmwI4eQWY8qCIeQXN5Z8H8kXazTdI-ygT2sWgGCF1E7P8qnztlJUwu3z/pub?gid=0&single=true&output=csv');
      const data = await response.text();

      let weeklyData = data.split('\r\n').slice(1);

      for (let weekData of weeklyData) {
        const weekData1 = weekData.split(',').map(item => {
          if (item === 'TRUE') return true;
          if (item === 'FALSE') return false;
          return Number(item);
        });
        tempScores.push(weekData1);
      }

      setWeeklyScores(tempScores);
      updateStandings(tempScores);
      
    } catch (error) {
      console.log('Error:', error);
    }
  };

  fetchDataAndUpdateScores();
}, []);

  const initStandings = [['Amin', 0, 0, 0, 0, 0, 0], ['George', 0, 0, 0, 0, 0, 0], ['Jones', 0, 0, 0, 0, 0, 0], ['Mike', 0, 0, 0, 0, 0, 0], ['Peter', 0, 0, 0, 0, 0, 0], ['Ricky', 0, 0, 0, 0, 0, 0], ['Sebas', 0, 0, 0, 0, 0, 0], ['Shyam', 0, 0, 0, 0, 0, 0]]
  const [weeklyScores, setWeeklyScores] = useState(initScores);
  const [standings, setStandings] = useState(initStandings);

  const updateStandings = (newScores) => {
    const weeklyStanding = updateWeeklyStandings(newScores[newScores.length-1])

    let newStandings = initStandings.map(s => [...s]);
    let numWeeks = newScores.length
    newScores.forEach((weekScore) => {
      const isAllZeros = weekScore.slice(2).every(score => score === 0);
      if (isAllZeros){
        numWeeks --;
        return
      };

      for (let i = 0; i < 8; i++) {
        const [wins, losses, ties] = calculateWLT(weekScore, i + 2);
        newStandings[i][1] += wins;
        newStandings[i][2] += losses;
        newStandings[i][3] += ties;
        newStandings[i][4] += weekScore[i + 2];
      }
    });
    for (let i = 0; i < 8; i++) {
      newStandings[i][4] = (newStandings[i][4]/numWeeks).toFixed(2)
      newStandings[i][6] = weeklyStanding[i]
    }
    newStandings.forEach(s => s[5] = ((s[1] + (0.5 * s[3])) / (s[1] + s[2] + s[3])).toFixed(3));
    setStandings(newStandings);
  };

  const calculateWLT = (scores, idx) => {
    const target = scores[idx];
    let [wins, losses, ties] = [0, 0, 0];

    for (let i = 2; i < scores.length; i++) {
      if (i === idx) continue;
      target > scores[i] ? wins++ : target < scores[i] ? losses++ : ties++;
    }
    return [wins, losses, ties];
  };

  const updateWeeklyStandings = (weeklyScores) => {
    const arr = weeklyScores.slice(2)
    const indexedArr = arr.map((value, index) => ({ value, index }));
    indexedArr.sort((a, b) => b.value - a.value);
    const places = new Array(arr.length).fill(0);
    let place = 1;
    for (let i = 0; i < indexedArr.length; i++) {
      if (i > 0 && indexedArr[i].value < indexedArr[i - 1].value) {
        place = i + 1;
      }
      places[indexedArr[i].index] = place;
    }
    
    return places
  }

  const handleScoreChange = (week, player, value) => {
    const newScores = [...weeklyScores];
    newScores[week - 1][player] = Number(value || 0);
    setWeeklyScores(newScores);
    updateStandings(newScores);
  };

  return (
    <Container style={{ overflowY: 'scroll', height: '100vh', paddingBottom: '5%' }}>
      <Box mt={4} mb={4}>
        <Typography variant="h2" align="center">Fantasy Football</Typography>
      </Box>
      
      <Box mt={4} mb={4}>
        <Typography variant="h4">Weekly Scores</Typography>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }}>
            <TableHead>
              <TableRow>
                <StyledTableCell>Week</StyledTableCell>
                {standings.map((s, i) => <StyledTableCell key={i} align="right">{s[0]}</StyledTableCell>)}
              </TableRow>
            </TableHead>
            <TableBody>
              {weeklyScores.map((row, i) => (
                <StyledTableRow key={i}>
                  <StyledTableCell>{row[1]}</StyledTableCell>
                  {row.slice(2).map((score, idx) => (
                    <StyledTableCell align="right" key={idx}>
                      {row[0] ? (
                        <TextField 
                          inputProps={{ 
                            style: { 
                              textAlign: 'right', 
                              color: 'black', 
                              backgroundColor: 'white'
                            } 
                          }} 
                          defaultValue={score} 
                          onBlur={e => handleScoreChange(row[1], idx + 2, e.target.value)}
                        />
                      ) : score}
                    </StyledTableCell>
                  ))}
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>

      <Box mt={4} mb={4}>
        <Typography variant="h4">Weekly Rankings</Typography>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }}>
            <TableHead>
              <TableRow>
                <StyledTableCell>Name</StyledTableCell>
                <StyledTableCell align="right">Score</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {standings
                .sort((a, b) => a[a.length - 1] - b[b.length - 1])
                .map((s, i) => (
                  <StyledTableRow key={i}>
                    <StyledTableCell key={`${i}-first`} align="left">
                      {s[0]}
                    </StyledTableCell>
                    <StyledTableCell key={`${i}-last`} align="right">
                      {s[s.length - 1]}
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
      
      <Box mt={4} mb={4}>
        <Typography variant="h4">Standings</Typography>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }}>
            <TableHead>
              <TableRow>
                <StyledTableCell>Name</StyledTableCell>
                <StyledTableCell align="right">Wins</StyledTableCell>
                <StyledTableCell align="right">Losses</StyledTableCell>
                <StyledTableCell align="right">Ties</StyledTableCell>
                <StyledTableCell align="right">Average Points</StyledTableCell>
                <StyledTableCell align="right">Win Percent</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {standings.sort((a, b) => parseFloat(b[5]) - parseFloat(a[5])).map((s, i) => (
                <StyledTableRow key={i}>
                  {s.slice(0, -1).map((cell, idx) => (
                    <StyledTableCell key={idx} align={idx === 0 ? "left" : "right"}>
                      {cell}
                    </StyledTableCell>
                  ))}
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Container>
  );
};

export default FantasyFootball;
