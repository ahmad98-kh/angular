(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Training01\Lecture4\Groovinn\Groovinn\src\main.ts */"zUnb");


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

/***/ "I/9m":
/*!************************************************!*\
  !*** ./src/app/feature2/feature2.component.ts ***!
  \************************************************/
/*! exports provided: Feature2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Feature2Component", function() { return Feature2Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class Feature2Component {
    constructor() {
        this.commant = 'Hello, my name is ahmad kheir i am from Menyieh ';
    }
    ngOnInit() {
    }
}
Feature2Component.??fac = function Feature2Component_Factory(t) { return new (t || Feature2Component)(); };
Feature2Component.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: Feature2Component, selectors: [["app-feature2"]], decls: 7, vars: 1, consts: [[1, "box", 2, "border", "2px solid red"]], template: function Feature2Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "01");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "Lorem Ipsum");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.commant);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmZWF0dXJlMi5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent, featureinfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "featureinfo", function() { return featureinfo; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _feature2_feature2_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./feature2/feature2.component */ "I/9m");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _feature_feature_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./feature/feature.component */ "pSYE");
/* harmony import */ var _feature3_feature3_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./feature3/feature3.component */ "gbHl");





function AppComponent_div_299_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "app-feature", 175);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const f_r2 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classMapInterpolate1"]("col-lg-", ctx_r0.clnbofrow(), " col-md-6 portfolio-item filter-app");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("imgurl", f_r2.imgurl)("title", f_r2.title)("description", f_r2.description);
} }
function AppComponent_div_308_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "app-feature3", 175);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const f_r3 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classMapInterpolate1"]("col-xl-", ctx_r1.clnbofrow(), " col-lg-4 col-md-6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("imgurl", f_r3.imgurl)("title", f_r3.title)("description", f_r3.description);
} }
class AppComponent {
    constructor() {
        this.title = 'Groovinn';
        this.nbofrow = 4;
        this.Feature = [];
        var f = new featureinfo();
        f.imgurl = "https://cdn.pixabay.com/photo/2020/01/18/16/57/rome-4775842_1280.jpg";
        f.title = "Kheir";
        f.description = "Hello how are you are you fine";
        this.Feature.push(f);
        f = new featureinfo();
        f.imgurl = "https://cdn.pixabay.com/photo/2020/01/14/20/39/bird-4766274_1280.jpg";
        f.title = "Khaled";
        f.description = "Hello my name is khaled ";
        this.Feature.push(f);
        f = new featureinfo();
        f.imgurl = "https://cdn.pixabay.com/photo/2018/08/09/10/46/phone-3594206__340.jpg";
        f.title = "Wael";
        f.description = "Hello my name is Wael ";
        this.Feature.push(f);
        f = new featureinfo();
        f.imgurl = "https://cdn.pixabay.com/photo/2015/05/28/23/12/auto-788747__340.jpg";
        f.title = "Mohamad";
        f.description = "Hello my name is Mohamad ";
        this.Feature.push(f);
        f = new featureinfo();
        f.imgurl = "https://cdn.pixabay.com/photo/2019/07/07/14/03/fiat-4322521__340.jpg";
        f.title = "kays";
        f.description = "Hello my name is kays ";
        this.Feature.push(f);
        f = new featureinfo();
        f.imgurl = "https://cdn.pixabay.com/photo/2016/09/11/10/02/renault-juvaquatre-1661009__340.jpg";
        f.title = "abd";
        f.description = "Hello my name is abd ";
        this.Feature.push(f);
    }
    clnbofrow() {
        return this.nbofrow;
    }
}
AppComponent.??fac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 594, vars: 2, consts: [["id", "header", 1, "fixed-top", "d-flex", "align-items-center"], [1, "container", "d-flex", "align-items-center", "justify-content-between"], [1, "logo"], ["href", "index.html"], ["id", "navbar", 1, "navbar"], ["href", "#hero", 1, "nav-link", "scrollto", "active"], ["href", "#about", 1, "nav-link", "scrollto"], ["href", "#services", 1, "nav-link", "scrollto"], ["href", "#portfolio", 1, "nav-link", "scrollto"], ["href", "#team", 1, "nav-link", "scrollto"], ["href", "blog.html"], [1, "dropdown"], ["href", "#"], [1, "bi", "bi-chevron-down"], [1, "bi", "bi-chevron-right"], ["href", "#contact", 1, "nav-link", "scrollto"], ["href", "#about", 1, "getstarted", "scrollto"], [1, "bi", "bi-list", "mobile-nav-toggle"], ["id", "hero"], [1, "hero-container"], ["id", "heroCarousel", "data-bs-interval", "5000", "data-bs-ride", "carousel", 1, "carousel", "slide", "carousel-fade"], ["id", "hero-carousel-indicators", 1, "carousel-indicators"], ["role", "listbox", 1, "carousel-inner"], [1, "carousel-item", "active", 2, "background", "url(assets/img/slide/slide-1.jpg)"], [1, "carousel-container"], [1, "carousel-content"], [1, "animate__animated", "animate__fadeInDown"], [1, "animate__animated", "animate__fadeInUp"], ["href", "#about", 1, "btn-get-started", "animate__animated", "animate__fadeInUp", "scrollto"], [1, "carousel-item", 2, "background", "url(assets/img/slide/slide-2.jpg)"], [1, "carousel-item", 2, "background", "url(assets/img/slide/slide-3.jpg)"], [1, "carousel-background"], ["src", "assets/img/slide/slide-3.jpg", "alt", ""], ["href", "#heroCarousel", "role", "button", "data-bs-slide", "prev", 1, "carousel-control-prev"], ["aria-hidden", "true", 1, "carousel-control-prev-icon", "bi", "bi-chevron-left"], ["href", "#heroCarousel", "role", "button", "data-bs-slide", "next", 1, "carousel-control-next"], ["aria-hidden", "true", 1, "carousel-control-next-icon", "bi", "bi-chevron-right"], ["id", "main"], ["id", "about", 1, "about"], [1, "container"], [1, "row", "no-gutters"], [1, "image", "col-xl-5", "d-flex", "align-items-stretch", "justify-content-center", "justify-content-lg-start"], [1, "col-xl-7", "ps-0", "ps-lg-5", "pe-lg-1", "d-flex", "align-items-stretch"], [1, "content", "d-flex", "flex-column", "justify-content-center"], [1, "row"], [1, "col-md-6", "icon-box"], [1, "bx", "bx-receipt"], [1, "bx", "bx-cube-alt"], [1, "bx", "bx-images"], [1, "bx", "bx-shield"], ["id", "counts", 1, "counts"], [1, "col-lg-3", "col-md-6", "d-md-flex", "align-items-md-stretch"], [1, "count-box"], [1, "bi", "bi-emoji-smile"], ["data-purecounter-start", "0", "data-purecounter-end", "232", "data-purecounter-duration", "1", 1, "purecounter"], [1, "bi", "bi-journal-richtext"], ["data-purecounter-start", "0", "data-purecounter-end", "521", "data-purecounter-duration", "1", 1, "purecounter"], [1, "bi", "bi-headset"], ["data-purecounter-start", "0", "data-purecounter-end", "1463", "data-purecounter-duration", "1", 1, "purecounter"], [1, "bi", "bi-people"], ["data-purecounter-start", "0", "data-purecounter-end", "15", "data-purecounter-duration", "1", 1, "purecounter"], ["id", "clients", 1, "clients", "section-bg"], [1, "col-lg-2", "col-md-4", "col-6", "d-flex", "align-items-center", "justify-content-center"], ["src", "assets/img/clients/client-1.png", "alt", "", 1, "img-fluid"], ["src", "assets/img/clients/client-2.png", "alt", "", 1, "img-fluid"], ["src", "assets/img/clients/client-3.png", "alt", "", 1, "img-fluid"], ["src", "assets/img/clients/client-4.png", "alt", "", 1, "img-fluid"], ["src", "assets/img/clients/client-5.png", "alt", "", 1, "img-fluid"], ["src", "assets/img/clients/client-6.png", "alt", "", 1, "img-fluid"], ["id", "services", 1, "services"], [1, "section-title"], [1, "col-lg-4", "col-md-6", "icon-box"], [1, "icon"], [1, "bi", "bi-briefcase"], [1, "title"], ["href", ""], [1, "description"], [1, "bi", "bi-card-checklist"], [1, "bi", "bi-bar-chart"], [1, "bi", "bi-binoculars"], [1, "bi", "bi-brightness-high"], [1, "bi", "bi-calendar4-week"], ["id", "why-us", 1, "why-us"], [1, "col-lg-4"], [1, "col-lg-4", "mt-4", "mt-lg-0"], [1, "box"], ["id", "portfolio", 1, "portfolio"], [1, "col-lg-12", "d-flex", "justify-content-center"], ["id", "portfolio-flters"], ["data-filter", "*", 1, "filter-active"], ["data-filter", ".filter-app"], ["data-filter", ".filter-card"], ["data-filter", ".filter-web"], [1, "row", "portfolio-container"], [3, "class", 4, "ngFor", "ngForOf"], ["id", "team", 1, "team"], ["id", "pricing", 1, "pricing"], [1, "col-lg-4", "col-md-6"], [1, "na"], [1, "btn-wrap"], ["href", "#", 1, "btn-buy"], [1, "col-lg-4", "col-md-6", "mt-4", "mt-md-0"], [1, "box", "recommended"], [1, "col-lg-4", "col-md-6", "mt-4", "mt-lg-0"], ["id", "faq", 1, "faq", "section-bg"], [1, "faq-list"], ["data-aos", "fade-up"], [1, "bx", "bx-help-circle", "icon-help"], ["data-bs-toggle", "collapse", "data-bs-target", "#faq-list-1", 1, "collapse"], [1, "bx", "bx-chevron-down", "icon-show"], [1, "bx", "bx-chevron-up", "icon-close"], ["id", "faq-list-1", "data-bs-parent", ".faq-list", 1, "collapse", "show"], ["data-aos", "fade-up", "data-aos-delay", "100"], ["data-bs-toggle", "collapse", "data-bs-target", "#faq-list-2", 1, "collapsed"], ["id", "faq-list-2", "data-bs-parent", ".faq-list", 1, "collapse"], ["data-aos", "fade-up", "data-aos-delay", "200"], ["data-bs-toggle", "collapse", "data-bs-target", "#faq-list-3", 1, "collapsed"], ["id", "faq-list-3", "data-bs-parent", ".faq-list", 1, "collapse"], ["data-aos", "fade-up", "data-aos-delay", "300"], ["data-bs-toggle", "collapse", "data-bs-target", "#faq-list-4", 1, "collapsed"], ["id", "faq-list-4", "data-bs-parent", ".faq-list", 1, "collapse"], ["data-aos", "fade-up", "data-aos-delay", "400"], ["data-bs-toggle", "collapse", "data-bs-target", "#faq-list-5", 1, "collapsed"], ["id", "faq-list-5", "data-bs-parent", ".faq-list", 1, "collapse"], ["id", "contact", 1, "contact"], [1, "row", "contact-info"], [1, "col-md-4"], [1, "contact-address"], [1, "bi", "bi-geo-alt"], [1, "contact-phone"], [1, "bi", "bi-phone"], ["href", "tel:+155895548855"], [1, "contact-email"], [1, "bi", "bi-envelope"], ["href", "mailto:info@example.com"], [1, "form"], ["action", "forms/contact.php", "method", "post", "role", "form", 1, "php-email-form"], [1, "col-md-6", "form-group"], ["type", "text", "name", "name", "id", "name", "placeholder", "Your Name", "data-rule", "minlen:4", "data-msg", "Please enter at least 4 chars", 1, "form-control"], [1, "col-md-6", "form-group", "mt-3", "mt-md-0"], ["type", "email", "name", "email", "id", "email", "placeholder", "Your Email", "data-rule", "email", "data-msg", "Please enter a valid email", 1, "form-control"], [1, "form-group", "mt-3"], ["type", "text", "name", "subject", "id", "subject", "placeholder", "Subject", "required", "", 1, "form-control"], ["name", "message", "rows", "5", "placeholder", "Message", "required", "", 1, "form-control"], [1, "my-3"], [1, "loading"], [1, "error-message"], [1, "sent-message"], [1, "text-center"], ["type", "submit"], ["id", "footer"], [1, "footer-top"], [1, "col-lg-3", "col-md-6"], [1, "footer-info"], [1, "social-links", "mt-3"], ["href", "#", 1, "twitter"], [1, "bx", "bxl-twitter"], ["href", "#", 1, "facebook"], [1, "bx", "bxl-facebook"], ["href", "#", 1, "instagram"], [1, "bx", "bxl-instagram"], ["href", "#", 1, "google-plus"], [1, "bx", "bxl-skype"], ["href", "#", 1, "linkedin"], [1, "bx", "bxl-linkedin"], [1, "col-lg-2", "col-md-6", "footer-links"], [1, "bx", "bx-chevron-right"], [1, "col-lg-3", "col-md-6", "footer-links"], [1, "col-lg-4", "col-md-6", "footer-newsletter"], ["action", "", "method", "post"], ["type", "email", "name", "email"], ["type", "submit", "value", "Subscribe"], [1, "copyright"], [1, "credits"], ["href", "https://bootstrapmade.com/"], [3, "imgurl", "title", "description"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "Groovin/Ahmad-kheir");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "nav", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, "About");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "Services");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, "Portfolio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, "Team");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, "Blog");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](28, "Drop Down");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](29, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](33, "Drop Down 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](37, "Deep Drop Down");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](38, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](42, "Deep Drop Down 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](45, "Deep Drop Down 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](48, "Deep Drop Down 3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](51, "Deep Drop Down 4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](52, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](53, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](54, "Deep Drop Down 5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](55, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](56, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](57, "Drop Down 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](58, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](59, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](60, "Drop Down 3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](61, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](62, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](63, "Drop Down 4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](64, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](65, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](66, "Contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](67, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](68, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](69, "Get Started");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](70, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](71, "section", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](72, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](73, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](74, "ol", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](75, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](76, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](77, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](78, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](79, "h2", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](80, "Welcom to my angular websit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](81, "p", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](82, "Hello my name ahmad kheir i'm computer science students, and i study at liu ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](83, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](84, "a", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](85, "about us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](86, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](87, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](88, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](89, "h2", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](90, "Lorem Ipsum Dolor");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](91, "p", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](92, "Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus et tempore modi architecto.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](93, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](94, "a", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](95, "Read More");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](96, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](97, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](98, "img", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](99, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](100, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](101, "h2", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](102, "Sequi ea ut et est quaerat");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](103, "p", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](104, "Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus et tempore modi architecto.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](105, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](106, "a", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](107, "Read More");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](108, "a", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](109, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](110, "a", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](111, "span", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](112, "main", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](113, "section", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](114, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](115, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](116, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](117, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](118, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](119, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](120, "Voluptatem dignissimos provident quasi");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](121, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](122, " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](123, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](124, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](125, "i", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](126, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](127, "Corporis voluptates sit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](128, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](129, "Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](130, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](131, "i", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](132, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](133, "Ullamco laboris nisi");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](134, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](135, "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](136, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](137, "i", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](138, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](139, "Labore consequatur");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](140, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](141, "Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut maiores omnis facere");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](142, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](143, "i", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](144, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](145, "Beatae veritatis");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](146, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](147, "Expedita veritatis consequuntur nihil tempore laudantium vitae denat pacta");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](148, "section", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](149, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](150, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](151, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](152, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](153, "i", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](154, "span", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](155, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](156, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](157, "Happy Clients");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](158, " consequuntur quae");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](159, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](160, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](161, "i", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](162, "span", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](163, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](164, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](165, "Projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](166, " adipisci atque cum quia aut");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](167, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](168, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](169, "i", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](170, "span", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](171, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](172, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](173, "Hours Of Support");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](174, " aut commodi quaerat");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](175, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](176, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](177, "i", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](178, "span", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](179, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](180, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](181, "Hard Workers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](182, " rerum asperiores dolor");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](183, "section", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](184, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](185, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](186, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](187, "img", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](188, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](189, "img", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](190, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](191, "img", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](192, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](193, "img", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](194, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](195, "img", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](196, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](197, "img", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](198, "section", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](199, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](200, "div", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](201, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](202, "Services");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](203, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](204, "Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](205, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](206, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](207, "div", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](208, "i", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](209, "h4", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](210, "a", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](211, "Lorem Ipsum");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](212, "p", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](213, "Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](214, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](215, "div", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](216, "i", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](217, "h4", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](218, "a", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](219, "Dolor Sitema");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](220, "p", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](221, "Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](222, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](223, "div", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](224, "i", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](225, "h4", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](226, "a", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](227, "Sed ut perspiciatis");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](228, "p", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](229, "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](230, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](231, "div", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](232, "i", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](233, "h4", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](234, "a", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](235, "Magni Dolores");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](236, "p", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](237, "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](238, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](239, "div", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](240, "i", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](241, "h4", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](242, "a", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](243, "Nemo Enim");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](244, "p", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](245, "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](246, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](247, "div", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](248, "i", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](249, "h4", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](250, "a", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](251, "Eiusmod Tempor");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](252, "p", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](253, "Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](254, "section", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](255, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](256, "div", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](257, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](258, "Why Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](259, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](260, "Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](261, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](262, "div", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](263, "app-feature2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](264, "div", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](265, "div", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](266, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](267, "02");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](268, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](269, "Repellat Nihil");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](270, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](271, "Dolorem est fugiat occaecati voluptate velit esse. Dicta veritatis dolor quod et vel dire leno para dest");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](272, "div", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](273, "div", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](274, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](275, "03");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](276, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](277, " Ad ad velit qui");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](278, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](279, "Molestiae officiis omnis illo asperiores. Aut doloribus vitae sunt debitis quo vel nam quis");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](280, "section", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](281, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](282, "div", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](283, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](284, "Portfolio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](285, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](286, "Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](287, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](288, "div", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](289, "ul", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](290, "li", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](291, "All");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](292, "li", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](293, "App");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](294, "li", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](295, "Card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](296, "li", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](297, "Web");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](298, "div", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](299, AppComponent_div_299_Template, 2, 6, "div", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](300, "section", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](301, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](302, "div", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](303, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](304, "Team");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](305, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](306, "Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](307, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](308, AppComponent_div_308_Template, 2, 6, "div", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](309, "section", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](310, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](311, "div", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](312, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](313, "Pricing");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](314, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](315, "Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](316, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](317, "div", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](318, "div", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](319, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](320, "Free");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](321, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](322, "sup");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](323, "$");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](324, "0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](325, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](326, " / month");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](327, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](328, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](329, "Aida dere");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](330, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](331, "Nec feugiat nisl");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](332, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](333, "Nulla at volutpat dola");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](334, "li", 98);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](335, "Pharetra massa");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](336, "li", 98);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](337, "Massa ultricies mi");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](338, "div", 99);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](339, "a", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](340, "Buy Now");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](341, "div", 101);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](342, "div", 102);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](343, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](344, "Business");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](345, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](346, "sup");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](347, "$");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](348, "19");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](349, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](350, " / month");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](351, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](352, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](353, "Aida dere");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](354, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](355, "Nec feugiat nisl");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](356, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](357, "Nulla at volutpat dola");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](358, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](359, "Pharetra massa");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](360, "li", 98);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](361, "Massa ultricies mi");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](362, "div", 99);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](363, "a", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](364, "Buy Now");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](365, "div", 103);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](366, "div", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](367, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](368, "Developer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](369, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](370, "sup");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](371, "$");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](372, "29");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](373, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](374, " / month");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](375, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](376, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](377, "Aida dere");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](378, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](379, "Nec feugiat nisl");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](380, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](381, "Nulla at volutpat dola");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](382, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](383, "Pharetra massa");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](384, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](385, "Massa ultricies mi");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](386, "div", 99);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](387, "a", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](388, "Buy Now");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](389, "section", 104);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](390, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](391, "div", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](392, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](393, "Frequently Asked Questions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](394, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](395, "Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](396, "div", 105);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](397, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](398, "li", 106);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](399, "i", 107);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](400, "a", 108);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](401, "Non consectetur a erat nam at lectus urna duis? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](402, "i", 109);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](403, "i", 110);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](404, "div", 111);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](405, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](406, " Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](407, "li", 112);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](408, "i", 107);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](409, "a", 113);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](410, "Feugiat scelerisque varius morbi enim nunc? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](411, "i", 109);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](412, "i", 110);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](413, "div", 114);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](414, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](415, " Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](416, "li", 115);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](417, "i", 107);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](418, "a", 116);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](419, "Dolor sit amet consectetur adipiscing elit? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](420, "i", 109);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](421, "i", 110);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](422, "div", 117);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](423, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](424, " Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Faucibus pulvinar elementum integer enim. Sem nulla pharetra diam sit amet nisl suscipit. Rutrum tellus pellentesque eu tincidunt. Lectus urna duis convallis convallis tellus. Urna molestie at elementum eu facilisis sed odio morbi quis ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](425, "li", 118);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](426, "i", 107);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](427, "a", 119);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](428, "Tempus quam pellentesque nec nam aliquam sem et tortor consequat? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](429, "i", 109);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](430, "i", 110);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](431, "div", 120);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](432, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](433, " Molestie a iaculis at erat pellentesque adipiscing commodo. Dignissim suspendisse in est ante in. Nunc vel risus commodo viverra maecenas accumsan. Sit amet nisl suscipit adipiscing bibendum est. Purus gravida quis blandit turpis cursus in. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](434, "li", 121);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](435, "i", 107);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](436, "a", 122);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](437, "Tortor vitae purus faucibus ornare. Varius vel pharetra vel turpis nunc eget lorem dolor? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](438, "i", 109);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](439, "i", 110);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](440, "div", 123);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](441, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](442, " Laoreet sit amet cursus sit amet dictum sit amet justo. Mauris vitae ultricies leo integer malesuada nunc vel. Tincidunt eget nullam non nisi est sit amet. Turpis nunc eget lorem dolor sed. Ut venenatis tellus in metus vulputate eu scelerisque. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](443, "section", 124);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](444, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](445, "div", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](446, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](447, "Contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](448, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](449, "Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](450, "div", 125);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](451, "div", 126);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](452, "div", 127);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](453, "i", 128);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](454, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](455, "Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](456, "address");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](457, "A108 Adam Street, NY 535022, USA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](458, "div", 126);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](459, "div", 129);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](460, "i", 130);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](461, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](462, "Phone Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](463, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](464, "a", 131);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](465, "+1 5589 55488 55");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](466, "div", 126);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](467, "div", 132);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](468, "i", 133);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](469, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](470, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](471, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](472, "a", 134);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](473, "info@example.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](474, "div", 135);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](475, "form", 136);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](476, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](477, "div", 137);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](478, "input", 138);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](479, "div", 139);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](480, "input", 140);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](481, "div", 141);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](482, "input", 142);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](483, "div", 141);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](484, "textarea", 143);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](485, "div", 144);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](486, "div", 145);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](487, "Loading");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](488, "div", 146);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](489, "div", 147);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](490, "Your message has been sent. Thank you!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](491, "div", 148);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](492, "button", 149);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](493, "Send Message");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](494, "footer", 150);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](495, "div", 151);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](496, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](497, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](498, "div", 152);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](499, "div", 153);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](500, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](501, "Groovin");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](502, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](503, " A108 Adam Street ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](504, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](505, " NY 535022, USA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](506, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](507, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](508, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](509, "Phone:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](510, " +1 5589 55488 55");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](511, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](512, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](513, "Email:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](514, " info@example.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](515, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](516, "div", 154);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](517, "a", 155);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](518, "i", 156);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](519, "a", 157);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](520, "i", 158);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](521, "a", 159);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](522, "i", 160);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](523, "a", 161);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](524, "i", 162);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](525, "a", 163);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](526, "i", 164);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](527, "div", 165);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](528, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](529, "Useful Links");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](530, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](531, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](532, "i", 166);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](533, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](534, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](535, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](536, "i", 166);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](537, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](538, "About us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](539, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](540, "i", 166);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](541, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](542, "Services");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](543, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](544, "i", 166);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](545, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](546, "Terms of service");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](547, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](548, "i", 166);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](549, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](550, "Privacy policy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](551, "div", 167);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](552, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](553, "Our Services");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](554, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](555, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](556, "i", 166);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](557, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](558, "Web Design");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](559, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](560, "i", 166);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](561, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](562, "Web Development");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](563, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](564, "i", 166);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](565, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](566, "Product Management");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](567, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](568, "i", 166);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](569, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](570, "Marketing");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](571, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](572, "i", 166);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](573, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](574, "Graphic Design");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](575, "div", 168);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](576, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](577, "Our Newsletter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](578, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](579, "Tamen quem nulla quae legam multos aute sint culpa legam noster magna");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](580, "form", 169);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](581, "input", 170);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](582, "input", 171);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](583, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](584, "div", 172);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](585, " \u00A9 Copyright ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](586, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](587, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](588, "Groovin");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](589, ". All Rights Reserved ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](590, "div", 173);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](591, " Designed by ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](592, "a", 174);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](593, "BootstrapMade");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](299);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.Feature);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.Feature);
    } }, directives: [_feature2_feature2_component__WEBPACK_IMPORTED_MODULE_1__["Feature2Component"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _feature_feature_component__WEBPACK_IMPORTED_MODULE_3__["FeatureComponent"], _feature3_feature3_component__WEBPACK_IMPORTED_MODULE_4__["Feature3Component"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });
class featureinfo {
}


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
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _feature_feature_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./feature/feature.component */ "pSYE");
/* harmony import */ var _feature2_feature2_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./feature2/feature2.component */ "I/9m");
/* harmony import */ var _feature3_feature3_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./feature3/feature3.component */ "gbHl");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");






