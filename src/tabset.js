const Tabset = () => {
    return (
        <article>
            <div role="tablist">
                <a 
                    aria-controls="tabPanel-1" 
                    aria-selected="true" 
                    href="#" 
                    id="tab1"
                    role="tab" 
                    tabindex="0" 
                >
                    Video
                </a>
                <a 
                    aria-controls="tabPanel-2" 
                    aria-selected="false" 
                    href="#" 
                    id="tab2"
                    role="tab" 
                    tabindex="-1" 
                >
                    GIF
                </a>
            </div>
            <div 
                aria-labelledby="tab1"
                id="tabPanel-1" 
                role="tabpanel" 
            >
                <p className="mtm italic">Video: 5 minutes</p>
                <iframe className="projectVideo" src="https://drive.google.com/file/d/1kK1MqxrU_-YQVZ_mBEkTyw1h1f5l8Kao/preview">
                </iframe>
            </div>
            <div 
                aria-labelledby="tab2"
                id="tabPanel-2" 
                role="tabpanel" 
            >
                GIF 
                <iframe className="projectVideo" src="https://drive.google.com/file/d/1ChieYcAHwPVqCARhgS7AKn2LWdIFxTUx/preview">
                </iframe>
            </div>
        </article>
    );
};

export default Tabset;
