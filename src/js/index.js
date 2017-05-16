import Config from './components/Config';
import React from 'react';
import ReactDOM from 'react-dom';
import BodyCoupon from './components/coupon/BodyCoupon';

import BodyEvent from './components/event/BodyEvent';
import BodyEventDetail from './components/event/detail/BodyEventDetail';
import CouponDetail from './components/coupon/CouponDetail';
import CouponRedeem from './components/coupon/CouponRedeem';
import Login from './components/user/Login';


import { Router } from 'react-router';
import { HashRouter,Route, hashHistory } from 'react-router-dom'
import axios from 'axios';
import BodyEventDetailFriend from './components/event/detail/BodyEventDetailFriend';

export default class Index extends React.Component{
    constructor(){
        super();
    }
    render(){

        if (/\?user=([\w\W]+)/.exec(window.location.search)) {
            let matchUserAndState = /\?user=([\w\W]+)\&state=([0-9:]+)/.exec(window.location.search);
            let user = JSON.parse(decodeURIComponent(matchUserAndState[1]));
            let state = matchUserAndState[2];
            let eventId     = 0;
            let consumerId  = 0;

            if (state != 0) {
                let splitState  = state.split(':');
                eventId     = splitState[0];
                consumerId  = splitState[1];
                let friendEvent = JSON.stringify({
                    eventId: eventId,
                    consumerId: consumerId
                });

                window.localStorage.setItem('friendEvent', friendEvent);
                // console.log(user, state, eventId, consumerId);
            }

            window.localStorage.setItem('user', JSON.stringify(user));


            const config = new Config();
            axios.post(config.baseUrl + 'api/kankan/consumer', {
                snData: user,
                snUnionId: user.unionid,
                status: 1
            }).then( res => {

                window.localStorage.setItem('user_id', res.data.id);

                if (state == 0) {
                    window.location = '/';
                } else {
                    let config = new Config();
                    let baseFrontUrl = config.baseFrontUrl;

                    window.location.href = baseFrontUrl + '#/event/detail-friend/' + eventId + '/event_detail';
                }
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
                    <Route exact path="/event/detail/:id/:tab" component={BodyEventDetail}></Route>
                    <Route exact path="/event/detail-friend/:id/:tab" component={BodyEventDetailFriend}></Route>

                    <Route path="/coupon/detail/:id" component={CouponDetail}></Route>
                    <Route exact path="/coupon/redeem/:id" component={CouponRedeem}></Route>
                    <Route exact path="/login" component={Login}></Route>
                </div>
            </HashRouter>
        )
    }
}
ReactDOM.render(<Index/>,document.getElementById('mainContainer'));