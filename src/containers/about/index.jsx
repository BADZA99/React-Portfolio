import React from "react";
import "./style.scss";
import PageHeaderContent from "../../components/pageHeaderContent";
import { BsInfoCircleFill } from "react-icons/bs";
import { FaDev, FaDatabase } from "react-icons/fa";
import { DiApple, DiAndroid } from "react-icons/di";
import { personalData } from "./utils";
import { Animate } from 'react-simple-animate'

const About = () => {
    return (
        <section className="about" id="about">
            <PageHeaderContent
                headerText="About Me"
                icon={<BsInfoCircleFill size={40} />}
            />

            <div className="about__content">
                <div className="about__content__personalWrapper">
                    <Animate
                        play
                        duration={1}
                        delay={1}
                        start={{ transform: 'translateX(-800px)' }}
                        end={{ transform: 'translateX(0px)' }}
                    >


                        <h3 className="developerContent">Web developer</h3>
                        <p>
                            Hello, my name is Papa Badara Ndiaye and I am a front end developer specialized
                            in HTML, CSS and JS technologies. I have significant experience in
                            creating websites that are both functional and aesthetically
                            pleasing. I like to work closely with my clients to understand their
                            needs and goals, and offer them customized solutions that meet their
                            expectations. My user-centered approach ensures that every website I
                            create is easy to use and navigate. If you are looking for a
                            competent and professional web developer, I am here to help you.
                            Feel free to contact me to discuss your project.
                        </p>
                    </Animate>

                    <Animate
                        play
                        duration={1}
                        delay={0}
                        start={{ transform: 'translateX(500px)' }}
                        end={{ transform: 'translateX(0px)' }}
                    >



                        <h3 className="personnalContent">Personal information</h3>
                        <ul>
                            {personalData.map((item, key) => {
                                return (
                                    <li key={key}>
                                        <span className="title">{item.label}</span>
                                        <span className="value">{item.value}</span>
                                    </li>
                                );
                            })}
                        </ul>
                    </Animate>

                </div>
                <div className="about__content__servicesWrapper">
                    <Animate
                        play
                        duration={1}
                        delay={0}
                        start={{ transform: 'translateY(500px)' }}
                        end={{ transform: 'translateY(0px)' }}
                    >


                        <div className="about__content__servicesWrapper__innerContent">

                           

                                <div>
                                    {" "}
                                    <DiApple
                                        size={60}
                                        color="var(--selected-theme-main-color)"
                                        className="icone1"
                                    />{" "}
                                </div>
                                <div>
                                    {" "}
                                    <DiAndroid
                                        size={60}
                                        color="var(--selected-theme-main-color)"
                                    />{" "}
                                </div>
                                <div>
                                    {" "}
                                    <FaDatabase
                                        size={60}
                                        color="var(--selected-theme-main-color)"
                                    />{" "}
                                </div>
                                <div>
                                    {" "}
                                    <FaDev size={60} color="var(--selected-theme-main-color)" />{" "}
                                </div>
                        
                        </div>
                    </Animate>
                </div>
            </div>
        </section>
    );
};

export default About;
