import React, { createContext, useContext, useState } from "react";

// Creating a context to manage state
const StateContext = createContext();

// Initial state for various settings
const initialState = {
    chat: false,
    userProfile: false,
    notification: false,
}

// ContextProvider component to manage state
export const ContextProvider = ({ children }) => {
    // State variables
    const [screenSize, setScreenSize] = useState(undefined); // State variable for screen size
    const [currentColor, setCurrentColor] = useState('#03C9D7'); // State variable for current color
    const [currentMode, setCurrentMode] = useState('Light'); // State variable for current mode (Light/Dark)
    const [themeSettings, setThemeSettings] = useState(false); // State variable for theme settings
    const [activeMenu, setActiveMenu] = useState(true); // State variable for active menu
    const [isClicked, setIsClicked] = useState(initialState); // State variable for tracking which element is clicked

    // Function to set mode (Light/Dark)
    const setMode = (e) => {
        setCurrentMode(e.target.value);
        localStorage.setItem('themeMode', e.target.value);
    };

    // Function to set color
    const setColor = (color) => {
        setCurrentColor(color);
        localStorage.setItem('colorMode', color);
    };
    
    // Function to handle click events and update state accordingly
    const handleClick = (clicked) => setIsClicked({ ...initialState, [clicked]: true });

    // Providing state values and functions to child components
    return (
        <StateContext.Provider value={{ 
            currentColor, 
            currentMode, 
            activeMenu, 
            screenSize, 
            setScreenSize, 
            handleClick, 
            isClicked, 
            initialState, 
            setIsClicked, 
            setActiveMenu, 
            setCurrentColor, 
            setCurrentMode, 
            setMode, 
            setColor, 
            themeSettings, 
            setThemeSettings 
        }}>
            {children}
        </StateContext.Provider>
    );
};

// Custom hook to access state values and functions
export const useStateContext = () => useContext(StateContext);
