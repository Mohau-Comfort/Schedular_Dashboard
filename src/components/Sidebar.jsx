import React from 'react';
import { Link, NavLink } from 'react-router-dom'; // Importing Link and NavLink from react-router-dom for navigation
import { SiClockify } from 'react-icons/si'; // Icon for RedMPS Schedular
import { TiCancel } from 'react-icons/ti'; // Icon for cancel button
import { TooltipComponent } from '@syncfusion/ej2-react-popups'; // Tooltip component from Syncfusion
import { links } from '../data/dummy'; // Importing links data from dummy file
import { useStateContext } from '../contexts/ContextProvider'; // Importing custom hook useStateContext from ContextProvider

// Sidebar component
const Sidebar = () => {
  // Destructuring state and function from custom hook useStateContext
  const { activeMenu, setActiveMenu,currentColor,screenSize } = useStateContext();

  const handleCloseSideBar = () => {
    if (activeMenu !== undefined && screenSize <= 900) {
      setActiveMenu(false);
    }
  };

  // CSS classes for active and normal links
  const activeLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-white text-md m-2';
  const normalLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2';

  // Rendering Sidebar component
  return (
    <div className="ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10">
      {activeMenu && (
        <>
          {/* RedMPS Schedular link */}
          <Link to="/" onClick={() => setActiveMenu(false)} className="items-center gap-3 ml-3 mt-4 flex text-xl font-extrabold tracking-tight dark:text-white text-slate-900">
            <SiClockify /> <span>RedMPS Schedular</span>
          </Link>
          {/* Menu toggle button */}
          <TooltipComponent content="Menu" position="BottomCenter">
            <button type="button" onClick={() => setActiveMenu((prevActiveMenu) => !prevActiveMenu)} 
              style={{ color: currentColor }} 
              className="text-xl rounded-full p-3 hover:bg-light-gray mt-4 block md:hidden">
              <TiCancel />
            </button>
          </TooltipComponent>
        </>
      )}
      <div className="mt-10 ">
        {/* Mapping through links data */}
        {links.map((item) => (
          <div key={item.title}>
            {/* Rendering section title */}
            <p className="text-gray-400 dark:text-gray-400 m-3 mt-4 uppercase">
              {item.title}
            </p>
            {/* Mapping through links in each section */}
            {item.links.map((link) => (
              <NavLink
                to={`/${link.name}`}
                key={link.name}
                onClick={handleCloseSideBar}
                style={({ isActive }) => ({backgroundColor: isActive ? currentColor : '', })}
                className={({ isActive }) => (isActive ? activeLink : normalLink)}>
                {link.icon}
                <span className="capitalize ">{link.name}</span>
              </NavLink>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar; // Exporting Sidebar component as default
