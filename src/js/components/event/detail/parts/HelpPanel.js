/**
 * Created by korman on 02.05.17.
 */

import React from 'react';
export default class HelpPanel extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            eventId: props.eventId,
            userId: window.localStorage.getItem('user_id')
        }
    }

    render(){
        return (
            <div className="footer clearfix">
                <div className="col-50">
                    <a href="#">Ask Help!</a>
                </div>
                <div className="col-50 soc">
                    <a href={`http://kuaikan.ppcgclub.com/api/kankan/shopper/event/generate-qr?eventId=${this.state.eventId}:${this.state.userId}`}>
                        <img src="images/ico-1.png" alt="" />
                    </a>
                    <a href={`weixin://dl/help`}>
                        <img src="images/ico-2.png" alt="" />
                    </a>
                </div>
            </div>
        )
    }
}