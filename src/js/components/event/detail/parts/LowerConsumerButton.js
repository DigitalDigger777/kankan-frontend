/**
 * Created by korman on 02.05.17.
 */

import Config from '../../../Config';
import React from 'react';
import axios from 'axios';

export default class LowerConsumerButton extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            id: props.id,
            isLower: false
        };
        //alert('constructor');
        this.lowerConsumer = this.lowerConsumer.bind(this);
    }

    componentDidMount() {
        const config = new Config();
        const friendEventStore = JSON.parse(window.localStorage.getItem('friendEvent'));

        const consumerFriendId  = window.localStorage.getItem('user_id');
        const consumerId        = friendEventStore.consumerId;

        axios.get(config.baseUrl + 'api/kankan/shopper/event/is-lower', {
            params: {
                eventId: this.state.id,
                consumerId: consumerId,
                consumerFriendId: consumerFriendId
            }
        }).then(res => {
                console.log(res.data);
                let isLower = res.data.is_lower;
                this.setState({isLower:isLower});
        });
    }

    lowerConsumer() {
        alert('click');
        const config = new Config();
        const friendEventStore = JSON.parse(window.localStorage.getItem('friendEvent'));

        const consumerFriendId  = window.localStorage.getItem('user_id');
        const consumerId        = friendEventStore.consumerId;

        alert(JSON.stringify({
            eventId: this.state.id,
            consumerId: consumerId,
            consumerFriendId: consumerFriendId
        }));

        axios.post(config.baseUrl + 'api/kankan/consumer/bet', {
            eventId: this.state.id,
            consumerId: consumerId,
            consumerFriendId: consumerFriendId
        }).then(res => {

            $('#lowerPopup').modal('show');

            axios.get(config.baseUrl + 'api/kankan/shopper/event/is-lower', {
                params: {
                    eventId: this.state.id,
                    consumerId: consumerId,
                    consumerFriendId: consumerFriendId
                }
            }).then(res => {
                console.log(res.data);
                let isLower = res.data.is_lower;
                this.setState({isLower:isLower});
            });
        }).catch(error => {
            alert(JSON.stringify(error));
        });
    }



    render(){

        if (!this.state.isLower) {
            return (
                <div className="bargainEvent">
                    <h3>Lower the Price</h3>
                    <div>
                        <button type="button" onClick={this.lowerConsumer}>Lower</button>
                    </div>
                </div>
            )
        } else {
            return (
                <div></div>
            )
        }
    }
}