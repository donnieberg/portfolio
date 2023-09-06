import React, { useState, useEffect, useRef } from 'react';

const Navigation = () => {
    const [activeSection, setActiveSection] = useState(null);
    const sections = useRef([]);

    const handleScroll = () => {
        const pageYOffset = window.pageYOffset;
        let newActiveSection = activeSection;

        sections.current.forEach((section) => {
            const sectionOffsetTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;

            if (pageYOffset >= sectionOffsetTop && pageYOffset 
                < sectionOffsetTop + sectionHeight) {
                newActiveSection = section.id;
            }
        });

        setActiveSection(newActiveSection);
    };


    useEffect(() => {
        sections.current = document.querySelectorAll('[data-section]');
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleClick = (sectionId) => {
        return () => {
            setActiveSection(sectionId)
        }
    };

    return (
        <>
            <nav className="nav text-4 caps bold">
                <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
                    <li>
                        <a href="#about" onClick={handleClick('about')} className={activeSection === 'about' ? 'mvs df df-alignCenter navLink active' : 'mvs df df-alignCenter navLink'}>
                            <hr className="mrs transition line di" />
                            <span>About</span>
                        </a>
                    </li>
                    <li>
                        <a href="#projects" onClick={handleClick('projects')} className={activeSection === 'projects' ? 'mvs df df-alignCenter navLink active' : 'mvs df df-alignCenter navLink'}>
                            <hr className="mrs transition line di" />
                            <span>Projects</span>
                        </a>
                    </li>
                    <li>
                        <a href="#experience" onClick={handleClick('experience')} className={activeSection === 'experience' ? 'mvs df df-alignCenter navLink active' : 'mvs df df-alignCenter navLink'}>
                            <hr className="mrs transition line di" />
                            <span>Experience</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </>
    );
};

export default Navigation;
