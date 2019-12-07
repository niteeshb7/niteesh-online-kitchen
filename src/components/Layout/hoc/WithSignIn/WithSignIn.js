import React from 'react';
import LoginContext from "../../../../context/LoginContext";

const WithSignIn = ({signInInfo, setSignInInfo, children}) => <LoginContext.Provider
    value={{signInInfo, setSignInInfo}}>
    {children}
</LoginContext.Provider>;

export default WithSignIn;
