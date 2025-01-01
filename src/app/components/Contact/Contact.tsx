
import React from 'react';
import Image from 'next/image';
import './Contact.css';

const Contact = () => {
    return (
        <div id='contact' className="contact-us-container">
            <div className="contact-container">
                <Image src="/connect.jpg" alt="connect"
                 width={400} height={400}
                className="map-image" />
            </div>
            <div className="form-container">
          <h2>Get in Touch</h2>
       <form>
             <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="email" id="email" name="email" required/>

        </div>
            <div className="form-group">
             <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required/>
             </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
           <textarea id="message" name="message" required></textarea>
        </div>
          <button type="submit" className="contact-button">Contact Now</button>
    </form>
</div>
 </div>


    );
};

export default Contact;
