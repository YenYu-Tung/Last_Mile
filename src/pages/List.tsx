import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';

import LocationOnIcon from '@mui/icons-material/LocationOn';
// import ArrowRightRoundedIcon from '@mui/icons-material/ArrowRightRounded';
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';
import Avatar from '@mui/material/Avatar';
import ChevronLeftRoundedIcon from '@mui/icons-material/ChevronLeftRounded';
import QrCodeScannerRoundedIcon from '@mui/icons-material/QrCodeScannerRounded';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import ContentCopyRoundedIcon from '@mui/icons-material/ContentCopyRounded';
import IconButton from '@mui/material/IconButton';
import Snackbar from '@mui/material/Snackbar';

import logo from "/logo.svg";

import DialogShow from "../components/DialogShow";


import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import santa from "/santa.svg";
import birde from "/birde.svg";


import toys from "/toys.svg";
import escort from "/escort.svg";
import glasses from "/glasses.svg";
import toaster from "/toaster.svg";
import tripod from "/tripod.svg";

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


type ListProps = {
  setValue: React.Dispatch<React.SetStateAction<string>>;
}

export default function List({ setValue }: ListProps){

  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate('/home');
    setValue('home');
  };
  const handleQrcode = () => {
    navigate('/scan');
    setValue('none');
  };

  const [num, setNum] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    if (event) {
      setNum(newValue);
    }
  };

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
    <div className="bg-dark w-full" style={{ minHeight: "100vh" }}>
      <Snackbar
        open={snackbarOpen}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        autoHideDuration={1500}
        onClose={() => setSnackbarOpen(false)}
        message="Successfully copied item number!"
      ></Snackbar>
      <div className='flex flex-col m-auto w-11/12 pt-8'>
        <div className="flex justify-between items-center">
          <span className='text-gray'>
            <button onClick={handleNavigate}>
              <ChevronLeftRoundedIcon sx={{ color: '#898989', fontSize: 48 }} />
            </button>
          </span>
          <img className="w-28 sm:w-40" src={logo} alt="Logo" />
          <IconButton aria-label="qrcode" onClick={handleQrcode}>
            <QrCodeScannerRoundedIcon className='text-green' style={{ fontSize: "2rem" }} />
          </IconButton>
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
          {/* <button className="flex justify-center items-center text-exlight-gray hover:text-green absolute top-[14px] right-0" onClick={handleNavigate}>
            <span className='text-sm'>See more</span>
            <ChevronRightRoundedIcon style={{ fontSize: "1.2rem" }} />
          </button> */}
        </Tabs>

        <CustomTabPanel value={num} index={0}>
          <div className='py-6 flex flex-col gap-6'>
            <div className='w-full h-48 rounded-3xl border border-[#363A40] bg-[#26292E] shadow-5xl'>
              <div className='w-full flex flex-col h-full relative justify-center gap-2'>
                <div className='flex gap-4 pl-4'>
                  <img className="w-20" src={escort} alt="escort" />
                  <div className='flex flex-col h-full justify-center gap-1'>
                    <span className='flex text-2xl font-bold text-white items-end'>
                      <span className='max-w-44  truncate'>ESCORT</span>
                      <CheckCircleRoundedIcon className='text-green ml-1 mb-1.5' sx={{ fontSize: 12 }} />
                    </span>
                    <span className='text-exlight-gray text-sm font-bold'>
                      #HUT-51136JGV
                      <IconButton className='p-0' onClick={() => handleCopy('#HUT-51136JGV')}>
                        <ContentCopyRoundedIcon className='text-light-gray' sx={{ fontSize: 12 }} />
                      </IconButton>   
                    </span>
                    <span className='text-white text-xs sm:text-sm flex items-start max-w-60 truncate'>
                      <LocationOnIcon className='text-green mr-1' sx={{ fontSize: 17 }} />
                      <span className='max-w-72 truncate'>No. 122, Sec. 1, Chongqing S. Rd., Zhongzheng District</span>
                    </span>
                  </div>

                </div>
                <DialogShow num={0} title="ESCORT" image="escort" isInprocess={true}/>
                <Chip
                  avatar={<Avatar alt="santa" src={santa} />}
                  label="Santa" sx={{
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
                  }} className="absolute top-4 right-4 w-[64px]" />
              </div>
            </div>

            <div className='w-full h-48 rounded-3xl border border-[#363A40] bg-[#26292E] shadow-5xl'>
              <div className='w-full flex flex-col h-full relative justify-center gap-2'>
                <div className='flex gap-4 pl-4'>
                  <img className="w-20" src={toys} alt="fishing toys" />
                  <div className='flex flex-col h-full justify-center gap-1'>
                    <span className='flex text-2xl font-bold text-white items-end'>
                      <span className='max-w-44 truncate'>FISHING TOYS</span>
                      <CheckCircleRoundedIcon className='text-green ml-1 mb-1.5' sx={{ fontSize: 12 }} />
                    </span>
                    <span className='text-exlight-gray text-sm font-bold'>
                      #RWQ-51F9711D
                      <IconButton className='p-0' onClick={() => handleCopy('#RWQ-51F9711D')}>
                        <ContentCopyRoundedIcon className='text-light-gray' sx={{ fontSize: 12 }} />
                      </IconButton> 
                    </span>
                    <span className='text-white text-xs sm:text-sm flex items-start max-w-60 truncate'>
                      <LocationOnIcon className='text-green mr-1' sx={{ fontSize: 17 }} />
                      <span className='max-w-72 truncate'>No. 122, Sec. 1, Chongqing S. Rd., Zhongzheng District</span>
                    </span>
                  </div>

                </div>
                <DialogShow num={1} title="FISHING TOYS" image="toys" isInprocess={true} />
                <Chip
                  avatar={<Avatar alt="birde" src={birde} />}
                  label="Birde" sx={{
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
                  }} className="absolute top-4 right-4 w-[62px]" />
              </div>
            </div>

            <div className='w-full h-48 rounded-3xl border border-[#363A40] bg-[#26292E] shadow-5xl'>
              <div className='w-full flex flex-col h-full relative justify-center gap-2'>
                <div className='flex gap-4 pl-4'>
                  <img className="w-20" src={toaster} alt="toaster" />
                  <div className='flex flex-col h-full justify-center gap-1'>
                    <span className='flex text-2xl font-bold text-white items-end'>
                      <span className='max-w-44  truncate'>TOASTER</span>
                      <CheckCircleRoundedIcon className='text-green ml-1 mb-1.5' sx={{ fontSize: 12 }} />
                    </span>
                    <span className='text-exlight-gray text-sm font-bold'>
                      #358-JDG652LI
                      <IconButton className='p-0' onClick={() => handleCopy('#358-JDG652LI')}>
                        <ContentCopyRoundedIcon className='text-light-gray' sx={{ fontSize: 12 }} />
                      </IconButton> 
                    </span>
                    <span className='text-white text-xs sm:text-sm flex items-start max-w-60 truncate'>
                      <LocationOnIcon className='text-green mr-1' sx={{ fontSize: 17 }} />
                      <span className='max-w-72 truncate'>No. 122, Sec. 1, Chongqing S. Rd., Zhongzheng District</span>
                    </span>
                  </div>

                </div>
                <DialogShow num={2} title="TOASTER" image="toaster" isInprocess={true} />
                <Chip
                  avatar={<Avatar alt="santa" src={santa} />}
                  label="Santa" sx={{
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
                  }} className="absolute top-4 right-4 w-[64px]" />
              </div>
            </div>
          </div>
        </CustomTabPanel>
        <CustomTabPanel value={num} index={1}>
          <div className='py-6 flex flex-col gap-6'>
            <div className='w-full h-48 rounded-3xl border border-[#363A40] bg-[#26292E] shadow-5xl'>
              <div className='w-full flex flex-col h-full relative justify-center gap-2'>
                <div className='flex gap-4 pl-4'>
                  <img className="w-20" src={glasses} alt="glasses" />
                  <div className='flex flex-col h-full justify-center gap-1'>
                    <span className='flex text-2xl font-bold text-white items-end'>
                      <span className='max-w-44  truncate'>AIR MASK</span>
                      <CheckCircleRoundedIcon className='text-green ml-1 mb-1.5' sx={{ fontSize: 12 }} />
                    </span>
                    <span className='text-exlight-gray text-sm font-bold'>
                      #5UR-4FWQFVP3
                      <IconButton className='p-0' onClick={() => handleCopy('#5UR-4FWQFVP3')}>
                        <ContentCopyRoundedIcon className='text-light-gray' sx={{ fontSize: 12 }} />
                      </IconButton>
                    </span>
                    <span className='text-white text-xs sm:text-sm flex items-start max-w-60 truncate'>
                      <LocationOnIcon className='text-green mr-1' sx={{ fontSize: 17 }} />
                      <span className='max-w-72 truncate'>No. 122, Sec. 1, Chongqing S. Rd., Zhongzheng District</span>
                    </span>
                  </div>

                </div>
                <DialogShow num={4} title="AIR MASK" image="glasses" isInprocess={false} />
                <Chip
                  avatar={<Avatar alt="birde" src={birde} />}
                  label="Birde" sx={{
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
                  }} className="absolute top-4 right-4 w-[62px]" />
              </div>
            </div>            

            <div className='w-full h-48 rounded-3xl border border-[#363A40] bg-[#26292E] shadow-5xl'>
              <div className='w-full flex flex-col h-full relative justify-center gap-2'>   
                <div className='flex gap-4 pl-4'>
                  <img className="w-20" src={tripod} alt="tripod" />
                  <div className='flex flex-col h-full justify-center gap-1'>
                    <span className='flex text-2xl font-bold text-white items-end'>
                      <span className='max-w-44  truncate'>TRIPOD</span>
                      <CheckCircleRoundedIcon className='text-green ml-1 mb-1.5' sx={{ fontSize: 12 }} />
                    </span>
                    <span className='text-exlight-gray text-sm font-bold'>
                      #POR-FS5J964R
                      <IconButton className='p-0' onClick={() => handleCopy('#POR-FS5J964R')}>
                        <ContentCopyRoundedIcon className='text-light-gray' sx={{ fontSize: 12 }} />
                      </IconButton> 
                    </span>
                    <span className='text-white text-xs sm:text-sm flex items-start max-w-60 truncate'>
                      <LocationOnIcon className='text-green mr-1' sx={{ fontSize: 17 }} />
                      <span className='max-w-72 truncate'>No. 122, Sec. 1, Chongqing S. Rd., Zhongzheng District</span>
                    </span>
                  </div>
                  
                </div>             
                <DialogShow num={5} title="TRIPOD" image="tripod" isInprocess={false} />
                <Chip
                  avatar={<Avatar alt="birde" src={birde} />}
                  label="Birde" sx={{
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
                  }} className="absolute top-4 right-4 w-[62px]" />
              </div>
            </div>
          </div>

        </CustomTabPanel>
      </Box>

      
      <Divider variant="middle" sx={{
        color: '#898989', '&.MuiDivider-root::before, &.MuiDivider-root::after': {
          borderTop: '1px solid #898989',
        }
      }} >No more</Divider>

    </div>
  );
}