import React from 'react'
import './stylesheet/cosmetics.css';
function Cosmetics() {
    return (
        <div className="cosmetics-content">
            <ul className="list4-items-head">
            <li className="list4-item1">Facials</li>
            <li className="list4-item2">Eyelash extensions</li>
            <li className="list4-item3">Tint eyebrows and eyelashes</li>
            <li className="list4-item4">Pluck eyebrows</li>
            <li className="list4-item5">Eyelash wave</li>
            <li className="list4-item6">Microdermabrasion</li>
            <li className="list4-item7">All cosmetic treatments</li>
            </ul>
            <div className="list4-column1">
            <img alt="list-logo" id="list4-columns-img" src="https://cdn1.treatwell.net/images/view/v2.i3199113.w710.h355.x43385722.png" width="100%"/>
            <p className="list4-img-text">Lashes, Eyelash Lifting & Co.</p>
            </div>
            <div className="list4-column2">
            <img alt="list-logo" id="list4-columns-img" src="https://cdn1.treatwell.net/images/view/v2.i3199189.w710.h355.x9316F466.png" width="100%"/>
            <p className="list4-img-text">The Great Facial Guide</p>
            </div>
            
        </div>
    )
}

export default Cosmetics
