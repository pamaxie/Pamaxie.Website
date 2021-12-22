import React from 'react';
import ErrorPage from '../../components/ErrorPage'

import image from '../../assets/img/error-429-image.png'

const buttonInfo = [
    {"text":"Contact Support","path":"/"},
    {"text":"Service Status","path":"/"}
];

export default function Error429() {
    return (
        <ErrorPage
            headerText="429 - Ratelimited"
            image={image}
            bodyText="Due to too many requests from your IP address or computer we had to block you from establishing a connection with our website. If you think this was a mistake feel free to contact support or check the service status to see if there is any issues with our servers."
            buttonInfo={buttonInfo}>
        </ErrorPage>
    )
}