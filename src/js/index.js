import Config from './components/Config';
import React from 'react';
import ReactDOM from 'react-dom';
import BodyCoupon from './components/coupon/BodyCoupon';

import BodyEvent from './components/event/BodyEvent';
import BodyEventDetail from './components/event/detail/BodyEventDetail';
import CouponDetail from './components/coupon/CouponDetail';
import CouponRedeem from './components/coupon/CouponRedeem';
import Login from './components/user/Login';

// import BodyContact from './components/BodyContact';
import { Router } from 'react-router';
import { HashRouter,Route, hashHistory } from 'react-router-dom'
import axios from 'axios';

export default class Index extends React.Component{
    constructor(){
        super();
    }
    render(){

        if (/\?user=([\w\W]+)/.exec(window.location.search)) {
            var user = JSON.parse(decodeURIComponent(/\?user=([\w\W]+)/.exec(window.location.search)[1]));
            window.localStorage.setItem('user', JSON.stringify(user));

            const config = new Config();
            axios.post(config.baseUrl + 'api/kankan/consumer', {
                snData: user,
                snUnionId: user.unionid,
                status: 1
            }).then( res => {

                window.localStorage.setItem('user_id', res.data.id);
                window.location = '/';
            });
        }

        const userJsonStr = window.localStorage.getItem('user');

        if (!userJsonStr) {
            return (
                <Login/>
            )
        }
        //console.log('root');

        return (

            <HashRouter history={hashHistory}>
                <div>
                    <Route exact path="/" component={BodyEvent}></Route>
                    <Route exact path="/event/:page" component={BodyEvent}></Route>
                    <Route exact path="/coupon/:page" component={BodyCoupon}></Route>
                    <Route path="/event/detail/:id/:tab" component={BodyEventDetail}></Route>
                    <Route path="/coupon/detail/:id" component={CouponDetail}></Route>
                    <Route exact path="/coupon/redeem/:id" component={CouponRedeem}></Route>
                    <Route exact path="/login" component={Login}></Route>
                </div>
            </HashRouter>
        )
    }
}
ReactDOM.render(<Index/>,document.getElementById('mainContainer'));