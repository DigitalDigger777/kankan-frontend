/**
 * Created by korman on 08.05.17.
 */

import React from 'react';

export default class RedeemButton extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            redeemStatus: props.redeemStatus
        };

        console.log('redeem button', this.state);
    }

    componentWillReceiveProps(props) {
        this.state = {
            redeemStatus: props.redeemStatus
        }
    }

    showRedeemPopup() {
        $('#redeemPopup').modal('show');
    }

    render() {

        if (this.state.redeemStatus == 1) {
            return (
                <div>
                    <div className="btn">
                        <button className="item" onClick={this.showRedeemPopup}>
                            Redeem
                        </button>
                    </div>
                    <div className="des">
                        This button is only for machant use!
                    </div>
                </div>
            );
        } else {
            return (<div></div>);
        }
    }
}