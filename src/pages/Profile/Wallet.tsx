import { useNavigate, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

import ChevronLeftRoundedIcon from '@mui/icons-material/ChevronLeftRounded';
import PaidOutlinedIcon from '@mui/icons-material/PaidOutlined';
import HistoryRoundedIcon from '@mui/icons-material/HistoryRounded';

import Avatar from '@mui/material/Avatar';

import avatar from "../../assets/avatar.svg";
import whitelogo from "../../assets/whitelogo.svg";
import discount from "../../assets/discount.svg";


type WalletProps = {
  setValue: React.Dispatch<React.SetStateAction<string>>;
}

export default function List({ setValue }: WalletProps) {
  const location = useLocation();
  const prevUrl = location.state?.prevurl;

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
  const handleNavigate = () => {
    if (prevUrl === 'home') {
      navigate('/');
      setValue('home');
    } else {
      navigate('/profile');
      setValue('profile');
    }
  };


  return (
    <div className="bg-dark w-full" style={{ minHeight: "100vh" }}>
      <div className='flex flex-col m-auto w-11/12 pt-6'>
        <div className="flex justify-center items-center">
          <span className='absolute top-6.5 left-4'>
            <button onClick={handleNavigate}>
              <ChevronLeftRoundedIcon sx={{ color: 'white', fontSize: 42 }} />
            </button>
          </span>
          <span className='text-white text-2xl font-semibold'>Wallets</span>
        </div>
      </div>      


      <div className="flex flex-col gap-3 items-start px-6 pb-3 w-full mt-4">
        <span className='flex text-lg text-white justify-center items-center'>
          <Avatar alt="Avatar" src={avatar} sx={{
            width: 36, height: 36, border: 2,
            borderColor: '#32FF9D', marginRight: 2 }} className="" />
          Hi, Tiffany921</span>

        <div className="w-full flex flex-col">
          {/* another div  */}
          <div className='flex flex-col max-w-[360px] h-52 rounded-[30px] border border-white hover:border-green bg-gradient-to-br from-[#242424] from-5% via-[#3C3C3C] via-40% to-[#141516] to-65%'>
            <div className='flex h-2/3'>
              <div className='flex flex-col w-2/3 pt-8'>
                <span className='text-xs text-gray ml-6'>85**-****-****-9852</span>
                <span className='text-white text-md font-semibold ml-6'>Your account balance</span>
                <span className='text-white text-4xl font-bold flex items-center mt-2 ml-5'>
                  <PaidOutlinedIcon sx={{ color: '#32FF9D', marginRight: 0.5, marginTop: 0.6, fontSize: 30 }} />
                  1050.00
                </span>
              </div>
              <div className='w-1/3 mx-auto mt-10'>
                <img className="w-16 xs:w-20" src={whitelogo} alt="Last Mile" />
              </div>
            </div>
            <div className='w-full h-1/3 flex justify-center items-start'>
              <button className='bg-green w-10/12 py-1.5 rounded-full text-black font-bold text-xl mt-1'>TOP UP</button>
            </div>
          </div>
          {/* end  */}
        </div>
      </div>

      <div className="flex flex-col gap-3 items-start px-6 pb-3 w-full">
        <span className='flex text-lg text-white items-center'> <img className="w-4 mr-2.5" src={discount} alt="Discount coupon" />Discount Coupon</span>
        <div className="w-full flex gap-4 overflow-x-auto">
          {/* another div  */}
          <div className='flex min-w-40 h-20 rounded-2xl bg-teel-gray pl-3 pr-2 py-1'>
            <div className='w-1/2 flex flex-col justify-center items-start text-white'>
              <span className='text-lg'>10% off</span>
              <span className='text-xs'>entire fee</span>
            </div>
            <div className='w-1/2 flex justify-center items-center'>
              <button className='text-sm bg-teel-dark-gray text-green border border-green py-2 px-[18px] rounded-2xl shadow-xl'>USE</button>
            </div>
          </div>
          <div className='flex min-w-40 h-20 rounded-2xl bg-teel-gray pl-3 pr-2 py-1'>
            <div className='w-1/2 flex flex-col justify-center items-start text-white'>
              <span className='text-lg'>5% off</span>
              <span className='text-xs'>entire fee</span>
            </div>
            <div className='w-1/2 flex justify-center items-center'>
              <button className='text-sm bg-teel-dark-gray text-green border border-green py-2 px-[18px] rounded-2xl shadow-xl'>USE</button>
            </div>  
          </div>          
          {/* end  */}
        </div>
      </div>

      <div className="flex flex-col gap-3 items-start px-6 pt-3 pb-7 w-full mt-2 bg-exdark min-h-[48vh] rounded-t-[35px]">
        <span className='text-lg text-white mt-2 flex items-center'><HistoryRoundedIcon sx={{ color: '#32FF9D', marginRight: '0.5rem', fontSize: 24 }} />Transaction History</span>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          <div className='flex w-full h-20 rounded-2xl bg-light'>
            <div className='w-3/4 p-4 flex flex-col'>
              <span className='text-white text-lg'>Completion Reward</span>
              <span className='text-exlight-gray text-sm'>2023 / 03 / 18 </span>
            </div>
            <div className='w-1/4 text-green text-4xl m-auto'>
              +14
            </div>
          </div>
          {/* another div  */}
          <div className='flex w-full h-20 rounded-2xl bg-light'>
            <div className='w-3/4 p-4 flex flex-col'>
              <span className='text-white text-lg'>Shipping Fee</span>
              <span className='text-exlight-gray text-sm'>2023 / 03 / 12 </span>
            </div>
            <div className='w-1/4 text-white text-4xl m-auto'>
              -90
            </div>            
          </div>

          <div className='flex w-full h-20 rounded-2xl bg-light'>
            <div className='w-3/4 p-4 flex flex-col'>
              <span className='text-white text-lg'>Completion Reward</span>
              <span className='text-exlight-gray text-sm'>2023 / 03 / 05 </span>
            </div>
            <div className='w-1/4 text-green text-4xl m-auto'>
              +18
            </div>
          </div>
          {/* end  */}

        </div>
      </div>

    </div>
  );
}