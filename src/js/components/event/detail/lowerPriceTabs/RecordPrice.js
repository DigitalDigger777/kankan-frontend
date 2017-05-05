/**
 * Created by zhangbin on 2017/4/5.
 */
import React from 'react';
export default class RecordPrice extends React.Component{
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
                            <tr>
                                <td>
                                    <img src="images/u482.png" alt="" />
                                        <p>Wechat Nickname</p>
                                </td>
                                <td>
                                    <p>$1.79</p>
                                </td>
                                <td>
                                    <p>$2.10</p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <img src="images/u360.png" alt="" />
                                        <p>Sponsor Name</p>
                                </td>
                                <td>
                                    <p>$21.00</p>
                                </td>
                                <td>
                                    <p>$23.10</p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}