(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/zaharova/Desktop/norstudio/src/main.ts */"zUnb");


/***/ }),

/***/ "84zG":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _about_introduction_about_introduction_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about-introduction/about-introduction.component */ "Hmz7");
/* harmony import */ var _about_testimonials_about_testimonials_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about-testimonials/about-testimonials.component */ "UAJw");



class AboutComponent {
    constructor() {
    }
}
AboutComponent.ɵfac = function AboutComponent_Factory(t) { return new (t || AboutComponent)(); };
AboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutComponent, selectors: [["app-about"]], decls: 2, vars: 0, template: function AboutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-about-introduction");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-about-testimonials");
    } }, directives: [_about_introduction_about_introduction_component__WEBPACK_IMPORTED_MODULE_1__["AboutIntroductionComponent"], _about_testimonials_about_testimonials_component__WEBPACK_IMPORTED_MODULE_2__["AboutTestimonialsComponent"]], styles: [".container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 80vh;\n  background-color: rgba(20, 22, 44, 0.95);\n  display: flex;\n  align-items: center;\n}\n\n.container-inner[_ngcontent-%COMP%] {\n  max-width: 600px;\n  display: block;\n  margin-left: 100px;\n}\n\n.container-content[_ngcontent-%COMP%] {\n  font-size: 40pt;\n  line-height: 1.4em;\n}\n\n.component-button[_ngcontent-%COMP%] {\n  background-color: whitesmoke;\n  margin-top: 30px;\n  font-size: 13pt;\n  opacity: 0.9;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFib3V0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLHdDQUF3QztFQUN4QyxhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsNEJBQTRCO0VBQzVCLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsWUFBWTtBQUNkIiwiZmlsZSI6ImFib3V0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogODB2aDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMCwgMjIsIDQ0LCAwLjk1KTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmNvbnRhaW5lci1pbm5lciB7XG4gIG1heC13aWR0aDogNjAwcHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tbGVmdDogMTAwcHg7XG59XG5cbi5jb250YWluZXItY29udGVudCB7XG4gIGZvbnQtc2l6ZTogNDBwdDtcbiAgbGluZS1oZWlnaHQ6IDEuNGVtO1xufVxuXG4uY29tcG9uZW50LWJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG4gIGZvbnQtc2l6ZTogMTNwdDtcbiAgb3BhY2l0eTogMC45O1xufVxuXG5cbiJdfQ== */"] });


/***/ }),

/***/ "9vUh":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _contact_form_contact_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../contact-form/contact-form.component */ "ANMO");




function HomeComponent_ng_container_120_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const review_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@carouselAnimation", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](review_r2.author);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", review_r2.content, " ");
} }
function HomeComponent_ng_container_120_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, HomeComponent_ng_container_120_div_1_Template, 8, 3, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const i_r3 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.currentSlideIndex === i_r3);
} }
function HomeComponent_div_124_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r7 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx_r1.calculateDotClass(i_r7));
} }
class HomeComponent {
    constructor() {
        this.reviews = [
            {
                content: "Jeg opplevde prosessen som ryddig, strukturert og profesjonell. Kommunikasjonen var bra gjennom hele prosjektet og Webbynavia lyttet til mine ønsker. Sluttresultatet ble over alle forventninger og jeg anbefaler Webbynavia til alle der ute som er på jakt etter en vel strukturert og profesjonell nettside.",
                author: "Kirils Kasevics, Ashlife"
            },
            {
                content: "Veldig fornøyd med måten Webbynavia behandlet prosjektet. Alt var veldig ryddig. Har ikke mye peiling på nettsider, men de hjalp meg med å bestemme hvordan ting skulle se ut og fungere. Kom med masse gode eksempler. Var trygg helt fra starten av samarbeidet at dette skulle bli kjempe bra. Er veldig profesjonelle i etterkant også, da de hjelper meg med markedsføring og oppbevaring av nettsiden.",
                author: "Espen Normann, Fit Invision"
            },
            {
                content: "Det å kunne stole på en leverandør er noe jeg setter mest pris på. Slik var det med Webbynavia. Først og fremst, veldig profesjonell og hyggelig ledelse som rådet meg gjennom hele prosjektet. Lærte mye nytt i ett område som jeg ikke hadde så god kontroll på fra før. De har levert alt i tide og sluttresultatet ble som lovet. Veldig fornøyd og anbefaler på det sterkeste.",
                author: "Abdul Rakifi, Invest Management"
            },
        ];
        this.currentSlideIndex = 0;
    }
    ngOnInit() {
    }
    showPrevSlide() {
        let prev = this.currentSlideIndex - 1;
        this.currentSlideIndex = prev < 0 ? 2 : prev;
    }
    showNextSlide() {
        let next = this.currentSlideIndex + 1;
        let reviewsLength = this.reviews.length - 1;
        this.currentSlideIndex = next > reviewsLength ? 0 : next;
    }
    calculateDotClass(index) {
        if (index === this.currentSlideIndex) {
            return { highDot: true };
        }
        else {
            return { dot: true };
        }
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 126, vars: 2, consts: [[1, "introduction"], [1, "introduction-inner"], [1, "introduction-inner-block"], [1, "introduction-inner-title"], [1, "introduction-inner-subtitle"], ["id", "button", 1, "introduction-button"], [1, "introduction-shade"], [1, "introduction-back-element"], ["src", "../../assets/introductionbackel.png", 2, "height", "350px"], [1, "about-us-inner"], [1, "about-us-block"], [1, "about-us-block-title"], [1, "about-us-block-subtitle"], [1, "about-us-image"], ["src", "../../assets/aboutusman.png", 2, "height", "300px"], [1, "services-inner"], [1, "services-image"], ["src", "../../assets/servicesman.png", 2, "height", "300px"], [1, "services-block"], [1, "services-block-title"], [1, "services-block-boxes"], [1, "services-block-box"], [1, "services-block-box-title"], [1, "services-block-box-subtitle"], ["id", "button", 1, "services-block-box-button"], [1, "advantages-inner"], [1, "advantages-inner-title"], [1, "advantages-inner-boxes"], [1, "advantages-inner-boxes-box"], [1, "advantages-inner-boxes-box-head"], [1, "advantages-inner-boxes-box-head-title"], [1, "advantages-inner-boxes-box-head-image"], [1, "advantages-inner-boxes-box-body"], [1, "numbers-inner"], [1, "numbers-inner-title"], [1, "numbers-inner-boxes"], [1, "numbers-inner-box"], [1, "numbers-inner-box-image"], [1, "radialProgressBar", "progress-100"], [1, "overlay"], [1, "numbers-inner-box-title"], [1, "review-inner"], [1, "review-inner-title"], [1, "review"], [1, "review-block-2"], [1, "arrow", "left", 3, "click"], [1, "review-block"], [4, "ngFor", "ngForOf"], [1, "arrow", "right", 3, "click"], [1, "pagination-dots"], ["class", "slide", 4, "ngIf"], [1, "slide"], [1, "slide-author"], [1, "slide-author-content"], [1, "slide-author-image"], [1, "slide-author-review"], [1, "slide-content"], [3, "ngClass"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Website development and marketing");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "We design and build websites and promote them on the internet");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Get consultation");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Subtitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Subtitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "Button");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "Subtitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "Button");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](41, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "Advantages");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, "Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](50, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, "Body");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56, "Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](57, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](59, "Body");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63, "Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](64, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](66, "Body");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](70, "Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](71, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](73, "Body");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](76, "Numbers");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](82, "100");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](83, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](84, " Title ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](87, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](88, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](89, "100");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](90, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](91, " Title ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](92, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](93, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](94, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](95, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](96, "100");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](97, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](98, " Title ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](99, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](100, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](101, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](102, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](103, "100");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](104, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](105, " Title ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](106, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](107, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](108, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](109, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](110, "100");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](111, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](112, " Title ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](113, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](114, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](115, "Reviews");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](116, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](117, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](118, "i", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomeComponent_Template_i_click_118_listener() { return ctx.showNextSlide(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](119, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](120, HomeComponent_ng_container_120_Template, 2, 1, "ng-container", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](121, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](122, "i", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomeComponent_Template_i_click_122_listener() { return ctx.showNextSlide(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](123, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](124, HomeComponent_div_124_Template, 2, 1, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](125, "app-contact-form");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](120);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.reviews);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.reviews);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _contact_form_contact_form_component__WEBPACK_IMPORTED_MODULE_3__["ContactFormComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"]], styles: [".introduction[_ngcontent-%COMP%] {\n  min-height: 650px;\n  width: 100%;\n  background-image: url('homebackground.jpeg');\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n}\n\n.introduction-inner[_ngcontent-%COMP%] {\n  min-height: inherit;\n  display: flex;\n  flex-direction: column;\n  color: whitesmoke;\n}\n\n.introduction-inner-block[_ngcontent-%COMP%] {\n  margin: 180px 0 0 100px;\n  max-width: 60%;\n  z-index: 2;\n}\n\n.introduction-inner-title[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 55px;\n}\n\n.introduction-inner-subtitle[_ngcontent-%COMP%] {\n  font-size: 22px;\n  padding-top: 30px;\n}\n\n.introduction-button[_ngcontent-%COMP%] {\n  background: linear-gradient(#1356B9, #10479A);\n  color: whitesmoke;\n  margin-top: 50px;\n}\n\n.introduction-shade[_ngcontent-%COMP%] {\n  position: absolute;\n  height: 650px;\n  top: 0;\n  left: 0;\n  right: 0;\n  z-index: 1;\n  background: linear-gradient(#262D39, #222D3C, #1B2433);\n  opacity: 0.8;\n}\n\n.introduction-back-element[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 2;\n  right: 0;\n  bottom: -2px;\n}\n\n.about-us[_ngcontent-%COMP%] {\n  min-height: 650px;\n}\n\n.about-us-inner[_ngcontent-%COMP%] {\n  margin: 50px 0;\n  display: flex;\n}\n\n.about-us-block[_ngcontent-%COMP%] {\n  width: 70%;\n  height: 500px;\n  background: linear-gradient(#1356B9, #10479A);\n  color: whitesmoke;\n  border-top-right-radius: 30px;\n  border-bottom-right-radius: 30px;\n  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;\n  display: flex;\n  flex-direction: column;\n  padding: 40px 0 0 40px;\n}\n\n.about-us-block-title[_ngcontent-%COMP%] {\n  font-size: 55px;\n}\n\n.about-us-block-subtitle[_ngcontent-%COMP%] {\n  font-size: 22px;\n  padding-top: 30px;\n}\n\n.about-us-image[_ngcontent-%COMP%] {\n  margin-left: 10%;\n}\n\n.services-inner[_ngcontent-%COMP%] {\n  margin: 50px 0;\n  display: flex;\n  justify-content: space-between;\n}\n\n.services-block[_ngcontent-%COMP%] {\n  width: 70%;\n  margin-right: 0;\n  height: 500px;\n  background: linear-gradient(#48882A, #3D7223);\n  color: whitesmoke;\n  border-top-left-radius: 30px;\n  border-bottom-left-radius: 30px;\n  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;\n  display: flex;\n  flex-direction: column;\n}\n\n.services-block-title[_ngcontent-%COMP%] {\n  padding: 40px 0 40px 40px;\n  font-size: 55px;\n}\n\n.services-block-boxes[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n\n.services-block-box[_ngcontent-%COMP%] {\n  height: 300px;\n  width: 450px;\n  background-color: rgba(245, 245, 245, 0.4);\n  border-radius: 10px;\n  margin: 0 40px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.services-block-box-title[_ngcontent-%COMP%] {\n  font-size: 40px\n}\n\n.services-block-box-subtitle[_ngcontent-%COMP%] {\n  font-size: 20px\n}\n\n.services-block-box-button[_ngcontent-%COMP%] {\n  color: #4A8C2B;\n}\n\n.services-image[_ngcontent-%COMP%] {\n  margin-left: 5%;\n  display: flex;\n  align-items: flex-end;\n}\n\n.advantages-inner[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background: linear-gradient(#262D39, #222D3C, #1B2433);\n  padding: 40px 0 80px 0;\n}\n\n.advantages-inner-title[_ngcontent-%COMP%] {\n  padding-bottom: 40px;\n  font-size: 55px;\n  color: #196DEB;\n}\n\n.advantages-inner-boxes[_ngcontent-%COMP%] {\n  display: flex;\n  padding-bottom: 80px;\n}\n\n.advantages-inner-boxes-box[_ngcontent-%COMP%] {\n  margin: 0 20px;\n  height: 300px;\n  width: 350px;\n  background-color: #36404D;\n  color: whitesmoke;\n  border-radius: 10px;\n  padding: 20px 0 0 20px;\n  transition: 0.1s;\n}\n\n.advantages-inner-boxes-box[_ngcontent-%COMP%]:hover {\n  background: linear-gradient(#1356B9, #10479A);\n  transform: scale(1.02);\n  transition: 0.1s;\n}\n\n.advantages-inner-boxes-box-head[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n\n}\n\n.advantages-inner-boxes-box-head-title[_ngcontent-%COMP%] {\n  font-size: 40px;\n}\n\n.advantages-inner-boxes-box-head-image[_ngcontent-%COMP%] {\n  margin-right: 20px;\n  height: 40px;\n  width: 40px;\n  background-color: darkgray;\n}\n\n.advantages-inner-boxes-box-body[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  font-size: 20px;\n}\n\n.numbers-inner[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.numbers-inner-title[_ngcontent-%COMP%] {\n  padding-bottom: 40px;\n  font-size: 55px;\n  color: #196DEB;\n}\n\n.numbers-inner-boxes[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n  width: 80%;\n}\n\n.numbers-inner-box[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  margin: 30px;\n  height: 300px;\n  width: 350px;\n}\n\n.numbers-inner-box-image[_ngcontent-%COMP%] {\n  height: 70%;\n  width: inherit;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.radialProgressBar[_ngcontent-%COMP%] {\n  color: whitesmoke;\n  font-size: 48px;\n  border-radius: 50%;\n  width: 200px;\n  height: 200px;\n  display: flex;\n  margin: 20px;\n}\n\n.radialProgressBar[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  width: 170px;\n  height: 170px;\n  margin: auto;\n  background: linear-gradient(#262D39, #222D3C, #1B2433);\n  text-align: center;\n  padding-top: 30%;\n}\n\n.progress-100[_ngcontent-%COMP%] {\n  background-image: linear-gradient(270deg, whitesmoke 50%, transparent 50%), linear-gradient(90deg, #028cd5 50%, whitesmoke 50%);\n}\n\n.numbers-inner-box-title[_ngcontent-%COMP%] {\n  color: whitesmoke;\n  font-size: 24px;\n  margin-top: 20px;\n  text-align: center;\n}\n\n.review-inner[_ngcontent-%COMP%] {\n  padding: 40px 0 80px 0;\n}\n\n.review-inner-title[_ngcontent-%COMP%] {\n  color: #196DEB;\n  font-size: 55px;\n  text-align: center;\n  padding-bottom: 40px;\n}\n\n.review[_ngcontent-%COMP%] {\n  min-height: 250px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.review-block[_ngcontent-%COMP%] {\n  width: 900px;\n  height: 350px;\n  background: linear-gradient(#1356B9, #10479A);\n  color: whitesmoke;\n  border-radius: 10px;\n  margin: 0 50px;\n  display: flex;\n  justify-content: center;\n  font-size: 15pt;\n}\n\n.review-block-2[_ngcontent-%COMP%] {\n  width: 550px;\n  height: 350px;\n  margin: 0 50px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  font-size: 15pt;\n}\n\n.slide[_ngcontent-%COMP%] {\n  position: absolute;\n  display: flex;\n  width: 50%;\n  align-items: center;\n  justify-content: space-between;\n  flex-direction: column;\n  transition: transform 150ms cubic-bezier(0.25, 0.46, 0.45, 0.84);\n}\n\n.slide-author[_ngcontent-%COMP%] {\n  width: 65%;\n  border-bottom: 1px solid whitesmoke;\n  padding: 20px 0;\n}\n\n.slide-author-content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n.slide-author-image[_ngcontent-%COMP%] {\n  height: 80px;\n  width: 80px;\n  background-color: lightgray;\n  border-radius: 50%;\n}\n\n.slide-author-review[_ngcontent-%COMP%] {\n  margin-left: 30px\n}\n\n.slide-content[_ngcontent-%COMP%] {\n  padding: 20px 0;\n  width: 65%;\n}\n\n.pagination-dots[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n\n.dot[_ngcontent-%COMP%] {\n  height: 15px;\n  width: 15px;\n  background-color: #1356B9;\n  border-radius: 50%;\n  display: inline-block;\n  margin: 30px 15px 15px 15px;\n}\n\n.highDot[_ngcontent-%COMP%] {\n  height: 15px;\n  width: 15px;\n  background-color: #0c3169;\n  border-radius: 50%;\n  display: inline-block;\n  margin: 30px 15px 15px 15px;\n}\n\n.slide-button[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  cursor: pointer;\n}\n\n.arrow[_ngcontent-%COMP%] {\n  border: solid #1356B9;\n  border-width: 0 5px 5px 0;\n  display: inline-block;\n  padding: 3px;\n  height: 25px;\n  width: 25px;\n}\n\n.arrow[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  opacity: 0.8;\n}\n\n.right[_ngcontent-%COMP%] {\n  transform: rotate(-45deg);\n  -webkit-transform: rotate(-45deg);\n}\n\n.left[_ngcontent-%COMP%] {\n  transform: rotate(135deg);\n  -webkit-transform: rotate(135deg);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsNENBQXlEO0VBQ3pELHNCQUFzQjtFQUN0QiwyQkFBMkI7RUFDM0IsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLGNBQWM7RUFDZCxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSw2Q0FBNkM7RUFDN0MsaUJBQWlCO0VBQ2pCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsTUFBTTtFQUNOLE9BQU87RUFDUCxRQUFRO0VBQ1IsVUFBVTtFQUNWLHNEQUFzRDtFQUN0RCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFFBQVE7RUFDUixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsYUFBYTtBQUNmOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGFBQWE7RUFDYiw2Q0FBNkM7RUFDN0MsaUJBQWlCO0VBQ2pCLDZCQUE2QjtFQUM3QixnQ0FBZ0M7RUFDaEMsMkNBQTJDO0VBQzNDLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsYUFBYTtFQUNiLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLFVBQVU7RUFDVixlQUFlO0VBQ2YsYUFBYTtFQUNiLDZDQUE2QztFQUM3QyxpQkFBaUI7RUFDakIsNEJBQTRCO0VBQzVCLCtCQUErQjtFQUMvQiwyQ0FBMkM7RUFDM0MsYUFBYTtFQUNiLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixZQUFZO0VBQ1osMENBQTBDO0VBQzFDLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2QsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRTtBQUNGOztBQUVBO0VBQ0U7QUFDRjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsYUFBYTtFQUNiLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLHNEQUFzRDtFQUN0RCxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsZUFBZTtFQUNmLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGFBQWE7RUFDYixZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLDZDQUE2QztFQUM3QyxzQkFBc0I7RUFDdEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4Qjs7QUFFaEM7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixXQUFXO0VBQ1gsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsZUFBZTtFQUNmLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLGVBQWU7RUFDZixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixhQUFhO0VBQ2IsWUFBWTtBQUNkOztBQUVBO0VBQ0UsV0FBVztFQUNYLGNBQWM7RUFDZCxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixhQUFhO0VBR2IsYUFBYTtFQUNiLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osYUFBYTtFQUNiLFlBQVk7RUFDWixzREFBc0Q7RUFDdEQsa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUVFLCtIQUErSDtBQUNqSTs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsNkNBQTZDO0VBQzdDLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsY0FBYztFQUNkLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsY0FBYztFQUNkLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixVQUFVO0VBQ1YsbUJBQW1CO0VBQ25CLDhCQUE4QjtFQUM5QixzQkFBc0I7RUFDdEIsZ0VBQWdFO0FBQ2xFOztBQUVBO0VBQ0UsVUFBVTtFQUNWLG1DQUFtQztFQUNuQyxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsMkJBQTJCO0VBQzNCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFO0FBQ0Y7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsVUFBVTtBQUNaOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCx5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQiwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIseUJBQXlCO0VBQ3pCLHFCQUFxQjtFQUNyQixZQUFZO0VBQ1osWUFBWTtFQUNaLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGVBQWU7RUFDZixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsaUNBQWlDO0FBQ25DOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGlDQUFpQztBQUNuQyIsImZpbGUiOiJob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW50cm9kdWN0aW9uIHtcbiAgbWluLWhlaWdodDogNjUwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvaG9tZWJhY2tncm91bmQuanBlZ1wiKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xufVxuXG4uaW50cm9kdWN0aW9uLWlubmVyIHtcbiAgbWluLWhlaWdodDogaW5oZXJpdDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgY29sb3I6IHdoaXRlc21va2U7XG59XG5cbi5pbnRyb2R1Y3Rpb24taW5uZXItYmxvY2sge1xuICBtYXJnaW46IDE4MHB4IDAgMCAxMDBweDtcbiAgbWF4LXdpZHRoOiA2MCU7XG4gIHotaW5kZXg6IDI7XG59XG5cbi5pbnRyb2R1Y3Rpb24taW5uZXItdGl0bGUge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiA1NXB4O1xufVxuXG4uaW50cm9kdWN0aW9uLWlubmVyLXN1YnRpdGxlIHtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBwYWRkaW5nLXRvcDogMzBweDtcbn1cblxuLmludHJvZHVjdGlvbi1idXR0b24ge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoIzEzNTZCOSwgIzEwNDc5QSk7XG4gIGNvbG9yOiB3aGl0ZXNtb2tlO1xuICBtYXJnaW4tdG9wOiA1MHB4O1xufVxuXG4uaW50cm9kdWN0aW9uLXNoYWRlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBoZWlnaHQ6IDY1MHB4O1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB6LWluZGV4OiAxO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoIzI2MkQzOSwgIzIyMkQzQywgIzFCMjQzMyk7XG4gIG9wYWNpdHk6IDAuODtcbn1cblxuLmludHJvZHVjdGlvbi1iYWNrLWVsZW1lbnQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDI7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IC0ycHg7XG59XG5cbi5hYm91dC11cyB7XG4gIG1pbi1oZWlnaHQ6IDY1MHB4O1xufVxuXG4uYWJvdXQtdXMtaW5uZXIge1xuICBtYXJnaW46IDUwcHggMDtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLmFib3V0LXVzLWJsb2NrIHtcbiAgd2lkdGg6IDcwJTtcbiAgaGVpZ2h0OiA1MDBweDtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCMxMzU2QjksICMxMDQ3OUEpO1xuICBjb2xvcjogd2hpdGVzbW9rZTtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDMwcHg7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAzMHB4O1xuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMSkgMHB4IDRweCAxMnB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwYWRkaW5nOiA0MHB4IDAgMCA0MHB4O1xufVxuXG4uYWJvdXQtdXMtYmxvY2stdGl0bGUge1xuICBmb250LXNpemU6IDU1cHg7XG59XG5cbi5hYm91dC11cy1ibG9jay1zdWJ0aXRsZSB7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgcGFkZGluZy10b3A6IDMwcHg7XG59XG5cbi5hYm91dC11cy1pbWFnZSB7XG4gIG1hcmdpbi1sZWZ0OiAxMCU7XG59XG5cbi5zZXJ2aWNlcy1pbm5lciB7XG4gIG1hcmdpbjogNTBweCAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5zZXJ2aWNlcy1ibG9jayB7XG4gIHdpZHRoOiA3MCU7XG4gIG1hcmdpbi1yaWdodDogMDtcbiAgaGVpZ2h0OiA1MDBweDtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCM0ODg4MkEsICMzRDcyMjMpO1xuICBjb2xvcjogd2hpdGVzbW9rZTtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMzBweDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMzBweDtcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjEpIDBweCA0cHggMTJweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLnNlcnZpY2VzLWJsb2NrLXRpdGxlIHtcbiAgcGFkZGluZzogNDBweCAwIDQwcHggNDBweDtcbiAgZm9udC1zaXplOiA1NXB4O1xufVxuXG4uc2VydmljZXMtYmxvY2stYm94ZXMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLnNlcnZpY2VzLWJsb2NrLWJveCB7XG4gIGhlaWdodDogMzAwcHg7XG4gIHdpZHRoOiA0NTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDUsIDI0NSwgMjQ1LCAwLjQpO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBtYXJnaW46IDAgNDBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnNlcnZpY2VzLWJsb2NrLWJveC10aXRsZSB7XG4gIGZvbnQtc2l6ZTogNDBweFxufVxuXG4uc2VydmljZXMtYmxvY2stYm94LXN1YnRpdGxlIHtcbiAgZm9udC1zaXplOiAyMHB4XG59XG5cbi5zZXJ2aWNlcy1ibG9jay1ib3gtYnV0dG9uIHtcbiAgY29sb3I6ICM0QThDMkI7XG59XG5cbi5zZXJ2aWNlcy1pbWFnZSB7XG4gIG1hcmdpbi1sZWZ0OiA1JTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xufVxuXG4uYWR2YW50YWdlcy1pbm5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjMjYyRDM5LCAjMjIyRDNDLCAjMUIyNDMzKTtcbiAgcGFkZGluZzogNDBweCAwIDgwcHggMDtcbn1cblxuLmFkdmFudGFnZXMtaW5uZXItdGl0bGUge1xuICBwYWRkaW5nLWJvdHRvbTogNDBweDtcbiAgZm9udC1zaXplOiA1NXB4O1xuICBjb2xvcjogIzE5NkRFQjtcbn1cblxuLmFkdmFudGFnZXMtaW5uZXItYm94ZXMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBwYWRkaW5nLWJvdHRvbTogODBweDtcbn1cblxuLmFkdmFudGFnZXMtaW5uZXItYm94ZXMtYm94IHtcbiAgbWFyZ2luOiAwIDIwcHg7XG4gIGhlaWdodDogMzAwcHg7XG4gIHdpZHRoOiAzNTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM2NDA0RDtcbiAgY29sb3I6IHdoaXRlc21va2U7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIHBhZGRpbmc6IDIwcHggMCAwIDIwcHg7XG4gIHRyYW5zaXRpb246IDAuMXM7XG59XG5cbi5hZHZhbnRhZ2VzLWlubmVyLWJveGVzLWJveDpob3ZlciB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjMTM1NkI5LCAjMTA0NzlBKTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjAyKTtcbiAgdHJhbnNpdGlvbjogMC4xcztcbn1cblxuLmFkdmFudGFnZXMtaW5uZXItYm94ZXMtYm94LWhlYWQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cbn1cblxuLmFkdmFudGFnZXMtaW5uZXItYm94ZXMtYm94LWhlYWQtdGl0bGUge1xuICBmb250LXNpemU6IDQwcHg7XG59XG5cbi5hZHZhbnRhZ2VzLWlubmVyLWJveGVzLWJveC1oZWFkLWltYWdlIHtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIHdpZHRoOiA0MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZ3JheTtcbn1cblxuLmFkdmFudGFnZXMtaW5uZXItYm94ZXMtYm94LWJvZHkge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBmb250LXNpemU6IDIwcHg7XG59XG5cbi5udW1iZXJzLWlubmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5udW1iZXJzLWlubmVyLXRpdGxlIHtcbiAgcGFkZGluZy1ib3R0b206IDQwcHg7XG4gIGZvbnQtc2l6ZTogNTVweDtcbiAgY29sb3I6ICMxOTZERUI7XG59XG5cbi5udW1iZXJzLWlubmVyLWJveGVzIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgd2lkdGg6IDgwJTtcbn1cblxuLm51bWJlcnMtaW5uZXItYm94IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWFyZ2luOiAzMHB4O1xuICBoZWlnaHQ6IDMwMHB4O1xuICB3aWR0aDogMzUwcHg7XG59XG5cbi5udW1iZXJzLWlubmVyLWJveC1pbWFnZSB7XG4gIGhlaWdodDogNzAlO1xuICB3aWR0aDogaW5oZXJpdDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5yYWRpYWxQcm9ncmVzc0JhciB7XG4gIGNvbG9yOiB3aGl0ZXNtb2tlO1xuICBmb250LXNpemU6IDQ4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgd2lkdGg6IDIwMHB4O1xuICBoZWlnaHQ6IDIwMHB4O1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbjogMjBweDtcbn1cblxuLnJhZGlhbFByb2dyZXNzQmFyIC5vdmVybGF5IHtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB3aWR0aDogMTcwcHg7XG4gIGhlaWdodDogMTcwcHg7XG4gIG1hcmdpbjogYXV0bztcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCMyNjJEMzksICMyMjJEM0MsICMxQjI0MzMpO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmctdG9wOiAzMCU7XG59XG5cbi5wcm9ncmVzcy0xMDAge1xuICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCgzNmRlZywgd2hpdGVzbW9rZSA1MCUsIHRyYW5zcGFyZW50IDUwJSksIC13ZWJraXQtbGluZWFyLWdyYWRpZW50KGxlZnQsICMwMjhjZDUgNTAlLCB3aGl0ZXNtb2tlIDUwJSk7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgyNzBkZWcsIHdoaXRlc21va2UgNTAlLCB0cmFuc3BhcmVudCA1MCUpLCBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICMwMjhjZDUgNTAlLCB3aGl0ZXNtb2tlIDUwJSk7XG59XG5cbi5udW1iZXJzLWlubmVyLWJveC10aXRsZSB7XG4gIGNvbG9yOiB3aGl0ZXNtb2tlO1xuICBmb250LXNpemU6IDI0cHg7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnJldmlldy1pbm5lciB7XG4gIHBhZGRpbmc6IDQwcHggMCA4MHB4IDA7XG59XG5cbi5yZXZpZXctaW5uZXItdGl0bGUge1xuICBjb2xvcjogIzE5NkRFQjtcbiAgZm9udC1zaXplOiA1NXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmctYm90dG9tOiA0MHB4O1xufVxuXG4ucmV2aWV3IHtcbiAgbWluLWhlaWdodDogMjUwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ucmV2aWV3LWJsb2NrIHtcbiAgd2lkdGg6IDkwMHB4O1xuICBoZWlnaHQ6IDM1MHB4O1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoIzEzNTZCOSwgIzEwNDc5QSk7XG4gIGNvbG9yOiB3aGl0ZXNtb2tlO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBtYXJnaW46IDAgNTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTVwdDtcbn1cblxuLnJldmlldy1ibG9jay0yIHtcbiAgd2lkdGg6IDU1MHB4O1xuICBoZWlnaHQ6IDM1MHB4O1xuICBtYXJnaW46IDAgNTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxNXB0O1xufVxuXG4uc2xpZGUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiA1MCU7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDE1MG1zIGN1YmljLWJlemllcigwLjI1LCAwLjQ2LCAwLjQ1LCAwLjg0KTtcbn1cblxuLnNsaWRlLWF1dGhvciB7XG4gIHdpZHRoOiA2NSU7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB3aGl0ZXNtb2tlO1xuICBwYWRkaW5nOiAyMHB4IDA7XG59XG5cbi5zbGlkZS1hdXRob3ItY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5zbGlkZS1hdXRob3ItaW1hZ2Uge1xuICBoZWlnaHQ6IDgwcHg7XG4gIHdpZHRoOiA4MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuLnNsaWRlLWF1dGhvci1yZXZpZXcge1xuICBtYXJnaW4tbGVmdDogMzBweFxufVxuXG4uc2xpZGUtY29udGVudCB7XG4gIHBhZGRpbmc6IDIwcHggMDtcbiAgd2lkdGg6IDY1JTtcbn1cblxuLnBhZ2luYXRpb24tZG90cyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uZG90IHtcbiAgaGVpZ2h0OiAxNXB4O1xuICB3aWR0aDogMTVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzEzNTZCOTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbjogMzBweCAxNXB4IDE1cHggMTVweDtcbn1cblxuLmhpZ2hEb3Qge1xuICBoZWlnaHQ6IDE1cHg7XG4gIHdpZHRoOiAxNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGMzMTY5O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luOiAzMHB4IDE1cHggMTVweCAxNXB4O1xufVxuXG4uc2xpZGUtYnV0dG9uIHtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uYXJyb3cge1xuICBib3JkZXI6IHNvbGlkICMxMzU2Qjk7XG4gIGJvcmRlci13aWR0aDogMCA1cHggNXB4IDA7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcGFkZGluZzogM3B4O1xuICBoZWlnaHQ6IDI1cHg7XG4gIHdpZHRoOiAyNXB4O1xufVxuXG4uYXJyb3c6aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG9wYWNpdHk6IDAuODtcbn1cblxuLnJpZ2h0IHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xufVxuXG4ubGVmdCB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDEzNWRlZyk7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMTM1ZGVnKTtcbn1cbiJdfQ== */"], data: { animation: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('carouselAnimation', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('void => *', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1 }))
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => void', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 }))
                ])
            ])
        ] } });


