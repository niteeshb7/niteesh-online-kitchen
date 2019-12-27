import React, {useContext} from 'react';
import {useHistory} from "react-router-dom";
import LoginContext from "../../../context/LoginContext";
import RouterConfig from '../router-config';
import styles from './NavigationBar.module.scss';
import NavigationContext from "../../../context/NavigationContext";

const NavigationBar = () => {
    const {signInInfo} = useContext(LoginContext);
    const {openNav, setNavOpen} = useContext(NavigationContext);
    const history = useHistory();
    const navClasses = [styles.Nav, openNav === true ? styles.shown : null];
    const navItemsContainerClasses = [styles.NavItemsContainer, openNav === true ? styles.open : openNav === false ? styles.close : null];

    return <nav
        className={navClasses.join(' ')}>
        <div className={navItemsContainerClasses.join(' ')}>
            <ul>
                {RouterConfig && Object.values(RouterConfig).filter(route =>
                    [RouterConfig.ORDERS.path, RouterConfig.PROFILE.path].includes(route && route.path) ? signInInfo : true
                ).map(route => route &&
                    <li key={route.path} onClick={() => {
                        setNavOpen(null);
                        history.push(route.path);
                    }}><span>{route.displayText}</span></li>)}
            </ul>
        </div>
    </nav>;

};

export default NavigationBar;
