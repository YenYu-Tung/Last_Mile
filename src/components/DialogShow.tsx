import { useState } from "react";

import ArrowRightRoundedIcon from '@mui/icons-material/ArrowRightRounded';
import Dialog from './Dialog';

type DialogShowProps = {
  num: number;
  title: string;
  image: string;
  isInprocess: boolean;
}

const Dates = ['MON 12.25', 'TUE 12.26', 'WED 12.27', 'FRI 12.29', 'SAT 12.30', 'SUN 12.31'];
const Times = ['13:30', '16:35', '17:20', '12:05', '10:30', '18:45'];


export default function SimpleDialogDemo(props: DialogShowProps) {
  const [open, setOpen] = useState(false);
  const [isLocker, setisLocker] = useState(false);
  const [selectedValue, setSelectedValue] = useState(Dates[props.num]);
  const [selectedTime, setSelectedTime] = useState(Times[props.num]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (values: string[], isChecked: boolean) => {
    setOpen(false);
    setSelectedValue(values[0]);
    setSelectedTime(values[1]);
    setisLocker(isChecked);
  };

  return (
    <>
    {props.isInprocess? 
      <div className="w-full gap-2 flex px-4 items-center">
        <button className="h-16 flex w-2/3 justify-between items-center rounded-2xl pl-4 pr-1 bg-gradient-to-b from-light to-black" onClick={handleClickOpen}>
          <div className="flex flex-col text-white">
            <span className="text-xs text-start ">Delivery Date</span>
            <span className="text-lg text-start font-bold">{selectedValue}</span>
          </div>
          <ArrowRightRoundedIcon sx={{ color: '#32FF9D', fontSize: 40 }} />
        </button>
        {isLocker ?
          <div className="h-[4.5rem] flex flex-col w-1/3 rounded-2xl justify-center items-start bg-teel-gray shadow-xl px-5">
            <span className="text-white text-xs">Send to</span>
            <span className="text-white text-xl font-bold">LOCKER</span>
          </div> :
          <div className="h-[4.5rem] flex flex-col w-1/3 rounded-2xl justify-center items-center bg-teel-gray shadow-xl">
            <span className="text-white text-xxs sm:text-xs">Package <span className="text-green ml-1">ETA</span></span>
            <span className="text-white text-2xl sm:text-2xl font-bold">{selectedTime}</span>
          </div>}
        <Dialog
          num={props.num}
          open={open}
          onClose={handleClose}
          title={props.title}
          image={props.image}
        />
      </div>
      :
      <div className="w-full gap-2 flex px-4 items-center">
        <div className="h-16 flex w-2/3 justify-between items-center rounded-2xl pl-4 pr-1 bg-gradient-to-b from-light to-black">
          <div className="flex flex-col text-white">
            <span className="text-xs text-start ">Delivery Date</span>
            <span className="text-lg text-start font-bold">{selectedValue}</span>
          </div>
          <ArrowRightRoundedIcon sx={{ color: '#999999', fontSize: 40 }} />
        </div>
        <div className="h-[4.5rem] flex flex-col w-1/3 rounded-2xl justify-center items-center bg-teel-gray shadow-xl">
          <span className="text-white text-xxs sm:text-xs">Package <span className="text-green ml-1">ETA</span></span>
          <span className="text-white text-2xl sm:text-2xl font-bold">--:--</span>
        </div>
        <Dialog
          num={props.num}
          open={open}
          onClose={handleClose}
          title={props.title}
          image={props.image}
        />
      </div>
    }
    </>    
  );
}