/***/ }),

/***/ "ANMO":
/*!********************************************************!*\
  !*** ./src/app/contact-form/contact-form.component.ts ***!
  \********************************************************/
/*! exports provided: ContactFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactFormComponent", function() { return ContactFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class ContactFormComponent {
    constructor() { }
    ngOnInit() {
    }
}
ContactFormComponent.ɵfac = function ContactFormComponent_Factory(t) { return new (t || ContactFormComponent)(); };
ContactFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactFormComponent, selectors: [["app-contact-form"]], decls: 19, vars: 0, consts: [[1, "contacts-container"], [1, "contacts-title"], [1, "contacts-container-inner"], [1, "contacts-form"], ["type", "text", "placeholder", "Navn", "required", "", 1, "contacts-form-input"], ["type", "text", "placeholder", "Etternavn", "required", "", 1, "contacts-form-input"], ["type", "text", "placeholder", "Epost", "required", "", 1, "contacts-form-input"], ["type", "text", "placeholder", "Telefon nummer", "required", "", 1, "contacts-form-input"], ["rows", "7", "placeholder", "Din melding", "required", "", 1, "contacts-form-input"], ["id", "button", 1, "contacts-form-button"], [1, "contacts-map"]], template: function ContactFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Kontaks oss ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "textarea", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " check ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".contacts-container[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.contacts-title[_ngcontent-%COMP%] {\n  color: #196DEB;\n  font-size: 55px;\n  text-align: center;\n  padding-bottom: 40px;\n}\n\n.contacts-container-inner[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  width: 80%;\n}\n\n.contacts-form[_ngcontent-%COMP%] {\n  margin-right: 20px;\n  display: flex;\n  flex-direction: column;\n}\n\n.contacts-form-input[_ngcontent-%COMP%] {\n  margin: 5px;\n  padding: 10px;\n  min-width: 250px;\n  min-height: 40px;\n  background-color: #F2F2F2;\n  border: none;\n  outline: none;\n  text-decoration: none;\n  border-radius: 10px;\n  border-bottom: 1px solid rgba(18, 77, 165, 0.5);\n  border-top: 1px solid transparent;\n}\n\ntextarea.contacts-form-input[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.contacts-form-input[_ngcontent-%COMP%]:focus {\n  border: 1px solid rgba(0, 0, 0, 0.45);\n  box-shadow: rgba(0, 0, 0, 0.15) 0px 3px 8px;\n}\n\n.contacts-form-button[_ngcontent-%COMP%] {\n  margin: 20px 5px 80px 5px;\n  background: linear-gradient(#1356B9, #10479A);\n  color: whitesmoke;\n}\n\n.contacts-map[_ngcontent-%COMP%] {\n  margin-top: 5px;\n  background-color: lightgray;\n  margin-left: 20px;\n  height: 285px;\n  width: 800px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhY3QtZm9ybS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQix5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGFBQWE7RUFDYixxQkFBcUI7RUFDckIsbUJBQW1CO0VBQ25CLCtDQUErQztFQUMvQyxpQ0FBaUM7QUFDbkM7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxxQ0FBcUM7RUFDckMsMkNBQTJDO0FBQzdDOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLDZDQUE2QztFQUM3QyxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsMkJBQTJCO0VBQzNCLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2IsWUFBWTtBQUNkIiwiZmlsZSI6ImNvbnRhY3QtZm9ybS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhY3RzLWNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uY29udGFjdHMtdGl0bGUge1xuICBjb2xvcjogIzE5NkRFQjtcbiAgZm9udC1zaXplOiA1NXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmctYm90dG9tOiA0MHB4O1xufVxuXG4uY29udGFjdHMtY29udGFpbmVyLWlubmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHdpZHRoOiA4MCU7XG59XG5cbi5jb250YWN0cy1mb3JtIHtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4uY29udGFjdHMtZm9ybS1pbnB1dCB7XG4gIG1hcmdpbjogNXB4O1xuICBwYWRkaW5nOiAxMHB4O1xuICBtaW4td2lkdGg6IDI1MHB4O1xuICBtaW4taGVpZ2h0OiA0MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjJGMkYyO1xuICBib3JkZXI6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMTgsIDc3LCAxNjUsIDAuNSk7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbn1cblxudGV4dGFyZWEuY29udGFjdHMtZm9ybS1pbnB1dCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uY29udGFjdHMtZm9ybS1pbnB1dDpmb2N1cyB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC40NSk7XG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4xNSkgMHB4IDNweCA4cHg7XG59XG5cbi5jb250YWN0cy1mb3JtLWJ1dHRvbiB7XG4gIG1hcmdpbjogMjBweCA1cHggODBweCA1cHg7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjMTM1NkI5LCAjMTA0NzlBKTtcbiAgY29sb3I6IHdoaXRlc21va2U7XG59XG5cbi5jb250YWN0cy1tYXAge1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gIGhlaWdodDogMjg1cHg7XG4gIHdpZHRoOiA4MDBweDtcbn1cblxuIl19 */"] });


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
const environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyCncrMZBAqVXdXhFXJ0RNv67--0CNmMvzw",
        authDomain: "webbynavia.firebaseapp.com",
        projectId: "webbynavia",
        storageBucket: "webbynavia.appspot.com",
        messagingSenderId: "1061761585839",
        appId: "1:1061761585839:web:ed2502109f4dc2a11d7a5a",
        measurementId: "G-XT2M65NHWF"
    }
};


/***/ }),

/***/ "Hmz7":
/*!**************************************************************************!*\
  !*** ./src/app/about/about-introduction/about-introduction.component.ts ***!
  \**************************************************************************/
/*! exports provided: AboutIntroductionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutIntroductionComponent", function() { return AboutIntroductionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class AboutIntroductionComponent {
    constructor() { }
    ngOnInit() {
    }
}
AboutIntroductionComponent.ɵfac = function AboutIntroductionComponent_Factory(t) { return new (t || AboutIntroductionComponent)(); };
AboutIntroductionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutIntroductionComponent, selectors: [["app-about-introduction"]], decls: 10, vars: 0, consts: [[1, "container"], [1, "container-inner"], [1, "container-inner-text"], [1, "container-inner-text-title"], [1, "container-inner-text-subtitle"], ["id", "button", "routerLink", "/contacts", 1, "component-button"], [1, "container-inner-image"]], template: function AboutIntroductionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Om oss ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Webbynavia AS er et firma med store ambisjoner og visjoner. Vi er stolt leverand\u00F8r av nettsider og designl\u00F8sninger som har revolusjonert mange virksomheter. V\u00E5re spesialister har en \u00E5rrekke med arbeid bak seg, og \u00F8nsker \u00E5 skape betydningsfulle produkter for din bedrift. Programmering er et stor og komplisert fagomr\u00E5de, v\u00E5rt m\u00E5l er \u00E5 spare deg for tid og energi ved \u00E5 s\u00F8rge for at du f\u00E5r \u00F8nsket produkt fortest mulig. Velger du oss, velger du den korteste veien til suksessen. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Kontakt oss");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]], styles: [".container[_ngcontent-%COMP%] {\n  width: 100%;\n  min-height: 650px;\n  background-color: #114347;\n  background-image: url('homeimage.png');\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n  color: whitesmoke;\n  display: flex;\n  align-items: center;\n}\n\n.container-inner[_ngcontent-%COMP%] {\n  margin-left: 100px;\n  display: flex;\n  justify-content: space-between;\n}\n\n.container-inner-text[_ngcontent-%COMP%] {\n  max-width: 55%;\n}\n\n.container-inner-text-title[_ngcontent-%COMP%] {\n  font-size: 40pt;\n}\n\n.container-inner-text-subtitle[_ngcontent-%COMP%] {\n  margin-top: 70px;\n  font-size: 15pt;\n  line-height: 1.7em;\n}\n\n.component-button[_ngcontent-%COMP%] {\n  background-color: #FFC93C !important;\n  color: #114347;\n  margin-top: 30px;\n  font-size: 13pt;\n  opacity: 0.9;\n}\n\n@media(hover: hover) {\n    .component-button[_ngcontent-%COMP%]:hover {\n        opacity: 0.7;\n    }\n}\n\n@media (max-width: 1250px) {\n    \n   .container-inner[_ngcontent-%COMP%] {\n       margin-left: 50px;\n   }\n   \n    .container-inner-text[_ngcontent-%COMP%] {\n       max-width: 70%;\n   }\n}\n\n@media (max-width: 1000px) {\n    .container[_ngcontent-%COMP%] {\n        padding-top: 50px;\n    }\n}\n\n@media (max-width: 825px) {\n    .container[_ngcontent-%COMP%] {\n        padding-top: 125px;\n        padding-bottom: 70px;\n    }\n}\n\n@media (max-width: 500px) {\n    .container[_ngcontent-%COMP%] {\n        padding-top: 100px;\n        padding-bottom: 70px;\n    }\n\n    .container-inner-text[_ngcontent-%COMP%] {\n        max-width: 90%;\n    }\n\n    .container-inner-text-title[_ngcontent-%COMP%] {\n        font-size: 35pt;\n    }\n\n    .container-inner-text-subtitle[_ngcontent-%COMP%] {\n        margin-top: 40px;\n        font-size: 13pt;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFib3V0LWludHJvZHVjdGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLGlCQUFpQjtFQUNqQix5QkFBeUI7RUFDekIsc0NBQTZEO0VBQzdELHNCQUFzQjtFQUN0QiwyQkFBMkI7RUFDM0IsNEJBQTRCO0VBQzVCLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYiw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUNBO0VBQ0UsZUFBZTtBQUNqQjs7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2Ysa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usb0NBQW9DO0VBQ3BDLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLFlBQVk7QUFDZDs7QUFFQTtJQUNJO1FBQ0ksWUFBWTtJQUNoQjtBQUNKOztBQUVBOztHQUVHO09BQ0ksaUJBQWlCO0dBQ3JCOztJQUVDO09BQ0csY0FBYztHQUNsQjtBQUNIOztBQUVBO0lBQ0k7UUFDSSxpQkFBaUI7SUFDckI7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksa0JBQWtCO1FBQ2xCLG9CQUFvQjtJQUN4QjtBQUNKOztBQUVBO0lBQ0k7UUFDSSxrQkFBa0I7UUFDbEIsb0JBQW9CO0lBQ3hCOztJQUVBO1FBQ0ksY0FBYztJQUNsQjs7SUFFQTtRQUNJLGVBQWU7SUFDbkI7O0lBRUE7UUFDSSxnQkFBZ0I7UUFDaEIsZUFBZTtJQUNuQjtBQUNKIiwiZmlsZSI6ImFib3V0LWludHJvZHVjdGlvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBtaW4taGVpZ2h0OiA2NTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzExNDM0NztcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vLi4vc3JjL2Fzc2V0cy9ob21laW1hZ2UucG5nXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGNvbG9yOiB3aGl0ZXNtb2tlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uY29udGFpbmVyLWlubmVyIHtcbiAgbWFyZ2luLWxlZnQ6IDEwMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5jb250YWluZXItaW5uZXItdGV4dCB7XG4gIG1heC13aWR0aDogNTUlO1xufVxuLmNvbnRhaW5lci1pbm5lci10ZXh0LXRpdGxlIHtcbiAgZm9udC1zaXplOiA0MHB0O1xufVxuLmNvbnRhaW5lci1pbm5lci10ZXh0LXN1YnRpdGxlIHtcbiAgbWFyZ2luLXRvcDogNzBweDtcbiAgZm9udC1zaXplOiAxNXB0O1xuICBsaW5lLWhlaWdodDogMS43ZW07XG59XG5cbi5jb21wb25lbnQtYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGQzkzQyAhaW1wb3J0YW50O1xuICBjb2xvcjogIzExNDM0NztcbiAgbWFyZ2luLXRvcDogMzBweDtcbiAgZm9udC1zaXplOiAxM3B0O1xuICBvcGFjaXR5OiAwLjk7XG59XG5cbkBtZWRpYShob3ZlcjogaG92ZXIpIHtcbiAgICAuY29tcG9uZW50LWJ1dHRvbjpob3ZlciB7XG4gICAgICAgIG9wYWNpdHk6IDAuNztcbiAgICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiAxMjUwcHgpIHtcbiAgICBcbiAgIC5jb250YWluZXItaW5uZXIge1xuICAgICAgIG1hcmdpbi1sZWZ0OiA1MHB4O1xuICAgfVxuICAgXG4gICAgLmNvbnRhaW5lci1pbm5lci10ZXh0IHtcbiAgICAgICBtYXgtd2lkdGg6IDcwJTtcbiAgIH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDEwMDBweCkge1xuICAgIC5jb250YWluZXIge1xuICAgICAgICBwYWRkaW5nLXRvcDogNTBweDtcbiAgICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA4MjVweCkge1xuICAgIC5jb250YWluZXIge1xuICAgICAgICBwYWRkaW5nLXRvcDogMTI1cHg7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiA3MHB4O1xuICAgIH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDUwMHB4KSB7XG4gICAgLmNvbnRhaW5lciB7XG4gICAgICAgIHBhZGRpbmctdG9wOiAxMDBweDtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDcwcHg7XG4gICAgfVxuXG4gICAgLmNvbnRhaW5lci1pbm5lci10ZXh0IHtcbiAgICAgICAgbWF4LXdpZHRoOiA5MCU7XG4gICAgfVxuXG4gICAgLmNvbnRhaW5lci1pbm5lci10ZXh0LXRpdGxlIHtcbiAgICAgICAgZm9udC1zaXplOiAzNXB0O1xuICAgIH1cblxuICAgIC5jb250YWluZXItaW5uZXItdGV4dC1zdWJ0aXRsZSB7XG4gICAgICAgIG1hcmdpbi10b3A6IDQwcHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTNwdDtcbiAgICB9XG59Il19 */"] });


/***/ }),

/***/ "I4lS":
/*!******************************************************!*\
  !*** ./src/app/development/development.component.ts ***!
  \******************************************************/
/*! exports provided: DevelopmentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DevelopmentComponent", function() { return DevelopmentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _contact_form_contact_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../contact-form/contact-form.component */ "ANMO");


class DevelopmentComponent {
    constructor() { }
    ngOnInit() {
    }
}
DevelopmentComponent.ɵfac = function DevelopmentComponent_Factory(t) { return new (t || DevelopmentComponent)(); };
DevelopmentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DevelopmentComponent, selectors: [["app-development"]], decls: 3, vars: 0, consts: [[1, "container"]], template: function DevelopmentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " development works!\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-contact-form");
    } }, directives: [_contact_form_contact_form_component__WEBPACK_IMPORTED_MODULE_1__["ContactFormComponent"]], styles: [".container[_ngcontent-%COMP%] {\n  height: 300px;\n  color: black;\n  display: flex;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRldmVsb3BtZW50LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2IsWUFBWTtFQUNaLGFBQWE7RUFDYixtQkFBbUI7QUFDckIiLCJmaWxlIjoiZGV2ZWxvcG1lbnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xuICBoZWlnaHQ6IDMwMHB4O1xuICBjb2xvcjogYmxhY2s7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4iXX0= */"] });


/***/ }),

/***/ "KBOi":
/*!*********************************************************************!*\
  !*** ./src/app/homepage/homepage-trust/homepage-trust.component.ts ***!
  \*********************************************************************/
