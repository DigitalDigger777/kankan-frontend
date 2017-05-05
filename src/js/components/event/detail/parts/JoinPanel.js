/**
 * Created by korman on 02.05.17.
 */

import React from 'react';
export default class JoinPanel extends React.Component{
    render(){
        return (
            <div className="footer clearfix">
                <div className="col-50">
                    <div className="col-50 footer-col">
                        <p>Origial:</p>
                        <p>$74.93</p>
                    </div>
                    <div className="col-50 footer-col">
                        <p>Lowest:</p>
                        <p className="orange">$0.00</p>
                    </div>
                </div>
                <div className="col-50 text-right">
                    <a href="kankan_home-joined-lower_the_price__e.html">
                        <button className="main-btn">Join</button>
                    </a>
                </div>
            </div>
        )
    }
}