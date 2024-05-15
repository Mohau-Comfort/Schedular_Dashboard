// App.js
import React, {useEffect} from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import {Navbar, Footer, Sidebar, ThemeSettings} from './components';
import { Dashboard,DBA_Roster, Shift_Roster, Calendar, Stacked, Kanban, Line, Area, Bar, Pie, Financial, ColorMapping, Notification, LogOut } from './pages';
import './App.css';
import { useStateContext } from './contexts/ContextProvider';

const App = () => {
    // Function for setting dark mode and light
    const { setCurrentColor, setCurrentMode, currentMode, activeMenu, currentColor, themeSettings, setThemeSettings } = useStateContext();

    useEffect(() => {
        const currentThemeColor = localStorage.getItem('colorMode');
        const currentThemeMode = localStorage.getItem('themeMode');
        if (currentThemeColor && currentThemeMode) {
          setCurrentColor(currentThemeColor);
          setCurrentMode(currentThemeMode);
        }
      }, []);

    return (  

        <div className={currentMode === 'Dark' ? 'dark' : ''}>
        <BrowserRouter>
        <Routes>
           </Routes>
            <div className='flex relative dark:bg-main-dark-bg'>
                <div className='fixed right-4 bottom-4' style={{zIndex:'1000'}}>
                    <TooltipComponent content='settings' position='top'>
                    <button type="button" onClick={() => setThemeSettings(true)} style={{ background: currentColor, borderRadius: '50%' }}
                    className="text-3xl text-white p-3 hover:drop-shadow-xl hover:bg-light-gray">
                            <FiSettings />
                        </button>
                    </TooltipComponent>
                </div>

                {/* This is where the dark mode and light mode function is implemented */}
                {activeMenu ? (
                    <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white ">
                        <Sidebar />
                    </div>
                ) : (
                    <div className="w-0 dark:bg-secondary-dark-bg">
                       <Sidebar />
                    </div>
                )}

                <div className={ activeMenu ? 'dark:bg-main-dark-bg  bg-main-bg min-h-screen md:ml-72 w-full  '
                : 'bg-main-bg dark:bg-main-dark-bg  w-full min-h-screen flex-2 ' } >
                    <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full ">
                        <Navbar />
                    </div>
                    {/* Setting up the routes to different pages on the web app */}
                    <div>

                    {themeSettings && (<ThemeSettings />)}
                    <Routes> 

                        {/* Home page of Dashboard */}
                        <Route path='/' element={<Dashboard />} /> 
                        <Route path="/Dashboard" element={(<Dashboard />)} />

                        {/* Pages */}
                        <Route path='/DBA-Team' element={<DBA_Roster/>} />
                        <Route path='/Shift-Roster' element={<Shift_Roster/>} />

                        {/* Apps within the Dashboard */}
                        <Route path='/kanban' element={<Kanban/>} />
                        <Route path='/Notification-editor' element={<Notification/>} />
                        <Route path='/Calendar' element={<Calendar/>} />

                        {/* Charts within the Dashboard */}
                        <Route path='/line' element={<Line/>} />
                        <Route path='/area' element={<Area/>} />
                        <Route path='/bar' element={<Bar/>} />
                        <Route path='/pie' element={<Pie/>} />

                        {/* Log Out */}
                        <Route path='/LogOut' element={<Dashboard/>} />
                    </Routes>
                </div>
                <Footer />
                </div>
            </div>
        </BrowserRouter>
    </div>
    );
}

export default App;