/*! exports provided: HomepageTrustComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomepageTrustComponent", function() { return HomepageTrustComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class HomepageTrustComponent {
    constructor() { }
    ngOnInit() {
    }
}
HomepageTrustComponent.ɵfac = function HomepageTrustComponent_Factory(t) { return new (t || HomepageTrustComponent)(); };
HomepageTrustComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomepageTrustComponent, selectors: [["app-homepage-trust"]], decls: 41, vars: 0, consts: [[1, "container"], [1, "container-inner"], [1, "container-inner-text"], [1, "container-inner-text-title"], [1, "container-inner-text-subtitle"], [2, "color", "#ffc93c"], [1, "container-inner-boxes"], [1, "container-inner-boxes-block"], [1, "box-content"], ["src", "./assets/calendar.png", 1, "box-content-image"], [1, "box-content-title"], [1, "box-content-text"], ["src", "./assets/people.png", 1, "box-content-image"], ["src", "./assets/money.png", 1, "box-content-image"], ["src", "./assets/phone.png\n          ", 1, "box-content-image"]], template: function HomepageTrustComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Tallene snakker selv for oss");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "V\u00E5r erfaring hjelper oss \u00E5 gi ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "deg");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " de resultatene du ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "selv \u00F8nsker");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "\u00C5r I bransjen");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "23");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Forn\u00F8yde kunder");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, ">1 000 000");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Fortjeneste v\u00E5r markedsf\u00F8ring har skapt for v\u00E5re kunder");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, ">1 200");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Salg vi har tiltrukket til v\u00E5re kunder");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".container[_ngcontent-%COMP%] {\n  width: 100%;\n  background-color: #297C86;\n  background: linear-gradient(0deg, rgba(17,67,71,1), rgba(41,124,134,1) 50%);\n  color: whitesmoke;\n  display: flex;\n  justify-content: center;\n}\n\n.container-inner[_ngcontent-%COMP%] {\n  margin-top: 50px;\n  width: 100%;\n}\n\n.container-inner-text[_ngcontent-%COMP%] {\n  text-align: center;\n  line-height: 3em;\n}\n\n.container-inner-text-title[_ngcontent-%COMP%] {\n  color: #FFC93C;\n  font-size: 30pt;\n}\n\n.container-inner-text-subtitle[_ngcontent-%COMP%] {\n  margin-top: 15px;\n  font-size: 15pt;\n}\n\n.container-inner-boxes[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-around;\n  margin: 35px 100px 50px 100px;\n}\n\n.container-inner-boxes-block[_ngcontent-%COMP%] {\n  border-radius: 10px;\n  width: 250px;\n  height: 250px;\n  background-color: #114347;\n  transition: 0.25s;\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  text-align: center;\n}\n\n.box-content[_ngcontent-%COMP%] {\n  height: 100%;\n  padding-top: 25px;\n}\n\n.box-content-image[_ngcontent-%COMP%] {\n  width: auto;\n  height: 70px;\n}\n\n.box-content-title[_ngcontent-%COMP%] {\n  color: #FFC93C;\n  padding-top: 15px;\n  font-size: 28pt;\n  line-height: 100%;\n}\n\n.box-content-text[_ngcontent-%COMP%] {\n  padding-top: 20px;\n  font-size: 15pt;\n  line-height: 100%;\n  padding: 15px 20px;\n}\n\n@media(hover: hover) {\n    .container-inner-boxes-block[_ngcontent-%COMP%]:hover {\n        transform: scale(1.05);\n        transition: 0.25s;\n    }      \n}\n\n@media(max-width: 1300px) {\n    .container-inner-boxes[_ngcontent-%COMP%] {\n        margin: 35px 50px 50px 50px\n    }\n}\n\n@media(max-width: 1180px) {\n    .container-inner-boxes[_ngcontent-%COMP%] {\n        flex-wrap: wrap;\n        margin: 35px 100px 50px 100px;\n    }\n\n    .container-inner-boxes-block[_ngcontent-%COMP%] {\n        margin-bottom: 20px;\n    }\n}\n\n@media(max-width: 600px) {\n\n    .box-content[_ngcontent-%COMP%] {\n        padding-top: 30px;\n    }\n\n    .container-inner-text[_ngcontent-%COMP%] {\n        margin: auto 20px;\n    }\n\n    .container-inner-boxes[_ngcontent-%COMP%] {\n        margin: 35px auto;\n    }\n\n    .container-inner-text-subtitle[_ngcontent-%COMP%] {\n        font-size: 13pt;\n    }\n\n    .box-content-text[_ngcontent-%COMP%] {\n        font-size: 13pt;\n    }\n}\n\n@media(max-width: 375px) {\n    \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWVwYWdlLXRydXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLDJFQUEyRTtFQUMzRSxpQkFBaUI7RUFDakIsYUFBYTtFQUNiLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw2QkFBNkI7RUFDN0IsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixhQUFhO0VBQ2IseUJBQXlCO0VBQ3pCLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0QixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjs7QUFFQTtJQUNJO1FBQ0ksc0JBQXNCO1FBQ3RCLGlCQUFpQjtJQUNyQjtBQUNKOztBQUVBO0lBQ0k7UUFDSTtJQUNKO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLGVBQWU7UUFDZiw2QkFBNkI7SUFDakM7O0lBRUE7UUFDSSxtQkFBbUI7SUFDdkI7QUFDSjs7QUFFQTs7SUFFSTtRQUNJLGlCQUFpQjtJQUNyQjs7SUFFQTtRQUNJLGlCQUFpQjtJQUNyQjs7SUFFQTtRQUNJLGlCQUFpQjtJQUNyQjs7SUFFQTtRQUNJLGVBQWU7SUFDbkI7O0lBRUE7UUFDSSxlQUFlO0lBQ25CO0FBQ0o7O0FBRUE7O0FBRUEiLCJmaWxlIjoiaG9tZXBhZ2UtdHJ1c3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI5N0M4NjtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDBkZWcsIHJnYmEoMTcsNjcsNzEsMSksIHJnYmEoNDEsMTI0LDEzNCwxKSA1MCUpO1xuICBjb2xvcjogd2hpdGVzbW9rZTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5jb250YWluZXItaW5uZXIge1xuICBtYXJnaW4tdG9wOiA1MHB4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmNvbnRhaW5lci1pbm5lci10ZXh0IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBsaW5lLWhlaWdodDogM2VtO1xufVxuXG4uY29udGFpbmVyLWlubmVyLXRleHQtdGl0bGUge1xuICBjb2xvcjogI0ZGQzkzQztcbiAgZm9udC1zaXplOiAzMHB0O1xufVxuXG4uY29udGFpbmVyLWlubmVyLXRleHQtc3VidGl0bGUge1xuICBtYXJnaW4tdG9wOiAxNXB4O1xuICBmb250LXNpemU6IDE1cHQ7XG59XG5cbi5jb250YWluZXItaW5uZXItYm94ZXMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgbWFyZ2luOiAzNXB4IDEwMHB4IDUwcHggMTAwcHg7XG59XG5cbi5jb250YWluZXItaW5uZXItYm94ZXMtYmxvY2sge1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICB3aWR0aDogMjUwcHg7XG4gIGhlaWdodDogMjUwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxMTQzNDc7XG4gIHRyYW5zaXRpb246IDAuMjVzO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5ib3gtY29udGVudCB7XG4gIGhlaWdodDogMTAwJTtcbiAgcGFkZGluZy10b3A6IDI1cHg7XG59XG5cbi5ib3gtY29udGVudC1pbWFnZSB7XG4gIHdpZHRoOiBhdXRvO1xuICBoZWlnaHQ6IDcwcHg7XG59XG5cbi5ib3gtY29udGVudC10aXRsZSB7XG4gIGNvbG9yOiAjRkZDOTNDO1xuICBwYWRkaW5nLXRvcDogMTVweDtcbiAgZm9udC1zaXplOiAyOHB0O1xuICBsaW5lLWhlaWdodDogMTAwJTtcbn1cblxuLmJveC1jb250ZW50LXRleHQge1xuICBwYWRkaW5nLXRvcDogMjBweDtcbiAgZm9udC1zaXplOiAxNXB0O1xuICBsaW5lLWhlaWdodDogMTAwJTtcbiAgcGFkZGluZzogMTVweCAyMHB4O1xufVxuXG5AbWVkaWEoaG92ZXI6IGhvdmVyKSB7XG4gICAgLmNvbnRhaW5lci1pbm5lci1ib3hlcy1ibG9jazpob3ZlciB7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XG4gICAgICAgIHRyYW5zaXRpb246IDAuMjVzO1xuICAgIH0gICAgICBcbn1cblxuQG1lZGlhKG1heC13aWR0aDogMTMwMHB4KSB7XG4gICAgLmNvbnRhaW5lci1pbm5lci1ib3hlcyB7XG4gICAgICAgIG1hcmdpbjogMzVweCA1MHB4IDUwcHggNTBweFxuICAgIH1cbn1cblxuQG1lZGlhKG1heC13aWR0aDogMTE4MHB4KSB7XG4gICAgLmNvbnRhaW5lci1pbm5lci1ib3hlcyB7XG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgICAgbWFyZ2luOiAzNXB4IDEwMHB4IDUwcHggMTAwcHg7XG4gICAgfVxuXG4gICAgLmNvbnRhaW5lci1pbm5lci1ib3hlcy1ibG9jayB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgfVxufVxuXG5AbWVkaWEobWF4LXdpZHRoOiA2MDBweCkge1xuXG4gICAgLmJveC1jb250ZW50IHtcbiAgICAgICAgcGFkZGluZy10b3A6IDMwcHg7XG4gICAgfVxuXG4gICAgLmNvbnRhaW5lci1pbm5lci10ZXh0IHtcbiAgICAgICAgbWFyZ2luOiBhdXRvIDIwcHg7XG4gICAgfVxuXG4gICAgLmNvbnRhaW5lci1pbm5lci1ib3hlcyB7XG4gICAgICAgIG1hcmdpbjogMzVweCBhdXRvO1xuICAgIH1cblxuICAgIC5jb250YWluZXItaW5uZXItdGV4dC1zdWJ0aXRsZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTNwdDtcbiAgICB9XG5cbiAgICAuYm94LWNvbnRlbnQtdGV4dCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTNwdDtcbiAgICB9XG59XG5cbkBtZWRpYShtYXgtd2lkdGg6IDM3NXB4KSB7XG4gICAgXG59Il19 */"] });


/***/ }),

/***/ "KfLr":
/*!************************************************!*\
  !*** ./src/app/services/services.component.ts ***!
  \************************************************/
/*! exports provided: ServicesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesComponent", function() { return ServicesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_introduction_services_introduction_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services-introduction/services-introduction.component */ "PnrC");
/* harmony import */ var _services_description_services_description_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services-description/services-description.component */ "Q3ZX");
/* harmony import */ var _services_whyus_services_whyus_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services-whyus/services-whyus.component */ "LJ0G");
/* harmony import */ var _services_howitworks_services_howitworks_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services-howitworks/services-howitworks.component */ "oPSB");





class ServicesComponent {
    constructor() { }
    ngOnInit() {
    }
    ;
    receiveData() {
        this.buttonClicked = !this.buttonClicked;
    }
}
ServicesComponent.ɵfac = function ServicesComponent_Factory(t) { return new (t || ServicesComponent)(); };
ServicesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ServicesComponent, selectors: [["app-services"]], decls: 4, vars: 1, consts: [[3, "buttonClicked"]], template: function ServicesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-services-introduction", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("buttonClicked", function ServicesComponent_Template_app_services_introduction_buttonClicked_0_listener() { return ctx.receiveData(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-services-description", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-services-whyus");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-services-howitworks");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("buttonClicked", ctx.buttonClicked);
    } }, directives: [_services_introduction_services_introduction_component__WEBPACK_IMPORTED_MODULE_1__["ServicesIntroductionComponent"], _services_description_services_description_component__WEBPACK_IMPORTED_MODULE_2__["ServicesDescriptionComponent"], _services_whyus_services_whyus_component__WEBPACK_IMPORTED_MODULE_3__["ServicesWhyusComponent"], _services_howitworks_services_howitworks_component__WEBPACK_IMPORTED_MODULE_4__["ServicesHowitworksComponent"]], styles: [".container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 80vh;\n  background-color: rgba(20, 22, 44, 0.95);\n  display: flex;\n  align-items: center;\n}\n\n.container-inner[_ngcontent-%COMP%] {\n  max-width: 600px;\n  display: block;\n  margin-left: 100px;\n}\n\n.container-content[_ngcontent-%COMP%] {\n  font-size: 40pt;\n  line-height: 1.4em;\n}\n\n.component-button[_ngcontent-%COMP%] {\n  background-color: whitesmoke;\n  margin-top: 30px;\n  font-size: 13pt;\n  opacity: 0.9;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLHdDQUF3QztFQUN4QyxhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsNEJBQTRCO0VBQzVCLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsWUFBWTtBQUNkIiwiZmlsZSI6InNlcnZpY2VzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogODB2aDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMCwgMjIsIDQ0LCAwLjk1KTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmNvbnRhaW5lci1pbm5lciB7XG4gIG1heC13aWR0aDogNjAwcHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tbGVmdDogMTAwcHg7XG59XG5cbi5jb250YWluZXItY29udGVudCB7XG4gIGZvbnQtc2l6ZTogNDBwdDtcbiAgbGluZS1oZWlnaHQ6IDEuNGVtO1xufVxuXG4uY29tcG9uZW50LWJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG4gIGZvbnQtc2l6ZTogMTNwdDtcbiAgb3BhY2l0eTogMC45O1xufVxuXG5cbiJdfQ== */"] });


/***/ }),

/***/ "LJ0G":
/*!*********************************************************************!*\
  !*** ./src/app/services/services-whyus/services-whyus.component.ts ***!
  \*********************************************************************/
/*! exports provided: ServicesWhyusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesWhyusComponent", function() { return ServicesWhyusComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class ServicesWhyusComponent {
    constructor() { }
    ngOnInit() {
    }
}
ServicesWhyusComponent.ɵfac = function ServicesWhyusComponent_Factory(t) { return new (t || ServicesWhyusComponent)(); };
ServicesWhyusComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ServicesWhyusComponent, selectors: [["app-services-whyus"]], decls: 42, vars: 0, consts: [[1, "container"], [1, "container-inner"], [1, "container-title"], [1, "container-inner-boxes"], [1, "wrapper"], [1, "box", "a"], [1, "box-title"], [1, "box-title-text"], [1, "box-main-text"], [1, "box", "b"], [1, "box", "c"], [1, "box", "d"], [1, "box", "e"], [1, "box", "f"]], template: function ServicesWhyusComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Hvorfor velge oss?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Stor verdi for pengene");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Det kan fort koste skjorta \u00E5 f\u00E5 en skreddersydd nettside p\u00E5 egenh\u00E5nd. \u00C5 gj\u00F8re det gjennom oss sparer deg for hodepine og tar vare p\u00E5 lommeboka.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Vi er effektive");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Vi leverer produktet raskt, slik at du kan benytte deg av fordelene ved \u00E5 vare synlig digitalt fortest mulig.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Stor erfaring");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Vi har samlet ett team av profesjonelle utviklere og designere som s\u00F8rger for at v\u00E5re produkter er av h\u00F8yeste kvalitet.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Vedlikehold");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Vi s\u00F8rger for at nettsiden din fungerer optimalt til enhver tid etter leveransen. Dine kundene vil aldri f\u00E5 en d\u00E5rlig opplevelse med nettsiden.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Vellykket markedsf\u00F8ring strategi");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Gjennom mange \u00E5r i bransjen har vi utarbeidet en markedsf\u00F8rings strategi som har vist seg \u00E5 v\u00E6re effektiv for mange.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Support 24/7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Vi har d\u00F8gnbemannet support dersom det skulle oppst\u00E5 problemer med din nettside.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  background-color: #297C86;\n}\n\n.container-title[_ngcontent-%COMP%] {\n  color: #FFC93C;\n  margin-top: 50px;\n  font-size: 30pt;\n  text-align: center;\n}\n\n.container-inner[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n}\n\n.container-inner-boxes[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  width: 100%;\n}\n\n.wrapper[_ngcontent-%COMP%] {\n  margin: 35px;\n  width: 100%;\n  display: grid;\n  justify-content: center;\n  grid-template-columns: 40% 40%;\n  grid-template-rows: 150px 150px 150px;\n  grid-gap: 30px 60px;\n}\n\n.wrapper-content[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.box[_ngcontent-%COMP%] {\n  background-color: #11434752;\n  border-radius: 5px;\n  padding: 20px;\n  transition: 0.25s;\n  border-left: 10px solid #114347;\n}\n\n.box-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n.box-title-text[_ngcontent-%COMP%] {\n  font-size: 18pt;\n}\n\n.box-main-text[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  font-size: 14pt;\n  line-height: 130%;\n}\n\n@media(hover: hover) {\n    .box[_ngcontent-%COMP%]:hover {\n        transform: scale(1.03);\n        transition: 0.25s;\n        border-left: 10px solid #FFC93C;\n    }\n}\n\n@media (max-width: 1300px) {\n    .wrapper[_ngcontent-%COMP%] {\n        grid-template-columns: 45% 45%;\n        grid-template-rows: 150px 150px 150px;\n        grid-gap: 30px 60px;\n      }\n}\n\n@media (max-width: 1200px) {\n    .wrapper[_ngcontent-%COMP%] {\n        grid-template-rows: 170px 170px 170px;\n      }\n}\n\n@media (max-width: 970px) {\n    .wrapper[_ngcontent-%COMP%] {\n        grid-template-rows: 220px 220px 220px;\n      }\n}\n\n@media (max-width: 768px) {\n    .wrapper[_ngcontent-%COMP%] {\n        grid-template-columns: 80%;\n        grid-template-rows: none\n      }\n\n      .box[_ngcontent-%COMP%] {\n          height: 180px;\n      }\n}\n\n@media (max-width: 550px) {\n    .wrapper[_ngcontent-%COMP%] {\n        margin: 50px auto;\n        grid-template-columns: 90%;\n      }\n\n      .box-main-text[_ngcontent-%COMP%] {\n        font-size: 13pt;\n    }\n}\n\n@media (max-width: 400px) {\n\n    .box[_ngcontent-%COMP%] {\n        height: 200px;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzLXdoeXVzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsV0FBVztBQUNiOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLDhCQUE4QjtFQUM5QixxQ0FBcUM7RUFDckMsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsMkJBQTJCO0VBQzNCLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLCtCQUErQjtBQUNqQzs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixpQkFBaUI7QUFDbkI7O0FBRUE7SUFDSTtRQUNJLHNCQUFzQjtRQUN0QixpQkFBaUI7UUFDakIsK0JBQStCO0lBQ25DO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLDhCQUE4QjtRQUM5QixxQ0FBcUM7UUFDckMsbUJBQW1CO01BQ3JCO0FBQ047O0FBRUE7SUFDSTtRQUNJLHFDQUFxQztNQUN2QztBQUNOOztBQUVBO0lBQ0k7UUFDSSxxQ0FBcUM7TUFDdkM7QUFDTjs7QUFFQTtJQUNJO1FBQ0ksMEJBQTBCO1FBQzFCO01BQ0Y7O01BRUE7VUFDSSxhQUFhO01BQ2pCO0FBQ047O0FBRUE7SUFDSTtRQUNJLGlCQUFpQjtRQUNqQiwwQkFBMEI7TUFDNUI7O01BRUE7UUFDRSxlQUFlO0lBQ25CO0FBQ0o7O0FBRUE7O0lBRUk7UUFDSSxhQUFhO0lBQ2pCO0FBQ0oiLCJmaWxlIjoic2VydmljZXMtd2h5dXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjk3Qzg2O1xufVxuXG4uY29udGFpbmVyLXRpdGxlIHtcbiAgY29sb3I6ICNGRkM5M0M7XG4gIG1hcmdpbi10b3A6IDUwcHg7XG4gIGZvbnQtc2l6ZTogMzBwdDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uY29udGFpbmVyLWlubmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5jb250YWluZXItaW5uZXItYm94ZXMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi53cmFwcGVyIHtcbiAgbWFyZ2luOiAzNXB4O1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZ3JpZDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNDAlIDQwJTtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxNTBweCAxNTBweCAxNTBweDtcbiAgZ3JpZC1nYXA6IDMwcHggNjBweDtcbn1cblxuLndyYXBwZXItY29udGVudCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uYm94IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzExNDM0NzUyO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIHRyYW5zaXRpb246IDAuMjVzO1xuICBib3JkZXItbGVmdDogMTBweCBzb2xpZCAjMTE0MzQ3O1xufVxuXG4uYm94LXRpdGxlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmJveC10aXRsZS10ZXh0IHtcbiAgZm9udC1zaXplOiAxOHB0O1xufVxuXG4uYm94LW1haW4tdGV4dCB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIGZvbnQtc2l6ZTogMTRwdDtcbiAgbGluZS1oZWlnaHQ6IDEzMCU7XG59XG5cbkBtZWRpYShob3ZlcjogaG92ZXIpIHtcbiAgICAuYm94OmhvdmVyIHtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjAzKTtcbiAgICAgICAgdHJhbnNpdGlvbjogMC4yNXM7XG4gICAgICAgIGJvcmRlci1sZWZ0OiAxMHB4IHNvbGlkICNGRkM5M0M7XG4gICAgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogMTMwMHB4KSB7XG4gICAgLndyYXBwZXIge1xuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDQ1JSA0NSU7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogMTUwcHggMTUwcHggMTUwcHg7XG4gICAgICAgIGdyaWQtZ2FwOiAzMHB4IDYwcHg7XG4gICAgICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiAxMjAwcHgpIHtcbiAgICAud3JhcHBlciB7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogMTcwcHggMTcwcHggMTcwcHg7XG4gICAgICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA5NzBweCkge1xuICAgIC53cmFwcGVyIHtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAyMjBweCAyMjBweCAyMjBweDtcbiAgICAgIH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgLndyYXBwZXIge1xuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDgwJTtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBub25lXG4gICAgICB9XG5cbiAgICAgIC5ib3gge1xuICAgICAgICAgIGhlaWdodDogMTgwcHg7XG4gICAgICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA1NTBweCkge1xuICAgIC53cmFwcGVyIHtcbiAgICAgICAgbWFyZ2luOiA1MHB4IGF1dG87XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogOTAlO1xuICAgICAgfVxuXG4gICAgICAuYm94LW1haW4tdGV4dCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTNwdDtcbiAgICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA0MDBweCkge1xuXG4gICAgLmJveCB7XG4gICAgICAgIGhlaWdodDogMjAwcHg7XG4gICAgfVxufSJdfQ== */"] });


/***/ }),

/***/ "LXEp":
/*!**************************************************************************!*\
  !*** ./src/app/homepage/homepage-testimonials/testimonials.component.ts ***!
  \**************************************************************************/
