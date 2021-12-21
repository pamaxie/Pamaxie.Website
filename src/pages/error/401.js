import React from 'react';
import ErrorPage from '../../components/ErrorPage'

import image from '../../assets/img/feature-3-image.png'

export default function DataDetection() {
    return (
        <ErrorPage
            headerText="401 - UNAUTHORIZED"
            image={image}
            innerHtml="You do not have access to the page or resource you are currently trying to access. Please make sure you are logged in. If you are still unable to access this page after logging in please contact your system administrator.">
        </ErrorPage>
    )
}