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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue diam vitae nisi vulputate suscipit. Duis sit amet mauris nec lacus convallis vulputate sed ut lorem. Vivamus feugiat ornare orci, id lobortis ante consectetur sit amet. Cras consectetur mauris velit, quis aliquam mauris malesuada dictum. Ut odio turpis, cursus malesuada nisl sed, vehicula pharetra ligula. Nam mollis accumsan felis porttitor scelerisque. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Kontakt oss");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]], styles: [".container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 80vh;\n  background-color: rgba(20, 22, 44, 0.95);\n  display: flex;\n  align-items: center;\n}\n\n.container-inner[_ngcontent-%COMP%] {\n  margin-left: 100px;\n  display: flex;\n  justify-content: space-between;\n}\n\n.container-inner-text[_ngcontent-%COMP%] {\n  max-width: 50%;\n}\n\n.container-inner-image[_ngcontent-%COMP%] {\n  margin-right: 100px;\n  min-width: 30%;\n  min-height: 100px;\n  background-color: whitesmoke;\n  border-radius: 10px;\n}\n\n.container-inner-text-title[_ngcontent-%COMP%] {\n  font-size: 40pt;\n}\n\n.container-inner-text-subtitle[_ngcontent-%COMP%] {\n  margin-top: 70px;\n  font-size: 15pt;\n  line-height: 2em;\n}\n\n.component-button[_ngcontent-%COMP%] {\n  background-color: white;\n  margin-top: 30px;\n  font-size: 13pt;\n  opacity: 0.9;\n}\n\n.component-button[_ngcontent-%COMP%] {\n  background-color: white;\n}\n\n.component-button[_ngcontent-%COMP%]:hover {\n  opacity: 0.7;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFib3V0LWludHJvZHVjdGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWix3Q0FBd0M7RUFDeEMsYUFBYTtFQUNiLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLDRCQUE0QjtFQUM1QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxZQUFZO0FBQ2QiLCJmaWxlIjoiYWJvdXQtaW50cm9kdWN0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogODB2aDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMCwgMjIsIDQ0LCAwLjk1KTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmNvbnRhaW5lci1pbm5lciB7XG4gIG1hcmdpbi1sZWZ0OiAxMDBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4uY29udGFpbmVyLWlubmVyLXRleHQge1xuICBtYXgtd2lkdGg6IDUwJTtcbn1cblxuLmNvbnRhaW5lci1pbm5lci1pbWFnZSB7XG4gIG1hcmdpbi1yaWdodDogMTAwcHg7XG4gIG1pbi13aWR0aDogMzAlO1xuICBtaW4taGVpZ2h0OiAxMDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuLmNvbnRhaW5lci1pbm5lci10ZXh0LXRpdGxlIHtcbiAgZm9udC1zaXplOiA0MHB0O1xufVxuLmNvbnRhaW5lci1pbm5lci10ZXh0LXN1YnRpdGxlIHtcbiAgbWFyZ2luLXRvcDogNzBweDtcbiAgZm9udC1zaXplOiAxNXB0O1xuICBsaW5lLWhlaWdodDogMmVtO1xufVxuXG4uY29tcG9uZW50LWJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBtYXJnaW4tdG9wOiAzMHB4O1xuICBmb250LXNpemU6IDEzcHQ7XG4gIG9wYWNpdHk6IDAuOTtcbn1cblxuLmNvbXBvbmVudC1idXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuLmNvbXBvbmVudC1idXR0b246aG92ZXIge1xuICBvcGFjaXR5OiAwLjc7XG59XG4iXX0= */"] });


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
HomepageTrustComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomepageTrustComponent, selectors: [["app-homepage-trust"]], decls: 41, vars: 0, consts: [[1, "container"], [1, "container-inner"], [1, "container-inner-text"], [1, "container-inner-text-title"], [1, "container-inner-text-subtitle"], [2, "color", "rgb(255, 25, 25)"], [1, "container-inner-boxes"], [1, "container-inner-boxes-block"], [1, "box-content"], ["src", "./assets/calendar.svg", 1, "box-content-image"], [1, "box-content-title"], [1, "box-content-text"], ["src", "./assets/people.svg", 1, "box-content-image"], ["src", "./assets/dollar.svg", 1, "box-content-image"], ["src", "./assets/phone.svg", 1, "box-content-image"]], template: function HomepageTrustComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "13");
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "130 000+");
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "10 000+");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Salg vi har tiltrukket til v\u00E5re kunder");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 520px;\n  background-color: rgba(20, 22, 44, 0.95);\n  color: whitesmoke;\n  display: flex;\n  justify-content: center;\n}\n\n.container-inner[_ngcontent-%COMP%] {\n  margin-top: 50px;\n  width: 100%;\n}\n\n.container-inner-text[_ngcontent-%COMP%] {\n  text-align: center;\n  line-height: 3em;\n}\n\n.container-inner-text-title[_ngcontent-%COMP%] {\n  font-size: 30pt;\n}\n\n.container-inner-text-subtitle[_ngcontent-%COMP%] {\n  margin-top: 15px;\n  font-size: 15pt;\n}\n\n.container-inner-boxes[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  margin: 50px 160px 0px 160px;\n}\n\n.container-inner-boxes-block[_ngcontent-%COMP%] {\n  border-radius: 10px;\n  width: 250px;\n  height: 250px;\n  background-color: whitesmoke;\n  color:rgba(20, 22, 44, 0.95);\n  transition: 0.25s;\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  text-align: center;\n}\n\n.container-inner-boxes-block[_ngcontent-%COMP%]:hover {\n  background-color: white;\n  transform: scale(1.05);\n  transition: 0.25s;\n  box-shadow: rgba(149, 157, 165, 0.3) 0px 15px 24px;\n}\n\n.box-content[_ngcontent-%COMP%] {\n  height: 100%;\n  padding-top: 25px;\n  max-width: 75%;\n}\n\n.box-content-image[_ngcontent-%COMP%] {\n  width: 70px;\n  height: 70px;\n}\n\n.box-content-title[_ngcontent-%COMP%] {\n  padding-top: 15px;\n  font-size: 30pt;\n  line-height: 100%;\n}\n\n.box-content-text[_ngcontent-%COMP%] {\n  padding-top: 20px;\n  font-size: 15pt;\n  line-height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWVwYWdlLXRydXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLHdDQUF3QztFQUN4QyxpQkFBaUI7RUFDakIsYUFBYTtFQUNiLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5Qiw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLGFBQWE7RUFDYiw0QkFBNEI7RUFDNUIsNEJBQTRCO0VBQzVCLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0QixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsc0JBQXNCO0VBQ3RCLGlCQUFpQjtFQUNqQixrREFBa0Q7QUFDcEQ7O0FBRUE7RUFDRSxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGlCQUFpQjtBQUNuQiIsImZpbGUiOiJob21lcGFnZS10cnVzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDUyMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIwLCAyMiwgNDQsIDAuOTUpO1xuICBjb2xvcjogd2hpdGVzbW9rZTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5jb250YWluZXItaW5uZXIge1xuICBtYXJnaW4tdG9wOiA1MHB4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmNvbnRhaW5lci1pbm5lci10ZXh0IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBsaW5lLWhlaWdodDogM2VtO1xufVxuXG4uY29udGFpbmVyLWlubmVyLXRleHQtdGl0bGUge1xuICBmb250LXNpemU6IDMwcHQ7XG59XG5cbi5jb250YWluZXItaW5uZXItdGV4dC1zdWJ0aXRsZSB7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG4gIGZvbnQtc2l6ZTogMTVwdDtcbn1cblxuLmNvbnRhaW5lci1pbm5lci1ib3hlcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgbWFyZ2luOiA1MHB4IDE2MHB4IDBweCAxNjBweDtcbn1cblxuLmNvbnRhaW5lci1pbm5lci1ib3hlcy1ibG9jayB7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIHdpZHRoOiAyNTBweDtcbiAgaGVpZ2h0OiAyNTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcbiAgY29sb3I6cmdiYSgyMCwgMjIsIDQ0LCAwLjk1KTtcbiAgdHJhbnNpdGlvbjogMC4yNXM7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmNvbnRhaW5lci1pbm5lci1ib3hlcy1ibG9jazpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xuICB0cmFuc2l0aW9uOiAwLjI1cztcbiAgYm94LXNoYWRvdzogcmdiYSgxNDksIDE1NywgMTY1LCAwLjMpIDBweCAxNXB4IDI0cHg7XG59XG5cbi5ib3gtY29udGVudCB7XG4gIGhlaWdodDogMTAwJTtcbiAgcGFkZGluZy10b3A6IDI1cHg7XG4gIG1heC13aWR0aDogNzUlO1xufVxuXG4uYm94LWNvbnRlbnQtaW1hZ2Uge1xuICB3aWR0aDogNzBweDtcbiAgaGVpZ2h0OiA3MHB4O1xufVxuXG4uYm94LWNvbnRlbnQtdGl0bGUge1xuICBwYWRkaW5nLXRvcDogMTVweDtcbiAgZm9udC1zaXplOiAzMHB0O1xuICBsaW5lLWhlaWdodDogMTAwJTtcbn1cblxuLmJveC1jb250ZW50LXRleHQge1xuICBwYWRkaW5nLXRvcDogMjBweDtcbiAgZm9udC1zaXplOiAxNXB0O1xuICBsaW5lLWhlaWdodDogMTAwJTtcbn1cbiJdfQ== */"] });


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
ServicesWhyusComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ServicesWhyusComponent, selectors: [["app-services-whyus"]], decls: 48, vars: 0, consts: [[1, "container"], [1, "container-inner"], [1, "container-title"], [1, "container-inner-boxes"], [1, "wrapper"], [1, "box", "a"], [1, "box-title"], [1, "box-title-image"], [1, "box-title-text"], [1, "box-main-text"], [1, "box", "b"], [1, "box", "c"], [1, "box", "d"], [1, "box", "e"], [1, "box", "f"]], template: function ServicesWhyusComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Why us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Cost effective");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Sed rhoncus, tortor sed eleifend tristique.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Cost effective");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Sed rhoncus, tortor sed eleifend tristique.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Cost effective");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Sed rhoncus, tortor sed eleifend tristique.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Cost effective");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Sed rhoncus, tortor sed eleifend tristique.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Cost effective");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Sed rhoncus, tortor sed eleifend tristique.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Cost effective");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Sed rhoncus, tortor sed eleifend tristique.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  background-color: rgba(20, 22, 44, 0.95);\n  color: whitesmoke;\n}\n\n.container-title[_ngcontent-%COMP%] {\n  margin-top: 80px;\n  margin-bottom: 20px;\n  font-size: 30pt;\n}\n\n.container-inner[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n}\n\n.container-inner-boxes[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  width: 100%;\n}\n\n.wrapper[_ngcontent-%COMP%] {\n  margin: 50px;\n  width: 100%;\n  display: grid;\n  justify-content: center;\n  grid-template-columns: 40% 40%;\n  grid-template-rows: 200px 200px 200px;\n  grid-gap: 50px;\n}\n\n.wrapper-content[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.box[_ngcontent-%COMP%] {\n  border-radius: 5px;\n  padding: 20px;\n}\n\n.box-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n.box-title-image[_ngcontent-%COMP%] {\n  margin-right: 20px;\n  background-color: #7F87F1;\n  width: 23px;\n  height: 23px;\n  border-radius: 50%;\n}\n\n.box-title-text[_ngcontent-%COMP%] {\n  font-size: 18pt;\n}\n\n.box-main-text[_ngcontent-%COMP%] {\n  margin-top: 30px;\n  font-size: 14pt;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzLXdoeXVzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLHdDQUF3QztFQUN4QyxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsYUFBYTtFQUNiLHVCQUF1QjtFQUN2Qiw4QkFBOEI7RUFDOUIscUNBQXFDO0VBQ3JDLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGVBQWU7QUFDakIiLCJmaWxlIjoic2VydmljZXMtd2h5dXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIwLCAyMiwgNDQsIDAuOTUpO1xuICBjb2xvcjogd2hpdGVzbW9rZTtcbn1cblxuLmNvbnRhaW5lci10aXRsZSB7XG4gIG1hcmdpbi10b3A6IDgwcHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIGZvbnQtc2l6ZTogMzBwdDtcbn1cblxuLmNvbnRhaW5lci1pbm5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uY29udGFpbmVyLWlubmVyLWJveGVzIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ud3JhcHBlciB7XG4gIG1hcmdpbjogNTBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDQwJSA0MCU7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogMjAwcHggMjAwcHggMjAwcHg7XG4gIGdyaWQtZ2FwOiA1MHB4O1xufVxuXG4ud3JhcHBlci1jb250ZW50IHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5ib3gge1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHBhZGRpbmc6IDIwcHg7XG59XG5cbi5ib3gtdGl0bGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uYm94LXRpdGxlLWltYWdlIHtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjN0Y4N0YxO1xuICB3aWR0aDogMjNweDtcbiAgaGVpZ2h0OiAyM3B4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi5ib3gtdGl0bGUtdGV4dCB7XG4gIGZvbnQtc2l6ZTogMThwdDtcbn1cblxuLmJveC1tYWluLXRleHQge1xuICBtYXJnaW4tdG9wOiAzMHB4O1xuICBmb250LXNpemU6IDE0cHQ7XG59XG4iXX0= */"] });


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
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"]], styles: [".container[_ngcontent-%COMP%] {\n  background-color: whitesmoke;\n  color: rgba(20, 22, 44, 0.95);\n  justify-content: center;\n}\n\n.container-intro[_ngcontent-%COMP%] {\n  text-align: center;\n  line-height: 3em;\n  padding-top: 50px;\n}\n\n.intro-title[_ngcontent-%COMP%] {\n  font-size: 30pt;\n}\n\n.intro-subtitle[_ngcontent-%COMP%] {\n  font-size: 15pt;\n}\n\n.review[_ngcontent-%COMP%] {\n  min-height: 250px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.review-block[_ngcontent-%COMP%] {\n  width: 350px;\n  height: 100%;\n  margin: 0 50px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  font-size: 15pt;\n}\n\n.slide[_ngcontent-%COMP%] {\n  position: absolute;\n  max-width: 500px;\n  transition: transform 150ms cubic-bezier(0.25, 0.46, 0.45, 0.84);\n}\n\n.pagination-dots[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n\n.dot[_ngcontent-%COMP%] {\n  height: 15px;\n  width: 15px;\n  background-color: rgba(20, 22, 44);\n  border-radius: 50%;\n  display: inline-block;\n  margin: 15px;\n}\n\n.highDot[_ngcontent-%COMP%] {\n  height: 15px;\n  width: 15px;\n  background-color: rgba(20, 22, 44);\n  opacity: 0.4;\n  border-radius: 50%;\n  display: inline-block;\n  margin: 15px;\n}\n\n.slide-button[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  cursor: pointer;\n}\n\n.slide-button[_ngcontent-%COMP%]:hover {\n  opacity: 0.7;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3RpbW9uaWFscy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsNEJBQTRCO0VBQzVCLDZCQUE2QjtFQUM3Qix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7RUFDWixjQUFjO0VBQ2QsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGdFQUFnRTtBQUNsRTs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLGtDQUFrQztFQUNsQyxrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsa0NBQWtDO0VBQ2xDLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFlBQVk7QUFDZCIsImZpbGUiOiJ0ZXN0aW1vbmlhbHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xuICBjb2xvcjogcmdiYSgyMCwgMjIsIDQ0LCAwLjk1KTtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5jb250YWluZXItaW50cm8ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGxpbmUtaGVpZ2h0OiAzZW07XG4gIHBhZGRpbmctdG9wOiA1MHB4O1xufVxuXG4uaW50cm8tdGl0bGUge1xuICBmb250LXNpemU6IDMwcHQ7XG59XG5cbi5pbnRyby1zdWJ0aXRsZSB7XG4gIGZvbnQtc2l6ZTogMTVwdDtcbn1cblxuLnJldmlldyB7XG4gIG1pbi1oZWlnaHQ6IDI1MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnJldmlldy1ibG9jayB7XG4gIHdpZHRoOiAzNTBweDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtYXJnaW46IDAgNTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxNXB0O1xufVxuXG4uc2xpZGUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG1heC13aWR0aDogNTAwcHg7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAxNTBtcyBjdWJpYy1iZXppZXIoMC4yNSwgMC40NiwgMC40NSwgMC44NCk7XG59XG5cbi5wYWdpbmF0aW9uLWRvdHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmRvdCB7XG4gIGhlaWdodDogMTVweDtcbiAgd2lkdGg6IDE1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjAsIDIyLCA0NCk7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW46IDE1cHg7XG59XG5cbi5oaWdoRG90IHtcbiAgaGVpZ2h0OiAxNXB4O1xuICB3aWR0aDogMTVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMCwgMjIsIDQ0KTtcbiAgb3BhY2l0eTogMC40O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luOiAxNXB4O1xufVxuXG4uc2xpZGUtYnV0dG9uIHtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uc2xpZGUtYnV0dG9uOmhvdmVyIHtcbiAgb3BhY2l0eTogMC43O1xufVxuIl19 */"], data: { animation: [
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue diam vitae nisi vulputate suscipit. Duis sit amet mauris nec lacus convallis vulputate sed ut lorem. Vivamus feugiat ornare orci, id lobortis ante consectetur sit amet. Cras consectetur mauris velit, quis aliquam mauris malesuada dictum. Ut odio turpis, cursus malesuada nisl sed, vehicula pharetra ligula. Nam mollis accumsan felis porttitor scelerisque. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ServicesIntroductionComponent_Template_button_click_7_listener() { return ctx.processButtonClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Scroll down");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 80vh;\n  background-color: rgba(20, 22, 44, 0.95);\n  display: flex;\n  align-items: center;\n}\n\n.container-inner[_ngcontent-%COMP%] {\n  margin-left: 100px;\n  display: flex;\n  justify-content: space-between;\n}\n\n.container-inner-text[_ngcontent-%COMP%] {\n  max-width: 50%;\n}\n\n.container-inner-image[_ngcontent-%COMP%] {\n  margin-right: 100px;\n  min-width: 30%;\n  min-height: 100px;\n  background-color: whitesmoke;\n  border-radius: 10px;\n}\n\n.container-inner-text-title[_ngcontent-%COMP%] {\n  font-size: 40pt;\n}\n\n.container-inner-text-subtitle[_ngcontent-%COMP%] {\n  margin-top: 70px;\n  font-size: 15pt;\n  line-height: 2em;\n}\n\n.component-button[_ngcontent-%COMP%] {\n  background-color: white;\n  margin-top: 30px;\n  font-size: 13pt;\n  opacity: 0.9;\n}\n\n.component-button[_ngcontent-%COMP%] {\n  background-color: white;\n}\n\n.component-button[_ngcontent-%COMP%]:hover {\n  opacity: 0.7;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzLWludHJvZHVjdGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWix3Q0FBd0M7RUFDeEMsYUFBYTtFQUNiLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLDRCQUE0QjtFQUM1QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxZQUFZO0FBQ2QiLCJmaWxlIjoic2VydmljZXMtaW50cm9kdWN0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogODB2aDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMCwgMjIsIDQ0LCAwLjk1KTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmNvbnRhaW5lci1pbm5lciB7XG4gIG1hcmdpbi1sZWZ0OiAxMDBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4uY29udGFpbmVyLWlubmVyLXRleHQge1xuICBtYXgtd2lkdGg6IDUwJTtcbn1cblxuLmNvbnRhaW5lci1pbm5lci1pbWFnZSB7XG4gIG1hcmdpbi1yaWdodDogMTAwcHg7XG4gIG1pbi13aWR0aDogMzAlO1xuICBtaW4taGVpZ2h0OiAxMDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuLmNvbnRhaW5lci1pbm5lci10ZXh0LXRpdGxlIHtcbiAgZm9udC1zaXplOiA0MHB0O1xufVxuLmNvbnRhaW5lci1pbm5lci10ZXh0LXN1YnRpdGxlIHtcbiAgbWFyZ2luLXRvcDogNzBweDtcbiAgZm9udC1zaXplOiAxNXB0O1xuICBsaW5lLWhlaWdodDogMmVtO1xufVxuXG4uY29tcG9uZW50LWJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBtYXJnaW4tdG9wOiAzMHB4O1xuICBmb250LXNpemU6IDEzcHQ7XG4gIG9wYWNpdHk6IDAuOTtcbn1cblxuLmNvbXBvbmVudC1idXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuLmNvbXBvbmVudC1idXR0b246aG92ZXIge1xuICBvcGFjaXR5OiAwLjc7XG59XG4iXX0= */"] });


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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Nettsidet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "I den digitale verden er din nettside det f\u00F8rste m\u00F8tet mellom deg og kundene. En attraktiv og god nettside kan derfor skape gode f\u00F8rste inntrykk, \u00F8ke omsetningen og hjelpe deg \u00E5 f\u00E5 flere kunder ved \u00E5 v\u00E6re synlig digitalt. M\u00E5let v\u00E5rt er \u00E5 skape den perfekte hjemmesiden som representerer deg best mulig og tiltrekker deg nye kunder. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Markedsf\u00F8ring");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Det har skjedd store endringer i hvilke kanaler som er mest l\u00F8nnsomme de siste \u00E5rene. Det er derfor viktig \u00E5 posisjonere deg der de potensielle kundene dine befinner seg. Gjennom vel utarbeidet strategi s\u00F8rger vi for at du er synlig, n\u00E5r markedet og snakker forst\u00E5elig spr\u00E5k som skaper deg oppmerksomhet. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Kontaks oss");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]], styles: [".container[_ngcontent-%COMP%] {\n  width: 100%;\n  background-color: whitesmoke;\n  color: rgba(20, 22, 44, 0.95);\n}\n\n.container-inner[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\n.container-inner-box[_ngcontent-%COMP%] {\n  padding-top: 50px;\n  height: 240px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  justify-content: space-around;\n}\n\n.container-inner-box-title[_ngcontent-%COMP%] {\n  font-size: 30pt;\n  line-height: 100%;\n}\n\n.container-inner-box-text[_ngcontent-%COMP%] {\n  font-size: 15pt;\n  line-height: 100%;\n  max-width: 50%;\n}\n\n.component-button[_ngcontent-%COMP%] {\n  background-color: rgba(20, 22, 44, 0.95) !important;\n  color: whitesmoke;\n  font-size: 13pt;\n  opacity: 0.9;\n  margin: 50px;\n}\n\n.container-inner-button[_ngcontent-%COMP%] {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzLWRlc2NyaXB0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gsNEJBQTRCO0VBQzVCLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2IsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxtREFBbUQ7RUFDbkQsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixZQUFZO0VBQ1osWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCIiwiZmlsZSI6InNlcnZpY2VzLWRlc2NyaXB0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XG4gIGNvbG9yOiByZ2JhKDIwLCAyMiwgNDQsIDAuOTUpO1xufVxuXG4uY29udGFpbmVyLWlubmVyIHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uY29udGFpbmVyLWlubmVyLWJveCB7XG4gIHBhZGRpbmctdG9wOiA1MHB4O1xuICBoZWlnaHQ6IDI0MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xufVxuXG4uY29udGFpbmVyLWlubmVyLWJveC10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMzBwdDtcbiAgbGluZS1oZWlnaHQ6IDEwMCU7XG59XG5cbi5jb250YWluZXItaW5uZXItYm94LXRleHQge1xuICBmb250LXNpemU6IDE1cHQ7XG4gIGxpbmUtaGVpZ2h0OiAxMDAlO1xuICBtYXgtd2lkdGg6IDUwJTtcbn1cblxuLmNvbXBvbmVudC1idXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIwLCAyMiwgNDQsIDAuOTUpICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiB3aGl0ZXNtb2tlO1xuICBmb250LXNpemU6IDEzcHQ7XG4gIG9wYWNpdHk6IDAuOTtcbiAgbWFyZ2luOiA1MHB4O1xufVxuXG4uY29udGFpbmVyLWlubmVyLWJ1dHRvbiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbiJdfQ== */"] });


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
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]], styles: [".page[_ngcontent-%COMP%] {\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n  z-index: 1;\n}\n\n.container[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: 0 auto;\n}\n\n.header[_ngcontent-%COMP%] {\n  position: fixed;\n  width: 100%;\n  z-index: 2;\n}\n\n.footer[_ngcontent-%COMP%] {\n  margin-top: auto\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsaUJBQWlCO0VBQ2pCLFVBQVU7QUFDWjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFdBQVc7RUFDWCxVQUFVO0FBQ1o7O0FBRUE7RUFDRTtBQUNGIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBhZ2Uge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgei1pbmRleDogMTtcbn1cblxuLmNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDAgYXV0bztcbn1cblxuLmhlYWRlciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgd2lkdGg6IDEwMCU7XG4gIHotaW5kZXg6IDI7XG59XG5cbi5mb290ZXIge1xuICBtYXJnaW4tdG9wOiBhdXRvXG59XG5cbiJdfQ== */"] });


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



