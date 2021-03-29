import React from 'react'
import './stylesheet/Hairstyle.css'
function Hairstyle() {
    return (
        <div className="hairstyle-content">
            <ul className="list1-items-head1">
            <li className="list1-items1">Women's Haircut</li>
            <li className="list1-items2">Women - color, tint & highlights</li>
            <li className="list1-items3">Men's Haircut</li>
            <li className="list1-items4">Styling and Blow-drying</li>
            <li className="list1-items5">Scanning</li>
            <li className="list1-items6">Children's Haircut</li>
            <li className="list1-items7">All Hairdressing Treatments</li>
            </ul>
            <div className="list1-column1">
            <img alt="list-img1" id="list1-row3-img2" src="https://cdn1.treatwell.net/images/view/v2.i3199196.w680.h340.x4CED6A9E.png" width="100%"/>
            <p className="list-img-text">Our top-rated salons</p>
            </div>
            <div className="list1-column2">
            <img alt="list-img2" id="list1-row3-img2" src="https://cdn1.treatwell.net/images/view/v2.i3199202.w710.h355.x0E5DA0C7.png"/>
            <p className="list-img-text">Last minute men haircuts</p>
            </div>
            </div>
          )
}

export default Hairstyle
