import React from 'react';
import {ErrorPage} from '../../components';

import image from '../../assets/img/error-401-image.png';

const headerText = "401 - UNAUTHORIZED";
const bodyText = "You do not have access to the page or resource you are currently trying to access. Please make sure you are logged in. If you are still unable to access this page after logging in please contact your system administrator.";
const buttonInfo = [
    {"text":"Contact Support","path":"/"}
];

export function Error401() {
    return (
        <ErrorPage
            headerText={headerText}
            image={image}
            bodyText={bodyText}
            buttonInfo={buttonInfo}>
        </ErrorPage>
    )
}