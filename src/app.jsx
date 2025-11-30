import { useEffect, useState } from "preact/hooks";
import Tilt from "react-parallax-tilt";
import Section from "./components/Section.jsx";
import useWindowSize from "./hooks/useWindowSize.jsx";
import Typewriter from "./components/Typewriter.jsx";
import { IconBrandGithub, IconHeart, IconMail, IconMailUp, IconSend } from "@tabler/icons-react";

const updateMousePosition = (ev) => {
    const { clientX, clientY } = ev;
    document.documentElement.style.setProperty("--x", `${clientX}px`);
    document.documentElement.style.setProperty("--y", `${clientY}px`);
};

function App() {
    const { width } = useWindowSize();

    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        formData.append("access_key", "f3d2eeba-bf01-496d-b1e1-e4571c871e15");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData,
        });

        const data = await response.json();
        setResult(data.success ? "Message sent successfully!" : "Sorry, an error has occured!");
    };

    useEffect(() => {
        if (width < 768) {
            document.documentElement.style.setProperty("--x", "50%");
            document.documentElement.style.setProperty("--y", "50%");
        } else {
            window.addEventListener("mousemove", updateMousePosition);
        }

        return () => {
            window.removeEventListener("mousemove", updateMousePosition);
        };
    }, [width]);

    useEffect(() => {
        const header = document.querySelector("header");
        // get the height of the header including padding
        const headerHeight = header.offsetHeight;

        document.documentElement.style.setProperty("--current-header-height", `${headerHeight}px`);

        const updateHeader = () => {
            const toggleClass = "is-sticky";
            const currentScroll = window.scrollY;
            if (currentScroll > 146) {
                header.classList.add(toggleClass);
            } else {
                header.classList.remove(toggleClass);
            }
        };
        window.addEventListener("scroll", updateHeader);

        return () => {
            window.removeEventListener("scroll", updateHeader);
        };
    }, []);

    const words = [
        "Full-Stack Developer.",
        "Javascript Fan.",
        "Frontend-Engineer.",
        "Pixel-Perfect Coder.",
    ];

    return (
        <>
            <header>
                <div id="header-inner">
                    <Tilt tiltMaxAngleX={16} tiltMaxAngleY={16}>
                        <div id="logo-header">
                            <div id="logo">BF</div>
                            <div id="name">
                                <span id="first-name">Benjamin</span>
                                <span id="last-name">Franz</span>
                            </div>
                        </div>
                    </Tilt>

                    <div id="header-right">
                        {/* <a href='https://www.linkedin.com/in/benjamin-franz/' title='Visit my linkedin profile' target='_blank'
               className='mobile-hidden'>
              <IconBrandLinkedin size={34}/>
            </a> */}
                        <a
                            href="https://www.github.com/BennyAlex/"
                            title="Visit my github profile"
                            target="_blank"
                            className="mobile-hidden btn secondary"
                        >
                            <IconBrandGithub size={34} />
                            github profile
                        </a>
                        <a href="#contact" title="Send me an email" target="self" className="btn">
                            Contact me
                        </a>
                    </div>
                </div>
            </header>

            <Section
                tag="about"
                component="main"
                h1
                title={
                    <Typewriter words={words}>
                        <span id="intro-headline">Hi, I'm Benjamin, </span>
                        <br /> a
                    </Typewriter>
                }
            >
                <p>
                    I have a passion for building web applications. Currently I am working at{" "}
                    <a href="https://www.eye-able.com/">WebInclusion</a> as a full-stack engineer.
                </p>
                <a
                    title="Look at my CV / Resume"
                    href="https://bennyalex.github.io/CV-Resume/"
                    target="_blank"
                    className="btn"
                >
                    CV / Resume
                </a>
            </Section>

            <Section
                tag="experience"
                title="My Work Experience"
                tiltProps={{
                    tiltMaxAngleX: 1,
                    tiltMaxAngleY: 7,
                }}
            >
                <div className="experience">
                    <div className="experience-item">
                        <h3>WebInclusion GmbH</h3>
                        <h4>09.2022 - Present</h4>
                        <p>
                            As the lead responsible for the{" "}
                            <a href="https://dashboard.eye-able.com/demo/" target="_blank">
                                Eye-Able Dashboard
                            </a>
                            , I developed a comprehensive and interactive single-page-application
                            using React and Material UI, featuring detailed graphs and tables, an
                            PDF viewer showing accessibility errors, and a function to display
                            screenshots with marked bounding boxes. I also programmed a broken-link
                            checker and created a{" "}
                            <a
                                href="https://dashboard.eye-able.com/demo?goto=/tools/simple-language"
                                target="_blank"
                            >
                                web component{" "}
                            </a>
                            to simplify input text into easier language using the OpenAI API, aiding
                            in removing barriers in the web. Furthermore, I created an automated
                            Lighthouse crawler and a corresponding results page, to give our
                            customers a complete overview of their website’s performance and SEO.
                        </p>
                    </div>
                    <div className="experience-item">
                        <h3>Self-Employed</h3>
                        <h4>07.2021 - Present</h4>
                        <p>
                            I also work as a freelancer, creating websites for small businesses and
                            private persons. This often includes working with a CMS like Wordpress,
                            but I also create custom websites using php or javascript. Sometimes I
                            try my luck at repairing computers and other electronic devices.
                        </p>
                    </div>
                    <div className="experience-item">
                        <h3>FAAREN GmbH</h3>
                        <h4>02.2021 - 06.2021</h4>
                        <p>
                            As a software developer, I created the front- and backend for the{" "}
                            <a href="https://faaren.com/katalog/" target="_blank">
                                vehicle catalog
                            </a>
                            , using vue.js and Laravel.
                        </p>
                    </div>
                    <div className="experience-item">
                        <h3>Main-Post GmbH</h3>
                        <h4>09.2015 - 07.2018</h4>
                        <p>
                            I completed a three-year certified, state-recognized apprenticeship as a
                            Computer Science Expert in Software Development. I learnt a lot about
                            software development, creating user interfaces and how computers and the
                            internet work. I worked on a variety of projects using ember.js, vue.js,
                            php, python and MySQL and PostgreSQL databases.
                        </p>
                    </div>
                </div>
            </Section>

            <Section tag="contact" title="Get In Touch" id="contact">
                <p>
                    Feel free to reach out to me at if you have any questions or if you are
                    interested in working with me.
                </p>

                <form onSubmit={onSubmit}>
                    <div>
                        <label for="name">Your name</label>
                        <input type="text" name="name" required />
                    </div>
                    <div>
                        <label for="email">Your mail address</label>
                        <input type="email" name="email" required />
                    </div>
                    <div>
                        <label for="message">Your message</label>
                        <textarea name="message" required rows={5}></textarea>
                    </div>
                    <button type="submit">Send Message</button>
                    <p className="result">{result}</p>
                </form>

                <p style="margin-top: 54px">
                    <a
                        href="mailto:benjamin.alexander.franz@gmail.com"
                        title="Send me an email"
                        className="btn secondary"
                        style="margin: 0 auto"
                    >
                        <IconMail size={34} />
                        Reach me via e-email
                    </a>
                </p>
            </Section>

            <footer>
                <div className="desktop-hidden" id="mobile-links">
                    {/* <a href='https://www.linkedin.com/in/benjamin-franz/' title='Visit my linkedin profile' target='_blank'
                    >
                        <IconBrandLinkedin size={34}/>
                    </a> */}
                    <a
                        href="https://www.github.com/BennyAlex/"
                        title="Visit my github profile"
                        target="_blank"
                        className="btn secondary"
                    >
                        <IconBrandGithub size={34} />
                        github profile
                    </a>
                </div>
                Coded & Designed with <IconHeart size={24} stroke={2.5} /> by Benjamin Franz
            </footer>
        </>
    );
}

export default App;
