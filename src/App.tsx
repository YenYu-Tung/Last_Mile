import { HashRouter as BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState, useEffect } from "react";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';


import Paper from '@mui/material/Paper';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import LocalShippingRoundedIcon from '@mui/icons-material/LocalShippingRounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import WhereToVoteRoundedIcon from '@mui/icons-material/WhereToVoteRounded';

import Home from './pages/Home.tsx';
import Locker from './pages/Locker.tsx';
import Profile from './pages/Profile.tsx';
import Delivery from './pages/Delivery.tsx';
import DeliveryMap from './pages/DeliveryMap.tsx';
import List from './pages/List.tsx';
import Scan from './pages/Scan.tsx';
import Success from './pages/Success.tsx';
import Assistant from './pages/Assistant.tsx';

import Account from './pages/Profile/Account.tsx';
import AboutUs from './pages/Profile/AboutUs.tsx';
import Address from './pages/Profile/Address.tsx';
import Wallet from './pages/Profile/Wallet.tsx';

const theme = createTheme({
    typography: {
        fontFamily: 'Jura, sans-serif', 
    },
});

export default function App() {

    const [value, setValue] = useState('home');

    useEffect(() => {
        const path = window.location.pathname;        
        if (path === '/') setValue('home');
        else if (path === '/delivery') setValue('delivery');
        else if (path === '/deliverymap') setValue('delivery');
        else if (path === '/locker') setValue('locker');
        else if (path === '/profile') setValue('profile');
        else setValue('none');
    }, []);

    const isBottomNavigationVisible =
        value === 'home' || value === 'delivery' || value === 'locker' || value === 'profile';

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <BrowserRouter>
                <div id="body">
                    <Routes>
                        <Route path="/" element={<Home setValue={setValue} />}  />
                        <Route path="/delivery" element={<Delivery setValue={setValue} />} />
                        <Route path="/deliverymap" element={<DeliveryMap setValue={setValue} />} />
                        <Route path="/locker" element={<Locker setValue={setValue} />} />
                        <Route path="/profile" element={<Profile setValue={setValue} />} />
                        <Route path="/list" element={<List setValue={setValue} />}  />
                        <Route path="/success" element={<Success setValue={setValue} />} />
                        <Route path="/scan" element={<Scan setValue={setValue} />} />
                        <Route path="/ai-assistant" element={<Assistant setValue={setValue} />} />
                        <Route path="/profile/about-us" element={<AboutUs setValue={setValue} />} />
                        <Route path="/profile/account" element={<Account setValue={setValue} />} />
                        <Route path="/profile/address-setting" element={<Address setValue={setValue} />} />
                        <Route path="/profile/wallets" element={<Wallet setValue={setValue}/>} />
                        {/* <Route path="/guard/*" element={<Guard />} /> */}
                    </Routes>
                    {isBottomNavigationVisible && (
                    <Paper sx={{ bgcolor: '#323232', position: 'fixed', bottom: 20, left: 20, right: 20, borderRadius: 54, boxShadow: 4 }} >
                        <BottomNavigation
                            value={value}
                            sx={{ bgcolor: '#323232', borderRadius: 54, padding: 0.6, boxShadow: 4, justifyContent: 'space-around', }}
                        >
                            <BottomNavigationAction
                                value="home"
                                label="HOME"
                                icon={<HomeRoundedIcon sx={{
                                    color: '#898989', '&:hover': {
                                        color: '#32FF9D',
                                    }, }} />}
                                sx={{
                                    paddingTop: 0,
                                    display: 'flex',
                                    flexDirection: 'row',
                                    borderRadius: 30,
                                    gap: 0.5, 
                                    '&.MuiButtonBase-root.MuiBottomNavigationAction-root': {
                                        minWidth: 60,
                                    },
                                    '&.MuiButtonBase-root.MuiBottomNavigationAction-root.Mui-selected': {
                                        border: 2,
                                        borderColor: '#32FF9D',
                                        minWidth: 110,
                                        color: '#32FF9D',
                                    },
                                    '&.Mui-selected svg': {
                                        color: '#32FF9D',
                                    },
                                    '& .MuiBottomNavigationAction-label': {
                                        display: 'none', 
                                        color: '#32FF9D', 
                                        '&.Mui-selected': {
                                            display: 'block', 
                                        },
                                    },                             
                                }}
                                href="/"
                            />
                            <BottomNavigationAction
                                value="delivery" label="DELIVERY" icon={<LocalShippingRoundedIcon sx={{
                                    color: '#898989', '&:hover': {
                                        color: '#32FF9D',
                                    },
                                }} />}
                                sx={{
                                    paddingTop: 0,
                                    display: 'flex',
                                    flexDirection: 'row',
                                    borderRadius: 30,
                                    gap: 0.5,
                                    color: '#32FF9D',
                                    '&.MuiButtonBase-root.MuiBottomNavigationAction-root': {
                                        minWidth: 60,
                                    },
                                    '&.MuiButtonBase-root.MuiBottomNavigationAction-root.Mui-selected': {
                                        border: 2,
                                        borderColor: '#32FF9D',
                                        minWidth: 110,
                                        color: '#32FF9D',
                                    },
                                    '&.Mui-selected svg': {
                                        color: '#32FF9D',
                                    },
                                    '& .MuiBottomNavigationAction-label': {
                                        display: 'none',
                                        color: '#32FF9D',
                                        '&.Mui-selected': {
                                            display: 'block',
                                        },
                                    },
                                }}
                                href="/delivery"
                            />

                            <BottomNavigationAction
                                value="locker" label="LOCKER" icon={<WhereToVoteRoundedIcon sx={{
                                    color: '#898989', '&:hover': {
                                        color: '#32FF9D',
                                    }, }} />}
                                sx={{
                                    paddingTop: 0,
                                    display: 'flex',
                                    flexDirection: 'row',
                                    borderRadius: 30,
                                    gap: 0.5,
                                    color: '#32FF9D',
                                    '&.MuiButtonBase-root.MuiBottomNavigationAction-root': {
                                        minWidth: 60,
                                    },
                                    '&.MuiButtonBase-root.MuiBottomNavigationAction-root.Mui-selected': {
                                        border: 2,
                                        borderColor: '#32FF9D',
                                        minWidth: 110,
                                        color: '#32FF9D',
                                    },
                                    '&.Mui-selected svg': {
                                        color: '#32FF9D',
                                    },
                                    '& .MuiBottomNavigationAction-label': {
                                        display: 'none',
                                        color: '#32FF9D',
                                        '&.Mui-selected': {
                                            display: 'block',
                                        },
                                    },
                                }} 
                                href="/locker"
                                />
                            <BottomNavigationAction
                                value="profile" label="PROFILE" icon={<PersonRoundedIcon sx={{
                                    color: '#898989', '&:hover': {
                                        color: '#32FF9D',
                                    }, }} 
                                />}  
                                sx={{
                                    paddingTop: 0,
                                    display: 'flex',
                                    flexDirection: 'row',
                                    borderRadius: 30,
                                    gap: 0.5,
                                    color: '#32FF9D',
                                    '&.MuiButtonBase-root.MuiBottomNavigationAction-root': {
                                        minWidth: 60,
                                    },
                                    '&.MuiButtonBase-root.MuiBottomNavigationAction-root.Mui-selected': {
                                        border: 2,
                                        borderColor: '#32FF9D',
                                        minWidth: 110,
                                        color: '#32FF9D',
                                    },
                                    '&.Mui-selected svg': {
                                        color: '#32FF9D',
                                    },
                                    '& .MuiBottomNavigationAction-label': {
                                        display: 'none',
                                        color: '#32FF9D',
                                        '&.Mui-selected': {
                                            display: 'block',
                                        },
                                    },
                                }}
                                href="/profile"
                                />                        
                        </BottomNavigation>
                    </Paper>
                    )}
                </div>
            </BrowserRouter>
        </ThemeProvider>
    );
}
