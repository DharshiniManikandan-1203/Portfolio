
import './About.css';

export default function About() {
    return (
        <section className="page-section" id="about">
            {/* Yellow background blob on the left */}
            <div className="blob yellow-blob"></div>

            {/* Gray background blob on the right */}
            <div className="blob gray-blob"></div>

            <div className="about-content">
                {/* Left: Big Title */}
                <div className="about-left">
                    <h2 className="about-heading">About Me <span className="emoji">👈</span></h2>
                </div>

                {/* Right: Text description */}
                <div className="about-right">
                    <p>
                        I'm a <strong>Frontend Developer</strong> passionate about crafting beautiful, user-friendly web experiences. <br /><br />
                        I focus on clean UI/UX design, responsive layouts, and modern JavaScript frameworks like <strong>ReactJS</strong>. <br /><br />
                        I love turning creative ideas into pixel-perfect websites, and I’m always learning new tools and technologies to push boundaries.
                    </p>
                </div>
            </div>
        </section>
    );
}
