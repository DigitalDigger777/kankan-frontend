/**
 * Created by zhangbin on 2017/4/5.
 */

import Config from '../../../Config';
import React from 'react';
import axios from 'axios';
import LowerSponsorButton from '../parts/LowerSponsorButton';

export default class LowerPrice extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            id: props.id,
            sponsors: null
        };

        this.lowerSponsor = this.lowerSponsor.bind(this);
    }

    componentDidMount() {
        const config = new Config();
        const eventId = this.state.id;

        axios.get(config.baseUrl + 'api/kankan/shopper/event/sponsors?eventId=' + eventId)
            .then(res => {
                console.log(res.data);
                const data = res.data;
                // const countPages = res.data.count_pages;
                this.setState({ sponsors: data });

            });


    }

    componentWillReceiveProps(props) {

        this.state = {
            id: props.match.params.id,
            tab: props.match.params.tab,
            data: this.state.data
        };
    }


    lowerSponsor(e, sponsorId) {

        const config = new Config();

        axios.post(config.baseUrl + 'api/kankan/consumer/bet', {
            eventId: this.state.id,
            sponsorId: sponsorId,
        }).then(res => {
            console.log(res);
        });
    }

    render(){
        const config = new Config();

        if (this.state.sponsors) {
            return (
                <div className="cBox">
                    <h3>Sponsor Helps you:</h3>
                    <dl className="sponsorList">
                        { this.state.sponsors.map((sponsor, index) =>
                            <div key={index}>
                                <dt>{ sponsor.level } sponsor</dt>
                                <dd>
                                <span>
                                    <img
                                        src={ sponsor.logo != '' ? config.baseImagePath + 'uploads/logos/' + sponsor.logo : '' }
                                        alt=""/>
                                    <p>{ sponsor.name }</p>
                                </span>
                                    <div>{ sponsor.description }</div>
                                    <div className="btn">
                                        <LowerSponsorButton id={this.state.id} sponsorId={sponsor.id} bets={sponsor.bets}/>
                                    </div>
                                </dd>
                            </div>
                        ) }

                    </dl>
                </div>
            )
        } else {
            return (
                <div>Loading...</div>
            );
        }
    }
}