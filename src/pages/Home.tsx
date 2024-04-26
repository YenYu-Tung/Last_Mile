import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';

import logo from "/logo.svg";
import santa from "/santa.svg";
import birde from "/birde.svg";
import home from "/home.svg";
import star from "/star.svg";
// import pins from "/pins.svg";
import toys from "/toys.svg";
import escort from "/escort.svg";
import glasses from "/glasses.svg";
import tripod from "/tripod.svg";

import Divider from '@mui/material/Divider';
import QrCodeScannerRoundedIcon from '@mui/icons-material/QrCodeScannerRounded';
import IconButton from '@mui/material/IconButton';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import WalletOutlinedIcon from '@mui/icons-material/WalletOutlined';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import Chip from '@mui/material/Chip';
import Avatar from '@mui/material/Avatar';
import Snackbar from '@mui/material/Snackbar';

import SupportAgentRoundedIcon from '@mui/icons-material/SupportAgentRounded';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ArrowRightAltRoundedIcon from '@mui/icons-material/ArrowRightAltRounded';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import ContentCopyRoundedIcon from '@mui/icons-material/ContentCopyRounded';
// import StarsRoundedIcon from '@mui/icons-material/StarsRounded';

import DialogList from "../components/DialogList";
import ProgressBar from "../components/ProgressBar";
import Switch from "../components/HomeSwitch";

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

const containerStyle = {
  background: `url(${home}), linear-gradient(to right, rgba(31, 31, 31, 1), transparent)`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'right',
  position: 'absolute',
  backgroundBlendMode: 'color-dodge',
  top: 0,
  left: 0,
  width: '100%',
  height: '90%',
  borderRadius: '24px',
  opacity: 0.6,
} as const;



type HomeProps = {
  setValue: React.Dispatch<React.SetStateAction<string>>;
}

