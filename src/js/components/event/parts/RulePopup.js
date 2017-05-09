/**
 * Created by zhangbin on 2017/4/4.
 */

import React from 'react';

export default class RulePopup extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            rule: props.rule
        }

        console.log(this.state);
    }

    componentWillReceiveProps(props) {
        this.state = {
            rule: props.rule
        }
    }

    render(){
        return (
            <div className="modal fade" id="rulePopup" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                        </div>
                        <div className="modal-body">
                            {this.state.rule}
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