/**
 * Created by korman on 05.05.17.
 */

import React from 'react';

import { Link } from 'react-router-dom';

export default class BodyEvent extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount(props) {
        //console.log('test', props);
    }


    render(){
        return (
            <div className="coupon">
                <div className="btn">
                    <a href="https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxfca7a5406897fa7b&redirect_uri=http://kuaikan.ppcgclub.com/open-wechat/get-access-token&response_type=code&scope=snsapi_login&state=0#wechat_redirect" className="item ui-link">Login with wechat</a>
                </div>
            </div>
        )
    }
}