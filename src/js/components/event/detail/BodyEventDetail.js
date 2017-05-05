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

// import ProductImage from './ProductImage';
// import ProductPrice from './ProductPrice';
// import CurrentPrice from './CurrentPrice';
// import LowerPriceTabs from './LowerPriceTabs';
// import EventBargain from './EventBargain';

// import BargainCss from '../../../../css/bargain.css';

export default class BodyEventDetail extends React.Component{
    constructor(props) {
        super(props);
        console.log(props.match.params.tab);
        this.state = {
            id: props.match.params.id,
            tab: props.match.params.tab,
            data: {}
        };
    }

    componentDidMount() {
        const config = new Config();
        //
        axios.get(config.baseUrl + 'api/kankan/shopper/event/' + this.state.id)
            .then(res => {
                // console.log(res.data);
                const data = res.data;
                // const countPages = res.data.count_pages;
                this.setState({ data });

            });
    }

    componentWillReceiveProps(props) {
        console.log(props.match.params.tab);
        this.state = {
            id: props.match.params.id,
            tab: props.match.params.tab,
            data: {}
        };
    }



    render(){

        let tab = <EventDetail/>;

        if (this.state.tab == 'event_detail') {
            tab = <EventDetail/>;
        }

        if (this.state.tab == 'lower_price') {
            tab = <LowerPrice/>;
        }

        if (this.state.tab == 'record_price') {
            tab = <RecordPrice/>;
        }

        return (
            // <div className="bargain">
            //     <ProductImage/>
            //     <ProductPrice/>
            //     <CurrentPrice/>
            //     <LowerPriceTabs/>
            //     {/*<EventBargain/>*/}
            // </div>
            <div data-reactroot="">
                <div className="bargain">
                    <div className="banner">
                        <img alt="" src="images/u282.jpg" />
                            <p>Event Closed：1 Day 16 Hours 27 Mins 12 Seconds</p>
                    </div>
                    <div>
                        <h3 className="title">Canada Goose Big water</h3>
                        <div className="items">
                            <ul>
                                <li><span>Original Price：$74,99</span><span>Lowest Price：$0.00</span></li>
                                <li><span>Total Quantity：20</span><span>Available Quantity：10</span></li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <div className="userBox">
                            <h3 className="top"><img alt="" src="images/u308.png" />Wechat Nickname</h3>
                            <p className="c">Current price：<span>$61.00</span></p>
                            <p className="c">Please help your friend to lower the price. First click below sponsor to lower the price. Then you can lower it by yourself.</p>
                        </div>
                    </div>
                    <div>
                        <div className="bargainSwitch">
                            <div className="titles">
                                {/*<a href="kankan_home-friend_lower-event_detail__e.html"><span className="item on">Event Detail</span></a>*/}
                                <Link to={`/event/detail/${this.state.id}/event_detail`}><span className={`item ${this.state.tab == 'event_detail' ? 'on' : ''}`}>Event Detail</span></Link>
                                <Link to={`/event/detail/${this.state.id}/lower_price`}><span className={`item ${this.state.tab == 'lower_price' ? 'on' : ''}`}>Lower the price</span></Link>
                                <Link to={`/event/detail/${this.state.id}/record_price`}><span className={`item ${this.state.tab == 'record_price' ? 'on' : ''}`}>Price Record</span></Link>
                            </div>
                            {tab}
                        </div>
                    </div>
                </div>
                <div className="footer clearfix">
                    <div className="col-50">
                        <div className="col-50 footer-col">
                            <p>Origial:</p>
                            <p>$74.93</p>
                        </div>
                        <div className="col-50 footer-col">
                            <p>Lowest:</p>
                            <p className="orange">$0.00</p>
                        </div>
                    </div>
                    <div className="col-50 text-right">
                        <a href="kankan_home-joined-lower_the_price__e.html">
                            <button className="main-btn">Join</button>
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}
