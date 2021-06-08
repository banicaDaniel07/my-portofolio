import React from 'react'
import CustomButton from '../../components/custom-button/custom-button.component';
import Input from '../../components/input/input.component'


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
        </div>
    )
}

export default ContactPage
