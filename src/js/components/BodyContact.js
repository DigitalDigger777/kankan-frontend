/**
 * Created by zhangbin on 2017/4/5.
 * 使用劵，填写联系方式
 */
import React from 'react';
import ContacTitle from './contactTitle';
import ContactForm from './contactForm';
import indexCss from '../../css/coupon.css';
export default class BodyCouponDetails extends React.Component{
    render(){
        return (
            <div class="coupon">
                <ContacTitle/>
                <ContactForm/>
            </div>
        )
    }
}