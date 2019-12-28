import {lazy} from 'react';
import HomeIcon from '../shared/icons/Home/Home';
import LoginIcon from '../shared/icons/Login/Login';
import SignUpIcon from "../shared/icons/SignUp/SignUp";
import AboutIcon from "../shared/icons/About/About";

const Home = lazy(() => import('../views/Home/Home'));
const About = lazy(() => import('../views/About/About'));
const Login = lazy(() => import('../views/Login/Login'));
const Register = lazy(() => import('../views/Register/Register'));
const ContactUs = lazy(() => import('../views/ContactUs/ContactUs'));
const Orders = lazy(() => import('../views/Orders/Orders'));
const Profile = lazy(() => import('../views/Profile/Profile'));
const Support = lazy(() => import('../views/Support/Support'));

const RouterConfig = {
    HOME: {path: '/', component: Home, exact: true, displayText: 'Home', linkIcon: HomeIcon},
    LOGIN: {path: '/login', component: Login, displayText: 'Login', linkIcon: LoginIcon},
    REGISTER: {path: '/register', component: Register, displayText: 'Sign Up', linkIcon: SignUpIcon},
    ABOUT: {path: '/about', component: About, displayText: 'About', linkIcon: AboutIcon},
    CONTACT_US: {path: '/contact', component: ContactUs, displayText: 'Contact us', linkIcon: HomeIcon},
    ORDERS: {path: '/orders', component: Orders, displayText: 'Orders', linkIcon: HomeIcon},
    PROFILE: {path: '/profile', component: Profile, displayText: 'Profile', linkIcon: HomeIcon},
    SUPPORT: {path: '/support', component: Support, displayText: 'Support', linkIcon: HomeIcon}
};

export default RouterConfig;


