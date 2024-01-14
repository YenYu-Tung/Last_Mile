import { useState } from "react";

import ArrowRightRoundedIcon from '@mui/icons-material/ArrowRightRounded';
import Dialog from './Dialog';

type DialogShowProps = {
  num: number;
  title: string;
  avatar: string;
}

const Dates = ['TUE 12.26.2023', 'WED 12.27.2023', 'FRI 12.29.2023', 'SAT 12.30.2023', 'SUN 12.31.2023'];
const Times = ['16:35', '17:20', '12:05', '10:30', '18:45'];


export default function SimpleDialogDemo(props: DialogShowProps) {
  const [open, setOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(Dates[props.num]);
  const [selectedTime, setSelectedTime] = useState(Times[props.num]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (values: string[]) => {
    setOpen(false);
    setSelectedValue(values[0]);
    setSelectedTime(values[1]);
  };

  return (
    <div className="h-1/2 w-full gap-2 flex py-2 px-4 ">
      <button className="flex w-2/3 justify-between items-center border border-green rounded-2xl pl-4 pr-1 bg-gradient-to-b from-light to-black" onClick={handleClickOpen}>
          <div className="flex flex-col text-white">
            <span className="text-xs text-start ">Delivery Time</span>
            <span className="text-sm sm:text-base md:text-lg text-start font-bold">{selectedValue}</span>
          </div>
          <ArrowRightRoundedIcon sx={{ color: '#32FF9D', fontSize: 40 }} />
        </button>
        <div className="flex flex-col w-1/3 border border-green rounded-2xl justify-center items-center bg-gradient-to-b from-light to-black">
          <span className="text-white text-xxs sm:text-xs">Package ETA</span>
          <span className="text-white text-xl sm:text-2xl font-bold">{selectedTime}</span>
        </div>
      <Dialog
        num={props.num}
        open={open}
        onClose={handleClose}
        title={props.title}
        avatar={props.avatar}
      />
    </div>
  );
}
