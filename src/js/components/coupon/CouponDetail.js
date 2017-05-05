/**
 * Created by korman on 01.05.17.
 */

import Config from '../Config';
import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class CouponDetail extends React.Component {
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

                <div class="coupon">
                    <div>
                        <h1>Canada Goose Big water</h1>
                        <div className="pic">
                            <img alt="" src="images/u282.jpg" />
                            <div className="msg-wrap">
                                <span className="msg">
                                    Void
                                </span>
                            </div>
                        </div>
                        <div className="des">
                            82981727263553
                        </div>
                        <div className="timer">
                            <span>Expired: 2017/03/31</span>
                        </div>
                    </div>
                    <div>
                        <div className="explain">
                            <h3>Redeem Rule:</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget.</p>
                            <div className="btn">
                                {/*<a href="#myPopupDialog" data-rel="popup" data-position-to="window" data-transition="fade" className="item">Redeem</a>*/}
                                <Link to={`/coupon/redeem/${this.state.id}`} data-rel="popup" data-position-to="window" data-transition="fade" className="item"> Redeem</Link>
                            </div>
                            <div className="des">
                                This button is only for machant  use!
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}