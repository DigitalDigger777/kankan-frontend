/**
 * Created by korman on 01.05.17.
 */

import React from 'react';


export default class CouponStatus extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            status: props.status
        }

        console.log(this.state);
    }

    render(){

        if (this.state.status == 0) {
            return (
                <span className="label">Redeemed</span>
            )
        }

        if (this.state.status == 1) {
            return (
                <span></span>
            )
        }

        if (this.state.status == 2) {
            return (
                <span className="label">Expired</span>
            )
        }



    }
};
