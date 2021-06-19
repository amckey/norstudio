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

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


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
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]], styles: [".container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 80vh;\n  background-color: #114347;\n  background-image: url('homeimage.png');\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n  color: whitesmoke;\n  display: flex;\n  align-items: center;\n}\n\n.container-inner[_ngcontent-%COMP%] {\n  margin-left: 100px;\n  display: flex;\n  justify-content: space-between;\n}\n\n.container-inner-text[_ngcontent-%COMP%] {\n  max-width: 55%;\n}\n\n\n\n.container-inner-text-title[_ngcontent-%COMP%] {\n  font-size: 40pt;\n}\n\n.container-inner-text-subtitle[_ngcontent-%COMP%] {\n  margin-top: 70px;\n  font-size: 15pt;\n  line-height: 1.7em;\n}\n\n.component-button[_ngcontent-%COMP%] {\n  background-color: #FFC93C !important;\n  color: #114347;\n  margin-top: 30px;\n  font-size: 13pt;\n  opacity: 0.9;\n}\n\n.component-button[_ngcontent-%COMP%]:hover {\n  opacity: 0.7;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFib3V0LWludHJvZHVjdGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWix5QkFBeUI7RUFDekIsc0NBQTZEO0VBQzdELHNCQUFzQjtFQUN0QiwyQkFBMkI7RUFDM0IsNEJBQTRCO0VBQzVCLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYiw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBOzs7Ozs7R0FNRzs7QUFFSDtFQUNFLGVBQWU7QUFDakI7O0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLG9DQUFvQztFQUNwQyxjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxZQUFZO0FBQ2QiLCJmaWxlIjoiYWJvdXQtaW50cm9kdWN0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogODB2aDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzExNDM0NztcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vLi4vc3JjL2Fzc2V0cy9ob21laW1hZ2UucG5nXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGNvbG9yOiB3aGl0ZXNtb2tlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uY29udGFpbmVyLWlubmVyIHtcbiAgbWFyZ2luLWxlZnQ6IDEwMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5jb250YWluZXItaW5uZXItdGV4dCB7XG4gIG1heC13aWR0aDogNTUlO1xufVxuXG4vKiAuY29udGFpbmVyLWlubmVyLWltYWdlIHtcbiAgbWFyZ2luLXJpZ2h0OiAxMDBweDtcbiAgbWluLXdpZHRoOiAzMCU7XG4gIG1pbi1oZWlnaHQ6IDEwMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufSAqL1xuXG4uY29udGFpbmVyLWlubmVyLXRleHQtdGl0bGUge1xuICBmb250LXNpemU6IDQwcHQ7XG59XG4uY29udGFpbmVyLWlubmVyLXRleHQtc3VidGl0bGUge1xuICBtYXJnaW4tdG9wOiA3MHB4O1xuICBmb250LXNpemU6IDE1cHQ7XG4gIGxpbmUtaGVpZ2h0OiAxLjdlbTtcbn1cblxuLmNvbXBvbmVudC1idXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZDOTNDICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjMTE0MzQ3O1xuICBtYXJnaW4tdG9wOiAzMHB4O1xuICBmb250LXNpemU6IDEzcHQ7XG4gIG9wYWNpdHk6IDAuOTtcbn1cblxuLmNvbXBvbmVudC1idXR0b246aG92ZXIge1xuICBvcGFjaXR5OiAwLjc7XG59XG4iXX0= */"] });


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
    } }, styles: [".container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 520px;\n  background-color: #297C86;\n  background: linear-gradient(0deg, rgba(17,67,71,1), rgba(41,124,134,1) 50%);\n  color: whitesmoke;\n  display: flex;\n  justify-content: center;\n}\n\n.container-inner[_ngcontent-%COMP%] {\n  margin-top: 50px;\n  width: 100%;\n}\n\n.container-inner-text[_ngcontent-%COMP%] {\n  text-align: center;\n  line-height: 3em;\n}\n\n.container-inner-text-title[_ngcontent-%COMP%] {\n  color: #FFC93C;\n  font-size: 30pt;\n}\n\n.container-inner-text-subtitle[_ngcontent-%COMP%] {\n  margin-top: 15px;\n  font-size: 15pt;\n}\n\n.container-inner-boxes[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  margin: 50px 160px 0px 160px;\n}\n\n.container-inner-boxes-block[_ngcontent-%COMP%] {\n  border-radius: 10px;\n  width: 250px;\n  height: 250px;\n  background-color: #114347;\n  transition: 0.25s;\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  text-align: center;\n}\n\n.container-inner-boxes-block[_ngcontent-%COMP%]:hover {\n  transform: scale(1.05);\n  transition: 0.25s;\n}\n\n.box-content[_ngcontent-%COMP%] {\n  height: 100%;\n  padding-top: 25px;\n}\n\n.box-content-image[_ngcontent-%COMP%] {\n  width: auto;\n  height: 70px;\n}\n\n.box-content-title[_ngcontent-%COMP%] {\n  color: #FFC93C;\n  padding-top: 15px;\n  font-size: 28pt;\n  line-height: 100%;\n}\n\n.box-content-text[_ngcontent-%COMP%] {\n  padding-top: 20px;\n  font-size: 15pt;\n  line-height: 100%;\n  padding: 15px 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWVwYWdlLXRydXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLHlCQUF5QjtFQUN6QiwyRUFBMkU7RUFDM0UsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsV0FBVztBQUNiOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osYUFBYTtFQUNiLHlCQUF5QjtFQUN6QixpQkFBaUI7RUFDakIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixzQkFBc0I7RUFDdEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0UsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCIiwiZmlsZSI6ImhvbWVwYWdlLXRydXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNTIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyOTdDODY7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgwZGVnLCByZ2JhKDE3LDY3LDcxLDEpLCByZ2JhKDQxLDEyNCwxMzQsMSkgNTAlKTtcbiAgY29sb3I6IHdoaXRlc21va2U7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uY29udGFpbmVyLWlubmVyIHtcbiAgbWFyZ2luLXRvcDogNTBweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5jb250YWluZXItaW5uZXItdGV4dCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbGluZS1oZWlnaHQ6IDNlbTtcbn1cblxuLmNvbnRhaW5lci1pbm5lci10ZXh0LXRpdGxlIHtcbiAgY29sb3I6ICNGRkM5M0M7XG4gIGZvbnQtc2l6ZTogMzBwdDtcbn1cblxuLmNvbnRhaW5lci1pbm5lci10ZXh0LXN1YnRpdGxlIHtcbiAgbWFyZ2luLXRvcDogMTVweDtcbiAgZm9udC1zaXplOiAxNXB0O1xufVxuXG4uY29udGFpbmVyLWlubmVyLWJveGVzIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBtYXJnaW46IDUwcHggMTYwcHggMHB4IDE2MHB4O1xufVxuXG4uY29udGFpbmVyLWlubmVyLWJveGVzLWJsb2NrIHtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgd2lkdGg6IDI1MHB4O1xuICBoZWlnaHQ6IDI1MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTE0MzQ3O1xuICB0cmFuc2l0aW9uOiAwLjI1cztcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uY29udGFpbmVyLWlubmVyLWJveGVzLWJsb2NrOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcbiAgdHJhbnNpdGlvbjogMC4yNXM7XG59XG5cbi5ib3gtY29udGVudCB7XG4gIGhlaWdodDogMTAwJTtcbiAgcGFkZGluZy10b3A6IDI1cHg7XG59XG5cbi5ib3gtY29udGVudC1pbWFnZSB7XG4gIHdpZHRoOiBhdXRvO1xuICBoZWlnaHQ6IDcwcHg7XG59XG5cbi5ib3gtY29udGVudC10aXRsZSB7XG4gIGNvbG9yOiAjRkZDOTNDO1xuICBwYWRkaW5nLXRvcDogMTVweDtcbiAgZm9udC1zaXplOiAyOHB0O1xuICBsaW5lLWhlaWdodDogMTAwJTtcbn1cblxuLmJveC1jb250ZW50LXRleHQge1xuICBwYWRkaW5nLXRvcDogMjBweDtcbiAgZm9udC1zaXplOiAxNXB0O1xuICBsaW5lLWhlaWdodDogMTAwJTtcbiAgcGFkZGluZzogMTVweCAyMHB4O1xufVxuIl19 */"] });


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
    } }, styles: [".container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  background-color: #297C86;\n}\n\n.container-title[_ngcontent-%COMP%] {\n  color: #FFC93C;\n  margin-top: 50px;\n  font-size: 30pt;\n}\n\n.container-inner[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n}\n\n.container-inner-boxes[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  width: 100%;\n}\n\n.wrapper[_ngcontent-%COMP%] {\n  margin: 50px;\n  width: 100%;\n  display: grid;\n  justify-content: center;\n  grid-template-columns: 40% 40%;\n  grid-template-rows: 150px 150px 150px;\n  grid-gap: 30px 60px;\n}\n\n.wrapper-content[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.box[_ngcontent-%COMP%] {\n  background-color: #11434752;\n  border-radius: 5px;\n  padding: 20px;\n  transition: 0.25s;\n  border-left: 10px solid #114347;\n}\n\n.box[_ngcontent-%COMP%]:hover {\n    transform: scale(1.03);\n    transition: 0.25s;\n    border-left: 10px solid #FFC93C;\n}\n\n.box-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n.box-title-text[_ngcontent-%COMP%] {\n  font-size: 18pt;\n}\n\n.box-main-text[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  font-size: 14pt;\n  line-height: 130%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzLXdoeXVzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsV0FBVztBQUNiOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLDhCQUE4QjtFQUM5QixxQ0FBcUM7RUFDckMsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsMkJBQTJCO0VBQzNCLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLCtCQUErQjtBQUNqQzs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixpQkFBaUI7SUFDakIsK0JBQStCO0FBQ25DOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGlCQUFpQjtBQUNuQiIsImZpbGUiOiJzZXJ2aWNlcy13aHl1cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyOTdDODY7XG59XG5cbi5jb250YWluZXItdGl0bGUge1xuICBjb2xvcjogI0ZGQzkzQztcbiAgbWFyZ2luLXRvcDogNTBweDtcbiAgZm9udC1zaXplOiAzMHB0O1xufVxuXG4uY29udGFpbmVyLWlubmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5jb250YWluZXItaW5uZXItYm94ZXMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi53cmFwcGVyIHtcbiAgbWFyZ2luOiA1MHB4O1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZ3JpZDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNDAlIDQwJTtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxNTBweCAxNTBweCAxNTBweDtcbiAgZ3JpZC1nYXA6IDMwcHggNjBweDtcbn1cblxuLndyYXBwZXItY29udGVudCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uYm94IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzExNDM0NzUyO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIHRyYW5zaXRpb246IDAuMjVzO1xuICBib3JkZXItbGVmdDogMTBweCBzb2xpZCAjMTE0MzQ3O1xufVxuXG4uYm94OmhvdmVyIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDMpO1xuICAgIHRyYW5zaXRpb246IDAuMjVzO1xuICAgIGJvcmRlci1sZWZ0OiAxMHB4IHNvbGlkICNGRkM5M0M7XG59XG5cbi5ib3gtdGl0bGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uYm94LXRpdGxlLXRleHQge1xuICBmb250LXNpemU6IDE4cHQ7XG59XG5cbi5ib3gtbWFpbi10ZXh0IHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgZm9udC1zaXplOiAxNHB0O1xuICBsaW5lLWhlaWdodDogMTMwJTtcbn1cbiJdfQ== */"] });


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
    } }, styles: [".container[_ngcontent-%COMP%] {\n  height: 80vh;\n  width: 100%;\n  padding: 125px 0 100px 0;\n  background-color: #114347;\n  background-image: url('homeimage.png');\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n  color: whitesmoke;\n  display: flex;\n  align-items: center;\n}\n\n.container-inner[_ngcontent-%COMP%] {\n  margin-left: 100px;\n  display: flex;\n  justify-content: space-between;\n}\n\n.container-inner-text[_ngcontent-%COMP%] {\n  max-width: 55%;\n}\n\n\n\n.container-inner-text-title[_ngcontent-%COMP%] {\n  font-size: 40pt;\n}\n\n.container-inner-text-subtitle[_ngcontent-%COMP%] {\n  margin-top: 70px;\n  font-size: 15pt;\n  line-height: 1.7em;\n}\n\n.component-button[_ngcontent-%COMP%] {\n  background-color: #ffc93c !important;\n  color: #114347;\n  margin-top: 30px;\n  font-size: 13pt;\n  opacity: 0.9;\n}\n\n.component-button[_ngcontent-%COMP%]:hover {\n  opacity: 0.7;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzLWludHJvZHVjdGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCx3QkFBd0I7RUFDeEIseUJBQXlCO0VBQ3pCLHNDQUE2RDtFQUM3RCxzQkFBc0I7RUFDdEIsMkJBQTJCO0VBQzNCLDRCQUE0QjtFQUM1QixpQkFBaUI7RUFDakIsYUFBYTtFQUNiLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTs7Ozs7O0dBTUc7O0FBRUg7RUFDRSxlQUFlO0FBQ2pCOztBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxvQ0FBb0M7RUFDcEMsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtBQUNkIiwiZmlsZSI6InNlcnZpY2VzLWludHJvZHVjdGlvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XG4gIGhlaWdodDogODB2aDtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDEyNXB4IDAgMTAwcHggMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzExNDM0NztcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vLi4vc3JjL2Fzc2V0cy9ob21laW1hZ2UucG5nXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGNvbG9yOiB3aGl0ZXNtb2tlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uY29udGFpbmVyLWlubmVyIHtcbiAgbWFyZ2luLWxlZnQ6IDEwMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5jb250YWluZXItaW5uZXItdGV4dCB7XG4gIG1heC13aWR0aDogNTUlO1xufVxuXG4vKiAuY29udGFpbmVyLWlubmVyLWltYWdlIHtcbiAgbWFyZ2luLXJpZ2h0OiAxMDBweDtcbiAgbWluLXdpZHRoOiAzMCU7XG4gIG1pbi1oZWlnaHQ6IDEwMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufSAqL1xuXG4uY29udGFpbmVyLWlubmVyLXRleHQtdGl0bGUge1xuICBmb250LXNpemU6IDQwcHQ7XG59XG4uY29udGFpbmVyLWlubmVyLXRleHQtc3VidGl0bGUge1xuICBtYXJnaW4tdG9wOiA3MHB4O1xuICBmb250LXNpemU6IDE1cHQ7XG4gIGxpbmUtaGVpZ2h0OiAxLjdlbTtcbn1cblxuLmNvbXBvbmVudC1idXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZjOTNjICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjMTE0MzQ3O1xuICBtYXJnaW4tdG9wOiAzMHB4O1xuICBmb250LXNpemU6IDEzcHQ7XG4gIG9wYWNpdHk6IDAuOTtcbn1cblxuLmNvbXBvbmVudC1idXR0b246aG92ZXIge1xuICBvcGFjaXR5OiAwLjc7XG59XG4iXX0= */"] });


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
        document.querySelector(this.elem).scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}
