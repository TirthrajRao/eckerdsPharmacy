(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["location-location-module"],{

/***/ "./src/app/location/location.module.ts":
/*!*********************************************!*\
  !*** ./src/app/location/location.module.ts ***!
  \*********************************************/
/*! exports provided: LocationPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationPageModule", function() { return LocationPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _location_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./location.page */ "./src/app/location/location.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _location_page__WEBPACK_IMPORTED_MODULE_5__["LocationPage"]
    }
];
var LocationPageModule = /** @class */ (function () {
    function LocationPageModule() {
    }
    LocationPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_location_page__WEBPACK_IMPORTED_MODULE_5__["LocationPage"]]
        })
    ], LocationPageModule);
    return LocationPageModule;
}());



/***/ }),

/***/ "./src/app/location/location.page.html":
/*!*********************************************!*\
  !*** ./src/app/location/location.page.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n     <ion-buttons slot=\"end\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title><ion-icon name=\"arrow-round-forward\"></ion-icon>Locations</ion-title>\n  </ion-toolbar>\n</ion-header>\n\t\t\n<ion-content>\n    <div cards>\n\n    <div class=\"grid-full\">\n      <ion-row>\n        <ion-col>\n          <ion-card>\n            <ion-card-header>\n              <ion-card-subtitle><img src=\"../assets/logoCrop.png\"></ion-card-subtitle>\n            </ion-card-header>\n\n            <ion-card-content>\n              <p class=\"titleClass\"> Wauchula</p>\n            </ion-card-content>\n          </ion-card>\n        </ion-col>\n\n        <ion-col>\n          <ion-card>\n            <ion-card-header>\n              <ion-card-subtitle><img src=\"../assets/logoCrop.png\"></ion-card-subtitle>\n            </ion-card-header>\n\n            <ion-card-content>\n              <p class=\"titleClass\"> Wauchula</p>\n            </ion-card-content>\n          </ion-card>\n        </ion-col>\n      </ion-row>\n    </div>\n\n    <div class=\"grid-full\">\n      <ion-row>\n        <ion-col>\n          <ion-card>\n            <ion-card-header>\n              <ion-card-subtitle><img src=\"../assets/logoCrop.png\"></ion-card-subtitle>\n            </ion-card-header>\n\n            <ion-card-content>\n              <p class=\"titleClass\"> Wauchula</p>\n            </ion-card-content>\n          </ion-card>\n        </ion-col>\n\n        <ion-col>\n          <ion-card>\n            <ion-card-header>\n              <ion-card-subtitle><img src=\"../assets/logoCrop.png\"></ion-card-subtitle>\n            </ion-card-header>\n\n            <ion-card-content>\n              <p class=\"titleClass\"> Wauchula</p>\n            </ion-card-content>\n          </ion-card>\n        </ion-col>\n      </ion-row>\n    </div>\n\n  </div> \n</ion-content>\n\n<ion-footer>\n  <ion-toolbar>\n    <ion-title style=\"text-align: center;\"><img src=\"../assets/logoCrop.png\" height=\"30px\" width=\"60px\"></ion-title>\n  </ion-toolbar>\n</ion-footer>\n"

/***/ }),