/*! exports provided: TestimonialsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestimonialsComponent", function() { return TestimonialsComponent; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");



function TestimonialsComponent_ng_container_10_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const review_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@carouselAnimation", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](review_r2.content);
} }
function TestimonialsComponent_ng_container_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TestimonialsComponent_ng_container_10_div_1_Template, 2, 2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const i_r3 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.currentSlideIndex === i_r3);
} }
function TestimonialsComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r7 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx_r1.calculateDotClass(i_r7));
} }
class TestimonialsComponent {
    constructor() {
        this.reviews = [
            {
                content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            },
            {
                content: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
            },
            {
                content: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
            },
        ];
        this.currentSlideIndex = 0;
    }
    ngOnInit() { }
    showPrevSlide() {
        let prev = this.currentSlideIndex - 1;
        this.currentSlideIndex = prev < 0 ? 2 : prev;
    }
    showNextSlide() {
        let next = this.currentSlideIndex + 1;
        let reviewsLength = this.reviews.length - 1;
        this.currentSlideIndex = next > reviewsLength ? 0 : next;
    }
    calculateDotClass(index) {
        if (index === this.currentSlideIndex) {
            return { highDot: true };
        }
        else {
            return { dot: true };
        }
    }
}
TestimonialsComponent.ɵfac = function TestimonialsComponent_Factory(t) { return new (t || TestimonialsComponent)(); };
TestimonialsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: TestimonialsComponent, selectors: [["app-homepage-testimonials"]], decls: 15, vars: 2, consts: [[1, "container"], [1, "container-intro"], [1, "intro-title"], [1, "intro-subtitle"], [1, "review"], [1, "review-block"], ["src", "./assets/leftarrow.svg", 1, "slide-button", 3, "click"], [4, "ngFor", "ngForOf"], ["src", "./assets/rightarrow.svg", 1, "slide-button", 3, "click"], [1, "pagination-dots"], ["class", "slide", 4, "ngIf"], [1, "slide"], [3, "ngClass"]], template: function TestimonialsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Testimonials");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Explore what our customers say about us");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TestimonialsComponent_Template_img_click_8_listener() { return ctx.showPrevSlide(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, TestimonialsComponent_ng_container_10_Template, 2, 1, "ng-container", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TestimonialsComponent_Template_img_click_12_listener() { return ctx.showNextSlide(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, TestimonialsComponent_div_14_Template, 2, 1, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.reviews);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.reviews);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"]], styles: [".container[_ngcontent-%COMP%] {\n  background-color: #dbf6e9;\n  color: #31326f;\n  justify-content: center;\n}\n\n.container-intro[_ngcontent-%COMP%] {\n  text-align: center;\n  line-height: 3em;\n  padding-top: 50px;\n}\n\n.intro-title[_ngcontent-%COMP%] {\n  font-size: 30pt;\n}\n\n.intro-subtitle[_ngcontent-%COMP%] {\n  font-size: 15pt;\n}\n\n.review[_ngcontent-%COMP%] {\n  min-height: 250px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.review-block[_ngcontent-%COMP%] {\n  width: 350px;\n  height: 100%;\n  margin: 0 50px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  font-size: 15pt;\n}\n\n.slide[_ngcontent-%COMP%] {\n  position: absolute;\n  max-width: 500px;\n  transition: transform 150ms cubic-bezier(0.25, 0.46, 0.45, 0.84);\n}\n\n.pagination-dots[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n\n.dot[_ngcontent-%COMP%] {\n  height: 15px;\n  width: 15px;\n  background-color: rgba(20, 22, 44);\n  border-radius: 50%;\n  display: inline-block;\n  margin: 15px;\n}\n\n.highDot[_ngcontent-%COMP%] {\n  height: 15px;\n  width: 15px;\n  background-color: rgba(20, 22, 44);\n  opacity: 0.4;\n  border-radius: 50%;\n  display: inline-block;\n  margin: 15px;\n}\n\n.slide-button[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  cursor: pointer;\n}\n\n.slide-button[_ngcontent-%COMP%]:hover {\n  opacity: 0.7;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3RpbW9uaWFscy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQXlCO0VBQ3pCLGNBQWM7RUFDZCx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7RUFDWixjQUFjO0VBQ2QsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGdFQUFnRTtBQUNsRTs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLGtDQUFrQztFQUNsQyxrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsa0NBQWtDO0VBQ2xDLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFlBQVk7QUFDZCIsImZpbGUiOiJ0ZXN0aW1vbmlhbHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGJmNmU5O1xuICBjb2xvcjogIzMxMzI2ZjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5jb250YWluZXItaW50cm8ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGxpbmUtaGVpZ2h0OiAzZW07XG4gIHBhZGRpbmctdG9wOiA1MHB4O1xufVxuXG4uaW50cm8tdGl0bGUge1xuICBmb250LXNpemU6IDMwcHQ7XG59XG5cbi5pbnRyby1zdWJ0aXRsZSB7XG4gIGZvbnQtc2l6ZTogMTVwdDtcbn1cblxuLnJldmlldyB7XG4gIG1pbi1oZWlnaHQ6IDI1MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnJldmlldy1ibG9jayB7XG4gIHdpZHRoOiAzNTBweDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtYXJnaW46IDAgNTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxNXB0O1xufVxuXG4uc2xpZGUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG1heC13aWR0aDogNTAwcHg7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAxNTBtcyBjdWJpYy1iZXppZXIoMC4yNSwgMC40NiwgMC40NSwgMC44NCk7XG59XG5cbi5wYWdpbmF0aW9uLWRvdHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmRvdCB7XG4gIGhlaWdodDogMTVweDtcbiAgd2lkdGg6IDE1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjAsIDIyLCA0NCk7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW46IDE1cHg7XG59XG5cbi5oaWdoRG90IHtcbiAgaGVpZ2h0OiAxNXB4O1xuICB3aWR0aDogMTVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMCwgMjIsIDQ0KTtcbiAgb3BhY2l0eTogMC40O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luOiAxNXB4O1xufVxuXG4uc2xpZGUtYnV0dG9uIHtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uc2xpZGUtYnV0dG9uOmhvdmVyIHtcbiAgb3BhY2l0eTogMC43O1xufVxuIl19 */"], data: { animation: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('carouselAnimation', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('void => *', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1 }))
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => void', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 }))
                ])
            ])
        ] } });


/***/ }),

/***/ "OPi6":
/*!**************************************************!*\
  !*** ./src/app/marketing/marketing.component.ts ***!
  \**************************************************/
/*! exports provided: MarketingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarketingComponent", function() { return MarketingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _contact_form_contact_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../contact-form/contact-form.component */ "ANMO");


class MarketingComponent {
    constructor() { }
    ngOnInit() {
    }
}
MarketingComponent.ɵfac = function MarketingComponent_Factory(t) { return new (t || MarketingComponent)(); };
MarketingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MarketingComponent, selectors: [["app-marketing"]], decls: 3, vars: 0, consts: [[1, "container"]], template: function MarketingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " marketing works!\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-contact-form");
    } }, directives: [_contact_form_contact_form_component__WEBPACK_IMPORTED_MODULE_1__["ContactFormComponent"]], styles: [".container[_ngcontent-%COMP%] {\n  height: 300px;\n  color: black;\n  display: flex;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hcmtldGluZy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLFlBQVk7RUFDWixhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCIiwiZmlsZSI6Im1hcmtldGluZy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XG4gIGhlaWdodDogMzAwcHg7XG4gIGNvbG9yOiBibGFjaztcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbiJdfQ== */"] });


/***/ }),

/***/ "Oh3b":
/*!************************************************!*\
  !*** ./src/app/homepage/homepage.component.ts ***!
  \************************************************/
/*! exports provided: HomepageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomepageComponent", function() { return HomepageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _homepage_introduction_introduction_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./homepage-introduction/introduction.component */ "lLp1");
/* harmony import */ var _homepage_services_services_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./homepage-services/services.component */ "dx5Q");
/* harmony import */ var _homepage_trust_homepage_trust_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./homepage-trust/homepage-trust.component */ "KBOi");




class HomepageComponent {
    constructor() { }
    ngOnInit() {
    }
}
HomepageComponent.ɵfac = function HomepageComponent_Factory(t) { return new (t || HomepageComponent)(); };
HomepageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomepageComponent, selectors: [["app-homepage"]], decls: 3, vars: 0, template: function HomepageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-homepage-introduction");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-homepage-services");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-homepage-trust");
    } }, directives: [_homepage_introduction_introduction_component__WEBPACK_IMPORTED_MODULE_1__["IntroductionComponent"], _homepage_services_services_component__WEBPACK_IMPORTED_MODULE_2__["OffersComponent"], _homepage_trust_homepage_trust_component__WEBPACK_IMPORTED_MODULE_3__["HomepageTrustComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lcGFnZS5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ "PnrC":
/*!***********************************************************************************!*\
  !*** ./src/app/services/services-introduction/services-introduction.component.ts ***!
  \***********************************************************************************/
/*! exports provided: ServicesIntroductionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesIntroductionComponent", function() { return ServicesIntroductionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class ServicesIntroductionComponent {
    constructor() {
        this.buttonClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
    }
    processButtonClick() {
        this.buttonClicked.emit();
    }
}
ServicesIntroductionComponent.ɵfac = function ServicesIntroductionComponent_Factory(t) { return new (t || ServicesIntroductionComponent)(); };
ServicesIntroductionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ServicesIntroductionComponent, selectors: [["app-services-introduction"]], outputs: { buttonClicked: "buttonClicked" }, decls: 10, vars: 0, consts: [[1, "container"], [1, "container-inner"], [1, "container-inner-text"], [1, "container-inner-text-title"], [1, "container-inner-text-subtitle"], ["id", "button", 1, "component-button", 3, "click"], [1, "container-inner-image"]], template: function ServicesIntroductionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Tjenester ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Alle vet at et godt f\u00F8rsteinntrykk er viktig og din hjemmeside vil som regel v\u00E6re det f\u00F8rste m\u00F8tet mellom deg og kundene. Derfor er det viktig med en profesjonell, strukturert og attraktiv nettside som skaper en trygghet hos kunden. V\u00E5re utviklere programmerer din nettside etter dine \u00F8nsker og behov. Vi har profesjonelle designere som s\u00F8rger for at din identiteten kommer frem, og at du skiller deg ut i markedet. I tillegg til utvikling og design av nettsiden, kan du ogs\u00E5 velge \u00E5 bli markedsf\u00F8rt av oss ved hjelp av en effektiv strategi som s\u00F8rger for at du er synlig. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ServicesIntroductionComponent_Template_button_click_7_listener() { return ctx.processButtonClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Les mer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".container[_ngcontent-%COMP%] {\n  width: 100%;\n  min-height: 650px;\n  padding: 125px 0 100px 0;\n  background-color: #114347;\n  background-image: url('homeimage.png');\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n  color: whitesmoke;\n  display: flex;\n  align-items: center;\n}\n\n.container-inner[_ngcontent-%COMP%] {\n  margin-left: 100px;\n  display: flex;\n  justify-content: space-between;\n}\n\n.container-inner-text[_ngcontent-%COMP%] {\n  max-width: 55%;\n}\n\n.container-inner-text-title[_ngcontent-%COMP%] {\n  font-size: 40pt;\n}\n\n.container-inner-text-subtitle[_ngcontent-%COMP%] {\n  margin-top: 70px;\n  font-size: 15pt;\n  line-height: 1.7em;\n}\n\n.component-button[_ngcontent-%COMP%] {\n  background-color: #ffc93c !important;\n  color: #114347;\n  margin-top: 30px;\n  font-size: 13pt;\n  opacity: 0.9;\n}\n\n@media(hover: hover) {\n    .component-button[_ngcontent-%COMP%]:hover {\n        opacity: 0.7;\n    }\n}\n\n@media (max-width: 1250px) {\n    .container-inner-text[_ngcontent-%COMP%] {\n        max-width: 70%;\n    }\n\n    .container-inner[_ngcontent-%COMP%] {\n        margin-left: 50px;\n    }\n}\n\n@media (max-width: 500px) {\n    .container[_ngcontent-%COMP%] {\n        padding-top: 100px;\n        padding-bottom: 70px;\n    }\n    \n    .container-inner-text-title[_ngcontent-%COMP%] {\n        font-size: 35pt;\n    }\n\n    .container-inner-text-subtitle[_ngcontent-%COMP%] {\n        font-size: 13pt;\n        margin-top: 40px;\n    }\n\n    .container-inner-text[_ngcontent-%COMP%] {\n        max-width: 90%;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzLWludHJvZHVjdGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLGlCQUFpQjtFQUNqQix3QkFBd0I7RUFDeEIseUJBQXlCO0VBQ3pCLHNDQUE2RDtFQUM3RCxzQkFBc0I7RUFDdEIsMkJBQTJCO0VBQzNCLDRCQUE0QjtFQUM1QixpQkFBaUI7RUFDakIsYUFBYTtFQUNiLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLG9DQUFvQztFQUNwQyxjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixZQUFZO0FBQ2Q7O0FBRUE7SUFDSTtRQUNJLFlBQVk7SUFDaEI7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksY0FBYztJQUNsQjs7SUFFQTtRQUNJLGlCQUFpQjtJQUNyQjtBQUNKOztBQUVBO0lBQ0k7UUFDSSxrQkFBa0I7UUFDbEIsb0JBQW9CO0lBQ3hCOztJQUVBO1FBQ0ksZUFBZTtJQUNuQjs7SUFFQTtRQUNJLGVBQWU7UUFDZixnQkFBZ0I7SUFDcEI7O0lBRUE7UUFDSSxjQUFjO0lBQ2xCO0FBQ0oiLCJmaWxlIjoic2VydmljZXMtaW50cm9kdWN0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1pbi1oZWlnaHQ6IDY1MHB4O1xuICBwYWRkaW5nOiAxMjVweCAwIDEwMHB4IDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxMTQzNDc7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uLy4uL3NyYy9hc3NldHMvaG9tZWltYWdlLnBuZ1wiKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBjb2xvcjogd2hpdGVzbW9rZTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmNvbnRhaW5lci1pbm5lciB7XG4gIG1hcmdpbi1sZWZ0OiAxMDBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4uY29udGFpbmVyLWlubmVyLXRleHQge1xuICBtYXgtd2lkdGg6IDU1JTtcbn1cblxuLmNvbnRhaW5lci1pbm5lci10ZXh0LXRpdGxlIHtcbiAgZm9udC1zaXplOiA0MHB0O1xufVxuLmNvbnRhaW5lci1pbm5lci10ZXh0LXN1YnRpdGxlIHtcbiAgbWFyZ2luLXRvcDogNzBweDtcbiAgZm9udC1zaXplOiAxNXB0O1xuICBsaW5lLWhlaWdodDogMS43ZW07XG59XG5cbi5jb21wb25lbnQtYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYzkzYyAhaW1wb3J0YW50O1xuICBjb2xvcjogIzExNDM0NztcbiAgbWFyZ2luLXRvcDogMzBweDtcbiAgZm9udC1zaXplOiAxM3B0O1xuICBvcGFjaXR5OiAwLjk7XG59XG5cbkBtZWRpYShob3ZlcjogaG92ZXIpIHtcbiAgICAuY29tcG9uZW50LWJ1dHRvbjpob3ZlciB7XG4gICAgICAgIG9wYWNpdHk6IDAuNztcbiAgICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiAxMjUwcHgpIHtcbiAgICAuY29udGFpbmVyLWlubmVyLXRleHQge1xuICAgICAgICBtYXgtd2lkdGg6IDcwJTtcbiAgICB9XG5cbiAgICAuY29udGFpbmVyLWlubmVyIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDUwcHg7XG4gICAgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNTAwcHgpIHtcbiAgICAuY29udGFpbmVyIHtcbiAgICAgICAgcGFkZGluZy10b3A6IDEwMHB4O1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogNzBweDtcbiAgICB9XG4gICAgXG4gICAgLmNvbnRhaW5lci1pbm5lci10ZXh0LXRpdGxlIHtcbiAgICAgICAgZm9udC1zaXplOiAzNXB0O1xuICAgIH1cblxuICAgIC5jb250YWluZXItaW5uZXItdGV4dC1zdWJ0aXRsZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTNwdDtcbiAgICAgICAgbWFyZ2luLXRvcDogNDBweDtcbiAgICB9XG5cbiAgICAuY29udGFpbmVyLWlubmVyLXRleHQge1xuICAgICAgICBtYXgtd2lkdGg6IDkwJTtcbiAgICB9XG59Il19 */"] });


/***/ }),

/***/ "Q3ZX":
/*!*********************************************************************************!*\
  !*** ./src/app/services/services-description/services-description.component.ts ***!
  \*********************************************************************************/
/*! exports provided: ServicesDescriptionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesDescriptionComponent", function() { return ServicesDescriptionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class ServicesDescriptionComponent {
    constructor() {
        this.elem = '#development';
    }
    ngOnInit() {
    }
    ngDoCheck() {
        if (this.buttonClicked !== undefined) {
            this.scrollToDescription();
        }
    }
    scrollToDescription() {
        document.querySelector(this.elem).scrollIntoView({ behavior: 'smooth' });
    }
}
ServicesDescriptionComponent.ɵfac = function ServicesDescriptionComponent_Factory(t) { return new (t || ServicesDescriptionComponent)(); };
ServicesDescriptionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ServicesDescriptionComponent, selectors: [["app-services-description"]], inputs: { buttonClicked: "buttonClicked" }, decls: 17, vars: 0, consts: [[1, "container"], [1, "container-inner"], [1, "container-inner-box"], ["id", "development", 2, "position", "relative", "top", "-100px"], [1, "container-inner-box-title"], [1, "container-inner-box-text"], ["id", "marketing", 1, "marketing-thin"], [1, "container-inner-button"], ["id", "button", "routerLink", "/contacts", 1, "component-button"]], template: function ServicesDescriptionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Nettside");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "I dagens samfunn benytter nesten alle seg av en eller annen form for digitalt verkt\u00F8y, og store deler av omsetningen og kommunikasjon skjer digitalt. Bedrifter som har etablert seg i den digitale verden har hatt en stor fordel over de som er mindre synlig. Vi hjelper deg med \u00E5 bli mer synlig ved \u00E5 utvikle og designe din egen profesjonelle, strukturerte og attraktive hjemmeside, der din identitet kommer frem . Vi gir oss ikke f\u00F8r du er forn\u00F8yd! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Markedsf\u00F8ring");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Det har skjedd store endringer i hvilke kanaler som er mest l\u00F8nnsomme de siste \u00E5rene. Tiden for aviser og telefonkataloger er over. Det er viktig \u00E5 identifisere hvor de potensielle kundene dine befinner seg og posisjonere seg der. Vi s\u00F8rger for at du er synlig, og n\u00E5r markedet ditt p\u00E5 best mulig m\u00E5te gjennom vel utarbeidet markedsf\u00F8rings strategi. Dette har hjulpet mange \u00E5 oppn\u00E5 st\u00F8rre resultater. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Kontakt oss");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]], styles: [".container[_ngcontent-%COMP%] {\n  width: 100%;\n  background-color: whitesmoke;\n  color: #114347;\n}\n\n.container-inner[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\n.container-inner-box[_ngcontent-%COMP%] {\n  padding-top: 50px;\n  height: 240px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  justify-content: space-around;\n}\n\n.container-inner-box-title[_ngcontent-%COMP%] {\n  font-size: 30pt;\n  line-height: 110%;\n}\n\n.container-inner-box-text[_ngcontent-%COMP%] {\n  font-size: 15pt;\n  line-height: 100%;\n  max-width: 50%;\n  margin-top: 20px;\n}\n\n.component-button[_ngcontent-%COMP%] {\n  background-color: #FFC93C !important;\n  color: #114347;\n  font-size: 13pt;\n  opacity: 0.9;\n  margin: 50px;\n}\n\n.container-inner-button[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.development-thing[_ngcontent-%COMP%] {\n  position: relative;\n  top: -100px;\n}\n\n.marketing-thing[_ngcontent-%COMP%] {\n  position: relative; \n  top: -200px\n}\n\n@media(hover: hover) {\n    .component-button[_ngcontent-%COMP%]:hover {\n        opacity: 0.7;\n    }\n}\n\n@media (max-width: 900px) {\n    .container-inner-box[_ngcontent-%COMP%] {\n        height: auto;\n    }\n\n    .container-inner-box-text[_ngcontent-%COMP%] {\n        max-width: 70%;\n    }\n}\n\n@media (max-width: 500px) {\n    .container-inner-box-text[_ngcontent-%COMP%] {\n        font-size: 13pt;\n    }\n\n    .development-thing[_ngcontent-%COMP%] {\n        top: -125px;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzLWRlc2NyaXB0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gsNEJBQTRCO0VBQzVCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsYUFBYTtFQUNiLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQiw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usb0NBQW9DO0VBQ3BDLGNBQWM7RUFDZCxlQUFlO0VBQ2YsWUFBWTtFQUNaLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEI7QUFDRjs7QUFFQTtJQUNJO1FBQ0ksWUFBWTtJQUNoQjtBQUNKOztBQUVBO0lBQ0k7UUFDSSxZQUFZO0lBQ2hCOztJQUVBO1FBQ0ksY0FBYztJQUNsQjtBQUNKOztBQUVBO0lBQ0k7UUFDSSxlQUFlO0lBQ25COztJQUVBO1FBQ0ksV0FBVztJQUNmO0FBQ0oiLCJmaWxlIjoic2VydmljZXMtZGVzY3JpcHRpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcbiAgY29sb3I6ICMxMTQzNDc7XG59XG5cbi5jb250YWluZXItaW5uZXIge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5jb250YWluZXItaW5uZXItYm94IHtcbiAgcGFkZGluZy10b3A6IDUwcHg7XG4gIGhlaWdodDogMjQwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG59XG5cbi5jb250YWluZXItaW5uZXItYm94LXRpdGxlIHtcbiAgZm9udC1zaXplOiAzMHB0O1xuICBsaW5lLWhlaWdodDogMTEwJTtcbn1cblxuLmNvbnRhaW5lci1pbm5lci1ib3gtdGV4dCB7XG4gIGZvbnQtc2l6ZTogMTVwdDtcbiAgbGluZS1oZWlnaHQ6IDEwMCU7XG4gIG1heC13aWR0aDogNTAlO1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG4uY29tcG9uZW50LWJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkM5M0MgIWltcG9ydGFudDtcbiAgY29sb3I6ICMxMTQzNDc7XG4gIGZvbnQtc2l6ZTogMTNwdDtcbiAgb3BhY2l0eTogMC45O1xuICBtYXJnaW46IDUwcHg7XG59XG5cbi5jb250YWluZXItaW5uZXItYnV0dG9uIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uZGV2ZWxvcG1lbnQtdGhpbmcge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogLTEwMHB4O1xufVxuXG4ubWFya2V0aW5nLXRoaW5nIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlOyBcbiAgdG9wOiAtMjAwcHhcbn1cblxuQG1lZGlhKGhvdmVyOiBob3Zlcikge1xuICAgIC5jb21wb25lbnQtYnV0dG9uOmhvdmVyIHtcbiAgICAgICAgb3BhY2l0eTogMC43O1xuICAgIH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDkwMHB4KSB7XG4gICAgLmNvbnRhaW5lci1pbm5lci1ib3gge1xuICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgfVxuXG4gICAgLmNvbnRhaW5lci1pbm5lci1ib3gtdGV4dCB7XG4gICAgICAgIG1heC13aWR0aDogNzAlO1xuICAgIH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDUwMHB4KSB7XG4gICAgLmNvbnRhaW5lci1pbm5lci1ib3gtdGV4dCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTNwdDtcbiAgICB9XG5cbiAgICAuZGV2ZWxvcG1lbnQtdGhpbmcge1xuICAgICAgICB0b3A6IC0xMjVweDtcbiAgICB9XG59Il19 */"] });


/***/ }),

/***/ "Ra19":
/*!************************************************************************!*\
  !*** ./src/app/about/about-description/about-description.component.ts ***!
  \************************************************************************/
