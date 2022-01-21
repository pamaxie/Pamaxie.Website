import React from 'react';
import {ErrorPage} from '../../components';

import image from '../../assets/img/error-404-image.png';

const headerText = "404 - Not Found";
const bodyText = "The web page you are currently trying to access does not exist. Please validate that the url is correct. If you can’t find any error there, please use the buttons provided below to help you out find your way back to safety.";
const buttonInfo = [
    {"text":"Home","path":"/"},
    {"text":"Contact Support","path":"/"},
    {"text":"Service Status","path":"/"},
    {"text":"Manage Your Account","path":"/"}
];

export function Error404() {
    return (
        <ErrorPage
            headerText={headerText}
            image={image}
            bodyText={bodyText}
            buttonInfo={buttonInfo}>
        </ErrorPage>
    )
}