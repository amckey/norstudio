import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  headerSections = [
    {
      name: 'About us'
    },
    {
      name: 'Services'
    },
    {
      name: 'Portfolio'
    },
    {
      name: 'Contact us'
    },
  ]

}