function AboutTestimonialsComponent_ng_container_10_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const review_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@carouselAnimation", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](review_r2.content);
} }
function AboutTestimonialsComponent_ng_container_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AboutTestimonialsComponent_ng_container_10_div_1_Template, 2, 2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const i_r3 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.currentSlideIndex === i_r3);
} }
function AboutTestimonialsComponent_div_14_Template(rf, ctx) { if (rf & 1) {
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
AboutTestimonialsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AboutTestimonialsComponent, selectors: [["app-about-testimonials"]], decls: 15, vars: 2, consts: [[1, "container"], [1, "container-intro"], [1, "intro-title"], [1, "intro-subtitle"], [1, "review"], [1, "review-block"], ["src", "./assets/leftarrow.svg", 1, "slide-button", 3, "click"], [4, "ngFor", "ngForOf"], ["src", "./assets/rightarrow.svg", 1, "slide-button", 3, "click"], [1, "pagination-dots"], ["class", "slide", 4, "ngIf"], [1, "slide"], [3, "ngClass"]], template: function AboutTestimonialsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Referanser fra v\u00E5re kunder");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Explore what our customers say about us");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AboutTestimonialsComponent_Template_img_click_8_listener() { return ctx.showPrevSlide(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, AboutTestimonialsComponent_ng_container_10_Template, 2, 1, "ng-container", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AboutTestimonialsComponent_Template_img_click_12_listener() { return ctx.showNextSlide(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, AboutTestimonialsComponent_div_14_Template, 2, 1, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.reviews);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.reviews);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"]], styles: [".container[_ngcontent-%COMP%] {\n  background-color: whitesmoke;\n  color: rgba(20, 22, 44, 0.95);\n  justify-content: center;\n}\n\n.container-intro[_ngcontent-%COMP%] {\n  text-align: center;\n  line-height: 3em;\n  padding-top: 50px;\n}\n\n.intro-title[_ngcontent-%COMP%] {\n  font-size: 30pt;\n}\n\n.intro-subtitle[_ngcontent-%COMP%] {\n  font-size: 15pt;\n}\n\n.review[_ngcontent-%COMP%] {\n  min-height: 250px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.review-block[_ngcontent-%COMP%] {\n  width: 350px;\n  height: 100%;\n  margin: 0 50px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  font-size: 15pt;\n}\n\n.slide[_ngcontent-%COMP%] {\n  position: absolute;\n  max-width: 500px;\n  transition: transform 150ms cubic-bezier(0.25, 0.46, 0.45, 0.84);\n}\n\n.pagination-dots[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n\n.dot[_ngcontent-%COMP%] {\n  height: 15px;\n  width: 15px;\n  background-color: rgba(125, 128, 165, 0.95);\n  border-radius: 50%;\n  display: inline-block;\n  margin: 15px;\n}\n\n.highDot[_ngcontent-%COMP%] {\n  height: 15px;\n  width: 15px;\n  background-color: rgba(20, 22, 44, 0.95);\n  border-radius: 50%;\n  display: inline-block;\n  margin: 15px;\n}\n\n.slide-button[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  cursor: pointer;\n}\n\n.slide-button[_ngcontent-%COMP%]:hover {\n  opacity: 0.7;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFib3V0LXRlc3RpbW9uaWFscy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsNEJBQTRCO0VBQzVCLDZCQUE2QjtFQUM3Qix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7RUFDWixjQUFjO0VBQ2QsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGdFQUFnRTtBQUNsRTs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLDJDQUEyQztFQUMzQyxrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsd0NBQXdDO0VBQ3hDLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsWUFBWTtBQUNkIiwiZmlsZSI6ImFib3V0LXRlc3RpbW9uaWFscy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XG4gIGNvbG9yOiByZ2JhKDIwLCAyMiwgNDQsIDAuOTUpO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmNvbnRhaW5lci1pbnRybyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbGluZS1oZWlnaHQ6IDNlbTtcbiAgcGFkZGluZy10b3A6IDUwcHg7XG59XG5cbi5pbnRyby10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMzBwdDtcbn1cblxuLmludHJvLXN1YnRpdGxlIHtcbiAgZm9udC1zaXplOiAxNXB0O1xufVxuXG4ucmV2aWV3IHtcbiAgbWluLWhlaWdodDogMjUwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ucmV2aWV3LWJsb2NrIHtcbiAgd2lkdGg6IDM1MHB4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1hcmdpbjogMCA1MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDE1cHQ7XG59XG5cbi5zbGlkZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbWF4LXdpZHRoOiA1MDBweDtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDE1MG1zIGN1YmljLWJlemllcigwLjI1LCAwLjQ2LCAwLjQ1LCAwLjg0KTtcbn1cblxuLnBhZ2luYXRpb24tZG90cyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uZG90IHtcbiAgaGVpZ2h0OiAxNXB4O1xuICB3aWR0aDogMTVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMjUsIDEyOCwgMTY1LCAwLjk1KTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbjogMTVweDtcbn1cblxuLmhpZ2hEb3Qge1xuICBoZWlnaHQ6IDE1cHg7XG4gIHdpZHRoOiAxNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIwLCAyMiwgNDQsIDAuOTUpO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luOiAxNXB4O1xufVxuXG4uc2xpZGUtYnV0dG9uIHtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uc2xpZGUtYnV0dG9uOmhvdmVyIHtcbiAgb3BhY2l0eTogMC43O1xufVxuIl19 */"], data: { animation: [
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
OffersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OffersComponent, selectors: [["app-homepage-services"]], decls: 36, vars: 0, consts: [[1, "container"], [1, "container-intro"], [1, "intro-title"], [1, "intro-subtitle"], [2, "color", "rgb(255, 25, 25)"], [1, "container-inner-blocks"], [1, "container-inner-block-instance"], [1, "block-instance-content"], [1, "content-image"], ["src", "./assets/design.svg"], [1, "content-title"], [1, "content-subtitle"], ["src", "./assets/development.svg"], ["src", "./assets/marketing.svg"], ["id", "button", "routerLink", "services", 1, "component-button"]], template: function OffersComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "\u00C5 skille seg ut er ekstremt viktig hvis man sikter h\u00F8yt. V\u00E5re designl\u00F8sninger hjelper deg \u00E5 skape egen identitet innenfor den digitale verden. ");
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Din hjemmeside er det f\u00F8rste m\u00F8tet mellom deg og kundene. M\u00E5let v\u00E5rt er \u00E5 skape en profesjonell og attraktiv nettside s\u00E5nn at kundene dine f\u00E5r gode f\u00F8rste inntrykk av deg. ");
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Vi utarbeider strategi som s\u00F8rger for at du er synlig p\u00E5 de mest l\u00F8nnsomme digitale plattformene og n\u00E5r de potensielle kundene dine. ");
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
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]], styles: ["img[_ngcontent-%COMP%] {\n  width: 90px;\n  height: 90px;\n}\n\n.container[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  max-height: 1000px;\n  background-color:whitesmoke;\n  color: rgba(20, 22, 44, 0.90);\n}\n\n.container-intro[_ngcontent-%COMP%] {\n  text-align: center;\n  line-height: 3em;\n  padding-top: 50px;\n}\n\n.container-inner-blocks[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n\n.intro-title[_ngcontent-%COMP%] {\n  font-size: 30pt;\n}\n\n.intro-subtitle[_ngcontent-%COMP%] {\n  font-size: 15pt;\n}\n\n.container-inner-block-instance[_ngcontent-%COMP%] {\n  margin: 50px 50px 10px 50px;\n  width: 400px;\n  height: 350px;\n  border-radius: 10px;\n  transition: 0.25s;\n}\n\n.container-inner-block-instance[_ngcontent-%COMP%]:hover {\n  transform: scale(1.02);\n  transition: 0.25s;\n  background-color: rgba(211, 211, 211, 0.15);\n  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;\n}\n\n.block-instance-content[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  text-align: center;\n  flex-direction: column;\n  align-items: center;\n}\n\n.content-image[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 130px;\n  width: 130px;\n  border-radius: 50%;\n  background-color: #dadada9f;\n}\n\n.content-title[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  font-size: 30pt;\n  line-height: 100%;\n}\n\n.content-subtitle[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  font-size: 15pt;\n  color: rgb(61, 65, 109);\n  width: 85%;\n}\n\n.component-button[_ngcontent-%COMP%] {\n  background-color: rgba(20, 22, 44, 0.95) !important;\n  color: whitesmoke;\n  font-size: 13pt;\n  opacity: 0.9;\n  margin-bottom: 40px;\n}\n\n.component-button[_ngcontent-%COMP%]:hover {\n  opacity: 0.7;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0UsY0FBYztFQUNkLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsMkJBQTJCO0VBQzNCLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsMkJBQTJCO0VBQzNCLFlBQVk7RUFDWixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixpQkFBaUI7RUFDakIsMkNBQTJDO0VBQzNDLGlEQUFpRDtBQUNuRDs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLHVCQUF1QjtFQUN2QixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxtREFBbUQ7RUFDbkQsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixZQUFZO0VBQ1osbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7QUFDZCIsImZpbGUiOiJzZXJ2aWNlcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW1nIHtcbiAgd2lkdGg6IDkwcHg7XG4gIGhlaWdodDogOTBweDtcbn1cblxuLmNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LWhlaWdodDogMTAwMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOndoaXRlc21va2U7XG4gIGNvbG9yOiByZ2JhKDIwLCAyMiwgNDQsIDAuOTApO1xufVxuXG4uY29udGFpbmVyLWludHJvIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBsaW5lLWhlaWdodDogM2VtO1xuICBwYWRkaW5nLXRvcDogNTBweDtcbn1cblxuLmNvbnRhaW5lci1pbm5lci1ibG9ja3Mge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmludHJvLXRpdGxlIHtcbiAgZm9udC1zaXplOiAzMHB0O1xufVxuXG4uaW50cm8tc3VidGl0bGUge1xuICBmb250LXNpemU6IDE1cHQ7XG59XG5cbi5jb250YWluZXItaW5uZXItYmxvY2staW5zdGFuY2Uge1xuICBtYXJnaW46IDUwcHggNTBweCAxMHB4IDUwcHg7XG4gIHdpZHRoOiA0MDBweDtcbiAgaGVpZ2h0OiAzNTBweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgdHJhbnNpdGlvbjogMC4yNXM7XG59XG5cbi5jb250YWluZXItaW5uZXItYmxvY2staW5zdGFuY2U6aG92ZXIge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDIpO1xuICB0cmFuc2l0aW9uOiAwLjI1cztcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMTEsIDIxMSwgMjExLCAwLjE1KTtcbiAgYm94LXNoYWRvdzogcmdiYSgxNDksIDE1NywgMTY1LCAwLjIpIDBweCA4cHggMjRweDtcbn1cblxuLmJsb2NrLWluc3RhbmNlLWNvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uY29udGVudC1pbWFnZSB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBoZWlnaHQ6IDEzMHB4O1xuICB3aWR0aDogMTMwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RhZGFkYTlmO1xufVxuXG4uY29udGVudC10aXRsZSB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIGZvbnQtc2l6ZTogMzBwdDtcbiAgbGluZS1oZWlnaHQ6IDEwMCU7XG59XG5cbi5jb250ZW50LXN1YnRpdGxlIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgZm9udC1zaXplOiAxNXB0O1xuICBjb2xvcjogcmdiKDYxLCA2NSwgMTA5KTtcbiAgd2lkdGg6IDg1JTtcbn1cblxuLmNvbXBvbmVudC1idXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIwLCAyMiwgNDQsIDAuOTUpICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiB3aGl0ZXNtb2tlO1xuICBmb250LXNpemU6IDEzcHQ7XG4gIG9wYWNpdHk6IDAuOTtcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcbn1cblxuLmNvbXBvbmVudC1idXR0b246aG92ZXIge1xuICBvcGFjaXR5OiAwLjc7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbiJdfQ== */"] });


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


class HeaderComponent {
    constructor() { }
    ngOnInit() {
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 25, vars: 0, consts: [[1, "header"], [1, "header-inner"], ["routerLink", ""], [1, "nav"], [1, "dropdown"], [1, "dropbtn"], ["routerLink", "services"], [1, "dropdown-content"], ["routerLink", "services", "fragment", "development"], ["routerLink", "services", "fragment", "marketing"], ["routerLink", "about"], ["routerLink", "contacts", 1, "contact-button"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "WEBBYNAVIA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nav", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Hjem");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Tjenester");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Nettside");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Markedsf\u00F8ring");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Om oss");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Kontakt oss");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: ["ul[_ngcontent-%COMP%] {\n  list-style-type: none;\n}\n\na[_ngcontent-%COMP%] {\n  color: whitesmoke;\n}\n\na[_ngcontent-%COMP%]:hover {\n  opacity: 0.7;\n  cursor: pointer;\n}\n\n.header[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 60px;\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n  background-color: rgba(21, 23, 46, 0.8);\n}\n\n.header-inner[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin-left: 100px;\n  font-size: 20pt;\n  letter-spacing: 7px;\n}\n\n.nav[_ngcontent-%COMP%] {\n  align-items: center;\n  display:flex;\n}\n\n.nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: inline;\n  margin-right: 60px;\n}\n\n.nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  padding: 22px 15px;\n}\n\nli[_ngcontent-%COMP%]:last-child {\n  margin-right: 0;\n}\n\n.dropbtn[_ngcontent-%COMP%] {\n  display: inline;\n}\n\n.dropdown[_ngcontent-%COMP%] {\n  display: inline;\n}\n\n.dropdown-content[_ngcontent-%COMP%] {\n  display: none;\n  margin-top: 23px;\n  position: absolute;\n  margin-left: 123px;\n  background-color: whitesmoke;\n  min-width: 230px;\n  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);\n  z-index: 1;\n}\n\n.dropdown-content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: black;\n  padding: 14px 16px;\n  text-decoration: none;\n  display: block;\n}\n\n.dropdown-content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {background-color: #ddd;}\n\n.dropdown[_ngcontent-%COMP%]:hover   .dropdown-content[_ngcontent-%COMP%] {display: block;}\n\n.dropdown[_ngcontent-%COMP%]:hover   .dropbtn[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  opacity: 0.8;\n}\n\n.contact-button[_ngcontent-%COMP%] {\n  background-color: white;\n  padding-top: 10px !important;\n  padding-bottom: 10px !important;\n  border-radius: 20px;\n  color: rgba(20, 22, 44, 0.95);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsWUFBWTtFQUNaLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsTUFBTTtFQUNOLE9BQU87RUFDUCxRQUFRO0VBQ1IsWUFBWTtFQUNaLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsV0FBVztFQUNYLHVDQUF1QztBQUN6Qzs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQiw0QkFBNEI7RUFDNUIsZ0JBQWdCO0VBQ2hCLDRDQUE0QztFQUM1QyxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixjQUFjO0FBQ2hCOztBQUVBLDJCQUEyQixzQkFBc0IsQ0FBQzs7QUFFbEQsbUNBQW1DLGNBQWMsQ0FBQzs7QUFFbEQ7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsNEJBQTRCO0VBQzVCLCtCQUErQjtFQUMvQixtQkFBbUI7RUFDbkIsNkJBQTZCO0FBQy9CIiwiZmlsZSI6ImhlYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidWwge1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG59XG5cbmEge1xuICBjb2xvcjogd2hpdGVzbW9rZTtcbn1cblxuYTpob3ZlciB7XG4gIG9wYWNpdHk6IDAuNztcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uaGVhZGVyIHtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgaGVpZ2h0OiA2MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIxLCAyMywgNDYsIDAuOCk7XG59XG5cbi5oZWFkZXItaW5uZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tbGVmdDogMTAwcHg7XG4gIGZvbnQtc2l6ZTogMjBwdDtcbiAgbGV0dGVyLXNwYWNpbmc6IDdweDtcbn1cblxuLm5hdiB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGRpc3BsYXk6ZmxleDtcbn1cblxuLm5hdiBsaSB7XG4gIGRpc3BsYXk6IGlubGluZTtcbiAgbWFyZ2luLXJpZ2h0OiA2MHB4O1xufVxuXG4ubmF2IGEge1xuICBwYWRkaW5nOiAyMnB4IDE1cHg7XG59XG5cbmxpOmxhc3QtY2hpbGQge1xuICBtYXJnaW4tcmlnaHQ6IDA7XG59XG5cbi5kcm9wYnRuIHtcbiAgZGlzcGxheTogaW5saW5lO1xufVxuXG4uZHJvcGRvd24ge1xuICBkaXNwbGF5OiBpbmxpbmU7XG59XG5cbi5kcm9wZG93bi1jb250ZW50IHtcbiAgZGlzcGxheTogbm9uZTtcbiAgbWFyZ2luLXRvcDogMjNweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBtYXJnaW4tbGVmdDogMTIzcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XG4gIG1pbi13aWR0aDogMjMwcHg7XG4gIGJveC1zaGFkb3c6IDBweCA4cHggMTZweCAwcHggcmdiYSgwLDAsMCwwLjIpO1xuICB6LWluZGV4OiAxO1xufVxuXG4uZHJvcGRvd24tY29udGVudCBhIHtcbiAgY29sb3I6IGJsYWNrO1xuICBwYWRkaW5nOiAxNHB4IDE2cHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5kcm9wZG93bi1jb250ZW50IGE6aG92ZXIge2JhY2tncm91bmQtY29sb3I6ICNkZGQ7fVxuXG4uZHJvcGRvd246aG92ZXIgLmRyb3Bkb3duLWNvbnRlbnQge2Rpc3BsYXk6IGJsb2NrO31cblxuLmRyb3Bkb3duOmhvdmVyIC5kcm9wYnRuIGEge1xuICBvcGFjaXR5OiAwLjg7XG59XG5cbi5jb250YWN0LWJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nLXRvcDogMTBweCAhaW1wb3J0YW50O1xuICBwYWRkaW5nLWJvdHRvbTogMTBweCAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBjb2xvcjogcmdiYSgyMCwgMjIsIDQ0LCAwLjk1KTtcbn1cbiJdfQ== */"] });


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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");


