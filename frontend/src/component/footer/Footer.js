import React from 'react'
import "./Footer.css"


const Footer = () => {
    return (
        <footer id='footer'>
            <p>CATCH US ON</p>
            <div className="leftFooter">
                <a href="#" className="fa fa-facebook"></a>
                <a href="#" className="fa fa-youtube"></a>
                <a href="#" className="fa fa-instagram"></a>
            </div>
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