/***/ "./src/app/location/location.page.scss":
/*!*********************************************!*\
  !*** ./src/app/location/location.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".welcome-card ion-img {\n  max-height: 35vh;\n  overflow: hidden; }\n\n[cards] .grid-full ion-col {\n  flex: 0 0 50%;\n  max-width: 50%;\n  padding: 5px 0; }\n\n[cards] .row {\n  padding: 0 12px; }\n\n[cards] .col {\n  padding: 5px 0; }\n\n[cards] .card {\n  margin: 0 5px;\n  width: calc(100% - 10px);\n  padding: 14px;\n  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);\n  border-radius: 4px; }\n\n[cards] .card h1 {\n    font-weight: 400;\n    font-size: 3.5rem; }\n\n[cards] .card p {\n    font-weight: 100; }\n\n.card {\n  background-color: #f7daf0; }\n\nh4 {\n  text-align: center; }\n\n.titleClass {\n  text-align: center;\n  font-weight: bold; }\n\n.companyInfo {\n  text-align: center;\n  font-weight: bold;\n  background-color: #f7daf0; }\n\nion-card {\n  border-radius: 20px; }\n\nion-card-content {\n  background-color: black; }\n\n.headerColor {\n  background-color: #f7daf0; }\n\nion-card-header {\n  background-color: pink; }\n\n.background {\n  background: url(\"/../assets/about1.jpeg\");\n  background-repeat: no-repeat;\n  background-size: cover; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvZWNrZXJkc1BoYXJtYWN5L3NyYy9hcHAvbG9jYXRpb24vbG9jYXRpb24ucGFnZS5zY3NzIiwic3JjL2FwcC9sb2NhdGlvbi9sb2NhdGlvbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7RUFDaEIsZ0JBQWdCLEVBQUE7O0FDRWxCO0VESVEsYUFBYTtFQUNiLGNBQWM7RUFDZCxjQUFjLEVBQUE7O0FDRHRCO0VESVEsZUFBZSxFQUFBOztBQ0R2QjtFRElRLGNBQWMsRUFBQTs7QUNEdEI7RURJUSxhQUFhO0VBQ2Isd0JBQXdCO0VBQ3hCLGFBQWE7RUFDYiwwQ0FBMkM7RUFDM0Msa0JBQWtCLEVBQUE7O0FDRnhCO0lESVUsZ0JBQWdCO0lBQ2hCLGlCQUFpQixFQUFBOztBQ0YzQjtJREtVLGdCQUFnQixFQUFBOztBQU01QjtFQUNFLHlCQUF5QixFQUFBOztBQUUzQjtFQUNJLGtCQUFrQixFQUFBOztBQUd0QjtFQUNJLGtCQUFrQjtFQUNsQixpQkFBaUIsRUFBQTs7QUFHckI7RUFDSSxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLHlCQUF5QixFQUFBOztBQUk3QjtFQUNBLG1CQUFtQixFQUFBOztBQUduQjtFQUNBLHVCQUNBLEVBQUE7O0FBRUE7RUFDSSx5QkFBd0IsRUFBQTs7QUFHNUI7RUFDSSxzQkFDSixFQUFBOztBQUVBO0VBQ0kseUNBQXlDO0VBQ3pDLDRCQUE0QjtFQUNoQyxzQkFBcUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2xvY2F0aW9uL2xvY2F0aW9uLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi53ZWxjb21lLWNhcmQgaW9uLWltZyB7XG4gIG1heC1oZWlnaHQ6IDM1dmg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cblxuW2NhcmRzXSB7XG4gICAgLmdyaWQtZnVsbCBpb24tY29sIHtcbiAgICAgICAgZmxleDogMCAwIDUwJTtcbiAgICAgICAgbWF4LXdpZHRoOiA1MCU7XG4gICAgICAgIHBhZGRpbmc6IDVweCAwO1xuICAgIH1cbiAgICAucm93IHtcbiAgICAgICAgcGFkZGluZzogMCAxMnB4O1xuICAgIH1cbiAgICAuY29sIHtcbiAgICAgICAgcGFkZGluZzogNXB4IDA7XG4gICAgfVxuICAgIC5jYXJkIHtcbiAgICAgICAgbWFyZ2luOiAwIDVweDtcbiAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDEwcHgpO1xuICAgICAgICBwYWRkaW5nOiAxNHB4O1xuICAgICAgICBib3gtc2hhZG93OiAwIDJweCA0cHggMCByZ2JhKDAsIDAsIDAsIDAuMTApO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgIGgxIHtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHRcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMy41cmVtO1xuICAgICAgICB9XG4gICAgICAgIHAge1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgIFxuICAgICAgICB9XG4gICAgfVxufVxuXG4uY2FyZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmN2RhZjA7XG59XG5oNHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi50aXRsZUNsYXNze1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmNvbXBhbnlJbmZve1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjdkYWYwO1xuICAgIFxufVxuXG5pb24tY2FyZCB7XG5ib3JkZXItcmFkaXVzOiAyMHB4O1xufVxuXG5pb24tY2FyZC1jb250ZW50e1xuYmFja2dyb3VuZC1jb2xvcjogYmxhY2tcbn1cblxuLmhlYWRlckNvbG9ye1xuICAgIGJhY2tncm91bmQtY29sb3I6I2Y3ZGFmMDtcbn1cblxuaW9uLWNhcmQtaGVhZGVye1xuICAgIGJhY2tncm91bmQtY29sb3I6IHBpbmtcbn1cblxuLmJhY2tncm91bmR7XG4gICAgYmFja2dyb3VuZDogdXJsKCcvLi4vYXNzZXRzL2Fib3V0MS5qcGVnJyk7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbmJhY2tncm91bmQtc2l6ZTpjb3Zlcjtcbn0iLCIud2VsY29tZS1jYXJkIGlvbi1pbWcge1xuICBtYXgtaGVpZ2h0OiAzNXZoO1xuICBvdmVyZmxvdzogaGlkZGVuOyB9XG5cbltjYXJkc10gLmdyaWQtZnVsbCBpb24tY29sIHtcbiAgZmxleDogMCAwIDUwJTtcbiAgbWF4LXdpZHRoOiA1MCU7XG4gIHBhZGRpbmc6IDVweCAwOyB9XG5cbltjYXJkc10gLnJvdyB7XG4gIHBhZGRpbmc6IDAgMTJweDsgfVxuXG5bY2FyZHNdIC5jb2wge1xuICBwYWRkaW5nOiA1cHggMDsgfVxuXG5bY2FyZHNdIC5jYXJkIHtcbiAgbWFyZ2luOiAwIDVweDtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDEwcHgpO1xuICBwYWRkaW5nOiAxNHB4O1xuICBib3gtc2hhZG93OiAwIDJweCA0cHggMCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIGJvcmRlci1yYWRpdXM6IDRweDsgfVxuICBbY2FyZHNdIC5jYXJkIGgxIHtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGZvbnQtc2l6ZTogMy41cmVtOyB9XG4gIFtjYXJkc10gLmNhcmQgcCB7XG4gICAgZm9udC13ZWlnaHQ6IDEwMDsgfVxuXG4uY2FyZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmN2RhZjA7IH1cblxuaDQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cblxuLnRpdGxlQ2xhc3Mge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiBib2xkOyB9XG5cbi5jb21wYW55SW5mbyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmN2RhZjA7IH1cblxuaW9uLWNhcmQge1xuICBib3JkZXItcmFkaXVzOiAyMHB4OyB9XG5cbmlvbi1jYXJkLWNvbnRlbnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjazsgfVxuXG4uaGVhZGVyQ29sb3Ige1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjdkYWYwOyB9XG5cbmlvbi1jYXJkLWhlYWRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHBpbms7IH1cblxuLmJhY2tncm91bmQge1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIvLi4vYXNzZXRzL2Fib3V0MS5qcGVnXCIpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyOyB9XG4iXX0= */"

/***/ }),

/***/ "./src/app/location/location.page.ts":
/*!*******************************************!*\
  !*** ./src/app/location/location.page.ts ***!
  \*******************************************/
/*! exports provided: LocationPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationPage", function() { return LocationPage; });
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

var LocationPage = /** @class */ (function () {
    function LocationPage() {
    }
    LocationPage.prototype.ngOnInit = function () {
    };
    LocationPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-location',
            template: __webpack_require__(/*! ./location.page.html */ "./src/app/location/location.page.html"),
            styles: [__webpack_require__(/*! ./location.page.scss */ "./src/app/location/location.page.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], LocationPage);
    return LocationPage;
}());



/***/ })

}]);
//# sourceMappingURL=location-location-module.js.map