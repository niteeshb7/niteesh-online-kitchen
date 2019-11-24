import {lazy} from 'react';

const Home = lazy(() => import('../views/Home/Home'));
const About = lazy(() => import('../views/About/About'));
const Login = lazy(() => import('../views/Login/Login'));
const Register = lazy(() => import('../views/Register/Register'));


const RouterConfig = {
    HOME: {path: '/', component: Home, exact: true},
    LOGIN: {path: '/login', component: Login},
    REGISTER: {path: '/register', component: Register},
    ABOUT: {path: '/about', component: About}
};


export default RouterConfig;


