import {Component} from "react";
import {BrowserRouter as Router} from 'react-router-dom';
import {ErrorBoundary} from 'react-error-boundary';
import Routing from './Routing';
import {History} from './helpers';
import {Footer, NavMenu} from './components';
import {Error401, Error403, Error404, Error429, Error502, Error503} from './pages/error';

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

export default class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ErrorBoundary
                FallbackComponent={errorPage} //Not sure if this way works, else we will change away from using 'react-error-boundary' and make our own
                onError={(error, errorInfo) => errorPage = renderErrorPage(error, errorInfo)}
            >
                <Router history={History}>
                    <NavMenu/>
                    <Routing/>
                    <Footer/>
                </Router>
            </ErrorBoundary>
        );
    }
}