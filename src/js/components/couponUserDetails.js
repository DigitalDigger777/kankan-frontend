/**
 * Created by zhangbin on 2017/4/5.
 * 劵针对使用者详情
 */
import React from 'react';
import {Link} from 'react-router-dom';
export default class couponUserDetails extends React.Component{
    constructor(){
        super();
    }
    render(){
        console.log(this.props.id);
        return (
            <div>
                <div class="explain">
                    <h3>销券须知：</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget.</p>
                    <div class="btn">
                        <Link class="item" to={`/contact${this.props.id}`} target="_blank">使用</Link>
                    </div>
                    <div class="des">按此按钮会作废此券。仅供商户使用！</div>
                </div>
            </div>
        )
    }
}