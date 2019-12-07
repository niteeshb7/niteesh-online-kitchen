import React, {useContext} from 'react';
import {useHistory} from "react-router-dom";
import LoginContext from "../../../context/LoginContext";
import RouterConfig from '../router-config';
import styles from './NavigationBar.scss';

const NavigationBar = () => {
    const {signInInfo} = useContext(LoginContext);
    const history = useHistory();

    return <nav className={styles.Nav}>
        <ul>
            {RouterConfig && Object.values(RouterConfig).filter(route =>
                [RouterConfig.ORDERS.path, RouterConfig.PROFILE.path].includes(route && route.path) ? signInInfo : true
            ).map(route => route &&
                <li key={route.path} onClick={() => history.push(route.path)}>{route.displayText}</li>)}
        </ul>
    </nav>;

};

export default NavigationBar;
