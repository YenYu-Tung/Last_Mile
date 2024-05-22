
import Button from '@mui/material/Button';
// import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

// import ListItemText from '@mui/material/ListItemText';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import Dialog from '@mui/material/Dialog';


import Chip from '@mui/material/Chip';
import ListItemText from '@mui/material/ListItemText';
import StarRoundedIcon from '@mui/icons-material/StarRounded';

// import PersonIcon from '@mui/icons-material/Person';
// import { blue } from '@mui/material/colors';

import Divider from '@mui/material/Divider';


type DialogProps = {
  open: boolean;
  onClose: () => void;
  setUploaded: React.Dispatch<React.SetStateAction<boolean>>;
  setIsList: React.Dispatch<React.SetStateAction<boolean>>;
}

const listSxProp = {
  '&.MuiListItemText-root span': {
    fontSize: '16px',
  }
};

export default function SimpleDialog(props: DialogProps) {
  const { onClose, open, setUploaded, setIsList } = props;

  const handleClose = () => {
    onClose();
  };
  const handleSubmit = () => {
    setUploaded(true);
    setIsList(false);
    onClose();
  };

  return (
    <Dialog onClose={handleClose} open={open} sx={{
      height: '100%'
    }}>

      <DialogContent sx={{
        paddingY: '24px'
      }}>
        <div className="text-white">
          <div className='flex flex-col rounded-[42px] items-center gap-1'>
            <span className='text-5xl text-green font-bold'>17 : 00</span>
            <div className='flex gap-3 text-base'>
              <span className='text-white'>Wednesday</span>
              <span className='text-light-gray'>May.17</span>
              <span className='text-light-gray'>2024</span>
            </div>
            <div className='bg-[#26292E] p-4 rounded-[30px] border border-[#858585] mt-4 w-[300px]'>
              <div className='w-full flex justify-between text-white items-center'>
                <span className='text-xs text-light-gray'>Number of Packages</span>
                <span className='text-sm'>3</span>
              </div>
              <List className='w-full'>
                <ListItem
                  sx={{ padding: '0px 0px 0.2rem 0px' }}
                >
                  <ListItemText
                    primary="#AWE-11871VKU"
                    className='text-white text-sm'
                    sx={listSxProp}
                  />
                  <Chip label={
                    <div className='flex align-middle items-center font-bold'>
                      <StarRoundedIcon sx={{ color: '#1E2023', marginRight: 0.5 }} />
                      Paid
                    </div>
                  } variant="outlined" sx={{ color: '#1E2023', border: 0, bgcolor: '#32FF9D' }} size="small" />
                </ListItem>
                <Divider sx={{ borderColor: '#484848' }} />
                <ListItem
                  sx={{ padding: '0.2rem 0px' }}
                >
                  <ListItemText
                    primary="#OW4-I5222GGA"
                    className='text-white text-sm'
                    sx={listSxProp}
                  />
                  <Chip label={
                    <div className='flex align-middle items-center font-bold'>
                      <StarRoundedIcon sx={{ color: '#1E2023', marginRight: 0.5 }} />
                      Fee
                    </div>
                  } variant="outlined" sx={{ color: '#1E2023', border: 0, bgcolor: '#FF9A9A' }} size="small" />
                </ListItem>
                <Divider sx={{ borderColor: '#484848' }} />
                <ListItem
                  sx={{ padding: '0.2rem 0px' }}
                >
                  <ListItemText
                    primary="#541-QAZWSXED"
                    className='text-white text-sm'
                    sx={listSxProp}
                  />
                  <Chip label={
                    <div className='flex align-middle items-center font-bold'>
                      <StarRoundedIcon sx={{ color: '#1E2023', marginRight: 0.5 }} />
                      Paid
                    </div>
                  } variant="outlined" sx={{ color: '#1E2023', border: 0, bgcolor: '#32FF9D' }} size="small" />
                </ListItem>
                <Divider sx={{ borderColor: '#484848' }} />
              </List>

            </div>
          </div>
        </div>

      </DialogContent>
      <DialogActions>
        <div className="w-full flex justify-center mb-4">
          <Button onClick={handleSubmit} sx={{
            backgroundColor: '#32FF9D', fontSize: '16px', color: 'black', padding: '0px 65px', borderRadius: '20px', fontWeight: 'bold', height: '50px', marginY: 'auto', boxShadow: '0 4px 12px 0px rgba(0, 0, 0, 0.5)',
            '&:hover': {
              backgroundColor: '#2EE78E'
            },
          }}>Submit</Button>
        </div>
      </DialogActions>
    </Dialog>
  );
}