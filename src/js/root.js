import React from 'react';
import ReactDOM from 'react-dom';
import {
    HashRouter,
    Route,
    Link
} from 'react-router-dom';

import BodyEvent from './components/event/BodyEvent';
import EventList from './components/event/EventList';
import CouponList from './components/coupon/CouponList';

const Root = () => (
    <HashRouter>
        <div>
            <BodyEvent/>
            <Route path="/list" component={EventList}/>
            <Route path="/coupon/:page" component={CouponList}/>
        </div>
    </HashRouter>
);

export default Root;
ReactDOM.render(<Root/>,document.getElementById('mainContainer'));