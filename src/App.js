import logo from './logo.svg';
import '../node_modules/colors.css/css/colors.min.css';
import './App.css';
import data from './data.js';
import Tabset from './tabset.js';

function App() {
    return (
        <div className="df ptxx phxx">
            <header className="header">
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
            <main className="main pll text-3">
                <div>
                    {data.about}
                </div>
                <div className="mvx">
                    <div className="df df-end">
                        <hr className="df-grow mrm mv-auto" />
                        <h2 className="text-2 caps bold">Projects</h2>
                    </div>
                    <article>
                        <h3 className="text-3">Figma A11y Annotations Library</h3>
                        <p className="mtl">{data.figmaA11y}</p>
                        <Tabset />
                    </article>
                </div>
            </main>
        </div>
    );
}

export default App;
