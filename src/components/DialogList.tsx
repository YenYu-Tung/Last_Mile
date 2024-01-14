import { useState } from "react";

import ArrowRightAltRoundedIcon from '@mui/icons-material/ArrowRightAltRounded';
import Dialog from './Dialog';

type DialogListProps = {
  num: number;
  title: string;
  avatar: string;
  hoveredDiv: string;
}

const Dates = ['TUE 12.26.2023', 'WED 12.27.2023', 'FRI 12.29.2023', 'SAT 12.30.2023', 'SUN 12.31.2023'];
const Times = ['16:35', '17:20', '12:05', '10:30', '18:45'];


export default function SimpleDialogDemo(props: DialogListProps) {
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
    <div className='flex justify-between items-end'>
      <div className='mb-1 ml-4 font-semibold'>
        <span className="text-lg xs:text-xl">{selectedTime}</span>
        <span className=" text-xs font-bold  ml-1.5">{selectedValue}</span>
      </div>
      <button className={`w-[7rem] xs:w-36 h-8 text-center rounded-tl-3xl rounded-br-[22px] font-bold text-xs sm:text-sm flex justify-center items-center  ${props.hoveredDiv === props.title ? 'text-white bg-exdark border border-green' : 'text-exdark bg-green'}`} onClick={handleClickOpen}>
                    Change time
                    <ArrowRightAltRoundedIcon sx={{ fontSize: 17 }} className='ml-0.5'/>
    </button>   
    
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
