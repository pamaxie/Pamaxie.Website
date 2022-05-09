import {Component, HostListener, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {
  @Input() id: string = '';
  @Input() content: string = '';
  idButton: string = '';
  idContent: string = '';

  constructor() {
  }

  ngOnInit(): void {
    this.idButton = this.id + 'Button';
    this.idContent = this.id + 'Content';
  }

  dropdown(e: any) {
    let element = document.getElementById(this.idContent);
    if (element)
    {
      element.classList.toggle('hidden');
    }
    e.stopPropagation();
  }

  @HostListener('window:click', ['$event'])
  onDocumentClick(e: any) {
    if (e.target)
    {
      if (!e.target.matches(this.idButton)) {
        let dropdown = document.getElementById(this.idContent)
        if (dropdown)
        {
          if (!dropdown.classList.contains('hidden')) {
            dropdown.classList.add('hidden');
          }
        }
      }
    }
  }
}
