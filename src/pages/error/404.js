import React from 'react';
import ErrorPage from '../../components/ErrorPage'

import image from '../../assets/img/error-404-image.png'

const buttonInfo = [
    {"text":"Home","path":"/"},
    {"text":"Contact Support","path":"/"},
    {"text":"Service Status","path":"/"},
    {"text":"Manage Your Account","path":"/"}
];

export default function Error404() {
    return (
        <ErrorPage
            headerText="404 - Not Found"
            image={image}
            bodyText="The web page you are currently trying to access does not exist. Please validate that the url is correct. If you can’t find any error there, please use the buttons provided below to help you out find your way back to safety."
            buttonInfo={buttonInfo}>
        </ErrorPage>
    )
}