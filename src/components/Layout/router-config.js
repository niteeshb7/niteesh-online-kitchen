import {lazy} from 'react';

const Home = lazy(() => import('../views/Home/Home'));
const About = lazy(() => import('../views/About/About'));
const Login = lazy(() => import('../views/Login/Login'));
const Register = lazy(() => import('../views/Register/Register'));
const ContactUs = lazy(() => import('../views/ContactUs/ContactUs'));
const Orders = lazy(() => import('../views/Orders/Orders'));
const Profile = lazy(() => import('../views/Profile/Profile'));
const Support = lazy(() => import('../views/Support/Support'));

const RouterConfig = {
    HOME: {path: '/', component: Home, exact: true, displayText: 'Home'},
    LOGIN: {path: '/login', component: Login, displayText: 'Login'},
    REGISTER: {path: '/register', component: Register, displayText: 'Sign Up'},
    ABOUT: {path: '/about', component: About, displayText: 'About'},
    CONTACT_US: {path: '/contact', component: ContactUs, displayText: 'Contact us'},
    ORDERS: {path: '/orders', component: Orders, displayText: 'Orders'},
    PROFILE: {path: '/profile', component: Profile, displayText: 'Profile'},
    SUPPORT: {path: '/support', component: Support, displayText: 'Support'}
};

export default RouterConfig;


