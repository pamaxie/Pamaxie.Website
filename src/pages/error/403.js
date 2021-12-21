import React from 'react';
import ErrorPage from '../../components/ErrorPage'

import image from '../../assets/img/feature-3-image.png'

export default function DataDetection() {
    return (
        <ErrorPage
            headerText="403 - Forbidden"
            image={image}
            innerHtml="You seem to be accessing a site that you should either not be accessing with your web browser (but a seperate API client) or found a bug. If you think you should be able to access this page, please contact your system administrator">
        </ErrorPage>
    )
}