import { useNavigate } from 'react-router-dom';

import LocationOnIcon from '@mui/icons-material/LocationOn';
// import ArrowRightRoundedIcon from '@mui/icons-material/ArrowRightRounded';
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';
import Avatar from '@mui/material/Avatar';
import ChevronLeftRoundedIcon from '@mui/icons-material/ChevronLeftRounded';
import QrCodeScannerRoundedIcon from '@mui/icons-material/QrCodeScannerRounded';
import IconButton from '@mui/material/IconButton';

import shopee from "/shopee.svg";
import pchome from "/pchome.svg";
import logo from "/logo.svg";
import packagestoship from "/packagestoship.svg";
import packagestoreceive from "/packagestoreceive.svg";

import DialogShow from "../components/DialogShow";

type ListProps = {
  setValue: React.Dispatch<React.SetStateAction<string>>;
}

export default function List({ setValue }: ListProps){

  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate('/');
    setValue('home');
  };
  const handleQrcode = () => {
    navigate('/scan');
    setValue('none');
  };

  return (
    <div className="bg-dark w-full" style={{ minHeight: "100vh" }}>
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

      <div className="flex flex-col gap-3 items-start px-6 py-4 w-full">
        <img className="w-50" src={packagestoreceive} alt=" Packages To Receive" />
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className='mt-4 w-full min-h-40 rounded-3xl border hover:border-green shadow-5xl'>
            <div className='w-full flex flex-col h-full relative'>
              <div className='h-1/6 text-white font-xl font-bold mt-2 pl-4 text-xl'>
                #RWQ-51F9711D
              </div>
              <div className='flex flex-col justify-center w-full h-1/3  pl-4 py-2 text-pretty gap-1'>
                <span className='text-light-gray ml-1 text-xs w-full'>Destination</span>
                <p className='text-white text-xs sm:text-sm flex items-start w-full'>
                  <LocationOnIcon className='text-green mr-1' sx={{ fontSize: 17 }} />No. 122, Sec. 1, Chongqing S. Rd., Zhongzheng District </p>
              </div>
              <DialogShow num={0} title="#RWQ-51F9711D" avatar="PChome"/>
              <Chip
                avatar={<Avatar alt="PChome" src={pchome} />}
                label={
                  <div className='flex align-middle items-center text-green text-xs font-bold'>
                    PChome
                  </div>
                } variant="outlined" sx={{ color: 'white', border: 1, borderColor: '#32FF9D', bgcolor: 'transparent' }} className="absolute top-2 right-2" />
            </div>
          </div>
          {/* another div  */}
          <div className='mt-4 w-full min-h-40 rounded-3xl border hover:border-green shadow-5xl'>
            <div className='w-full flex flex-col h-full relative'>
              <div className='h-1/6 text-white font-xl font-bold mt-2 pl-4 text-xl'>
                #OUR-PFU1IG8
              </div>
              <div className='flex flex-col justify-center w-full h-1/3 pl-4 py-2 text-pretty gap-1'>
                <span className='text-light-gray ml-1 text-xs w-full'>Destination</span>
                <p className='text-white text-xs sm:text-sm flex items-start w-full'>
                  <LocationOnIcon className='text-green mr-1' sx={{ fontSize: 17 }} />No. 122, Sec. 1, Chongqing S. Rd., Zhongzheng District </p>
              </div>
              <DialogShow num={1} title="#OUR-PFU1IG8" avatar="Shopee" />
              <Chip
                avatar={<Avatar alt="shopee" src={shopee} />}
                label={
                  <div className='flex align-middle items-center text-green text-xs font-bold'>
                    Shopee
                  </div>
                } variant="outlined" sx={{ color: 'white', border: 1, borderColor: '#32FF9D', bgcolor: 'transparent' }} className="absolute top-2 right-2" />
            </div>
          </div>
          
        </div>        
      </div>

      <Divider variant="middle" sx={{
        color: '#898989', '&.MuiDivider-root::before, &.MuiDivider-root::after': {
          borderTop: '1px solid #898989',
        }
      }} >No more</Divider>

      <div className="flex flex-col items-start px-6 pt-4 pb-8">
        <img className="w-50" src={packagestoship} alt=" Packages To Ship" />
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className='mt-4 w-full min-h-40 rounded-3xl border shadow-5xl'>
            <div className='w-full flex flex-col h-full relative'>
              <div className='h-1/6 text-white font-xl font-bold mt-2 pl-4 text-xl'>
                #IDW-8JUGF89
              </div>
              <div className='flex flex-col justify-center w-full h-1/3  pl-4 py-2 text-pretty gap-1'>
                <span className='text-light-gray ml-1 text-xs w-full'>Destination</span>
                <p className='text-white text-xs sm:text-sm flex items-start w-full'>
                  <LocationOnIcon className='text-green mr-1' sx={{ fontSize: 17 }} />No. 122, Sec. 1, Chongqing S. Rd., Zhongzheng District </p>
              </div>
              <div className="h-1/2 w-full gap-2 flex py-2 px-4 ">
                <button className="flex w-2/3 justify-between items-center border border-green rounded-2xl pl-4 pr-1 bg-gradient-to-b from-light to-black">
                  <div className="flex flex-col text-white">
                    <span className="text-xs text-start">Delivery Time</span>
                    <span className="text-sm sm:text-base md:text-lg text-start font-bold">-- / -- / ----</span>
                  </div>
                  {/* <ArrowRightRoundedIcon sx={{ color: '#32FF9D', fontSize: 40 }} /> */}
                </button>
                <div className="flex flex-col w-1/3 border border-green rounded-2xl justify-center items-center bg-gradient-to-b from-light to-black">
                  <span className="text-white text-xxs sm:text-xs">Package ETA</span>
                  <span className="text-white text-xl sm:text-2xl font-bold">- -</span>
                </div>
              </div>
              <Chip
                avatar={<Avatar alt="shopee" src={shopee} />}
                label={
                  <div className='flex align-middle items-center text-green text-xs font-bold'>
                    Shopee
                  </div>
                } variant="outlined" sx={{ color: 'white', border: 1, borderColor: '#32FF9D', bgcolor: 'transparent' }} className="absolute top-2 right-2" />
            </div>
          </div>
          {/* another div  */}
          

        </div>  
      </div>

    </div>
  );
}