
import './Projects.css';

// Sample project data
const projectList = [

    {
        title: 'Expense Tracker',
        description: 'A responsive Expense Tracker app that allows users to add, delete, and categorize income and expenses while tracking their financial balance in real time.',
        image: 'https://via.placeholder.com/300x200',
    },
    {
        title: 'Portfolio Website',
        description: 'A simple and responsive personal portfolio built with ReactJS.',
        image: 'https://via.placeholder.com/300x200',
    },
];

export default function Projects() {
    return (
        <section className="page-section" id="projects">
            <h2 className="projects-title">My Projects</h2>

            <div className="projects-grid">
                {projectList.map((proj, index) => (
                    <div className="project-card" key={index}>
                        <img src={proj.image} alt={proj.title} className="project-image" />
                        <h3 className="project-title">{proj.title}</h3>
                        <p className="project-desc">{proj.description}</p>
                        <div className="project-links">
                            <a href="#"  >Live Demo</a>
                            <a href="#" >Code</a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
