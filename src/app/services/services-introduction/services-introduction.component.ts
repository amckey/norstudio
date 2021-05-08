import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-services-introduction',
  templateUrl: './services-introduction.component.html',
  styleUrls: ['./services-introduction.component.css']
})
export class ServicesIntroductionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Output() buttonClicked = new EventEmitter<any>();

  processButtonClick() {
    this.buttonClicked.emit()
  }

}
