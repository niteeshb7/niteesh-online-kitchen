import {lazy} from 'react';

const Home = lazy(()=> import('../views/Home/Home'));
const About = lazy(() => import('../views/About/About'));
const Login = lazy(() => import('../views/Login/Login'));
const Register = lazy(() => import('../views/Register/Register'));

const RouterConfig = [
    {path: '/', component: Home, exact: true},
    {path:'/login', component : Login},
    {path:'/register', component: Register},
    {path: '/about', component: About}
];

export default  RouterConfig;

