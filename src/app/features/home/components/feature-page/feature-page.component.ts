import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'home-feature-page',
  templateUrl: './feature-page.component.html',
  styleUrls: ['./feature-page.component.scss']
})
export class FeaturePageComponent implements OnInit {
  logo: string = 'app/assets/images/pamaxie-text-logo.png';
  @Input() image: string = '';
  @Input() headerText: string = '';
  @Input() innerText: string[] | undefined;

  constructor() {
  }

  ngOnInit(): void {
  }
}
