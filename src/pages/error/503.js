import React from 'react';
import ErrorPage from '../../components/ErrorPage'

import image from '../../assets/img/feature-3-image.png'

export default function DataDetection() {
    return (
        <ErrorPage
            headerText="503 - Server Error"
            image={image}
            innerHtml="There seems to be an issue with our servers, please check the service status if we already noticed this error. If not feel free to reach out to us to inform us about this issue. Please remember that the service status maybe delayed by up to 10 minutes.">
        </ErrorPage>
    )
}