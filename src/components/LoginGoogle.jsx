import React from 'react'
import { useEffect } from 'react';
import { jwtDecode } from "jwt-decode";
import { GoogleOAuthProvider, googleLogout } from '@react-oauth/google';
import { useState } from 'react';
import { GoogleLogin } from '@react-oauth/google';
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
import { MenuItem, Tooltip } from '@mui/material';
import { useNavigate } from 'react-router-dom';


const ClientID = "834543446810-onmadb5dg0gdhh0lho984tdm5i6bb7ln.apps.googleusercontent.com";
// const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];


function LoginGoogle() {
    const [flag, setFlag] = useState(false);
    const [userDetail, setUserDetail] = useState({});
    const [anchorElUser, setAnchorElUser] = useState(null);

    const nagivate = useNavigate();


    const onSuccess = (res) => {
        // const { profileObj, credential } = res;
        const details = jwtDecode(res.credential);
        setUserDetail(details);
        console.log("Success ", details);
        setFlag(true);
        // console.log(user);
    }

    const onFailure = (res) => {
        console.log("Failed ", res)
    }
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
      };

      const handleCloseUserMenu = () => {
        setAnchorElUser(null);
      };
      console.log(flag);
    const handleLogout = () => {
        googleLogout()
        nagivate(`/`)
        handleCloseUserMenu()
        setFlag(false)
    }
    return (
        <div>
            <GoogleOAuthProvider clientId={ClientID}>

                {flag ? (
                    <div>
                        <Box sx={{ flexGrow: 0 }}>
                                            
                                <Tooltip title="Open settings">
                                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                        <Avatar alt={userDetail.name} src={userDetail.picture} />
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
                                onClose={handleCloseUserMenu}
                            >
                                    <MenuItem onClick={handleLogout}>
                                        <Typography textAlign="center">Logout</Typography>
                                    </MenuItem>
                            </Menu>
                        </Box>
                    </div>
                ) : (
                    <GoogleLogin
                        onSuccess={onSuccess}
                        onFailure={onFailure}
                        buttonText='Sign with Google'
                        onError={() => {
                            console.log('Login Failed');
                        }}
                    />
                )}
            </GoogleOAuthProvider>
        </div>
    )
}

export default LoginGoogle

// import React from "react";
// import { signInWithGoogle } from "./untils/helpers";

// function LoginGoogle() {

//   return (
//     <div className="login">
//       <h5>Đăng nhập bằng Google</h5>
//       <button className="google-btn" onClick={signInWithGoogle}>
//         <div className="google-icon-wrapper">
//           <img
//             src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
//             alt="google icon"
//             className="google-icon"
//           />
//         </div>
//         <p className="btn-text">
//           <b>Sign in with Google</b>
//         </p>
//       </button>
//     </div>
//   );
// }

// export default LoginGoogle;