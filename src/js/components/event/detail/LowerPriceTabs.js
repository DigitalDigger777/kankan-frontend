/**
 * Created by korman on 02.05.17.
 */

import React from 'react';
import EventDetail from './lowerPriceTabs/EventDetail';
import SponsorList from './lowerPriceTabs/RecordPrice';
import RecordList from './lowerPriceTabs/LowerPrice';

export default class LowerPriceTabs extends React.Component{
    render(){
        return (
            <div>
                <div className="bargainSwitch">
                    <div className="titles">
                        <span className="item on">Event Detail</span>
                        <span className="item">Lower the price</span>
                        <span className="item">Price Record</span>
                    </div>
                    <SponsorList/>
                </div>
            </div>

        )
    }
}