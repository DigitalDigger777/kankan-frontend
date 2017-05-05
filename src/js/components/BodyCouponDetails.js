/**
 * Created by zhangbin on 2017/4/5.
 * 劵详情
 */
import React from 'react';
import CouponDetails from './couponDetails';
import CouponUserDetails from './couponUserDetails';
import indexCss from '../../css/coupon.css';
export default class BodyCouponDetails extends React.Component{
    constructor(){
        super();
        this.state={

        }
    }
    render(){
        return (
            <div class="coupon">
                <CouponDetails/>
                <CouponUserDetails id={this.props.match.params.id}/>
            </div>
        )
    }
}