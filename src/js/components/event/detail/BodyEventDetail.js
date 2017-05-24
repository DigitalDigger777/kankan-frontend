/**
 * Created by korman on 02.05.17.
 */

import Config from '../../Config';
import React from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import EventDetail from './lowerPriceTabs/EventDetail';
import LowerPrice from './lowerPriceTabs/LowerPrice';
import RecordPrice from './lowerPriceTabs/RecordPrice';
import JoinPanel from './parts/JoinPanel';
import JoinPopup from './parts/JoinPopup';
import LowerPopup from './parts/LowerPopup';

export default class BodyEventDetail extends React.Component{
    constructor(props) {
        super(props);
        console.log(props.match.params.tab);

        this.state = {
            id: props.match.params.id,
            tab: props.match.params.tab,
            data: null,
            canShare: false
        };

        this.lowerConsumer = this.lowerConsumer.bind(this);
    }


    componentDidMount() {
        const config = new Config();
        const consumerId = window.localStorage.getItem('user_id');

        axios.get(config.baseUrl + 'api/kankan/shopper/event/' + this.state.id)
            .then(res => {
                console.log(res.data);
                const data = res.data;
                // const countPages = res.data.count_pages;
                this.setState({ data });


                //prepare share
                axios.get(config.baseUrl + 'open-wechat/oa-new/signature', {
                    params: {
                        url: window.location.href.split('#')[0]
                    }
                }).then(res => {
                    // alert('get signature');

                    const eventId = this.state.id;
                    const state = this.state;
                    const self = this;
                    //let wx = new jweixin();

                    wx.config({
                        debug: false, // Enables debugging mode. Return values of all APIs called will be shown on the client. To view the sent parameters, open the log view of developer tools on a computer browser. The parameter information can only be printed when viewed from a computer.
                        appId: res.data.appId, // Required, unique identifier of the official account
                        timestamp: res.data.timestamp, // Required, timestamp for the generated signature
                        nonceStr: res.data.nonceStr, // Required, random string for the generated signature
                        signature: res.data.signature, // Required, signature. See Appendix 1.
                        jsApiList: [
                            'checkJsApi',
                            'onMenuShareTimeline',
                            'onMenuShareAppMessage'
                        ] // Required, list of JS APIs to be used. See Appendix 2 for the list of all JS APIs
                    });


                    wx.ready(function(){
                        setTimeout(() => {

                            state.canShare = true;
                            wx.onMenuShareAppMessage({
                                title: state.data.product.name,
                                desc: state.data.description,
                                link: 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxfca7a5406897fa7b&redirect_uri=http://kuaikan.ppcgclub.com/kankan/consumer/login&response_type=code&scope=snsapi_login&state=' + eventId + '#wechat_redirect',
                                imgUrl: 'http://img3.douban.com/view/movie_poster_cover/spst/public/p2166127561.jpg',
                                type: 'link',
                                dataUrl: '',
                                trigger: function (res) {
                                    //alert('"Send to Chat" is clicked');
                                },
                                success: function (res) {
                                    //alert('Sharing succeeds');
                                },
                                cancel: function (res) {
                                    //alert('Sharing Canceled');
                                },
                                fail: function (res) {
                                    alert(JSON.stringify(res));
                                }
                            });

                            self.setState({canShare: true});
                        }, 1000);
                    });
                });
            });

        axios.get(config.baseUrl + 'api/kankan/shopper/event/is-joined?eventId=' + this.state.id + '&consumerId=' + consumerId)
            .then(res => {
                console.log(res.data);
                this.setState({
                    isJoined: res.data.is_joined
                });
            });


    }

    componentWillReceiveProps(props) {

        this.state = {
            id: props.match.params.id,
            tab: props.match.params.tab,
            data: this.state.data,
            canShare: this.state.canShare
        };
    }

    lowerConsumer() {
        const config = new Config();
        const consumerId = window.localStorage.getItem('user_id');

        axios.post(config.baseUrl + 'api/kankan/consumer/bet', {
            eventId: this.state.id,
            consumerId: consumerId
        }).then(res => {
            console.log(res);
            $('#lowerPopup').modal('show');
        });
    }

    render(){
        const config = new Config();

        if (this.state.canShare) {


            const user = JSON.parse(window.localStorage.getItem('user'));

            return (
                <div>
                    <JoinPopup/>
                    <LowerPopup/>
                    <div className="bargain">
                        <div className="banner" style={{textAlign: "center"}}>
                            <img src={ this.state.data.product.images.length > 0 ? config.baseImagePath + 'uploads/images/' + this.state.data.product.images[0] : ''} />
                            <p>Event Closed：1 Day 16 Hours 27 Mins 12 Seconds</p>
                        </div>
                        <div>
                            <h3 className="title">{ this.state.data.product.name}</h3>
                            <div className="items">
                                <ul>
                                    <li>
                                        <span>Original Price：${ this.state.data.product.price }</span>
                                        <span>Lowest Price：$0.00</span>
                                    </li>
                                    <li>
                                        <span>Total Quantity：{this.state.data.totalQuantity}</span>
                                        <span>Available Quantity：{this.state.data.availableQuantity}</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div>
                            <div className="userBox">
                                <h3 className="title">Event Detail:</h3>
                                <p className="e-detail">{this.state.data.description}</p>
                            </div>
                        </div>
                    </div>
                    <JoinPanel eventId={this.state.id} product={this.state.data.product}  isJoined={this.state.isJoined }/>
                </div>
            )
        } else {
            return <div>Loading...</div>
        }
    }
}
