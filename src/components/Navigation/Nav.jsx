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
import AdbIcon from '@mui/icons-material/Adb';
import { Link } from 'react-router-dom';
import DarkMode from '../DarkMode/DarkMode';
import { useEffect } from 'react';
import LoginGoogle from '../LoginGoogle';
import { MenuItem, Tooltip } from '@mui/material';
import { useState } from 'react';


function Nav() {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };


  useEffect(()=>{
    
  },[])

  return (
    <AppBar position="fix">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <Link to={'/'}>
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                Home
              </Button>
            </Link>

            <Link to={'/dashboard'}>
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                Dashboard
              </Button>
            </Link>
            <DarkMode/>
          </Box>
          
          {/* <Box sx={{ flexGrow: 0 }}>
            {user ? (
              <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt={user.name} src={user.picture} />
              </IconButton>
            </Tooltip>
            ) : (
              <LoginGoogle setUser={setUser}/>
            )}
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
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box> */}

{/* <Box sx={{ display: 'flex', alignItems: 'center', ml: 2 }}>
        <Tooltip title="Toggle dark mode" enterDelay={300}>
          <DarkMode />
        </Tooltip>

        <IconButton onClick={handleOpenUserMenu} size="large" color="inherit">
          <Avatar
            alt="User Avatar"
            src={user.picture}
          />
        </IconButton>

        <Menu
          id="user-menu"
          anchorEl={anchorElUser}
          open={Boolean(anchorElUser)}
          onClose={handleCloseUserMenu}
          onClick={handleCloseUserMenu}
          PaperProps={{
            elevation: 0,
            sx: {
              overflow: 'visible',
              filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
              mt: 1.5,
              '& .MuiAvatar-root': {
                width: 32,
                height: 32,
                mr: 1,
                '&:nth-of-type(1)': {
                  ml: 1,
                },
              },
            },
          }}
          transformOrigin={{ horizontal: 'right', vertical: 'top' }}
          anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        >
          {settings.map((setting, index) => (
            <MenuItem key={index}>{setting}</MenuItem>
          ))}
          <MenuItem>
            <LoginGoogle setUserDetail={setUser} />
          </MenuItem>
        </Menu>
      </Box> */}
      <LoginGoogle/>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Nav;
