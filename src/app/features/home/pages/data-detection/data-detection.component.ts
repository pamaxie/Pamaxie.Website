import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'home-data-detection',
  templateUrl: './data-detection.component.html',
  styleUrls: ['./data-detection.component.scss']
})
export class DataDetectionComponent implements OnInit {
  image: string = 'app/assets/images/feature-2-image.png';
  headerText: string = 'Detects more than just images';
  innerHtml: string[] = ['Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'];

  constructor() {
  }

  ngOnInit(): void {
  }
}
