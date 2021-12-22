import React from 'react';
import ErrorPage from '../../components/ErrorPage'

import image from '../../assets/img/error-401-image.png'

const buttonInfo = [
    {"text":"Contact Support","path":"/"}
];

export default function Error401() {
    return (
        <ErrorPage
            headerText="401 - UNAUTHORIZED"
            image={image}
            bodyText="You do not have access to the page or resource you are currently trying to access. Please make sure you are logged in. If you are still unable to access this page after logging in please contact your system administrator."
            buttonInfo={buttonInfo}>
        </ErrorPage>
    )
}