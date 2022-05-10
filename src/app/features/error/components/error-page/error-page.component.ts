import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.scss']
})
export class ErrorPageComponent implements OnInit {
  logo: string = 'app/assets/images/pamaxie-text-logo.png';
  @Input() image: string = '';
  @Input() headerText: string = '';
  @Input() bodyText: string = '';
  @Input() buttonInfo: { text: string; path: string; }[] | undefined;

  constructor() {
  }

  ngOnInit(): void {
  }
}
