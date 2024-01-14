import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';

import avatar from "/avatar.svg";
import badge1 from "/badge1.svg";
import badge2 from "/badge2.svg";
import unknownbadge from "/unknownbadge.svg";

import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';

import PaidOutlinedIcon from '@mui/icons-material/PaidOutlined';

import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import WalletOutlinedIcon from '@mui/icons-material/WalletOutlined';
import EditLocationOutlinedIcon from '@mui/icons-material/EditLocationOutlined';
import CheckCircleOutlineRoundedIcon from '@mui/icons-material/CheckCircleOutlineRounded';
// import EditLocationRoundedIcon from '@mui/icons-material/EditLocationRounded';
// import SignpostRoundedIcon from '@mui/icons-material/SignpostRounded';
// import HelpRoundedIcon from '@mui/icons-material/HelpRounded';
import InfoRoundedIcon from '@mui/icons-material/InfoRounded';

import ArrowRightRoundedIcon from '@mui/icons-material/ArrowRightRounded';


import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <>
          {children}
        </>       
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

type ProfileProps = {
  setValue: React.Dispatch<React.SetStateAction<string>>;
}

export default function Profile({ setValue }: ProfileProps){
  
  const navigate = useNavigate();

  const [num, setNum] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    if(event){
      setNum(newValue);
    }
  };


  return (
    <div className='bg-dark' style={{ minHeight: "100vh" }}>
      <div className='flex flex-col sm:flex-row justify-center items-center h-[33vh] sm:h-[28vh] gap-2'>
        <Avatar alt="Avatar" src={avatar} sx={{
          width: '105px', height: '105px', border: 2,
          borderColor: '#32FF9D',
          '@media (min-width: 768px)': { 
            width: '130px', 
            height: '130px', 
          }, }}  />
          <div className="flex flex-col gap-1 items-center sm:ml-2">
            <span className='text-2xl text-white font-bold'>Tiffany921</span>
            <span className='text-base text-light-gray mb-1'>Beginner</span>
            <Chip label={
              <div className='flex align-middle items-center'>
                <PaidOutlinedIcon sx={{ color: '#32FF9D', marginRight: 0.5 }} />
                1050
              </div>
            } variant="outlined" sx={{ color: '#32FF9D', border: 2, borderColor: '#484848', boxShadow: 2, }} />
          </div>        
      </div>
      <Divider variant="middle" sx={{  border: 1,  borderColor: '#484848' }} />
      <div className='w-11/12 m-auto'>
        <List className='w-full' >
          <ListItem
            secondaryAction={
              <IconButton edge="end" aria-label="delete">
                <ArrowRightRoundedIcon sx={{ color: '#32FF9D', fontSize: 40 }} />
              </IconButton>
            }
            sx={{ paddingY: '7px' }}
            onClick={() => {
              navigate('/profile/account');
              setValue('none');
            }}
          >
            <ListItemAvatar>
              <PersonOutlineOutlinedIcon sx={{ color: '#32FF9D', fontSize: 32 }} />
            </ListItemAvatar>
            <ListItemText
              primary="Account"
              className='text-white'
            />
          </ListItem>
          <ListItem
            secondaryAction={
              <IconButton edge="end" aria-label="delete">
                <ArrowRightRoundedIcon sx={{ color: '#32FF9D', fontSize: 40 }} />
              </IconButton>
            }
            sx={{ paddingY: '7px' }}
            onClick={() => {
              navigate('/profile/wallets');
              setValue('none');
            }}
          >
            <ListItemAvatar>
              <WalletOutlinedIcon sx={{ color: '#32FF9D', fontSize: 32 }}  />
            </ListItemAvatar>
            <ListItemText
              primary="Wallets"
              className='text-white'
            />
          </ListItem>
          <ListItem
            secondaryAction={
              <IconButton edge="end" aria-label="delete">
                <ArrowRightRoundedIcon sx={{ color: '#32FF9D', fontSize: 40 }} />
              </IconButton>
            }
            sx={{ paddingY: '7px' }}
            onClick={() => {
              navigate('/profile/address-setting', { state: { prevurl: 'profile' } });
              setValue('none');
            }}
          >
            <ListItemAvatar>
              <EditLocationOutlinedIcon sx={{ color: '#32FF9D', fontSize: 32 }} />
            </ListItemAvatar>
            <ListItemText
              primary="Address Setting"
              className='text-white'
            />
          </ListItem>
          <ListItem
            secondaryAction={
              <IconButton edge="end" aria-label="delete">
                <ArrowRightRoundedIcon sx={{ color: '#32FF9D', fontSize: 40 }} />
              </IconButton>
            }
            sx={{ paddingY: '7px' }}
            onClick={() => {
              navigate('/profile/about-us');
              setValue('none');
            }}
          >
            <ListItemAvatar>
              <InfoRoundedIcon sx={{ color: '#32FF9D', fontSize: 32 }} />
            </ListItemAvatar>
            <ListItemText
              primary="About Us"
              className='text-white'
            />
          </ListItem>
        </List>
      </div>
      <div className='mx-auto mt-1 min-h-[40vh] sm:min-h-[50vh] pb-20 bg-exdark rounded-t-[35px]' style={{ display: 'flex', flexDirection: 'column' }}>
        <Box sx={{ paddingX: 2, paddingY: 1.5, flex: 1}}>
          <Tabs value={num} onChange={handleChange} aria-label="basic tabs example"
            sx={{
            '& .MuiTabs-indicator': {
              backgroundColor: '#32FF9D', 
            },            
            '& .MuiTab-textColorPrimary': {
              color: '#898989', 
            },
            '& .MuiButtonBase-root.MuiTab-root.Mui-selected': {
              color: '#32FF9D', 
            },
            '& .MuiTabs-flexContainer': {
              justifyContent: 'space-around',
            }, 
          }}
            centered
          >
            <Tab label="Badges" {...a11yProps(0)}/>
            <Tab label="History" {...a11yProps(1)} />
            <Tab label="Coupon" {...a11yProps(2)} />
          </Tabs>
          <CustomTabPanel value={num} index={0}>
            <Box sx={{
              display: 'flex',
              alignItems: 'flex-start',
              flexDirection: 'row', pt: 3, px: 1, gap: 2, flexWrap: 'wrap'
            }} >
              <img className="w-[4.3rem]" src={badge1} alt="Badge1" />
              <img className="w-[4.25rem]" src={badge2} alt="Badge2" />
              <img className="w-[4.9rem]" src={unknownbadge} alt="UnknownBadge" />
              <img className="w-[4.9rem]" src={unknownbadge} alt="UnknownBadge" />
            </Box>
          </CustomTabPanel>
          <CustomTabPanel value={num} index={1}>
            <Box sx={{
              display: 'flex',
              alignItems: 'flex-start',
              flexDirection: 'column', pt: 3, px: 1, gap: 2.2, flexWrap: 'wrap'
            }} >
              <div className='flex w-full h-20 rounded-2xl bg-light'>
                <div className='w-3/4 p-4 flex flex-col'>
                  <span className='text-green text-lg'>#RWQ-51F9711D</span>
                  <span className='text-light-gray text-sm'>2023 / 03 / 18 </span>
                </div>
                <div className='w-1/4 text-green text-4xl flex items-center justify-center'>
                  <CheckCircleOutlineRoundedIcon sx={{ color: '#32FF9D', fontSize: 40 }} />
                </div>
              </div>
              <div className='flex w-full h-20 rounded-2xl bg-light'>
                <div className='w-3/4 p-4 flex flex-col'>
                  <span className='text-green text-lg'>#OUR-PFU1IG8</span>
                  <span className='text-light-gray text-sm'>2023 / 03 / 05 </span>
                </div>
                <div className='w-1/4 text-green text-4xl flex items-center justify-center'>
                  <CheckCircleOutlineRoundedIcon sx={{ color: '#32FF9D', fontSize: 40 }} />
                </div>
              </div>
            </Box>

          </CustomTabPanel>
          <CustomTabPanel value={num} index={2}>

            <Box sx={{
              display: 'flex',
              alignItems: 'flex-start',
              flexDirection: 'row', pt: 4, px: 1, gap: 2, flexWrap: 'wrap'
            }} >
              <div className='flex min-w-40 h-20 rounded-2xl bg-teel-gray pl-3 pr-2 py-1'>
                <div className='w-1/2 flex flex-col justify-center items-start text-white'>
                  <span className='text-lg'>10% off</span>
                  <span className='text-xs'>entire fee</span>
                </div>
                <div className='w-1/2 flex justify-center items-center'>
                  <button className='text-sm bg-teel-dark-gray text-green border border-green py-2 px-[18px] rounded-2xl shadow-xl'>USE</button>
                </div>
              </div>
              <div className='flex min-w-40 h-20 rounded-2xl bg-teel-gray pl-3 pr-2 py-1'>
                <div className='w-1/2 flex flex-col justify-center items-start text-white'>
                  <span className='text-lg'>10% off</span>
                  <span className='text-xs'>entire fee</span>
                </div>
                <div className='w-1/2 flex justify-center items-center'>
                  <button className='text-sm bg-teel-dark-gray text-green border border-green py-2 px-[18px] rounded-2xl shadow-xl'>USE</button>
                </div>
              </div>
            </Box>
            
          </CustomTabPanel>
        </Box>
      </div>         
    </div>
  );
}