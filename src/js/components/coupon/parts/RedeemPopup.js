/**
 * Created by korman on 08.05.17.
 */

import React from 'react';

export default class RedeemPopup extends React.Component {

    render() {
        return (
            <div id="redeemPopup" className="kankan-popup-overlay" style={{zIndex:1000}}>
                <div className="kankan-popup">
                    <h2>Here i am</h2>
                    <a className="close" href="#">×</a>
                    <div className="content">
                        This coupon will be marked as redeemed. You can\'t use it any more!
                    </div>
                </div>
            </div>
        );
    }
}