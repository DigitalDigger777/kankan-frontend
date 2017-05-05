/**
 * Created by zhangbin on 2017/4/4.
 */
import React from 'react';
export default class Search extends React.Component{
    render(){
        return (
            <div class="searchBox">
                <div class="search">
                    <input type="text" placeholder="搜产品" />
                </div>
                <div class="search-Btn">
                    <button>搜索</button>
                </div>
            </div>
        )
    }
}