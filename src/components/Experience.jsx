import "./Experience.css";

function Experience() {
    return (
        <section className="experience" id="experience">
            <h1 className="exp-heading">My Journey</h1>
            <div className="timeline">

                <div className="timeline-item">
                    <div className="timeline-dot" />
                    <div className="timeline-card">
                        <span className="timeline-tag">Education</span>
                        <h3>Bachelor of Computer Applications</h3>
                        <p className="timeline-place">KLMDCW-affiliated with MDU</p>
                        <p className="timeline-date">2024 — 2028</p>
                        <p className="timeline-desc">
                            Pursuing BCA with focus on web development, 
                            data structures and software engineering.
                        </p>
                    </div>
                </div>

                <div className="timeline-item">
                    <div className="timeline-dot" />
                    <div className="timeline-card">
                        <span className="timeline-tag">Experience</span>
                        <h3>Graphic Designer Volunteer</h3>
                        <p className="timeline-place">InAmigos Foundation</p>
                        <p className="timeline-date">1 Month • 2026</p>
                        <p className="timeline-desc">
                            Contributed design skills to support 
                            the NGO's digital presence and outreach efforts.
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default Experience;