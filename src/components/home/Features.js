import React from 'react';
import {FeatureCard} from '../index';

import featureImage_1 from '../../assets/img/feature-1-image.png';
import featureImage_2 from '../../assets/img/feature-2-image.png';
import featureImage_3 from '../../assets/img/feature-3-image.png';
import featureImage_4 from '../../assets/img/feature-4-image.png';
import featureImage_5 from '../../assets/img/feature-5-image.png';
import featureImage_6 from '../../assets/img/feature-6-image.png';

export function Features() {
    return (
        <div className="flex flex-row flex-wrap m-9 bg-primary justify-evenly">
            <FeatureCard
                image={featureImage_1}
                headerText="Your data stays yours."
                bodyText="Data privacy is one of the biggest concerns when we develop Pamaxie. The basic idea is that all data is stored in a private manner, including passwords, emails and other things."
                link="/DataPrivacy"
                buttonColor="#DA5EBB">
            </FeatureCard>
            <FeatureCard
                image={featureImage_2}
                headerText="Detects more than just images. (to be developed)"
                bodyText="Pamaxie is build ot detect more than just images and automatically analyse any kind of binary data sent to us. We plan to expand our neural network and analysers to recognize Videos, Malicious FIles and other things to basically allow any kind of bad software to be detected."
                link="/DataDetection"
                buttonColor="#DA615E">
            </FeatureCard>
            <FeatureCard
                image={featureImage_3}
                headerText="Create a safe space to share experiences."
                bodyText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut purus turpis, posuere sed turpis in, faucibus feugiat nisi. Ut feugiat pellentesque nisl. Sed tellus ligula, pulvinar eu erat vitae, dictum aliquam eros. Fusce ornare molestie venenatis. Proin scelerisque urna nec lacus feugiat convallis. Morbi vulputate ultricies est."
                link="/SafeSpace"
                buttonColor="#DAB65E">
            </FeatureCard>
            <FeatureCard
                image={featureImage_4}
                headerText="Great speed and reliability."
                bodyText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut purus turpis, posuere sed turpis in, faucibus feugiat nisi. Ut feugiat pellentesque nisl. Sed tellus ligula, pulvinar eu erat vitae, dictum aliquam eros. Fusce ornare molestie venenatis. Proin scelerisque urna nec lacus feugiat convallis. Morbi vulputate ultricies est."
                link="/Improvements"
                buttonColor="#DA5EBB">
            </FeatureCard>
            <FeatureCard
                image={featureImage_5}
                headerText="Improve Community moderation efficiency."
                bodyText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut purus turpis, posuere sed turpis in, faucibus feugiat nisi. Ut feugiat pellentesque nisl. Sed tellus ligula, pulvinar eu erat vitae, dictum aliquam eros. Fusce ornare molestie venenatis. Proin scelerisque urna nec lacus feugiat convallis. Morbi vulputate ultricies est."
                link="/Moderation"
                buttonColor="#DA615E">
            </FeatureCard>
            <FeatureCard
                image={featureImage_6}
                headerText="Build to be open source."
                bodyText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut purus turpis, posuere sed turpis in, faucibus feugiat nisi. Ut feugiat pellentesque nisl. Sed tellus ligula, pulvinar eu erat vitae, dictum aliquam eros. Fusce ornare molestie venenatis. Proin scelerisque urna nec lacus feugiat convallis. Morbi vulputate ultricies est."
                link="/OpenSource"
                buttonColor="#DAB65E">
            </FeatureCard>
        </div>
    )
}