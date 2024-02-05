import  { useEffect } from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const Main = () => {
    const loadScript = (url: string) => {
        return new Promise((resolve, reject) => {
            const script = document.createElement('script');
            script.src = url;
            script.async = false; // Set async to false to maintain order
            script.onload = resolve;
            script.onerror = reject;
            document.body.appendChild(script);
        });
    };

    useEffect(() => {
        // Load jQuery first
        loadScript('bower_components/jquery/dist/jquery.min.js')
            .then(() => {
                console.log('Loaded jquery.js');
                // Now load the scripts that depend on jQuery
                return Promise.all([
                    loadScript('bower_components/jquery-cookie/jquery.cookie.js'),
                    loadScript('bootstrap/dist/js/bootstrap.min.js'),
                    loadScript('bower_components/jqBootstrapValidation/dist/jqBootstrapValidation-1.3.7.min.js'),
                    loadScript('bower_components/minicolors/jquery.minicolors.min.js'),
                    loadScript('bower_components/slick.js/slick/slick.min.js'),
                    loadScript('bower_components/shufflejs/dist/jquery.shuffle.min.js'),
                    loadScript('bower_components/textillate/assets/jquery.lettering.js'),
                    loadScript('bower_components/textillate/assets/jquery.fittext.js'),
                    loadScript('bower_components/textillate/jquery.textillate.js'),
                    loadScript('scripts/script-bundle.js')
                ]);
            })
            .then(() => {
                console.log('All jQuery dependent scripts loaded successfully');
            })
            .catch((error) => {
                console.error('Failed to load a script', error);
            });

        // Load other scripts that do not depend on jQuery
        loadScript('bower_components/less.js/dist/less.min.js')
            .then(() => console.log('Loaded less.js'))
            .catch((error) => console.error('Failed to load less.js', error));

        loadScript('lib/tween/tween.min.js')
            .then(() => console.log('Loaded tween.js'))
            .catch((error) => console.error('Failed to load tween.js', error));

        loadScript('lib/modernizr-edited.js')
            .then(() => console.log('Loaded modernizr-edited.js'))
            .catch((error) => console.error('Failed to load modernizr-edited.js', error));

        loadScript('https://maps.googleapis.com/maps/api/js?sensor=false')
            .then(() => console.log('Loaded Google Maps API'))
            .catch((error) => console.error('Failed to load Google Maps API', error));

        loadScript('lib/prism/prism.js')
            .then(() => console.log('Loaded prism.js'))
            .catch((error) => console.error('Failed to load prism.js', error));

        // Check for browser compatibility and load scripts conditionally
        if (Function('/*@cc_on return document.documentMode===9@*/')()) {
            document.documentElement.classList.add('ie9');
        }
        if (Function('/*@cc_on return document.documentMode===10@*/')()) {
            document.documentElement.classList.add('ie10');
        }
        if (navigator.userAgent.match(/Trident.*rv\\:11\./)) {
            document.documentElement.classList.add('ie11');
        }
    }, []);

    return <App />;
};

ReactDOM.render(<Main />, document.getElementById('root'));