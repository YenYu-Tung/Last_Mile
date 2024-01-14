import { useState } from "react";

import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
// import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemButton from '@mui/material/ListItemButton';
// import ListItemText from '@mui/material/ListItemText';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import Dialog from '@mui/material/Dialog';
// import PersonIcon from '@mui/icons-material/Person';
// import { blue } from '@mui/material/colors';
import AccessTimeRoundedIcon from '@mui/icons-material/AccessTimeRounded';

import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';
import shopee from "/shopee.svg";
import pchome from "/pchome.svg";

const Cars = ['#CAR-967', '#CAR-811', '#CAR-654', '#CAR-992', '#CAR-336'];
const Dates = ['TUE 12.26.2023', 'WED 12.27.2023', 'FRI 12.29.2023', 'SAT 12.30.2023', 'SUN 12.31.2023'];
const Times = ['16:35', '17:20', '12:05', '10:30', '18:45'];


type DialogProps = {
  open: boolean;
  num: number;
  onClose: (values: string[]) => void;
  title: string;
  avatar: string;
}

export default function SimpleDialog(props: DialogProps) {
  const { onClose, open, num, title, avatar } = props;
  const [changedValue, setChangedValue] = useState(Dates[num]);
  const [selectedCar, setSelectedCar] = useState(Cars[num]);
  const [changedTime, setChangedTime] = useState(Times[num]);

  const handleClose = () => {
    onClose([changedValue, changedTime]);
  };

  const handleListItemClick = (value: string) => {
    setChangedValue(value);
    const index = Dates.indexOf(value);
    setSelectedCar(Cars[index]);
    setChangedTime(Times[index]);
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle className="flex flex-col text-green font-bold">
        {title}
        <Chip
          avatar={<Avatar alt={avatar} src={avatar === 'Shopee' ? shopee : pchome} />}
          label={
            <div className='flex align-middle items-center text-green text-xs font-bold'>
              {avatar}
            </div>
          } variant="outlined" sx={{ color: 'white', border: 1, borderColor: '#32FF9D', bgcolor: 'transparent', maxWidth: 88, }} size="small" />
        
      </DialogTitle>
      <Divider variant="middle" sx={{ border: 0.5, borderColor: '#32FF9D', borderRadius: '24px' }} />
      <DialogContent sx={{
        paddingTop: '6px', paddingBottom: '6px',
      }}>
        <div className="w-full flex-col mb-2 px-2">
          <span className="text-sm">Delivery Time </span>
          <div className="w-full flex font-bold text-sm">
            <div className="w-[45%] sm:w-1/2">
              {selectedCar}
            </div>
            <div className="w-[55%] sm:w-1/2">
              {changedValue}
            </div>
          </div>
        </div>

        <List sx={{
          py: 0, overflow: 'auto',
          maxHeight: 160, width: '100%',
          maxWidth: 400,
          border: 1, borderColor: '#32FF9D', borderRadius: '16px',
        }}>
          {Dates.map((Date, index) => (
            <ListItem disableGutters key={Date} sx={{
                py: 0.5, }}>
              <ListItemButton onClick={() => handleListItemClick(Date)} sx={{
                px: 1, borderRadius: "8px", mx: 1, py: 1,
                '&:hover': {
                  boxShadow: '0 0 0 0.05rem #32FF9D',
                },
                '&:active': {
                  boxShadow: 'none',
                  backgroundColor: '#32FF9D',
                },
                '&:focus': {
                  backgroundColor: '#32FF9D',
                  boxShadow: 'none',
                  color: 'black'
                }, }}>
                {/* <ListItemAvatar>
                  <Avatar sx={{ bgcolor: blue[100], color: blue[600] }}>
                    <PersonIcon />
                  </Avatar>
                </ListItemAvatar> */}
                <div className="w-full flex font-bold text-xs sm:text-sm">
                  <div className="w-[45%]">
                    {Cars[index]}
                  </div>
                  <div className="w-[55%]">
                    {Dates[index]}
                  </div>
                </div>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </DialogContent>
      <DialogActions>
        <div className="flex w-full justify-between px-[18px] pb-[6px]">
          <div className="shadow-5xl h-full  rounded-[10px] py-[6px] px-[8px]"><AccessTimeRoundedIcon sx={{ color: '#32FF9D', marginRight: 1 }} />{changedTime}</div>
          <Button onClick={handleClose} sx={{
            bgcolor: '#32FF9D', fontSize: '12px', color: 'black', padding: '6px 18px', borderRadius: '12px', fontWeight: 'bold',
             '&:hover': {
              boxShadow: '0 0 0 0.05rem #32FF9D',
              backgroundColor: '#32FF9D',
            },
            '&:active': {
              boxShadow: 'none',
              backgroundColor: '#32FF9D',
            },
            '&:focus': {
              backgroundColor: '#32FF9D',
              boxShadow: 'none',
            },}}>Confirm</Button>
        </div>        
      </DialogActions>
    </Dialog>
  );
}

