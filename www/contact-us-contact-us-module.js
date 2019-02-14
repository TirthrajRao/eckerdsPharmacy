(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["contact-us-contact-us-module"],{

/***/ "./src/app/contact-us/contact-us.module.ts":
/*!*************************************************!*\
  !*** ./src/app/contact-us/contact-us.module.ts ***!
  \*************************************************/
/*! exports provided: ContactUsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactUsPageModule", function() { return ContactUsPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _contact_us_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contact-us.page */ "./src/app/contact-us/contact-us.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _contact_us_page__WEBPACK_IMPORTED_MODULE_5__["ContactUsPage"]
    }
];
var ContactUsPageModule = /** @class */ (function () {
    function ContactUsPageModule() {
    }
    ContactUsPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_contact_us_page__WEBPACK_IMPORTED_MODULE_5__["ContactUsPage"]]
        })
    ], ContactUsPageModule);
    return ContactUsPageModule;
}());



/***/ }),

/***/ "./src/app/contact-us/contact-us.page.html":
/*!*************************************************!*\
  !*** ./src/app/contact-us/contact-us.page.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n  \t <ion-buttons slot=\"end\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title><i class=\"fa fa-phone\" aria-hidden=\"true\"></i> Contact Us</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n\n<h2>Corporate Headquater</h2>\n<p style=\"text-align: center;\">\n\t<span>Eckerds Pharmacy.</span>\n\t<span>5139 Manatee Ave West</span>\n\t<span>Bradenton FL 34209</span>\n\t<span>Phone: 185555535355</span>\n\t<span>Email: abcd@gmail.om</span>\n\t<span>Web: www.myEckerds.com</span>\n</p>\n\n<ion-card>\n\t<ion-card-content>\n  \t<h1 style=\"font-weight: bolder;\"><i class=\"fa fa-user-md\" aria-hidden=\"true\">Wauchula</i> </h1>\n\n  \t<h6 style=\"font-weight: bolder; padding-top: 10px\">Eckerds Pharmacy #101</h6>\n    <p> <span>518 South 6th Avenue</span>\n    \t<span>Wauchula FL 33873</span>\n    \t<span> </span>\n    \t<span></span>\n\t</p>\n\t<p style=\"margin-top: 20px\">\n\t\t<span>Phone: 84348484448</span>\n\t\t<span>Fax: 854983889</span>\n\t\t<span>Toll Free: 498948494</span>\n\t\t<span>Email: a@gmail.com</span>\n\t\t\n\t</p>\n  </ion-card-content>\n</ion-card>\n\n<ion-card>\n\t<ion-card-content>\n  \t<h1 style=\"font-weight: bolder;\"><i class=\"fa fa-user-md\" aria-hidden=\"true\">Palmetto</i> </h1>\n\n  \t<h6 style=\"font-weight: bolder; padding-top: 10px\">Eckerds Pharmacy #101</h6>\n    <p> <span>518 South 6th Avenue</span>\n    \t<span>Wauchula FL 33873</span>\n    \t<span> </span>\n    \t<span></span>\n\t</p>\n\t<p style=\"margin-top: 20px\">\n\t\t<span>Phone: 84348484448</span>\n\t\t<span>Fax: 854983889</span>\n\t\t<span>Toll Free: 498948494</span>\n\t\t<span>Email: a@gmail.com</span>\n\t\t\n\t</p>\n  </ion-card-content>\n</ion-card>\n\n<div class=\"vl\">\n<ion-card>\n\t<ion-card-content>\n  \t<h1 style=\"font-weight: bolder;\"><i class=\"fa fa-user-md\" aria-hidden=\"true\">Bradenton</i> </h1>\n\n  \t<h6 style=\"font-weight: bolder; padding-top: 10px\">Eckerds Pharmacy #101</h6>\n    <p> <span>518 South 6th Avenue</span>\n    \t<span>Wauchula FL 33873</span>\n    \t<span> </span>\n    \t<span></span>\n\t</p>\n\t<p style=\"margin-top: 20px\">\n\t\t<span>Phone: 84348484448</span>\n\t\t<span>Fax: 854983889</span>\n\t\t<span>Toll Free: 498948494</span>\n\t\t<span>Email: a@gmail.com</span>\n\t\t\n\t</p>\n  </ion-card-content>\n</ion-card>\n</div>\n\n<div class=\"vl\">\n<ion-card>\n\t<ion-card-content>\n  \t<h1 style=\"font-weight: bolder;\"><i class=\"fa fa-user-md\" aria-hidden=\"true\">Apollo Beach</i> </h1>\n\n  \t<h6 style=\"font-weight: bolder; padding-top: 10px\">Eckerds Pharmacy #101</h6>\n    <p> <span>518 South 6th Avenue</span>\n    \t<span>Wauchula FL 33873</span>\n    \t<span> </span>\n    \t<span></span>\n\t</p>\n\t<p style=\"margin-top: 20px\">\n\t\t<span>Phone: 84348484448</span>\n\t\t<span>Fax: 854983889</span>\n\t\t<span>Toll Free: 498948494</span>\n\t\t<span>Email: a@gmail.com</span>\n\t\t\n\t</p>\n  </ion-card-content>\n</ion-card>\n</div>\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar>\n    <ion-title style=\"text-align: center;\"><img src=\"../assets/logoCrop.png\" height=\"30px\" width=\"60px\"></ion-title>\n  </ion-toolbar>\n</ion-footer>"

/***/ }),

/***/ "./src/app/contact-us/contact-us.page.scss":
/*!*************************************************!*\
  !*** ./src/app/contact-us/contact-us.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "p span {\n  display: block; }\n\n.vl {\n  border-left: 3px solid grey; }\n\n.headerColor {\n  background-color: #f7daf0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvZWNrZXJkc1BoYXJtYWN5L3NyYy9hcHAvY29udGFjdC11cy9jb250YWN0LXVzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLGNBQWMsRUFBQTs7QUFHZjtFQUNFLDJCQUEyQixFQUFBOztBQUc3QjtFQUNJLHlCQUF3QixFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29udGFjdC11cy9jb250YWN0LXVzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInAgc3Bhbntcblx0ZGlzcGxheTogYmxvY2s7XG59XG5cbi52bCB7XG4gIGJvcmRlci1sZWZ0OiAzcHggc29saWQgZ3JleTtcbn1cblxuLmhlYWRlckNvbG9ye1xuICAgIGJhY2tncm91bmQtY29sb3I6I2Y3ZGFmMDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/contact-us/contact-us.page.ts":
/*!***********************************************!*\
  !*** ./src/app/contact-us/contact-us.page.ts ***!
  \***********************************************/
/*! exports provided: ContactUsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactUsPage", function() { return ContactUsPage; });
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

var ContactUsPage = /** @class */ (function () {
    function ContactUsPage() {
    }
    ContactUsPage.prototype.ngOnInit = function () {
    };
    ContactUsPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contact-us',
            template: __webpack_require__(/*! ./contact-us.page.html */ "./src/app/contact-us/contact-us.page.html"),
            styles: [__webpack_require__(/*! ./contact-us.page.scss */ "./src/app/contact-us/contact-us.page.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactUsPage);
    return ContactUsPage;
}());



/***/ })

}]);
//# sourceMappingURL=contact-us-contact-us-module.js.map