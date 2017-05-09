/**
 * Created by korman on 08.05.17.
 */

/**
 * Created by korman on 02.05.17.
 */

import Config from '../../../Config';
import React from 'react';
import axios from 'axios';
import HelpPanel from './HelpPanel';

export default class LowerPopup extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            id: props.id,
            sponsorId: props.sponsorId,
            bets: props.bets
        };

        this.lowerSponsor = this.lowerSponsor.bind(this);
    }

    lowerSponsor(e) {

        const config = new Config();

        axios.post(config.baseUrl + 'api/kankan/consumer/bet', {
            eventId: this.state.id,
            sponsorId: this.state.sponsorId,
        }).then(res => {
            console.log(res);
        });
    }


    render(){
        return (
            <div className="modal fade" id="lowerPopup" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                        </div>
                        <div className="modal-body">
                            You lowered this price
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="default-btn" data-dismiss="modal">Ok</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}