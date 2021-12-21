import React from 'react';
import ErrorPage from '../../components/ErrorPage'

import image from '../../assets/img/feature-3-image.png'

export default function DataDetection() {
    return (
        <ErrorPage
            headerText="404 - Not Found"
            image={image}
            innerHtml="The web page you are currently trying to access does not exist. Please validate that the url is correct. If you can’t find any error there, please use the buttons provided below to help you out find your way back to safety.">
        </ErrorPage>
    )
}