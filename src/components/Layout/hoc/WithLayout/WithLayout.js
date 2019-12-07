import React from 'react';
import Header from "../../Header/Header";
import NavigationBar from "../../NavigationBar/NavigationBar";
import NavigationContext from "../../../../context/NavigationContext";

const WithLayout = ({children, openNav, setNavOpen}) => <NavigationContext.Provider
    value={{openNav, setNavOpen}}><Header/><NavigationBar/>{children}</NavigationContext.Provider>;

export default WithLayout;
