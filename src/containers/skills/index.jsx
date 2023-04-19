import React from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
import "./style.scss";
import { GiSkills } from 'react-icons/gi';
import { skillsData } from './utils';
import { Line } from 'rc-progress';
import { Animate,AnimateKeyframes } from "react-simple-animate";



const Skills = () => {
    return (
        <section id="skills" className="skills">
            <PageHeaderContent
                headerText=" My Skills"
                icon={<GiSkills size={40} />}
            />
            <div className="skills__content__wrapper">
                {
                    skillsData.map((item, key) => {
                        return (
                            <div className="skills__content__wrapper__inner-content">
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
                                    <h3 className="skills__content__wrapper__inner-content__category-text">{item.skillName}</h3>
                                    <div>
                                        {
                                            item.data.map((dataItem, index) => (
                                                <AnimateKeyframes
                                                    play
                                                    keyframes={[
                                                        {
                                                            opacity: 1,
                                                        },
                                                        {
                                                            opacity: 0,
                                                        },
                                                    ]}
                                                    iterationCount={1}
                                                    duration={1}
                                                    
                                                >
                                                    <div className="progressbar-wrapper" key={index}>
                                                        <p>{dataItem.skillName}</p>
                                                        <Line
                                                            percent={dataItem.percentage}
                                                            strokeWidth="2" strokeColor="var(--selected-theme-main-color)"
                                                            strokeLinecap="square"
                                                            trailWidth="2"
                                                            trailColor="#f5f5f5" />

                                                    </div>
                                                </AnimateKeyframes>
                                            ))

                                        }


                                    </div>
                                </Animate>

                            </div>
                        )
                    }
                    )
                }

            </div>

        </section>
    );
}

export default Skills;