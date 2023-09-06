import React, { useState, useEffect } from "react";
import logo from './logo.svg';
import dfPhoto from './dreamforceCustomerChallenge.png';
import '../node_modules/colors.css/css/colors.min.css';
import './App.css';
import data from './data.js';
import Tabset from './tabset.js';
import Navigation from './navigation.js';

function App() {
    return (
        <div className="phxx df df-spaceBetween">
            <header className="ptxx df df-column header">
                <h1 className="phs dib bg-blue text-1 white bold tracking-tight">Donielle Berg</h1>
                <p className="mts text-3 bold tracking-tight">Lead Accessibility Engineer</p>
                <p className="mts text-3">I build accessible, inclusive, and useful products on the web.</p>
                <Navigation />
            </header>
            <main className="main ptxx plx text-3">
                <section data-section id="about">
                    <p className="mbm text-2">
                        Came here by accident but staying with intention.
                    </p>
                    <p className="mbm">
                        I accidentally became a UI Engineer because I needed to create HTML email templates while running events at a non-profit. 
                        Then I accidentally got into accessibility because I made an inaccessible website and a loving friend told me so.
                        I'm here with intetion because this work is fun, challenging, and most of all, it's needed. 
                        Accessibility removes barriers for People with Disabilities and is the most tangible way to build inclusion into a product. 
                    </p>
                    <p className="mbm">
                        I was a long-time volunteer at San Quentin Prison and am interested in Justice Reform. I'm based in the Bay Area, CA, and on the weekends you can find me spending time with family, hiking, sewing, or having dance parties in my living room.
                    </p>
                </section>
                <section data-section id="projects" className="ptx">
                    <div className="df df-end">
                        <hr className="df-grow mrm mv-auto" />
                        <h2 className="text-2 caps bold">Projects</h2>
                    </div>
                    <article>
                        <h3 className="dib phs text-3 bg-blue white bold tracking-tight">Figma A11y Annotations Library</h3>
                        <p className="mvl">{data.figmaA11y}</p>
                        <Tabset.Tabs aria-label="Figma A11y Demos">
                            <Tabset.Item key="FoR" title="Video">
                                <iframe 
                                    width="560" 
                                    height="315" 
                                    className="projectVideo"
                                    src="https://www.youtube.com/embed/eOvN9b7xDR0?si=LIVFakHWNKs2ONEW" 
                                    title="Youtube Figma A11y Annotations Demo" 
                                    frameBorder="0" 
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                                    allowFullScreen
                                >
                                </iframe>
                            </Tabset.Item>
                            <Tabset.Item key="MaR" title="GIF">
                                <iframe
                                    className="projectVideo"
                                    src="https://drive.google.com/file/d/1ChieYcAHwPVqCARhgS7AKn2LWdIFxTUx/preview"
                                    title="GIF Figma A11y Annotations Demo" 
                                    frameBorder="0" 
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                                    allowFullScreen
                                >
                                </iframe>
                            </Tabset.Item>
                        </Tabset.Tabs>
                    </article>

                    <article className="ptxx">
                        <h3 className="dib phs text-3 bg-blue white bold tracking-tight">Dreamforce A11y Customer Challenge</h3>
                        <p className="mvl">{data.dreamforceProject}</p>
                        <Tabset.Tabs aria-label="Dreamforce A11y Demos">
                            <Tabset.Item key="DFvid" title="Screenshot">
                                <img className="projectVideo " src={dfPhoto} alt="Dreamforce Project Screenshot" />
                            </Tabset.Item>
                            <Tabset.Item key="DFgif" title="GIF">
                                <iframe
                                    className="projectVideo"
                                    src="https://drive.google.com/file/d/1loFu4zE2NPKWvVnTANz_XTZQw-ANQ9fx/preview"
                                    title="GIF Dreamforce Project demo" 
                                    frameBorder="0" 
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                                    allowFullScreen
                                >
                                </iframe>
                            </Tabset.Item>
                        </Tabset.Tabs>
                    </article>
                </section>
                <section data-section id="experience" className="ptx">
                    <div className="mtx df df-end">
                        <hr className="df-grow mrm mv-auto" />
                        <h2 className="text-2 caps bold">Experience</h2>
                    </div>
                    <article className="mtx df">
                        <p className="year">{data.experience1.year}</p>
                        <div className="pll">
                            <div className="df df-spaceBetween">
                                <h3>{data.experience1.title}</h3>
                                <h3>{data.experience1.company}</h3>
                            </div>
                            <p className="mtm">{data.experience1.description}</p>
                        </div>
                    </article>
                    <article className="mtx df">
                        <p className="year">{data.experience2.year}</p>
                        <div className="pll">
                            <div className="df df-spaceBetween">
                                <h3>{data.experience2.title}</h3>
                                <h3>{data.experience2.company}</h3>
                            </div>
                            <p className="mtm">{data.experience2.description}</p>
                        </div>
                    </article>
                    <article className="mtx df">
                        <p className="year">{data.experience3.year}</p>
                        <div className="pll">
                            <div className="df df-spaceBetween">
                                <h3>{data.experience3.title}</h3>
                                <h3>{data.experience3.company}</h3>
                            </div>
                            <p className="mtm">{data.experience3.description}</p>
                        </div>
                    </article>
                </section>
                <p className="mvxx italic">
                    This website was created by me with the help of <a href="https://create-react-app.dev/">Create React App</a>, <a className="https://pages.github.com/">Github pages</a>, and the design was inspired by <a href="https://github.com/bchiang7">Brittany Chiang</a>.
                </p>
            </main>
        </div>
    );
}

export default App;
