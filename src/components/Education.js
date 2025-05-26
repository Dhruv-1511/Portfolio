import React from 'react'
import './Education.css'
import { FaGraduationCap, FaAward } from 'react-icons/fa';

function Education() {
    const educationData = [
        {
            year: "2019-20",
            std: "Std 10",
            school: "Shree Vasishtha Vidhyalaya, Vav",
            result: "Result: 79%"
        },
        {
            year: "2021-22",
            std: "Std 12",
            school: "Shree Vasishtha Vidhyalaya, Vav",
            result: "Result: 89%"
        },
        {
            year: "2022-23",
            std: "BCA First Year",
            school: "SDJ International College, Vesu",
            result: "YGPA: 7.39"
        },
        {
            year: "2023-24",
            std: "BCA Second Year",
            school: "SDJ International College, Vesu",
            result: "YGPA: 7.04"
        },
        {
            year: "2024-25",
            std: "BCA Third Year",
            school: "SDJ International College, Vesu",
            result: "YGPA: 8.11"
        }
    ];

    return (
        <>
            <h2 className='section-title' id='education'>Education</h2>

            <div className='educontainer'>
                <div className="education-swiper">
                    {/* Original Cards */}
                    {educationData.map((edu, index) => (
                        <div className="education-card" key={`original-${index}`} data-aos="fade-up" data-aos-delay={index * 100}>
                            <div className="education-date">
                                <FaGraduationCap className="education-icon" />
                                {edu.year}
                            </div>
                            <div className="education-item">
                                <div className="educontent">
                                    <h3 className='std'>{edu.std}</h3>
                                    <p className='sch'>{edu.school}</p>
                                    <div className="result">
                                        <FaAward className="award-icon" />
                                        <span>{edu.result}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                    
                    {/* Duplicated Cards for Seamless Loop */}
                    {educationData.map((edu, index) => (
                        <div className="education-card" key={`duplicate-${index}`} data-aos="fade-up" data-aos-delay={index * 100}>
                            <div className="education-date">
                                <FaGraduationCap className="education-icon" />
                                {edu.year}
                            </div>
                            <div className="education-item">
                                <div className="educontent">
                                    <h3 className='std'>{edu.std}</h3>
                                    <p className='sch'>{edu.school}</p>
                                    <div className="result">
                                        <FaAward className="award-icon" />
                                        <span>{edu.result}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Education