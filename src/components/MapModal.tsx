import { useNavigate } from 'react-router-dom';

import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';

import Chip from '@mui/material/Chip';
import QrCodeScannerRoundedIcon from '@mui/icons-material/QrCodeScannerRounded';
import MapsHomeWorkOutlinedIcon from '@mui/icons-material/MapsHomeWorkOutlined';

import logo from "/logo.svg";
import mapimg from "/mapimg.svg";

type DialogProps = {
  open: boolean;
  onClose: () => void;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}
const containerStyle = {
  backgroundImage: `url(${mapimg})`,
  backgroundSize: 'contain',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  position: 'fixed',
  top: 0,
  left: "63%",
  width: '33%',
  height: '100%',
  backgroundBlendMode: 'normal',
} as const;

const style = {
  position: 'absolute',
  top: '15%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: '#000',
  boxShadow: 24,
  p: 2,
  borderRadius: '24px'
} as const;

export default function SimpleDialog(props: DialogProps) {
  const { onClose, open, setValue } = props;
  const navigate = useNavigate();

  const handleClose = () => {
    onClose();
  };

  const handleMap = () => {
    onClose();
    navigate('/deliverymap');
    setValue('delivery');
  };
  const handleScan = () => {
    onClose();
    navigate('/scan');
    setValue('none');
  };

  return (
    <Modal onClose={handleClose} open={open} className='bg-light-gray/10'>
      <Box sx={{ ...style, width: 340 }}>
        <div className="w-[64%] text-white py-1 pr-2">
          <div className="border border-green rounded-md w-16 px-1 py-0.5">
            <img src={logo} alt="Logo" />
          </div>
          <div className="flex flex-col p-1 my-2">
            <span className="text-lg font-bold">Walk in 1 minutes</span>
            <div className='flex items-center'>
              <span className="text-sm">#CAR-985</span><Chip
                label="PLUS" sx={{ color: 'white', marginLeft: '8px', fontSize: '11px', padding: '0px' }} size="small" className='bg-gradient-to-r from-cyan-500 to-emerald-500' />
            </div>    

          </div>

          <div className="flex w-full justify-between px-1">
            <Button onClick={handleMap} className='flex items-center'
             sx={{
              bgcolor: '#383A3E', fontSize: '12px', color: 'white', padding: '6px 18px', borderRadius: '24px', '&:hover': {
                boxShadow: '0 0 0 0.05rem #383A3E',
                backgroundColor: '#383A3E',
              },
              '&:active': {
                boxShadow: 'none',
                backgroundColor: '#383A3E',
              },
              '&:focus': {
                backgroundColor: '#383A3E',
                boxShadow: 'none',
              },
              }}>Map <MapsHomeWorkOutlinedIcon className='text-white' style={{ fontSize: "1.2rem", marginLeft: '4px' }} />
            </Button>
            <Button onClick={handleScan} className='flex items-center' sx={{
              bgcolor: '#2FC97F', fontSize: '12px', color: 'white', padding: '6px 18px', borderRadius: '24px', '&:hover': {
                boxShadow: '0 0 0 0.05rem #32FF9D',
                backgroundColor: '#2FC97F',
              },
              '&:active': {
                boxShadow: 'none',
                backgroundColor: '#2FC97F',
              },
              '&:focus': {
                backgroundColor: '#2FC97F',
                boxShadow: 'none',
              },
            }}>Scan <QrCodeScannerRoundedIcon className='text-white' style={{ fontSize: "1.2rem", marginLeft: '4px' }} /></Button>
          </div>


        </div>
        <div className="w-[36%]" style={containerStyle}>

        </div>

      </Box>

    </Modal>
  );
}

