/**
 * Created by zhangbin on 2017/4/5.
 */
import React from 'react';
export default class LowerPrice extends React.Component{
    render(){
        return (
            <div className="cBox">
                <h3>Sponsor Helps you:</h3>
                <dl className="sponsorList">
                    <dt>Gold sponsor</dt>
                    <dd>
                        <span>
                            <img src="images/u360.png" alt="" />
                            <p>ABC Accounting</p>
                        </span>
                        <div>ABC Accounting has more than 30 years histroy. 6046789893</div>
                        <div className="btn"><button>Lower</button></div>
                    </dd>
                    <dt>Gold sponsor</dt>
                    <dd>
                        <span>
                            <img src="images/u360.png" alt="" />
                            <p>ABC Accounting</p>
                        </span>
                        <div>ABC Accounting has more than 30 years histroy. 6046789893</div>
                        <div className="btn"><button>Lower</button></div>
                    </dd>
                    <dt>Real estate broker sponsor</dt>
                    <dd>
                        <span>
                            <img src="images/u400.png" alt="" />
                            <p>Miki real estate</p>
                        </span>
                        <div>The creation of 30 years of Dong Hongjia accounting firm, has superb technology, impeccable experience, 6046789893</div>
                        <div className="btn"><button>Lower</button></div>
                    </dd>
                </dl>
            </div>
        )
    }
}