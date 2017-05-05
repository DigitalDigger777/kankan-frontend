/**
 * Created by korman on 01.05.17.
 */

import React from 'react';
// import PageTitle from '../parts/PageTitle';
import Search from '../parts/Search';
import Pagination from '../parts/Pagination';
import EventList from './EventList';
// import indexCss from '../../../css/index.css';

import { Link } from 'react-router-dom';

export default class BodyEvent extends React.Component{
    constructor(props){
        super(props);

        let page = props.match.params.page !== undefined ? props.match.params.page : 1;
        console.log(page);
        this.state = {
            items: [],
            page: page
        }
    }

    componentDidMount(props) {
        //console.log('test', props);
    }

    componentWillReceiveProps(props) {

        this.state = {
            items: [],
            page: props.match.params.page !== undefined ? props.match.params.page : 1
        }
    }

    render(){
        return (
            // <div>
            //     <PageTitle/>
            //     <div className="main">
            //         <Search/>
            //         <EventList page={this.state.page} />
            //         <Pagination page={this.state.page} type="event"/>
            //         <div className="column">
            //             <Link to="/">商品列表</Link>
            //             <Link to="/coupon/1">劵列表</Link>
            //         </div>
            //     </div>
            // </div>
            <div>
                <div>
                    <div className="main">
                        <Search />
                        <div className="list">
                            <EventList page={this.state.page} />
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