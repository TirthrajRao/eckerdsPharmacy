(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["about-about-module"],{

/***/ "./src/app/about/about.module.ts":
/*!***************************************!*\
  !*** ./src/app/about/about.module.ts ***!
  \***************************************/
/*! exports provided: AboutPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutPageModule", function() { return AboutPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _about_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./about.page */ "./src/app/about/about.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _about_page__WEBPACK_IMPORTED_MODULE_5__["AboutPage"]
    }
];
var AboutPageModule = /** @class */ (function () {
    function AboutPageModule() {
    }
    AboutPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_about_page__WEBPACK_IMPORTED_MODULE_5__["AboutPage"]]
        })
    ], AboutPageModule);
    return AboutPageModule;
}());



/***/ }),

/***/ "./src/app/about/about.page.html":
/*!***************************************!*\
  !*** ./src/app/about/about.page.html ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n  \t <ion-buttons slot=\"end\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title><i class=\"fa fa-info-circle\"> </i> About Us</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n\t<img src=\"../assets/about1.jpeg\" width=\"100%\" height=\"100px\">\n\n\t<div style=\"margin: 20px 0px\">\n\t<i class=\"fa fa-info-circle\"> </i> About Us\n\t</div>\n\n\t<p>\n\tKeep close to Nature's heart... and break clear away, once in awhile, and climb a mountain or spend a week in the woods. Wash your spirit clean. Keep close to Nature's heart... and break clear away, once in awhile, and climb a mountain or spend a week in the woods. Wash your spirit clean.\n\t</p>\n\n\t<p>\n\tKeep close to Nature's heart... and break clear away, once in awhile, and climb a mountain or spend a week in the woods. Wash your spirit clean.\n\t</p>\n\n\t<div class=\"block\">\n\t<i class=\"fa fa-building\"></i> Keep close to Nature's heart... and break clear away.\n\t</div>\n\n\t<div class=\"table\">\n\t<table>\n\t\t<tr>\n\t\t\t<td width=\"10%\">1</td>\n\t\t\t<td><span>Keep close to Nature's heart</span>\n\t\t\t\t<span>Established in 2011</span>\n\t\t\t</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td>2</td>\n\t\t\t<td><span>Keep close to Nature's heart</span>\n\t\t\t\t<span>Established in 2011</span>\n\t\t\t</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td>3</td>\n\t\t\t<td><span>Keep close to Nature's heart</span>\n\t\t\t\t<span>Established in 2011</span>\n\t\t\t</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td>4</td>\n\t\t\t<td><span>Keep close to Nature's heart</span>\n\t\t\t\t<span>Established in 2011</span>\n\t\t\t</td>\n\t\t</tr>\n\t</table>\n\t</div>\n\n\t<p>\n\tKeep close to Nature's heart... and break clear away, once in awhile, and climb a mountain or spend a week in the woods. Wash your spirit clean. Keep close to Nature's heart... and break clear away, once in awhile, and climb a mountain or spend a week in the woods. Wash your spirit clean.\n\t</p>\n\n\t<p>\n\tKeep close to Nature's heart... and break clear away, once in awhile, and climb a mountain or spend a week in the woods. Wash your spirit clean.\n\t</p>\n\n\t<p>\n\tKeep close to Nature's heart... and break clear away, once in awhile, and climb a mountain or spend a week in the woods. Wash your spirit clean. Keep close to Nature's heart... and break clear away, once in awhile, and climb a mountain or spend a week in the woods. Wash your spirit clean.\n\t</p>\n\n\t<p>\n\tKeep close to Nature's heart... and break clear away, once in awhile, and climb a mountain or spend a week in the woods. Wash your spirit clean.\n\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar>\n    <ion-title style=\"text-align: center;\"><img src=\"../assets/logoCrop.png\" height=\"30px\" width=\"60px\"></ion-title>\n  </ion-toolbar>\n</ion-footer>"

/***/ }),

/***/ "./src/app/about/about.page.scss":
/*!***************************************!*\
  !*** ./src/app/about/about.page.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "p {\n  font-size: 13px; }\n\n.block {\n  display: block;\n  font-size: 13px; }\n\ntd {\n  font-size: 13px; }\n\n.table {\n  padding-top: 20px; }\n\ntd {\n  padding: 0px 15px; }\n\ntd span {\n  display: block; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvZWNrZXJkc1BoYXJtYWN5L3NyYy9hcHAvYWJvdXQvYWJvdXQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsZUFDRCxFQUFBOztBQUVBO0VBQ0MsY0FBYTtFQUNiLGVBQ0QsRUFBQTs7QUFFQTtFQUNDLGVBQ0QsRUFBQTs7QUFFQTtFQUNDLGlCQUFpQixFQUFBOztBQUdsQjtFQUNDLGlCQUFpQixFQUFBOztBQUdsQjtFQUNDLGNBQ0QsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2Fib3V0L2Fib3V0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInB7XG5cdGZvbnQtc2l6ZToxM3B4XG59XG5cbi5ibG9ja3tcblx0ZGlzcGxheTpibG9jaztcblx0Zm9udC1zaXplOjEzcHhcbn1cblxudGR7XG5cdGZvbnQtc2l6ZToxM3B4XG59XG5cbi50YWJsZXtcblx0cGFkZGluZy10b3A6IDIwcHg7XG59XG5cbnRke1xuXHRwYWRkaW5nOiAwcHggMTVweDtcbn1cblxudGQgc3Bhbntcblx0ZGlzcGxheTpibG9ja1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/about/about.page.ts":
/*!*************************************!*\
  !*** ./src/app/about/about.page.ts ***!
  \*************************************/
/*! exports provided: AboutPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutPage", function() { return AboutPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutPage = /** @class */ (function () {
    function AboutPage() {
    }
    AboutPage.prototype.ngOnInit = function () {
    };
    AboutPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.page.html */ "./src/app/about/about.page.html"),
            styles: [__webpack_require__(/*! ./about.page.scss */ "./src/app/about/about.page.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutPage);
    return AboutPage;
}());



/***/ })

}]);
//# sourceMappingURL=about-about-module.js.map