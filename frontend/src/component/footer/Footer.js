import React from 'react'
import "./Footer.css"


const Footer = () => {
    return (
        <footer id='footer'>
            <p>CATCH US ON</p>
            <div className="leftFooter">
                <a href="https://linktr.ee/GDSC_BVM" className='fa fa-tree' target="_blank" rel='noreferrer'></a>
            </div>
            <p>Email : <a href="mailto:gdsc@bvmengineering.ac.in">gdsc@bvmengineering.ac.in</a></p>
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
