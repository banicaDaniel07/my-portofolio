import React from 'react'
import CustomButton from '../../components/custom-button/custom-button.component';
import Input from '../../components/input/input.component';
import { AiFillFile, AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { FaPhone } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { ImFacebook2 } from 'react-icons/im';


import './contact.styles.scss';
const ContactPage = () => {
    return (
        <div className='contact'>
            <form action="" method="post">
                <h2 className="contact__title">Get in touch</h2>
                <Input type='text' name='name'>Full Name</Input>
                <Input type='email' name='email'>E-mail</Input>
                <Input type='number' name='phone'>Phone</Input>
                <Input textarea name='message'>Your Message</Input>
                <CustomButton>Send</CustomButton>
            </form>
            <a className='contact__cv' href="https://www.google.com" target="_blank" rel="noreferrer"><AiFillFile/> View CV</a>
            <div className="contact__footer">
                <h1 className="contact__name">Banica Daniel</h1>
                <div className="contact__social">
                    <div className="contact__phone contact__icons">
                    <span>             0736 533 401</span>
                    <FaPhone/>
                    </div>
                    <ImFacebook2 className="contact__icons"/>
                    <AiFillGithub className="contact__icons"/>
                    <AiFillLinkedin className="contact__icons"/>
                    <div className="contact__email contact__icons">
                    <MdEmail/>
                    <span>banica.daniel07@gmail.com</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactPage
