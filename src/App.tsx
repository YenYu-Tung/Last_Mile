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
import Search from './pages/Search.tsx';
import Info from './pages/Info.tsx';
import Box from './pages/Box.tsx';
import Assistant from './pages/Assistant.tsx';
import Animation from './pages/Animation.tsx';
import Login from './pages/Login.tsx';
import Signup from './pages/Signup.tsx';

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

    const [value, setValue] = useState('none'); 
    const [topPosition, setTopPositon] = useState(932); 

    useEffect(() => {
        const path = window.location.hash;
        const windowHeight = window.innerHeight;
        const offset = 72;
        const newTopPosition = windowHeight - offset;
        if(newTopPosition > 860){
            setTopPositon(860);
        }else{
            setTopPositon(newTopPosition);
        }
        
        /* eslint-disable-next-line */
        const match = path.match(/^#\/([^\/]+)\/?([^\/]+)?\/?([^\/]+)?$/);
        if (match) {
            const segments = match.slice(1).filter(Boolean);
            if(segments.length === 1){
                if (segments[0] === 'delivery') setValue('delivery');
                else if (segments[0] === 'deliverymap') setValue('delivery');
                else if (segments[0] === 'locker') setValue('locker');
                else if (segments[0] === 'profile') setValue('profile');
                else if (segments[0] === 'home') setValue('home');
                else if (segments[0] === 'login') setValue('none');
                else if (segments[0] === 'signup') setValue('none');
                else setValue('none');
            }else{
                setValue('none');
            }
            if (segments.length === 1) {
                if (segments[0] !== 'profile') setThemeMode('dark');
            } else {
                setThemeMode('dark');
            }
        } else {
            setValue('none');
            setThemeMode('dark');
        }         
    }, []);

    const isBottomNavigationVisible =
        value === 'home' || value === 'delivery' || value === 'locker' || value === 'profile';

    const [themeMode, setThemeMode] = useState('dark');
    const toggleTheme = () => {
        setThemeMode(prevMode => (prevMode === 'light' ? 'dark' : 'light'));
    };

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <BrowserRouter>
                <div id="body">
                    <Routes>
                        <Route path="/" element={<Animation setValue={setValue} />} />
                        <Route path="/login" element={<Login setValue={setValue}/>} />
                        <Route path="/signup" element={<Signup setValue={setValue} />} />
                        <Route path="/home" element={<Home setValue={setValue} />} />
                        <Route path="/delivery" element={<Delivery setValue={setValue} />} />
                        <Route path="/deliverymap" element={<DeliveryMap setValue={setValue} />} />
                        <Route path="/locker" element={<Locker setValue={setValue} />} />
                        <Route path="/profile" element={<Profile setValue={setValue} thememode={themeMode} toggleTheme={toggleTheme} />} />
                        <Route path="/list" element={<List setValue={setValue} />}  />
                        <Route path="/success" element={<Success setValue={setValue} />} />
                        <Route path="/box" element={<Box setValue={setValue} />} />
                        <Route path="/scan" element={<Scan setValue={setValue} />} />
                        <Route path="/ai-assistant" element={<Assistant setValue={setValue} />} />
                        <Route path="/profile/about-us" element={<AboutUs setValue={setValue} />} />
                        <Route path="/profile/account" element={<Account setValue={setValue} />} />
                        <Route path="/profile/address-setting" element={<Address setValue={setValue} />} />
                        <Route path="/profile/wallet" element={<Wallet setValue={setValue}/>} />
                        <Route path="/search" element={<Search setValue={setValue} />} />
                        <Route path="/info/*" element={<Info setValue={setValue} />} />
                    </Routes>
                    {isBottomNavigationVisible && (
                        <Paper sx={{ bgcolor: themeMode === 'light' ? '#FF862E' : '#323232', position: 'fixed', top: `${topPosition}px`, borderRadius: 54, boxShadow: 1, margin: 'auto', maxWidth: '386px', left: 15, right: 15 }} >
                        <BottomNavigation
                            value={value}
                                sx={{ bgcolor: themeMode === 'light' ? '#fff' : '#323232', borderRadius: 54, padding: 0.6, boxShadow: 1, justifyContent: 'space-around', }}
                        >
                            <BottomNavigationAction
                                value="home"
                                label="HOME"
                                icon={<HomeRoundedIcon sx={{
                                    color: themeMode === 'light' ? '#D0D0D0' :'#898989', '&:hover': {
                                        color:   themeMode === 'light' ? '#FF862E' : '#32FF9D', 
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
                                        borderColor:   themeMode === 'light' ? '#FF862E' : '#32FF9D', 
                                        minWidth: 110,
                                        color:   themeMode === 'light' ? '#FF862E' : '#32FF9D', 
                                    },
                                    '&.Mui-selected svg': {
                                        color:   themeMode === 'light' ? '#FF862E' : '#32FF9D', 
                                    },
                                    '& .MuiBottomNavigationAction-label': {
                                        display: 'none', 
                                        color:   themeMode === 'light' ? '#FF862E' : '#32FF9D',  
                                        '&.Mui-selected': {
                                            display: 'block', 
                                        },
                                    },                             
                                }}
                                href="/#/home"
                                    onClick={() => { 
                                        setValue('home') 
                                        setThemeMode('dark') }}
                            />
                            <BottomNavigationAction
                                value="delivery" label="DELIVERY" icon={<LocalShippingRoundedIcon sx={{
                                        color: themeMode === 'light' ? '#D0D0D0' : '#898989', '&:hover': {
                                        color:   themeMode === 'light' ? '#FF862E' : '#32FF9D', 
                                    },
                                }} />}
                                sx={{
                                    paddingTop: 0,
                                    display: 'flex',
                                    flexDirection: 'row',
                                    borderRadius: 30,
                                    gap: 0.5,
                                    color:   themeMode === 'light' ? '#FF862E' : '#32FF9D', 
                                    '&.MuiButtonBase-root.MuiBottomNavigationAction-root': {
                                        minWidth: 60,
                                    },
                                    '&.MuiButtonBase-root.MuiBottomNavigationAction-root.Mui-selected': {
                                        border: 2,
                                        borderColor:   themeMode === 'light' ? '#FF862E' : '#32FF9D', 
                                        minWidth: 110,
                                        color:   themeMode === 'light' ? '#FF862E' : '#32FF9D', 
                                    },
                                    '&.Mui-selected svg': {
                                        color:   themeMode === 'light' ? '#FF862E' : '#32FF9D', 
                                    },
                                    '& .MuiBottomNavigationAction-label': {
                                        display: 'none',
                                        color:   themeMode === 'light' ? '#FF862E' : '#32FF9D', 
                                        '&.Mui-selected': {
                                            display: 'block',
                                        },
                                    },
                                }}
                                href="/#/delivery"
                                onClick={() => { 
                                    setValue('delivery')
                                    setThemeMode('dark')
                                 }}
                            />

                            <BottomNavigationAction
                                value="locker" label="LOCKER" icon={<WhereToVoteRoundedIcon sx={{
                                        color: themeMode === 'light' ? '#D0D0D0' : '#898989', '&:hover': {
                                        color:   themeMode === 'light' ? '#FF862E' : '#32FF9D', 
                                    }, }} />}
                                sx={{
                                    paddingTop: 0,
                                    display: 'flex',
                                    flexDirection: 'row',
                                    borderRadius: 30,
                                    gap: 0.5,
                                    color:   themeMode === 'light' ? '#FF862E' : '#32FF9D', 
                                    '&.MuiButtonBase-root.MuiBottomNavigationAction-root': {
                                        minWidth: 60,
                                    },
                                    '&.MuiButtonBase-root.MuiBottomNavigationAction-root.Mui-selected': {
                                        border: 2,
                                        borderColor:   themeMode === 'light' ? '#FF862E' : '#32FF9D', 
                                        minWidth: 110,
                                        color:   themeMode === 'light' ? '#FF862E' : '#32FF9D', 
                                    },
                                    '&.Mui-selected svg': {
                                        color:   themeMode === 'light' ? '#FF862E' : '#32FF9D', 
                                    },
                                    '& .MuiBottomNavigationAction-label': {
                                        display: 'none',
                                        color:   themeMode === 'light' ? '#FF862E' : '#32FF9D', 
                                        '&.Mui-selected': {
                                            display: 'block',
                                        },
                                    },
                                }} 
                                href="/#/locker"
                                onClick={() => { 
                                    setValue('locker')
                                    setThemeMode('dark')
                                 }}
                                />
                            <BottomNavigationAction
                                value="profile" label="PROFILE" icon={<PersonRoundedIcon sx={{
                                        color: themeMode === 'light' ? '#D0D0D0' : '#898989', '&:hover': {
                                        color:   themeMode === 'light' ? '#FF862E' : '#32FF9D', 
                                    }, }} 
                                />}  
                                sx={{
                                    paddingTop: 0,
                                    display: 'flex',
                                    flexDirection: 'row',
                                    borderRadius: 30,
                                    gap: 0.5,
                                    color:   themeMode === 'light' ? '#FF862E' : '#32FF9D', 
                                    '&.MuiButtonBase-root.MuiBottomNavigationAction-root': {
                                        minWidth: 60,
                                    },
                                    '&.MuiButtonBase-root.MuiBottomNavigationAction-root.Mui-selected': {
                                        border: 2,
                                        borderColor:   themeMode === 'light' ? '#FF862E' : '#32FF9D', 
                                        minWidth: 110,
                                        color:   themeMode === 'light' ? '#FF862E' : '#32FF9D', 
                                    },
                                    '&.Mui-selected svg': {
                                        color:   themeMode === 'light' ? '#FF862E' : '#32FF9D', 
                                    },
                                    '& .MuiBottomNavigationAction-label': {
                                        display: 'none',
                                        color:   themeMode === 'light' ? '#FF862E' : '#32FF9D', 
                                        '&.Mui-selected': {
                                            display: 'block',
                                        },
                                    },
                                }}
                                href="/#/profile"
                                onClick={() => { setValue('profile') }}
                                />                        
                        </BottomNavigation>
                    </Paper>
                    )}
                </div>
            </BrowserRouter>
        </ThemeProvider>
    );
}