class AppModule {
}
AppModule.??fac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????defineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"]] });
AppModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????defineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["????setNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"],
        _feature_feature_component__WEBPACK_IMPORTED_MODULE_2__["FeatureComponent"],
        _feature2_feature2_component__WEBPACK_IMPORTED_MODULE_3__["Feature2Component"],
        _feature3_feature3_component__WEBPACK_IMPORTED_MODULE_4__["Feature3Component"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]] }); })();


/***/ }),

/***/ "gbHl":
/*!************************************************!*\
  !*** ./src/app/feature3/feature3.component.ts ***!
  \************************************************/
/*! exports provided: Feature3Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Feature3Component", function() { return Feature3Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class Feature3Component {
    constructor() {
        this.imgurl = 'https://cdn.pixabay.com/photo/2020/09/17/12/41/cafe-5579069_1280.jpg';
        this.title = 'Ahmad';
        this.description = '....Asd....Asd....Asd...';
    }
    ngOnInit() {
    }
}
Feature3Component.??fac = function Feature3Component_Factory(t) { return new (t || Feature3Component)(); };
Feature3Component.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: Feature3Component, selectors: [["app-feature3"]], inputs: { imgurl: "imgurl", title: "title", description: "description" }, decls: 17, vars: 2, consts: [[1, "member", 2, "border", "2px solid red"], ["src", "imgurl", "alt", "", 1, "img-fluid"], [1, "member-info"], [1, "member-info-content"], [1, "social"], ["href", ""], [1, "bi", "bi-twitter"], [1, "bi", "bi-facebook"], [1, "bi", "bi-instagram"], [1, "bi", "bi-linkedin"]], template: function Feature3Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](10, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](12, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](14, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](16, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.description);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmZWF0dXJlMy5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ "pSYE":
/*!**********************************************!*\
  !*** ./src/app/feature/feature.component.ts ***!
  \**********************************************/
