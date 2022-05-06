import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-safe-space',
  templateUrl: './safe-space.component.html',
  styleUrls: ['./safe-space.component.scss']
})
export class SafeSpaceComponent implements OnInit {
  image: string = 'app/assets/images/feature-3-image.png';
  headerText: string = 'Create a safe space to share experiences';
  innerHtml: string[] = [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  ];

  constructor() {
  }

  ngOnInit(): void {
  }
}
