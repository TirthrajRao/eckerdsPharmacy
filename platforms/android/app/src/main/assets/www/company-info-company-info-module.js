(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["company-info-company-info-module"],{

/***/ "./src/app/company-info/company-info.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/company-info/company-info.module.ts ***!
  \*****************************************************/
/*! exports provided: CompanyInfoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyInfoPageModule", function() { return CompanyInfoPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _company_info_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./company-info.page */ "./src/app/company-info/company-info.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _company_info_page__WEBPACK_IMPORTED_MODULE_5__["CompanyInfoPage"]
    }
];
var CompanyInfoPageModule = /** @class */ (function () {
    function CompanyInfoPageModule() {
    }
    CompanyInfoPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_company_info_page__WEBPACK_IMPORTED_MODULE_5__["CompanyInfoPage"]]
        })
    ], CompanyInfoPageModule);
    return CompanyInfoPageModule;
}());



/***/ }),

/***/ "./src/app/company-info/company-info.page.html":
/*!*****************************************************!*\
  !*** ./src/app/company-info/company-info.page.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n  \t <ion-buttons slot=\"end\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title style=\"float: left;\"><i class=\"fa fa-book\" aria-hidden=\"true\"></i> Company Information</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n\n<ion-card>\n  <ion-card-header>\n    <ion-card-subtitle>About Us</ion-card-subtitle>\n  </ion-card-header>\n\n  <ion-card-content>\n  \t<img src=\"../assets/about1.jpeg\" style=\"float: left;\" width=\"20px\" height=\"60px\">\n\n    <p class=\"infoContent\"> Keep close to Nature's heart... and break clear away, once in awhile,\n    and climb a mountain or spend a week in the woods. Wash your spirit clean.\n\t</p>\n   <a href=\"../about\">Read More</a>\n\n  </ion-card-content>\n</ion-card>\n\n<ion-card>\n  <ion-card-header>\n    <ion-card-subtitle>Career with Eckerds</ion-card-subtitle>\n  </ion-card-header>\n\n  <ion-card-content>\n  \t<img src=\"../assets/career.jpeg\" style=\"float: left;\" width=\"20px\" height=\"60px\">\n\n    <p class=\"infoContent\"> Keep close to Nature's heart... and break clear away, once in awhile,\n    and climb a mountain or spend a week in the woods. Wash your spirit clean.\n\t</p>\n   <a href=\"../career\">Read More</a>\n  </ion-card-content>\n</ion-card>\n\n<ion-card>\n  <ion-card-header>\n    <ion-card-subtitle>Franchise Opportunities</ion-card-subtitle>\n  </ion-card-header>\n\n  <ion-card-content>\n  \t<img src=\"../assets/about2.jpeg\" style=\"float: left;\" width=\"20px\" height=\"60px\">\n\n    <p class=\"infoContent\"> Keep close to Nature's heart... and break clear away, once in awhile,\n    and climb a mountain or spend a week in the woods. Wash your spirit clean.\n\t</p>\n   <a href=\"../franchise\">Read More</a>\n  </ion-card-content>\n</ion-card>\n\n<ion-card>\n  <ion-card-header>\n    <ion-card-subtitle>Locations</ion-card-subtitle>\n  </ion-card-header>\n\n  <ion-card-content>\n  \t<img src=\"../assets/about1.jpeg\" style=\"float: left;\" width=\"20px\" height=\"60px\">\n\n    <p class=\"infoContent\">\n      <span>Eckerds Pharmacy has its branches in 4 differet locations.</span>\n      <span>1. Wauchula</span>\n      <span>2. Palmetto</span>\n      <span>3. Bradenton</span>\n      <span>4. Apollo Beach</span>\n      <span>...</span>\n\t</p>\n\n  <a href=\"../location\">Read More</a>\n\n\n\n  </ion-card-content>\n</ion-card>\n\n<ion-card>\n  <ion-card-header>\n    <ion-card-subtitle>Speciality Compounding</ion-card-subtitle>\n  </ion-card-header>\n\n  <ion-card-content>\n  \t<img src=\"../assets/about1.jpeg\" style=\"float: left;\" width=\"20px\" height=\"60px\">\n\n    <p class=\"infoContent\"> Keep close to Nature's heart... and break clear away, once in awhile,\n    and climb a mountain or spend a week in the woods. Wash your spirit clean.\n\t</p>\n   <a href=\"../speciality\">Read More</a>\n  </ion-card-content>\n</ion-card>\n\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar>\n    <ion-title style=\"text-align: center;\"><img src=\"../assets/logoCrop.png\" height=\"30px\" width=\"60px\"></ion-title>\n  </ion-toolbar>\n</ion-footer>\n"

/***/ }),

/***/ "./src/app/company-info/company-info.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/company-info/company-info.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-card-header {\n  background-color: #e3eaef; }\n\np span {\n  display: block; }\n\n.headerColor {\n  background-color: #f7daf0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvZWNrZXJkc1BoYXJtYWN5L3NyYy9hcHAvY29tcGFueS1pbmZvL2NvbXBhbnktaW5mby5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyx5QkFDRCxFQUFBOztBQUNBO0VBQ0MsY0FBYyxFQUFBOztBQUVmO0VBQ0kseUJBQXdCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wYW55LWluZm8vY29tcGFueS1pbmZvLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jYXJkLWhlYWRlcntcblx0YmFja2dyb3VuZC1jb2xvcjogI2UzZWFlZlxufVxucCBzcGFue1xuXHRkaXNwbGF5OiBibG9jaztcbn1cbi5oZWFkZXJDb2xvcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNmN2RhZjA7XG59Il19 */"

/***/ }),

/***/ "./src/app/company-info/company-info.page.ts":
/*!***************************************************!*\
  !*** ./src/app/company-info/company-info.page.ts ***!
  \***************************************************/
/*! exports provided: CompanyInfoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyInfoPage", function() { return CompanyInfoPage; });
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

var CompanyInfoPage = /** @class */ (function () {
    function CompanyInfoPage() {
    }
    CompanyInfoPage.prototype.ngOnInit = function () {
    };
    CompanyInfoPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-company-info',
            template: __webpack_require__(/*! ./company-info.page.html */ "./src/app/company-info/company-info.page.html"),
            styles: [__webpack_require__(/*! ./company-info.page.scss */ "./src/app/company-info/company-info.page.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CompanyInfoPage);
    return CompanyInfoPage;
}());



/***/ })

}]);
//# sourceMappingURL=company-info-company-info-module.js.map