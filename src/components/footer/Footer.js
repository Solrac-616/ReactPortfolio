import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "./Footer.css";
import "./Socialshover.css";
import backvideo from "../../media/Fondocss.mp4"
import { motion } from "framer-motion";

const Footer = ({isScrollingTop}) => {
    const scrollRef = useRef(null);

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_opq9kqg', 'template_trd6zim', form.current, '-X8Zm7t_jq68dJkkz')
          .then(result => {
              console.log(result.text);
              alert('MENSAJE ENVIADO');
          }, error => {
              console.log(error.text);
              alert('Lo sentimos hubo un error');
          });

        
        e.target.reset();
      };

  return (
    <footer className="footer">

        <motion.div
        initial={{
            opacity: 0       
          }}
          whileInView={{
            opacity: 1
          }}
          transition={{
            duration: 1
          }}
          viewport={{root: scrollRef}}
        className="footer-container-relative">

            <div className="video-container">
                <video className='video' src={backvideo} autoPlay loop muted ></video>
            </div>

            <div className="footer-contacts-container">
                
                <div className="footer-col footer-col-left">
                    <div className="footer-info">
                        <h2>Carlos E. Brito</h2>
                    </div>
                    <div className="footer-contact">
                        <h3>Contact me</h3>
                        <p>and we go to work</p>
                        <a href="https://wa.me/584249490052">
                            +58 412-380 9750
                        </a> <br />
                        <a href="mailto:carlos.e1998g@gmail.com">
                            carlos.e1998g@gmail.com
                        </a>
                    </div>
                    <div className="socials">
                        <ul>
                            <li><a rel='noopener noreferrer' href="https://wa.me/584249490052" target="_blank"><i className="fa-brands fa-whatsapp" target="_blank"></i></a></li>
                            <li><a rel='noopener noreferrer' href="https://www.linkedin.com/in/carlos-brito-carrero/" target="_blank"><i className="fa-brands fa-linkedin"></i></a></li>
                            <li><a rel='noopener noreferrer' href="https://m.me/carlos.e.b.90/" target="_blank"><i className="fa-brands fa-facebook-messenger"></i></a></li>
                            <li><a rel='noopener noreferrer' href="mailto:carlos.e1998g@gmail.com" target="_blank"><i class="fa-solid fa-envelope"></i></a></li>
                        </ul>
                    </div>
                </div>

                <div className="footer-col footer-col-right">
                    <div className="form-container">
                        <div className="text-form">
                            <p>
                                Leave me a message by Gmail
                            </p>
                        </div>
                        <form ref={form} className='form1' onSubmit={sendEmail}>
                            <input type="text" name='name' placeholder='Your Full Name' required/>
                            <input type="email" name='email' placeholder='Your Email' required/>
                            <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
                            <button type='submit' className='brn-fmail'>SEND MAIL</button>
                        </form>
                    </div>
                </div>
            </div>
            
            <div className="footer-sns-container">
                <div className="footer-sns">
                    <div className="design-by">
                        Designed by carlos Brito - Contract: <a href="https://wa.me/584123809750" target="_blank">+58412-3809750</a>
                    </div>
                    <div className="sns-links">
                        <a href="https://www.linkedin.com/in/carlos-brito-carrero/" target="_blank" rel='noopener noreferrer'>
                            <i className='fab fa-linkedin linkedin' />
                        </a>
                        <a href="https://wa.me/584123809750" target="_blank" rel='noopener noreferrer'>
                            <i className='fa-brands fa-whatsapp' />
                        </a>
                        <a href="https://m.me/carlos.e.b.90/" target="_blank" rel='noopener noreferrer'>
                            <i className='fa-brands fa-facebook-messenger' />
                        </a>
                    </div>
                </div>
            </div>
            
        
        </motion.div>

    </footer>
  )
}

export default Footer