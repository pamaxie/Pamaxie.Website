import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'home-feature-card',
  templateUrl: './feature-card.component.html',
  styleUrls: ['./feature-card.component.scss']
})
export class FeatureCardComponent implements OnInit {
  @Input() image: string = '';
  @Input() headerText: string = '';
  @Input() bodyText: string = '';
  @Input() link: string = '';
  @Input() buttonColor: string = '';

  constructor() {
  }

  ngOnInit(): void {
  }
}
