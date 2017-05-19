/**
 * Created by korman on 02.05.17.
 */

import Config from '../../../Config';
import React from 'react';
import axios from 'axios';
import HelpPanel from './HelpPanel';

export default class JoinPanel extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            eventId: props.eventId,
            product: props.product != undefined ? props.product : null,
            isJoined: props.isJoined
        };
        this.joinConsumer = this.joinConsumer.bind(this);
        console.log(this.state);
    }

    joinConsumer() {

        const config = new Config();
        const consumerId = window.localStorage.getItem('user_id');

        axios({
            method: 'post',
            url: config.baseUrl + 'api/kankan/shopper/event/join-consumer',
            data: {
                eventId: this.state.eventId,
                consumerId: consumerId
            }
        }).then( res => {

            $('#joinPopup').modal('show');
            if (res.data.message != undefined && res.data.message == '') {

                this.setState({
                    isJoined: true
                });

            }


            console.log(this.state);
        });
    }

    render(){

        if (!this.state.isJoined) {
            return (
                <div className="footer clearfix">
                    <div className="col-50">
                        <div className="col-50 footer-col">
                            <p>Origial:</p>
                            <p>${this.state.product.price}</p>
                        </div>
                        <div className="col-50 footer-col">
                            <p>Lowest:</p>
                            <p className="orange">$0.00</p>
                        </div>
                    </div>
                    <div className="col-50 text-right">
                        <button className="main-btn" onClick={this.joinConsumer}>Join</button>
                    </div>
                </div>
            )
        } else {
            return (
                <HelpPanel eventId={this.state.eventId} />
            )
        }
    }
}