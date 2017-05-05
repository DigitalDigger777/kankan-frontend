/**
 * Created by zhangbin on 2017/4/5.
 * 使用劵，填写联系方式  ---title
 */
import React from 'react';
export default class couponDetails extends React.Component{
    render(){
        return (
            <div>
                <div class="title">
                    <p class="t">恭喜</p>
                    <p class="b">您可以用$0元买下此产品</p>
                </div>
                <div class="pic">
                    <img src="images/u282.jpg" alt="" />
                </div>
                <div class="des"><span>Canada Goose Big water</span></div>
            </div>
        )
    }
}