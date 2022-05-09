import {Component, OnInit} from '@angular/core';

const features: { image: string, headerText: string, bodyText: string, link: string, buttonColor: string }[] = [
  {
    image: 'app/assets/images/feature-1-image.png',
    headerText: 'Your data stays yours.',
    bodyText: 'Data privacy is one of the biggest concerns when we develop Pamaxie. The basic idea is that all data is stored in a private manner, including passwords, emails and other things.',
    link: '/data_privacy',
    buttonColor: '#DA5EBB'
  },
  {
    image: 'app/assets/images/feature-2-image.png',
    headerText: "Detects more than just images. (to be developed)",
    bodyText: 'Pamaxie is build ot detect more than just images and automatically analyse any kind of binary data sent to us. We plan to expand our neural network and analysers to recognize Videos, Malicious FIles and other things to basically allow any kind of bad software to be detected.',
    link: '/data_detection',
    buttonColor: '#DA615E'
  },
  {
    image: 'app/assets/images/feature-3-image.png',
    headerText: 'Create a safe space to share experiences.',
    bodyText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut purus turpis, posuere sed turpis in, faucibus feugiat nisi. Ut feugiat pellentesque nisl. Sed tellus ligula, pulvinar eu erat vitae, dictum aliquam eros. Fusce ornare molestie venenatis. Proin scelerisque urna nec lacus feugiat convallis. Morbi vulputate ultricies est.',
    link: '/safe_space',
    buttonColor: '#DAB65E'
  },
  {
    image: 'app/assets/images/feature-4-image.png',
    headerText: 'Great speed and reliability.',
    bodyText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut purus turpis, posuere sed turpis in, faucibus feugiat nisi. Ut feugiat pellentesque nisl. Sed tellus ligula, pulvinar eu erat vitae, dictum aliquam eros. Fusce ornare molestie venenatis. Proin scelerisque urna nec lacus feugiat convallis. Morbi vulputate ultricies est.',
    link: '/improvements',
    buttonColor: '#DA5EBB'
  },
  {
    image: 'app/assets/images/feature-5-image.png',
    headerText: 'Improve Community moderation efficiency.',
    bodyText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut purus turpis, posuere sed turpis in, faucibus feugiat nisi. Ut feugiat pellentesque nisl. Sed tellus ligula, pulvinar eu erat vitae, dictum aliquam eros. Fusce ornare molestie venenatis. Proin scelerisque urna nec lacus feugiat convallis. Morbi vulputate ultricies est.',
    link: '/moderation',
    buttonColor: '#DA615E'
  },
  {
    image: 'app/assets/images/feature-6-image.png',
    headerText: 'Build to be open source.',
    bodyText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut purus turpis, posuere sed turpis in, faucibus feugiat nisi. Ut feugiat pellentesque nisl. Sed tellus ligula, pulvinar eu erat vitae, dictum aliquam eros. Fusce ornare molestie venenatis. Proin scelerisque urna nec lacus feugiat convallis. Morbi vulputate ultricies est.',
    link: '/open_source',
    buttonColor: '#DAB65E'
  }
];

@Component({
  selector: 'home-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss']
})
export class FeaturesComponent implements OnInit {
  features: { image: string, headerText: string, bodyText: string, link: string, buttonColor: string }[] = features

  constructor() {
  }

  ngOnInit(): void {
  }
}
