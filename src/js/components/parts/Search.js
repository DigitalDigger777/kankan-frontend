/**
 * Created by zhangbin on 2017/4/4.
 */

import React from 'react';
import {Link} from 'react-router-dom';

export default class Search extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            type: props.type,
            searchValue: ''
        };
        this.updateSearchEventInputValue = this.updateSearchEventInputValue.bind(this);
        this.updateSearchCouponInputValue = this.updateSearchCouponInputValue.bind(this);
        this.searchEvent = this.searchEvent.bind(this);
        console.log(props);
    }

    searchEvent(search){
        this.props.changeSearch(search);
    }

    searchCoupon(){
        this.props.changeSearch(search);
    }

    updateSearchEventInputValue(e) {
        const searchVal = $('.searchBox').find('input').val();

        this.state = {
            type: 'event',
            searchValue: searchVal
        };

        this.searchEvent(searchVal);
        console.log(this.state);
    }

    updateSearchCouponInputValue(e) {
        const searchVal = $('.searchBox').find('input').val();

        this.state = {
            type: 'coupon',
            searchValue: searchVal
        };

        this.searchEvent(searchVal);
        console.log(this.state);
    }

    render(){

        if (this.state.type == 'event') {
            return (
                <div className="searchBox">
                    <div className="search">
                        <input type="text" placeholder="Search Event"/>
                    </div>
                    <div className="search-Btn">
                        <button type="button" onClick={this.updateSearchEventInputValue}>Search</button>
                    </div>
                </div>
            )
        } else {
            return (
                <div className="searchBox">
                    <div className="search">
                        <input type="text" placeholder="Search Coupon"/>
                    </div>
                    <div className="search-Btn">
                        <button type="button" onClick={this.updateSearchCouponInputValue}>Search</button>
                    </div>
                </div>
            )
        }
    }
}