(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["franchise-franchise-module"],{

/***/ "./src/app/franchise/franchise.module.ts":
/*!***********************************************!*\
  !*** ./src/app/franchise/franchise.module.ts ***!
  \***********************************************/
/*! exports provided: FranchisePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FranchisePageModule", function() { return FranchisePageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _franchise_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./franchise.page */ "./src/app/franchise/franchise.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _franchise_page__WEBPACK_IMPORTED_MODULE_5__["FranchisePage"]
    }
];
var FranchisePageModule = /** @class */ (function () {
    function FranchisePageModule() {
    }
    FranchisePageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_franchise_page__WEBPACK_IMPORTED_MODULE_5__["FranchisePage"]]
        })
    ], FranchisePageModule);
    return FranchisePageModule;
}());



/***/ }),

/***/ "./src/app/franchise/franchise.page.html":
/*!***********************************************!*\
  !*** ./src/app/franchise/franchise.page.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n  \t <ion-buttons slot=\"end\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title><ion-icon name=\"arrow-round-forward\"></ion-icon>Franchise Opportunity</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n\t<div class=\"heading\">\n\t<img src=\"../assets/franchise.png\">\n\t</div>\n\n\t<ion-icon name=\"arrow-round-forward\"></ion-icon>Registerd Pharmacist\n\n\t<p>\n\tKeep close to Nature's heart... and break clear away, once in awhile, and climb a mountain or spend a week in the woods. Wash your spirit clean. Keep close to Nature's heart... and break clear away, once in awhile, and climb a mountain or spend a week in the woods. Wash your spirit clean. Keep close to Nature's heart... and break clear away, once in awhile, and climb a mountain or spend a week in the woods. Wash your spirit clean. Keep close to Nature's heart... and break clear away, once in awhile, and climb a mountain or spend a week in the woods. Wash your spirit clean.  \n\t</p>\n\n\t<p>\n\tKeep close to Nature's heart... and break clear away, once in awhile, and climb a mountain or spend a week in the woods. Wash your spirit clean. Keep close to Nature's heart... and break clear away, once in awhile, and climb a mountain or spend a week in the woods. Wash your spirit clean.\n\n\t<p>\n\tKeep close to Nature's heart... and break clear away, once in awhile, and climb a mountain or spend a week in the woods. Wash your spirit clean. Keep close to Nature's heart... and break clear away, once in awhile, and climb a mountain or spend a week in the woods. Wash your spirit clean. Keep close to Nature's heart... and break clear away, once in awhile, and climb a mountain or spend a week in the woods. Wash your spirit clean.  \n\t</p>\n\n\t<p>\n\tKeep close to Nature's heart... and break clear away, once in awhile, and climb a mountain or spend a week in the woods. Wash your spirit clean. \n\t</p>\n\n\t<p>\n\tKeep close to Nature's heart... and break clear away, once in awhile, and climb a mountain or spend a week in the woods. Wash your spirit clean. Keep close to Nature's heart... and break clear away, once in awhile, and climb a mountain or spend a week in the woods. Wash your spirit clean. Keep close to Nature's heart... and break clear away, once in awhile, and climb a mountain or spend a week in the woods. \n\t</p>\n\n\t<p>\n\tKeep close to Nature's heart... and break clear away, once in awhile, and climb a mountain or spend a week in the woods. Wash your spirit clean. Keep close to Nature's heart... and break clear away, once in awhile, and climb a mountain or spend a week in the woods. Wash your spirit clean. Keep close to Nature's.\n\n\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar>\n    <ion-title style=\"text-align: center;\"><img src=\"../assets/logoCrop.png\" height=\"30px\" width=\"60px\"></ion-title>\n  </ion-toolbar>\n</ion-footer>\n"

/***/ }),

/***/ "./src/app/franchise/franchise.page.scss":
/*!***********************************************!*\
  !*** ./src/app/franchise/franchise.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".heading {\n  padding: 10px 0px; }\n\np {\n  font-size: 13px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvZWNrZXJkc1BoYXJtYWN5L3NyYy9hcHAvZnJhbmNoaXNlL2ZyYW5jaGlzZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxpQkFBaUIsRUFBQTs7QUFHbEI7RUFDQyxlQUNELEVBQUEiLCJmaWxlIjoic3JjL2FwcC9mcmFuY2hpc2UvZnJhbmNoaXNlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkaW5ne1xuXHRwYWRkaW5nOiAxMHB4IDBweDtcbn1cblxucHtcblx0Zm9udC1zaXplOjEzcHhcbn0iXX0= */"

/***/ }),

/***/ "./src/app/franchise/franchise.page.ts":
/*!*********************************************!*\
  !*** ./src/app/franchise/franchise.page.ts ***!
  \*********************************************/
/*! exports provided: FranchisePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FranchisePage", function() { return FranchisePage; });
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

var FranchisePage = /** @class */ (function () {
    function FranchisePage() {
    }
    FranchisePage.prototype.ngOnInit = function () {
    };
    FranchisePage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-franchise',
            template: __webpack_require__(/*! ./franchise.page.html */ "./src/app/franchise/franchise.page.html"),
            styles: [__webpack_require__(/*! ./franchise.page.scss */ "./src/app/franchise/franchise.page.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FranchisePage);
    return FranchisePage;
}());



/***/ })

}]);
//# sourceMappingURL=franchise-franchise-module.js.map