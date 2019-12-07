import React, {lazy, Suspense, useState} from 'react';
import RouterConfig from "./router-config";
import {Route, Switch} from "react-router-dom";
import Loading from "../shared/Loading/Loding";
import WithLayout from "./hoc/WithLayout/WithLayout";
import WithSignIn from "./hoc/WithSignIn/WithSignIn";

const NotFound = lazy(() => import('../views/NotFound/NotFound'));

/**
 * This function prepares the context and layout of pages,
 * If there are any page specific customizations they should be specified here
 * rather than adding custom logic inside functions.
 * For example Login and registration pages should not have any header.
 *
 * Also this function makes sure that proper context information is provided for all the components
 * For example :- Except registration page, all the routes should have access to current signin-info
 * Only login page will be allowed to edit the login info inside the context.
 * @type {Function}
 */
const prepareLayoutAndSetContextBasedOnPath = (route, currentSigninInfo, setSignInInfo) => {
    let routingComponent;
    switch (route.path) {
        case RouterConfig.LOGIN.path :
            routingComponent = (<WithSignIn setSignInInfo={setSignInInfo}>
                <route.component/>
            </WithSignIn>);
            break;

        case RouterConfig.REGISTER.path :
            routingComponent = <route.component/>;
            break;

        default:
            routingComponent = (<WithSignIn signInInfo={currentSigninInfo}>
                <WithLayout>
                    <route.component/>
                </WithLayout>
            </WithSignIn>);

    }
    return routingComponent;
};

const Layout = () => {
    const [signInInfo, setSignInInfo] = useState();

    return <Suspense fallback={<Loading/>}>
        <Switch>
            {RouterConfig && Object.values(RouterConfig)
                .map(route => <Route key={route.path} exact={route.exact}
                                     path={route.path}
                                     component={prepareLayoutAndSetContextBasedOnPath.bind(null, route, signInInfo, setSignInInfo)}/>)}
            <Route component={NotFound}/>
        </Switch>
    </Suspense>;
};

export default Layout;
