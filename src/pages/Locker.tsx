import LocationOnIcon from '@mui/icons-material/LocationOn';
import RefreshRoundedIcon from '@mui/icons-material/RefreshRounded';
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';
import Avatar from '@mui/material/Avatar';

import santa from "/santa.svg";
// import momo from "/momo.svg";
import birde from "/birde.svg";

import { useNavigate } from 'react-router-dom';

import { useEffect } from 'react';

const generateTable = () => {
  const rows = 4;
  const columns = 5;
  const tableData = [];
  for (let i = 0; i < rows; i++) {
    const rowData = [];
    for (let j = 0; j < columns; j++) {
      rowData.push(``);
    }
    tableData.push(rowData);
  }
  return tableData.map((row, rowIndex) => (
    <tr key={rowIndex}>
      {row.map((col, colIndex) => (
        <td key={`${rowIndex}-${col}-${colIndex}`}>
          <div
            className={`w-12 h-6 border-2 border-green rounded-full flex items-center justify-center m-auto my-1.5 ${(rowIndex === 0 && colIndex === 3) || (rowIndex === 1 && colIndex === 0) ? 'bg-green' : ''}`}
          >
          </div>
        </td>
      ))}
    </tr>
  ));
};

type LockerProps = {
  setValue: React.Dispatch<React.SetStateAction<string>>;
}

