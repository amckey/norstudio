import { Component, Input, OnInit} from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';


@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css'],
  animations: [
    trigger('carouselAnimation', [
      transition('void => *', [
        style({ opacity: 0 }),
        animate('300ms', style({ opacity: 1 }))
      ]),
      transition('* => void', [
        animate('300ms', style({ opacity: 0 }))
      ])
    ])
  ]
})
export class TestimonialsComponent implements OnInit {

  ngOnInit() {}

  public reviews: any = [
    {
      content: "First review",
    },
    {
      content: "Second review",
    },
    {
      content: "Last review",
    },
  ]

  currentSlideIndex = 0;

  showPrevSlide() {
    let prev = this.currentSlideIndex - 1;

    this.currentSlideIndex = prev < 0 ? 2 : prev
  }

  showNextSlide() {
    let next = this.currentSlideIndex + 1;
    let reviewsLength = this.reviews.length - 1;

    this.currentSlideIndex = next > reviewsLength ? 0 : next
  }

}
