import React from 'react';
import LogoSvg from './logo.svg';

const Logo = props => <div {...props} ><img src={LogoSvg} alt={'logo img'}/><span>Online Kitchen</span></div>;

export default Logo;