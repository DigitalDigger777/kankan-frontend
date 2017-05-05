/**
 * Created by korman on 02.05.17.
 */

import React from 'react';
export default class HelpPanel extends React.Component{
    render(){
        return (
            <div className="footer clearfix">
                <div className="col-50">
                    <a href="#">Ask Help!</a>
                </div>
                <div className="col-50 soc">
                    <a href="#">
                        <img src="images/ico-1.png" alt="" />
                    </a>
                    <a href="#">
                        <img src="images/ico-2.png" alt="" />
                    </a>
                </div>
            </div>
        )
    }
}