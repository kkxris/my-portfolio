import "./About.css";
function About() {
    return (
        <div>
            <section className="about" id="about">
            <div className="about-right">
            <h1>About Me</h1>
            <p>
                Hi, I’m Karishma.
                I love building things on the web — from small interactive elements to complete layouts that feel clean and intentional.I’m drawn to the balance between logic and creativity, where structure meets design.
                I’m always learning, always experimenting, and always trying to make my next project better than the last. For me, development is a process of curiosity, discipline, and constant growth.
            </p> 
            </div>
        <div className="about-left">
             <img src="/pic1.jpg" alt="image 1" className="img_1" /> 
             <img src="/pic2.jpg" alt="image 2" className="img_2" />
        </div>
        </section>
        <a href="/Resume.pdf" download>
    <button>Download my resume</button>
</a>
     </div>
    );
}
export default About;