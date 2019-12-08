import React, {useContext} from 'react';
import {useHistory} from "react-router-dom";
import LoginContext from "../../../context/LoginContext";
import RouterConfig from '../router-config';
import styles from './NavigationBar.module.scss';
import NavigationContext from "../../../context/NavigationContext";
import CloseButton from "../../shared/icons/CloseButton/CloseButton";

const NavigationBar = () => {
    const {signInInfo} = useContext(LoginContext);
    const {openNav, setNavOpen} = useContext(NavigationContext);
    const history = useHistory();
    const classes = [styles.Nav, openNav === true ? styles.open : openNav === false ? styles.close : null];

    return <nav
        className={classes.join(' ')}>
        <div className={styles.closeButton} onClick={() => setNavOpen(false)}>
            <CloseButton/>
        </div>

        <ul>
            {RouterConfig && Object.values(RouterConfig).filter(route =>
                [RouterConfig.ORDERS.path, RouterConfig.PROFILE.path].includes(route && route.path) ? signInInfo : true
            ).map(route => route &&
                <li key={route.path} onClick={() => {
                    setNavOpen(null);
                    history.push(route.path);
                }}><span>{route.displayText}</span></li>)}
        </ul>
    </nav>;

};

export default NavigationBar;
