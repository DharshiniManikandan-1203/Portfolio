
import React from 'react';
import './Skills.css';

// Sample list of skills and their proficiency (out of 100)
const skillData = [
    { name: 'HTML', level: 95 },
    { name: 'CSS', level: 90 },
    { name: 'JavaScript', level: 85 },
    { name: 'ReactJS', level: 92 },
    { name: 'UI/UX Design', level: 75 },
    { name: 'Responsive Design', level: 90 },
];

export default function Skills() {
    return (
        <section className="page-section" id="skills">
            <h2 className="skills-title">My Skills</h2>

            {/* Container for skill items */}
            <div className="skills-list">
                {skillData.map((skill, index) => (
                    <div className="skill-item" key={index}>
                        <div className="skill-label">
                            {skill.name}
                            <span className="skill-percent">{skill.level}%</span>
                        </div>

                        {/* Skill bar background */}
                        <div className="skill-bar">
                            {/* Filled bar based on skill level */}
                            <div
                                className="skill-bar-fill"
                                style={{ width: `${skill.level}%` }}
                            ></div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
