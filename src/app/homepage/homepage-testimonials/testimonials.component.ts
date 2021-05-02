import { Component, Input, OnInit} from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';


@Component({
  selector: 'app-homepage-testimonials',
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
      content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      content: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    },
    {
      content: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
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

  calculateDotClass(index: any) {
    if (index === this.currentSlideIndex) {
      return {highDot: true}
    } else {
      return {dot: true}
    }
  }

}
