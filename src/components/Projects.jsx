import { useState, useEffect } from "react";
import "./Projects.css";

const designProjects = [
    { id: 1, image: "/image1.jpeg"},
    { id: 2, image: "/image2.jpeg"},
    { id: 3, image: "/image3.jpeg"},
    { id: 4, image: "/image4.jpeg"},
    { id: 5, image: "/image5.jpeg"},
];

const webDevProjects = [
    { id: 1, title: "Bakery Website", desc: "A warm aesthetic bakery landing page.", tech: "HTML, CSS, JS", image: "/bakery.png",link: "https://your-link-1.com" },
    { id: 2, title: "Music Player", desc: "A sleek music player with playlist support.", tech: "Javascript, CSS", image: "/music.png", link:" https://kkxris.github.io/Music-player/" },
    { id: 3, title: "Flappy Bird", desc: "Classic flappy bird game recreated.", tech: "HTML, CSS , JS,", image: "/flappy.png",link: "https://kkxris.github.io/flappy-bird/" },
    { id: 4, title: "Dress Up Game", desc: "An interactive dress up game.", tech: "React JS", image: "/dress.png", link:"https://kkxris.github.io/Dress-up-game/" },
    { id: 5, title: "To Do List", desc: "Clean task manager with local storage.", tech: "HTML, CSS, JS ", image: "/todo.png", link:"https://kkxris.github.io/to-do-list/" },
]

function Projects() {
    const [current, setCurrent] = useState(0);
    const total = designProjects.length;
    const [paused, setPaused] = useState(false);

    useEffect(() => {
        if (paused) return;
        const timer = setInterval(() => {
            setCurrent(prev => (prev + 1) % total);
        }, 1000);
        return () => clearInterval(timer);
    }, [paused]);

    const getStyle = (i) => {
        const diff = (i - current + total) % total;
        if (diff === 0) return {
            transform: "translateX(0px) scale(1) rotateY(0deg)",
            zIndex: 5, opacity: 1,
        };
        if (diff === 1) return {
            transform: "translateX(280px) scale(0.85) rotateY(-20deg)",
            zIndex: 4, opacity: 0.85,
        };
        if (diff === 2) return {
            transform: "translateX(480px) scale(0.7) rotateY(-35deg)",
            zIndex: 3, opacity: 0.6,
        };
        if (diff === total - 1) return {
            transform: "translateX(-280px) scale(0.85) rotateY(20deg)",
            zIndex: 4, opacity: 0.85,
        };
        if (diff === total - 2) return {
            transform: "translateX(-480px) scale(0.7) rotateY(35deg)",
            zIndex: 3, opacity: 0.6,
        };
        return { transform: "translateX(0px) scale(0.5)", zIndex: 1, opacity: 0 };
    };

    const next = () => setCurrent(prev => (prev + 1) % total);
    const prev = () => setCurrent(prev => (prev - 1 + total) % total);

    return (
        <>
        
        <section className="projects" id="projects">
          
            <h1 className="projects-heading">Design Projects</h1>
            <div className="fan-carousel"> 
                <div
                    className="fan-track"
                    onMouseEnter={() => setPaused(true)}
                    onMouseLeave={() => setPaused(false)}
                >
                    {designProjects.map((slide, i) => (
                        <div
                            className="fan-slide"
                            key={slide.id}
                            style={getStyle(i)}
                            onClick={() => setCurrent(i)}
                        >
                            <img src={slide.image} alt={slide.title} />
                            <h3>{slide.title}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        <section className="webdev">
            <h1 className="projects-heading">Web Dev Projects</h1>
            <div className="webdev-track">
                {[...webDevProjects, ...webDevProjects].map((p, i) => (
                    <div className="webdev-card" key={i}>

                         <a href={p.link} target="_blank" rel="noreferrer">
    <img src={p.image} alt={p.title} className="webdev-card-img" />
</a>
                        <div className="webdev-card-info">
                            <h3>{p.title}</h3>
                            <p>{p.desc}</p>
                            <span className="tech">{p.tech}</span>
                        </div> 
                       
                    </div>
                ))} 
                
            </div>
        </section>
        </>
    );
}

export default Projects;