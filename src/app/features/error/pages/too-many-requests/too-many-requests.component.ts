import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'error-too-many-requests',
  templateUrl: './too-many-requests.component.html',
  styleUrls: ['./too-many-requests.component.scss']
})
export class TooManyRequestsComponent implements OnInit {
  image: string = 'app/assets/images/error-429-image.png';
  headerText: string = '429 - TOO MANY REQUESTS'
  bodyText: string = 'Due to too many requests from your IP address or computer we had to block you from establishing a connection with our website. If you think this was a mistake feel free to contact support or check the service status to see if there is any issues with our servers.';
  buttonInfo: { text: string; path: string; }[] = [
    {'text': 'Contact Support', 'path': '/'},
    {'text': 'Service Status', 'path': '/'}
  ];

  constructor() {
  }

  ngOnInit(): void {
  }
}
