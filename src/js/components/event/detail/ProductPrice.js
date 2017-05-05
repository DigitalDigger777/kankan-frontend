/**
 * Created by korman on 02.05.17.
 */

import React from 'react';

export default class ProductPrice extends React.Component{
    render(){
        return (
            <div>
                <h3 className="title">Canada Goose Big water</h3>
                <div className="items">
                    <ul>
                        <li>
                            <span>原价：$74,99</span>
                            <span>可砍最低价：$0.00</span>
                        </li>
                        <li>
                            <span>本次活动数量：20</span>
                            <span>剩余数量：10</span>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}