/*! exports provided: AboutDescriptionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutDescriptionComponent", function() { return AboutDescriptionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class AboutDescriptionComponent {
    constructor() { }
    ngOnInit() {
    }
}
AboutDescriptionComponent.ɵfac = function AboutDescriptionComponent_Factory(t) { return new (t || AboutDescriptionComponent)(); };
AboutDescriptionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutDescriptionComponent, selectors: [["app-about-description"]], decls: 24, vars: 0, consts: [[1, "container"], [1, "container-title"], [1, "container-inner"], [1, "container-inner-text"], ["id", "web-design", 1, "container-inner-title"], [1, "container-inner-content"], [1, "container-inner-image"], ["id", "web-development", 1, "container-inner-title"], ["id", "marketing", 1, "container-inner-title"]], template: function AboutDescriptionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " V\u00E5re tjenester ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Web design");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Aller st\u00F8rste selskapene i verden blir gjenkjent av de fleste. En stor \u00E5rsak for det er godt utarbeidet design som skaper identitet for firmaet. Sikter man h\u00F8yt s\u00E5 er det ekstremt viktig \u00E5 skille seg ut. V\u00E5re l\u00F8sninger kommer til \u00E5 hjelpe deg \u00E5 skape egen identitet innenfor den digitale verden som gj\u00F8r at du blir gjenkjent i ditt marked.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Nettsidet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "I den digitale verden er din nettside det f\u00F8rste m\u00F8tet mellom deg og kundene. En attraktiv og god nettside kan derfor skape gode f\u00F8rste inntrykk, \u00F8ke omsetningen og hjelpe deg \u00E5 f\u00E5 flere kunder ved \u00E5 v\u00E6re synlig digitalt. M\u00E5let v\u00E5rt er \u00E5 skape den perfekte hjemmesiden som representerer deg best mulig og tiltrekker deg nye kunder.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Markedsf\u00F8ring");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Det har skjedd store endringer i hvilke kanaler som er mest l\u00F8nnsomme de siste \u00E5rene. Det er derfor viktig \u00E5 posisjonere deg der de potensielle kundene dine befinner seg. Gjennom vel utarbeidet strategi s\u00F8rger vi for at du er synlig, n\u00E5r markedet og snakker forst\u00E5elig spr\u00E5k som skaper deg oppmerksomhet.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".container[_ngcontent-%COMP%] {\n  background-color: whitesmoke;\n  color: rgba(20, 22, 44, 0.90);\n}\n\n.container-title[_ngcontent-%COMP%] {\n  padding-top: 80px;\n  text-align: center;\n  height: 200px;\n  font-size: 30pt;\n}\n\n.container-inner[_ngcontent-%COMP%] {\n  min-height: 325px;\n  margin-left: 100px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.container-inner-title[_ngcontent-%COMP%] {\n  margin-bottom: 50px;\n  font-size: 18pt;\n  font-weight: bold;\n}\n\n.container-inner-content[_ngcontent-%COMP%] {\n  font-size: 14pt;\n  color: rgb(61, 65, 109);\n}\n\n.container-inner-text[_ngcontent-%COMP%] {\n  max-width: 50%;\n}\n\n.container-inner-image[_ngcontent-%COMP%] {\n  min-width: 420px;\n  height: 280px;\n  background-color: lightgrey;\n  margin-right: 150px;\n  border-radius: 10px;\n}\n\n.anchor[_ngcontent-%COMP%]{\n  position: relative;\n  top: -100px;\n  left: 0;\n  width: 0px;\n  height: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFib3V0LWRlc2NyaXB0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw0QkFBNEI7RUFDNUIsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGVBQWU7RUFDZix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYiwyQkFBMkI7RUFDM0IsbUJBQW1CO0VBQ25CLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsT0FBTztFQUNQLFVBQVU7RUFDVixXQUFXO0FBQ2IiLCJmaWxlIjoiYWJvdXQtZGVzY3JpcHRpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xuICBjb2xvcjogcmdiYSgyMCwgMjIsIDQ0LCAwLjkwKTtcbn1cblxuLmNvbnRhaW5lci10aXRsZSB7XG4gIHBhZGRpbmctdG9wOiA4MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGhlaWdodDogMjAwcHg7XG4gIGZvbnQtc2l6ZTogMzBwdDtcbn1cblxuLmNvbnRhaW5lci1pbm5lciB7XG4gIG1pbi1oZWlnaHQ6IDMyNXB4O1xuICBtYXJnaW4tbGVmdDogMTAwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLmNvbnRhaW5lci1pbm5lci10aXRsZSB7XG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gIGZvbnQtc2l6ZTogMThwdDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5jb250YWluZXItaW5uZXItY29udGVudCB7XG4gIGZvbnQtc2l6ZTogMTRwdDtcbiAgY29sb3I6IHJnYig2MSwgNjUsIDEwOSk7XG59XG5cbi5jb250YWluZXItaW5uZXItdGV4dCB7XG4gIG1heC13aWR0aDogNTAlO1xufVxuXG4uY29udGFpbmVyLWlubmVyLWltYWdlIHtcbiAgbWluLXdpZHRoOiA0MjBweDtcbiAgaGVpZ2h0OiAyODBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmV5O1xuICBtYXJnaW4tcmlnaHQ6IDE1MHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG4uYW5jaG9ye1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogLTEwMHB4O1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMHB4O1xuICBoZWlnaHQ6IDBweDtcbn1cbiJdfQ== */"] });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header/header.component */ "fECr");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footer/footer.component */ "fp1T");




class AppComponent {
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 5, vars: 0, consts: [[1, "page"], [1, "header"], [1, "container"], [1, "footer"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-header", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-footer", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]], styles: [".page[_ngcontent-%COMP%] {\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n  z-index: 1;\n  color: rgb(10, 10, 10);\n}\n\n.container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  margin: 0 auto;\n}\n\n.header[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  width: 100%;\n  z-index: 2;\n}\n\n.footer[_ngcontent-%COMP%] {\n  margin-top: auto\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsVUFBVTtFQUNWLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osY0FBYztBQUNoQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sV0FBVztFQUNYLFVBQVU7QUFDWjs7QUFFQTtFQUNFO0FBQ0YiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGFnZSB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHotaW5kZXg6IDE7XG4gIGNvbG9yOiByZ2IoMTAsIDEwLCAxMCk7XG59XG5cbi5jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtYXJnaW46IDAgYXV0bztcbn1cblxuLmhlYWRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgei1pbmRleDogMjtcbn1cblxuLmZvb3RlciB7XG4gIG1hcmdpbi10b3A6IGF1dG9cbn1cblxuIl19 */"] });


/***/ }),

/***/ "TsVY":
/*!**********************************************!*\
  !*** ./src/app/privacy/privacy.component.ts ***!
  \**********************************************/
/*! exports provided: PrivacyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrivacyComponent", function() { return PrivacyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class PrivacyComponent {
    constructor() { }
    ngOnInit() {
    }
}
PrivacyComponent.ɵfac = function PrivacyComponent_Factory(t) { return new (t || PrivacyComponent)(); };
PrivacyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PrivacyComponent, selectors: [["app-privacy"]], decls: 33, vars: 0, consts: [[1, "container"], [1, "container-inner"], [1, "container-inner-block"], [1, "container-inner-block-title"], [1, "container-inner-block-subtitle"]], template: function PrivacyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Personvern");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Personvern er sv\u00E6rt viktig for oss. For at alle bes\u00F8kende p\u00E5 v\u00E5rt nettsted skal f\u00F8le seg trygge er vi n\u00F8ye med \u00E5 f\u00F8lge Norske lovverk om personvernsopplysninger, samt markedsf\u00F8ringsloven, regnskapsloven og ekomloven (elektrisk informasjons loven). Disse gir retningslinjer for hvordan informasjon som kan knyttes til en person, skal behandles.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Cookies (informasjonskapsler)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Vi bruker cookies (informasjonskapsler) for \u00E5 kunne gi deg god og brukervennlig opplevelse p\u00E5 v\u00E5re nettsider. En cookie er en liten fil som lagres hos deg. Denne filen lagrer din IP-adresse, hvilken nettleser du bruker, tid og dato du var p\u00E5 nettsiden og hvordan du navigerte p\u00E5 nettsiden. Ved \u00E5 bruke v\u00E5re nettsider samtykker du i at vi kan sette cookies i din nettleser. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Informasjonskapsler hjelper oss \u00E5 forst\u00E5 brukernes adferd p\u00E5 nettsidene v\u00E5re bedre, slik at vi kan forbedre brukernes opplevelse ved \u00E5 surfe p\u00E5 v\u00E5re nettsider. Informasjonen som lagres i informasjonskapsler kommer aldri til \u00E5 bli delt med noen andre. Denne informasjonen inneholder ikke personlig data og kan derfor aldri spores tilbake til deg som enkeltperson, heller aldri brukes for \u00E5 markedsf\u00F8re eller promotere noe spesifikt for deg som enkeltperson. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Nettleseren din gir deg mulighet til \u00E5 ikke akseptere cookies dersom du ikke \u00F8nsker dette. V\u00E6r oppmerksom p\u00E5 at surfing av nettstedet i dette tilfellet kan i noen tilfeller virke ukorrekt. Din nettleser gir deg ogs\u00E5 mulighet til \u00E5 se over dine cookies som har blitt lagret p\u00E5 enheten din, og der kan du ogs\u00E5 slette cookies som du ikke \u00F8nsker \u00E5 ha lenger.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Google Analytics");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Vi bruker Google Analytics der cookies fra Google Analytics opprettes i din nettleser med gyldig sporingskode s\u00E5 snart du bes\u00F8ker nettsidene v\u00E5re. Disse informasjonskapslene samler informasjon om hvilket nettsted brukeren klikker seg inn fra, hvor lenge brukeren surfer p\u00E5 nettstedet, hvordan brukeren bruker nettstedet og antall ganger brukeren har bes\u00F8kt nettstedet. Denne informasjonen inneholder ikke personlige detaljer om deg som enkeltperson og kan derfor ikke spores tilbake til deg. Informasjonen brukes kun for nettstatistikk om trafikk, trender og bruksm\u00F8nstre.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Kontaktskjema");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "P\u00E5 v\u00E5rt nettsted finner du en kontaktskjema der man kan fylle inn sitt navn, mailadresse og kontakt telefon dersom man er interessert i tjeneste v\u00E5re. Denne informasjonen bruker vi for \u00E5 kunne komme i kontakt med deg som enkeltperson for \u00E5 kunne informere deg om v\u00E5re tjenester og svare p\u00E5 mulige sp\u00F8rsm\u00E5l som kan oppst\u00E5. Ved \u00E5 fylle ut v\u00E5rt kontaktskjema samtykker du i at vi kan bruke denne informasjonen for \u00E5 kontakte deg via e-post og telefon. Vi tar hensyn til informasjonen du oppgir i kontaktskjemaet og oppbevarer den trygt. Den kommer aldri til \u00E5 bli utlevert til andre.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Personlig tilpasning");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "For \u00E5 sikre at innhold blir mest mulig relevant for deg, bruker vi informasjonskapsler som inneholder data om for eksempel spr\u00E5k, segment og digital enhet. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".container[_ngcontent-%COMP%] {\n  width: 100%;\n  color: #114347;\n  display: flex;\n  justify-content: center;\n}\n\n.container-inner[_ngcontent-%COMP%] {\n  width: 70%;\n  padding: 100px 0 50px 0;\n  display: flex;\n  flex-direction: column;\n}\n\n.container-inner-block[_ngcontent-%COMP%] {\n  margin: 25px 0;\n}\n\n.container-inner-block-title[_ngcontent-%COMP%] {\n  font-size: 18pt;\n}\n\n.container-inner-block-subtitle[_ngcontent-%COMP%] {\n  padding-top: 15px;\n  font-size: 13pt;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByaXZhY3kuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7RUFDWCxjQUFjO0VBQ2QsYUFBYTtFQUNiLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLFVBQVU7RUFDVix1QkFBdUI7RUFDdkIsYUFBYTtFQUNiLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGVBQWU7QUFDakIiLCJmaWxlIjoicHJpdmFjeS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBjb2xvcjogIzExNDM0NztcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5jb250YWluZXItaW5uZXIge1xuICB3aWR0aDogNzAlO1xuICBwYWRkaW5nOiAxMDBweCAwIDUwcHggMDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLmNvbnRhaW5lci1pbm5lci1ibG9jayB7XG4gIG1hcmdpbjogMjVweCAwO1xufVxuXG4uY29udGFpbmVyLWlubmVyLWJsb2NrLXRpdGxlIHtcbiAgZm9udC1zaXplOiAxOHB0O1xufVxuXG4uY29udGFpbmVyLWlubmVyLWJsb2NrLXN1YnRpdGxlIHtcbiAgcGFkZGluZy10b3A6IDE1cHg7XG4gIGZvbnQtc2l6ZTogMTNwdDtcbn1cbiJdfQ== */"] });


/***/ }),

/***/ "UAJw":
/*!**************************************************************************!*\
  !*** ./src/app/about/about-testimonials/about-testimonials.component.ts ***!
  \**************************************************************************/
/*! exports provided: AboutTestimonialsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutTestimonialsComponent", function() { return AboutTestimonialsComponent; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");



function AboutTestimonialsComponent_ng_container_8_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const review_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@carouselAnimation", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", review_r2.content, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](review_r2.author);
} }
function AboutTestimonialsComponent_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AboutTestimonialsComponent_ng_container_8_div_1_Template, 4, 3, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const i_r3 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.currentSlideIndex === i_r3);
} }
function AboutTestimonialsComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r7 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx_r1.calculateDotClass(i_r7));
} }
class AboutTestimonialsComponent {
    constructor() {
        this.reviews = [
            {
                content: "Jeg opplevde prosessen som ryddig, strukturert og profesjonell. Kommunikasjonen var bra gjennom hele prosjektet og Webbynavia lyttet til mine ønsker. Sluttresultatet ble over alle forventninger og jeg anbefaler Webbynavia til alle der ute som er på jakt etter en vel strukturert og profesjonell nettside.",
                author: "Kirils Kasevics, Ashlife"
            },
            {
                content: "Veldig fornøyd med måten Webbynavia behandlet prosjektet. Alt var veldig ryddig. Har ikke mye peiling på nettsider, men de hjalp meg med å bestemme hvordan ting skulle se ut og fungere. Kom med masse gode eksempler. Var trygg helt fra starten av samarbeidet at dette skulle bli kjempe bra. Er veldig profesjonelle i etterkant også, da de hjelper meg med markedsføring og oppbevaring av nettsiden.",
                author: "Espen Normann, Fit Invision"
            },
            {
                content: "Det å kunne stole på en leverandør er noe jeg setter mest pris på. Slik var det med Webbynavia. Først og fremst, veldig profesjonell og hyggelig ledelse som rådet meg gjennom hele prosjektet. Lærte mye nytt i ett område som jeg ikke hadde så god kontroll på fra før. De har levert alt i tide og sluttresultatet ble som lovet. Veldig fornøyd og anbefaler på det sterkeste.",
                author: "Abdul Rakifi, Invest Management"
            },
        ];
        this.currentSlideIndex = 0;
    }
    ngOnInit() {
    }
    showPrevSlide() {
        let prev = this.currentSlideIndex - 1;
        this.currentSlideIndex = prev < 0 ? 2 : prev;
    }
    showNextSlide() {
        let next = this.currentSlideIndex + 1;
        let reviewsLength = this.reviews.length - 1;
        this.currentSlideIndex = next > reviewsLength ? 0 : next;
    }
    calculateDotClass(index) {
        if (index === this.currentSlideIndex) {
            return { highDot: true };
        }
        else {
            return { dot: true };
        }
    }
}
AboutTestimonialsComponent.ɵfac = function AboutTestimonialsComponent_Factory(t) { return new (t || AboutTestimonialsComponent)(); };
AboutTestimonialsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AboutTestimonialsComponent, selectors: [["app-about-testimonials"]], decls: 13, vars: 2, consts: [[1, "container"], [1, "container-intro"], [1, "intro-title"], [1, "review"], [1, "review-block"], ["src", "./assets/leftarrow.png", 1, "slide-button", 3, "click"], [4, "ngFor", "ngForOf"], ["src", "./assets/rightarrow.png", 1, "slide-button", 3, "click"], [1, "pagination-dots"], ["class", "slide", 4, "ngIf"], [1, "slide"], [1, "slide-author"], [3, "ngClass"]], template: function AboutTestimonialsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Referanser fra v\u00E5re kunder");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AboutTestimonialsComponent_Template_img_click_6_listener() { return ctx.showPrevSlide(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, AboutTestimonialsComponent_ng_container_8_Template, 2, 1, "ng-container", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AboutTestimonialsComponent_Template_img_click_10_listener() { return ctx.showNextSlide(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, AboutTestimonialsComponent_div_12_Template, 2, 1, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.reviews);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.reviews);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"]], styles: ["img[_ngcontent-%COMP%]:active {\n    -webkit-tap-highlight-color: transparent;\n}\n\n.container[_ngcontent-%COMP%] {\n  background-color: whitesmoke;\n  color: #114347;\n  justify-content: center;\n}\n\n.container-intro[_ngcontent-%COMP%] {\n  text-align: center;\n  line-height: 3em;\n  padding-top: 50px;\n}\n\n.intro-title[_ngcontent-%COMP%] {\n  font-size: 30pt;\n  margin: auto 20px\n}\n\n.intro-subtitle[_ngcontent-%COMP%] {\n  font-size: 15pt;\n}\n\n.review[_ngcontent-%COMP%] {\n  min-height: 250px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.review-block[_ngcontent-%COMP%] {\n  width: 350px;\n  height: 100%;\n  margin: 0 50px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  font-size: 15pt;\n}\n\n.slide[_ngcontent-%COMP%] {\n  position: absolute;\n  display: flex;\n  justify-content: space-between;\n  flex-direction: column;\n  max-width: 500px;\n  transition: transform 150ms cubic-bezier(0.25, 0.46, 0.45, 0.84);\n}\n\n.pagination-dots[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n\n.dot[_ngcontent-%COMP%] {\n  height: 15px;\n  width: 15px;\n  background-color: #297C86;\n  border-radius: 50%;\n  display: inline-block;\n  margin: 15px;\n}\n\n.highDot[_ngcontent-%COMP%] {\n  height: 15px;\n  width: 15px;\n  background-color: #114347;\n  border-radius: 50%;\n  display: inline-block;\n  margin: 15px;\n}\n\n.slide-button[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  cursor: pointer;\n}\n\n.slide-author[_ngcontent-%COMP%] {\n  padding-top: 25px;\n  color: #297C86;\n}\n\n@media(hover: hover) {\n    .slide-button[_ngcontent-%COMP%]:hover {\n        opacity: 0.7;\n    }\n}\n\n@media (max-width: 850px) {\n    .slide[_ngcontent-%COMP%] {\n        width: 50%;\n    }\n\n    .review[_ngcontent-%COMP%] {\n        margin-top: 50px;\n        margin-bottom: 40px;\n    }\n}\n\n@media (max-width: 500px) {\n    .slide[_ngcontent-%COMP%] {\n        width: 240px;\n        font-size: 13pt;\n    }\n\n    .review[_ngcontent-%COMP%] {\n        margin-top: 50px;\n        margin-bottom: 40px;\n    }\n\n    .review-block[_ngcontent-%COMP%] {\n        padding: 15px\n    }\n\n    .intro-title[_ngcontent-%COMP%] {\n        font-size: 25pt;\n      }\n   \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFib3V0LXRlc3RpbW9uaWFscy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksd0NBQXdDO0FBQzVDOztBQUVBO0VBQ0UsNEJBQTRCO0VBQzVCLGNBQWM7RUFDZCx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGVBQWU7RUFDZjtBQUNGOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixZQUFZO0VBQ1osY0FBYztFQUNkLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsc0JBQXNCO0VBQ3RCLGdCQUFnQjtFQUNoQixnRUFBZ0U7QUFDbEU7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCx5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixjQUFjO0FBQ2hCOztBQUVBO0lBQ0k7UUFDSSxZQUFZO0lBQ2hCO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLFVBQVU7SUFDZDs7SUFFQTtRQUNJLGdCQUFnQjtRQUNoQixtQkFBbUI7SUFDdkI7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksWUFBWTtRQUNaLGVBQWU7SUFDbkI7O0lBRUE7UUFDSSxnQkFBZ0I7UUFDaEIsbUJBQW1CO0lBQ3ZCOztJQUVBO1FBQ0k7SUFDSjs7SUFFQTtRQUNJLGVBQWU7TUFDakI7O0FBRU4iLCJmaWxlIjoiYWJvdXQtdGVzdGltb25pYWxzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbWc6YWN0aXZlIHtcbiAgICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4uY29udGFpbmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcbiAgY29sb3I6ICMxMTQzNDc7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uY29udGFpbmVyLWludHJvIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBsaW5lLWhlaWdodDogM2VtO1xuICBwYWRkaW5nLXRvcDogNTBweDtcbn1cblxuLmludHJvLXRpdGxlIHtcbiAgZm9udC1zaXplOiAzMHB0O1xuICBtYXJnaW46IGF1dG8gMjBweFxufVxuXG4uaW50cm8tc3VidGl0bGUge1xuICBmb250LXNpemU6IDE1cHQ7XG59XG5cbi5yZXZpZXcge1xuICBtaW4taGVpZ2h0OiAyNTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5yZXZpZXctYmxvY2sge1xuICB3aWR0aDogMzUwcHg7XG4gIGhlaWdodDogMTAwJTtcbiAgbWFyZ2luOiAwIDUwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTVwdDtcbn1cblxuLnNsaWRlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG1heC13aWR0aDogNTAwcHg7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAxNTBtcyBjdWJpYy1iZXppZXIoMC4yNSwgMC40NiwgMC40NSwgMC44NCk7XG59XG5cbi5wYWdpbmF0aW9uLWRvdHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmRvdCB7XG4gIGhlaWdodDogMTVweDtcbiAgd2lkdGg6IDE1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyOTdDODY7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW46IDE1cHg7XG59XG5cbi5oaWdoRG90IHtcbiAgaGVpZ2h0OiAxNXB4O1xuICB3aWR0aDogMTVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzExNDM0NztcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbjogMTVweDtcbn1cblxuLnNsaWRlLWJ1dHRvbiB7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnNsaWRlLWF1dGhvciB7XG4gIHBhZGRpbmctdG9wOiAyNXB4O1xuICBjb2xvcjogIzI5N0M4Njtcbn1cblxuQG1lZGlhKGhvdmVyOiBob3Zlcikge1xuICAgIC5zbGlkZS1idXR0b246aG92ZXIge1xuICAgICAgICBvcGFjaXR5OiAwLjc7XG4gICAgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogODUwcHgpIHtcbiAgICAuc2xpZGUge1xuICAgICAgICB3aWR0aDogNTAlO1xuICAgIH1cblxuICAgIC5yZXZpZXcge1xuICAgICAgICBtYXJnaW4tdG9wOiA1MHB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xuICAgIH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDUwMHB4KSB7XG4gICAgLnNsaWRlIHtcbiAgICAgICAgd2lkdGg6IDI0MHB4O1xuICAgICAgICBmb250LXNpemU6IDEzcHQ7XG4gICAgfVxuXG4gICAgLnJldmlldyB7XG4gICAgICAgIG1hcmdpbi10b3A6IDUwcHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XG4gICAgfVxuXG4gICAgLnJldmlldy1ibG9jayB7XG4gICAgICAgIHBhZGRpbmc6IDE1cHhcbiAgICB9XG5cbiAgICAuaW50cm8tdGl0bGUge1xuICAgICAgICBmb250LXNpemU6IDI1cHQ7XG4gICAgICB9XG4gICBcbn0iXX0= */"], data: { animation: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('carouselAnimation', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('void => *', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1 }))
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => void', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 }))
                ])
            ])
        ] } });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./header/header.component */ "fECr");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./footer/footer.component */ "fp1T");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./homepage/homepage.component */ "Oh3b");
/* harmony import */ var _services_services_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/services.component */ "KfLr");
/* harmony import */ var _homepage_homepage_introduction_introduction_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./homepage/homepage-introduction/introduction.component */ "lLp1");
/* harmony import */ var _homepage_homepage_services_services_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./homepage/homepage-services/services.component */ "dx5Q");
/* harmony import */ var _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./portfolio/portfolio.component */ "zyDg");
/* harmony import */ var _contacts_contacts_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./contacts/contacts.component */ "iZNs");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./about/about.component */ "84zG");
/* harmony import */ var _homepage_homepage_testimonials_testimonials_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./homepage/homepage-testimonials/testimonials.component */ "LXEp");
/* harmony import */ var _about_about_introduction_about_introduction_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./about/about-introduction/about-introduction.component */ "Hmz7");
/* harmony import */ var _about_about_description_about_description_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./about/about-description/about-description.component */ "Ra19");
/* harmony import */ var _about_about_testimonials_about_testimonials_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./about/about-testimonials/about-testimonials.component */ "UAJw");
/* harmony import */ var _homepage_homepage_trust_homepage_trust_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./homepage/homepage-trust/homepage-trust.component */ "KBOi");
/* harmony import */ var _services_services_introduction_services_introduction_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./services/services-introduction/services-introduction.component */ "PnrC");
/* harmony import */ var _services_services_description_services_description_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./services/services-description/services-description.component */ "Q3ZX");
/* harmony import */ var _services_services_whyus_services_whyus_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./services/services-whyus/services-whyus.component */ "LJ0G");
/* harmony import */ var _services_services_howitworks_services_howitworks_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./services/services-howitworks/services-howitworks.component */ "oPSB");
/* harmony import */ var _privacy_privacy_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./privacy/privacy.component */ "TsVY");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/fire */ "spgP");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _development_development_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./development/development.component */ "I4lS");
/* harmony import */ var _marketing_marketing_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./marketing/marketing.component */ "OPi6");
/* harmony import */ var _contact_form_contact_form_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./contact-form/contact-form.component */ "ANMO");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/core */ "fXoL");



































