import React from 'react';
import ErrorPage from '../../components/ErrorPage'

import image from '../../assets/img/error-503-image.png'

const buttonInfo = [
    {"text":"Contact Support","path":"/"},
    {"text":"Service Status","path":"/"}
];

export default function Error503() {
    return (
        <ErrorPage
            headerText="503 - Server Error"
            image={image}
            bodyText="There seems to be an issue with our servers, please check the service status if we already noticed this error. If not feel free to reach out to us to inform us about this issue. Please remember that the service status maybe delayed by up to 10 minutes."
            buttonInfo={buttonInfo}>
        </ErrorPage>
    )
}