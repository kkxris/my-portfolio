import "./Contact.css";

function Contact() {
    return (
            <section className="contact" id="contact">
            <div className="contact-left">
                <p className="contact-name">Karishma Joshi</p>
                <h1 className="contact-heading"><span>C</span>ontact</h1>
                <p className="contact-tagline">Thank you for viewing my portfolio!</p>

                <div className="contact-links">
                    <a href="mailto:joshikarishma169@gmail.com">E-mail</a>
                    <a href="https://www.linkedin.com/in/karishma-joshi-555b28363?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank">LinkedIn</a>
                    <a href="https://github.com/kkxris" target="_blank">GitHub</a>
                    <a href="https://instagram.com/yourprofile" target="_blank">Instagram</a>
                </div>

                <p className="contact-footer">Designer & Developer • peace</p>
            </div>

            <div className="contact-right">
                <video autoPlay muted loop playsInline>
                    <source src="/portvideo.mp4" type="video/mp4" />
                </video>
            </div>
        </section>
    );
}

export default Contact;