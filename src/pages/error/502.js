import React from 'react';
import {ErrorPage} from '../../components';

import image from '../../assets/img/error-502-image.png';

const headerText = "502 - Bad Gateway"
const bodyText = "Some of our backends seems to have an issue and can’t tell us some of the information, you’re looking for right now. Please check the service status if this issue is known, if not feel free to reach out to us.";
const buttonInfo = [
    {"text":"Contact Support","path":"/"},
    {"text":"Service Status","path":"/"}
];

export function Error502() {
    return (
        <ErrorPage
            headerText={headerText}
            image={image}
            bodyText={bodyText}
            buttonInfo={buttonInfo}>
        </ErrorPage>
    )
}