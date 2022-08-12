import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'error-bad-gateway',
  templateUrl: './bad-gateway.component.html',
  styleUrls: ['./bad-gateway.component.scss']
})
export class BadGatewayComponent implements OnInit {
  image: string = 'app/assets/images/error-502-bad-gateway-image.png';
  headerText: string = '502 - BAD GATEWAY'
  bodyText: string = 'Some of our backends seems to have an issue and can’t tell us some of the information, you’re looking for right now. Please check the service status if this issue is known, if not feel free to reach out to us.';
  buttonInfo: { text: string; path: string; }[] = [
    {'text': 'Contact Support', 'path': '/resources/support'},
    {'text': 'Service Status', 'path': '/product/status'}
  ];

  constructor() {
  }

  ngOnInit(): void {
  }
}
