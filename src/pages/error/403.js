import React from 'react';
import {ErrorPage} from '../../components';

import image from '../../assets/img/error-403-image.png';

const headerText = "403 - Forbidden";
const bodyText = "You seem to be accessing a site that you should either not be accessing with your web browser (but a seperate API client) or found a bug. If you think you should be able to access this page, please contact your system administrator";
const buttonInfo = [
    {"text":"Contact Support","path":"/"}
];

export function Error403() {
    return (
        <ErrorPage
            headerText={headerText}
            image={image}
            bodyText={bodyText}
            buttonInfo={buttonInfo}>
        </ErrorPage>
    )
}