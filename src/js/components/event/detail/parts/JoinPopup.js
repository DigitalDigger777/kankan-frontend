/**
 * Created by zhangbin on 2017/4/4.
 */

import React from 'react';

export default class JoinPopup extends React.Component {

    constructor(props){
        super(props);

    }


    render(){
        return (
            <div className="modal fade" id="joinPopup" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                        </div>
                        <div className="modal-body">
                            Congratulations, you joined the event
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