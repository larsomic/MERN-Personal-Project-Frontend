import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';

var headerFunctionMap = {
  "LinkedIn": () =>{window.open('https://www.linkedin.com/in/larson2/','_blank')},
  "GitHub": () =>{window.open('https://github.com/larsomic','_blank')}
}

const pages = Object.keys(headerFunctionMap);

const Header = () => {
  const handleNavBarItemClicked = (e) => {
    if (e.target.innerText){
      headerFunctionMap[e.target.textContent]()
    }
  };

  return (
    <AppBar className='homeHeader' position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display:'flex', fontWeight: 'bold'}}
            className="headerText"
          >
            Michael Larson
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                className='headerText'
                key={page}
                onClick={handleNavBarItemClicked}
                sx={{ my: 2, color: 'powderblue', display: 'block', textTransform: 'none'}}
              >
                {page}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;