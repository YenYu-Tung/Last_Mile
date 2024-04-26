import { useState } from "react";

// import ArrowRightAltRoundedIcon from '@mui/icons-material/ArrowRightAltRounded';
import Dialog from './Dialog';
import ArrowRightRoundedIcon from '@mui/icons-material/ArrowRightRounded';
import WatchLaterRoundedIcon from '@mui/icons-material/WatchLaterRounded';

type DialogListProps = {
  num: number;
  title: string;
  image: string;
  isInprocess: boolean;
}

const Dates = ['MON 12.25', 'TUE 12.26', 'WED 12.27', 'FRI 12.29', 'SAT 12.30', 'SUN 12.31'];
const Times = ['13:30', '16:35', '17:20', '12:05', '10:30', '18:45'];


export default function SimpleDialogDemo(props: DialogListProps) {
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
    // console.log(isChecked)
  };

  return (
    <>
    {!props.isInprocess ? 
      <div>
        <button className='flex w-[124px] h-[4.5rem] rounded-2xl px-4 py-1 bg-teel-gray items-center shadow-xl'>
          <div className='w-full flex justify-center items-start flex-col'>
            <span className="flex gap-1 items-center">
              <WatchLaterRoundedIcon sx={{ color: '#fff', fontSize: 18 }} />
              <span className="text-2xl text-white font-bold mb-1">--:--</span>
            </span>
            <span className="flex font-bold text-xs gap-1">
              <span className="text-green">ETA</span>
              <span className="text-white">{selectedValue}</span>
            </span>
          </div>
        </button>

        <Dialog
          num={props.num}
          open={open}
          onClose={handleClose}
          title={props.title}
          image={props.image}
        />
      </div>
      :
      <div>
        <div className='flex w-[124px] h-[4.5rem] rounded-2xl pl-3 pr-2 py-1 bg-teel-gray items-center shadow-xl' onClick={handleClickOpen}>
          {isLocker ? <div className='w-[85%] flex justify-center items-center flex-col'> <span className="text-white text-xl font-bold">LOCKER</span> </div> : <div className='w-[85%] flex justify-center items-start flex-col'>
            <span className="flex gap-1 items-center">
              <WatchLaterRoundedIcon sx={{ color: '#fff', fontSize: 18 }} />
              <span className="text-2xl text-white font-bold">{selectedTime}</span>
            </span>
            <span className="flex font-bold text-xs gap-1">
              <span className="text-green">ETA</span>
              <span className="text-white">{selectedValue}</span>
            </span>
          </div>
          }
          <div className='w-[15%] flex justify-center items-center'>
            <ArrowRightRoundedIcon sx={{ color: '#32FF9D', fontSize: 40 }} />
          </div>
        </div>
        {/* <button className={`w-[7rem] xs:w-36 h-8 text-center rounded-tl-3xl rounded-br-[22px] font-bold text-xs sm:text-sm flex justify-center items-center  ${props.hoveredDiv === props.title ? 'text-white bg-exdark border border-green' : 'text-exdark bg-green'}`} onClick={handleClickOpen}>
                    Change time
                    <ArrowRightAltRoundedIcon sx={{ fontSize: 17 }} className='ml-0.5'/>
    </button>    */}

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
