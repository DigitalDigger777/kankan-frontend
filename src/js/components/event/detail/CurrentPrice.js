/**
 * Created by korman on 02.05.17.
 */

import React from 'react';
export default class CurentPrice extends React.Component{
    render(){
        return (
            <div>
                <div className="friends">
                    <button>找朋友帮砍</button>
                </div>
                <div className="userBox">
                    <h3 className="top">
                        <img src="images/u308.png" alt="" />看看
                    </h3>
                    <p className="c">已有 XXX 位Friends， XXX位Sponsors帮你砍价。</p>
                    <p className="c">你当前价格：<span>$61.00</span></p>
                </div>
            </div>
        )
    }
}