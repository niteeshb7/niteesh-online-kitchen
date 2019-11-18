import React from 'react';
import styles from './Header.module.scss';
import Logo from "../../shared/Logo/Logo";
import MenuIcon from "../../shared/MenuIcon/MenuIcon";

const Header = () => <header className={styles.Header}>
    <MenuIcon className={styles.menuIcon}/>
    <Logo className={styles.logo}/>
    <img alt={'ProfilePic'} className={styles.profilePic}
         src={'https://lh3.googleusercontent.com/-iMW-SZ8iOPg/AAAAAAAAAAI/AAAAAAAAAAA/ACHi3rdJzuXOj3EML5TFTS4DL2taG_lIUQ.CMID/s192-c/photo.jpg'}/>
</header>;

export default Header;