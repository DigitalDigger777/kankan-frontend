/**
 * Created by zhangbin on 2017/4/4.
 */

import React from 'react';
import {Link} from 'react-router-dom';

export default class Search extends React.Component {

    render(){
        return (
            <div className="searchBox">
                <div className="search">
                    <input type="text" placeholder="Search Coupon" />
                </div>
                <div className="search-Btn">
                    <button>Search</button>
                </div>
            </div>
        )
    }
}