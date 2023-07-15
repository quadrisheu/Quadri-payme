import React from 'react'
import '../styles/Footer.css'


function Footer() {
    return(
    <div className="footer-container">
        <div className="foot1">
            <div className="innerF1"></div>
            <div className="innerF2"><p className='ready'>People who are <br /> ready took these courses!</p></div>
            <div className="innerF3"></div>
        </div>


        <div className="foot2"><button className='buttonF'>Shedule Demo</button></div>

        
        <div className="foot3">
            <div className="innerF1">
                <h3 className='me'>Payme</h3>
                <p className='pay'>Crechterwoord K12 182 DK  <br />Alknjkcb, All Rights Reserved</p>
                </div>
            <div className="innerF2">
                <div className="links">
                    <div className="link1">
                        <h5>Links</h5>
                        <ul className='ul'>
                            <li>Overons</li>
                            <li>Social Media</li>
                            <li>Counters</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                    <div className="link1">
                        <h5>Company</h5>
                        <ul className='ul'>
                            <li>Terms & Conditions</li>
                            <li>Privacy Policy</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                    <div className="link1">
                        <h5>Get in touch</h5>
                        <ul className='ul'>
                            <li>Crechterwoord K12 <br />182 DK Alknjkcb</li>
                            <li>085-132567</li>
                            <li>info@payme.net</li>
                        </ul>
                    </div>

                </div>
                <div className="copyR">© 2023 Payme. All rights reserved</div>
            </div>
            <div className="innerF3"></div>
        </div>
    </div>
    )
}

export default Footer