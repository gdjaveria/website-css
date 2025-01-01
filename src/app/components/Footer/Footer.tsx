import React from 'react'
import "./Footer.css"

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-container'>
        <div className='footer-brand'>
            <h2>Bean Scene</h2>
            <p>Lorem Ipsum is simply dummy text of the <br/>printing and typesetting
            industry. Lorem Ipsum has<br/> been the industries standard dummy text
            ever since the 1500s</p>
            
            <div className="footer-links">
                <div className='footer-column'>
                    <h3>About</h3>
                    <ul>
                        <li>Home</li>
                        <li>Menu</li>
                        <li>Reservation</li>
                        <li>Contact</li>
                    </ul>
                </div>

                <div className='footer-column'>
                    <h3>Company</h3>
                    <ul>
                        <li>How we work</li>
                        <li>Terms of services</li>
                        <li>Pricing</li>
                        <li>FAQ</li>
                    </ul>
                </div>
                <div className='footer-column'>
                    <h3>Contact Us</h3>
                    <ul>
                        <li>123,avenu,street no:#65,1st Block </li>
                        <li>+1 202-918-2312</li>
                        <li>beanscene@email.com</li>
                    </ul>
                </div>
            </div>

        </div>
        </div>
    </div>
  )
}

export default Footer