export default function Locker({ setValue }: LockerProps) {

  const navigate = useNavigate();

  const handleQrcode = () => {
    navigate('/scan');
    setValue('none');
  };

  useEffect(() => {
    setValue('locker');
  }, [setValue]);

  return (
    <div className="bg-dark w-full min-h-full">
      <div className='flex flex-col justify-center items-center pt-4 w-full'>
        <div className='flex flex-col m-auto w-11/12'>
          <span className='text-gray ml-2 text-lg'>
            Connected to
          </span>
          <div className='mt-2 rounded-full px-4 py-2 flex items-center justify-between shadow-3xl bg-light'>
            <div className='flex flex-col truncate ...'>
              <span className='text-green ml-1 text-lg'>#1 / NO.6 FIRST PARCEL LOCKER</span>
              <span className='text-gray text-xs flex items-center'>
                <LocationOnIcon fontSize="small" />
                No. 122, Sec. 1, Chongqing S. Rd., Zhongzheng District Taipei City</span>
            </div>
            <div className='ml-2'>
              <RefreshRoundedIcon sx={{
                color: '#898989'
              }} />
            </div>
          </div>
        </div>
        <div className='flex flex-col m-auto w-11/12 border-2 border-green rounded-xl mt-6 py-2'>
          <table>
            <thead>
              <tr className='text-green'>
                <th>A</th>
                <th>B</th>
                <th>C</th>
                <th>D</th>
                <th>E</th>
              </tr>
            </thead>
            <tbody className=''>{generateTable()}</tbody>
          </table>
        </div>
        <div className='flex flex-col m-auto w-11/12 mt-2 pb-20'>
          <div className='w-full py-6 flex flex-col gap-8'>
            <div className='w-full h-48 rounded-[25px] border border-[#363A40] flex justify-center bg-[#26292E] shadow-xl flex-col'>
              <div className='w-full flex h-3/5 pb-4'>
                <div className='w-1/5 text-green text-5xl text-center align-middle my-auto'>
                  A2
                </div>
                <Divider orientation="vertical" variant="middle" flexItem
                  sx={{ border: 1, borderColor: '#32FF9D', borderRadius: '24px' }} />
                <div className="flex flex-col ml-4 w-2/5 my-auto">
                  <div className='flex flex-col h-full justify-center gap-2'>
                    <span className='flex text-xl font-bold text-white items-end'>
                      <span className='truncate'>MIH Model</span>
                      {/* <CheckCircleRoundedIcon className='text-green ml-1 mb-1' sx={{ fontSize: 12 }} /> */}
                    </span>
                    <Chip
                      className='w-[62px]'
                      avatar={<Avatar alt="birde" src={birde} />}
                      label="Birde"
                      sx={{
                        color: '#C0C0C0',
                        bgcolor: '#50555E',
                        fontWeight: 'bold',
                        fontSize: '12px',
                        '& .MuiChip-label': {
                          padding: '0 4px 0 2px'
                        },
                        '& .MuiChip-avatar': {
                          margin: '0',
                          width: '17px',
                          height: '17px'
                        },
                        '&': {
                          height: '22px'
                        },
                      }} />
                    <span className='text-light-gray text-sm font-bold'>
                      #KCY-59836LOC
                      {/* <ContentCopyRoundedIcon className='ml-1' sx={{ fontSize: 12 }} /> */}
                    </span>
                  </div>
                </div>
                <button className='flex w-[110px] h-20 rounded-2xl bg-teel-gray justify-center items-center flex-col shadow-xl m-auto'>
                  <div className='w-full flex justify-center items-center flex-col'>
                    <span className="flex gap-1 items-center">
                      <span className="text-xs text-white">Deadline</span>
                    </span>
                    <span className="flex gap-1 items-center">
                      <span className="text-2xl text-white font-bold">16:35</span>
                    </span>
                    <span className="font-bold text-xs text-green">TUE 12.26</span>
                  </div>
                </button>
              </div>
              <div className='w-full flex justify-center'>
                <button className='bg-green rounded-full px-4 py-3 w-11/12 font-bold shadow-3xl' onClick={handleQrcode}>
                  Pick Up Order
                </button>
              </div>
            </div>
            <div className='w-full h-48 rounded-[25px] border border-[#363A40] flex justify-center bg-[#26292E] shadow-xl flex-col'>
              <div className='w-full flex h-3/5 pb-4'>
                <div className='w-1/5 text-green text-5xl text-center align-middle my-auto'>
                  D1
                </div>
                <Divider orientation="vertical" variant="middle" flexItem
                  sx={{ border: 1, borderColor: '#32FF9D', borderRadius: '24px' }} />
                <div className="flex flex-col ml-4 w-2/5 my-auto">
                  <div className='flex flex-col h-full justify-center gap-2'>
                    <span className='flex text-xl font-bold text-white items-end'>
                      <span className='truncate'>KENDA-Wheel</span>
                    </span>
                    <Chip
                      className='w-[68px]'
                      avatar={<Avatar alt="santa" src={santa} />}
                      label="Santa"
                      sx={{
                        color: '#C0C0C0',
                        bgcolor: '#50555E',
                        fontWeight: 'bold',
                        fontSize: '12px',
                        '& .MuiChip-label': {
                          padding: '0 4px 0 2px'
                        },
                        '& .MuiChip-avatar': {
                          margin: '0',
                          width: '18px',
                          height: '18px'
                        },
                        '&': {
                          height: '22px'
                        },
                      }} />
                    <span className='text-light-gray text-sm font-bold'>
                      #TUR-B1F8549D
                    </span>
                  </div>
                </div>
                <button className='flex w-[110px] h-20 rounded-2xl py-1 bg-teel-gray justify-center items-center flex-col shadow-xl m-auto'>
                  <div className='w-full flex justify-center items-center flex-col'>
                    <span className="flex gap-1 items-center">
                      <span className="text-xs text-white">Deadline</span>
                    </span>
                    <span className="flex gap-1 items-center">
                      <span className="text-2xl text-white font-bold">16:35</span>
                    </span>
                    <span className="font-bold text-xs text-green">TUE 12.26</span>
                  </div>
                  <div className='w-[15%] flex justify-center items-center'>
                  </div>
                </button>
              </div>
              <div className='w-full flex justify-center'>
                <button className='bg-green rounded-full px-4 py-3 w-11/12 font-bold shadow-3xl' onClick={handleQrcode}>
                  Pick Up Order
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}