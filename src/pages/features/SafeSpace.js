import React from 'react';
import {FeaturePage} from '../../components';

import image from '../../assets/img/feature-3-image.png';

const headerText = "Create a safe space to share experiences";
const innerHtml = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

export function SafeSpace() {
    return (
        <FeaturePage
            headerText={headerText}
            image={image}
            innerHtml={innerHtml}>
        </FeaturePage>
    )
}