ServicesDescriptionComponent.ɵfac = function ServicesDescriptionComponent_Factory(t) { return new (t || ServicesDescriptionComponent)(); };
ServicesDescriptionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ServicesDescriptionComponent, selectors: [["app-services-description"]], inputs: { buttonClicked: "buttonClicked" }, decls: 17, vars: 0, consts: [[1, "container"], ["id", "development", 2, "position", "relative", "top", "-100px"], [1, "container-inner"], [1, "container-inner-box"], [1, "container-inner-box-title"], [1, "container-inner-box-text"], ["id", "marketing", 2, "position", "relative", "top", "-200px"], [1, "container-inner-button"], ["id", "button", "routerLink", "/contacts", 1, "component-button"]], template: function ServicesDescriptionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Nettside");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "I dagens samfunn benytter nesten alle seg av en eller annen form for digitalt verkt\u00F8y, og store deler av omsetningen og kommunikasjon skjer digitalt. Bedrifter som har etablert seg i den digitale verden har hatt en stor fordel over de som er mindre synlig. Vi hjelper deg med \u00E5 bli mer synlig ved \u00E5 utvikle og designe din egen profesjonelle, strukturerte og attraktive hjemmeside, der din identitet kommer frem . Vi gir oss ikke f\u00F8r du er forn\u00F8yd! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 3);
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
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]], styles: [".container[_ngcontent-%COMP%] {\n  width: 100%;\n  background-color: whitesmoke;\n  color: #114347;\n}\n\n.container-inner[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\n.container-inner-box[_ngcontent-%COMP%] {\n  padding-top: 50px;\n  height: 240px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  justify-content: space-around;\n}\n\n.container-inner-box-title[_ngcontent-%COMP%] {\n  font-size: 30pt;\n  line-height: 110%;\n}\n\n.container-inner-box-text[_ngcontent-%COMP%] {\n  font-size: 15pt;\n  line-height: 100%;\n  max-width: 50%;\n}\n\n.component-button[_ngcontent-%COMP%] {\n  background-color: #FFC93C !important;\n  color: #114347;\n  font-size: 13pt;\n  opacity: 0.9;\n  margin: 50px;\n}\n\n.component-button[_ngcontent-%COMP%]:hover {\n  opacity: 0.7;\n}\n\n.container-inner-button[_ngcontent-%COMP%] {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzLWRlc2NyaXB0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gsNEJBQTRCO0VBQzVCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsYUFBYTtFQUNiLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQiw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0Usb0NBQW9DO0VBQ3BDLGNBQWM7RUFDZCxlQUFlO0VBQ2YsWUFBWTtFQUNaLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQiIsImZpbGUiOiJzZXJ2aWNlcy1kZXNjcmlwdGlvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xuICBjb2xvcjogIzExNDM0Nztcbn1cblxuLmNvbnRhaW5lci1pbm5lciB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmNvbnRhaW5lci1pbm5lci1ib3gge1xuICBwYWRkaW5nLXRvcDogNTBweDtcbiAgaGVpZ2h0OiAyNDBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbn1cblxuLmNvbnRhaW5lci1pbm5lci1ib3gtdGl0bGUge1xuICBmb250LXNpemU6IDMwcHQ7XG4gIGxpbmUtaGVpZ2h0OiAxMTAlO1xufVxuXG4uY29udGFpbmVyLWlubmVyLWJveC10ZXh0IHtcbiAgZm9udC1zaXplOiAxNXB0O1xuICBsaW5lLWhlaWdodDogMTAwJTtcbiAgbWF4LXdpZHRoOiA1MCU7XG59XG5cbi5jb21wb25lbnQtYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGQzkzQyAhaW1wb3J0YW50O1xuICBjb2xvcjogIzExNDM0NztcbiAgZm9udC1zaXplOiAxM3B0O1xuICBvcGFjaXR5OiAwLjk7XG4gIG1hcmdpbjogNTBweDtcbn1cblxuLmNvbXBvbmVudC1idXR0b246aG92ZXIge1xuICBvcGFjaXR5OiAwLjc7XG59XG5cbi5jb250YWluZXItaW5uZXItYnV0dG9uIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuIl19 */"] });


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
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]], styles: [".page[_ngcontent-%COMP%] {\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n  z-index: 1;\n}\n\n.container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  margin: 0 auto;\n}\n\n.header[_ngcontent-%COMP%] {\n  position: fixed;\n  width: 100%;\n  z-index: 2;\n}\n\n.footer[_ngcontent-%COMP%] {\n  margin-top: auto\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsVUFBVTtBQUNaOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFdBQVc7RUFDWCxVQUFVO0FBQ1o7O0FBRUE7RUFDRTtBQUNGIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBhZ2Uge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB6LWluZGV4OiAxO1xufVxuXG4uY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG5cbi5oZWFkZXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHdpZHRoOiAxMDAlO1xuICB6LWluZGV4OiAyO1xufVxuXG4uZm9vdGVyIHtcbiAgbWFyZ2luLXRvcDogYXV0b1xufVxuXG4iXX0= */"] });


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
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const review_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@carouselAnimation", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](review_r2.content);
} }
function AboutTestimonialsComponent_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AboutTestimonialsComponent_ng_container_8_div_1_Template, 2, 2, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const i_r3 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.currentSlideIndex === i_r3);
} }
function AboutTestimonialsComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 11);
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
AboutTestimonialsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AboutTestimonialsComponent, selectors: [["app-about-testimonials"]], decls: 13, vars: 2, consts: [[1, "container"], [1, "container-intro"], [1, "intro-title"], [1, "review"], [1, "review-block"], ["src", "./assets/leftarrow.png", 1, "slide-button", 3, "click"], [4, "ngFor", "ngForOf"], ["src", "./assets/rightarrow.png", 1, "slide-button", 3, "click"], [1, "pagination-dots"], ["class", "slide", 4, "ngIf"], [1, "slide"], [3, "ngClass"]], template: function AboutTestimonialsComponent_Template(rf, ctx) { if (rf & 1) {
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
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"]], styles: [".container[_ngcontent-%COMP%] {\n  background-color: whitesmoke;\n  color: #114347;\n  justify-content: center;\n}\n\n.container-intro[_ngcontent-%COMP%] {\n  text-align: center;\n  line-height: 3em;\n  padding-top: 50px;\n}\n\n.intro-title[_ngcontent-%COMP%] {\n  font-size: 30pt;\n}\n\n.intro-subtitle[_ngcontent-%COMP%] {\n  font-size: 15pt;\n}\n\n.review[_ngcontent-%COMP%] {\n  min-height: 250px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.review-block[_ngcontent-%COMP%] {\n  width: 350px;\n  height: 100%;\n  margin: 0 50px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  font-size: 15pt;\n}\n\n.slide[_ngcontent-%COMP%] {\n  position: absolute;\n  max-width: 500px;\n  transition: transform 150ms cubic-bezier(0.25, 0.46, 0.45, 0.84);\n}\n\n.pagination-dots[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n\n.dot[_ngcontent-%COMP%] {\n  height: 15px;\n  width: 15px;\n  background-color: #297C86;\n  border-radius: 50%;\n  display: inline-block;\n  margin: 15px;\n}\n\n.highDot[_ngcontent-%COMP%] {\n  height: 15px;\n  width: 15px;\n  background-color: #114347;\n  border-radius: 50%;\n  display: inline-block;\n  margin: 15px;\n}\n\n.slide-button[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  cursor: pointer;\n}\n\n.slide-button[_ngcontent-%COMP%]:hover {\n  opacity: 0.7;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFib3V0LXRlc3RpbW9uaWFscy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsNEJBQTRCO0VBQzVCLGNBQWM7RUFDZCx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7RUFDWixjQUFjO0VBQ2QsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGdFQUFnRTtBQUNsRTs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsWUFBWTtBQUNkIiwiZmlsZSI6ImFib3V0LXRlc3RpbW9uaWFscy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XG4gIGNvbG9yOiAjMTE0MzQ3O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmNvbnRhaW5lci1pbnRybyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbGluZS1oZWlnaHQ6IDNlbTtcbiAgcGFkZGluZy10b3A6IDUwcHg7XG59XG5cbi5pbnRyby10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMzBwdDtcbn1cblxuLmludHJvLXN1YnRpdGxlIHtcbiAgZm9udC1zaXplOiAxNXB0O1xufVxuXG4ucmV2aWV3IHtcbiAgbWluLWhlaWdodDogMjUwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ucmV2aWV3LWJsb2NrIHtcbiAgd2lkdGg6IDM1MHB4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1hcmdpbjogMCA1MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDE1cHQ7XG59XG5cbi5zbGlkZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbWF4LXdpZHRoOiA1MDBweDtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDE1MG1zIGN1YmljLWJlemllcigwLjI1LCAwLjQ2LCAwLjQ1LCAwLjg0KTtcbn1cblxuLnBhZ2luYXRpb24tZG90cyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uZG90IHtcbiAgaGVpZ2h0OiAxNXB4O1xuICB3aWR0aDogMTVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI5N0M4NjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbjogMTVweDtcbn1cblxuLmhpZ2hEb3Qge1xuICBoZWlnaHQ6IDE1cHg7XG4gIHdpZHRoOiAxNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTE0MzQ3O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luOiAxNXB4O1xufVxuXG4uc2xpZGUtYnV0dG9uIHtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uc2xpZGUtYnV0dG9uOmhvdmVyIHtcbiAgb3BhY2l0eTogMC43O1xufVxuIl19 */"], data: { animation: [
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
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./homepage/homepage.component */ "Oh3b");
/* harmony import */ var _services_services_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/services.component */ "KfLr");
/* harmony import */ var _homepage_homepage_introduction_introduction_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./homepage/homepage-introduction/introduction.component */ "lLp1");
/* harmony import */ var _homepage_homepage_services_services_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./homepage/homepage-services/services.component */ "dx5Q");
/* harmony import */ var _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./portfolio/portfolio.component */ "zyDg");
/* harmony import */ var _contacts_contacts_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./contacts/contacts.component */ "iZNs");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./about/about.component */ "84zG");
/* harmony import */ var _homepage_homepage_testimonials_testimonials_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./homepage/homepage-testimonials/testimonials.component */ "LXEp");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _about_about_introduction_about_introduction_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./about/about-introduction/about-introduction.component */ "Hmz7");
/* harmony import */ var _about_about_description_about_description_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./about/about-description/about-description.component */ "Ra19");
/* harmony import */ var _about_about_testimonials_about_testimonials_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./about/about-testimonials/about-testimonials.component */ "UAJw");
/* harmony import */ var _homepage_homepage_trust_homepage_trust_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./homepage/homepage-trust/homepage-trust.component */ "KBOi");
/* harmony import */ var _services_services_introduction_services_introduction_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./services/services-introduction/services-introduction.component */ "PnrC");
/* harmony import */ var _services_services_description_services_description_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./services/services-description/services-description.component */ "Q3ZX");
/* harmony import */ var _services_services_whyus_services_whyus_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./services/services-whyus/services-whyus.component */ "LJ0G");
/* harmony import */ var _services_services_howitworks_services_howitworks_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./services/services-howitworks/services-howitworks.component */ "oPSB");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/core */ "fXoL");




























