/**
 * Created by korman on 01.05.17.
 */
import Config from '../Config';
import React from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import CouponStatus from './parts/CouponStatus';

export default class CouponList extends React.Component{
    constructor(props){
        super(props);
        console.log('coupon construct', props);
        this.state = {
            items: []
        }
    }

    componentDidMount() {
        const config = new Config();
        const consumerId = window.localStorage.getItem('user_id');

        axios.get(config.baseUrl + 'api/kankan/coupon', {
            params: {
                method: 'LIST',
                page: this.props.page,
                items_on_page: 5,
                consumerId: consumerId
            }
        }).then(res => {

            const items = res.data.items.map(obj => obj);
            this.setState({ items });
        });
    }

    componentWillReceiveProps(props) {
        const config = new Config();
        const consumerId = window.localStorage.getItem('user_id');

        axios.get(config.baseUrl + 'api/kankan/coupon', {
            params: {
                method: 'LIST',
                page: this.props.page,
                items_on_page: 5,
                consumerId: consumerId
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

        return (
            <ul>
                { this.state.items.map((item, index) =>
                    <li key={index}>
                        <div className="shopping">
                            <img className="sh" src={item.coupon.product.images.length > 0 ? config.baseImagePath + 'uploads/images/' + item.coupon.product.images[0] : ''} />
                                <span className="detail">
                                    <Link className="item" to={`/coupon/detail/${item.coupon.id}`}>
                                        Detail
                                        <span className="arrow">&gt;</span>
                                    </Link>
                                </span>
                                <div className="shop-ri">
                                    <h3>{item.coupon.product.name}</h3>
                                    <p>Final Buy Price: ${item.coupon.couponPrice}</p>
                                    <p className="mt15">Expired: {item.expireTimeFormat}</p>
                                </div>
                        </div>
                        <CouponStatus status={item.coupon.winCoupons[0].redeemStatus} />
                    </li>
                )}
            </ul>
        )
    }
};
