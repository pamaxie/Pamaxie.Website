import React from 'react';
import FeaturePage from '../../components/FeaturePage'

import image from '../../assets/img/feature-1-image.png'

export default function DataPrivacy() {
    return (
        <FeaturePage
            headerText="Data privacy with Pamaxie"
            image={image}
            innerHtml="Data privacy is one of the biggest concerns when we develop Pamaxie. The basic idea is that all data is stored in a private manner, including passwords, emails and other things. We will NEVER send out advertisements to anyone. We encrypt all user data to ensure that its kept private. Data is handled in the following manner:
            <br/>
            We create a unique fingerprint of each image that is sent in. This way we don’t have to scan the image again if someone wants to resubmit it. We then proceed to analyse the images content via  multiple neural network. The first one checks for what we call “safety properties” these things are filters that we consider critical. These are things like: pornographic or gory content. We then go through the second phase of scanning, analysing if it contains things like alcohol, hard drugs or other things that may make people
            <br/>
            After that we return these values to the applications developer and the fingerprint we created. This is how all image data is treated at this moment. We do not connect which API user has sent us which image.">
        </FeaturePage>
    )
}