/*! exports provided: FeatureComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeatureComponent", function() { return FeatureComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class FeatureComponent {
    constructor() {
        this.imgurl = 'https://cdn.pixabay.com/photo/2020/09/17/12/41/cafe-5579069_1280.jpg';
        this.title = 'Ahmad';
        this.description = '....Asd....Asd....Asd...';
    }
    ngOnInit() {
    }
}
FeatureComponent.??fac = function FeatureComponent_Factory(t) { return new (t || FeatureComponent)(); };
FeatureComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: FeatureComponent, selectors: [["app-feature"]], inputs: { imgurl: "imgurl", title: "title", description: "description" }, decls: 12, vars: 3, consts: [[1, "portfolio-wrap", 2, "border", "2px solid red"], ["alt", "", 1, "img-fluid", 3, "src"], [1, "portfolio-info"], [1, "portfolio-links"], ["href", "assets/img/portfolio/portfolio-1.jpg", "data-gallery", "portfolioGallery", "title", "App 1", 1, "portfolio-lightbox"], [1, "bx", "bx-plus"], ["href", "portfolio-details.html", "title", "More Details"], [1, "bx", "bx-link"]], template: function FeatureComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](9, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](11, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("src", ctx.imgurl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.description);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmZWF0dXJlLmNvbXBvbmVudC5jc3MifQ== */"] });


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

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map