/**
 * Created by zhangbin on 2017/4/4.
 */

import React from 'react';
import {Link} from 'react-router-dom';

export default class Pagination extends React.Component {

    constructor(props){
        super(props);
        console.log('construct', props);
        let page = props.page !== undefined ? parseInt(props.page) : 1;
        let type = props.type !== undefined ? props.type : 'event';

        // let page = 1;

        this.state = {
            page: parseInt(page),
            nextPage: page + 1,
            prevPage: page > 1 ? page - 1 : page,
            type: type
        }
    }

    componentWillReceiveProps(props) {
        console.log('receive prop', props);
        let page = props.page !== undefined ? parseInt(props.page) : 1;
        let type = props.type !== undefined ? props.type : 'event';
        // let page = 1;

        this.state = {
            page: parseInt(page),
            nextPage: page + 1,
            prevPage: page > 1 ? page - 1 : page,
            type: type
        }
    }

    render(){
        return (
            <div className="page">
                <Link to={'/' + this.state.type + '/' + this.state.prevPage}>Prev</Link>
                <Link to={'/' + this.state.type + '/' + this.state.page} className="on">{ this.state.page }</Link>
                <Link to={'/' + this.state.type + '/' + this.state.nextPage}>Next</Link>
            </div>
        )
    }
}