function FooterComponent_li_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.name);
} }
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
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 4, vars: 1, consts: [[1, "footer"], [1, "nav"], [4, "ngFor", "ngForOf"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, FooterComponent_li_3_Template, 3, 1, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.footerSections);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], styles: ["ul[_ngcontent-%COMP%] {\n  list-style-type: none;\n}\n\na[_ngcontent-%COMP%]:hover {\n  opacity: 0.75;\n  cursor: pointer;\n}\n\n.footer[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 10vh;\n  background-color:#363636;\n  display: flex;\n  align-items: center;\n  opacity: 0.9;\n  color: #ffffffd8;\n}\n\n.nav[_ngcontent-%COMP%] {\n    align-items: center;\n    text-align: center;\n    display:flex;\n    margin-left: 100px;\n}\n\n.nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n.nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: inline;\n}\n\n.nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  padding: 2.532em 15px;\n  margin-right: 60px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLHdCQUF3QjtFQUN4QixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixnQkFBZ0I7QUFDbEI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7O0FBRUE7RUFDRSxTQUFTO0FBQ1g7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGtCQUFrQjtBQUNwQiIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInVsIHtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xufVxuXG5hOmhvdmVyIHtcbiAgb3BhY2l0eTogMC43NTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uZm9vdGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTB2aDtcbiAgYmFja2dyb3VuZC1jb2xvcjojMzYzNjM2O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBvcGFjaXR5OiAwLjk7XG4gIGNvbG9yOiAjZmZmZmZmZDg7XG59XG5cbi5uYXYge1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGRpc3BsYXk6ZmxleDtcbiAgICBtYXJnaW4tbGVmdDogMTAwcHg7XG59XG5cbi5uYXYgdWwge1xuICBtYXJnaW46IDA7XG59XG5cbi5uYXYgbGkge1xuICBkaXNwbGF5OiBpbmxpbmU7XG59XG5cbi5uYXYgYSB7XG4gIHBhZGRpbmc6IDIuNTMyZW0gMTVweDtcbiAgbWFyZ2luLXJpZ2h0OiA2MHB4O1xufVxuIl19 */"] });


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

