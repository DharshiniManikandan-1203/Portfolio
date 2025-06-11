
import './Home.css';

export default function Home() {
    return (
        <section className="home-section">
            <div className="home-left">
                <span className="home-badge">Hello! 👋</span>
                <h1 className="home-title">I’m <span className="highlight">Dharshini</span></h1>
                <p className="home-subtitle">
                    UI/UX Designer, Front-End Developer & Thinker.<br />Based in India.
                </p>
                <div className="home-buttons">

                    <a
                        href="/resume.pdf"
                        download
                        className="btn orange"
                        style={{ marginBottom: '2rem', display: 'inline-block' }}
                    >
                        📄 Download Resume
                    </a>
                    <a className="btn dark get-in-touch-btn" href="/contact">Get in Touch!</a>
                </div>
                <div className="home-socials">
                    <a href="https://github.com/DharshiniManikandan-1203" target="_blank"><i className="fab fa-github"></i></a>
                    <a href="https://linkedin.com/in/dharshini-manikandan12" target="_blank"><i className="fab fa-linkedin"></i></a>
                </div>
            </div>

            <div className="home-right">
                <div className="yellow-blob">
                    <img className="home-image" src="https://i.postimg.cc/RCbKDsZc/IMG-5045.jpg" alt="Dharshini" />
                </div>

            </div>
        </section>
    );
}