export default function Home({ setValue }: HomeProps) {

  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate('/list');
    setValue('none');
  };
  const handleNavigateToDelivery = () => {
    navigate('/delivery');
    setValue('delivery');
  };
  const handleQrcode = () => {
    navigate('/scan');
    setValue('none');
  };
  const handleWallet = () => {
    navigate('/profile/wallet');
    setValue('none');
  };
  const handleSearch = () => {
    navigate('/search');
    setValue('none');
  };
  const handleAssistant = () => {
    navigate('/ai-assistant');
    setValue('none');
  };

  const [num, setNum] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    if (event) {
      setNum(newValue);
    }
  };

  // const [hoveredDiv, setHoveredDiv] = useState('');

  const [snackbarOpen, setSnackbarOpen] = useState(false); 

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text)
      .then(() => {
        setSnackbarOpen(true); 
      })
      .catch((error) => {
        console.error('Copy Failed!:', error);
      });
  };

  return (
    <div className="bg-dark pb-24 md:px-8" style={{ minHeight: "100vh" }}>
      <Snackbar
        open={snackbarOpen}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        autoHideDuration={1500} 
        onClose={() => setSnackbarOpen(false)}
        message="Successfully copied item number!"
      ></Snackbar>
      <div className="flex justify-between align-middle items-center p-4">
        <img className="w-36 sm:w-50" src={logo} alt="Last Mile" />
        <div className='flex items-center gap-2'>
          <Switch />
          <IconButton aria-label="qrcode" onClick={handleQrcode}>
            <QrCodeScannerRoundedIcon className='text-green' style={{ fontSize: "2rem" }} />
          </IconButton>      
        </div>          
      </div>
      

      <div className="flex flex-col items-start px-6 pb-3">
        <div className="mt-1 w-full rounded-3xl h-64 shadow-3xl relative" >  
          <div className='w-full h-full bg-gradient-to-r from-gray/20 via-dark-gray/5 to-dark-gray/10 rounded-3xl z-20'></div>  
          <div className='w-full h-full z-0' style={containerStyle}>
          </div>   
          <div className='w-full flex flex-col h-full absolute top-0 left-0 gap-3 items-start z-30'>
            <div className='flex flex-col w-full h-[70%] gap-1 justify-end px-4'>
              <span className='flex text-exlight-gray ml-1 text-xs w-full'>
                <img className="mr-1" src={star} alt="star" />
              Arriving Soon
              </span>
              <span className='text-white text-2xl flex w-full items-center'>
                #HUT-51136JGV</span>
            </div>
            <div className='w-1/2 flex justify-end items-end absolute top-0 right-0'>
              <button className={`w-36 h-12 text-center rounded-tr-3xl rounded-bl-[22px] font-bold text-xl flex justify-center items-center bg-gradient-to-r from-[#29E2EE] from-10% to-[#32FF9D] to-74%`} onClick={handleNavigateToDelivery}>
                Check
                <ArrowRightAltRoundedIcon sx={{ fontSize: 36, fontWeight: 'bold' }} className='ml-0.5' />
              </button>
            </div>
            <div className='flex w-full h-[30%] px-4 gap-3 bg-dark rounded-b-[24px]'>
              <img className="w-14" src={escort} alt="escort"/>
              <div className='flex flex-col w-full items-center justify-center'>
                <span className='text-light-gray ml-1 text-xs w-full'>Destination</span>
                <span className='text-white text-base flex w-full items-center truncate'>
                  <LocationOnIcon className='text-green mr-1' sx={{ fontSize: 18 }} />No.122,Sec.1,Chongqing S.Rd </span>
                <ProgressBar />
              </div>              
            </div>
          </div>
        </div>
      </div> 

      <Box sx={{ paddingX: 3, flex: 1 }}>
        <Tabs value={num} onChange={handleChange} aria-label="basic tabs example"
          sx={{
            '& .MuiTabs-indicator': {
              backgroundColor: '#32FF9D',
            },
            '& .MuiTab-textColorPrimary': {
              color: '#898989',
            },
            '& .MuiButtonBase-root.MuiTab-root.Mui-selected': {
              color: '#fff',
            },
            '& .MuiTabs-flexContainer': {
              justifyContent: 'start',
            },
          }}
          centered
        >
          <Tab label="In progress" {...a11yProps(0)} />
          <Tab label="Shipped" {...a11yProps(1)} />
          <button className="flex justify-center items-center text-exlight-gray hover:text-green absolute top-[14px] right-0" onClick={handleNavigate}>
            <span className='text-sm'>See more</span>
            <ChevronRightRoundedIcon style={{ fontSize: "1.2rem" }} />
          </button>
        </Tabs>
        
        <CustomTabPanel value={num} index={0}>
          <div className='py-6 flex flex-col gap-6'>
            <div className='w-full h-[105px] rounded-[25px] border border-[#363A40] flex justify-around bg-[#26292E] shadow-xl'>
              <div className='flex gap-2'>
                <img className="w-20" src={escort} alt="escort" />
                <div className='flex flex-col h-full justify-center gap-1'>
                  <span className='flex text-2xl font-bold text-white items-end'>
                    <span className='max-w-28 truncate'>ESCORT</span>
                    <CheckCircleRoundedIcon className='text-green ml-1 mb-1' sx={{ fontSize: 12 }} />
                  </span>
                  <Chip
                    className='w-[68px]'
                    avatar={<Avatar alt="santa" src={santa} />}
                    label="Santa"
                    sx={{
                      color: '#C0C0C0',
                      bgcolor: '#50555E',
                      fontWeight: 'bold',
                      fontSize: '12px',
                      '& .MuiChip-label': {
                        padding: '0 4px 0 2px'
                      }, 
                      '& .MuiChip-avatar': {
                        margin: '0',
                        width: '18px',
                        height: '18px'
                      },  
                      '&': {
                        height: '22px'
                      },           
                    }} />
                  <span className='text-light-gray text-sm font-bold'>
                    #HUT-51136JGV
                    <IconButton className='p-0' onClick={() => handleCopy('#HUT-51136JGV')}>
                      <ContentCopyRoundedIcon className='text-light-gray' sx={{ fontSize: 12 }} />
                    </IconButton>                    
                  </span>
                </div>
              </div>              
              <div className="my-auto">
                <DialogList num={0} title="ESCORT" image="escort" isInprocess={true}/>
              </div>
            </div>
            <div className='w-full h-[105px] rounded-[25px] border border-[#363A40] flex justify-around bg-[#26292E] shadow-xl'>
              <div className='flex gap-2'>
                <img className="w-20" src={toys} alt="fishing toys" />
                <div className='flex flex-col h-full justify-center gap-1'>
                  <span className='flex text-2xl font-bold text-white items-end'>
                    <span className='max-w-28 truncate'>FISHING TOYS</span>                    
                    <CheckCircleRoundedIcon className='text-green ml-1 mb-1' sx={{ fontSize: 12 }} />
                  </span>
                  <Chip
                    className='w-[62px]'
                    avatar={<Avatar alt="birde" src={birde} />}
                    label="Birde"
                    sx={{
                      color: '#C0C0C0',
                      bgcolor: '#50555E',
                      fontWeight: 'bold',
                      fontSize: '12px',
                      '& .MuiChip-label': {
                        padding: '0 4px 0 2px'
                      }, 
                      '& .MuiChip-avatar': {
                        margin: '0',
                        width: '17px',
                        height: '17px'
                      },  
                      '&': {
                        height: '22px'
                      },           
                    }} />
                  <span className='text-light-gray text-sm font-bold'>
                    #RWQ-51F9711D
                    <IconButton className='p-0' onClick={() => handleCopy('#RWQ-51F9711D')}>
                      <ContentCopyRoundedIcon className='text-light-gray' sx={{ fontSize: 12 }} />
                    </IconButton> 
                  </span>
                </div>
              </div>              
              <div className="my-auto">
                <DialogList num={1} title="FISHING TOYS" image="toys" isInprocess={true} />
              </div>
            </div>
          </div>
        </CustomTabPanel>
        <CustomTabPanel value={num} index={1}>
          <div className='py-6 flex flex-col gap-6'>
            <div className='w-full h-[105px] rounded-[25px] border border-[#363A40] flex justify-around bg-[#26292E] shadow-xl'>
              <div className='flex gap-2'>
                <img className="w-20" src={glasses} alt="glasses" />
                <div className='flex flex-col h-full justify-center gap-1'>
                  <span className='flex text-2xl font-bold text-white items-end'>
                    <span className='max-w-28 truncate'>AIR MASK</span>                    
                    <CheckCircleRoundedIcon className='text-green ml-1 mb-1.5' sx={{ fontSize: 12 }} />
                  </span>
                  <Chip
                    className='w-[62px]'
                    avatar={<Avatar alt="birde" src={birde} />}
                    label="Birde"
                    sx={{
                      color: '#C0C0C0',
                      bgcolor: '#50555E',
                      fontWeight: 'bold',
                      fontSize: '12px',
                      '& .MuiChip-label': {
                        padding: '0 4px 0 2px'
                      },
                      '& .MuiChip-avatar': {
                        margin: '0',
                        width: '17px',
                        height: '17px'
                      },
                      '&': {
                        height: '22px'
                      },
                    }} />
                  <span className='text-light-gray text-sm font-bold'>
                    #5UR-4FWQFVP3
                    <IconButton className='p-0' onClick={() => handleCopy('#5UR-4FWQFVP3')}>
                      <ContentCopyRoundedIcon className='text-light-gray' sx={{ fontSize: 12 }} />
                    </IconButton> 
                  </span>
                </div>
              </div>
              <div className="my-auto">
                <DialogList num={2} title="AIR MASK" image="glasses" isInprocess={false} />
              </div>
            </div>
            <div className='w-full h-[105px] rounded-[25px] border border-[#363A40] flex justify-around bg-[#26292E] shadow-xl'>
              <div className='flex gap-2'>
                <img className="w-20" src={tripod} alt="tripod" />
                <div className='flex flex-col h-full justify-center gap-1'>
                  <span className='flex text-2xl font-bold text-white items-end'>
                    <span className='max-w-28 truncate'>TRIPOD</span>
                    <CheckCircleRoundedIcon className='text-green ml-1 mb-1.5' sx={{ fontSize: 12 }} />
                  </span>
                  <Chip
                    className='w-[62px]'
                    avatar={<Avatar alt="birde" src={birde} />}
                    label="Birde"
                    sx={{
                      color: '#C0C0C0',
                      bgcolor: '#50555E',
                      fontWeight: 'bold',
                      fontSize: '12px',
                      '& .MuiChip-label': {
                        padding: '0 4px 0 2px'
                      },
                      '& .MuiChip-avatar': {
                        margin: '0',
                        width: '17px',
                        height: '17px'
                      },
                      '&': {
                        height: '22px'
                      },
                    }} />
                  <span className='text-light-gray text-sm font-bold'>
                    #POR-FS5J964R
                    <IconButton className='p-0' onClick={() => handleCopy('#POR-FS5J964R')}>
                      <ContentCopyRoundedIcon className='text-light-gray' sx={{ fontSize: 12 }} />
                    </IconButton> 
                  </span>
                </div>
              </div>
              <div className="my-auto">
                <DialogList num={3} title="TRIPOD" image="tripod" isInprocess={false} />
              </div>
            </div>
          </div>

        </CustomTabPanel>
      </Box>
      
      <Divider variant="middle"  sx={{
        color: '#898989', '&.MuiDivider-root::before, &.MuiDivider-root::after': {
          borderTop: '1px solid #898989', 
        }
      }} >More Funtions</Divider>
      
      <div className="flex flex-col items-start px-6 py-4">
        <div className="flex w-full justify-center gap-4">
          <button className='flex flex-col w-32 h-[105px] items-center justify-center px-3 rounded-[15px] relative shadow-3xl hover:bg-green text-white hover:text-black' onClick={handleWallet}>
            <WalletOutlinedIcon style={{ fontSize: "3.5rem" }} />
            <span className='text-center text-xs mt-2'>Wallet</span>
          </button>
          <button className='flex flex-col w-32 h-[105px] items-center justify-center px-3 rounded-[15px] relative shadow-3xl hover:bg-green text-white hover:text-black' onClick={handleSearch}>
            <SearchRoundedIcon style={{ fontSize: "3.5rem" }} />
            <span className='text-center text-xs mt-2'>Parcel Process</span>
          </button>
          <button className='flex flex-col w-32 h-[105px] items-center justify-center px-3 rounded-[15px] relative shadow-3xl hover:bg-green text-white hover:text-black' onClick={handleAssistant}>
            <SupportAgentRoundedIcon style={{ fontSize: "3.5rem" }} />
            <span className='text-center text-xs mt-2'>AI Assistant</span>
          </button>
        </div>
      </div> 

    </div>
  );
}