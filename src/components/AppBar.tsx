import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';

import InputBase from '@mui/material/InputBase';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import SearchIcon from '@mui/icons-material/Search';

import Logo from "../assets/logo.svg";

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  width: '120px',
  height: '42px',
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  [theme.breakpoints.up('sm')]: {
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 1),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(3)})`,
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('sm')]: {
      width: '10ch',
      '&:focus': {
        width: '24ch',
        border: 'none', // Remove border
        boxShadow: 'none', // Remove ring
      },
    },
  },
}));

export default function SearchAppBar() {
  return (
    <Box sx={{ width: '100%' }}>
      <AppBar position="static" sx={{ bgcolor: 'transparent', boxShadow: 'none', width: '100%' }}>
        <Toolbar sx={{ paddingLeft: '0', paddingRight: '0', width: '100%', display: 'flex', justifyContent: 'space-between' }}>
          <img className="w-24 xs:w-32 sm:w-48" src={Logo} alt="Last Mile" />
          <div className='flex items-center justify-between'>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
              />
            </Search>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ ml: '1px' }}
            >
              <MenuRoundedIcon sx={{ fontSize: '2.6rem' }} />
            </IconButton>
          </div>          
        </Toolbar>
      </AppBar>
    </Box>
  );
}
