/**
 * Created by korman on 01.05.17.
 */

import Config from '../Config';
import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import RedeemPopup from './parts/RedeemPopup';
import RedeemButton from './parts/RedeemButton';
import CouponDetailStatus from './parts/CouponDetailStatus';

export default class CouponDetail extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            id: props.match.params.id,
            data: null
        };

        this.changeRedeemStatus = this.changeRedeemStatus.bind(this);
    }

    componentDidMount() {
        const config = new Config();
        const consumerId = window.localStorage.getItem('user_id');

        axios.get(config.baseUrl + 'api/kankan/coupon/' + this.state.id)
            .then(res => {
                console.log(res.data);
                const data = res.data;
                // const countPages = res.data.count_pages;
                this.setState({ data });

            });

        axios.get(config.baseUrl + 'api/kankan/consumer/coupon?consumerId=' + consumerId + '&couponId=' + this.state.id)
            .then(res => {
                console.log(res);
                const redeemStatus = res.data.redeemStatus;
                this.setState({redeemStatus:redeemStatus});

            });
    }

    changeRedeemStatus(redeemStatus) {
        this.setState({redeemStatus: redeemStatus});
    }

    render() {

        console.log(this.state);
        const config = new Config();

        if (this.state.data) {
            return (
                <div data-reactroot="">
                    <RedeemPopup couponId={this.state.id} redeemStatus={this.state.redeemStatus} changeRedeemStatus={this.changeRedeemStatus}/>
                    <div className="coupon">
                        <div>
                            <h1>{this.state.data[0].product.name}</h1>
                            <div className="pic">
                                <img alt="" src={ this.state.data[0].product.images.length > 0 ? config.baseImagePath + 'uploads/images/' + this.state.data[0].product.images[0] : ''}/>
                                <div className="msg-wrap">
                                    <CouponDetailStatus redeemStatus={this.state.redeemStatus}/>
                                </div>
                            </div>
                            <div className="des">
                                {this.state.data[0].couponCode}
                            </div>
                            <div className="timer">
                                <span>Expired: {this.state.data.expireTimeFormat}</span>
                            </div>
                        </div>
                        <div>
                            <div className="explain">
                                <h3>Redeem Rule:</h3>
                                <p>{this.state.data[0].description}</p>
                                <RedeemButton redeemStatus={this.state.redeemStatus}/>
                            </div>
                        </div>
                    </div>
                </div>
            );
        } else {
            return (
                <div>Loading...</div>
            );
        }
    }
}