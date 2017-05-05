/**
 * Created by korman on 01.05.17.
 */
import Config from '../Config';
import React from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

export default class CouponList extends React.Component{
    constructor(props){
        super(props);
        console.log('coupon construct', props);
        this.state = {
            items: []
        }
    }

    componentDidMount() {
        const config = new Config();
        console.log(this.props);
        axios.get(config.baseUrl + 'api/kankan/coupon', {
            params: {
                method: 'LIST',
                page: this.props.page,
                items_on_page: 5
            }
        }).then(res => {

            const items = res.data.items.map(obj => obj);
            this.setState({ items });
        });
    }

    componentWillReceiveProps(props) {
        const config = new Config();
        console.log(this.props);
        axios.get(config.baseUrl + 'api/kankan/coupon', {
            params: {
                method: 'LIST',
                page: this.props.page,
                items_on_page: 5
            }
        }).then(res => {

            const items = res.data.items.map(obj => obj);
            this.setState({ items });
        });
    }

    render(){
        const pages = [];

        for (let i = 0; i < this.state.count_pages; i++) {
            pages.push('<li><a href="#">' + i + '</a></li>');
        }

        return (
            // <div>
            //     <h4>Coupons</h4>
            //     <table className="table table-striped">
            //         <thead>
            //         <tr>
            //             <th>Name</th>
            //         </tr>
            //         </thead>
            //         <tbody>
            //         {this.state.items.map(coupon =>
            //             <tr key={coupon.id}>
            //                 <td><Link to={'/coupon/' + coupon.id}>{coupon.name}</Link></td>
            //             </tr>
            //         )}
            //         </tbody>
            //     </table>
            //     <nav>
            //         <ul className="pagination">
            //             {pages}
            //         </ul>
            //     </nav>
            // </div>



            // <ul>
            //     { this.state.items.map((item, index) =>
            //
            //         <li key={index}>
            //             <div className="shopping">
            //                 <img src={item.coupon.image == ''? '' : item.coupon.image} className="sh" />
            //                 <div className="shop-ri">
            //                     <div className="rule">
            //                         <img src="images/u68.png" alt="" />
            //                         <p>{item.coupon.product.name}</p>
            //                     </div>
            //                     <h3>{item.coupon.name}</h3>
            //                     <p>Final Buy Price: ${item.coupon.couponPrice}</p>
            //                     <p className="mt15">Expired: {item.expireTimeFormat}</p>
            //                 </div>
            //             </div>
            //             <div className="items">
            //                 {/*<div className="item">*/}
            //                     {/*<p>总共</p>*/}
            //                     {/*<p>{coupon.total}件</p>*/}
            //                 {/*</div>*/}
            //                 {/*<div className="item">*/}
            //                     {/*<p>还剩</p>*/}
            //                     {/*<p>{coupon.left}件</p>*/}
            //                 {/*</div>*/}
            //                 <Link className="item" to={`/coupon/detail/${item.coupon.id}`}>Detail</Link>
            //             </div>
            //         </li>
            //
            //     )}
            // </ul>

            <ul>
                { this.state.items.map((item, index) =>
                    <li key={index}>
                        <div className="shopping">
                            <img className="sh" src={item.coupon.image == ''? '' : item.coupon.image} />
                                <span className="detail">
                                    <Link className="item" to={`/coupon/detail/${item.coupon.id}`}>
                                        Detail
                                        <span className="arrow">&gt;</span>
                                    </Link>
                                </span>
                                <div className="shop-ri">
                                    <h3>{item.coupon.product.name}</h3>
                                    <p>Final Buy Price: ${item.coupon.couponPrice}</p>
                                    <p className="mt15">Expired: {item.expireTimeFormat}</p>
                                </div>
                        </div>
                        {/*<span class="label">Expired</span>*/}
                    </li>
                )}
            </ul>
        )
    }
};
