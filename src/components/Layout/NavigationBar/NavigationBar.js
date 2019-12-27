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
    const navClasses = [styles.Nav];
    const navItemsContainerClasses = [styles.NavItemsContainer];

    /*Null scenario is not explicitly handled here on purpose,
    otherwise I also know it looks stupid, but I dont want to do anything if no value is assigned
    i.e. when component is fist initialized */
    if (openNav === true) {
        navClasses.push(styles.shown);
        navItemsContainerClasses.push(styles.open);
    } else if (openNav === false) {
        navClasses.push(styles.hidden);
        navItemsContainerClasses.push(styles.close);
    }

    return <nav
        className={navClasses.join(' ')} onClick={e => e.currentTarget === e.target ? setNavOpen(false) : null}>
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