class ContactsComponent {
    constructor() {
        this.lol = false;
    }
    ngOnInit() {
    }
    check() {
        this.lol = true;
    }
}
ContactsComponent.ɵfac = function ContactsComponent_Factory(t) { return new (t || ContactsComponent)(); };
ContactsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactsComponent, selectors: [["app-contacts"]], decls: 18, vars: 0, consts: [[1, "container"], [1, "container-intro"], [1, "intro-title"], [1, "intro-subtitle"], [1, "container-inner"], ["name", "hidden_iframe", "id", "hidden_iframe", "onload", "if(submitted) {window.location='';}", 2, "display", "none"], ["action", "https://docs.google.com/forms/d/e/1FAIpQLScwkjxYT5SHun7IoMghh96OdoSWs8i_wbXoQTRLrkaleTLajw/formResponse", "method", "post", "target", "hidden_iframe", "onsubmit", "submitted=true;"], [1, "container-inner-content"], ["type", "text", "placeholder", "Name*", "name", "entry.2005620554", "required", "", 1, "component-input"], ["type", "email", "placeholder", "Email address*", "name", "entry.1045781291", "required", "", 1, "component-input"], ["rows", "10", "placeholder", "Message*", "name", "entry.839337160", "required", "", 1, "component-input"], [1, "component-inner-button"], ["type", "submit", "id", "button", 1, "component-button"]], template: function ContactsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Get in touch with us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "There's always an opportunity to find a solution for something, contact us and we'll find one for you.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "iframe", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "form", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 7);
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
    } }, styles: [".container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 90vh;\n  background-color: rgba(20, 22, 44, 0.95);\n}\n\n.container-intro[_ngcontent-%COMP%] {\n  padding-top: 120px;\n  text-align: center;\n  line-height: 3em;\n}\n\n.intro-title[_ngcontent-%COMP%] {\n  font-size: 30pt;\n}\n\n.intro-subtitle[_ngcontent-%COMP%] {\n  font-size: 15pt;\n}\n\n.container-inner[_ngcontent-%COMP%] {\n  margin-top: 40px;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.container-inner-content[_ngcontent-%COMP%] {\n  width: 60vh;\n  display: flex;\n  justify-content: center;\n  font-size: 15pt;\n  margin: 30px;\n  line-height: 1.4em;\n}\n\n.component-input[_ngcontent-%COMP%] {\n  border-radius: 5px;\n  background-color: whitesmoke;\n  width: 100%;\n  min-height: 40px;\n  max-height: 300px;\n  border: none;\n  text-decoration: none;\n  display: inline-block;\n  border-radius: 12px;\n  outline: none;\n  box-shadow: 0 1px 3px rgb(20 50 0 / 15%);\n  padding: 15px;\n}\n\n.component-inner-button[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  margin-top: 50px;\n}\n\n.component-button[_ngcontent-%COMP%] {\n}\n\n.component-button[_ngcontent-%COMP%]:hover {\n  opacity: 0.7;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhY3RzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLHdDQUF3QztBQUMxQzs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsZUFBZTtFQUNmLFlBQVk7RUFDWixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsNEJBQTRCO0VBQzVCLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixxQkFBcUI7RUFDckIscUJBQXFCO0VBQ3JCLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2Isd0NBQXdDO0VBQ3hDLGFBQWE7QUFDZjs7QUFHQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsZ0JBQWdCO0FBQ2xCOztBQUVBO0FBQ0E7O0FBRUE7RUFDRSxZQUFZO0FBQ2QiLCJmaWxlIjoiY29udGFjdHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA5MHZoO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIwLCAyMiwgNDQsIDAuOTUpO1xufVxuXG4uY29udGFpbmVyLWludHJvIHtcbiAgcGFkZGluZy10b3A6IDEyMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGxpbmUtaGVpZ2h0OiAzZW07XG59XG5cbi5pbnRyby10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMzBwdDtcbn1cblxuLmludHJvLXN1YnRpdGxlIHtcbiAgZm9udC1zaXplOiAxNXB0O1xufVxuXG4uY29udGFpbmVyLWlubmVyIHtcbiAgbWFyZ2luLXRvcDogNDBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uY29udGFpbmVyLWlubmVyLWNvbnRlbnQge1xuICB3aWR0aDogNjB2aDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTVwdDtcbiAgbWFyZ2luOiAzMHB4O1xuICBsaW5lLWhlaWdodDogMS40ZW07XG59XG5cbi5jb21wb25lbnQtaW5wdXQge1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XG4gIHdpZHRoOiAxMDAlO1xuICBtaW4taGVpZ2h0OiA0MHB4O1xuICBtYXgtaGVpZ2h0OiAzMDBweDtcbiAgYm9yZGVyOiBub25lO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm94LXNoYWRvdzogMCAxcHggM3B4IHJnYigyMCA1MCAwIC8gMTUlKTtcbiAgcGFkZGluZzogMTVweDtcbn1cblxuXG4uY29tcG9uZW50LWlubmVyLWJ1dHRvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtYXJnaW4tdG9wOiA1MHB4O1xufVxuXG4uY29tcG9uZW50LWJ1dHRvbiB7XG59XG5cbi5jb21wb25lbnQtYnV0dG9uOmhvdmVyIHtcbiAgb3BhY2l0eTogMC43O1xufVxuXG4iXX0= */"] });


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
IntroductionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: IntroductionComponent, selectors: [["app-homepage-introduction"]], decls: 22, vars: 0, consts: [[1, "container"], [1, "container-inner-title"], [1, "container-inner-title-content"], [2, "color", "rgb(255, 25, 25)"], [1, "container-inner-subtitle"], [1, "container-inner-button"], ["id", "button", "routerLink", "contacts", 1, "component-button"]], template: function IntroductionComponent_Template(rf, ctx) { if (rf & 1) {
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
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]], styles: [".container[_ngcontent-%COMP%] {\n  height: 80vh;\n  background-color: rgba(20, 22, 44, 0.95);\n  color: whitesmoke;\n}\n\n.container-inner-title[_ngcontent-%COMP%] {\n  padding-top: 23vh;\n  font-size: 45pt;\n  line-height: 100%;\n  display: flex;\n  justify-content: center;\n  text-align: center;\n}\n\n.container-inner-title-content[_ngcontent-%COMP%] {\n  max-width: 900px;\n}\n\n.container-inner-subtitle[_ngcontent-%COMP%] {\n  margin-top: 50px;\n  text-align: center;\n  font-size: 15pt;\n  color: rgb(220, 220, 220)\n}\n\n.container-inner-button[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  margin-top: 75px;\n}\n\n.component-button[_ngcontent-%COMP%] {\n  width: 300px !important;\n  height: 50px !important;\n  background-color: white;\n  font-size: 18pt;\n}\n\n.component-button[_ngcontent-%COMP%]:hover {\n  opacity: 0.7;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImludHJvZHVjdGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtFQUNaLHdDQUF3QztFQUN4QyxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmO0FBQ0Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2Qix1QkFBdUI7RUFDdkIsdUJBQXVCO0VBQ3ZCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxZQUFZO0FBQ2QiLCJmaWxlIjoiaW50cm9kdWN0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcbiAgaGVpZ2h0OiA4MHZoO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIwLCAyMiwgNDQsIDAuOTUpO1xuICBjb2xvcjogd2hpdGVzbW9rZTtcbn1cblxuLmNvbnRhaW5lci1pbm5lci10aXRsZSB7XG4gIHBhZGRpbmctdG9wOiAyM3ZoO1xuICBmb250LXNpemU6IDQ1cHQ7XG4gIGxpbmUtaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uY29udGFpbmVyLWlubmVyLXRpdGxlLWNvbnRlbnQge1xuICBtYXgtd2lkdGg6IDkwMHB4O1xufVxuXG4uY29udGFpbmVyLWlubmVyLXN1YnRpdGxlIHtcbiAgbWFyZ2luLXRvcDogNTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDE1cHQ7XG4gIGNvbG9yOiByZ2IoMjIwLCAyMjAsIDIyMClcbn1cblxuLmNvbnRhaW5lci1pbm5lci1idXR0b24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogNzVweDtcbn1cblxuLmNvbXBvbmVudC1idXR0b24ge1xuICB3aWR0aDogMzAwcHggIWltcG9ydGFudDtcbiAgaGVpZ2h0OiA1MHB4ICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDE4cHQ7XG59XG5cbi5jb21wb25lbnQtYnV0dG9uOmhvdmVyIHtcbiAgb3BhY2l0eTogMC43O1xufVxuXG4iXX0= */"] });


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
ServicesHowitworksComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ServicesHowitworksComponent, selectors: [["app-services-howitworks"]], decls: 54, vars: 0, consts: [[1, "container"], [1, "container-inner"], [1, "container-title"], [1, "container-inner-content"], [1, "container-inner-content-image"], [1, "container-inner-content-text"], [1, "container-inner-content-title"], [1, "container-inner-content-subtitle"], ["id", "button", "routerLink", "/contacts", 1, "component-button"]], template: function ServicesHowitworksComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "How it works");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " 1 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Get in touch with us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "First step will be getting in touch with us, we will get to know you and start working together.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " 2 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Get in touch with us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "First step will be getting in touch with us, we will get to know you and start working together.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " 3 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Get in touch with us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "First step will be getting in touch with us, we will get to know you and start working together.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " 4 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Get in touch with us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "First step will be getting in touch with us, we will get to know you and start working together.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " 5 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Get in touch with us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "First step will be getting in touch with us, we will get to know you and start working together.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " 6 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Get in touch with us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "First step will be getting in touch with us, we will get to know you and start working together.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Kontaks oss");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]], styles: [".container[_ngcontent-%COMP%] {\n  width: 100%;\n  background-color: whitesmoke;\n  color: rgba(20, 22, 44, 0.95);\n}\n\n.container-inner[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.container-title[_ngcontent-%COMP%] {\n  margin-top: 80px;\n  font-size: 30pt;\n}\n\n.container-second-title[_ngcontent-%COMP%] {\n  margin: 70px 0 15px 0;\n  font-size: 30pt;\n  display: flex;\n  justify-content: left;\n  width: 90%;\n}\n\n.container-second-subtitle[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: left;\n  width: 90%;\n  font-size: 15pt;\n}\n\n.container-inner-content[_ngcontent-%COMP%] {\n  width: 45%;\n  height: 150px;\n  margin-top: 30px;\n  padding: 30px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 10px;\n  background-color: rgba(211, 211, 211, 0.15);\n}\n\n.container-inner-content[_ngcontent-%COMP%]:nth-child(2) {\n  margin-top: 70px;\n}\n\n.container-inner-content-image[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 30pt;\n  height: 100px;\n  width: 100px;\n  background-color: rgba(211, 211, 211, 0.6);\n  border-radius: 50%;\n}\n\n.container-inner-content-text[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  height: 100px;\n  width: 80%;\n  margin-left: 50px;;\n}\n\n.container-inner-content-title[_ngcontent-%COMP%] {\n  position: relative;\n  font-size: 20pt;\n}\n\n.container-inner-content-title[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  bottom: -10px;\n  width: 50%;\n  border-top:3px solid #7F87F1;\n}\n\n.container-inner-content-subtitle[_ngcontent-%COMP%] {\n  margin-top: 15px;\n  font-size: 15pt;\n}\n\n.component-button[_ngcontent-%COMP%] {\n  background-color: rgba(20, 22, 44, 0.95) !important;\n  color: whitesmoke;\n  font-size: 13pt;\n  opacity: 0.9;\n  margin: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzLWhvd2l0d29ya3MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7RUFDWCw0QkFBNEI7RUFDNUIsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2YsYUFBYTtFQUNiLHFCQUFxQjtFQUNyQixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxhQUFhO0VBQ2IscUJBQXFCO0VBQ3JCLFVBQVU7RUFDVixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQiwyQ0FBMkM7QUFDN0M7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixlQUFlO0VBQ2YsYUFBYTtFQUNiLFlBQVk7RUFDWiwwQ0FBMEM7RUFDMUMsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsYUFBYTtFQUNiLFVBQVU7RUFDVixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsT0FBTztFQUNQLGFBQWE7RUFDYixVQUFVO0VBQ1YsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxtREFBbUQ7RUFDbkQsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixZQUFZO0VBQ1osWUFBWTtBQUNkOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQTJERSIsImZpbGUiOiJzZXJ2aWNlcy1ob3dpdHdvcmtzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XG4gIGNvbG9yOiByZ2JhKDIwLCAyMiwgNDQsIDAuOTUpO1xufVxuXG4uY29udGFpbmVyLWlubmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmNvbnRhaW5lci10aXRsZSB7XG4gIG1hcmdpbi10b3A6IDgwcHg7XG4gIGZvbnQtc2l6ZTogMzBwdDtcbn1cblxuLmNvbnRhaW5lci1zZWNvbmQtdGl0bGUge1xuICBtYXJnaW46IDcwcHggMCAxNXB4IDA7XG4gIGZvbnQtc2l6ZTogMzBwdDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBsZWZ0O1xuICB3aWR0aDogOTAlO1xufVxuXG4uY29udGFpbmVyLXNlY29uZC1zdWJ0aXRsZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogbGVmdDtcbiAgd2lkdGg6IDkwJTtcbiAgZm9udC1zaXplOiAxNXB0O1xufVxuXG4uY29udGFpbmVyLWlubmVyLWNvbnRlbnQge1xuICB3aWR0aDogNDUlO1xuICBoZWlnaHQ6IDE1MHB4O1xuICBtYXJnaW4tdG9wOiAzMHB4O1xuICBwYWRkaW5nOiAzMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMTEsIDIxMSwgMjExLCAwLjE1KTtcbn1cblxuLmNvbnRhaW5lci1pbm5lci1jb250ZW50Om50aC1jaGlsZCgyKSB7XG4gIG1hcmdpbi10b3A6IDcwcHg7XG59XG5cbi5jb250YWluZXItaW5uZXItY29udGVudC1pbWFnZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmb250LXNpemU6IDMwcHQ7XG4gIGhlaWdodDogMTAwcHg7XG4gIHdpZHRoOiAxMDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMTEsIDIxMSwgMjExLCAwLjYpO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi5jb250YWluZXItaW5uZXItY29udGVudC10ZXh0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGhlaWdodDogMTAwcHg7XG4gIHdpZHRoOiA4MCU7XG4gIG1hcmdpbi1sZWZ0OiA1MHB4Oztcbn1cblxuLmNvbnRhaW5lci1pbm5lci1jb250ZW50LXRpdGxlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmb250LXNpemU6IDIwcHQ7XG59XG5cbi5jb250YWluZXItaW5uZXItY29udGVudC10aXRsZTo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICBib3R0b206IC0xMHB4O1xuICB3aWR0aDogNTAlO1xuICBib3JkZXItdG9wOjNweCBzb2xpZCAjN0Y4N0YxO1xufVxuXG4uY29udGFpbmVyLWlubmVyLWNvbnRlbnQtc3VidGl0bGUge1xuICBtYXJnaW4tdG9wOiAxNXB4O1xuICBmb250LXNpemU6IDE1cHQ7XG59XG5cbi5jb21wb25lbnQtYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMCwgMjIsIDQ0LCAwLjk1KSAhaW1wb3J0YW50O1xuICBjb2xvcjogd2hpdGVzbW9rZTtcbiAgZm9udC1zaXplOiAxM3B0O1xuICBvcGFjaXR5OiAwLjk7XG4gIG1hcmdpbjogNTBweDtcbn1cblxuLyogLmNvbnRhaW5lci1pbm5lci1jb250ZW50IHtcbiAgd2lkdGg6IDUwJTtcbiAgaGVpZ2h0OiAxNTBweDtcbiAgbWFyZ2luLXRvcDogMzBweDtcbiAgcGFkZGluZzogMzBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIxMSwgMjExLCAyMTEsIDAuMik7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbi5jb250YWluZXItaW5uZXItY29udGVudDpudGgtY2hpbGQoMikge1xuICBtYXJnaW4tdG9wOiA3MHB4O1xufVxuXG4uY29udGFpbmVyLWlubmVyLWNvbnRlbnQtdGV4dCB7XG4gIHdpZHRoOiA1MCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmNvbnRhaW5lci1pbm5lci1jb250ZW50LXRleHQtdGl0bGUge1xuICBmb250LXNpemU6IDIwcHQ7XG59XG5cbi5jb250YWluZXItaW5uZXItY29udGVudC10ZXh0LXN1YnRpdGxlIHtcbiAgbWFyZ2luLXRvcDogMzBweDtcbiAgZm9udC1zaXplOiAxNXB0O1xufVxuXG4uY29udGFpbmVyLWlubmVyLWNvbnRlbnQtaW1hZ2Uge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIHdpZHRoOiAzMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmNvbXBvbmVudC1idXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIwLCAyMiwgNDQsIDAuOTUpICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiB3aGl0ZXNtb2tlO1xuICBmb250LXNpemU6IDEzcHQ7XG4gIG9wYWNpdHk6IDAuOTtcbiAgbWFyZ2luOiA1MHB4O1xufVxuXG4ubWFya2V0aW5nLWNvbnRhaW5lciB7XG4gIG1hcmdpbi10b3A6IDcwcHg7XG4gIHdpZHRoOiA4MCU7XG4gIGhlaWdodDogNDAwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLm1hcmtldGluZy1jb250YWluZXItYm94IHtcbiAgd2lkdGg6IDM1MHB4O1xuICBoZWlnaHQ6IDM1MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZXk7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG4gKi9cbiJdfQ== */"] });


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