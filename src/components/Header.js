import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';

const clickMyResume = () => {
  window.location.href='/myresume'
};

const clickMyWork = () => {
  window.location.href='/mywork'
};

const clickAboutMe = () => {
  window.location.href='/aboutme'
};

const clickContactMe = () => {
  window.location.href='/contactme'
};

var settingFunctionsMap = {
  "My Work": () =>{clickMyWork()},
  "My Résumé": () =>{clickMyResume()},
  "About Me": () =>{clickAboutMe()},
  "Contact Me": () =>{clickContactMe()},
};

var headerFunctionMap = {
  "Resume": () =>{clickMyResume()},
  "Projects": () =>{clickMyWork()},
  "LinkedIn": () =>{window.open('https://www.linkedin.com/in/larson2/','_blank')},
  "GitHub": () =>{window.open('https://github.com/larsomic','_blank')}
}

const settings = Object.keys(settingFunctionsMap);
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
      settingFunctionsMap[selectedOption]()
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
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
            Michael Larson
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleNavBarItemClicked} >
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }}}
          >
            Michael Larson
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleNavBarItemClicked}
                sx={{ my: 2, color: 'white', display: 'block', textTransform: 'none'}}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Michael Larson" src={"./../static/images/mikeSquare.jpg"} />
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
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;