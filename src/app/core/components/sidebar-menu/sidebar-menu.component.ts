import {Component, HostListener, OnInit} from '@angular/core';
import {AuthService} from "src/app/core/services/auth.service";

@Component({
  selector: 'app-sidebar-menu',
  templateUrl: './sidebar-menu.component.html',
  styleUrls: ['./sidebar-menu.component.scss']
})
export class SidebarMenuComponent implements OnInit {
  isOpen: boolean = false;
  idButton: string = 'navButton';
  idContent: string = 'navContent';

  profileImage: string = 'app/assets/images/logo.png';
  profileName: string = 'ProfileName'

  constructor(public authService: AuthService) {
  }

  ngOnInit(): void {
  }

  slide(e: any) {
    this.isOpen = !this.isOpen;
    e.stopPropagation();
  }

  @HostListener('window:click', ['$event'])
  onDocumentClick(e: any) {
    if (e.target) {
      const sidebar = document.getElementById(this.idContent)
      if (sidebar && (e.target !== sidebar || !sidebar.contains(e.target))) {
        if (this.isOpen) {
          this.isOpen = false;
        }
      }
    }
  }
}
