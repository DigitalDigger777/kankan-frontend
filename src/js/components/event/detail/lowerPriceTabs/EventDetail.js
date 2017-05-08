/**
 * Created by zhangbin on 2017/4/5.
 */
import React from 'react';

export default class EventDetail extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            description: props.description
        }
    }

    render(){
        return (
            <div className="cBox">
                <p>{this.state.description}</p>
            </div>
        )
    }
}