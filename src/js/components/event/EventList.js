/**
 * Created by korman on 01.05.17.
 */

import Config from '../Config';
import React from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

export default class CouponList extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            items: []
        }
    }

    componentDidMount() {

        const config = new Config();

        axios.get(config.baseUrl + 'api/kankan/shopper/event', {
            params: {
                method: 'LIST',
                page: this.props.page,
                items_on_page: 5
            }
        }).then(res => {

            const items = res.data.items.map(obj => obj);
            this.setState({ items });
        });
    }

    componentWillReceiveProps(props) {

        const config = new Config();

        axios.get(config.baseUrl + 'api/kankan/shopper/event', {
            params: {
                method: 'LIST',
                page: this.props.page,
                items_on_page: 5
            }
        }).then(res => {

            const items = res.data.items.map(obj => obj);
            this.setState({ items });
        });
    }

    render(){
        const config = new Config();
        const pages = [];

        for (let i = 0; i < this.state.count_pages; i++) {
            pages.push('<li><a href="#">' + i + '</a></li>');
        }

        if (this.state.items.length > 0) {
            return (

                <ul>
                    { this.state.items.map((item, index) =>
                        <li key={index}>
                            <div className="shopping">
                                <img src={item.event.product.images.length > 0 ? config.baseImagePath + 'uploads/images/' + item.event.product.images[0] : ''} className="sh"/>
                                <div className="shop-ri">
                                    <a href="#rule-popup" data-rel="popup" className="rule">
                                        <img src="images/u68.png" alt=""/>
                                        <p>Rules</p>
                                    </a>
                                    <h3>{item.event.product.name}</h3>
                                    <p>Lowest Price: ${item.lowerPrice}</p>
                                    <p className="mt15">Original Price: ${item.event.product.price}</p>
                                </div>
                            </div>
                            <div className="items">
                                <div className="item">
                                    <p>Total</p>
                                    <p>{item.event.coupon.totalQuantity }</p>
                                </div>
                                <div className="item">
                                    <p>Available</p>
                                    <p>{item.event.coupon.availableQuantity }</p>
                                </div>
                                <div className="item clearfix">
                                    <div className="col-80 lh2">
                                        Join
                                    </div>
                                    <div className="col-20">
                                        <Link className="lh2" to={`/event/detail/${item.event.id}/event_detail`}>
                                            > </Link>
                                    </div>
                                </div>
                                {/*<div class="item clearfix">*/}
                                {/*<div class="col-80">*/}
                                {/*<p>Current</p>*/}
                                {/*<p>$69.99</p>*/}
                                {/*</div>*/}
                                {/*<div class="col-20">*/}
                                {/*<a class="lh2" href="kankan_home-joined-lower_the_price__e.html"> > </a>*/}
                                {/*</div>*/}
                                {/*</div>*/}
                            </div>
                        </li>
                    )}
                </ul>
            );
        } else {
            return (
                <div>Loading...</div>
            );
        }
    }
};