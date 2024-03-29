import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
// import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
// import Menu from '@mui/material/Menu';
// import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
// import Tooltip from '@mui/material/Tooltip';
// import MenuItem from '@mui/material/MenuItem';


// const clickMyResume = () => {
//   document.getElementById("section4").scrollIntoView({behavior: "smooth"})
// };

// const clickMyWork = () => {
//   document.getElementById("section3").scrollIntoView({behavior: "smooth"})
// };

// const clickAboutMe = () => {
//   document.getElementById("menu-appbar").style.display = 'none'

//   document.getElementById("scrollSection2").scrollIntoView({behavior: "smooth"})
// };

// const clickContactMe = () => {
//   document.getElementById("section5").scrollIntoView({behavior: "smooth"})
// };

// const clickHomeButton = () => {
//   document.getElementById("section1").scrollIntoView({behavior: "smooth"})
// };

// var settingFunctionsMap = {
//   "About Me": () =>{clickAboutMe()},
//   "My Projects  ": () =>{clickMyWork()},
//   "My Résumé": () =>{clickMyResume()},
//   "Contact Me": () =>{clickContactMe()},
// };

var headerFunctionMap = {
  // "Resume": () =>{clickMyResume()},
  // "Projects": () =>{clickMyWork()},
  "LinkedIn": () =>{window.open('https://www.linkedin.com/in/larson2/','_blank')},
  "GitHub": () =>{window.open('https://github.com/larsomic','_blank')}
}

// const settings = Object.keys(settingFunctionsMap);
const pages = Object.keys(headerFunctionMap);

const Header = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleMenuOptionClicked = (e) => {
    if(e.target.innerHTML){
      let selectedOption = e.target.childNodes[0].innerHTML
      if (!selectedOption){
        selectedOption = e.target.innerHTML
      }
      // settingFunctionsMap[selectedOption]()
    }
    
    setAnchorElUser(null);
  };

  const handleNavBarItemClicked = (e) => {
    if (e.target.innerText){
      headerFunctionMap[e.target.textContent]()
    }
    
    setAnchorElUser(null);
  };

  return (
    <AppBar className='homeHeader' position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display:'flex', cursor: 'pointer'}}
            // onClick={() =>{clickHomeButton()}}
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

          {/* <Box sx={{ flexGrow: 0, marginLeft: 'auto', marginRight: 0}}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <MenuIcon className='headerIcon' style={{ fontSize: 'xxlarge'}}/> 
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleMenuOptionClicked}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleMenuOptionClicked}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box> */}
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;