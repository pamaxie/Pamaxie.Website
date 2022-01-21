import React from 'react';
import {ErrorPage} from '../../components';

import image from '../../assets/img/error-429-image.png';

const headerText = "429 - Ratelimited";
const bodyText = "Due to too many requests from your IP address or computer we had to block you from establishing a connection with our website. If you think this was a mistake feel free to contact support or check the service status to see if there is any issues with our servers.";
const buttonInfo = [
    {"text":"Contact Support","path":"/"},
    {"text":"Service Status","path":"/"}
];

export function Error429() {
    return (
        <ErrorPage
            headerText={headerText}
            image={image}
            bodyText={bodyText}
            buttonInfo={buttonInfo}>
        </ErrorPage>
    )
}