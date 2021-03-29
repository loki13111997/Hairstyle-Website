import React from 'react'
import './stylesheet/Massage.css'
function Massage() {
    return (
        <div className="massage-content">
            <ul className="list5-items-head">
            <li className="list5-item1">Relaxation massage</li>
            <li className="list5-item2">Thai massage</li>
            <li className="list5-item3">Aromatic oil massage</li>
            <li className="list5-item4">Therapeutic massage</li>
            <li className="list5-item5">Foot massage</li>
            <li className="list5-item6">Sports massage</li>
            <li className="list5-item7">All massages</li>
            </ul>
            <div className="list5-column1">
            <img alt="list-logo" id="list5-columns-img" src="https://cdn1.treatwell.net/images/view/v2.i3199210.w710.h355.x160BC191.png" width="100%"/>
            <p className="list5-img-text">Express-Massages</p>
            </div>
            <div className="list5-column2">
            <img alt="list-logo" id="list5-columns-img" src="https://cdn1.treatwell.net/images/view/v2.i3199213.w710.h355.x9ADA990D.png" width="100%"/>
            <p className="list5-img-text">Massage-Guide</p>
            </div>
        </div>
    )
}

export default Massage
