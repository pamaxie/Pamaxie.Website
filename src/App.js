import {BrowserRouter as Router} from 'react-router-dom';
import {ErrorBoundary} from 'react-error-boundary';
import NavMenu from './pages/shared/NavMenu';
import Footer from './pages/shared/Footer';
import Routing from './pages/shared/Routing';

import Error401 from './pages/error/404';
import Error403 from './pages/error/404';
import Error404 from './pages/error/404';
import Error429 from './pages/error/429';
import Error502 from './pages/error/404';
import Error503 from './pages/error/404';

import './assets/fonts/OpenDyslexic-Regular.otf';
import './assets/css/tailwind.min.css';
import './assets/css/pamaxie.css';

let errorPage;

function renderErrorPage(error, errorInfo) {
    console.log("YEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEET");
    console.log(error);
    console.log(errorInfo);
    switch (error)
    {
        case '401':
            return <Error401/>;
        case '403':
            return <Error403/>;
        case '404':
            return <Error404/>; //Moved to Routing.js, since I can't find a better solution.
        case '429':
            return <Error429/>;
        case '502':
            return <Error502/>;
        case '503':
            return <Error503/>;
    }
}

export default function App() {
    return (
        <ErrorBoundary
            FallbackComponent={errorPage} //Not sure if this way works, else we will change away from using 'react-error-boundary' and make our own
            onError={(error, errorInfo) => errorPage = renderErrorPage(error, errorInfo)}
        >
            <Router>
                <NavMenu/>
                <Routing/>
                <Footer/>
            </Router>
        </ErrorBoundary>
    );
}