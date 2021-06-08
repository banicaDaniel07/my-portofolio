import React from 'react'
import CustomButton from '../../components/custom-button/custom-button.component';
import Input from '../../components/input/input.component';


import './contact.styles.scss';
const ContactPage = () => {
    let year = new Date().getFullYear();
    return (
        <div className='contact'>
            <div className="contact__landscape">
                <h2 className="contact__center">
                    CONTACT ME
                </h2>
            </div>
            <div className="contact__info">
                <h2 className="contact__subtitle">Get in touch with me!</h2>
                <div className="contact__infos">
                    <div className="contact__phone info">
                    <i class="fas fa-mobile-alt"></i>
                        <span>Phone</span>
                        <p>phone 0736 533 401</p>
                    </div>
                    <div className="contact__adrress info">
                    <i class="fas fa-map-marker-alt"></i>
                        <span>Adrress</span>
                        <p>Galati,  Romania</p>
                    </div>
                    <div className="contact__email info">
                    <i class="fas fa-envelope"></i>
                        <span>Email</span>
                        <p>banica.daniel07@gmail.com</p>
                    </div>
                </div>
                
            </div>
            <form action="" method="post">
                <h2 className="contact__title">If you have any questions <br/> please do no hesitate to send me a message.</h2>
                <Input type='text' name='name'>Full Name</Input>
                <Input type='email' name='email'>E-mail</Input>
                <Input type='number' name='phone'>Phone</Input>
                <Input textarea name='message'>Your Message</Input>
                <CustomButton>Send Message</CustomButton>
            </form>
                <h2 className='contact__connect'>Connect with me!</h2>
            <div className="contact__social">
            <a className='contact__cv' href="https://www.google.com" target="_blank" rel="noreferrer">
                <div className="contact__content">
                    <i class="fab fa-facebook-f"></i>
                </div>
            </a>
            <a className='contact__cv' href="https://www.google.com" target="_blank" rel="noreferrer">  
                <div className="contact__content">
                    <i class="fab fa-github"></i>
                </div>
            </a>
            <a className='contact__cv' href="https://www.google.com" target="_blank" rel="noreferrer">
                <div className="contact__content">
                    <i class="fab fa-linkedin-in"></i>
                </div>
            </a>

            <a className='contact__cv' href="https://www.google.com" target="_blank" rel="noreferrer">
                <div className="contact__content">
                    <i class="fas fa-folder-open"></i>
                </div>            
            </a>
            </div>
            <footer>
                <h1>&copy;{year}. Banica Daniel. All Rights Reserved.</h1>
            </footer>
        </div>
    )
}

export default ContactPage
