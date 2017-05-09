/**
 * Created by korman on 01.05.17.
 */

import Config from '../../Config';
import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class CouponDetailStatus extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            redeemStatus: props.redeemStatus
        };

        console.log('Coupon detail status', this.state);
    }

    componentWillReceiveProps(props) {
        this.state = {
            redeemStatus: props.redeemStatus
        }
    }

    render(){

        if (this.state.redeemStatus != undefined) {
            if (this.state.redeemStatus == 1) {
                return (
                    <span className="msg">Active</span>
                );
            }

            if (this.state.redeemStatus == 2) {
                return (
                    <span className="msg">Expired</span>
                );
            }

            if (this.state.redeemStatus == 0) {
                return (
                    <span className="msg">Redeemed</span>
                );
            }
        } else {
            return (
                <span className="msg">...</span>
            );
        }
        // return (
        //     <Link className="get-coupon-button" to={`/coupon/redeem/${this.state.couponId}`}>
        //         You Win! Get this product!
        //     </Link>
        // );
    }
};
