import React, { useState, useEffect, useRef } from "react";
import classNames from "classnames";
import { GiHamburgerMenu } from "react-icons/gi";
import logo from "./logo.svg";
import dfPhoto from "./dreamforceCustomerChallenge.png";
import prototypePhoto from "./designSystemPrototype.png";

import "../node_modules/colors.css/css/colors.min.css";
import "./App.css";
import data from "./data.js";
import Tabset from "./tabset.js";
import Navigation from "./navigation.js";

function App() {
  const [navMenu, setNavMenu] = useState(false);

  const handleMenuTriggerClick = () => {
    setNavMenu(!navMenu);
  };

  return (
    <div className="phm phl--screenM phxx--screenL df--screenM df-spaceBetween--screenM">
      <header className="mtm mt0--screenM ptxx--screenM df df-column header">
        <section className="sticky pos-rel--screenM">
          <div className="phs df bg-blue df-spaceBetween df-alignCenter dib--screenM ">
            <h1 className="dib text-1 text-1--screenM white bold tracking-tight">
              Donielle Berg
            </h1>
            <button
              className="mvs button navButton white"
              aria-label="Toggle Navigation Menu"
              onClick={handleMenuTriggerClick}
            >
              <GiHamburgerMenu className="buttonIcon" />
            </button>
          </div>
          <nav
            className={classNames("pam mbm nav bg-white brs", { dn: !navMenu })}
          >
            <ul
              style={{ listStyle: "none", margin: 0, padding: 0 }}
              className="text-3 caps"
            >
              <li className="pos-rel mvm">
                <a
                  href="#about"
                  className="pvs a-underline"
                  onClick={handleMenuTriggerClick}
                >
                  <span>About</span>
                </a>
              </li>
              <li className="pos-rel mvm">
                <a
                  href="#projects"
                  className="pvs a-underline"
                  onClick={handleMenuTriggerClick}
                >
                  <span>Projects</span>
                </a>
              </li>
              <li className="pos-rel mvm">
                <a
                  href="#experience"
                  className="pvs a-underline"
                  onClick={handleMenuTriggerClick}
                >
                  <span>Experience</span>
                </a>
              </li>
            </ul>
          </nav>
        </section>
        <p className="mts text-3 text-2--screenM bold tracking-tight">
          Accessibility Designer & Engineer
        </p>
        <p className="mts text-3">
          I create accessible, inclusive, and useful products on the web.
        </p>
        <Navigation />
      </header>
      <main className="main text-3--screenM plx--screenM">
        <section data-section id="about" className="ptxx--screenM">
          <p className="mbs mtl mt0--screenM text-3 text-2--screenM tracking-tight">
            Arrived by accident, staying with intention.
          </p>
          <p className="mbm">
            I accidentally became a UX Engineer while creating email templates
            at a non-profit. I accidentally got into accessibility because a
            friend lovingly told me they couldn't use what I had built.
          </p>
          <p className="mbm">
            I'm staying with intetion because the work is fun, challenging, and
            most of all, needed. Accessibility removes barriers for People with
            Disabilities and is the most tangible way to build inclusion into a
            product.
          </p>
          <p className="mbm">
            I'm based in the Bay Area, CA. I was a long-time volunteer at San
            Quentin Prison and am still very interested in Justice Reform. On
            the weekends you can find me spending time with family, hiking,
            sewing, or having dance parties in my living room.
          </p>
        </section>
        <section data-section id="projects" className="ptx">
          <div className="df df-end">
            <hr className="df-grow mrm mv-auto" />
            <h2 className="text-2 caps bold">Projects</h2>
          </div>
          <article>
            <h3 className="dib phs mvm mv0--screenM text-3--screenM bg-blue white bold tracking-tight">
              Figma A11y Annotations Library
            </h3>
            <p className="mvl--screenM">{data.figmaA11y}</p>
            <Tabset.Tabs aria-label="Figma A11y Demos">
              <Tabset.Item key="FoR" title="Video">
                <iframe
                  width="560"
                  height="315"
                  className="projectVideo projectVideo--screenM projectVideo--screenL"
                  src="https://www.youtube.com/embed/eOvN9b7xDR0?si=LIVFakHWNKs2ONEW"
                  title="Youtube Figma A11y Annotations Demo"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </Tabset.Item>
              <Tabset.Item key="MaR" title="GIF">
                <iframe
                  className="projectVideo projectVideo--screenM projectVideo--screenL"
                  src="https://drive.google.com/file/d/1ChieYcAHwPVqCARhgS7AKn2LWdIFxTUx/preview"
                  title="GIF Figma A11y Annotations Demo"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </Tabset.Item>
            </Tabset.Tabs>
          </article>
          <article className="ptxx--screenM">
            <h3 className="dib phs mvm mv0--screenM text-3--screenM bg-blue white bold tracking-tight">
              Dreamforce A11y Customer Challenge
            </h3>
            <p className="mvl--screenM">{data.dreamforceProject}</p>
            <Tabset.Tabs aria-label="Dreamforce A11y Demos">
              <Tabset.Item key="DFvid" title="Screenshot">
                <img
                  className="projectVideo projectVideo--screenM projectVideo--screenL"
                  src={dfPhoto}
                  alt="Dreamforce Project Screenshot"
                />
              </Tabset.Item>
              <Tabset.Item key="DFgif" title="GIF">
                <iframe
                  className="projectVideo projectVideo--screenM projectVideo--screenL"
                  src="https://drive.google.com/file/d/1loFu4zE2NPKWvVnTANz_XTZQw-ANQ9fx/preview"
                  title="GIF Dreamforce Project demo"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </Tabset.Item>
            </Tabset.Tabs>
          </article>
          <article className="ptxx--screenM">
            <h3 className="dib phs mvm mv0--screenM text-3--screenM bg-blue white bold tracking-tight">
              Design System A11y User Research
            </h3>
            <p className="mvl--screenM">{data.prototype}</p>
            <img
              className="projectVideo projectVideo--screenM projectVideo--screenL"
              src={prototypePhoto}
              alt="Screenshot of prototype"
            />
          </article>
        </section>
        <section data-section id="experience" className="ptx">
          <div className="mtx df df-end">
            <hr className="df-grow mrm mv-auto" />
            <h2 className="text-2 caps bold">Experience</h2>
          </div>
          <article className="mtx df--screenL">
            <p className="year">{data.experience1.year}</p>
            <div className="pll--screenL">
              <div className="df df-spaceBetween">
                <h3>{data.experience1.title}</h3>
                <h3>{data.experience1.company}</h3>
              </div>
              <p className="mtm">{data.experience1.description}</p>
            </div>
          </article>
          <article className="mtx df--screenL">
            <p className="year">{data.experience2.year}</p>
            <div className="pll--screenL">
              <div className="df df-spaceBetween">
                <h3>{data.experience2.title}</h3>
                <h3>{data.experience2.company}</h3>
              </div>
              <p className="mtm">{data.experience2.description}</p>
            </div>
          </article>
          <article className="mtx df--screenL">
            <p className="year">{data.experience3.year}</p>
            <div className="pll--screenL">
              <div className="df df-spaceBetween">
                <h3>{data.experience3.title}</h3>
                <h3>{data.experience3.company}</h3>
              </div>
              <p className="mtm">{data.experience3.description}</p>
            </div>
          </article>
          <article className="mtx df--screenL">
            <p className="year">{data.experience4.year}</p>
            <div className="pll--screenL">
              <div className="df df-spaceBetween">
                <h3>{data.experience4.title}</h3>
                <h3>{data.experience4.company}</h3>
              </div>
              <p className="mtm">{data.experience4.description}</p>
            </div>
          </article>
        </section>
        <p className="mvxx italic">
          This website was created by me with the help of &nbsp;
          <span className="pos-rel">
            <a
              className="a-underline--screenM"
              href="https://create-react-app.dev/"
            >
              Create React App
            </a>
          </span>
          ,&nbsp;
          <span className="pos-rel">
            <a
              className="a-underline--screenM"
              href="https://pages.github.com/"
            >
              Github
            </a>
          </span>
          , and the design was inspired by&nbsp;
          <span className="pos-rel">
            <a
              className="a-underline--screenM"
              href="https://github.com/bchiang7"
            >
              Brittany Chiang
            </a>
            .
          </span>
        </p>
      </main>
    </div>
  );
}

export default App;
