import React from 'react'
import './stylesheet/Men.css'
function Men() {
    return (
        <div className="men-content">
            <ul className="list6-items-head">
            <li className="list6-item1">Men's haircuts</li>
            <li className="list6-item2">Men - color</li>
            <li className="list6-item3">Trim beard & shave</li>
            <li className="list6-item4">Facials for men</li>
            <li className="list6-item5">Barbershop</li>
            </ul>
            <div className="list6-column1">
            <img alt="list-logo" id="list6-columns-img" src="https://cdn1.treatwell.net/images/view/v2.i3199218.w710.h355.x0A1B9F95.png" width="100%"/>
            <p className="list6-img-text">Our Barbers</p>
            </div>
            <div className="list6-column2">
            <img alt="list-logo" id="list6-columns-img" src="https://cdn1.treatwell.net/images/view/v2.i3199223.w680.h340.x18ECD840.png" width="100%"/>
            <p className="list6-img-text">What Can I Expect At The Barber?</p>
            </div>
        </div>
    )
}

export default Men
