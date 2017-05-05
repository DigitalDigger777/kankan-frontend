/**
 * Created by zhangbin on 2017/4/5.
 * 使用劵，填写联系方式   ---表单
 */
import React from 'react';
export default class couponDetails extends React.Component{
    render(){
        return (
            <div class="from">
                <h3>联系信息：</h3>
                <div class="box">
                    <ul>
                        <li>
                            <label>姓：</label>
                            <input type="text" placeholder="您的姓" />
                        </li>
                        <li>
                            <label>名：</label>
                            <input type="text" placeholder="您的名" />
                        </li>
                        <li>
                            <label>手机：</label>
                            <input type="text" placeholder="输入您常用的手机" />
                        </li>
                        <li>
                            <label>地址：</label>
                            <input type="text" placeholder="仅限大温地区" />
                        </li>
                        <li>
                            <label>城市：</label>
                            <input type="text" placeholder="仅限大温地区" />
                        </li>
                        <li>
                            <label>省：</label>
                            <p>BC</p>
                        </li>
                        <li>
                            <label>Post Code：</label>
                            <input type="text" placeholder="仅限大温地区" />
                        </li>
                        <li>
                            <label>Email：</label>
                            <input type="text" placeholder="输入您常用的Email" />
                        </li>
                    </ul>
                </div>
                <div class="notice">
                    <input type="checkbox" id="ck1" /><lable for="ck1">请发送活动通知</lable>
                </div>
                <div class="btn">
                    <button>使用</button>
                </div>
            </div>
        )
    }
}