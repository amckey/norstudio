import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
  }

  mouseOnModal: boolean = false;
  formSubmitted: boolean = false;
  modalOpeneded: boolean = false;

  submitForm() {
    this.formSubmitted = !this.formSubmitted;
    this.modalOpeneded = !this.modalOpeneded;
    setTimeout(() => {
      this.refreshComponent()
    }, 1000000);
  }

  refreshComponent() {
    let currentUrl = this.router.url;

    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.navigate([currentUrl]);
  }

  detectModalMouseLeave() {
    this.mouseOnModal = false;
  }

  detectModalMouseEnter() {
    this.mouseOnModal = true;
  }

  processClickOutside() {
    if (!this.mouseOnModal) {
      this.modalOpeneded = false;
      this.refreshComponent()
    } else {
      return
    }
  }

  showModal() {
    if (this.modalOpeneded) {
      return {
        modal: true,
        'display': 'fixed'}
    } else {
      return {
        modal: false
      }
    }
  }

}
