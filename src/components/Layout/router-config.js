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
    HOME: {path: '/', component: Home, exact: true},
    LOGIN: {path: '/login', component: Login},
    REGISTER: {path: '/register', component: Register},
    ABOUT: {path: '/about', component: About},
    CONTACT_US: {path: '/contact', component: ContactUs},
    ORDERS: {path: '/orders', component: Orders},
    PROFILE: {path: '/profile', component: Profile},
    SUPPORT: {path: '/support', component: Support}
};


export default RouterConfig;


