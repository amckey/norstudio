import { Component, OnInit} from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-about-testimonials',
  templateUrl: './about-testimonials.component.html',
  styleUrls: ['./about-testimonials.component.css'],
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
export class AboutTestimonialsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  reviews: any = [
    {
      content: "Jeg opplevde prosessen som ryddig, strukturert og profesjonell. Kommunikasjonen var bra gjennom hele prosjektet og Webbynavia lyttet til mine ønsker. Sluttresultatet ble over alle forventninger og jeg anbefaler Webbynavia til alle der ute som er på jakt etter en vel strukturert og profesjonell nettside.",
    },
    {
      content: "Veldig fornøyd med måten Webbynavia behandlet prosjektet. Alt var veldig ryddig. Har ikke mye peiling på nettsider, men de hjalp meg med å bestemme hvordan ting skulle se ut og fungere. Kom med masse gode eksempler. Var trygg helt fra starten av samarbeidet at dette skulle bli kjempe bra. Er veldig profesjonelle i etterkant også, da de hjelper meg med markedsføring og oppbevaring av nettsiden.",
    },
    {
      content: "Det å kunne stole på en leverandør er noe jeg setter mest pris på. Slik var det med Webbynavia. Først og fremst, veldig profesjonell og hyggelig ledelse som rådet meg gjennom hele prosjektet. Lærte mye nytt i ett område som jeg ikke hadde så god kontroll på fra før. De har levert alt i tide og sluttresultatet ble som lovet. Veldig fornøyd og anbefaler på det sterkeste.",
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
