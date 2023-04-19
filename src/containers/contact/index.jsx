import React from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
import "./style.scss";
import { RiContactsFill } from "react-icons/ri";
import { Animate } from 'react-simple-animate'


const Contact = () => {
    return (
        <section className="contact" id="contact">
            <PageHeaderContent headerText="contact Me"
                icon={<RiContactsFill size={40} />}
            />
            <div className="contact__content">
                <h3 className="contact__content__header-text">Let's Talk</h3>
                <div className="contact__content__form">
                    <Animate
                        play
                        delay={0.4}
                        start={{
                            opacity: 0,
                            transform: "translateX(-250px)",
                        }}
                        end={{
                            opacity: 1,
                            transform: "translateX(0px)",
                        }}
                        duration={1}

                    >

                        <div className="contact__content__form__controlsWrapper">
                            <div className="nameWrapper">
                                <input name="name" type="text" className="inputName" />
                                <label htmlFor="name" className="namelabel">Name</label>
                            </div>
                            <div className="emailWrapper">
                                <input name="email" type="text" className="inputEmail" />
                                <label htmlFor="email" className="emaillabel">Email</label>
                            </div>
                            <div className="descriptionWrapper">
                                <textarea name="description" type="text" rows={'5'} style={{ resize: "none" }} className="inputDescription" />
                                <label htmlFor="description" className="descriptionlabel">Oject</label>
                            </div>

                        </div>
                     <button type="submit">Submit</button>
                    </Animate>
                </div>
            </div>
        </section>
    );
}

export default Contact;