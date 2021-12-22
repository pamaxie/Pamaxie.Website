import React from 'react';
import ErrorPage from '../../components/ErrorPage'

import image from '../../assets/img/error-403-image.png'

const buttonInfo = [
    {"text":"Contact Support","path":"/"}
];

export default function Error403() {
    return (
        <ErrorPage
            headerText="403 - Forbidden"
            image={image}
            bodyText="You seem to be accessing a site that you should either not be accessing with your web browser (but a seperate API client) or found a bug. If you think you should be able to access this page, please contact your system administrator"
            buttonInfo={buttonInfo}>
        </ErrorPage>
    )
}