/**
 * Created by korman on 01.05.17.
 */

import Config from '../Config';
import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class CouponRedeem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            id: props.match.params.id,
            data: {}
        };
    }

    componentDidMount() {
        const config = new Config();
        //
        axios.get(config.baseUrl + 'api/kankan/coupon/' + this.state.id)
            .then(res => {
                console.log(res.data);
                const data = res.data;
                // const countPages = res.data.count_pages;
                this.setState({ data });

            });
    }

    render() {

        // const props = [];
        // for (let prop in this.state.data) {
        //     if (prop == 'startTime' || prop == 'expireTime') {
        //         let date = new Date(this.state.data[prop].date);
        //         props.push(
        //             <tr key={prop}>
        //                 <td>{date.toLocaleString()}</td>
        //             </tr>
        //         );
        //     } else {
        //         props.push(
        //             <tr key={prop}>
        //                 <td>{prop} : {this.state.data[prop]}</td>
        //             </tr>
        //         );
        //     }
        // }
        console.log(this.state);
        return (
            <div data-reactroot="">
                <div className="coupon">
                    <div>
                        <div className="title">
                            <p className="t">Congraulations!</p>
                            <p className="b">You can use $0.00 to get</p>
                        </div>
                        <div className="pic"><img alt="" src="images/u282.jpg" /></div>
                        <div className="des">
                            <span>Canada Goose Big water</span>
                        </div>
                    </div>
                    <div className="from">
                        <h3>Contact info:</h3>
                        <div className="box">
                            <ul>
                                <li><label>First Name: </label><input placeholder="First Name" type="text" /></li>
                                <li><label>Last Name: </label><input placeholder="Last Name" type="text" /></li>
                                <li><label>Contact Phone: </label><input placeholder="Contact Phone" type="text" /></li>
                                <li><label>Address: </label><input placeholder="Address" type="text" /></li>
                                <li><label>City: </label><input placeholder="City" type="text" /></li>
                                <li>
                                    <label>Provience: </label>
                                    <p>BC</p>
                                </li>
                                <li><label>Post Code: </label><input placeholder="Post Code" type="text" /></li>
                                <li><label>Email:</label><input placeholder="Email" type="text" /></li>
                            </ul>
                        </div>
                        <div className="notice">
                            <input id="ck1" type="checkbox" value="on" />Send me promtional Emails
                        </div>
                        <div className="btn">
                            <a href="kankan_home-redeem-coupon__e.html"><button>Get the coupon</button></a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}