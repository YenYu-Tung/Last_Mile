import LocationOnIcon from '@mui/icons-material/LocationOn';
import RefreshRoundedIcon from '@mui/icons-material/RefreshRounded';
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';
import Avatar from '@mui/material/Avatar';
import { useEffect } from 'react';

import shopee from "../assets/shopee.svg";
import momo from "../assets/momo.svg";

import { useNavigate } from 'react-router-dom';

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
  useEffect(() => {
    const path = window.location.pathname;
    if (path === '/') setValue('home');
    else if (path === '/delivery') setValue('delivery');
    else if (path === '/deliverymap') setValue('delivery');
    else if (path === '/locker') setValue('locker');
    else if (path === '/profile') setValue('profile');
    else setValue('none');
  }, [setValue]);

  const navigate = useNavigate();

  const handleQrcode = () => {
    navigate('/scan');
    setValue('none');
  };

  return (
    <div className="bg-dark" style={{ minHeight: "100vh" }}>
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
        <div className='flex flex-col m-auto w-11/12 border-2 border-green rounded-xl mt-8'>
          <table>
            <thead>
              <tr>
                <th className='text-green'>A</th>
                <th className='text-green'>B</th>
                <th className='text-green'>C</th>
                <th className='text-green'>D</th>
                <th className='text-green'>E</th>
              </tr>
            </thead>
            <tbody className=''>{generateTable()}</tbody>
          </table>
        </div>
        <div className='flex flex-col sm:flex-row m-auto w-11/12 mt-8 gap-6 pb-24 flex-wrap'>
          <div className='bg-dark-gray w-full lg:w-2/5 h-44 rounded-3xl shadow-3xl border border-gray pb-2'>
            <div className='w-full flex h-2/3'>
              <div className='w-1/3 text-green text-4xl text-center align-middle my-auto'>
                A2
              </div>
              <Divider orientation="vertical" variant="middle" flexItem
                sx={{ border: 1, borderColor: '#32FF9D', borderRadius: '24px' }} />
              <div className="flex flex-col ml-4 w-2/3 my-auto">
                <div className="flex flex-col">
                  <span className="text-gray text-xs">Delivery Date</span>
                  <span className="text-white text-sm">P.M. 05:13 12.06 2022</span>
                </div>
                <div className="flex flex-col mt-3">
                  <span className="text-gray text-xs">Pick up Deadline</span>
                  <span className="text-base sm:text-lg text-transparent text-white">P.M. 05:13 12.16 2022</span>
                </div>
              </div>
              <Chip
                avatar={<Avatar alt="Shopee" src={shopee} />}
                label={
                  <div className='flex align-middle items-center text-green text-xs'>
                    Shopee
                  </div>
                } variant="outlined" sx={{ color: 'white', border: 1, borderColor: 'white', bgcolor: 'transparent' }} className="relative top-4 right-2" />
            </div>
            <div className='w-full flex justify-center mt-2'>
              <button className='bg-green rounded-full px-4 py-2 w-11/12 sm:w-3/4 font-bold shadow-3xl' onClick={handleQrcode}>
                Pick Up Order
              </button>
            </div>
          </div>
          <div className='bg-dark-gray w-full lg:w-2/5 h-44 rounded-3xl shadow-3xl border border-gray pb-2'>
            <div className='w-full flex h-2/3'>
              <div className='w-1/3 text-green text-4xl text-center align-middle my-auto'>
                D1
              </div>
              <Divider orientation="vertical" variant="middle" flexItem
                sx={{ border: 1, borderColor: '#32FF9D', borderRadius: '24px' }} />
              <div className="flex flex-col ml-4 w-2/3 my-auto">
                <div className="flex flex-col">
                  <span className="text-gray text-xs">Delivery Date</span>
                  <span className="text-white text-sm">P.M. 05:13 12.06 2022</span>
                </div>
                <div className="flex flex-col mt-3">
                  <span className="text-gray text-xs">Pick up Deadline</span>
                  <span className="text-base sm:text-lg text-transparent text-white">P.M. 05:13 12.16 2022</span>
                </div>
              </div>
              <Chip
                avatar={<Avatar alt="Momo" src={momo} />}
                label={
                  <div className='flex align-middle items-center text-green text-xs'>
                    MOMO
                  </div>
                } variant="outlined" sx={{ color: 'white', border: 1, borderColor: 'white', bgcolor: 'transparent' }} className="relative top-4 right-2" />
            </div>
            <div className='w-full flex justify-center mt-2'>
              <button className='bg-green rounded-full px-4 py-2 w-11/12 sm:w-3/4 font-bold shadow-3xl' onClick={handleQrcode}>
                Pick Up Order
              </button>
            </div>
          </div>


        </div>
      </div>

    </div>
  );
}