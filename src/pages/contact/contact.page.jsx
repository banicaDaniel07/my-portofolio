import React from 'react'
import CustomButton from '../../components/custom-button/custom-button.component';
import Input from '../../components/input/input.component';
import LinkIcon from '../../components/link-icon/link-icon.component';
import Title from '../../components/title/title.component';
import Description from '../../components/description/description.component';
import InfoBox from '../../components/info-box/info-box.component';
import ScrollTop from '../../components/scroll-top/scroll-top.component';

import emailjs from 'emailjs-com';
import { motion } from 'framer-motion';

import './contact.styles.scss';
import { contactTextAnimation, leftVariants, rightVariants, titleUpAnimation } from '../../animation';
const ContactPage = () => {

    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('service_t5m2hr9', 'template_1bq9a7m', e.target, 'user_C1CBhOBdrdwAr8HLgp3OW')
          .then( () =>{
              alert("Thank you! Your message was sent");
          }, (error) => {
              console.log(error.text);
          });
          
          e.target.reset();
        }

    let year = new Date().getFullYear();
    return (
        <motion.div className='contact'>
            <motion.div
            variants={leftVariants}
            initial='initial'
            animate='animate'
            exit='exit'
            className="cover__left"></motion.div>
            <motion.div
            variants={rightVariants}
            initial='initial'
            animate='animate'
            exit='exit'
            className="cover__right"></motion.div>
            <div className="contact__landscape">
                <motion.h2
                variants={contactTextAnimation}
                initial='initial'
                animate='animate'
                className="contact__center">
                    CONTACT ME
                </motion.h2>
            </div>
            <div className="contact__info">
                <Title variant={titleUpAnimation}>Get in touch with me!</Title>
                <div className="contact__infos">
                    <InfoBox 
                    border 
                    iconClass={"fas fa-mobile-alt"} 
                    name={'Phone'} 
                    details='phone 0736 533 401'/>
                    <InfoBox 
                    border 
                    iconClass="fas fa-map-marker-alt"
                    name='Adrress' 
                    details='Galati,  Romania'/>
                    <InfoBox
                    iconClass={"fas fa-envelope"} 
                    name={'Email'} 
                    details='banica.daniel07@gmail.com'/>
                </div>
                
            </div>
            <form  onSubmit={sendEmail}>
                <Description >If you have any questions <br/> please do no hesitate to send me a message.</Description>
                <Input type='text' name='name'>Full Name</Input>
                <Input type='email' name='email'>E-mail</Input>
                <Input type='number' name='phone'>Phone</Input>
                <Input textarea name='message'>Your Message</Input>
                <CustomButton type="submit">Send Message</CustomButton>
            </form>
                <Title>Connect with me!</Title>
            <div className="contact__social">
                <LinkIcon url={'https://www.facebook.com/daniel.banica.735/'} iconClass={'fab fa-facebook-f'}/>
                <LinkIcon url={'https://github.com/banicaDaniel07'} iconClass={'fab fa-github'}/>
                <LinkIcon url={'https://www.linkedin.com/in/daniel-banica-8b5643214/'} iconClass={'fab fa-linkedin-in'}/>
                <LinkIcon url={'https://www.scribd.com/document/511878430/My-curriculum-vitae'} iconClass={'fas fa-folder-open'}/>
            </div>
            <footer>
                <h1>Created by Banica Daniel, &copy; {year}</h1>
            </footer>
            <ScrollTop/>
        </motion.div>
    )
}

export default ContactPage
