import React from 'react'
import "./Footer.css"


const Footer = () => {
    return (
        <footer id='footer'>
            <p>CATCH US ON</p>
            <div className="leftFooter">
                <a href="https://linktr.ee/GDSC_BVM" className='fa fa-tree'></a>
            </div>
            <p>Prathviraj: <a href="tel:+917226001839">+91 72260 01839</a></p>
            <p>Manav: <a href="tel:+919157441707">+91 91574 41707</a></p>
            <div className="midFooter">
                <p>Copyright 2022 All rights reserved | SolutionFest</p>
            </div>
            <div className="rightFooter">
                <p>Developed &amp; Designed by GDSC BVM with &#10084;</p>
            </div>

        </footer>
    )
}

export default Footer
