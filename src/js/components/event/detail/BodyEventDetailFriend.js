/**
 * Created by korman on 02.05.17.
 */

import Config from '../../Config';
import React from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import EventDetail from './lowerPriceTabs/EventDetail';
import LowerPrice from './lowerPriceTabs/LowerPrice';
import RecordPrice from './lowerPriceTabs/RecordPrice';
import JoinPanel from './parts/JoinPanel';
import JoinPopup from './parts/JoinPopup';
import LowerPopup from './parts/LowerPopup';
import LowerConsumerButton from './parts/LowerConsumerButton';
// import jWeixin from './is';

export default class BodyEventDetailFriend extends React.Component{
    constructor(props) {
        super(props);
        console.log(props.match.params.tab);

        this.state = {
            id: props.match.params.id,
            tab: props.match.params.tab,
            data: null,
            wxReady: false
        };
    }

    componentDidMount() {
        const config = new Config();
        const consumerId = window.localStorage.getItem('user_id');

        axios.get(config.baseUrl + 'api/kankan/shopper/event/' + this.state.id)
            .then(res => {
                console.log(res.data);
                const data = res.data;
                // const countPages = res.data.count_pages;
                this.setState({ data });

            });

        axios.get(config.baseUrl + 'api/kankan/shopper/event/is-joined?eventId=' + this.state.id + '&consumerId=' + consumerId)
            .then(res => {
                console.log(res.data);
                this.setState({
                    isJoined: res.data.is_joined
                });
            });
    }

    componentWillReceiveProps(props) {

        this.state = {
            id: props.match.params.id,
            tab: props.match.params.tab,
            data: this.state.data
        };
    }

    render(){
        const config = new Config();

        if (this.state.data) {
            let tab = <EventDetail description={this.state.data.description} />;

            if (this.state.tab == 'event_detail') {
                tab = <EventDetail description={this.state.data.description} />;
            }

            if (this.state.tab == 'lower_price') {
                tab = <LowerPrice sponsors={this.state.data.sponsors} id={this.state.id}/>;
            }

            if (this.state.tab == 'record_price') {
                tab = <RecordPrice bets={this.state.data.bets }/>;
            }

            const user = JSON.parse(window.localStorage.getItem('user'));

            return (
                <div>
                    <JoinPopup/>
                    <LowerPopup/>
                    <div className="bargain">
                        <div className="banner" style={{textAlign: "center"}}>
                            <img src={ this.state.data.product.images.length > 0 ? config.baseImagePath + 'uploads/images/' + this.state.data.product.images[0] : ''} />
                            <p>Event Closed：1 Day 16 Hours 27 Mins 12 Seconds</p>
                        </div>
                        <div>
                            <h3 className="title">{ this.state.data.product.name}</h3>
                            <div className="items">
                                <ul>
                                    <li><span>Original Price：${ this.state.data.product.price }</span><span>Lowest Price：$0.00</span></li>
                                    <li>
                                        <span>Total Quantity：{this.state.data.totalQuantity}</span>
                                        <span>Available Quantity：{this.state.data.availableQuantity}</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div>
                            <div className="userBox">
                                <h3 className="top"><img alt="" src={user.headimgurl} />{ user.nickname }</h3>
                                <p className="c">Current price：<span>${ this.state.data.bets[this.state.data.bets.length - 1].currentPrice }</span></p>
                                <p className="c">Please help your friend to lower the price. First click below sponsor to lower the price. Then you can lower it by yourself.</p>
                            </div>
                        </div>
                        <div>
                            <div className="bargainSwitch">
                                <div className="titles">
                                    {/*<a href="kankan_home-friend_lower-event_detail__e.html"><span className="item on">Event Detail</span></a>*/}
                                    <Link to={`/event/detail-friend/${this.state.id}/event_detail`}><span className={`item ${this.state.tab == 'event_detail' ? 'on' : ''}`}>Event Detail</span></Link>
                                    <Link to={`/event/detail-friend/${this.state.id}/lower_price`}><span className={`item ${this.state.tab == 'lower_price' ? 'on' : ''}`}>Lower the price</span></Link>
                                    <Link to={`/event/detail-friend/${this.state.id}/record_price`}><span className={`item ${this.state.tab == 'record_price' ? 'on' : ''}`}>Price Record</span></Link>
                                </div>
                                {tab}
                            </div>
                        </div>
                        <LowerConsumerButton id={this.state.id} />
                    </div>
                    <JoinPanel eventId={this.state.id} product={this.state.data.product}  isJoined={this.state.isJoined }/>
                </div>
            )
        } else {
            return <div>Loading...</div>
        }
    }
}