class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_fire__WEBPACK_IMPORTED_MODULE_26__["AngularFireModule"].initializeApp(src_environments_environment__WEBPACK_IMPORTED_MODULE_25__["environment"].firebase),
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_27__["AngularFirestoreModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forRoot([
                { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_28__["HomeComponent"] },
                { path: 'development', component: _development_development_component__WEBPACK_IMPORTED_MODULE_29__["DevelopmentComponent"] },
                { path: 'marketing', component: _marketing_marketing_component__WEBPACK_IMPORTED_MODULE_30__["MarketingComponent"] },
            ], { anchorScrolling: 'enabled', onSameUrlNavigation: 'reload', scrollPositionRestoration: 'top' })
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"],
        _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"],
        _homepage_homepage_services_services_component__WEBPACK_IMPORTED_MODULE_11__["OffersComponent"],
        _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_8__["HomepageComponent"],
        _services_services_component__WEBPACK_IMPORTED_MODULE_9__["ServicesComponent"],
        _homepage_homepage_introduction_introduction_component__WEBPACK_IMPORTED_MODULE_10__["IntroductionComponent"],
        _homepage_homepage_services_services_component__WEBPACK_IMPORTED_MODULE_11__["OffersComponent"],
        _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_12__["PortfolioComponent"],
        _contacts_contacts_component__WEBPACK_IMPORTED_MODULE_13__["ContactsComponent"],
        _about_about_component__WEBPACK_IMPORTED_MODULE_14__["AboutComponent"],
        _homepage_homepage_testimonials_testimonials_component__WEBPACK_IMPORTED_MODULE_15__["TestimonialsComponent"],
        _about_about_introduction_about_introduction_component__WEBPACK_IMPORTED_MODULE_16__["AboutIntroductionComponent"],
        _about_about_description_about_description_component__WEBPACK_IMPORTED_MODULE_17__["AboutDescriptionComponent"],
        _about_about_testimonials_about_testimonials_component__WEBPACK_IMPORTED_MODULE_18__["AboutTestimonialsComponent"],
        _homepage_homepage_trust_homepage_trust_component__WEBPACK_IMPORTED_MODULE_19__["HomepageTrustComponent"],
        _services_services_introduction_services_introduction_component__WEBPACK_IMPORTED_MODULE_20__["ServicesIntroductionComponent"],
        _services_services_description_services_description_component__WEBPACK_IMPORTED_MODULE_21__["ServicesDescriptionComponent"],
        _services_services_whyus_services_whyus_component__WEBPACK_IMPORTED_MODULE_22__["ServicesWhyusComponent"],
        _services_services_howitworks_services_howitworks_component__WEBPACK_IMPORTED_MODULE_23__["ServicesHowitworksComponent"],
        _privacy_privacy_component__WEBPACK_IMPORTED_MODULE_24__["PrivacyComponent"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_28__["HomeComponent"],
        _development_development_component__WEBPACK_IMPORTED_MODULE_29__["DevelopmentComponent"],
        _marketing_marketing_component__WEBPACK_IMPORTED_MODULE_30__["MarketingComponent"],
        _contact_form_contact_form_component__WEBPACK_IMPORTED_MODULE_31__["ContactFormComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_26__["AngularFireModule"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_27__["AngularFirestoreModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"]] }); })();


/***/ }),

/***/ "dx5Q":
/*!******************************************************************!*\
  !*** ./src/app/homepage/homepage-services/services.component.ts ***!
  \******************************************************************/
/*! exports provided: OffersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OffersComponent", function() { return OffersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class OffersComponent {
    constructor() { }
    ngOnInit() {
    }
}
OffersComponent.ɵfac = function OffersComponent_Factory(t) { return new (t || OffersComponent)(); };
OffersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OffersComponent, selectors: [["app-homepage-services"]], decls: 36, vars: 0, consts: [[1, "container"], [1, "container-intro"], [1, "intro-title"], [1, "intro-subtitle"], [2, "color", "#FFC93C"], [1, "container-inner-blocks"], [1, "container-inner-block-instance"], [1, "block-instance-content"], [1, "content-image"], ["src", "./assets/design.png"], [1, "content-title"], [1, "content-subtitle"], ["src", "./assets/development.png"], ["src", "./assets/marketing.png"], ["id", "button", "routerLink", "services", 1, "component-button"]], template: function OffersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "V\u00E5re tjenester");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Dine \u00F8nsker");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " er v\u00E5r prioritet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Design");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Dersom du \u00F8nsker \u00E5 bli lagt merke til, vil en nettside som skiller seg ut i mengden v\u00E6re et n\u00F8dvendig verkt\u00F8y. V\u00E5re designl\u00F8sninger vil hjelpe deg \u00E5 skape din egen identitet i den digitale verden. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Nettside");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Din hjemmeside vil v\u00E6re ditt/bedriftens ansikt utad. V\u00E5rt m\u00E5l er \u00E5 skape en profesjonell og attraktiv nettside som gir kundene et godt f\u00F8rsteinntrykk og \u00F8ker omsetningen din. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Markedsf\u00F8ring");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Vi vil utarbeide en strategi for deg og din bedrift som s\u00F8rger for at nettsiden er synlig p\u00E5 de mest l\u00F8nnsomme digitale plattformene og n\u00E5r din m\u00E5lgruppe. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Les mer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]], styles: ["img[_ngcontent-%COMP%] {\n  width: 110px;\n  height: 90px;\n}\n\n.container[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  background-color:whitesmoke;\n  color: #114347\n}\n\n.container-intro[_ngcontent-%COMP%] {\n  text-align: center;\n  line-height: 3em;\n  padding-top: 50px;\n}\n\n.intro-title[_ngcontent-%COMP%] {\n  font-size: 30pt;\n}\n\n.intro-subtitle[_ngcontent-%COMP%] {\n  font-size: 15pt;\n  margin-bottom: 0;\n}\n\n.container-inner-blocks[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: center;\n  }\n\n.container-inner-block-instance[_ngcontent-%COMP%] {\n  background-color: #114347;\n  color: whitesmoke;\n  margin: 35px 50px 10px 50px;\n  width: 400px;\n  height: 370px;\n  border-radius: 10px;\n  transition: 0.25s;\n}\n\n.block-instance-content[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  text-align: center;\n  flex-direction: column;\n  align-items: center;\n}\n\n.content-image[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 130px;\n  width: 130px;\n}\n\n.content-title[_ngcontent-%COMP%] {\n  color: #FFC93C;\n  margin-top: 20px;\n  font-size: 30pt;\n  line-height: 100%;\n}\n\n.content-subtitle[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  font-size: 15pt;\n  width: 85%;\n  margin: none !important;\n}\n\n.component-button[_ngcontent-%COMP%] {\n  background-color: #FFC93C !important;\n  color: #114347;\n  font-size: 13pt;\n  opacity: 0.9;\n  margin-bottom: 40px;\n}\n\n.smth[_ngcontent-%COMP%] {\n}\n\n.computer-image[_ngcontent-%COMP%] {\n    right: 0;\n    top: 50;\n    position: absolute;\n    width: 300px;\n    height: 400px;\n    z-index: inherit;\n}\n\n@media (max-width: 1400px) {\n  .container-inner-block-instance[_ngcontent-%COMP%] {\n      height: 400px;\n  }\n}\n\n@media (max-width: 1200px) {\n    .container-inner-block-instance[_ngcontent-%COMP%] {\n        margin: 30px 30px 10px 30px;\n    }\n    \n    .content-title[_ngcontent-%COMP%] {\n        font-size: 25pt;\n    }\n\n    .content-subtitle[_ngcontent-%COMP%] {\n        font-size: 14pt;\n    }\n}\n\n@media (max-width: 1025px) {\n    .container-inner-block-instance[_ngcontent-%COMP%] {\n        height: 420px;\n    }\n\n    .intro-subtitle[_ngcontent-%COMP%] {\n        font-size: 13pt;\n    }\n\n    .content-title[_ngcontent-%COMP%] {\n        font-size: 20pt;\n    }\n\n    .content-subtitle[_ngcontent-%COMP%] {\n        font-size: 13pt;\n    }\n}\n\n@media (max-width: 768px) {\n  \n    \n    .container-inner-blocks[_ngcontent-%COMP%] {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n      \n}\n\n@media (max-width: 375px) {\n    .container-inner-block-instance[_ngcontent-%COMP%]  {\n        width: 85%;\n        height: 350px;\n    }\n}\n\n@media (hover: hover) {\n    .component-button[_ngcontent-%COMP%]:hover {\n        opacity: 0.7;\n      }\n\n      .container-inner-block-instance[_ngcontent-%COMP%]:hover {\n        transform: scale(1.05);\n        transition: 0.25s;\n      }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0VBQ1osWUFBWTtBQUNkOztBQUVBO0VBQ0UsY0FBYztFQUNkLFdBQVc7RUFDWCwyQkFBMkI7RUFDM0I7QUFDRjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsaUJBQWlCO0FBQ25COztBQUdBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0VBQ3pCOztBQUVGO0VBQ0UseUJBQXlCO0VBQ3pCLGlCQUFpQjtFQUNqQiwyQkFBMkI7RUFDM0IsWUFBWTtFQUNaLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsWUFBWTtBQUNkOztBQUVBO0VBQ0UsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixVQUFVO0VBQ1YsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0Usb0NBQW9DO0VBQ3BDLGNBQWM7RUFDZCxlQUFlO0VBQ2YsWUFBWTtFQUNaLG1CQUFtQjtBQUNyQjs7QUFFQTtBQUNBOztBQUVBO0lBQ0ksUUFBUTtJQUNSLE9BQU87SUFDUCxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGFBQWE7SUFDYixnQkFBZ0I7QUFDcEI7O0FBRUE7RUFDRTtNQUNJLGFBQWE7RUFDakI7QUFDRjs7QUFFQTtJQUNJO1FBQ0ksMkJBQTJCO0lBQy9COztJQUVBO1FBQ0ksZUFBZTtJQUNuQjs7SUFFQTtRQUNJLGVBQWU7SUFDbkI7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksYUFBYTtJQUNqQjs7SUFFQTtRQUNJLGVBQWU7SUFDbkI7O0lBRUE7UUFDSSxlQUFlO0lBQ25COztJQUVBO1FBQ0ksZUFBZTtJQUNuQjtBQUNKOztBQUVBOzs7SUFHSTtRQUNJLGFBQWE7UUFDYixzQkFBc0I7UUFDdEIsbUJBQW1CO01BQ3JCOztBQUVOOztBQUVBO0lBQ0k7UUFDSSxVQUFVO1FBQ1YsYUFBYTtJQUNqQjtBQUNKOztBQUVBO0lBQ0k7UUFDSSxZQUFZO01BQ2Q7O01BRUE7UUFDRSxzQkFBc0I7UUFDdEIsaUJBQWlCO01BQ25CO0FBQ04iLCJmaWxlIjoic2VydmljZXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImltZyB7XG4gIHdpZHRoOiAxMTBweDtcbiAgaGVpZ2h0OiA5MHB4O1xufVxuXG4uY29udGFpbmVyIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOndoaXRlc21va2U7XG4gIGNvbG9yOiAjMTE0MzQ3XG59XG5cbi5jb250YWluZXItaW50cm8ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGxpbmUtaGVpZ2h0OiAzZW07XG4gIHBhZGRpbmctdG9wOiA1MHB4O1xufVxuXG5cbi5pbnRyby10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMzBwdDtcbn1cblxuLmludHJvLXN1YnRpdGxlIHtcbiAgZm9udC1zaXplOiAxNXB0O1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuXG4uY29udGFpbmVyLWlubmVyLWJsb2NrcyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgfSAgXG5cbi5jb250YWluZXItaW5uZXItYmxvY2staW5zdGFuY2Uge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTE0MzQ3O1xuICBjb2xvcjogd2hpdGVzbW9rZTtcbiAgbWFyZ2luOiAzNXB4IDUwcHggMTBweCA1MHB4O1xuICB3aWR0aDogNDAwcHg7XG4gIGhlaWdodDogMzcwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIHRyYW5zaXRpb246IDAuMjVzO1xufVxuXG4uYmxvY2staW5zdGFuY2UtY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5jb250ZW50LWltYWdlIHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDogMTMwcHg7XG4gIHdpZHRoOiAxMzBweDtcbn1cblxuLmNvbnRlbnQtdGl0bGUge1xuICBjb2xvcjogI0ZGQzkzQztcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgZm9udC1zaXplOiAzMHB0O1xuICBsaW5lLWhlaWdodDogMTAwJTtcbn1cblxuLmNvbnRlbnQtc3VidGl0bGUge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBmb250LXNpemU6IDE1cHQ7XG4gIHdpZHRoOiA4NSU7XG4gIG1hcmdpbjogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4uY29tcG9uZW50LWJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkM5M0MgIWltcG9ydGFudDtcbiAgY29sb3I6ICMxMTQzNDc7XG4gIGZvbnQtc2l6ZTogMTNwdDtcbiAgb3BhY2l0eTogMC45O1xuICBtYXJnaW4tYm90dG9tOiA0MHB4O1xufVxuXG4uc210aCB7XG59XG5cbi5jb21wdXRlci1pbWFnZSB7XG4gICAgcmlnaHQ6IDA7XG4gICAgdG9wOiA1MDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDMwMHB4O1xuICAgIGhlaWdodDogNDAwcHg7XG4gICAgei1pbmRleDogaW5oZXJpdDtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDE0MDBweCkge1xuICAuY29udGFpbmVyLWlubmVyLWJsb2NrLWluc3RhbmNlIHtcbiAgICAgIGhlaWdodDogNDAwcHg7XG4gIH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDEyMDBweCkge1xuICAgIC5jb250YWluZXItaW5uZXItYmxvY2staW5zdGFuY2Uge1xuICAgICAgICBtYXJnaW46IDMwcHggMzBweCAxMHB4IDMwcHg7XG4gICAgfVxuICAgIFxuICAgIC5jb250ZW50LXRpdGxlIHtcbiAgICAgICAgZm9udC1zaXplOiAyNXB0O1xuICAgIH1cblxuICAgIC5jb250ZW50LXN1YnRpdGxlIHtcbiAgICAgICAgZm9udC1zaXplOiAxNHB0O1xuICAgIH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDEwMjVweCkge1xuICAgIC5jb250YWluZXItaW5uZXItYmxvY2staW5zdGFuY2Uge1xuICAgICAgICBoZWlnaHQ6IDQyMHB4O1xuICAgIH1cblxuICAgIC5pbnRyby1zdWJ0aXRsZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTNwdDtcbiAgICB9XG5cbiAgICAuY29udGVudC10aXRsZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBwdDtcbiAgICB9XG5cbiAgICAuY29udGVudC1zdWJ0aXRsZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTNwdDtcbiAgICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICBcbiAgICBcbiAgICAuY29udGFpbmVyLWlubmVyLWJsb2NrcyB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICB9XG4gICAgICBcbn0gICBcblxuQG1lZGlhIChtYXgtd2lkdGg6IDM3NXB4KSB7XG4gICAgLmNvbnRhaW5lci1pbm5lci1ibG9jay1pbnN0YW5jZSAge1xuICAgICAgICB3aWR0aDogODUlO1xuICAgICAgICBoZWlnaHQ6IDM1MHB4O1xuICAgIH1cbn1cblxuQG1lZGlhIChob3ZlcjogaG92ZXIpIHtcbiAgICAuY29tcG9uZW50LWJ1dHRvbjpob3ZlciB7XG4gICAgICAgIG9wYWNpdHk6IDAuNztcbiAgICAgIH1cblxuICAgICAgLmNvbnRhaW5lci1pbm5lci1ibG9jay1pbnN0YW5jZTpob3ZlciB7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XG4gICAgICAgIHRyYW5zaXRpb246IDAuMjVzO1xuICAgICAgfVxufSJdfQ== */"] });


/***/ }),

/***/ "fECr":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");



function HeaderComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_div_18_Template_li_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1.toggleSideMenu(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Hjem");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_div_18_Template_li_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.toggleSideMenu(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Tjenester");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_div_18_Template_li_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.toggleSideMenu(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Om oss");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_div_18_Template_li_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.toggleSideMenu(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Kontakt oss");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class HeaderComponent {
    constructor() {
        this.sideMenuIsOpened = false;
    }
    ngOnInit() {
    }
    toggleSideMenu() {
        this.sideMenuIsOpened = !this.sideMenuIsOpened;
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 19, vars: 1, consts: [[1, "header"], [1, "header-inner"], ["routerLink", "", 1, "header-logo", 3, "click"], [1, "nav"], [1, "header-language"], [1, "burger-menu-button", 3, "click"], [1, "menu-image"], ["class", "burger-menu-container", 4, "ngIf"], [1, "burger-menu-container"], [1, "container-link", 3, "click"], ["routerLink", ""], ["routerLink", "services"], ["routerLink", "about"], ["routerLink", "contacts"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_2_listener() { return ctx.sideMenuIsOpened ? ctx.toggleSideMenu() : undefined; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "WEBBYNAVIA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nav", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Link");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Link");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Link");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " English ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_div_click_14_listener() { return ctx.toggleSideMenu(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, HeaderComponent_div_18_Template, 14, 0, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.sideMenuIsOpened);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: ["ul[_ngcontent-%COMP%] {\n  list-style-type: none;\n}\n\na[_ngcontent-%COMP%]:focus {\n    -webkit-tap-highlight-color: transparent;\n}\n\n.header[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 60px;\n  display: flex;\n  width: 100%;\n  border-bottom: 1px solid whitesmoke;\n  color: whitesmoke;\n}\n\n.header-logo[_ngcontent-%COMP%] {\n  color: whitesmoke;\n  font-size: 20pt;\n  letter-spacing: 7px;\n  width: 250px;\n  padding-left: 100px;\n}\n\n.header-inner[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n}\n\n.nav[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n}\n\n.header-language[_ngcontent-%COMP%] {\n  text-align: center;\n  width: 250px;\n}\n\n.nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: inline;\n  margin-right: 60px;\n  cursor: pointer;\n  height: 100%;\n}\n\n.nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  padding: 22px 15px;\n}\n\n.nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child {\n  margin-right: 0;\n}\n\n.dropbtn[_ngcontent-%COMP%] {\n  display: inline;\n}\n\n.dropdown[_ngcontent-%COMP%] {\n  display: inline;\n}\n\n.dropdown-content[_ngcontent-%COMP%] {\n  display: none;\n  margin-top: 23px;\n  position: absolute;\n  margin-left: 123px;\n  background-color: #114347;\n  min-width: 230px;\n  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);\n  z-index: 1;\n}\n\n.dropdown-content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: whitesmoke;\n  padding: 14px 16px;\n  text-decoration: none;\n  display: block;\n}\n\n.dropdown-content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background-color: #297C86;\n  color: whitesmoke;\n}\n\n.dropdown[_ngcontent-%COMP%]:hover   .dropdown-content[_ngcontent-%COMP%] {display: block;}\n\n.contact-button[_ngcontent-%COMP%] {\n  background-color: #297C86;\n  padding-top: 10px !important;\n  padding-bottom: 10px !important;\n  border-radius: 5px;\n}\n\n.burger-menu-button[_ngcontent-%COMP%] {\n    display: none;\n    margin-right: 20px;\n    margin-top: -10px;\n    -webkit-tap-highlight-color: transparent;\n  }\n\n.burger-menu-button[_ngcontent-%COMP%] {\n      width: 30px;\n      height: 30px;\n  }\n\n.burger-menu-container[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 60px;\n    right: 0;\n    background-color:#114347e3;\n    height: 150vh;\n    width: 100%;\n    box-shadow: 0 10px 15px rgba(0,0,0,0.3);\n  }\n\n.burger-menu-container[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    height: 40px;\n    text-align: center;\n    margin: 30px 90px;\n    border-bottom: 1px solid #FFC93C;\n  }\n\n.burger-menu-container[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    display: block;\n  }\n\n.contacts-button[_ngcontent-%COMP%] {\n    background-color: whitesmoke;\n    color: #135aac;\n    border-radius: 30px;\n  }\n\n@media (hover: hover) {\n    a[_ngcontent-%COMP%]:hover {\n      opacity: 0.8;\n      cursor: pointer;\n    }\n  }\n\n@media (max-width: 1025px) {\n    .nav[_ngcontent-%COMP%] {\n      display: none;\n    }\n\n    .header[_ngcontent-%COMP%] {\n      padding: 20px 0;\n    }\n\n    .header-inner[_ngcontent-%COMP%] {\n      margin-left: 5%;\n      font-size: 16pt;\n    }\n\n    .logo[_ngcontent-%COMP%] {\n      margin-left: 30px;\n    }\n\n    .burger-menu-button[_ngcontent-%COMP%] {\n        display: inline;\n    }\n\n    .menu-image[_ngcontent-%COMP%] {\n        width: 35px;\n        height: 5px;\n        background-color: white;\n        margin: 6px 0;\n        border-radius: 5px;\n    }\n  }\n\n@media (max-width: 768px) {\n    .container[_ngcontent-%COMP%] {\n\n    }\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0lBQ0ksd0NBQXdDO0FBQzVDOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLE1BQU07RUFDTixPQUFPO0VBQ1AsUUFBUTtFQUNSLFlBQVk7RUFDWixhQUFhO0VBQ2IsV0FBVztFQUNYLG1DQUFtQztFQUNuQyxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixtQkFBbUI7RUFDbkIsV0FBVztBQUNiOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLGdCQUFnQjtFQUNoQiw0Q0FBNEM7RUFDNUMsVUFBVTtBQUNaOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixpQkFBaUI7QUFDbkI7O0FBRUEsbUNBQW1DLGNBQWMsQ0FBQzs7QUFFbEQ7RUFDRSx5QkFBeUI7RUFDekIsNEJBQTRCO0VBQzVCLCtCQUErQjtFQUMvQixrQkFBa0I7QUFDcEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQix3Q0FBd0M7RUFDMUM7O0FBRUE7TUFDSSxXQUFXO01BQ1gsWUFBWTtFQUNoQjs7QUFFQTtJQUNFLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsUUFBUTtJQUNSLDBCQUEwQjtJQUMxQixhQUFhO0lBQ2IsV0FBVztJQUNYLHVDQUF1QztFQUN6Qzs7QUFFQTtJQUNFLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGdDQUFnQztFQUNsQzs7QUFFQTtJQUNFLGNBQWM7RUFDaEI7O0FBRUE7SUFDRSw0QkFBNEI7SUFDNUIsY0FBYztJQUNkLG1CQUFtQjtFQUNyQjs7QUFFQTtJQUNFO01BQ0UsWUFBWTtNQUNaLGVBQWU7SUFDakI7RUFDRjs7QUFFQTtJQUNFO01BQ0UsYUFBYTtJQUNmOztJQUVBO01BQ0UsZUFBZTtJQUNqQjs7SUFFQTtNQUNFLGVBQWU7TUFDZixlQUFlO0lBQ2pCOztJQUVBO01BQ0UsaUJBQWlCO0lBQ25COztJQUVBO1FBQ0ksZUFBZTtJQUNuQjs7SUFFQTtRQUNJLFdBQVc7UUFDWCxXQUFXO1FBQ1gsdUJBQXVCO1FBQ3ZCLGFBQWE7UUFDYixrQkFBa0I7SUFDdEI7RUFDRjs7QUFFQTtJQUNFOztJQUVBO0VBQ0YiLCJmaWxlIjoiaGVhZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ1bCB7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbn1cblxuYTpmb2N1cyB7XG4gICAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuLmhlYWRlciB7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGhlaWdodDogNjBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB3aGl0ZXNtb2tlO1xuICBjb2xvcjogd2hpdGVzbW9rZTtcbn1cblxuLmhlYWRlci1sb2dvIHtcbiAgY29sb3I6IHdoaXRlc21va2U7XG4gIGZvbnQtc2l6ZTogMjBwdDtcbiAgbGV0dGVyLXNwYWNpbmc6IDdweDtcbiAgd2lkdGg6IDI1MHB4O1xuICBwYWRkaW5nLWxlZnQ6IDEwMHB4O1xufVxuXG4uaGVhZGVyLWlubmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLm5hdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uaGVhZGVyLWxhbmd1YWdlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogMjUwcHg7XG59XG5cbi5uYXYgbGkge1xuICBkaXNwbGF5OiBpbmxpbmU7XG4gIG1hcmdpbi1yaWdodDogNjBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5uYXYgYSB7XG4gIHBhZGRpbmc6IDIycHggMTVweDtcbn1cblxuLm5hdiBsaTpsYXN0LWNoaWxkIHtcbiAgbWFyZ2luLXJpZ2h0OiAwO1xufVxuXG4uZHJvcGJ0biB7XG4gIGRpc3BsYXk6IGlubGluZTtcbn1cblxuLmRyb3Bkb3duIHtcbiAgZGlzcGxheTogaW5saW5lO1xufVxuXG4uZHJvcGRvd24tY29udGVudCB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIG1hcmdpbi10b3A6IDIzcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbWFyZ2luLWxlZnQ6IDEyM3B4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTE0MzQ3O1xuICBtaW4td2lkdGg6IDIzMHB4O1xuICBib3gtc2hhZG93OiAwcHggOHB4IDE2cHggMHB4IHJnYmEoMCwwLDAsMC4yKTtcbiAgei1pbmRleDogMTtcbn1cblxuLmRyb3Bkb3duLWNvbnRlbnQgYSB7XG4gIGNvbG9yOiB3aGl0ZXNtb2tlO1xuICBwYWRkaW5nOiAxNHB4IDE2cHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5kcm9wZG93bi1jb250ZW50IGE6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjk3Qzg2O1xuICBjb2xvcjogd2hpdGVzbW9rZTtcbn1cblxuLmRyb3Bkb3duOmhvdmVyIC5kcm9wZG93bi1jb250ZW50IHtkaXNwbGF5OiBibG9jazt9XG5cbi5jb250YWN0LWJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyOTdDODY7XG4gIHBhZGRpbmctdG9wOiAxMHB4ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4ICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLmJ1cmdlci1tZW51LWJ1dHRvbiB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gICAgbWFyZ2luLXRvcDogLTEwcHg7XG4gICAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgfVxuXG4gIC5idXJnZXItbWVudS1idXR0b24ge1xuICAgICAgd2lkdGg6IDMwcHg7XG4gICAgICBoZWlnaHQ6IDMwcHg7XG4gIH1cblxuICAuYnVyZ2VyLW1lbnUtY29udGFpbmVyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA2MHB4O1xuICAgIHJpZ2h0OiAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6IzExNDM0N2UzO1xuICAgIGhlaWdodDogMTUwdmg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm94LXNoYWRvdzogMCAxMHB4IDE1cHggcmdiYSgwLDAsMCwwLjMpO1xuICB9XG5cbiAgLmJ1cmdlci1tZW51LWNvbnRhaW5lciBsaSB7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW46IDMwcHggOTBweDtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0ZGQzkzQztcbiAgfVxuXG4gIC5idXJnZXItbWVudS1jb250YWluZXIgbGkgYSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cblxuICAuY29udGFjdHMtYnV0dG9uIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xuICAgIGNvbG9yOiAjMTM1YWFjO1xuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gIH1cblxuICBAbWVkaWEgKGhvdmVyOiBob3Zlcikge1xuICAgIGE6aG92ZXIge1xuICAgICAgb3BhY2l0eTogMC44O1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cbiAgfVxuXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAxMDI1cHgpIHtcbiAgICAubmF2IHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuXG4gICAgLmhlYWRlciB7XG4gICAgICBwYWRkaW5nOiAyMHB4IDA7XG4gICAgfVxuXG4gICAgLmhlYWRlci1pbm5lciB7XG4gICAgICBtYXJnaW4tbGVmdDogNSU7XG4gICAgICBmb250LXNpemU6IDE2cHQ7XG4gICAgfVxuXG4gICAgLmxvZ28ge1xuICAgICAgbWFyZ2luLWxlZnQ6IDMwcHg7XG4gICAgfVxuXG4gICAgLmJ1cmdlci1tZW51LWJ1dHRvbiB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZTtcbiAgICB9XG5cbiAgICAubWVudS1pbWFnZSB7XG4gICAgICAgIHdpZHRoOiAzNXB4O1xuICAgICAgICBoZWlnaHQ6IDVweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgIG1hcmdpbjogNnB4IDA7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICB9XG4gIH1cblxuICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAuY29udGFpbmVyIHtcblxuICAgIH1cbiAgfVxuIl19 */"] });


/***/ }),

/***/ "fp1T":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class FooterComponent {
    constructor() {
        this.footerSections = [
            {
                name: 'Terms and Conditions'
            },
            {
                name: 'Privacy Policy'
            },
            {
                name: 'Contact us'
            },
        ];
    }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 6, vars: 0, consts: [[1, "footer"], [1, "footer-container"], [1, "footer-container-logo"], [1, "logo"], ["routerLink", "", 2, "color", "#FFC93C"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "WEBBYNAVIA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: ["ul[_ngcontent-%COMP%] {\n  list-style-type: none;\n}\n\na[_ngcontent-%COMP%] {\n  color: whitesmoke;\n}\n\n.footer[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 150px;\n  background-color:#262D39;\n}\n\n.footer-container[_ngcontent-%COMP%] {\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.footer-container-logo[_ngcontent-%COMP%] {\n  margin-left: 100px;\n  font-size: 20pt;\n  display: flex;\n  flex-direction: column;\n}\n\n.footer-container-logo-under-block[_ngcontent-%COMP%] {\n    margin-top: 5px;\n    display: flex;\n    justify-content: space-between;\n    font-size: 13pt;\n    width: 105%;\n}\n\n.footer-container-text[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.footer-container-text-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  height: 50px;\n  margin-right: 50px;\n}\n\n.image[_ngcontent-%COMP%] {\n  width: auto;\n  height: 30px;\n}\n\n.text-item-image[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  width: 40px;\n  height: 40px;\n  margin-right: 5px;\n  justify-content: center;\n}\n\n.text-item-information[_ngcontent-%COMP%] {\n  height: 32px;\n  display: flex;\n  align-items: center;\n  font-size: 13pt;\n}\n\n.logo[_ngcontent-%COMP%] {\n  letter-spacing: 7px;\n  width: 99%;\n}\n\n@media(hover: hover) {\n    a[_ngcontent-%COMP%]:hover {\n        opacity: 0.7;\n        cursor: pointer;\n      }\n}\n\n@media (max-width: 1350px) {\n    .footer-container-text[_ngcontent-%COMP%] {\n        flex-direction: column;\n    }\n}\n\n@media (max-width: 840px) {\n    .footer[_ngcontent-%COMP%] {\n        height: auto;\n    }\n\n    .footer-container[_ngcontent-%COMP%] {\n        flex-direction: column-reverse;\n    }\n\n    .footer-container-logo[_ngcontent-%COMP%] {\n        margin: 15px auto 30px auto;\n        align-items: center;\n    }\n\n    .footer-container-text[_ngcontent-%COMP%] {\n        margin: 15px 0;\n    }\n\n    .footer-container-text-item[_ngcontent-%COMP%] {\n        margin: 0;\n    }\n\n    .divider[_ngcontent-%COMP%] {\n      display: none;\n    }\n\n    .footer-container-logo-under-block[_ngcontent-%COMP%] {\n      align-items: center;\n      margin-top: 5px;\n      display: flex;\n      flex-direction: column;\n      justify-content: center;\n      font-size: 13pt;\n      width: 105%;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsV0FBVztFQUNYLGFBQWE7RUFDYix3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixlQUFlO0lBQ2YsV0FBVztBQUNmOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixVQUFVO0FBQ1o7O0FBRUE7SUFDSTtRQUNJLFlBQVk7UUFDWixlQUFlO01BQ2pCO0FBQ047O0FBRUE7SUFDSTtRQUNJLHNCQUFzQjtJQUMxQjtBQUNKOztBQUVBO0lBQ0k7UUFDSSxZQUFZO0lBQ2hCOztJQUVBO1FBQ0ksOEJBQThCO0lBQ2xDOztJQUVBO1FBQ0ksMkJBQTJCO1FBQzNCLG1CQUFtQjtJQUN2Qjs7SUFFQTtRQUNJLGNBQWM7SUFDbEI7O0lBRUE7UUFDSSxTQUFTO0lBQ2I7O0lBRUE7TUFDRSxhQUFhO0lBQ2Y7O0lBRUE7TUFDRSxtQkFBbUI7TUFDbkIsZUFBZTtNQUNmLGFBQWE7TUFDYixzQkFBc0I7TUFDdEIsdUJBQXVCO01BQ3ZCLGVBQWU7TUFDZixXQUFXO0lBQ2I7QUFDSiIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInVsIHtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xufVxuXG5hIHtcbiAgY29sb3I6IHdoaXRlc21va2U7XG59XG5cbi5mb290ZXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxNTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjojMjYyRDM5O1xufVxuXG4uZm9vdGVyLWNvbnRhaW5lciB7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4uZm9vdGVyLWNvbnRhaW5lci1sb2dvIHtcbiAgbWFyZ2luLWxlZnQ6IDEwMHB4O1xuICBmb250LXNpemU6IDIwcHQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5mb290ZXItY29udGFpbmVyLWxvZ28tdW5kZXItYmxvY2sge1xuICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBmb250LXNpemU6IDEzcHQ7XG4gICAgd2lkdGg6IDEwNSU7XG59XG5cbi5mb290ZXItY29udGFpbmVyLXRleHQge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uZm9vdGVyLWNvbnRhaW5lci10ZXh0LWl0ZW0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBoZWlnaHQ6IDUwcHg7XG4gIG1hcmdpbi1yaWdodDogNTBweDtcbn1cblxuLmltYWdlIHtcbiAgd2lkdGg6IGF1dG87XG4gIGhlaWdodDogMzBweDtcbn1cblxuLnRleHQtaXRlbS1pbWFnZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLnRleHQtaXRlbS1pbmZvcm1hdGlvbiB7XG4gIGhlaWdodDogMzJweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxM3B0O1xufVxuXG4ubG9nbyB7XG4gIGxldHRlci1zcGFjaW5nOiA3cHg7XG4gIHdpZHRoOiA5OSU7XG59XG5cbkBtZWRpYShob3ZlcjogaG92ZXIpIHtcbiAgICBhOmhvdmVyIHtcbiAgICAgICAgb3BhY2l0eTogMC43O1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiAxMzUwcHgpIHtcbiAgICAuZm9vdGVyLWNvbnRhaW5lci10ZXh0IHtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA4NDBweCkge1xuICAgIC5mb290ZXIge1xuICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgfVxuXG4gICAgLmZvb3Rlci1jb250YWluZXIge1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XG4gICAgfVxuXG4gICAgLmZvb3Rlci1jb250YWluZXItbG9nbyB7XG4gICAgICAgIG1hcmdpbjogMTVweCBhdXRvIDMwcHggYXV0bztcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB9XG5cbiAgICAuZm9vdGVyLWNvbnRhaW5lci10ZXh0IHtcbiAgICAgICAgbWFyZ2luOiAxNXB4IDA7XG4gICAgfVxuXG4gICAgLmZvb3Rlci1jb250YWluZXItdGV4dC1pdGVtIHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgIH1cblxuICAgIC5kaXZpZGVyIHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuXG4gICAgLmZvb3Rlci1jb250YWluZXItbG9nby11bmRlci1ibG9jayB7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgbWFyZ2luLXRvcDogNXB4O1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIGZvbnQtc2l6ZTogMTNwdDtcbiAgICAgIHdpZHRoOiAxMDUlO1xuICAgIH1cbn1cbiJdfQ== */"] });


/***/ }),

/***/ "iZNs":
/*!************************************************!*\
  !*** ./src/app/contacts/contacts.component.ts ***!
  \************************************************/
/*! exports provided: ContactsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactsComponent", function() { return ContactsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");



function ContactsComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContactsComponent_div_18_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1.processClickOutside(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseleave", function ContactsComponent_div_18_Template_div_mouseleave_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.detectModalMouseLeave(); })("mouseenter", function ContactsComponent_div_18_Template_div_mouseenter_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.detectModalMouseEnter(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "img", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContactsComponent_div_18_Template_img_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.refreshComponent(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Takk for din melding!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Vi tar kontakt med deg i l\u00F8pet av neste 12 timer.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class ContactsComponent {
    constructor(router, activatedRoute) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.mouseOnModal = false;
        this.formSubmitted = false;
        this.modalOpeneded = false;
    }
    ngOnInit() {
    }
    submitForm() {
        this.formSubmitted = !this.formSubmitted;
        this.modalOpeneded = !this.modalOpeneded;
        setTimeout(() => {
            this.refreshComponent();
        }, 10000);
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
            this.refreshComponent();
        }
        else {
            return;
        }
    }
    showModal() {
        if (this.modalOpeneded) {
            return {
                modal: true,
                'display': 'fixed'
            };
        }
        else {
            return {
                modal: false
            };
        }
    }
}
ContactsComponent.ɵfac = function ContactsComponent_Factory(t) { return new (t || ContactsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"])); };
ContactsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactsComponent, selectors: [["app-contacts"]], decls: 19, vars: 1, consts: [[1, "container"], [1, "container-intro"], [1, "intro-title"], [1, "container-inner"], ["name", "hidden_iframe", "id", "hidden_iframe", 2, "display", "none"], ["action", "https://docs.google.com/forms/d/e/1FAIpQLScwkjxYT5SHun7IoMghh96OdoSWs8i_wbXoQTRLrkaleTLajw/formResponse", "method", "post", "target", "hidden_iframe", 3, "submit"], [1, "container-inner-content"], ["type", "text", "placeholder", "Ditt navn*", "name", "entry.2005620554", "required", "", 1, "component-input"], ["type", "text", "placeholder", "E-post*", "name", "entry.1045781291", "required", "", 1, "component-input"], ["type", "text", "placeholder", "Telefon*", "name", "entry.818882853", "required", "", 1, "component-input"], ["rows", "7", "placeholder", "Beskriv hva du er p\u00E5 jakt etter s\u00E5 snakker vi n\u00E6rmere om det p\u00E5 telefon*", "name", "entry.839337160", "required", "", 1, "component-input"], [1, "component-inner-button"], ["type", "submit", "id", "button", 1, "component-button"], ["class", "modal", 3, "click", 4, "ngIf"], [1, "modal", 3, "click"], [1, "modal-content", 3, "mouseleave", "mouseenter"], [1, "close-button-element"], ["src", "./assets/cross.png", 1, "close-button", 3, "click"], [1, "close-container"], [1, "close-container-image"], ["src", "./assets/mail.png", 1, "close-container-image"], [1, "close-container-text"], [1, "close-container-text-title"], [1, "close-container-text-subtitle"]], template: function ContactsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Skriv hva du \u00F8nsker s\u00E5 kontakter vi deg");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "iframe", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "form", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function ContactsComponent_Template_form_submit_6_listener() { return ctx.submitForm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "textarea", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Send");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, ContactsComponent_div_18_Template, 12, 0, "div", 13);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.modalOpeneded);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: [".container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  background-color: whitesmoke;\n  color: #114347;\n}\n\n.container-intro[_ngcontent-%COMP%] {\n  padding-top: 100px;\n  text-align: center;\n  line-height: 3em;\n}\n\n.intro-title[_ngcontent-%COMP%] {\n  font-size: 30pt;\n  margin: auto 20px;\n}\n\n.intro-subtitle[_ngcontent-%COMP%] {\n  font-size: 15pt;\n}\n\n.container-inner[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.container-inner-content[_ngcontent-%COMP%] {\n  width: 60vh;\n  display: flex;\n  justify-content: center;\n  font-size: 15pt;\n  margin: 30px;\n  line-height: 1.4em;\n}\n\n.component-input[_ngcontent-%COMP%] {\n  border-radius: 5px;\n  background-color: whitesmoke;\n  color: #114347;\n  width: 100%;\n  min-height: 40px;\n  max-height: 300px;\n  border: none;\n  text-decoration: none;\n  display: inline-block;\n  border-radius: 12px;\n  outline: none;\n  box-shadow: 0 1px 4px rgb(20 50 0 / 30%);\n  -webkit-appearance: none;\n  -webkit-box-shadow: 0 1px 4px rgb(20 50 0 / 30%);\n  padding: 15px;\n}\n\n.component-inner-button[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  margin: 40px 0;\n}\n\n.component-button[_ngcontent-%COMP%] {\n  background-color: #FFC93C !important;\n  color: #114347;\n}\n\n.container-successful-message[_ngcontent-%COMP%] {\n  background-color: rgba(20, 22, 44, 0.95);\n  padding: 40px 40px 0 40px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.whitespace[_ngcontent-%COMP%] {\n  padding: 10px;\n}\n\n.message[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.modal[_ngcontent-%COMP%] {\n  position: fixed;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 5;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.4);\n  overflow: hidden;\n}\n\n.modal-content[_ngcontent-%COMP%] {\n  margin: auto 20px;\n  background-color: whitesmoke;\n  width: 700px;\n  height: 400px;\n  border-radius: 15px;\n}\n\n.close-button-element[_ngcontent-%COMP%] {\n  width: inherit;\n  text-align: right;\n  padding: 25px 25px 0 0;\n  color: red;\n  font-size: 20pt;\n  z-index: 10;\n}\n\n.close-button[_ngcontent-%COMP%] {\n  width: 25px;\n  height: 25px;\n}\n\n.close-container[_ngcontent-%COMP%] {\n  background-color: whitesmoke;\n  color: #114347;\n  margin-top: 20px;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  border-radius: 15px;\n}\n\n.close-container-image[_ngcontent-%COMP%] {\n  width: 150px;\n}\n\n.close-container-text[_ngcontent-%COMP%] {\n  margin-top: 5%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  max-width: 90%;\n}\n\n.close-container-text-title[_ngcontent-%COMP%] {\n  margin: 10px;\n  font-size: 20pt;\n}\n\n.close-container-text-subtitle[_ngcontent-%COMP%] {\n  margin: 20px;\n  font-size: 15pt;\n}\n\n@media(hover: hover) {\n    .component-button[_ngcontent-%COMP%]:hover {\n        opacity: 0.7;\n    }\n\n    .close-button[_ngcontent-%COMP%]:hover {\n        cursor: pointer;\n        opacity: 0.7;\n      }\n}\n\n@media (max-width: 500px) {\n\n    .modal-content[_ngcontent-%COMP%] {\n        width: auto;\n        height: 50%;\n    }\n\n    .container-inner-content[_ngcontent-%COMP%] {\n        width: 40vh;\n    }\n}\n\n@media screen and (-webkit-min-device-pixel-ratio:0) {\n    select[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%], input[_ngcontent-%COMP%] {\n      font-size: 16px;\n    }\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhY3RzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLDRCQUE0QjtFQUM1QixjQUFjO0FBQ2hCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixlQUFlO0VBQ2YsWUFBWTtFQUNaLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQiw0QkFBNEI7RUFDNUIsY0FBYztFQUNkLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixxQkFBcUI7RUFDckIscUJBQXFCO0VBQ3JCLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2Isd0NBQXdDO0VBQ3hDLHdCQUF3QjtFQUN4QixnREFBZ0Q7RUFDaEQsYUFBYTtBQUNmOztBQUdBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixjQUFjO0FBQ2hCOztBQUVBO0VBQ0Usb0NBQW9DO0VBQ3BDLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSx3Q0FBd0M7RUFDeEMseUJBQXlCO0VBQ3pCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLFVBQVU7RUFDVixNQUFNO0VBQ04sV0FBVztFQUNYLFlBQVk7RUFDWixvQ0FBb0M7RUFDcEMsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLDRCQUE0QjtFQUM1QixZQUFZO0VBQ1osYUFBYTtFQUNiLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsc0JBQXNCO0VBQ3RCLFVBQVU7RUFDVixlQUFlO0VBQ2YsV0FBVztBQUNiOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFLDRCQUE0QjtFQUM1QixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxZQUFZO0VBQ1osYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGNBQWM7RUFDZCxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osZUFBZTtBQUNqQjs7QUFFQTtJQUNJO1FBQ0ksWUFBWTtJQUNoQjs7SUFFQTtRQUNJLGVBQWU7UUFDZixZQUFZO01BQ2Q7QUFDTjs7QUFFQTs7SUFFSTtRQUNJLFdBQVc7UUFDWCxXQUFXO0lBQ2Y7O0lBRUE7UUFDSSxXQUFXO0lBQ2Y7QUFDSjs7QUFFQTtJQUNJOzs7TUFHRSxlQUFlO0lBQ2pCO0VBQ0YiLCJmaWxlIjoiY29udGFjdHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xuICBjb2xvcjogIzExNDM0Nztcbn1cblxuLmNvbnRhaW5lci1pbnRybyB7XG4gIHBhZGRpbmctdG9wOiAxMDBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBsaW5lLWhlaWdodDogM2VtO1xufVxuXG4uaW50cm8tdGl0bGUge1xuICBmb250LXNpemU6IDMwcHQ7XG4gIG1hcmdpbjogYXV0byAyMHB4O1xufVxuXG4uaW50cm8tc3VidGl0bGUge1xuICBmb250LXNpemU6IDE1cHQ7XG59XG5cbi5jb250YWluZXItaW5uZXIge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5jb250YWluZXItaW5uZXItY29udGVudCB7XG4gIHdpZHRoOiA2MHZoO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxNXB0O1xuICBtYXJnaW46IDMwcHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjRlbTtcbn1cblxuLmNvbXBvbmVudC1pbnB1dCB7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcbiAgY29sb3I6ICMxMTQzNDc7XG4gIHdpZHRoOiAxMDAlO1xuICBtaW4taGVpZ2h0OiA0MHB4O1xuICBtYXgtaGVpZ2h0OiAzMDBweDtcbiAgYm9yZGVyOiBub25lO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm94LXNoYWRvdzogMCAxcHggNHB4IHJnYigyMCA1MCAwIC8gMzAlKTtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMXB4IDRweCByZ2IoMjAgNTAgMCAvIDMwJSk7XG4gIHBhZGRpbmc6IDE1cHg7XG59XG5cblxuLmNvbXBvbmVudC1pbm5lci1idXR0b24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luOiA0MHB4IDA7XG59XG5cbi5jb21wb25lbnQtYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGQzkzQyAhaW1wb3J0YW50O1xuICBjb2xvcjogIzExNDM0Nztcbn1cblxuLmNvbnRhaW5lci1zdWNjZXNzZnVsLW1lc3NhZ2Uge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIwLCAyMiwgNDQsIDAuOTUpO1xuICBwYWRkaW5nOiA0MHB4IDQwcHggMCA0MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLndoaXRlc3BhY2Uge1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG4ubWVzc2FnZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLm1vZGFsIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgei1pbmRleDogNTtcbiAgdG9wOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5tb2RhbC1jb250ZW50IHtcbiAgbWFyZ2luOiBhdXRvIDIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XG4gIHdpZHRoOiA3MDBweDtcbiAgaGVpZ2h0OiA0MDBweDtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbn1cblxuLmNsb3NlLWJ1dHRvbi1lbGVtZW50IHtcbiAgd2lkdGg6IGluaGVyaXQ7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBwYWRkaW5nOiAyNXB4IDI1cHggMCAwO1xuICBjb2xvcjogcmVkO1xuICBmb250LXNpemU6IDIwcHQ7XG4gIHotaW5kZXg6IDEwO1xufVxuXG4uY2xvc2UtYnV0dG9uIHtcbiAgd2lkdGg6IDI1cHg7XG4gIGhlaWdodDogMjVweDtcbn1cblxuLmNsb3NlLWNvbnRhaW5lciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XG4gIGNvbG9yOiAjMTE0MzQ3O1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG59XG5cbi5jbG9zZS1jb250YWluZXItaW1hZ2Uge1xuICB3aWR0aDogMTUwcHg7XG59XG5cbi5jbG9zZS1jb250YWluZXItdGV4dCB7XG4gIG1hcmdpbi10b3A6IDUlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXgtd2lkdGg6IDkwJTtcbn1cblxuLmNsb3NlLWNvbnRhaW5lci10ZXh0LXRpdGxlIHtcbiAgbWFyZ2luOiAxMHB4O1xuICBmb250LXNpemU6IDIwcHQ7XG59XG5cbi5jbG9zZS1jb250YWluZXItdGV4dC1zdWJ0aXRsZSB7XG4gIG1hcmdpbjogMjBweDtcbiAgZm9udC1zaXplOiAxNXB0O1xufVxuXG5AbWVkaWEoaG92ZXI6IGhvdmVyKSB7XG4gICAgLmNvbXBvbmVudC1idXR0b246aG92ZXIge1xuICAgICAgICBvcGFjaXR5OiAwLjc7XG4gICAgfVxuXG4gICAgLmNsb3NlLWJ1dHRvbjpob3ZlciB7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgb3BhY2l0eTogMC43O1xuICAgICAgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNTAwcHgpIHtcblxuICAgIC5tb2RhbC1jb250ZW50IHtcbiAgICAgICAgd2lkdGg6IGF1dG87XG4gICAgICAgIGhlaWdodDogNTAlO1xuICAgIH1cblxuICAgIC5jb250YWluZXItaW5uZXItY29udGVudCB7XG4gICAgICAgIHdpZHRoOiA0MHZoO1xuICAgIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbzowKSB7XG4gICAgc2VsZWN0LFxuICAgIHRleHRhcmVhLFxuICAgIGlucHV0IHtcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICB9XG4gIH1cbiJdfQ== */"] });


/***/ }),

/***/ "lLp1":
/*!**************************************************************************!*\
  !*** ./src/app/homepage/homepage-introduction/introduction.component.ts ***!
  \**************************************************************************/
/*! exports provided: IntroductionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntroductionComponent", function() { return IntroductionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class IntroductionComponent {
    constructor() { }
    ngOnInit() {
    }
}
IntroductionComponent.ɵfac = function IntroductionComponent_Factory(t) { return new (t || IntroductionComponent)(); };
IntroductionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: IntroductionComponent, selectors: [["app-homepage-introduction"]], decls: 23, vars: 0, consts: [[1, "container"], [1, "container-inner-title"], [1, "container-inner-title-content"], [2, "color", "#ffc93c"], [1, "container-inner-subtitle"], [1, "container-inner-button"], ["id", "button", "routerLink", "contacts", 1, "component-button"], ["src", "https://www.supersaas.com/schedule/ztrahn/Jacht_parking", "width", "100%", "height", "800"]], template: function IntroductionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Ta ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "ditt firma");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " til et nytt niv\u00E5 med en ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "ny nettside");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Vi kan hjelpe deg ved \u00E5 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "lage en nettside");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " som ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "skiller seg");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " ut i mengden");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Kontakt oss");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "iframe", 7);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]], styles: [".container[_ngcontent-%COMP%] {\n  min-height: 650px;\n  background-color: #114347;\n  background-image: url('homeimage.png');\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n  color: whitesmoke;\n}\n\n.container-inner-title[_ngcontent-%COMP%] {\n  padding-top: 23vh;\n  font-size: 45pt;\n  line-height: 100%;\n  display: flex;\n  justify-content: center;\n  text-align: center;\n}\n\n.container-inner-title-content[_ngcontent-%COMP%] {\n  max-width: 900px;\n}\n\n.container-inner-subtitle[_ngcontent-%COMP%] {\n  margin-top: 50px;\n  text-align: center;\n  font-size: 15pt;\n}\n\n.container-inner-button[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  margin-top: 75px;\n}\n\n.component-button[_ngcontent-%COMP%] {\n  width: 300px !important;\n  height: 50px !important;\n  background-color: #ffc93c !important;\n  color: #114347;\n  font-size: 18pt;\n}\n\n@media (hover: hover) {\n    .component-button[_ngcontent-%COMP%]:hover {\n        opacity: 0.7;\n      }\n  }\n\n@media(max-width: 1025px) {\n    .container[_ngcontent-%COMP%] {\n        min-height: 550px;\n    }\n    \n    .container-inner-title[_ngcontent-%COMP%] {\n      padding-top: 18vh;\n      margin: auto 30px;\n    }\n\n    .container-inner-subtitle[_ngcontent-%COMP%] {\n      margin-left: 30px;\n      margin-right: 30px;\n    }\n}\n\n@media(max-width: 768px) {\n    .container-inner-title[_ngcontent-%COMP%] {\n        font-size: 35pt;\n      }\n\n    .container-inner-subtitle[_ngcontent-%COMP%] {\n        font-size: 13pt;\n    }\n\n    .component-button[_ngcontent-%COMP%] {\n        width: 250px !important;\n    }\n}\n\n@media(max-width: 400px) {\n    .container[_ngcontent-%COMP%] {\n        min-height: 620px;\n    }\n    \n    .container-inner-title[_ngcontent-%COMP%] {\n        padding-top: 20vh;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImludHJvZHVjdGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQWlCO0VBQ2pCLHlCQUF5QjtFQUN6QixzQ0FBNkQ7RUFDN0Qsc0JBQXNCO0VBQ3RCLDJCQUEyQjtFQUMzQiw0QkFBNEI7RUFDNUIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2Qix1QkFBdUI7RUFDdkIsb0NBQW9DO0VBQ3BDLGNBQWM7RUFDZCxlQUFlO0FBQ2pCOztBQUVBO0lBQ0k7UUFDSSxZQUFZO01BQ2Q7RUFDSjs7QUFFRjtJQUNJO1FBQ0ksaUJBQWlCO0lBQ3JCOztJQUVBO01BQ0UsaUJBQWlCO01BQ2pCLGlCQUFpQjtJQUNuQjs7SUFFQTtNQUNFLGlCQUFpQjtNQUNqQixrQkFBa0I7SUFDcEI7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksZUFBZTtNQUNqQjs7SUFFRjtRQUNJLGVBQWU7SUFDbkI7O0lBRUE7UUFDSSx1QkFBdUI7SUFDM0I7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksaUJBQWlCO0lBQ3JCOztJQUVBO1FBQ0ksaUJBQWlCO0lBQ3JCO0FBQ0oiLCJmaWxlIjoiaW50cm9kdWN0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcbiAgbWluLWhlaWdodDogNjUwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxMTQzNDc7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uLy4uL3NyYy9hc3NldHMvaG9tZWltYWdlLnBuZ1wiKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBjb2xvcjogd2hpdGVzbW9rZTtcbn1cblxuLmNvbnRhaW5lci1pbm5lci10aXRsZSB7XG4gIHBhZGRpbmctdG9wOiAyM3ZoO1xuICBmb250LXNpemU6IDQ1cHQ7XG4gIGxpbmUtaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uY29udGFpbmVyLWlubmVyLXRpdGxlLWNvbnRlbnQge1xuICBtYXgtd2lkdGg6IDkwMHB4O1xufVxuXG4uY29udGFpbmVyLWlubmVyLXN1YnRpdGxlIHtcbiAgbWFyZ2luLXRvcDogNTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDE1cHQ7XG59XG5cbi5jb250YWluZXItaW5uZXItYnV0dG9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDc1cHg7XG59XG5cbi5jb21wb25lbnQtYnV0dG9uIHtcbiAgd2lkdGg6IDMwMHB4ICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogNTBweCAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZjOTNjICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjMTE0MzQ3O1xuICBmb250LXNpemU6IDE4cHQ7XG59XG5cbkBtZWRpYSAoaG92ZXI6IGhvdmVyKSB7XG4gICAgLmNvbXBvbmVudC1idXR0b246aG92ZXIge1xuICAgICAgICBvcGFjaXR5OiAwLjc7XG4gICAgICB9XG4gIH1cblxuQG1lZGlhKG1heC13aWR0aDogMTAyNXB4KSB7XG4gICAgLmNvbnRhaW5lciB7XG4gICAgICAgIG1pbi1oZWlnaHQ6IDU1MHB4O1xuICAgIH1cbiAgICBcbiAgICAuY29udGFpbmVyLWlubmVyLXRpdGxlIHtcbiAgICAgIHBhZGRpbmctdG9wOiAxOHZoO1xuICAgICAgbWFyZ2luOiBhdXRvIDMwcHg7XG4gICAgfVxuXG4gICAgLmNvbnRhaW5lci1pbm5lci1zdWJ0aXRsZSB7XG4gICAgICBtYXJnaW4tbGVmdDogMzBweDtcbiAgICAgIG1hcmdpbi1yaWdodDogMzBweDtcbiAgICB9XG59XG4gXG5AbWVkaWEobWF4LXdpZHRoOiA3NjhweCkge1xuICAgIC5jb250YWluZXItaW5uZXItdGl0bGUge1xuICAgICAgICBmb250LXNpemU6IDM1cHQ7XG4gICAgICB9XG5cbiAgICAuY29udGFpbmVyLWlubmVyLXN1YnRpdGxlIHtcbiAgICAgICAgZm9udC1zaXplOiAxM3B0O1xuICAgIH1cblxuICAgIC5jb21wb25lbnQtYnV0dG9uIHtcbiAgICAgICAgd2lkdGg6IDI1MHB4ICFpbXBvcnRhbnQ7XG4gICAgfVxufVxuXG5AbWVkaWEobWF4LXdpZHRoOiA0MDBweCkge1xuICAgIC5jb250YWluZXIge1xuICAgICAgICBtaW4taGVpZ2h0OiA2MjBweDtcbiAgICB9XG4gICAgXG4gICAgLmNvbnRhaW5lci1pbm5lci10aXRsZSB7XG4gICAgICAgIHBhZGRpbmctdG9wOiAyMHZoO1xuICAgIH1cbn0iXX0= */"] });


/***/ }),

