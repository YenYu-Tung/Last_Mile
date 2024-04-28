import { useNavigate } from 'react-router-dom';

import ChevronLeftRoundedIcon from '@mui/icons-material/ChevronLeftRounded';

import Divider from '@mui/material/Divider';
import List from '@mui/material/List';

import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import ArrowRightRoundedIcon from '@mui/icons-material/ArrowRightRounded';


import Avatar from '@mui/material/Avatar';

import avatar from "/avatar.svg";


type AccountProps = {
  setValue: React.Dispatch<React.SetStateAction<string>>;
}

const listSxProp = {
  '&.MuiListItemText-root span': {
    fontSize: '20px',
  }
};

export default function Account({ setValue }: AccountProps) {

  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate('/profile');
    setValue('profile');
  };

  const handleLogout = () => {
    navigate('/login');
    setValue('none');
  };

  return (
    <div className="bg-dark flex flex-col w-full h-full relative">
      <div className='flex w-full h-20 justify-center items-center'>
        <span className='absolute top-6.5 left-4'>
          <button onClick={handleNavigate}>
            <ChevronLeftRoundedIcon sx={{ color: 'white', fontSize: 42 }} />
          </button>
        </span>
        <span className='text-white text-2xl font-semibold'>Account</span>
      </div>

      <div className="flex flex-col items-start pt-1 w-full bg-exdark rounded-t-[35px] flex-1 pb-32">
        <List className='w-full'>
          <ListItem
            secondaryAction={
              <div className='flex items-center'>
                <Avatar alt="Avatar" src={avatar} sx={{
                  width: 52, height: 52, border: 1.5,
                  borderColor: '#32FF9D'
                }} />
                <IconButton edge="end" aria-label="delete">
                  <ArrowRightRoundedIcon sx={{ color: '#767676', fontSize: 40 }} />
                </IconButton>
              </div>
            }
            sx={{ padding: '1.5rem 28px' }}
          >
            <ListItemText
              primary="Avatar"
              className='text-white'
              sx={listSxProp}
            />
          </ListItem>
          <Divider variant="middle" sx={{ border: 1, borderColor: '#484848' }} />
          <ListItem
            secondaryAction={
              <div className='flex items-center'>
                <span className='text-gray text-lg'>Tiffany921</span>
                <IconButton edge="end" aria-label="delete">
                  <ArrowRightRoundedIcon sx={{ color: '#767676', fontSize: 40 }} />
                </IconButton>
              </div>
            }
            sx={{ padding: '1.5rem 28px' }}
          >
            <ListItemText
              primary="Name"
              className='text-white'
              sx={listSxProp}
            />
          </ListItem>
          <Divider variant="middle" sx={{ border: 1, borderColor: '#484848' }} />
          <ListItem
            secondaryAction={
              <div className='flex items-center'>
                <span className='text-gray text-lg'>979@gmail.com</span>
                <IconButton edge="end" aria-label="delete">
                  <ArrowRightRoundedIcon sx={{ color: '#767676', fontSize: 40 }} />
                </IconButton>
              </div>
            }
            sx={{ padding: '1.5rem 28px' }}
          >
            <ListItemText
              primary="Mail Address"
              className='text-white'
              sx={listSxProp}
            />
          </ListItem>
          <Divider variant="middle" sx={{ border: 1, borderColor: '#484848' }} />
          <ListItem
            secondaryAction={
              <div className='flex items-center'>
                <span className='text-gray text-lg'>***-*****</span>
                <IconButton edge="end" aria-label="delete">
                  <ArrowRightRoundedIcon sx={{ color: '#767676', fontSize: 40 }} />
                </IconButton>
              </div>
            }
            sx={{ padding: '1.5rem 28px' }}
          >
            <ListItemText
              primary="Security"
              className='text-white'
              sx={listSxProp}
            />
          </ListItem>
          <Divider variant="middle" sx={{ border: 1, borderColor: '#484848' }} />
          <ListItem
            secondaryAction={
              <div className='flex items-center'>
                <span className='text-gray text-lg'>On</span>
                <IconButton edge="end" aria-label="delete">
                  <ArrowRightRoundedIcon sx={{ color: '#767676', fontSize: 40 }} />
                </IconButton>
              </div>
            }
            sx={{ padding: '1.5rem 28px' }}
          >
            <ListItemText
              primary="Authentication"
              className='text-white'
              sx={listSxProp}
            />
          </ListItem>
          <Divider variant="middle" sx={{ border: 1, borderColor: '#484848' }} />
          <ListItem
            secondaryAction={
              <div className='flex items-center'>
                <span className='text-gray text-lg'>English</span>
                <IconButton edge="end" aria-label="delete">
                  <ArrowRightRoundedIcon sx={{ color: '#767676', fontSize: 40 }} />
                </IconButton>
              </div>
            }
            sx={{ padding: '1.5rem 28px' }}
          >
            <ListItemText
              primary="Language"
              className='text-white'
              sx={listSxProp}
            />
          </ListItem>
          <Divider variant="middle" sx={{ border: 1, borderColor: '#484848' }} />
        </List>
      </div>

      <div className="flex flex-col px-6 w-full absolute bottom-10 items-center justify-center">
        <span className='text-green text-sm'>Last v 5.4</span>
        <button className='w-full text-white text-lg border border-white py-3.5 rounded-full mt-2' onClick={handleLogout}>
          Sign out
        </button>
      </div>

    </div>
  );
}