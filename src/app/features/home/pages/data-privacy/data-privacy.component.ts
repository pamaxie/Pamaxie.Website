import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'home-data-privacy',
  templateUrl: './data-privacy.component.html',
  styleUrls: ['./data-privacy.component.scss']
})
export class DataPrivacyComponent implements OnInit {
  image: string = 'app/assets/images/feature-data-privacy-image.png';
  headerText: string = 'Data privacy with Pamaxie';
  innerHtml: string[] = [
    'Data privacy is one of the biggest concerns when we develop Pamaxie. The basic idea is that all data is stored in a private manner, including passwords, emails and other things. We will NEVER send out advertisements to anyone. We encrypt all user data to ensure that its kept private. Data is handled in the following manner:',
    'We create a unique fingerprint of each image that is sent in. This way we don’t have to scan the image again if someone wants to resubmit it. We then proceed to analyse the images content via  multiple neural network. The first one checks for what we call “safety properties” these things are filters that we consider critical. These are things like: pornographic or gory content. We then go through the second phase of scanning, analysing if it contains things like alcohol, hard drugs or other things that may make people.',
    'After that we return these values to the applications developer and the fingerprint we created. This is how all image data is treated at this moment. We do not connect which API user has sent us which image.'
  ];

  constructor() {
  }

  ngOnInit(): void {
  }
}