/***/ "oPSB":
/*!*******************************************************************************!*\
  !*** ./src/app/services/services-howitworks/services-howitworks.component.ts ***!
  \*******************************************************************************/
/*! exports provided: ServicesHowitworksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesHowitworksComponent", function() { return ServicesHowitworksComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class ServicesHowitworksComponent {
    constructor() { }
    ngOnInit() {
    }
}
ServicesHowitworksComponent.ɵfac = function ServicesHowitworksComponent_Factory(t) { return new (t || ServicesHowitworksComponent)(); };
ServicesHowitworksComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ServicesHowitworksComponent, selectors: [["app-services-howitworks"]], decls: 56, vars: 0, consts: [[1, "container"], [1, "container-inner"], [1, "container-title"], [1, "container-inner-content"], [1, "container-inner-content-image"], [1, "container-inner-content-text"], [1, "container-inner-content-title"], [1, "container-inner-content-subtitle"], [1, "container-inner-plus-content"], ["id", "button", "routerLink", "/contacts", 1, "component-button"]], template: function ServicesHowitworksComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Hvordan fungerer det egentlig?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " 1 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Du kontakter oss");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Trykk p\u00E5 kontakt oss knappen og vi h\u00F8rer fra oss innen 12 timers tid.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " 2 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Vi lager design");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Vi kommer med forslag til design slik at du f\u00E5r en nettside som representerer deg p\u00E5 \u00F8nsket m\u00E5te.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " 3 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Vi programmerer nettsiden");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Etter \u00E5 ha blitt enige om design programmerer v\u00E5re utviklere nettsiden din.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " 4 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Levering av nettsiden");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Vi tester nettsiden og n\u00E5r du er forn\u00F8yd vil den gj\u00F8res tilgjengelig.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " 5 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Vedlikehold");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Vi s\u00F8rger for vedlikehold av nettsiden slik at den alltid fungerer optimalt.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, " Tillegstjeneste: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, " 6 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Markedsf\u00F8ring");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Om du velger dette, s\u00F8rger vi for at du er synlig digitalt og n\u00E5r din m\u00E5lgruppe.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Kontaks oss");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]], styles: [".container[_ngcontent-%COMP%] {\n  width: 100%;\n  background-color: whitesmoke;\n  color: #114347;\n}\n\n.container-inner[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.container-title[_ngcontent-%COMP%] {\n  margin-top: 50px;\n  font-size: 30pt;\n  text-align: center;\n}\n\n.container-second-title[_ngcontent-%COMP%] {\n  margin: 70px 0 15px 0;\n  font-size: 30pt;\n  display: flex;\n  justify-content: left;\n  width: 90%;\n}\n\n.container-second-subtitle[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: left;\n  width: 90%;\n  font-size: 15pt;\n}\n\n.container-inner-content[_ngcontent-%COMP%] {\n  border-left: 15% solid red;\n  width: 50%;\n  height: 150px;\n  margin-top: 30px;\n  padding: 30px 30px 30px 0;\n  display: flex;\n  align-items: center;\n  border-radius: 10px;\n  background-color: #114347;\n  color: whitesmoke;\n  transition: 0.25s;\n}\n\n.container-inner-plus-content[_ngcontent-%COMP%] {\n  margin: 40px 0 10px 0;\n  font-size: 20pt;\n  width: 45%;\n  text-align: center;\n}\n\n.container-inner-content[_ngcontent-%COMP%]:nth-child(2) {\n  margin-top: 35px;\n}\n\n.container-inner-content-image[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 30pt;\n  height: inherit;\n  border-top-left-radius: 10px;\n  border-bottom-left-radius: 10px;\n  background-color: #297C86;\n  width: 100px;\n}\n\n.container-inner-content-text[_ngcontent-%COMP%] {\n  margin-left: 20px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  height: 100px;\n  width: 80%;\n}\n\n.container-inner-content-title[_ngcontent-%COMP%] {\n  color: #FFC93C;\n  position: relative;\n  font-size: 20pt;\n}\n\n.container-inner-content-title[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  bottom: -10px;\n  width: 100%;\n  border-top: 3px solid whitesmoke;\n}\n\n.container-inner-content-subtitle[_ngcontent-%COMP%] {\n  margin-top: 15px;\n  font-size: 15pt;\n}\n\n.component-button[_ngcontent-%COMP%] {\n  background-color: #FFC93C !important;\n  color: #114347;\n  font-size: 13pt;\n  opacity: 0.9;\n  margin: 50px;\n}\n\n@media (hover: hover) {\n    .component-button[_ngcontent-%COMP%]:hover {\n        opacity: 0.7;\n      }\n\n    .container-inner-content[_ngcontent-%COMP%]:hover {\n        transform: scale(1.03);\n        transition: 0.25s;\n    }\n}\n\n@media (max-width: 1200px) {\n    .container-inner-content[_ngcontent-%COMP%] {\n        width: 70%;\n    }\n}\n\n@media (max-width: 660px) {\n    .container-inner-content[_ngcontent-%COMP%] {\n        height: 160px;\n    }\n}\n\n@media (max-width: 550px) {\n    .container-inner-content[_ngcontent-%COMP%] {\n        width: 90%;\n    }\n\n    .container-inner-content-title[_ngcontent-%COMP%] {\n        font-size: 18pt;\n    }\n\n    .container-inner-content-subtitle[_ngcontent-%COMP%] {\n        font-size: 13pt;\n    }\n}\n\n@media (max-width: 450px) {\n    .container-inner-content[_ngcontent-%COMP%] {\n        height: 170px;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzLWhvd2l0d29ya3MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7RUFDWCw0QkFBNEI7RUFDNUIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsZUFBZTtFQUNmLGFBQWE7RUFDYixxQkFBcUI7RUFDckIsVUFBVTtBQUNaOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHFCQUFxQjtFQUNyQixVQUFVO0VBQ1YsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLDBCQUEwQjtFQUMxQixVQUFVO0VBQ1YsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQix5QkFBeUI7RUFDekIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIseUJBQXlCO0VBQ3pCLGlCQUFpQjtFQUNqQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsZUFBZTtFQUNmLFVBQVU7RUFDVixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixlQUFlO0VBQ2YsZUFBZTtFQUNmLDRCQUE0QjtFQUM1QiwrQkFBK0I7RUFDL0IseUJBQXlCO0VBQ3pCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixhQUFhO0VBQ2IsVUFBVTtBQUNaOztBQUVBO0VBQ0UsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixPQUFPO0VBQ1AsYUFBYTtFQUNiLFdBQVc7RUFDWCxnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLG9DQUFvQztFQUNwQyxjQUFjO0VBQ2QsZUFBZTtFQUNmLFlBQVk7RUFDWixZQUFZO0FBQ2Q7O0FBR0E7SUFDSTtRQUNJLFlBQVk7TUFDZDs7SUFFRjtRQUNJLHNCQUFzQjtRQUN0QixpQkFBaUI7SUFDckI7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksVUFBVTtJQUNkO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLGFBQWE7SUFDakI7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksVUFBVTtJQUNkOztJQUVBO1FBQ0ksZUFBZTtJQUNuQjs7SUFFQTtRQUNJLGVBQWU7SUFDbkI7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksYUFBYTtJQUNqQjtBQUNKIiwiZmlsZSI6InNlcnZpY2VzLWhvd2l0d29ya3MuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcbiAgY29sb3I6ICMxMTQzNDc7XG59XG5cbi5jb250YWluZXItaW5uZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uY29udGFpbmVyLXRpdGxlIHtcbiAgbWFyZ2luLXRvcDogNTBweDtcbiAgZm9udC1zaXplOiAzMHB0O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5jb250YWluZXItc2Vjb25kLXRpdGxlIHtcbiAgbWFyZ2luOiA3MHB4IDAgMTVweCAwO1xuICBmb250LXNpemU6IDMwcHQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogbGVmdDtcbiAgd2lkdGg6IDkwJTtcbn1cblxuLmNvbnRhaW5lci1zZWNvbmQtc3VidGl0bGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQ7XG4gIHdpZHRoOiA5MCU7XG4gIGZvbnQtc2l6ZTogMTVwdDtcbn1cblxuLmNvbnRhaW5lci1pbm5lci1jb250ZW50IHtcbiAgYm9yZGVyLWxlZnQ6IDE1JSBzb2xpZCByZWQ7XG4gIHdpZHRoOiA1MCU7XG4gIGhlaWdodDogMTUwcHg7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG4gIHBhZGRpbmc6IDMwcHggMzBweCAzMHB4IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxMTQzNDc7XG4gIGNvbG9yOiB3aGl0ZXNtb2tlO1xuICB0cmFuc2l0aW9uOiAwLjI1cztcbn1cblxuLmNvbnRhaW5lci1pbm5lci1wbHVzLWNvbnRlbnQge1xuICBtYXJnaW46IDQwcHggMCAxMHB4IDA7XG4gIGZvbnQtc2l6ZTogMjBwdDtcbiAgd2lkdGg6IDQ1JTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uY29udGFpbmVyLWlubmVyLWNvbnRlbnQ6bnRoLWNoaWxkKDIpIHtcbiAgbWFyZ2luLXRvcDogMzVweDtcbn1cblxuLmNvbnRhaW5lci1pbm5lci1jb250ZW50LWltYWdlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMzBwdDtcbiAgaGVpZ2h0OiBpbmhlcml0O1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMHB4O1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjk3Qzg2O1xuICB3aWR0aDogMTAwcHg7XG59XG5cbi5jb250YWluZXItaW5uZXItY29udGVudC10ZXh0IHtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBoZWlnaHQ6IDEwMHB4O1xuICB3aWR0aDogODAlO1xufVxuXG4uY29udGFpbmVyLWlubmVyLWNvbnRlbnQtdGl0bGUge1xuICBjb2xvcjogI0ZGQzkzQztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmb250LXNpemU6IDIwcHQ7XG59XG5cbi5jb250YWluZXItaW5uZXItY29udGVudC10aXRsZTo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICBib3R0b206IC0xMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLXRvcDogM3B4IHNvbGlkIHdoaXRlc21va2U7XG59XG5cbi5jb250YWluZXItaW5uZXItY29udGVudC1zdWJ0aXRsZSB7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG4gIGZvbnQtc2l6ZTogMTVwdDtcbn1cblxuLmNvbXBvbmVudC1idXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZDOTNDICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjMTE0MzQ3O1xuICBmb250LXNpemU6IDEzcHQ7XG4gIG9wYWNpdHk6IDAuOTtcbiAgbWFyZ2luOiA1MHB4O1xufVxuXG5cbkBtZWRpYSAoaG92ZXI6IGhvdmVyKSB7XG4gICAgLmNvbXBvbmVudC1idXR0b246aG92ZXIge1xuICAgICAgICBvcGFjaXR5OiAwLjc7XG4gICAgICB9XG5cbiAgICAuY29udGFpbmVyLWlubmVyLWNvbnRlbnQ6aG92ZXIge1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDMpO1xuICAgICAgICB0cmFuc2l0aW9uOiAwLjI1cztcbiAgICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiAxMjAwcHgpIHtcbiAgICAuY29udGFpbmVyLWlubmVyLWNvbnRlbnQge1xuICAgICAgICB3aWR0aDogNzAlO1xuICAgIH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDY2MHB4KSB7XG4gICAgLmNvbnRhaW5lci1pbm5lci1jb250ZW50IHtcbiAgICAgICAgaGVpZ2h0OiAxNjBweDtcbiAgICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA1NTBweCkge1xuICAgIC5jb250YWluZXItaW5uZXItY29udGVudCB7XG4gICAgICAgIHdpZHRoOiA5MCU7XG4gICAgfVxuXG4gICAgLmNvbnRhaW5lci1pbm5lci1jb250ZW50LXRpdGxlIHtcbiAgICAgICAgZm9udC1zaXplOiAxOHB0O1xuICAgIH1cblxuICAgIC5jb250YWluZXItaW5uZXItY29udGVudC1zdWJ0aXRsZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTNwdDtcbiAgICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA0NTBweCkge1xuICAgIC5jb250YWluZXItaW5uZXItY29udGVudCB7XG4gICAgICAgIGhlaWdodDogMTcwcHg7XG4gICAgfVxufSJdfQ== */"] });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ }),

/***/ "zyDg":
/*!**************************************************!*\
  !*** ./src/app/portfolio/portfolio.component.ts ***!
  \**************************************************/
/*! exports provided: PortfolioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortfolioComponent", function() { return PortfolioComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class PortfolioComponent {
    constructor() { }
    ngOnInit() {
    }
}
PortfolioComponent.ɵfac = function PortfolioComponent_Factory(t) { return new (t || PortfolioComponent)(); };
PortfolioComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PortfolioComponent, selectors: [["app-portfolio"]], decls: 4, vars: 0, consts: [[1, "container"], [1, "container-inner"], [1, "container-content"]], template: function PortfolioComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Prosjekter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 80vh;\n  background-color: rgba(20, 22, 44, 0.95);\n  display: flex;\n  align-items: center;\n}\n\n.container-inner[_ngcontent-%COMP%] {\n  max-width: 600px;\n  display: block;\n  margin-left: 100px;\n}\n\n.container-content[_ngcontent-%COMP%] {\n  font-size: 40pt;\n  line-height: 1.4em;\n}\n\n.component-button[_ngcontent-%COMP%] {\n  background-color: whitesmoke;\n  margin-top: 30px;\n  font-size: 13pt;\n  opacity: 0.9;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvcnRmb2xpby5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWix3Q0FBd0M7RUFDeEMsYUFBYTtFQUNiLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2Qsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLDRCQUE0QjtFQUM1QixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLFlBQVk7QUFDZCIsImZpbGUiOiJwb3J0Zm9saW8uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA4MHZoO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIwLCAyMiwgNDQsIDAuOTUpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uY29udGFpbmVyLWlubmVyIHtcbiAgbWF4LXdpZHRoOiA2MDBweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1sZWZ0OiAxMDBweDtcbn1cblxuLmNvbnRhaW5lci1jb250ZW50IHtcbiAgZm9udC1zaXplOiA0MHB0O1xuICBsaW5lLWhlaWdodDogMS40ZW07XG59XG5cbi5jb21wb25lbnQtYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcbiAgbWFyZ2luLXRvcDogMzBweDtcbiAgZm9udC1zaXplOiAxM3B0O1xuICBvcGFjaXR5OiAwLjk7XG59XG5cblxuIl19 */"] });


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map