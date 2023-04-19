import React from "react";
import './style.scss';
import{FaFacebook,FaLinkedin,FaTwitter,FaInstagram} from 'react-icons/fa'
import {Animate} from 'react-simple-animate';
import cv from './myCV.pdf';



const Home = () => {

    const downloadCV = () => {
        // eslint-disable-next-line
        window.open(cv);
    }





    return (
        <section className="home" id="home">
            <div className="home__text-wrapper">
                <h1 className="">
                    Hello,I'm PAPA BN <br />
                    Front End Developer
                </h1>
            </div>

            <Animate play duration={1.5} delay={1} start={{transform: 'translateY(600px)'}} end={{transform: 'translateX(0px)'}}>

                <div className="contact-me">
                    <div className="contact-me__buttons-wrapper">
                       
                        <a href="/contact">Contact Me</a>

                        <button onClick={downloadCV}>Download CV</button>
                    </div>
                    {/* // eslint-disable-next-line */}
                    <div className="contact-me__socials-wrapper">
                        <a href="https://www.facebook.com/profile.php?id=100006335719056" target="_blank" rel="noreferrer">
                            <FaFacebook size={32}/>
                        </a>
                        <a href="https://www.linkedin.com/in/papa-ndiaye-948420267/" target="_blank" rel="noreferrer">
                            <FaLinkedin size={32}/>
                        </a>
                        <a href="https://twitter.com/papabn99" target="_blank" rel="noreferrer">
                            <FaTwitter size={32}/>
                        </a>
                        <a href="https://www.instagram.com/______papa_bn______/" target="_blank" rel="noreferrer">
                            <FaInstagram size={32}/>
                        </a>
                    </div>
                </div>
            </Animate>

            {/* <div className="home__img-wrapper">
                <img src=";/papabn.png" alt="Papa Bn" />
            </div> */}

        </section>
    );
}

export default Home;