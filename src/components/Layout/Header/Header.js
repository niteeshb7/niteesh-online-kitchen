import React, {useContext} from 'react';
import styles from './Header.module.scss';
import Logo from "../../shared/Logo/Logo";
import Menu from "../../shared/icons/Menu/Menu";
import LoginContext from "../../../context/LoginContext";
import UserIcon from "../../shared/icons/User/User";

const Header = () => {
    const {signInInfo} = useContext(LoginContext);
    return <header className={styles.Header}>
        <Menu className={styles.menuIcon}/>
        <Logo className={styles.logo}/>
        {signInInfo ? <img alt={'ProfilePic'} className={styles.profilePic}
                           src={'https://lh3.googleusercontent.com/-iMW-SZ8iOPg/AAAAAAAAAAI/AAAAAAAAAAA/ACHi3rdJzuXOj3EML5TFTS4DL2taG_lIUQ.CMID/s192-c/photo.jpg'}/>
            : <UserIcon className={styles.userIcon}/>}
    </header>;
};

export default Header;
