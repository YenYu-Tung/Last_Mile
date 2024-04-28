import { useState } from "react";

import Button from '@mui/material/Button';
// import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
// import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemButton from '@mui/material/ListItemButton';
// import ListItemText from '@mui/material/ListItemText';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import Dialog from '@mui/material/Dialog';

import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import SquareRoundedIcon from '@mui/icons-material/SquareRounded';

// import PersonIcon from '@mui/icons-material/Person';
// import { blue } from '@mui/material/colors';
import AccessTimeRoundedIcon from '@mui/icons-material/AccessTimeRounded';
import CircularProgress from '@mui/material/CircularProgress';

import Divider from '@mui/material/Divider';

const Cars = ['#CAR-811', '#CAR-967', '#CAR-811', '#CAR-654', '#CAR-992', '#CAR-336'];
const Dates = ['MON 12.25', 'TUE 12.26', 'WED 12.27', 'FRI 12.29', 'SAT 12.30', 'SUN 12.31'];
const Times = ['13:30', '16:35', '17:20', '12:05', '10:30', '18:45'];


type DialogProps = {
  open: boolean;
  num: number;
  onClose: (values: string[], isChecked: boolean) => void;
  title: string;
  image: string;
}

export default function SimpleDialog(props: DialogProps) {
  const { onClose, open, num, title, image } = props;
  const [changedIndex, setChangedIndex] = useState(num);
  const [changedValue, setChangedValue] = useState(Dates[num]);
  const [changedTime, setChangedTime] = useState(Times[num]);
  const [isChecked, setIsChecked] = useState(false);
  const [showProgress, setShowProgress] = useState(false);

  const handleClose = () => {
    onClose([changedValue, changedTime], isChecked);
  };

  const handleListItemClick = (value: string) => {
    setShowProgress(true); 
    const index = Dates.indexOf(value);
    setChangedIndex(index);
    setTimeout(() => {
      setChangedValue(value);
      setChangedTime(Times[index]);
      setShowProgress(false); 
    }, 1000); 
  };

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked);
  };

  return (
    <Dialog onClose={handleClose} open={open} sx={{
      height: '100%'
    }}>
      <DialogTitle className="flex flex-col font-bold" sx={{
        paddingBottom: '0'
      }}>
        <div className="flex pb-4 gap-4 justify-center items-center">
          <img className="w-20" src={`/${image}.svg`} alt="image" />
          <div className={`flex flex-col ${isChecked ? 'text-green' : 'text-white'}`}>
            <span className="text-white">
              {title}
              <CheckCircleRoundedIcon className='text-green ml-1' sx={{ fontSize: 12 }} />
            </span>
            <FormControlLabel control={<Checkbox sx={{
              color: '#fff',
              '&.Mui-checked': {
                color: '#32FF9D',
              },
              padding: '0px 6px 0px 6px'
            }} size="small"
              checked={isChecked}
              onChange={handleCheckboxChange}
              checkedIcon={<SquareRoundedIcon />}
            />} label="Send to Locker" sx={{
              marginRight: '0', justifyContent: 'end', padding: '0px 0px 4px 3px'
            }} />
          </div>
        </div>

      </DialogTitle>
      <Divider variant="middle" sx={{ border: 0.5, borderColor: '#646A75', borderRadius: '24px' }} />
      <DialogContent sx={{
        paddingTop: '18px', paddingBottom: '12px',
      }}>
        <List sx={{
          py: 0, overflow: 'auto',
          maxHeight: 300, width: '100%',
          maxWidth: 400,
          border: 1, borderColor: '#363A40', borderRadius: '16px',
          backgroundColor: '#26292E'
        }}>
          {Dates.map((Date, index) => (
            <ListItem disableGutters key={Date} sx={{
              py: 0.5,
            }}>
              <ListItemButton onClick={() => handleListItemClick(Date)} 
                sx={{
                  px: 1, borderRadius: "8px", mx: 1, py: 1.5,
                  '&:hover': {
                    boxShadow: '0 0 0 0.05rem #32FF9D',
                    color: 'white'
                  },
                  '&:active': {
                    boxShadow: 'none',
                    backgroundColor: '#32FF9D',
                  },
                  '&:focus': {
                    backgroundColor: '#32FF9D',
                    boxShadow: 'none',
                    color: 'black'
                  },
                  ...(index === changedIndex && { backgroundColor: '#32FF9D', color: 'black' }) 
                }}>
                {/* <ListItemAvatar>
                  <Avatar sx={{ bgcolor: blue[100], color: blue[600] }}>
                    <PersonIcon />
                  </Avatar>
                </ListItemAvatar> */}
                <div className="w-full flex font-bold text-lg">
                  <div className="w-[50%]">
                    {Cars[index]}
                  </div>
                  <div className="w-[50%]">
                    {Dates[index]}
                  </div>
                </div>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </DialogContent>
      <DialogActions>
        <div className="flex w-full justify-between px-[18px] pb-[6px] gap-4">
          <div className="flex justify-center items-center shadow-3xl rounded-[20px] py-[14px] w-[140px] h-[60px] text-2xl">
            {showProgress ? <CircularProgress sx={{ color: '#B4B4B4', marginRight: 1 }} disableShrink size={24} /> : <><AccessTimeRoundedIcon sx={{ color: '#32FF9D', marginRight: 1 }} />{changedTime}</>}
          </div>
          {showProgress ? 
            <div className="bg-transparent text-base text-green py-0 px-[34px] rounded-[20px] font-bold border border-green h-[58px] flex justify-center items-center">CONFIRM</div> 
          : 
            <Button onClick={handleClose} sx={{
              backgroundImage: 'linear-gradient(to bottom, #32FF9D, #1E995E)', fontSize: '16px', color: 'black', padding: '0px 34px', borderRadius: '20px', fontWeight: 'bold', height: '58px', marginY: 'auto', boxShadow: '0 4px 12px 0px rgba(0, 0, 0, 0.5)',
              '&:hover': {
                backgroundImage: 'linear-gradient(to bottom, #32FF9D, #1E995E)',
              },
            }}>Confirm</Button> 
          }
        </div>
      </DialogActions>
    </Dialog>
  );
}