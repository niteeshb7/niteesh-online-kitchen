import React from 'react';
import Header from "../../Header/Header";
import NavigationBar from "../../NavigationBar/NavigationBar";

const WithLayout = ({children}) => <><Header/><NavigationBar/>{children}</>;

export default WithLayout;
