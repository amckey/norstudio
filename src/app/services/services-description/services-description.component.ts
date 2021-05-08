import { Component, DoCheck, ElementRef, Input, OnChanges, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-services-description',
  templateUrl: './services-description.component.html',
  styleUrls: ['./services-description.component.css']
})
export class ServicesDescriptionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  ngDoCheck(): void {
    if (this.buttonClicked !== undefined) {
      this.scrollToDescription()
    }
  }

  @Input() buttonClicked: any;

  elem: any = '#development'

  scrollToDescription() {
    document.querySelector(this.elem).scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
