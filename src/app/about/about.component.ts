import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../people.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(private peopleService: PeopleService,) {

  }

  ngOnInit(): void {
    this.peopleService.getAll().subscribe(
      (data: any) => this.userList = data
    )
  }

   userList: any;

}
