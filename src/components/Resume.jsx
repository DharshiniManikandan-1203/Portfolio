
import './Resume.css';

export default function Resume() {
    return (
        <section className="resume-section">
            <h2 className="resume-title">My Resume</h2>

            <div className="resume-columns">
                {/* Education Column */}
                <div className="resume-column">
                    <h3 className="resume-subtitle">Education</h3>
                    <div className="resume-item">
                        <h4>Bachelor of Science</h4>
                        <p>Computer Technology – Bharathiyar University</p>
                        <span className="resume-date">2022 – 2025</span>
                    </div>
                    <div className="resume-item">
                        <h4>Higher Secondary</h4>
                        <p>Ponnaiyah Ramajayam Public School (CBSE)</p>
                        <span className="resume-date">2019 – 2021</span>
                    </div>
                </div>

                {/* Experience Column */}
                <div className="resume-column">
                    <h3 className="resume-subtitle">Experience</h3>
                    <div className="resume-item">
                        <h4>Frontend Intern</h4>
                        <p>Infosys</p>
                        <span className="resume-date">June 2023 – Aug 2023</span>
                    </div>
                </div>

            </div>
        </section>
    );
}