class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__["MatTabsModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__["MatIconModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"].forRoot([
                { path: '', component: _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_9__["HomepageComponent"] },
                { path: 'about', component: _about_about_component__WEBPACK_IMPORTED_MODULE_15__["AboutComponent"] },
                { path: 'services', component: _services_services_component__WEBPACK_IMPORTED_MODULE_10__["ServicesComponent"], children: [
                        { path: 'development', component: _services_services_description_services_description_component__WEBPACK_IMPORTED_MODULE_23__["ServicesDescriptionComponent"] }
                    ] },
                { path: 'portfolio', component: _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_13__["PortfolioComponent"] },
                { path: 'contacts', component: _contacts_contacts_component__WEBPACK_IMPORTED_MODULE_14__["ContactsComponent"] },
                { path: '**', component: _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_9__["HomepageComponent"] },
            ], { anchorScrolling: 'enabled', onSameUrlNavigation: 'reload', scrollPositionRestoration: 'top' })
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"],
        _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"],
        _homepage_homepage_services_services_component__WEBPACK_IMPORTED_MODULE_12__["OffersComponent"],
        _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_9__["HomepageComponent"],
        _services_services_component__WEBPACK_IMPORTED_MODULE_10__["ServicesComponent"],
        _homepage_homepage_introduction_introduction_component__WEBPACK_IMPORTED_MODULE_11__["IntroductionComponent"],
        _homepage_homepage_services_services_component__WEBPACK_IMPORTED_MODULE_12__["OffersComponent"],
        _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_13__["PortfolioComponent"],
        _contacts_contacts_component__WEBPACK_IMPORTED_MODULE_14__["ContactsComponent"],
        _about_about_component__WEBPACK_IMPORTED_MODULE_15__["AboutComponent"],
        _homepage_homepage_testimonials_testimonials_component__WEBPACK_IMPORTED_MODULE_16__["TestimonialsComponent"],
        _about_about_introduction_about_introduction_component__WEBPACK_IMPORTED_MODULE_18__["AboutIntroductionComponent"],
        _about_about_description_about_description_component__WEBPACK_IMPORTED_MODULE_19__["AboutDescriptionComponent"],
        _about_about_testimonials_about_testimonials_component__WEBPACK_IMPORTED_MODULE_20__["AboutTestimonialsComponent"],
        _homepage_homepage_trust_homepage_trust_component__WEBPACK_IMPORTED_MODULE_21__["HomepageTrustComponent"],
        _services_services_introduction_services_introduction_component__WEBPACK_IMPORTED_MODULE_22__["ServicesIntroductionComponent"],
        _services_services_description_services_description_component__WEBPACK_IMPORTED_MODULE_23__["ServicesDescriptionComponent"],
        _services_services_whyus_services_whyus_component__WEBPACK_IMPORTED_MODULE_24__["ServicesWhyusComponent"],
        _services_services_howitworks_services_howitworks_component__WEBPACK_IMPORTED_MODULE_25__["ServicesHowitworksComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__["MatTabsModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__["MatIconModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"]] }); })();


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
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]], styles: ["img[_ngcontent-%COMP%] {\n  width: 110px;\n  height: 90px;\n}\n\n.container[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  background-color:whitesmoke;\n  color: #114347\n}\n\n.container-intro[_ngcontent-%COMP%] {\n  text-align: center;\n  line-height: 3em;\n  padding-top: 50px;\n}\n\n.intro-title[_ngcontent-%COMP%] {\n  font-size: 30pt;\n}\n\n.intro-subtitle[_ngcontent-%COMP%] {\n  font-size: 15pt;\n}\n\n.container-inner-blocks[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: center;\n  }\n\n.container-inner-block-instance[_ngcontent-%COMP%] {\n  background-color: #114347;\n  color: whitesmoke;\n  margin: 50px 50px 10px 50px;\n  width: 400px;\n  height: 370px;\n  border-radius: 10px;\n  transition: 0.25s;\n}\n\n.container-inner-block-instance[_ngcontent-%COMP%]:hover {\n  transform: scale(1.05);\n  transition: 0.25s;\n}\n\n.block-instance-content[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  text-align: center;\n  flex-direction: column;\n  align-items: center;\n}\n\n.content-image[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 130px;\n  width: 130px;\n}\n\n.content-title[_ngcontent-%COMP%] {\n  color: #FFC93C;\n  margin-top: 20px;\n  font-size: 30pt;\n  line-height: 100%;\n}\n\n.content-subtitle[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  font-size: 15pt;\n  width: 85%;\n}\n\n.component-button[_ngcontent-%COMP%] {\n  background-color: #FFC93C !important;\n  color: #114347;\n  font-size: 13pt;\n  opacity: 0.9;\n  margin-bottom: 40px;\n}\n\n.component-button[_ngcontent-%COMP%]:hover {\n  opacity: 0.7;\n}\n\n.smth[_ngcontent-%COMP%] {\n}\n\n.computer-image[_ngcontent-%COMP%] {\n    right: 0;\n    top: 50;\n    position: absolute;\n    width: 300px;\n    height: 400px;\n    z-index: inherit;\n}\n\n@media (max-width: 1400px) {\n  .container-inner-block-instance[_ngcontent-%COMP%] {\n      height: 400px;\n  }\n}\n\n@media (max-width: 1200px) {\n    .container-inner-block-instance[_ngcontent-%COMP%] {\n        margin: 50px 30px 10px 30px;\n    }\n    \n    .content-title[_ngcontent-%COMP%] {\n        font-size: 25pt;\n    }\n\n    .content-subtitle[_ngcontent-%COMP%] {\n        font-size: 14pt;\n    }\n}\n\n@media (max-width: 1025px) {\n    .container-inner-block-instance[_ngcontent-%COMP%] {\n        height: 420px;\n    }\n\n    .content-title[_ngcontent-%COMP%] {\n        font-size: 20pt;\n    }\n\n    .content-subtitle[_ngcontent-%COMP%] {\n        font-size: 13pt;\n    }\n}\n\n@media (max-width: 768px) {\n    .container[_ngcontent-%COMP%] {\n    }\n    \n    .container-inner-blocks[_ngcontent-%COMP%] {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n      \n}\n\n@media (max-width: 375px) {\n\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0VBQ1osWUFBWTtBQUNkOztBQUVBO0VBQ0UsY0FBYztFQUNkLFdBQVc7RUFDWCwyQkFBMkI7RUFDM0I7QUFDRjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsaUJBQWlCO0FBQ25COztBQUdBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0VBQ3pCOztBQUVGO0VBQ0UseUJBQXlCO0VBQ3pCLGlCQUFpQjtFQUNqQiwyQkFBMkI7RUFDM0IsWUFBWTtFQUNaLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsVUFBVTtBQUNaOztBQUVBO0VBQ0Usb0NBQW9DO0VBQ3BDLGNBQWM7RUFDZCxlQUFlO0VBQ2YsWUFBWTtFQUNaLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtBQUNBOztBQUVBO0lBQ0ksUUFBUTtJQUNSLE9BQU87SUFDUCxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGFBQWE7SUFDYixnQkFBZ0I7QUFDcEI7O0FBRUE7RUFDRTtNQUNJLGFBQWE7RUFDakI7QUFDRjs7QUFFQTtJQUNJO1FBQ0ksMkJBQTJCO0lBQy9COztJQUVBO1FBQ0ksZUFBZTtJQUNuQjs7SUFFQTtRQUNJLGVBQWU7SUFDbkI7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksYUFBYTtJQUNqQjs7SUFFQTtRQUNJLGVBQWU7SUFDbkI7O0lBRUE7UUFDSSxlQUFlO0lBQ25CO0FBQ0o7O0FBRUE7SUFDSTtJQUNBOztJQUVBO1FBQ0ksYUFBYTtRQUNiLHNCQUFzQjtRQUN0QixtQkFBbUI7TUFDckI7O0FBRU47O0FBRUE7O0FBRUEiLCJmaWxlIjoic2VydmljZXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImltZyB7XG4gIHdpZHRoOiAxMTBweDtcbiAgaGVpZ2h0OiA5MHB4O1xufVxuXG4uY29udGFpbmVyIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOndoaXRlc21va2U7XG4gIGNvbG9yOiAjMTE0MzQ3XG59XG5cbi5jb250YWluZXItaW50cm8ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGxpbmUtaGVpZ2h0OiAzZW07XG4gIHBhZGRpbmctdG9wOiA1MHB4O1xufVxuXG5cbi5pbnRyby10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMzBwdDtcbn1cblxuLmludHJvLXN1YnRpdGxlIHtcbiAgZm9udC1zaXplOiAxNXB0O1xufVxuXG4uY29udGFpbmVyLWlubmVyLWJsb2NrcyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgfSAgXG5cbi5jb250YWluZXItaW5uZXItYmxvY2staW5zdGFuY2Uge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTE0MzQ3O1xuICBjb2xvcjogd2hpdGVzbW9rZTtcbiAgbWFyZ2luOiA1MHB4IDUwcHggMTBweCA1MHB4O1xuICB3aWR0aDogNDAwcHg7XG4gIGhlaWdodDogMzcwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIHRyYW5zaXRpb246IDAuMjVzO1xufVxuXG4uY29udGFpbmVyLWlubmVyLWJsb2NrLWluc3RhbmNlOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcbiAgdHJhbnNpdGlvbjogMC4yNXM7XG59XG5cbi5ibG9jay1pbnN0YW5jZS1jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmNvbnRlbnQtaW1hZ2Uge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgaGVpZ2h0OiAxMzBweDtcbiAgd2lkdGg6IDEzMHB4O1xufVxuXG4uY29udGVudC10aXRsZSB7XG4gIGNvbG9yOiAjRkZDOTNDO1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBmb250LXNpemU6IDMwcHQ7XG4gIGxpbmUtaGVpZ2h0OiAxMDAlO1xufVxuXG4uY29udGVudC1zdWJ0aXRsZSB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIGZvbnQtc2l6ZTogMTVwdDtcbiAgd2lkdGg6IDg1JTtcbn1cblxuLmNvbXBvbmVudC1idXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZDOTNDICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjMTE0MzQ3O1xuICBmb250LXNpemU6IDEzcHQ7XG4gIG9wYWNpdHk6IDAuOTtcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcbn1cblxuLmNvbXBvbmVudC1idXR0b246aG92ZXIge1xuICBvcGFjaXR5OiAwLjc7XG59XG5cbi5zbXRoIHtcbn1cblxuLmNvbXB1dGVyLWltYWdlIHtcbiAgICByaWdodDogMDtcbiAgICB0b3A6IDUwO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMzAwcHg7XG4gICAgaGVpZ2h0OiA0MDBweDtcbiAgICB6LWluZGV4OiBpbmhlcml0O1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogMTQwMHB4KSB7XG4gIC5jb250YWluZXItaW5uZXItYmxvY2staW5zdGFuY2Uge1xuICAgICAgaGVpZ2h0OiA0MDBweDtcbiAgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogMTIwMHB4KSB7XG4gICAgLmNvbnRhaW5lci1pbm5lci1ibG9jay1pbnN0YW5jZSB7XG4gICAgICAgIG1hcmdpbjogNTBweCAzMHB4IDEwcHggMzBweDtcbiAgICB9XG4gICAgXG4gICAgLmNvbnRlbnQtdGl0bGUge1xuICAgICAgICBmb250LXNpemU6IDI1cHQ7XG4gICAgfVxuXG4gICAgLmNvbnRlbnQtc3VidGl0bGUge1xuICAgICAgICBmb250LXNpemU6IDE0cHQ7XG4gICAgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogMTAyNXB4KSB7XG4gICAgLmNvbnRhaW5lci1pbm5lci1ibG9jay1pbnN0YW5jZSB7XG4gICAgICAgIGhlaWdodDogNDIwcHg7XG4gICAgfVxuXG4gICAgLmNvbnRlbnQtdGl0bGUge1xuICAgICAgICBmb250LXNpemU6IDIwcHQ7XG4gICAgfVxuXG4gICAgLmNvbnRlbnQtc3VidGl0bGUge1xuICAgICAgICBmb250LXNpemU6IDEzcHQ7XG4gICAgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAuY29udGFpbmVyIHtcbiAgICB9XG4gICAgXG4gICAgLmNvbnRhaW5lci1pbm5lci1ibG9ja3Mge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgfVxuICAgICAgXG59ICAgXG5cbkBtZWRpYSAobWF4LXdpZHRoOiAzNzVweCkge1xuXG59XG5cbiJdfQ== */"] });


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



