/**
 * Created by korman on 01.05.17.
 */

import React from 'react';
// import PageTitle from '../parts/PageTitle';
import Search from '../parts/Search';
import Pagination from '../parts/Pagination';
import EventList from './EventList';


import { Link } from 'react-router-dom';

export default class BodyEvent extends React.Component{
    constructor(props){
        super(props);

        let page = props.match.params.page !== undefined ? props.match.params.page : 1;

        this.state = {
            page: page,
            search: null
        };

        this.changeSearch = this.changeSearch.bind(this);
    }

    componentWillReceiveProps(props) {

        this.state = {
            page: props.match.params.page !== undefined ? props.match.params.page : 1,
            search: props.search
        }

        console.log(this.state);
    }

    changeSearch(search) {
        this.setState({search:search});
        console.log('change search ', search);
    }

    render(){

        return (
            <div>
                <div>
                    <div className="main">
                        <Search type="event" changeSearch={this.changeSearch}/>
                        <div className="list">
                            <EventList page={this.state.page} search={this.state.search}/>
                        </div>
                        <Pagination page={this.state.page} type="event" />
                        <div className="column">
                            <Link to="/">Event List</Link>
                            <Link to="/coupon/1">Coupon List</Link>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}