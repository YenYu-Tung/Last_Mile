import { useNavigate } from 'react-router-dom';
import { MouseEvent, ChangeEvent, useState, useEffect } from 'react';

import ChevronLeftRoundedIcon from '@mui/icons-material/ChevronLeftRounded';
import QrCodeScannerRoundedIcon from '@mui/icons-material/QrCodeScannerRounded';
import IconButton from '@mui/material/IconButton';

import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';


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

import ClearRoundedIcon from '@mui/icons-material/ClearRounded';

type SearchProps = {
  setValue: React.Dispatch<React.SetStateAction<string>>;
}


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

export default function Search({ setValue }: SearchProps) {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value); 
  };

  const handleNavigate = () => {
    navigate('/home');
    setValue('home');
  };

  const handleQrcode = () => {
    navigate('/scan');
  };

  const handleDelete = (event: MouseEvent<HTMLButtonElement>) => {
    // console.log('delete');
    const target = event?.target as HTMLElement;
    if (target) {
      const divToDelete = target.closest('.divToDelete') as HTMLElement;
      if (divToDelete) {
        divToDelete.style.display = 'none';
      }
    }
  };

  const handleSearch = () => {
    if (searchQuery.trim() !== '') {
      navigate(`/info?q=${(searchQuery)}`);
    }
  };

  const handleListItemClick = (query: string) => {
    navigate(`/info?q=${(query)}`);
  };

  useEffect(() => {
    setValue('none');
  }, [setValue]);


  return (
    <div className="bg-dark w-full h-full">
      <div className='flex flex-col m-auto w-11/12 pt-8'>
        <div className="flex justify-between items-center">
          <span className='text-gray'>
            <button onClick={handleNavigate}>
              <ChevronLeftRoundedIcon sx={{ color: '#898989', fontSize: 48 }} />
            </button>
          </span>
          <img className="w-28" src={logo} alt="Logo" />
          <IconButton aria-label="qrcode" onClick={handleQrcode}>
            <QrCodeScannerRoundedIcon className='text-green' style={{ fontSize: "2rem" }} />
          </IconButton>
        </div>
      </div>
      <div className='flex flex-col m-auto w-full justify-center align-middle px-6 py-5'>
        <Box sx={{ display: 'flex', width: '100%', justifyContent: 'space-around', alignItems: 'center', border: '1px solid #898989', borderRadius: '58px', padding: '0 8px' }}>
          <SearchRoundedIcon sx={{ color: '#898989', fontSize: 28 }} />
          <Divider orientation="vertical" variant="middle" flexItem
            sx={{ border: 1, borderColor: '#898989', borderRadius: '24px' }} />
          <FormControl variant="standard" sx={{ display: 'flex', width: '75%', justifyContent: 'center' }}>
            <BootstrapInput placeholder="" id="bootstrap-input" type="text" value={searchQuery} onChange={handleInputChange} />
          </FormControl>
          <ArrowForwardRoundedIcon sx={{ fontSize: 24, color: '#32FF9D' }} onClick={handleSearch} />
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
                onClick={() => handleListItemClick("#RWQ-51F9711D")}
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
                onClick={() => handleListItemClick("#DFQ-JBFD9KH")}
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
                primary="#HUT-51136JGV"
                className='text-white'
                onClick={() => handleListItemClick("#HUT-51136JGV")}
              />
            </ListItem>
            <Divider flexItem
              sx={{ borderColor: 'white', borderRadius: '24px' }} />
          </div>

        </List>
      </div>
    </div>
  );
}