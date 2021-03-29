import React from 'react'
import './stylesheet/Nails.css'
function Nails() {
    return (
        <div className="nails-content">
            <ul className="list2-items-head">
            <li className="list2-item1">Pedicure</li>
            <li className="list2-item2">Manicure</li>
            <li className="list2-item3">Nagel Design</li>
            <li className="list2-item4">Gel Manicure</li>
            <li className="list2-item5">Fill in Nails</li>
            <li className="list2-item6">Nail Modeling</li>
            <li className="list2-item7">All Nail Treatments</li>
            </ul>
            <div className="list2-column1">
            <img alt="list-logo" id="list2-columns-img" src="https://cdn1.treatwell.net/images/view/v2.i3199229.w710.h355.xAFF45E4C.png" width="100%"/>
            <p className="list2-img-text">Gel & Shellac Manicures</p>
            </div>
            <div className="list2-column2">
            <img alt="list-logo" id="list2-columns-img" src="https://cdn1.treatwell.net/images/view/v2.i3199237.w710.h355.x971D4EF4.png" width="100%"/>
            <p className="list2-img-text">Top Rated Nail Salons</p>
            </div>
        </div>
    )
}

export default Nails
