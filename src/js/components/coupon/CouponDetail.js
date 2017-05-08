/**
 * Created by korman on 01.05.17.
 */

import Config from '../Config';
import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import RedeemPopup from './parts/RedeemPopup';

export default class CouponDetail extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            id: props.match.params.id,
            data: null
        };

        this.showRedeemPopup = this.showRedeemPopup.bind(this);
    }

    componentDidMount() {
        const config = new Config();
        //
        axios.get(config.baseUrl + 'api/kankan/coupon/' + this.state.id)
            .then(res => {
                console.log(res.data);
                const data = res.data;
                // const countPages = res.data.count_pages;
                this.setState({ data });

            });
    }

    showRedeemPopup() {
        //$('#redeemPopup').fadeIn();
        const config = new Config();
        const consumerId = window.localStorage.getItem('user_id');
        const couponId = this.state.id;

        axios.post(config.baseUrl + 'api/kankan/coupon/redeem', {
            consumerId: consumerId,
            couponId: couponId
        }).then(res => {
            alert('Redeem');
        });

    }

    render() {

        console.log(this.state);
        const config = new Config();

        if (this.state.data) {
            return (
                <div data-reactroot="">
                    <RedeemPopup/>
                    <div className="coupon">
                        <div>
                            <h1>{this.state.data[0].product.name}</h1>
                            <div className="pic">
                                <img alt="" src={ this.state.data[0].product.images.length > 0 ? config.baseImagePath + 'uploads/images/' + this.state.data[0].product.images[0] : ''}/>
                                <div className="text-center btn-wrap">
                                    <Link className="get-coupon-button" to={`/coupon/redeem/${this.state.id}`}>
                                        You Win! Get this product!
                                    </Link>
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
                                <div className="btn">
                                    <button className="item" onClick={this.showRedeemPopup}>
                                        Redeem
                                    </button>
                                </div>
                                <div className="des">
                                    This button is only for machant use!
                                </div>
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