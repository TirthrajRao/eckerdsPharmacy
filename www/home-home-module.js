(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _home_page__WEBPACK_IMPORTED_MODULE_5__["HomePage"]
                    }
                ])
            ],
            declarations: [_home_page__WEBPACK_IMPORTED_MODULE_5__["HomePage"]]
        })
    ], HomePageModule);
    return HomePageModule;
}());



/***/ }),

/***/ "./src/app/home/home.page.html":
/*!*************************************!*\
  !*** ./src/app/home/home.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar style=\"background-color: pink\"> \n    <ion-buttons slot=\"end\">\n      <ion-menu-button ></ion-menu-button>\n    </ion-buttons>\n    <div class=\"header\">\n    <ion-title >\n      <img src=\"../assets/logoCrop.png\" height=\"30px\" width=\"50px\" style=\"float: left; margin-top: 10px;\">\n      <p> Eckerds Pharmacy</p>\n    </ion-title>\n  </div>\n  </ion-toolbar>\n\n  <ion-toolbar>\n    <h4>Select Your Location</h4>\n  </ion-toolbar>\n\n</ion-header>\n\n<ion-content>\n    <div cards>\n\n    <div class=\"grid-full\">\n      <ion-row>\n        <ion-col>\n          <ion-card>\n            <ion-card-header>\n              <ion-card-subtitle><img src=\"../assets/logoCrop.png\"></ion-card-subtitle>\n            </ion-card-header>\n\n            <ion-card-content>\n              <p class=\"titleClass\"> Wauchula</p>\n            </ion-card-content>\n          </ion-card>\n        </ion-col>\n\n        <ion-col>\n          <ion-card>\n            <ion-card-header>\n              <ion-card-subtitle><img src=\"../assets/logoCrop.png\"></ion-card-subtitle>\n            </ion-card-header>\n\n            <ion-card-content>\n              <p class=\"titleClass\"> Wauchula</p>\n            </ion-card-content>\n          </ion-card>\n        </ion-col>\n      </ion-row>\n    </div>\n\n    <div class=\"grid-full\">\n      <ion-row>\n        <ion-col>\n          <ion-card>\n            <ion-card-header>\n              <ion-card-subtitle><img src=\"../assets/logoCrop.png\"></ion-card-subtitle>\n            </ion-card-header>\n\n            <ion-card-content>\n              <p class=\"titleClass\"> Wauchula</p>\n            </ion-card-content>\n          </ion-card>\n        </ion-col>\n\n        <ion-col>\n          <ion-card>\n            <ion-card-header>\n              <ion-card-subtitle><img src=\"../assets/logoCrop.png\"></ion-card-subtitle>\n            </ion-card-header>\n\n            <ion-card-content>\n              <p class=\"titleClass\"> Wauchula</p>\n            </ion-card-content>\n          </ion-card>\n        </ion-col>\n      </ion-row>\n    </div>\n\n  </div> \n\n<ion-card class=\"companyInfo\">\n    <i class=\"fa fa-book\" aria-hidden=\"true\" ></i><a href=\"../company-info\">  Company Information</a> \n</ion-card>\n      \n</ion-content>\n\n<ion-footer>\n  <ion-toolbar>\n    <ion-title style=\"text-align: center;\"><img src=\"../assets/logoCrop.png\" height=\"30px\" width=\"60px\"></ion-title>\n  </ion-toolbar>\n</ion-footer>\n"

/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".welcome-card ion-img {\n  max-height: 35vh;\n  overflow: hidden; }\n\np {\n  font-size: 13px; }\n\nion-title {\n  padding-left: 15px; }\n\nion-title p {\n  font-size: 17px; }\n\n[cards] .grid-full ion-col {\n  flex: 0 0 50%;\n  max-width: 50%;\n  padding: 5px 0; }\n\n[cards] .row {\n  padding: 0 12px; }\n\n[cards] .col {\n  padding: 5px 0; }\n\n[cards] .card {\n  margin: 0 5px;\n  width: calc(100% - 10px);\n  padding: 14px;\n  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);\n  border-radius: 4px; }\n\n[cards] .card h1 {\n    font-weight: 400;\n    font-size: 3.5rem; }\n\n[cards] .card p {\n    font-weight: 100; }\n\n.card {\n  background-color: #f7daf0; }\n\nh4 {\n  text-align: center; }\n\n.titleClass {\n  text-align: center;\n  font-weight: bold; }\n\n.companyInfo {\n  text-align: center;\n  font-weight: bold;\n  background-color: #f7daf0; }\n\nion-card-header {\n  background-color: pink; }\n\nion-card {\n  border-radius: 20px; }\n\nion-card-content {\n  background-color: black; }\n\n.headerColor {\n  background-color: #f7daf0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvZWNrZXJkc1BoYXJtYWN5L3NyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyIsInNyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0IsRUFBQTs7QUFJbEI7RUFDSSxlQUNKLEVBQUE7O0FBRUE7RUFDSSxrQkFDSixFQUFBOztBQUVBO0VBQ0ksZUFDSixFQUFBOztBQ0hBO0VET1EsYUFBYTtFQUNiLGNBQWM7RUFDZCxjQUFjLEVBQUE7O0FDSnRCO0VET1EsZUFBZSxFQUFBOztBQ0p2QjtFRE9RLGNBQWMsRUFBQTs7QUNKdEI7RURPUSxhQUFhO0VBQ2Isd0JBQXdCO0VBQ3hCLGFBQWE7RUFDYiwwQ0FBMkM7RUFDM0Msa0JBQWtCLEVBQUE7O0FDTHhCO0lET1UsZ0JBQWdCO0lBQ2hCLGlCQUFpQixFQUFBOztBQ0wzQjtJRFFVLGdCQUFnQixFQUFBOztBQU01QjtFQUNFLHlCQUF5QixFQUFBOztBQUUzQjtFQUNDLGtCQUFrQixFQUFBOztBQUduQjtFQUNDLGtCQUFrQjtFQUNsQixpQkFBaUIsRUFBQTs7QUFHbEI7RUFDSSxrQkFBa0I7RUFDckIsaUJBQWlCO0VBQ2pCLHlCQUF5QixFQUFBOztBQUkxQjtFQUNJLHNCQUFzQixFQUFBOztBQUcxQjtFQUNBLG1CQUFtQixFQUFBOztBQUduQjtFQUNBLHVCQUNBLEVBQUE7O0FBRUE7RUFDSSx5QkFBd0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud2VsY29tZS1jYXJkIGlvbi1pbWcge1xuICBtYXgtaGVpZ2h0OiAzNXZoO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG5cbnB7XG4gICAgZm9udC1zaXplOjEzcHhcbn1cblxuaW9uLXRpdGxlIHtcbiAgICBwYWRkaW5nLWxlZnQ6MTVweFxufVxuXG5pb24tdGl0bGUgcHtcbiAgICBmb250LXNpemU6MTdweFxufVxuXG5bY2FyZHNdIHtcbiAgICAuZ3JpZC1mdWxsIGlvbi1jb2wge1xuICAgICAgICBmbGV4OiAwIDAgNTAlO1xuICAgICAgICBtYXgtd2lkdGg6IDUwJTtcbiAgICAgICAgcGFkZGluZzogNXB4IDA7XG4gICAgfVxuICAgIC5yb3cge1xuICAgICAgICBwYWRkaW5nOiAwIDEycHg7XG4gICAgfVxuICAgIC5jb2wge1xuICAgICAgICBwYWRkaW5nOiA1cHggMDtcbiAgICB9XG4gICAgLmNhcmQge1xuICAgICAgICBtYXJnaW46IDAgNXB4O1xuICAgICAgICB3aWR0aDogY2FsYygxMDAlIC0gMTBweCk7XG4gICAgICAgIHBhZGRpbmc6IDE0cHg7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgMnB4IDRweCAwIHJnYmEoMCwgMCwgMCwgMC4xMCk7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgaDEge1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcdFxuICAgICAgICAgICAgZm9udC1zaXplOiAzLjVyZW07XG4gICAgICAgIH1cbiAgICAgICAgcCB7XG4gICAgICAgICAgICBmb250LXdlaWdodDogMTAwO1xuICAgXG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5jYXJkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y3ZGFmMDtcbn1cbmg0e1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi50aXRsZUNsYXNze1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uY29tcGFueUluZm97XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXHRmb250LXdlaWdodDogYm9sZDtcblx0YmFja2dyb3VuZC1jb2xvcjogI2Y3ZGFmMDtcblx0XG59XG5cbmlvbi1jYXJkLWhlYWRlcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBwaW5rO1xufVxuXG5pb24tY2FyZCB7XG5ib3JkZXItcmFkaXVzOiAyMHB4O1xufVxuXG5pb24tY2FyZC1jb250ZW50e1xuYmFja2dyb3VuZC1jb2xvcjogYmxhY2tcbn1cblxuLmhlYWRlckNvbG9ye1xuICAgIGJhY2tncm91bmQtY29sb3I6I2Y3ZGFmMDtcbn0iLCIud2VsY29tZS1jYXJkIGlvbi1pbWcge1xuICBtYXgtaGVpZ2h0OiAzNXZoO1xuICBvdmVyZmxvdzogaGlkZGVuOyB9XG5cbnAge1xuICBmb250LXNpemU6IDEzcHg7IH1cblxuaW9uLXRpdGxlIHtcbiAgcGFkZGluZy1sZWZ0OiAxNXB4OyB9XG5cbmlvbi10aXRsZSBwIHtcbiAgZm9udC1zaXplOiAxN3B4OyB9XG5cbltjYXJkc10gLmdyaWQtZnVsbCBpb24tY29sIHtcbiAgZmxleDogMCAwIDUwJTtcbiAgbWF4LXdpZHRoOiA1MCU7XG4gIHBhZGRpbmc6IDVweCAwOyB9XG5cbltjYXJkc10gLnJvdyB7XG4gIHBhZGRpbmc6IDAgMTJweDsgfVxuXG5bY2FyZHNdIC5jb2wge1xuICBwYWRkaW5nOiA1cHggMDsgfVxuXG5bY2FyZHNdIC5jYXJkIHtcbiAgbWFyZ2luOiAwIDVweDtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDEwcHgpO1xuICBwYWRkaW5nOiAxNHB4O1xuICBib3gtc2hhZG93OiAwIDJweCA0cHggMCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIGJvcmRlci1yYWRpdXM6IDRweDsgfVxuICBbY2FyZHNdIC5jYXJkIGgxIHtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGZvbnQtc2l6ZTogMy41cmVtOyB9XG4gIFtjYXJkc10gLmNhcmQgcCB7XG4gICAgZm9udC13ZWlnaHQ6IDEwMDsgfVxuXG4uY2FyZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmN2RhZjA7IH1cblxuaDQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cblxuLnRpdGxlQ2xhc3Mge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiBib2xkOyB9XG5cbi5jb21wYW55SW5mbyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmN2RhZjA7IH1cblxuaW9uLWNhcmQtaGVhZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcGluazsgfVxuXG5pb24tY2FyZCB7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7IH1cblxuaW9uLWNhcmQtY29udGVudCB7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrOyB9XG5cbi5oZWFkZXJDb2xvciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmN2RhZjA7IH1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var HomePage = /** @class */ (function () {
    function HomePage() {
    }
    HomePage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.page.html */ "./src/app/home/home.page.html"),
            styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")]
        })
    ], HomePage);
    return HomePage;
}());



/***/ })

}]);
//# sourceMappingURL=home-home-module.js.map