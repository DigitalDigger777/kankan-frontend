/**
 * Created by zhangbin on 2017/4/4.
 */

import React from 'react';
import {Link} from 'react-router-dom';

export default class Search extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            type: 'event'
        };
    }


    render(){

        if (this.state.type == 'event') {
            return (
                <div className="searchBox">
                    <div className="search">
                        <input type="text" placeholder="Search Event"/>
                    </div>
                    <div className="search-Btn">
                        <button>Search</button>
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
                        <button>Search</button>
                    </div>
                </div>
            )
        }
    }
}