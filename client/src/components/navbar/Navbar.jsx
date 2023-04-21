import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import { Modal, Avatar, Tooltip, Box, AppBar, Toolbar, IconButton, Typography, InputBase, Badge, Container } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AdbIcon from '@mui/icons-material/Adb';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import CloseIcon from '@mui/icons-material/Close';
import './login.css'
import './signup.css'
import loginHeader from '../../assets/login/loginHeader.jpg'
import signupHeader from '../../assets/signup/signupHeader.jpg'

// search style
const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: '3rem',
  color: 'black',
  backgroundColor: alpha(theme.palette.common.black, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.black, 0.25),
  },
  marginLeft: 0,
  marginRight: 2,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));
const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '20ch',
      '&:focus': {
        width: '25ch',
      },
    },
  },
}));
// cart icon style
const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 10,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 3px',
  },
}));
// modal style
const style = {
  outline: 'none',
  border: 'none'
};

function Navbar() {
  const [modal, setModal] = React.useState(false);
  const [loginModal, setLoginModal] = React.useState(false);
  const [signupModal, setSignupModal] = React.useState(false);

  return (
    <>
      <div >
        <Modal
          open={modal}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Avatar sx={{ cursor: 'pointer', margin: '1rem auto' }} onClick={() => setModal(false)}>
              <Tooltip title="Close" arrow>
                <CloseIcon />
              </Tooltip>
            </Avatar>
            {loginModal === true ? <div className="loginFormBox">
              <div>
                <img className='loginHeaderImg' src={loginHeader} alt="loginHeader" />
              </div>
              <form action='' method='' className="loginInputForm">
                <input type="email" placeholder="E-Mail" />
                <input type="password" placeholder="Passsword" />
                <button>LOGIN</button>
                <h3>Not a member? <span className="signupLink" onClick={() => { setSignupModal(true); setLoginModal(false) }}>Signup</span></h3>
              </form>
            </div> : signupModal === true ?
              <div className="signupFormBox">
                <div>
                  <img className='signupHeaderImg' src={signupHeader} alt="signupHeader" />
                </div>
                <form action='' method='' className="signupInputForm">
                  <input type="text" placeholder="Name" />
                  <input type="number" placeholder="Phone" />
                  <input type="email" placeholder="E-Mail" />
                  <input type="password" placeholder="Passsword" />
                  <button>SIGNUP</button>
                  <h3>Already have account? <span className="loginLink" onClick={() => setLoginModal(true)}>Login</span></h3>
                </form>
              </div> : null}
          </Box>
        </Modal>
      </div>

      <AppBar position="static" sx={{ backgroundColor: 'white' }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1, color: 'black' }} />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.2rem',
                color: 'black',
                textDecoration: 'none',
              }}
            >
              MH Shopping
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                // onClick={handleOpenNavMenu}
                color="black"
              >
                <MenuIcon />
              </IconButton>
              {/* <Menu
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
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu> */}
            </Box>
            <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
            <Typography
              variant="h5"
              noWrap
              component="a"
              href=""
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.2rem',
                color: 'black',
                textDecoration: 'none',
              }}
            >
              MH Shopping
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, mx: 2 }}>
              <Typography
                variant="body1"
                noWrap
                component="div"
                sx={{ mr: 2, cursor: 'pointer', color: 'black' }}
              >
                Products
              </Typography>
              <Typography
                variant="body1"
                noWrap
                component="div"
                sx={{ mr: 2, cursor: 'pointer', color: 'black' }}
              >
                Deals
              </Typography>
            </Box>

            <Box sx={{ flexGrow: 0, display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
              <Search sx={{ display: { xs: 'none', md: 'flex' } }}>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search Products"
                  inputProps={{ 'aria-label': 'search' }}
                />
              </Search>
              <PermIdentityIcon sx={{ mx: 1, color: 'black' }} />
              <Typography
                variant="body1"
                noWrap
                component="div"
                sx={{ flexgrow: 0, display: { xs: 'none', sm: 'block', color: 'black', cursor: 'pointer' } }}
                onClick={() => { setModal(true); setLoginModal(true) }}
              >
                Login
              </Typography>
              <IconButton aria-label="cart" size="small" title="Shopping Cart" sx={{ mx: 1.5, cursor: 'default' }}>
                <StyledBadge badgeContent={1} color="secondary">
                  <ShoppingCartIcon />
                </StyledBadge>
              </IconButton>
              <Typography
                variant="body1"
                noWrap
                component="div"
                sx={{ flexgrow: 0, display: { xs: 'none', sm: 'block', color: 'black', cursor: 'pointer' } }}
              >
                Cart
              </Typography>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  )
}
export default Navbar