function HeaderComponent_div_27_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_div_27_Template_li_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1.toggleSideMenu(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Hjem");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_div_27_Template_li_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.toggleSideMenu(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Tjenester");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_div_27_Template_li_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.toggleSideMenu(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Om oss");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_div_27_Template_li_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.toggleSideMenu(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 18);
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
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 28, vars: 1, consts: [[1, "header"], [1, "header-inner"], ["routerLink", "", 2, "color", "#FFC93C", 3, "click"], [1, "nav"], ["routerLink", ""], [1, "dropdown"], [1, "dropbtn"], ["routerLink", "services"], [1, "dropdown-content"], ["routerLink", "services", "fragment", "development"], ["routerLink", "services", "fragment", "marketing"], ["routerLink", "about"], ["routerLink", "contacts", 1, "contact-button"], [1, "burger-menu-button", 3, "click"], ["src", "./assets/menu.png"], ["class", "burger-menu-container", 4, "ngIf"], [1, "burger-menu-container"], [1, "container-link", 3, "click"], ["routerLink", "contacts"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_2_listener() { return ctx.sideMenuIsOpened ? ctx.toggleSideMenu() : undefined; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "WEBBYNAVIA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nav", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Hjem");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Tjenester");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Nettside");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Markedsf\u00F8ring");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Om oss");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Kontakt oss");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_div_click_25_listener() { return ctx.toggleSideMenu(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, HeaderComponent_div_27_Template, 14, 0, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.sideMenuIsOpened);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: ["ul[_ngcontent-%COMP%] {\n  list-style-type: none;\n}\n\na[_ngcontent-%COMP%]:focus {\n    -webkit-tap-highlight-color: transparent;\n}\n\na[_ngcontent-%COMP%] {\n  color: whitesmoke;\n}\n\n.header[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 60px;\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n  background-color: #114347\n}\n\n.header-inner[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin-left: 100px;\n  font-size: 20pt;\n  letter-spacing: 7px;\n}\n\n.nav[_ngcontent-%COMP%] {\n  align-items: center;\n  display:flex;\n}\n\n.nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: inline;\n  margin-right: 60px;\n}\n\n.nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  padding: 22px 15px;\n}\n\nli[_ngcontent-%COMP%]:last-child {\n  margin-right: 0;\n}\n\n.dropbtn[_ngcontent-%COMP%] {\n  display: inline;\n}\n\n.dropdown[_ngcontent-%COMP%] {\n  display: inline;\n}\n\n.dropdown-content[_ngcontent-%COMP%] {\n  display: none;\n  margin-top: 23px;\n  position: absolute;\n  margin-left: 123px;\n  background-color: #114347;\n  min-width: 230px;\n  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);\n  z-index: 1;\n}\n\n.dropdown-content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: whitesmoke;\n  padding: 14px 16px;\n  text-decoration: none;\n  display: block;\n}\n\n.dropdown-content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background-color: #297C86;\n  color: whitesmoke;\n}\n\n.dropdown[_ngcontent-%COMP%]:hover   .dropdown-content[_ngcontent-%COMP%] {display: block;}\n\n.contact-button[_ngcontent-%COMP%] {\n  background-color: #297C86;\n  padding-top: 10px !important;\n  padding-bottom: 10px !important;\n  border-radius: 5px;\n}\n\n.burger-menu-button[_ngcontent-%COMP%] {\n    display: none;\n    margin-right: 20px;\n    margin-top: -10px;\n    -webkit-tap-highlight-color: transparent;\n  }\n\n.burger-menu-button[_ngcontent-%COMP%] {\n      width: 30px;\n      height: 30px;\n  }\n\n.burger-menu-container[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 60px;\n    right: 0;\n    background-color:#114347e3;\n    height: 150vh;\n    width: 100%;\n    box-shadow: 0 10px 15px rgba(0,0,0,0.3);\n  }\n\n.burger-menu-container[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    height: 40px;\n    text-align: center;\n    margin: 30px 90px;\n    border-bottom: 1px solid rgb(158, 145, 145);\n  }\n\n.burger-menu-container[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    display: block;\n  }\n\n.contacts-button[_ngcontent-%COMP%] {\n    background-color: whitesmoke;\n    color: #135aac;\n    border-radius: 30px;\n  }\n\n@media (hover: hover) {\n    a[_ngcontent-%COMP%]:hover {\n      opacity: 0.7;\n      cursor: pointer;\n    }\n  }\n\n@media (max-width: 1025px) {\n    .nav[_ngcontent-%COMP%] {\n      display: none;\n    }\n\n    .header[_ngcontent-%COMP%] {\n      padding: 25px 0;\n    }\n\n    .header-inner[_ngcontent-%COMP%] {\n      margin-left: 5%;\n      font-size: 16pt;\n    }\n  \n    .logo[_ngcontent-%COMP%] {\n      margin-left: 30px;\n    }\n  \n    .burger-menu-button[_ngcontent-%COMP%] {\n      display: flex;\n    }\n  }\n\n@media (max-width: 768px) {\n    .container[_ngcontent-%COMP%] {\n        \n    }\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0lBQ0ksd0NBQXdDO0FBQzVDOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLE1BQU07RUFDTixPQUFPO0VBQ1AsUUFBUTtFQUNSLFlBQVk7RUFDWixhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLFdBQVc7RUFDWDtBQUNGOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixnQkFBZ0I7RUFDaEIsNENBQTRDO0VBQzVDLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsaUJBQWlCO0FBQ25COztBQUVBLG1DQUFtQyxjQUFjLENBQUM7O0FBRWxEO0VBQ0UseUJBQXlCO0VBQ3pCLDRCQUE0QjtFQUM1QiwrQkFBK0I7RUFDL0Isa0JBQWtCO0FBQ3BCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsd0NBQXdDO0VBQzFDOztBQUVBO01BQ0ksV0FBVztNQUNYLFlBQVk7RUFDaEI7O0FBRUE7SUFDRSxrQkFBa0I7SUFDbEIsU0FBUztJQUNULFFBQVE7SUFDUiwwQkFBMEI7SUFDMUIsYUFBYTtJQUNiLFdBQVc7SUFDWCx1Q0FBdUM7RUFDekM7O0FBRUE7SUFDRSxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQiwyQ0FBMkM7RUFDN0M7O0FBRUE7SUFDRSxjQUFjO0VBQ2hCOztBQUVBO0lBQ0UsNEJBQTRCO0lBQzVCLGNBQWM7SUFDZCxtQkFBbUI7RUFDckI7O0FBRUE7SUFDRTtNQUNFLFlBQVk7TUFDWixlQUFlO0lBQ2pCO0VBQ0Y7O0FBRUE7SUFDRTtNQUNFLGFBQWE7SUFDZjs7SUFFQTtNQUNFLGVBQWU7SUFDakI7O0lBRUE7TUFDRSxlQUFlO01BQ2YsZUFBZTtJQUNqQjs7SUFFQTtNQUNFLGlCQUFpQjtJQUNuQjs7SUFFQTtNQUNFLGFBQWE7SUFDZjtFQUNGOztBQUVBO0lBQ0U7O0lBRUE7RUFDRiIsImZpbGUiOiJoZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInVsIHtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xufVxuXG5hOmZvY3VzIHtcbiAgICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG5hIHtcbiAgY29sb3I6IHdoaXRlc21va2U7XG59XG5cbi5oZWFkZXIge1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBoZWlnaHQ6IDYwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxMTQzNDdcbn1cblxuLmhlYWRlci1pbm5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi1sZWZ0OiAxMDBweDtcbiAgZm9udC1zaXplOiAyMHB0O1xuICBsZXR0ZXItc3BhY2luZzogN3B4O1xufVxuXG4ubmF2IHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZGlzcGxheTpmbGV4O1xufVxuXG4ubmF2IGxpIHtcbiAgZGlzcGxheTogaW5saW5lO1xuICBtYXJnaW4tcmlnaHQ6IDYwcHg7XG59XG5cbi5uYXYgYSB7XG4gIHBhZGRpbmc6IDIycHggMTVweDtcbn1cblxubGk6bGFzdC1jaGlsZCB7XG4gIG1hcmdpbi1yaWdodDogMDtcbn1cblxuLmRyb3BidG4ge1xuICBkaXNwbGF5OiBpbmxpbmU7XG59XG5cbi5kcm9wZG93biB7XG4gIGRpc3BsYXk6IGlubGluZTtcbn1cblxuLmRyb3Bkb3duLWNvbnRlbnQge1xuICBkaXNwbGF5OiBub25lO1xuICBtYXJnaW4tdG9wOiAyM3B4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG1hcmdpbi1sZWZ0OiAxMjNweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzExNDM0NztcbiAgbWluLXdpZHRoOiAyMzBweDtcbiAgYm94LXNoYWRvdzogMHB4IDhweCAxNnB4IDBweCByZ2JhKDAsMCwwLDAuMik7XG4gIHotaW5kZXg6IDE7XG59XG5cbi5kcm9wZG93bi1jb250ZW50IGEge1xuICBjb2xvcjogd2hpdGVzbW9rZTtcbiAgcGFkZGluZzogMTRweCAxNnB4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uZHJvcGRvd24tY29udGVudCBhOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI5N0M4NjtcbiAgY29sb3I6IHdoaXRlc21va2U7XG59XG5cbi5kcm9wZG93bjpob3ZlciAuZHJvcGRvd24tY29udGVudCB7ZGlzcGxheTogYmxvY2s7fVxuXG4uY29udGFjdC1idXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjk3Qzg2O1xuICBwYWRkaW5nLXRvcDogMTBweCAhaW1wb3J0YW50O1xuICBwYWRkaW5nLWJvdHRvbTogMTBweCAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi5idXJnZXItbWVudS1idXR0b24ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICAgIG1hcmdpbi10b3A6IC0xMHB4O1xuICAgIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIH1cblxuICAuYnVyZ2VyLW1lbnUtYnV0dG9uIHtcbiAgICAgIHdpZHRoOiAzMHB4O1xuICAgICAgaGVpZ2h0OiAzMHB4O1xuICB9XG5cbiAgLmJ1cmdlci1tZW51LWNvbnRhaW5lciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNjBweDtcbiAgICByaWdodDogMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiMxMTQzNDdlMztcbiAgICBoZWlnaHQ6IDE1MHZoO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJveC1zaGFkb3c6IDAgMTBweCAxNXB4IHJnYmEoMCwwLDAsMC4zKTtcbiAgfVxuICBcbiAgLmJ1cmdlci1tZW51LWNvbnRhaW5lciBsaSB7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW46IDMwcHggOTBweDtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiKDE1OCwgMTQ1LCAxNDUpO1xuICB9XG4gIFxuICAuYnVyZ2VyLW1lbnUtY29udGFpbmVyIGxpIGEge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG4gIFxuICAuY29udGFjdHMtYnV0dG9uIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xuICAgIGNvbG9yOiAjMTM1YWFjO1xuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gIH1cbiAgXG4gIEBtZWRpYSAoaG92ZXI6IGhvdmVyKSB7XG4gICAgYTpob3ZlciB7XG4gICAgICBvcGFjaXR5OiAwLjc7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxuICB9XG4gIFxuICBAbWVkaWEgKG1heC13aWR0aDogMTAyNXB4KSB7XG4gICAgLm5hdiB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cblxuICAgIC5oZWFkZXIge1xuICAgICAgcGFkZGluZzogMjVweCAwO1xuICAgIH1cblxuICAgIC5oZWFkZXItaW5uZXIge1xuICAgICAgbWFyZ2luLWxlZnQ6IDUlO1xuICAgICAgZm9udC1zaXplOiAxNnB0O1xuICAgIH1cbiAgXG4gICAgLmxvZ28ge1xuICAgICAgbWFyZ2luLWxlZnQ6IDMwcHg7XG4gICAgfVxuICBcbiAgICAuYnVyZ2VyLW1lbnUtYnV0dG9uIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgfVxuICB9XG5cbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgLmNvbnRhaW5lciB7XG4gICAgICAgIFxuICAgIH1cbiAgfSJdfQ== */"] });


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
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 24, vars: 0, consts: [[1, "footer"], [1, "footer-container"], [1, "footer-container-logo"], ["routerLink", "", 2, "color", "#FFC93C"], [1, "footer-container-text"], [1, "footer-container-text-item"], [1, "text-item-image"], ["src", "./assets/email-footer.png", 1, "image"], [1, "text-item-information"], ["target", "_blank", "href", "mailto:business@webbynavia.no"], ["src", "./assets/phone-footer.png", 1, "image"], ["href", "tel:+46790686069"], ["src", "./assets/location-footer.png", 1, "image"], ["target", "_blank", "href", "http://maps.google.com/?q=Ignaveien%20125,%201912%20Enebakk,%20Norge"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "WEBBYNAVIA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "business@webbynavia.no");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "+46 790686069");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Ignaveien 125, 1912 Enebakk, Norge");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: ["ul[_ngcontent-%COMP%] {\n  list-style-type: none;\n}\n\na[_ngcontent-%COMP%] {\n  color: whitesmoke;\n}\n\na[_ngcontent-%COMP%]:hover {\n  opacity: 0.7;\n  cursor: pointer;\n}\n\n.footer[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 150px;\n  background-color:#114347;\n}\n\n.footer-container[_ngcontent-%COMP%] {\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.footer-container-logo[_ngcontent-%COMP%] {\n  margin-left: 100px;\n  font-size: 20pt;\n  letter-spacing: 7px;\n}\n\n.footer-container-text[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.footer-container-text-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  height: 50px;\n  margin-right: 50px;\n}\n\n.image[_ngcontent-%COMP%] {\n  width: auto;\n  height: 30px;\n  margin-right: 10px;\n}\n\n.text-item-image[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n.text-item-information[_ngcontent-%COMP%] {\n  height: 32px;\n  display: flex;\n  align-items: center;\n  font-size: 12pt;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsWUFBWTtFQUNaLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsZUFBZTtBQUNqQiIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInVsIHtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xufVxuXG5hIHtcbiAgY29sb3I6IHdoaXRlc21va2U7XG59XG5cbmE6aG92ZXIge1xuICBvcGFjaXR5OiAwLjc7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmZvb3RlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDE1MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiMxMTQzNDc7XG59XG5cbi5mb290ZXItY29udGFpbmVyIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5mb290ZXItY29udGFpbmVyLWxvZ28ge1xuICBtYXJnaW4tbGVmdDogMTAwcHg7XG4gIGZvbnQtc2l6ZTogMjBwdDtcbiAgbGV0dGVyLXNwYWNpbmc6IDdweDtcbn1cblxuLmZvb3Rlci1jb250YWluZXItdGV4dCB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5mb290ZXItY29udGFpbmVyLXRleHQtaXRlbSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDogNTBweDtcbiAgbWFyZ2luLXJpZ2h0OiA1MHB4O1xufVxuXG4uaW1hZ2Uge1xuICB3aWR0aDogYXV0bztcbiAgaGVpZ2h0OiAzMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG5cbi50ZXh0LWl0ZW0taW1hZ2Uge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4udGV4dC1pdGVtLWluZm9ybWF0aW9uIHtcbiAgaGVpZ2h0OiAzMnB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmb250LXNpemU6IDEycHQ7XG59XG4iXX0= */"] });


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
ContactsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactsComponent, selectors: [["app-contacts"]], decls: 19, vars: 1, consts: [[1, "container"], [1, "container-intro"], [1, "intro-title"], [1, "container-inner"], ["name", "hidden_iframe", "id", "hidden_iframe", 2, "display", "none"], ["action", "https://docs.google.com/forms/d/e/1FAIpQLScwkjxYT5SHun7IoMghh96OdoSWs8i_wbXoQTRLrkaleTLajw/formResponse", "method", "post", "target", "hidden_iframe", 3, "submit"], [1, "container-inner-content"], ["type", "text", "placeholder", "Ditt navn*", "name", "entry.2005620554", "required", "", 1, "component-input"], ["type", "email", "placeholder", "E-post*", "name", "entry.1045781291", "required", "", 1, "component-input"], ["type", "number", "placeholder", "Telefon*", "name", "entry.818882853", "required", "", 1, "component-input"], ["rows", "10", "placeholder", "Beskriv hva du er p\u00E5 jakt etter s\u00E5 snakker vi n\u00E6rmere om det p\u00E5 telefon*", "name", "entry.839337160", "required", "", 1, "component-input"], [1, "component-inner-button"], ["type", "submit", "id", "button", 1, "component-button"], ["class", "modal", 3, "click", 4, "ngIf"], [1, "modal", 3, "click"], [1, "modal-content", 3, "mouseleave", "mouseenter"], [1, "close-button-element"], ["src", "./assets/cross.png", 1, "close-button", 3, "click"], [1, "close-container"], [1, "close-container-image"], ["src", "./assets/mail.png", 1, "close-container-image"], [1, "close-container-text"], [1, "close-container-text-title"], [1, "close-container-text-subtitle"]], template: function ContactsComponent_Template(rf, ctx) { if (rf & 1) {
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
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: [".container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  background-color: whitesmoke;\n  color: #114347;\n}\n\n.container-intro[_ngcontent-%COMP%] {\n  padding-top: 120px;\n  text-align: center;\n  line-height: 3em;\n}\n\n.intro-title[_ngcontent-%COMP%] {\n  font-size: 30pt;\n}\n\n.intro-subtitle[_ngcontent-%COMP%] {\n  font-size: 15pt;\n}\n\n.container-inner[_ngcontent-%COMP%] {\n  margin-top: 40px;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.container-inner-content[_ngcontent-%COMP%] {\n  width: 60vh;\n  display: flex;\n  justify-content: center;\n  font-size: 15pt;\n  margin: 30px;\n  line-height: 1.4em;\n}\n\n.component-input[_ngcontent-%COMP%] {\n  border-radius: 5px;\n  background-color: whitesmoke;\n  color: #114347;\n  width: 100%;\n  min-height: 40px;\n  max-height: 300px;\n  border: none;\n  text-decoration: none;\n  display: inline-block;\n  border-radius: 12px;\n  outline: none;\n  box-shadow: 0 1px 4px rgb(20 50 0 / 30%);\n  padding: 15px;\n}\n\n.component-inner-button[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  margin: 50px 0;\n}\n\n.component-button[_ngcontent-%COMP%] {\n  background-color: #FFC93C !important;\n  color: #114347;\n}\n\n.component-button[_ngcontent-%COMP%]:hover {\n  opacity: 0.7;\n}\n\n.container-successful-message[_ngcontent-%COMP%] {\n  background-color: rgba(20, 22, 44, 0.95);\n  padding: 40px 40px 0 40px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.whitespace[_ngcontent-%COMP%] {\n  padding: 10px;\n}\n\n.message[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.modal[_ngcontent-%COMP%] {\n  position: fixed;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 5;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.4);\n  overflow: hidden;\n}\n\n.modal-content[_ngcontent-%COMP%] {\n  background-color: whitesmoke;\n  width: 700px;\n  height: 400px;\n  border-radius: 15px;\n}\n\n.close-button-element[_ngcontent-%COMP%] {\n  width: inherit;\n  text-align: right;\n  padding: 25px 25px 0 0;\n  color: red;\n  font-size: 20pt;\n  z-index: 10;\n}\n\n.close-button[_ngcontent-%COMP%] {\n  width: 25px;\n  height: 25px;\n}\n\n.close-button[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  opacity: 0.7;\n}\n\n.close-container[_ngcontent-%COMP%] {\n  background-color: whitesmoke;\n  color: #114347;\n  margin-top: 20px;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  border-radius: 15px;\n}\n\n.close-container-image[_ngcontent-%COMP%] {\n  width: 150px;\n}\n\n.close-container-text[_ngcontent-%COMP%] {\n  margin-top: 5%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  max-width: 90%;\n}\n\n.close-container-text-title[_ngcontent-%COMP%] {\n  margin: 10px;\n  font-size: 20pt;\n}\n\n.close-container-text-subtitle[_ngcontent-%COMP%] {\n  margin: 20px;\n  font-size: 15pt;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhY3RzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLDRCQUE0QjtFQUM1QixjQUFjO0FBQ2hCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixlQUFlO0VBQ2YsWUFBWTtFQUNaLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQiw0QkFBNEI7RUFDNUIsY0FBYztFQUNkLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixxQkFBcUI7RUFDckIscUJBQXFCO0VBQ3JCLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2Isd0NBQXdDO0VBQ3hDLGFBQWE7QUFDZjs7QUFHQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLG9DQUFvQztFQUNwQyxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0Usd0NBQXdDO0VBQ3hDLHlCQUF5QjtFQUN6QixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixVQUFVO0VBQ1YsTUFBTTtFQUNOLFdBQVc7RUFDWCxZQUFZO0VBQ1osb0NBQW9DO0VBQ3BDLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLDRCQUE0QjtFQUM1QixZQUFZO0VBQ1osYUFBYTtFQUNiLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsc0JBQXNCO0VBQ3RCLFVBQVU7RUFDVixlQUFlO0VBQ2YsV0FBVztBQUNiOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGVBQWU7RUFDZixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSw0QkFBNEI7RUFDNUIsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsWUFBWTtFQUNaLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGVBQWU7QUFDakIiLCJmaWxlIjoiY29udGFjdHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xuICBjb2xvcjogIzExNDM0Nztcbn1cblxuLmNvbnRhaW5lci1pbnRybyB7XG4gIHBhZGRpbmctdG9wOiAxMjBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBsaW5lLWhlaWdodDogM2VtO1xufVxuXG4uaW50cm8tdGl0bGUge1xuICBmb250LXNpemU6IDMwcHQ7XG59XG5cbi5pbnRyby1zdWJ0aXRsZSB7XG4gIGZvbnQtc2l6ZTogMTVwdDtcbn1cblxuLmNvbnRhaW5lci1pbm5lciB7XG4gIG1hcmdpbi10b3A6IDQwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmNvbnRhaW5lci1pbm5lci1jb250ZW50IHtcbiAgd2lkdGg6IDYwdmg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmb250LXNpemU6IDE1cHQ7XG4gIG1hcmdpbjogMzBweDtcbiAgbGluZS1oZWlnaHQ6IDEuNGVtO1xufVxuXG4uY29tcG9uZW50LWlucHV0IHtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xuICBjb2xvcjogIzExNDM0NztcbiAgd2lkdGg6IDEwMCU7XG4gIG1pbi1oZWlnaHQ6IDQwcHg7XG4gIG1heC1oZWlnaHQ6IDMwMHB4O1xuICBib3JkZXI6IG5vbmU7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBvdXRsaW5lOiBub25lO1xuICBib3gtc2hhZG93OiAwIDFweCA0cHggcmdiKDIwIDUwIDAgLyAzMCUpO1xuICBwYWRkaW5nOiAxNXB4O1xufVxuXG5cbi5jb21wb25lbnQtaW5uZXItYnV0dG9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbjogNTBweCAwO1xufVxuXG4uY29tcG9uZW50LWJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkM5M0MgIWltcG9ydGFudDtcbiAgY29sb3I6ICMxMTQzNDc7XG59XG5cbi5jb21wb25lbnQtYnV0dG9uOmhvdmVyIHtcbiAgb3BhY2l0eTogMC43O1xufVxuXG4uY29udGFpbmVyLXN1Y2Nlc3NmdWwtbWVzc2FnZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjAsIDIyLCA0NCwgMC45NSk7XG4gIHBhZGRpbmc6IDQwcHggNDBweCAwIDQwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4ud2hpdGVzcGFjZSB7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5cbi5tZXNzYWdlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ubW9kYWwge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB6LWluZGV4OiA1O1xuICB0b3A6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLm1vZGFsLWNvbnRlbnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xuICB3aWR0aDogNzAwcHg7XG4gIGhlaWdodDogNDAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG59XG5cbi5jbG9zZS1idXR0b24tZWxlbWVudCB7XG4gIHdpZHRoOiBpbmhlcml0O1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgcGFkZGluZzogMjVweCAyNXB4IDAgMDtcbiAgY29sb3I6IHJlZDtcbiAgZm9udC1zaXplOiAyMHB0O1xuICB6LWluZGV4OiAxMDtcbn1cblxuLmNsb3NlLWJ1dHRvbiB7XG4gIHdpZHRoOiAyNXB4O1xuICBoZWlnaHQ6IDI1cHg7XG59XG5cbi5jbG9zZS1idXR0b246aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG9wYWNpdHk6IDAuNztcbn1cblxuLmNsb3NlLWNvbnRhaW5lciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XG4gIGNvbG9yOiAjMTE0MzQ3O1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG59XG5cbi5jbG9zZS1jb250YWluZXItaW1hZ2Uge1xuICB3aWR0aDogMTUwcHg7XG59XG5cbi5jbG9zZS1jb250YWluZXItdGV4dCB7XG4gIG1hcmdpbi10b3A6IDUlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXgtd2lkdGg6IDkwJTtcbn1cblxuLmNsb3NlLWNvbnRhaW5lci10ZXh0LXRpdGxlIHtcbiAgbWFyZ2luOiAxMHB4O1xuICBmb250LXNpemU6IDIwcHQ7XG59XG5cbi5jbG9zZS1jb250YWluZXItdGV4dC1zdWJ0aXRsZSB7XG4gIG1hcmdpbjogMjBweDtcbiAgZm9udC1zaXplOiAxNXB0O1xufVxuIl19 */"] });


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
IntroductionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: IntroductionComponent, selectors: [["app-homepage-introduction"]], decls: 22, vars: 0, consts: [[1, "container"], [1, "container-inner-title"], [1, "container-inner-title-content"], [2, "color", "#ffc93c"], [1, "container-inner-subtitle"], [1, "container-inner-button"], ["id", "button", "routerLink", "contacts", 1, "component-button"]], template: function IntroductionComponent_Template(rf, ctx) { if (rf & 1) {
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
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]], styles: [".container[_ngcontent-%COMP%] {\n  min-height: 700px;\n  background-color: #114347;\n  background-image: url('homeimage.png');\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n  color: whitesmoke;\n}\n\n.container-inner-title[_ngcontent-%COMP%] {\n  padding-top: 23vh;\n  font-size: 45pt;\n  line-height: 100%;\n  display: flex;\n  justify-content: center;\n  text-align: center;\n}\n\n.container-inner-title-content[_ngcontent-%COMP%] {\n  max-width: 900px;\n}\n\n.container-inner-subtitle[_ngcontent-%COMP%] {\n  margin-top: 50px;\n  text-align: center;\n  font-size: 15pt;\n}\n\n.container-inner-button[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  margin-top: 75px;\n}\n\n.component-button[_ngcontent-%COMP%] {\n  width: 300px !important;\n  height: 50px !important;\n  background-color: #ffc93c !important;\n  color: #114347;\n  font-size: 18pt;\n}\n\n@media (hover: hover) {\n    .component-button[_ngcontent-%COMP%]:hover {\n        opacity: 0.7;\n      }\n  }\n\n@media(max-width: 1025px) {\n    .container[_ngcontent-%COMP%] {\n        min-height: 550px;\n    }\n    \n    .container-inner-title[_ngcontent-%COMP%] {\n      padding-top: 18vh;\n      margin: auto 30px;\n    }\n\n    .container-inner-subtitle[_ngcontent-%COMP%] {\n      margin-left: 30px;\n      margin-right: 30px;\n    }\n}\n\n@media(max-width: 768px) {\n    .container-inner-title[_ngcontent-%COMP%] {\n        font-size: 35pt;\n      }\n\n    .component-button[_ngcontent-%COMP%] {\n        width: 250px !important;\n    }\n}\n\n@media(max-width: 400px) {\n    .container[_ngcontent-%COMP%] {\n        min-height: 700px;\n    }\n    \n    .container-inner-title[_ngcontent-%COMP%] {\n        padding-top: 20vh;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImludHJvZHVjdGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQWlCO0VBQ2pCLHlCQUF5QjtFQUN6QixzQ0FBNkQ7RUFDN0Qsc0JBQXNCO0VBQ3RCLDJCQUEyQjtFQUMzQiw0QkFBNEI7RUFDNUIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2Qix1QkFBdUI7RUFDdkIsb0NBQW9DO0VBQ3BDLGNBQWM7RUFDZCxlQUFlO0FBQ2pCOztBQUVBO0lBQ0k7UUFDSSxZQUFZO01BQ2Q7RUFDSjs7QUFFRjtJQUNJO1FBQ0ksaUJBQWlCO0lBQ3JCOztJQUVBO01BQ0UsaUJBQWlCO01BQ2pCLGlCQUFpQjtJQUNuQjs7SUFFQTtNQUNFLGlCQUFpQjtNQUNqQixrQkFBa0I7SUFDcEI7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksZUFBZTtNQUNqQjs7SUFFRjtRQUNJLHVCQUF1QjtJQUMzQjtBQUNKOztBQUVBO0lBQ0k7UUFDSSxpQkFBaUI7SUFDckI7O0lBRUE7UUFDSSxpQkFBaUI7SUFDckI7QUFDSiIsImZpbGUiOiJpbnRyb2R1Y3Rpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xuICBtaW4taGVpZ2h0OiA3MDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzExNDM0NztcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vLi4vc3JjL2Fzc2V0cy9ob21laW1hZ2UucG5nXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGNvbG9yOiB3aGl0ZXNtb2tlO1xufVxuXG4uY29udGFpbmVyLWlubmVyLXRpdGxlIHtcbiAgcGFkZGluZy10b3A6IDIzdmg7XG4gIGZvbnQtc2l6ZTogNDVwdDtcbiAgbGluZS1oZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5jb250YWluZXItaW5uZXItdGl0bGUtY29udGVudCB7XG4gIG1heC13aWR0aDogOTAwcHg7XG59XG5cbi5jb250YWluZXItaW5uZXItc3VidGl0bGUge1xuICBtYXJnaW4tdG9wOiA1MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTVwdDtcbn1cblxuLmNvbnRhaW5lci1pbm5lci1idXR0b24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogNzVweDtcbn1cblxuLmNvbXBvbmVudC1idXR0b24ge1xuICB3aWR0aDogMzAwcHggIWltcG9ydGFudDtcbiAgaGVpZ2h0OiA1MHB4ICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmM5M2MgIWltcG9ydGFudDtcbiAgY29sb3I6ICMxMTQzNDc7XG4gIGZvbnQtc2l6ZTogMThwdDtcbn1cblxuQG1lZGlhIChob3ZlcjogaG92ZXIpIHtcbiAgICAuY29tcG9uZW50LWJ1dHRvbjpob3ZlciB7XG4gICAgICAgIG9wYWNpdHk6IDAuNztcbiAgICAgIH1cbiAgfVxuXG5AbWVkaWEobWF4LXdpZHRoOiAxMDI1cHgpIHtcbiAgICAuY29udGFpbmVyIHtcbiAgICAgICAgbWluLWhlaWdodDogNTUwcHg7XG4gICAgfVxuICAgIFxuICAgIC5jb250YWluZXItaW5uZXItdGl0bGUge1xuICAgICAgcGFkZGluZy10b3A6IDE4dmg7XG4gICAgICBtYXJnaW46IGF1dG8gMzBweDtcbiAgICB9XG5cbiAgICAuY29udGFpbmVyLWlubmVyLXN1YnRpdGxlIHtcbiAgICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xuICAgICAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xuICAgIH1cbn1cbiBcbkBtZWRpYShtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgLmNvbnRhaW5lci1pbm5lci10aXRsZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMzVwdDtcbiAgICAgIH1cblxuICAgIC5jb21wb25lbnQtYnV0dG9uIHtcbiAgICAgICAgd2lkdGg6IDI1MHB4ICFpbXBvcnRhbnQ7XG4gICAgfVxufVxuXG5AbWVkaWEobWF4LXdpZHRoOiA0MDBweCkge1xuICAgIC5jb250YWluZXIge1xuICAgICAgICBtaW4taGVpZ2h0OiA3MDBweDtcbiAgICB9XG4gICAgXG4gICAgLmNvbnRhaW5lci1pbm5lci10aXRsZSB7XG4gICAgICAgIHBhZGRpbmctdG9wOiAyMHZoO1xuICAgIH1cbn0iXX0= */"] });


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
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]], styles: [".container[_ngcontent-%COMP%] {\n  width: 100%;\n  background-color: whitesmoke;\n  color: #114347;\n}\n\n.container-inner[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.container-title[_ngcontent-%COMP%] {\n  margin-top: 80px;\n  font-size: 30pt;\n}\n\n.container-second-title[_ngcontent-%COMP%] {\n  margin: 70px 0 15px 0;\n  font-size: 30pt;\n  display: flex;\n  justify-content: left;\n  width: 90%;\n}\n\n.container-second-subtitle[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: left;\n  width: 90%;\n  font-size: 15pt;\n}\n\n.container-inner-content[_ngcontent-%COMP%] {\n  border-left: 15% solid red;\n  width: 50%;\n  height: 150px;\n  margin-top: 30px;\n  padding: 30px 30px 30px 0;\n  display: flex;\n  align-items: center;\n  border-radius: 10px;\n  background-color: #114347;\n  color: whitesmoke;\n  transition: 0.25s;\n}\n\n.container-inner-content[_ngcontent-%COMP%]:hover {\n  transform: scale(1.03);\n  transition: 0.25s;\n}\n\n.container-inner-plus-content[_ngcontent-%COMP%] {\n  margin: 40px 0 10px 0;\n  font-size: 20pt;\n  width: 45%;\n  text-align: center;\n}\n\n.container-inner-content[_ngcontent-%COMP%]:nth-child(2) {\n  margin-top: 70px;\n}\n\n.container-inner-content-image[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 30pt;\n  height: inherit;\n  border-top-left-radius: 10px;\n  border-bottom-left-radius: 10px;\n  background-color: #297C86;\n  width: 100px;\n}\n\n.container-inner-content-text[_ngcontent-%COMP%] {\n  margin-left: 20px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  height: 100px;\n  width: 80%;\n}\n\n.container-inner-content-title[_ngcontent-%COMP%] {\n  color: #FFC93C;\n  position: relative;\n  font-size: 20pt;\n}\n\n.container-inner-content-title[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  bottom: -10px;\n  width: 100%;\n  border-top: 3px solid whitesmoke;\n}\n\n.container-inner-content-subtitle[_ngcontent-%COMP%] {\n  margin-top: 15px;\n  font-size: 15pt;\n}\n\n.component-button[_ngcontent-%COMP%] {\n  background-color: #FFC93C !important;\n  color: #114347;\n  font-size: 13pt;\n  opacity: 0.9;\n  margin: 50px;\n}\n\n.component-button[_ngcontent-%COMP%]:hover {\n  opacity: 0.7;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzLWhvd2l0d29ya3MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7RUFDWCw0QkFBNEI7RUFDNUIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsZUFBZTtFQUNmLGFBQWE7RUFDYixxQkFBcUI7RUFDckIsVUFBVTtBQUNaOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHFCQUFxQjtFQUNyQixVQUFVO0VBQ1YsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLDBCQUEwQjtFQUMxQixVQUFVO0VBQ1YsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQix5QkFBeUI7RUFDekIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIseUJBQXlCO0VBQ3pCLGlCQUFpQjtFQUNqQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZixVQUFVO0VBQ1Ysa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsZUFBZTtFQUNmLGVBQWU7RUFDZiw0QkFBNEI7RUFDNUIsK0JBQStCO0VBQy9CLHlCQUF5QjtFQUN6QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsYUFBYTtFQUNiLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsT0FBTztFQUNQLGFBQWE7RUFDYixXQUFXO0VBQ1gsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxvQ0FBb0M7RUFDcEMsY0FBYztFQUNkLGVBQWU7RUFDZixZQUFZO0VBQ1osWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQTJERSIsImZpbGUiOiJzZXJ2aWNlcy1ob3dpdHdvcmtzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XG4gIGNvbG9yOiAjMTE0MzQ3O1xufVxuXG4uY29udGFpbmVyLWlubmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmNvbnRhaW5lci10aXRsZSB7XG4gIG1hcmdpbi10b3A6IDgwcHg7XG4gIGZvbnQtc2l6ZTogMzBwdDtcbn1cblxuLmNvbnRhaW5lci1zZWNvbmQtdGl0bGUge1xuICBtYXJnaW46IDcwcHggMCAxNXB4IDA7XG4gIGZvbnQtc2l6ZTogMzBwdDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBsZWZ0O1xuICB3aWR0aDogOTAlO1xufVxuXG4uY29udGFpbmVyLXNlY29uZC1zdWJ0aXRsZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogbGVmdDtcbiAgd2lkdGg6IDkwJTtcbiAgZm9udC1zaXplOiAxNXB0O1xufVxuXG4uY29udGFpbmVyLWlubmVyLWNvbnRlbnQge1xuICBib3JkZXItbGVmdDogMTUlIHNvbGlkIHJlZDtcbiAgd2lkdGg6IDUwJTtcbiAgaGVpZ2h0OiAxNTBweDtcbiAgbWFyZ2luLXRvcDogMzBweDtcbiAgcGFkZGluZzogMzBweCAzMHB4IDMwcHggMDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzExNDM0NztcbiAgY29sb3I6IHdoaXRlc21va2U7XG4gIHRyYW5zaXRpb246IDAuMjVzO1xufVxuXG4uY29udGFpbmVyLWlubmVyLWNvbnRlbnQ6aG92ZXIge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDMpO1xuICB0cmFuc2l0aW9uOiAwLjI1cztcbn1cblxuLmNvbnRhaW5lci1pbm5lci1wbHVzLWNvbnRlbnQge1xuICBtYXJnaW46IDQwcHggMCAxMHB4IDA7XG4gIGZvbnQtc2l6ZTogMjBwdDtcbiAgd2lkdGg6IDQ1JTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uY29udGFpbmVyLWlubmVyLWNvbnRlbnQ6bnRoLWNoaWxkKDIpIHtcbiAgbWFyZ2luLXRvcDogNzBweDtcbn1cblxuLmNvbnRhaW5lci1pbm5lci1jb250ZW50LWltYWdlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMzBwdDtcbiAgaGVpZ2h0OiBpbmhlcml0O1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMHB4O1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjk3Qzg2O1xuICB3aWR0aDogMTAwcHg7XG59XG5cbi5jb250YWluZXItaW5uZXItY29udGVudC10ZXh0IHtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBoZWlnaHQ6IDEwMHB4O1xuICB3aWR0aDogODAlO1xufVxuXG4uY29udGFpbmVyLWlubmVyLWNvbnRlbnQtdGl0bGUge1xuICBjb2xvcjogI0ZGQzkzQztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmb250LXNpemU6IDIwcHQ7XG59XG5cbi5jb250YWluZXItaW5uZXItY29udGVudC10aXRsZTo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICBib3R0b206IC0xMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLXRvcDogM3B4IHNvbGlkIHdoaXRlc21va2U7XG59XG5cbi5jb250YWluZXItaW5uZXItY29udGVudC1zdWJ0aXRsZSB7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG4gIGZvbnQtc2l6ZTogMTVwdDtcbn1cblxuLmNvbXBvbmVudC1idXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZDOTNDICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjMTE0MzQ3O1xuICBmb250LXNpemU6IDEzcHQ7XG4gIG9wYWNpdHk6IDAuOTtcbiAgbWFyZ2luOiA1MHB4O1xufVxuXG4uY29tcG9uZW50LWJ1dHRvbjpob3ZlciB7XG4gIG9wYWNpdHk6IDAuNztcbn1cblxuLyogLmNvbnRhaW5lci1pbm5lci1jb250ZW50IHtcbiAgd2lkdGg6IDUwJTtcbiAgaGVpZ2h0OiAxNTBweDtcbiAgbWFyZ2luLXRvcDogMzBweDtcbiAgcGFkZGluZzogMzBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIxMSwgMjExLCAyMTEsIDAuMik7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbi5jb250YWluZXItaW5uZXItY29udGVudDpudGgtY2hpbGQoMikge1xuICBtYXJnaW4tdG9wOiA3MHB4O1xufVxuXG4uY29udGFpbmVyLWlubmVyLWNvbnRlbnQtdGV4dCB7XG4gIHdpZHRoOiA1MCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmNvbnRhaW5lci1pbm5lci1jb250ZW50LXRleHQtdGl0bGUge1xuICBmb250LXNpemU6IDIwcHQ7XG59XG5cbi5jb250YWluZXItaW5uZXItY29udGVudC10ZXh0LXN1YnRpdGxlIHtcbiAgbWFyZ2luLXRvcDogMzBweDtcbiAgZm9udC1zaXplOiAxNXB0O1xufVxuXG4uY29udGFpbmVyLWlubmVyLWNvbnRlbnQtaW1hZ2Uge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIHdpZHRoOiAzMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmNvbXBvbmVudC1idXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIwLCAyMiwgNDQsIDAuOTUpICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiB3aGl0ZXNtb2tlO1xuICBmb250LXNpemU6IDEzcHQ7XG4gIG9wYWNpdHk6IDAuOTtcbiAgbWFyZ2luOiA1MHB4O1xufVxuXG4ubWFya2V0aW5nLWNvbnRhaW5lciB7XG4gIG1hcmdpbi10b3A6IDcwcHg7XG4gIHdpZHRoOiA4MCU7XG4gIGhlaWdodDogNDAwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLm1hcmtldGluZy1jb250YWluZXItYm94IHtcbiAgd2lkdGg6IDM1MHB4O1xuICBoZWlnaHQ6IDM1MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZXk7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG4gKi9cbiJdfQ== */"] });


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