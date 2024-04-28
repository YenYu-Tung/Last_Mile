import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';

import avatar from "/avatar.svg";
import badge1 from "/badge1.svg";
import badge2 from "/badge2.svg";
import unknownbadge from "/unknownbadge.svg";
import badge1_orange from "/badge1_orange.svg";
import badge2_orange from "/badge2_orange.svg";
import unknownbadge_orange from "/badge_unknown_orange.svg";

import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';

import PaidOutlinedIcon from '@mui/icons-material/PaidOutlined';

import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
// import WalletOutlinedIcon from '@mui/icons-material/WalletOutlined';
import Brightness4RoundedIcon from '@mui/icons-material/Brightness4Rounded';
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

import Switch from "../components/Switch";


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
  thememode: string;
  toggleTheme: () => void;
}

export default function Profile({ setValue, thememode, toggleTheme }: ProfileProps){
  
  const navigate = useNavigate();

  const [num, setNum] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    if(event){
      setNum(newValue);
      // if(newValue !== 0 && thememode === 'light'){
      //   toggleTheme();
      // }
    }
  };

  useEffect(() => {
    setValue('profile');
  }, [setValue]);

  const badgeImage1 = thememode === 'light' ? badge1_orange : badge1;
  const badgeImage2 = thememode === 'light' ? badge2_orange : badge2;
  const badgeImage3 = thememode === 'light' ? unknownbadge_orange : unknownbadge;

  return (
    <div className={thememode === 'light' ? 'flex flex-col bg-day w-full min-h-full' : 'flex flex-col bg-dark w-full min-h-full'}>
      <div className='flex flex-col justify-center items-center h-72 gap-2'>
        <Avatar alt="Avatar" src={avatar} sx={{
          width: '90px', height: '90px', border: 2,
          borderColor: thememode === 'light' ? '#FF862E' : '#32FF9D' }}  />
          <div className="flex flex-col gap-2 items-center">
          <span className={thememode === 'light' ? 'text-3xl text-[#383C42] font-bold' : 'text-3xl text-white font-bold'}>Tiffany921</span>
            <span className='text-base text-light-gray mb-1'>Beginner</span>
            <Chip label={
              <div className='flex align-middle items-center'>
              <PaidOutlinedIcon sx={{ color: thememode === 'light' ? '#030303' : '#32FF9D', marginRight: 0.5 }} />
                1050
              </div>
            } variant="outlined" sx={{ color: thememode === 'light' ? '#030303' : '#32FF9D', border: thememode === 'light' ? 0 : 2, borderColor: '#484848', boxShadow: 2, bgcolor: thememode === 'light' ? '#E1E1E1' : '#383839' }} />
          </div>        
      </div>
      <Divider variant="middle" sx={{  border: 1,  borderColor: '#484848' }} />
      <div className='w-11/12 m-auto'>
        <List className='w-full' >
          <ListItem
            secondaryAction={
              <IconButton edge="end" aria-label="delete">
                <ArrowRightRoundedIcon sx={{ color: thememode === 'light' ? '#686868' : '#32FF9D', fontSize: 40 }} />
              </IconButton>
            }
            sx={{ paddingY: '10px' }}
            onClick={() => {
              navigate('/profile/account');
              setValue('none');
            }}
          >
            <ListItemAvatar>
              <PersonOutlineOutlinedIcon sx={{ color: thememode === 'light' ? '#FF862E' : '#32FF9D', fontSize: 32 }} />
            </ListItemAvatar>
            <ListItemText
              primary="Account"
              className={thememode === 'light' ? 'text-black' : 'text-white'}
            />
          </ListItem>
          <ListItem
            secondaryAction={
              <IconButton edge="end" aria-label="delete">
                {/* <ArrowRightRoundedIcon sx={{ color: thememode === 'light' ? '#686868' : '#32FF9D', fontSize: 40 }} /> */}
                <Switch thememode={thememode} toggleTheme={toggleTheme}/>
              </IconButton>
            }
            sx={{ paddingY: '10px' }}
          >
            <ListItemAvatar>
              <Brightness4RoundedIcon sx={{ color: thememode === 'light' ? '#FF862E' : '#32FF9D', fontSize: 30 }}  />
            </ListItemAvatar>
            <ListItemText
              primary="Background Mode"
              className={thememode === 'light' ? 'text-black' : 'text-white'}
            />
          </ListItem>
          <ListItem
            secondaryAction={
              <IconButton edge="end" aria-label="delete">
                <ArrowRightRoundedIcon sx={{ color: thememode === 'light' ? '#686868' : '#32FF9D', fontSize: 40 }} />
              </IconButton>
            }
            sx={{ paddingY: '10px' }}
            onClick={() => {
              navigate('/profile/address-setting', { state: { prevurl: 'profile' } });
              setValue('none');
            }}
          >
            <ListItemAvatar>
              <EditLocationOutlinedIcon sx={{ color: thememode === 'light' ? '#FF862E' : '#32FF9D', fontSize: 32 }} />
            </ListItemAvatar>
            <ListItemText
              primary="Address Setting"
              className={thememode === 'light' ? 'text-black' : 'text-white'}
            />
          </ListItem>
          <ListItem
            secondaryAction={
              <IconButton edge="end" aria-label="delete">
                <ArrowRightRoundedIcon sx={{ color: thememode === 'light' ? '#686868' : '#32FF9D', fontSize: 40 }} />
              </IconButton>
            }
            sx={{ paddingY: '10px' }}
            onClick={() => {
              navigate('/profile/about-us');
              setValue('none');
            }}
          >
            <ListItemAvatar>
              <InfoRoundedIcon sx={{ color: thememode === 'light' ? '#FF862E' : '#32FF9D', fontSize: 32 }} />
            </ListItemAvatar>
            <ListItemText
              primary="About Us"
              className={thememode === 'light' ? 'text-black' : 'text-white'}
            />
          </ListItem>
        </List>
      </div>
      <div className={`flex-1 mt-1 pb-24 ${thememode === 'light' ? 'bg-white drop-shadow-2xl' : 'bg-exdark'} rounded-t-[35px]`} style={{ display: 'flex', flexDirection: 'column' }}>
        <Box sx={{ paddingX: 2, paddingY: 1.5, flex: 1}}>
          <Tabs value={num} onChange={handleChange} aria-label="basic tabs example"
            sx={{
            '& .MuiTabs-indicator': {
                backgroundColor: thememode === 'light' ? '#FF862E' : '#32FF9D', 
            },            
            '& .MuiTab-textColorPrimary': {
              color: thememode === 'light' ? '#1E1E1E' : '#898989', 
            },
            '& .MuiButtonBase-root.MuiTab-root.Mui-selected': {
              color: thememode === 'light' ? '#FF862E' : '#32FF9D', 
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
              <img className="w-[4.85rem]" src={badgeImage1} alt="Badge1" />
              <img className="w-[4.8rem]" src={badgeImage2} alt="Badge2" />
              <img className={`${thememode === 'light' ? 'w-[5rem]' : 'w-[5.5rem]'}`} src={badgeImage3} alt="UnknownBadge" />
              <img className={`${thememode === 'light' ? 'w-[5rem]' : 'w-[5.5rem]'}`} src={badgeImage3} alt="UnknownBadge" />
            </Box>
          </CustomTabPanel>
          <CustomTabPanel value={num} index={1}>
            <div className="w-full grid grid-cols-1 gap-4 pt-4 px-1">
              <div className={`flex w-full h-20 rounded-2xl ${thememode === 'light' ? 'bg-day' : 'bg-light'}`}>
                <div className='w-3/4 p-4 flex flex-col'>
                  <span className={`text-lg ${thememode === 'light' ? 'text-black' : 'text-green'}`}>#RWQ-51F9711D</span>
                  <span className='text-light-gray text-sm'>2023 / 03 / 18 </span>
                </div>
                <div className='w-1/4 text-green text-4xl flex items-center justify-center'>
                  <CheckCircleOutlineRoundedIcon sx={{ color: thememode === 'light' ? '#FF862E' : '#32FF9D', fontSize: 40 }} />
                </div>
              </div>
              
              <div className={`flex w-full h-20 rounded-2xl ${thememode === 'light' ? 'bg-day' : 'bg-light'}`}>
                <div className='w-3/4 p-4 flex flex-col'>
                  <span className={`text-lg ${thememode === 'light' ? 'text-black' : 'text-green'}`}>#OUR-PFU1IG8</span>
                  <span className='text-light-gray text-sm'>2023 / 03 / 05 </span>
                </div>
                <div className='w-1/4 text-green text-4xl flex items-center justify-center'>
                  <CheckCircleOutlineRoundedIcon sx={{ color: thememode === 'light' ? '#FF862E' : '#32FF9D', fontSize: 40 }} />
                </div>
              </div>

            </div>
            {/* <Box sx={{
              display: 'flex',
              alignItems: 'flex-start',
              flexDirection: 'row', pt: 3, px: 1, gap: 2.2, flexWrap: 'wrap'
            }} >
              
            </Box> */}

          </CustomTabPanel>
          <CustomTabPanel value={num} index={2}>

            <Box sx={{
              display: 'grid',
              gap: 2,
              justifyContent: 'flex-start',
              gridTemplateColumns: {
                xs: 'repeat(2, 1fr)', 
                sm: 'repeat(3, 1fr)',
              },
              px: 1,
              pt: 4,
              flexWrap: 'wrap',
            }} >
              <div className={`flex min-w-40 h-24 rounded-2xl pl-3 pr-2 py-1 ${thememode === 'light' ? 'bg-day' : 'bg-teel-gray'}`}>
                <div className={`w-1/2 flex flex-col justify-center items-start xs:items-center ${thememode === 'light' ? 'text-black' : 'text-white'}`}>
                  <span className='text-lg'>10% off</span>
                  <span className='text-xs'>entire fee</span>
                </div>
                <div className='w-1/2 flex justify-center items-center'>
                  <button className={`text-sm py-2 px-[18px] rounded-2xl shadow-xl border ${thememode === 'light' ? 'bg-white  text-orange border-orange' : 'bg-teel-dark-gray text-green border-green'}`}>USE</button>
                </div>
              </div>
              <div className={`flex min-w-40 h-24 rounded-2xl pl-3 pr-2 py-1 ${thememode === 'light' ? 'bg-day' : 'bg-teel-gray'}`}>
                <div className={`w-1/2 flex flex-col justify-center items-start xs:items-center ${thememode === 'light' ? 'text-black' : 'text-white'}`}>
                  <span className='text-lg'>5% off</span>
                  <span className='text-xs'>entire fee</span>
                </div>
                <div className='w-1/2 flex justify-center items-center'>
                  <button className={`text-sm py-2 px-[18px] rounded-2xl shadow-xl border ${thememode === 'light' ? 'bg-white  text-orange border-orange' : 'bg-teel-dark-gray text-green border-green'}`}>USE</button>
                </div>
              </div>
            </Box>
            
          </CustomTabPanel>
        </Box>
      </div>         
    </div>
  );
}