import React, {lazy, Suspense} from 'react';
import RouterConfig from "./router-config";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Loading from "../shared/Loading/Loding";
import Header from "./Header/Header";
const NotFound = lazy(() => import('../views/NotFound/NotFound'));


const Layout = () => <div>
    <Header />
    <Router>
        <Suspense fallback={<Loading/>}>
            <Switch>
                {RouterConfig && RouterConfig.map && RouterConfig.map(route => <Route key={route.path} exact={route.exact}
                                                                                      path={route.path}
                                                                                      component={route.component}/>)}
                <Route component={NotFound}/>
            </Switch>
        </Suspense>
    </Router>
</div>;

export default Layout;