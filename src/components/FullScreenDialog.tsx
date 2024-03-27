import { useNavigate } from 'react-router-dom';
import { MouseEvent } from 'react';

import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';


import ChevronLeftRoundedIcon from '@mui/icons-material/ChevronLeftRounded';
import QrCodeScannerRoundedIcon from '@mui/icons-material/QrCodeScannerRounded';
import IconButton from '@mui/material/IconButton';

import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';

import ClearRoundedIcon from '@mui/icons-material/ClearRounded';



import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';

import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import { alpha, styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import Divider from '@mui/material/Divider';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

import logo from "/logo.svg";


const BootstrapInput = styled(InputBase)(({ theme }) => ({
  '& .MuiInputBase-input': {
    borderRadius: 12,
    backgroundColor: theme.palette.mode === 'light' ? 'transparent' : '#1A2027',
    fontSize: 16,
    width: '100%',
    padding: '6px 12px',
    margin: '8px 0px',
    color: '#898989',
    transition: theme.transitions.create([
      'border-color',
      'background-color',
      'box-shadow',
    ]),
    '&:focus': {
      boxShadow: `${alpha('#898989', 0.25)} 0 0 0 0.2rem`,
      borderColor: '#898989',
    },
  },
}));

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function FullScreenDialog() {
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const navigate = useNavigate();

  const handleDelete = (event: MouseEvent<HTMLButtonElement>) => {
    console.log('delete');
    const target = event?.target as HTMLElement;
    if (target) {
      const divToDelete = target.closest('.divToDelete') as HTMLElement;
      if (divToDelete) {
        divToDelete.style.display = 'none';
      }
    }
  };


  const handleSearch = () => {
    console.log('search');
  };


  const handleQrcode = () => {
    navigate('/scan');
  };

  return (
    <React.Fragment>
      <Button variant="outlined" startIcon={<SearchRoundedIcon />} onClick={handleClickOpen} sx={{
        borderRadius: '58px', border: '1px solid #B8B8B8', color: '#B8B8B8', padding: '16px 6px', '&:hover': {
          backgroundColor: 'rgb(147, 147, 147, 0.1)',
          borderColor: '#B8B8B8',
          boxShadow: 'none',
        },
        '&:active': {
          boxShadow: 'none',
          borderColor: '#B8B8B8',
        },
        '&:focus': {
          boxShadow: '0 0 0 0.2rem rgba(147,147,147,.2)',
        }, }} size="large">
        {/* <Divider orientation="vertical" flexItem
          sx={{ border: 1, borderColor: '#939393', borderRadius: '24px' }} /> */}
        <span className='ml-2'>Enter shipping tracking number</span>        
      </Button>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <div className="bg-dark w-full" style={{ minHeight: "100vh" }}>
          <div className='flex flex-col m-auto w-11/12 pt-8'>
            <div className="flex justify-between items-center">
              <span className='text-gray'>
                <button onClick={handleClose}>
                  <ChevronLeftRoundedIcon sx={{ color: '#898989', fontSize: 48 }} />
                </button>
              </span>
              <img className="w-28 sm:w-40" src={logo} alt="Logo" />
              <IconButton aria-label="qrcode" onClick={handleQrcode}>
                <QrCodeScannerRoundedIcon className='text-green' style={{ fontSize: "2rem" }} />
              </IconButton>
            </div>
          </div>
          <div className='flex flex-col m-auto w-full justify-center align-middle px-6 py-5 sm:px-12'>
            <Box sx={{ display: 'flex', width: '100%', justifyContent: 'space-around', alignItems: 'center', border: '1px solid #898989', borderRadius: '58px', padding: '0 8px' }}>
              <SearchRoundedIcon sx={{ color: '#898989', fontSize: 28 }} />
              <Divider orientation="vertical" variant="middle" flexItem
                sx={{ border: 1, borderColor: '#898989', borderRadius: '24px' }} />
              <FormControl variant="standard" sx={{ display: 'flex', width: '75%', justifyContent: 'center' }}>
                <BootstrapInput placeholder="" id="bootstrap-input" />
              </FormControl>
              <ArrowForwardRoundedIcon sx={{ fontSize: 24, color: '#32FF9D' }} />
            </Box>
          </div>

          <div className='w-11/12 m-auto'>
            <span className='text-light-gray text-lg px-2'>History</span>
            <List className='w-full'>

              <div className='divToDelete'>
                <ListItem
                  secondaryAction={
                    <IconButton edge="end" aria-label="delete" onClick={handleDelete}>
                      <ClearRoundedIcon sx={{ color: '#898989', fontSize: 24 }} />
                    </IconButton>
                  }
                  sx={{ padding: '2px 12px 12px 12px' }}
                >
                  <ListItemText
                    primary="#RWQ-51F9711D"
                    className='text-white'
                    onClick={handleSearch}
                  />
                </ListItem>
                <Divider flexItem
                  sx={{ borderColor: 'white', borderRadius: '24px' }} />
              </div>

              <div className='divToDelete'>
                <ListItem
                  secondaryAction={
                    <IconButton edge="end" aria-label="delete" onClick={handleDelete}>
                      <ClearRoundedIcon sx={{ color: '#898989', fontSize: 24 }} />
                    </IconButton>
                  }
                  sx={{ padding: '12px' }}
                >
                  <ListItemText
                    primary="#DFQ-JBFD9KH"
                    className='text-white'
                    onClick={handleSearch}
                  />
                </ListItem>
                <Divider flexItem
                  sx={{ borderColor: 'white', borderRadius: '24px' }} />
              </div>

              <div className='divToDelete'>
                <ListItem
                  secondaryAction={
                    <IconButton edge="end" aria-label="delete" onClick={handleDelete}>
                      <ClearRoundedIcon sx={{ color: '#898989', fontSize: 24 }} />
                    </IconButton>
                  }
                  sx={{ padding: '12px' }}
                >
                  <ListItemText
                    primary="#PNF-254U89G"
                    className='text-white'
                    onClick={handleSearch}
                  />
                </ListItem>
                <Divider flexItem
                  sx={{ borderColor: 'white', borderRadius: '24px' }} />
              </div>

            </List>
          </div>
        </div>
      </Dialog>
    </React.Fragment>
  );
}
