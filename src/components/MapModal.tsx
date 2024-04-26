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
  left: "66%",
  width: '30%',
  height: '100%',
  backgroundBlendMode: 'normal',
} as const;

const style = {
  position: 'absolute',
  top: '10%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: '#000',
  boxShadow: 24,
  p: 2,
  borderRadius: '24px',
  width: '390px',
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
      <Box sx={{ ...style }}>
        <div className="w-[67%] text-white py-1 pr-2">
          <div className="rounded-md w-16">
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
              bgcolor: '#383A3E', fontSize: '14px', color: 'white', padding: '8px 19px', borderRadius: '24px', '&:hover': {
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
              }}>Map <MapsHomeWorkOutlinedIcon className='text-white' style={{ fontSize: "1.5rem", marginLeft: '8px' }} />
            </Button>
            <Button onClick={handleScan} className='flex items-center' sx={{
              bgcolor: 'transparent', fontSize: '14px', color: 'white', padding: '8px 19px',
              border: 1,
              borderColor: '#32FF9D',
              borderRadius: '24px', 
              '&:hover': {
                boxShadow: 'none',
                backgroundColor: '#2FC97F',
                color: 'black'
              },
              '&:active': {
                boxShadow: 'none',
                backgroundColor: '#32FF9D',
                color: 'black'
              },
              '&:focus': {
                backgroundColor: '#32FF9D',
                boxShadow: 'none',
                color: 'black'
              },
            }}>Scan <QrCodeScannerRoundedIcon className='text-green' style={{ fontSize: "1.5rem", marginLeft: '8px' }} /></Button>
          </div>


        </div>
        <div className="w-[30%]" style={containerStyle}>

        </div>

      </Box>

    </Modal>
  );
}

