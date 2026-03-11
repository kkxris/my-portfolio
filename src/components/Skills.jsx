import { useEffect, useRef } from "react";
import "./Skills.css";

const skills = ["Frontend Dev", "Visual Designer", "React JS", "Backend Dev", "Figma"];

function Skills() {
    const orbitRef = useRef(null);
    const ringRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                orbitRef.current.classList.add("animate");
            }
        }, { threshold: 0.3 });
        observer.observe(orbitRef.current);
        return () => observer.disconnect();
    }, []);

    return (
            <section className="skills" id="skills">
            <div className="orbit" ref={orbitRef}>
                <div className="center-text">What i bring to the table?</div>
                 <div className="orbit-circle" /> 
                <div className="skills-ring" ref={ringRef}>
                    {skills.map((skill, i) => {
                        const angle = (i / skills.length) * 360;
                        const rad = (angle * Math.PI) / 180;
                        const x = 50 + 45 * Math.cos(rad);
                        const y = 50 + 45 * Math.sin(rad);
                        return (
                            <div
                                key={i}
                                className="skill-pill"
                                style={{
                                    top: `${y}%`,
                                    left: `${x}%`,
                                    transform: `translate(-50%, -50%)`
                                }}
                            >
                                {skill}
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

export default Skills;