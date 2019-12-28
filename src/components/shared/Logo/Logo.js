import React from 'react';
import LogoSvg from './logo.svg';
import LogoText from './Onilne-kitchen-text-logo.svg';

const Logo = props => <div {...props} ><img src={LogoSvg} alt={'logo img'}/>
    <div><img alt={'logo text'} src={LogoText}/></div>
</div>;

export default Logo;
