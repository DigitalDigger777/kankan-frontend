/**
 * Created by zhangbin on 2017/4/5.
 */
import React from 'react';
export default class RecordPrice extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            bets: props.bets
        }

    }

    render(){
        return (
            <div className="cBox">
                <div className="priceRecordList">
                    <table>
                        <thead>
                            <tr>
                                <td>Friends</td>
                                <td>Lower Amount</td>
                                <td>After Lower</td>
                            </tr>
                        </thead>
                        <tbody>
                        { this.state.bets.map((bet, index)=>
                                <tr key={index}>
                                    <td>
                                        <img src="images/u482.png" alt="" />
                                        <p>{ bet.consumer ? bet.consumer.snData.nickname : bet.sponsor.name}</p>
                                    </td>
                                    <td>
                                        <p>${bet.betValue}</p>
                                    </td>
                                    <td>
                                        <p>${bet.currentPrice}</p>
                                    </td>
                                </tr>

                        )}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}