import React, {useContext} from 'react';
import {useHistory} from "react-router-dom";
import LoginContext from "../../../context/LoginContext";
import RouterConfig from '../router-config';
import styles from './NavigationBar.module.scss';
import NavigationContext from "../../../context/NavigationContext";
import CloseButton from "../../shared/icons/CloseButton/CloseButton";

const NavigationBar = ({open}) => {
    const {signInInfo} = useContext(LoginContext);
    const {openNav, setOpenNav} = useContext(NavigationContext);
    const history = useHistory();

    return <nav className={[styles.Nav, openNav ? styles.open : null].join(' ')}>
        <div className={styles.closeButton}>
            <CloseButton/>
        </div>

        <ul>
            {RouterConfig && Object.values(RouterConfig).filter(route =>
                [RouterConfig.ORDERS.path, RouterConfig.PROFILE.path].includes(route && route.path) ? signInInfo : true
            ).map(route => route &&
                <li key={route.path} onClick={() => history.push(route.path)}>{route.displayText}</li>)}
        </ul>
    </nav>;

};

export default NavigationBar;
