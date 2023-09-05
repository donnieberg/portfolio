import logo from './logo.svg';
import dfPhoto from './dreamforceCustomerChallenge.png';
import '../node_modules/colors.css/css/colors.min.css';
import './App.css';
import data from './data.js';
import Tabset from './tabset.js';

function App() {
    return (
        <div className="phxx df df-spaceBetween">
            <header className="ptxx df df-column header">
                <h1 className="phs dib bg-blue text-1 white bold tracking-tight">Donielle Berg</h1>
                <p className="mts text-3 bold tracking-tight">Lead Accessibility Engineer</p>
                <p className="mts text-3">I build accessible, inclusive, and useful products on the web.</p>
                <nav className="nav text-4 caps bold">
                    <ul className="list-plain">
                        <li className="mvm"><a href="#">About</a></li>
                        <li className="mvm"><a href="#">Projects</a></li>
                        <li className="mvm"><a href="#">Experience</a></li>
                    </ul>
                </nav>
            </header>
            <main className="main ptxx pll text-3">
                <article>
                    {data.about}
                </article>
                <div className="mvx">
                    <div className="df df-end">
                        <hr className="df-grow mrm mv-auto" />
                        <h2 className="text-2 caps bold">Projects</h2>
                    </div>
                    <article>
                        <h3 className="text-3">Figma A11y Annotations Library</h3>
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
                        <h3 className="text-3">Dreamforce A11y Customer Challenge</h3>
                        <p className="mvl">{data.dreamforceProject}</p>
                        <Tabset.Tabs aria-label="Dreamforce A11y Demos">
                            <Tabset.Item key="DFvid" title="Screenshot">
                                <img className="" src={dfPhoto} alt="Dreamforce Project Screenshot" />
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
                </div>
            </main>
        </div>
    );
}

export default App;
