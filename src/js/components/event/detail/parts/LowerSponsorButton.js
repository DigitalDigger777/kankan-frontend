/**
 * Created by korman on 02.05.17.
 */

import Config from '../../../Config';
import React from 'react';
import axios from 'axios';
import HelpPanel from './HelpPanel';

export default class LowerSponsorButton extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            id: props.id,
            sponsorId: props.sponsorId,
            bets: props.bets
        };

        this.lowerSponsor = this.lowerSponsor.bind(this);
    }

    lowerSponsor(e) {

        const config = new Config();
        const friendEventStore = JSON.parse(window.localStorage.getItem('friendEvent'));

        const consumerFriendId  = window.localStorage.getItem('user_id');
        const consumerId        = friendEventStore.consumerId;

        axios.post(config.baseUrl + 'api/kankan/consumer/bet', {
            eventId: this.state.id,
            sponsorId: this.state.sponsorId,
            consumerId: consumerId,
            consumerFriendId: consumerFriendId
        }).then(res => {
            console.log(res);
            $('#lowerPopup').modal('show');
        });
    }


    render(){

        if (!this.state.bets.length > 0) {
            return (
                <button type="button" onClick={(e) => this.lowerSponsor(e)}>
                    Lower
                </button>
            )
        } else {
            return (
                <span></span>
            )
        }
    }
}