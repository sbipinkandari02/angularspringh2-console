(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./welcome/welcome.component */ "./src/app/welcome/welcome.component.ts");
/* harmony import */ var _error_error_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./error/error.component */ "./src/app/error/error.component.ts");
/* harmony import */ var _list_todos_list_todos_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./list-todos/list-todos.component */ "./src/app/list-todos/list-todos.component.ts");
/* harmony import */ var _logout_logout_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./logout/logout.component */ "./src/app/logout/logout.component.ts");
/* harmony import */ var _service_route_guard_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./service/route-guard.service */ "./src/app/service/route-guard.service.ts");
/* harmony import */ var _todo_todo_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./todo/todo.component */ "./src/app/todo/todo.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var routes = [
    { path: '', component: _login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"] },
    { path: 'welcome/:name', component: _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_3__["WelcomeComponent"], canActivate: [_service_route_guard_service__WEBPACK_IMPORTED_MODULE_7__["RouteGuardService"]] },
    { path: 'todos', component: _list_todos_list_todos_component__WEBPACK_IMPORTED_MODULE_5__["ListTodosComponent"], canActivate: [_service_route_guard_service__WEBPACK_IMPORTED_MODULE_7__["RouteGuardService"]] },
    { path: 'logout', component: _logout_logout_component__WEBPACK_IMPORTED_MODULE_6__["LogoutComponent"], canActivate: [_service_route_guard_service__WEBPACK_IMPORTED_MODULE_7__["RouteGuardService"]] },
    { path: 'todos/:id', component: _todo_todo_component__WEBPACK_IMPORTED_MODULE_8__["TodoComponent"], canActivate: [_service_route_guard_service__WEBPACK_IMPORTED_MODULE_7__["RouteGuardService"]] },
    { path: '**', component: _error_error_component__WEBPACK_IMPORTED_MODULE_4__["ErrorComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <app-welcome></app-welcome> -->\n\n<!-- <app-login></app-login> -->\n<app-menu></app-menu>\n<br>\n<div class=\"container\">\n<router-outlet></router-outlet>\n</div>\n\n<br>\n<app-footer></app-footer>\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'javaApp';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.constants.ts":
/*!**********************************!*\
  !*** ./src/app/app.constants.ts ***!
  \**********************************/
/*! exports provided: API_URL, TODO_JPA_URL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_URL", function() { return API_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TODO_JPA_URL", function() { return TODO_JPA_URL; });
var API_URL = "http://localhost:8080";
var TODO_JPA_URL = "http://localhost:8080/jpa";


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./welcome/welcome.component */ "./src/app/welcome/welcome.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _error_error_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./error/error.component */ "./src/app/error/error.component.ts");
/* harmony import */ var _list_todos_list_todos_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./list-todos/list-todos.component */ "./src/app/list-todos/list-todos.component.ts");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./menu/menu.component */ "./src/app/menu/menu.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _logout_logout_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./logout/logout.component */ "./src/app/logout/logout.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _todo_todo_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./todo/todo.component */ "./src/app/todo/todo.component.ts");
/* harmony import */ var _service_http_http_intercepter_basic_auth_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./service/http/http-intercepter-basic-auth.service */ "./src/app/service/http/http-intercepter-basic-auth.service.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_5__["WelcomeComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"],
                _error_error_component__WEBPACK_IMPORTED_MODULE_7__["ErrorComponent"],
                _list_todos_list_todos_component__WEBPACK_IMPORTED_MODULE_8__["ListTodosComponent"],
                _menu_menu_component__WEBPACK_IMPORTED_MODULE_9__["MenuComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_10__["FooterComponent"],
                _logout_logout_component__WEBPACK_IMPORTED_MODULE_11__["LogoutComponent"],
                _todo_todo_component__WEBPACK_IMPORTED_MODULE_13__["TodoComponent"],
                _contact_contact_component__WEBPACK_IMPORTED_MODULE_15__["ContactComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"]
            ],
            providers: [
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HTTP_INTERCEPTORS"], useClass: _service_http_http_intercepter_basic_auth_service__WEBPACK_IMPORTED_MODULE_14__["HttpIntercepterBasicAuthService"], multi: true }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/contact/contact.component.css":
/*!***********************************************!*\
  !*** ./src/app/contact/contact.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/contact/contact.component.html":
/*!************************************************!*\
  !*** ./src/app/contact/contact.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  contact works!\n</p>\n"

/***/ }),

/***/ "./src/app/contact/contact.component.ts":
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
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

var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.css */ "./src/app/contact/contact.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/error/error.component.css":
/*!*******************************************!*\
  !*** ./src/app/error/error.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Vycm9yL2Vycm9yLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/error/error.component.html":
/*!********************************************!*\
  !*** ./src/app/error/error.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "{{errorMessage}}"

/***/ }),

/***/ "./src/app/error/error.component.ts":
/*!******************************************!*\
  !*** ./src/app/error/error.component.ts ***!
  \******************************************/
/*! exports provided: ErrorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorComponent", function() { return ErrorComponent; });
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

var ErrorComponent = /** @class */ (function () {
    function ErrorComponent() {
        this.errorMessage = 'An Error Occured Please Contact us!';
    }
    ErrorComponent.prototype.ngOnInit = function () {
    };
    ErrorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-error',
            template: __webpack_require__(/*! ./error.component.html */ "./src/app/error/error.component.html"),
            styles: [__webpack_require__(/*! ./error.component.css */ "./src/app/error/error.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ErrorComponent);
    return ErrorComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "footer {\r\n    background-color: whitesmoke;\r\n    color: black;\r\n    padding: 15px;\r\n   \r\n}\r\n\r\n.r {\r\n    margin-left: 21px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksNEJBQTRCO0lBQzVCLFlBQVk7SUFDWixhQUFhOztBQUVqQjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImZvb3RlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgcGFkZGluZzogMTVweDtcclxuICAgXHJcbn1cclxuXHJcbi5yIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAyMXB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"container-fluid text-center\">\n\n  <div class=\"row r\">\n      <div class=\" col-lg-3\">\n          <h3>Our Company</h3>\n          <p>What we can do</p>\n          <p>Client</p>\n          <p>Management</p>\n          <p>Work Team</p>\n      </div>\n\n      <div class=\"col-lg-3\">\n          <h3>Related Links</h3>\n          <p>Strategies</p>\n          <p>Recent issues</p>\n          <p>FAQ</p>\n          <p>Solutions</p>\n      </div>\n      <div class=\"col-lg-3\">\n          <h3>Main Services</h3>\n          <p>Online Support</p>\n          <p>Finanicial Service</p>\n          <p>Bussiness Help</p>\n          <p>Developement</p>\n      </div>\n      <div class=\"col-lg-3\">\n          <h3>Subscribe Us</h3>\n          <form class=\"form-inline\">\n              <div class=\"input-group\">\n                  <input type=\"email\" class=\"form-control eml\" size=\"50\" placeholder=\"Email Address\" required>\n                  <div class=\"input-group-btn text-center\">\n                      <button type=\"button\" class=\"btn btn-danger btn-sm active\">Subscribe</button>\n                  </div>\n              </div>\n          </form>\n      </div>\n  </div>\n  <hr style=\"border-top: 1px solid black;\">\n  <div class=\"row\">\n      <div class=\"col-sm-12 col-md-6 col-lg-6\">\n          <ul class=\"list-unstyled list-inline \">\n              <li>Contact Us :</li>\n              <li class=\"text-info\">1234567890</li>\n              <li class=\"text-info\">121324356890</li>\n          </ul>\n      </div>\n      <div class=\"col-sm-12 col-md-6 col-lg-6\">\n          <ul class=\"list-unstyled list-inline \">\n              <li>Follow us :</li>\n              <li> <a href=\"#\"><span class=\"fa fa-instagram\" style=\"font-size: 23px;\"></span></a></li>\n              <li> <a href=\"#\"><span class=\"fa fa-google\" style=\"font-size: 23px;\"></span></a></li>\n              <li> <a href=\"#\"><span class=\"fa fa-facebook\" style=\"font-size: 23px;\"></span></a></li>\n              <li> <a href=\"#\"><span class=\"fa fa-twitter\" style=\"font-size: 23px;\"></span></a></li>\n          </ul>\n      </div>\n\n  </div>\n\n  <hr style=\"border-top: 1px solid black;\">\n  <div class=\"footer-copyright text-center py-3\">© 2020 Copyright: BipinAngularSpringBoot.com</div>\n\n</footer>\n\n"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
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

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/list-todos/list-todos.component.css":
/*!*****************************************************!*\
  !*** ./src/app/list-todos/list-todos.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xpc3QtdG9kb3MvbGlzdC10b2Rvcy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/list-todos/list-todos.component.html":
/*!******************************************************!*\
  !*** ./src/app/list-todos/list-todos.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 >My Todo's </h2>\n<div class=\"alert alert-success\" *ngIf='message'>{{message}}</div>\n<div class=\"container\">\n<table class=\"table\">\n  <thead>       \n      <tr>\n          <!-- <th>Id</th>  -->\n          <th>Description</th>\n          <th>TargetDate</th>\n          <th>is Completed? </th>\n          <th>Update</th>\n          <th>Delete</th> \n      </tr>\n  </thead>\n  <tbody>\n      <tr *ngFor=\"let todo of todos\">\n          <!-- <td>{{todo.id}}</td> -->\n          <td>{{todo.description}}</td>\n          <td>{{todo.targetDate | date}}</td>\n          <td>{{todo.done}}</td>\n          <td><button (click)=\"updateTodo(todo.id)\" class=\"btn btn-success\">Update</button></td>               \n          <td><button (click)=\"deleteTodo(todo.id)\" class=\"btn btn-danger\">Delete</button></td>\n      </tr>\n  </tbody>\n</table>\n <div class=\"row\">\n  <button (click)=\"addTodo()\" class=\"btn btn-success\">Add</button>\n</div> \n</div>\n"

/***/ }),

/***/ "./src/app/list-todos/list-todos.component.ts":
/*!****************************************************!*\
  !*** ./src/app/list-todos/list-todos.component.ts ***!
  \****************************************************/
/*! exports provided: Todo, ListTodosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Todo", function() { return Todo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListTodosComponent", function() { return ListTodosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_data_todo_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/data/todo-data.service */ "./src/app/service/data/todo-data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Todo = /** @class */ (function () {
    function Todo(id, description, done, targetDate) {
        this.id = id;
        this.description = description;
        this.done = done;
        this.targetDate = targetDate;
    }
    return Todo;
}());

var ListTodosComponent = /** @class */ (function () {
    //todos=[
    //      new Todo(1, 'Become a Java Developer', false, new Date()),
    //      new Todo(2,'Become a Angular Developer',false,new Date()),
    //      new Todo(3,'Become a Fullstack Developer',false,new Date()) 
    //    ]
    function ListTodosComponent(todoService, router) {
        this.todoService = todoService;
        this.router = router;
    }
    ListTodosComponent.prototype.ngOnInit = function () {
        this.refreshTodos();
    };
    ListTodosComponent.prototype.refreshTodos = function () {
        var _this = this;
        this.todoService.retrieveAllTodos('bipin').subscribe(function (response) {
            console.log(response);
            _this.todos = response;
        });
    };
    ListTodosComponent.prototype.deleteTodo = function (id) {
        var _this = this;
        console.log("delete Todo " + id);
        this.todoService.deletetodo('bipin', id).subscribe(function (response) {
            console.log(response);
            _this.message = "Delete of todo " + id + " Successfully! ";
            _this.refreshTodos();
        });
    };
    ListTodosComponent.prototype.updateTodo = function (id) {
        console.log("update todo" + id);
        this.router.navigate(['todos', id]);
    };
    ListTodosComponent.prototype.addTodo = function () {
        this.router.navigate(['todos', -1]);
    };
    ListTodosComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-list-todos',
            template: __webpack_require__(/*! ./list-todos.component.html */ "./src/app/list-todos/list-todos.component.html"),
            styles: [__webpack_require__(/*! ./list-todos.component.css */ "./src/app/list-todos/list-todos.component.css")]
        }),
        __metadata("design:paramtypes", [_service_data_todo_data_service__WEBPACK_IMPORTED_MODULE_1__["TodoDataService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ListTodosComponent);
    return ListTodosComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\r\n  background-color: rgba(123, 170, 85, 0.123);\r\n  font-family: 'Ubuntu', sans-serif;\r\n}\r\n\r\n.main {\r\n  background-color: rgba(204, 216, 203, 0.007);\r\n  width: 400px;\r\n  height: 400px;\r\n  margin: 2em auto;\r\n  border-radius: 1.5em;\r\n  box-shadow: 0px 11px 35px 2px rgba(0, 0, 0, 0.171);\r\n}\r\n\r\n.sign {\r\n  padding-top: 40px;\r\n  color: rgb(38, 77, 43);\r\n  font-family: 'Ubuntu', sans-serif;\r\n  font-weight: bold;\r\n  font-size: 23px;\r\n}\r\n\r\n.un {\r\nwidth: 76%;\r\ncolor: rgb(38, 50, 56);\r\nfont-weight: 700;\r\nfont-size: 14px;\r\nletter-spacing: 1px;\r\nbackground: whitesmoke;\r\npadding: 10px 20px;\r\nborder: none;\r\nborder-radius: 20px;\r\noutline: none;\r\nbox-sizing: border-box;\r\nborder: 2px solid whitesmoke;\r\nmargin-bottom: 50px;\r\nmargin-left: 46px;\r\ntext-align: center;\r\nmargin-bottom: 27px;\r\nfont-family: 'Ubuntu', sans-serif;\r\n}\r\n\r\nform.form1 {\r\n  padding-top: 40px;\r\n}\r\n\r\n.pass {\r\n      width: 76%;\r\ncolor: rgb(38, 50, 56);\r\nfont-weight: 700;\r\nfont-size: 14px;\r\nletter-spacing: 1px;\r\nbackground: whitesmoke;\r\npadding: 10px 20px;\r\nborder: none;\r\nborder-radius: 20px;\r\noutline: none;\r\nbox-sizing: border-box;\r\nborder: 2px solid whitesmoke;\r\nmargin-bottom: 50px;\r\nmargin-left: 46px;\r\ntext-align: center;\r\nmargin-bottom: 27px;\r\nfont-family: 'Ubuntu', sans-serif;\r\n}\r\n\r\n.un:focus, .pass:focus {\r\n  border: 2px solid rgba(0, 0, 0, 0.18) !important;\r\n  \r\n}\r\n\r\n.submit {\r\ncursor: pointer;\r\n  border-radius: 5em;\r\n  color: #fff;\r\n  background: linear-gradient(to right, Green, rgb(64, 251, 126));\r\n  border: 0;\r\n  padding-left: 40px;\r\n  padding-right: 40px;\r\n  padding-bottom: 10px;\r\n  padding-top: 10px;\r\n  font-family: 'Ubuntu', sans-serif;\r\n  margin-left: 35%;\r\n  font-size: 13px;\r\n  box-shadow: 0 0 20px 1px rgba(0, 0, 0, 0.04);\r\n}\r\n\r\n.forgot {\r\n  text-shadow: 0px 0px 3px rgba(117, 117, 117, 0.12);\r\n  color: #E1BEE7;\r\n  padding-top: 15px;\r\n}\r\n\r\na {\r\n  text-shadow: 0px 0px 3px rgba(117, 117, 117, 0.12);\r\n  color: #E1BEE7;\r\n  text-decoration: none\r\n}\r\n\r\n@media (max-width: 600px) {\r\n  .main {\r\n      border-radius: 0px;\r\n  }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDJDQUEyQztFQUMzQyxpQ0FBaUM7QUFDbkM7O0FBRUE7RUFDRSw0Q0FBNEM7RUFDNUMsWUFBWTtFQUNaLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsb0JBQW9CO0VBQ3BCLGtEQUFrRDtBQUNwRDs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixzQkFBc0I7RUFDdEIsaUNBQWlDO0VBQ2pDLGlCQUFpQjtFQUNqQixlQUFlO0FBQ2pCOztBQUVBO0FBQ0EsVUFBVTtBQUNWLHNCQUFzQjtBQUN0QixnQkFBZ0I7QUFDaEIsZUFBZTtBQUNmLG1CQUFtQjtBQUNuQixzQkFBc0I7QUFDdEIsa0JBQWtCO0FBQ2xCLFlBQVk7QUFDWixtQkFBbUI7QUFDbkIsYUFBYTtBQUNiLHNCQUFzQjtBQUN0Qiw0QkFBNEI7QUFDNUIsbUJBQW1CO0FBQ25CLGlCQUFpQjtBQUNqQixrQkFBa0I7QUFDbEIsbUJBQW1CO0FBQ25CLGlDQUFpQztBQUNqQzs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtNQUNNLFVBQVU7QUFDaEIsc0JBQXNCO0FBQ3RCLGdCQUFnQjtBQUNoQixlQUFlO0FBQ2YsbUJBQW1CO0FBQ25CLHNCQUFzQjtBQUN0QixrQkFBa0I7QUFDbEIsWUFBWTtBQUNaLG1CQUFtQjtBQUNuQixhQUFhO0FBQ2Isc0JBQXNCO0FBQ3RCLDRCQUE0QjtBQUM1QixtQkFBbUI7QUFDbkIsaUJBQWlCO0FBQ2pCLGtCQUFrQjtBQUNsQixtQkFBbUI7QUFDbkIsaUNBQWlDO0FBQ2pDOztBQUdBO0VBQ0UsZ0RBQWdEOztBQUVsRDs7QUFFQTtBQUNBLGVBQWU7RUFDYixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLCtEQUErRDtFQUMvRCxTQUFTO0VBQ1Qsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixvQkFBb0I7RUFDcEIsaUJBQWlCO0VBQ2pCLGlDQUFpQztFQUNqQyxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLDRDQUE0QztBQUM5Qzs7QUFFQTtFQUNFLGtEQUFrRDtFQUNsRCxjQUFjO0VBQ2QsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0Usa0RBQWtEO0VBQ2xELGNBQWM7RUFDZDtBQUNGOztBQUVBO0VBQ0U7TUFDSSxrQkFBa0I7RUFDdEI7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEyMywgMTcwLCA4NSwgMC4xMjMpO1xyXG4gIGZvbnQtZmFtaWx5OiAnVWJ1bnR1Jywgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLm1haW4ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjA0LCAyMTYsIDIwMywgMC4wMDcpO1xyXG4gIHdpZHRoOiA0MDBweDtcclxuICBoZWlnaHQ6IDQwMHB4O1xyXG4gIG1hcmdpbjogMmVtIGF1dG87XHJcbiAgYm9yZGVyLXJhZGl1czogMS41ZW07XHJcbiAgYm94LXNoYWRvdzogMHB4IDExcHggMzVweCAycHggcmdiYSgwLCAwLCAwLCAwLjE3MSk7XHJcbn1cclxuXHJcbi5zaWduIHtcclxuICBwYWRkaW5nLXRvcDogNDBweDtcclxuICBjb2xvcjogcmdiKDM4LCA3NywgNDMpO1xyXG4gIGZvbnQtZmFtaWx5OiAnVWJ1bnR1Jywgc2Fucy1zZXJpZjtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBmb250LXNpemU6IDIzcHg7XHJcbn1cclxuXHJcbi51biB7XHJcbndpZHRoOiA3NiU7XHJcbmNvbG9yOiByZ2IoMzgsIDUwLCA1Nik7XHJcbmZvbnQtd2VpZ2h0OiA3MDA7XHJcbmZvbnQtc2l6ZTogMTRweDtcclxubGV0dGVyLXNwYWNpbmc6IDFweDtcclxuYmFja2dyb3VuZDogd2hpdGVzbW9rZTtcclxucGFkZGluZzogMTBweCAyMHB4O1xyXG5ib3JkZXI6IG5vbmU7XHJcbmJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbm91dGxpbmU6IG5vbmU7XHJcbmJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbmJvcmRlcjogMnB4IHNvbGlkIHdoaXRlc21va2U7XHJcbm1hcmdpbi1ib3R0b206IDUwcHg7XHJcbm1hcmdpbi1sZWZ0OiA0NnB4O1xyXG50ZXh0LWFsaWduOiBjZW50ZXI7XHJcbm1hcmdpbi1ib3R0b206IDI3cHg7XHJcbmZvbnQtZmFtaWx5OiAnVWJ1bnR1Jywgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuZm9ybS5mb3JtMSB7XHJcbiAgcGFkZGluZy10b3A6IDQwcHg7XHJcbn1cclxuXHJcbi5wYXNzIHtcclxuICAgICAgd2lkdGg6IDc2JTtcclxuY29sb3I6IHJnYigzOCwgNTAsIDU2KTtcclxuZm9udC13ZWlnaHQ6IDcwMDtcclxuZm9udC1zaXplOiAxNHB4O1xyXG5sZXR0ZXItc3BhY2luZzogMXB4O1xyXG5iYWNrZ3JvdW5kOiB3aGl0ZXNtb2tlO1xyXG5wYWRkaW5nOiAxMHB4IDIwcHg7XHJcbmJvcmRlcjogbm9uZTtcclxuYm9yZGVyLXJhZGl1czogMjBweDtcclxub3V0bGluZTogbm9uZTtcclxuYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuYm9yZGVyOiAycHggc29saWQgd2hpdGVzbW9rZTtcclxubWFyZ2luLWJvdHRvbTogNTBweDtcclxubWFyZ2luLWxlZnQ6IDQ2cHg7XHJcbnRleHQtYWxpZ246IGNlbnRlcjtcclxubWFyZ2luLWJvdHRvbTogMjdweDtcclxuZm9udC1mYW1pbHk6ICdVYnVudHUnLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG5cclxuLnVuOmZvY3VzLCAucGFzczpmb2N1cyB7XHJcbiAgYm9yZGVyOiAycHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjE4KSAhaW1wb3J0YW50O1xyXG4gIFxyXG59XHJcblxyXG4uc3VibWl0IHtcclxuY3Vyc29yOiBwb2ludGVyO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVlbTtcclxuICBjb2xvcjogI2ZmZjtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIEdyZWVuLCByZ2IoNjQsIDI1MSwgMTI2KSk7XHJcbiAgYm9yZGVyOiAwO1xyXG4gIHBhZGRpbmctbGVmdDogNDBweDtcclxuICBwYWRkaW5nLXJpZ2h0OiA0MHB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gIGZvbnQtZmFtaWx5OiAnVWJ1bnR1Jywgc2Fucy1zZXJpZjtcclxuICBtYXJnaW4tbGVmdDogMzUlO1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxuICBib3gtc2hhZG93OiAwIDAgMjBweCAxcHggcmdiYSgwLCAwLCAwLCAwLjA0KTtcclxufVxyXG5cclxuLmZvcmdvdCB7XHJcbiAgdGV4dC1zaGFkb3c6IDBweCAwcHggM3B4IHJnYmEoMTE3LCAxMTcsIDExNywgMC4xMik7XHJcbiAgY29sb3I6ICNFMUJFRTc7XHJcbiAgcGFkZGluZy10b3A6IDE1cHg7XHJcbn1cclxuXHJcbmEge1xyXG4gIHRleHQtc2hhZG93OiAwcHggMHB4IDNweCByZ2JhKDExNywgMTE3LCAxMTcsIDAuMTIpO1xyXG4gIGNvbG9yOiAjRTFCRUU3O1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAubWFpbiB7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDBweDtcclxuICB9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">\n  <link href=\"https://fonts.googleapis.com/css?family=Ubuntu\" rel=\"stylesheet\">\n\n  <title>Document</title>\n</head>\n<body>\n  <div class=\"main\">\n      <div class=\"alert alert-warning\" *ngIf='invalidLogin'>{{errorMessage}}</div>\n    <h1 class=\"sign\" align=\"center\">Login Page</h1>\n    <form class=\"form1\">\n        <input type=\"text\" class=\"un \"  align=\"center\" placeholder=\"Username\"name=\"username\" [(ngModel)]=\"username\" >\n        <input type=\"password\" class=\"pass\" align=\"center\" placeholder=\"Password\" name=\"password\" [(ngModel)]=\"password\">\n  \n         <!-- <button (click)=handleLogin() class=\"btn btn-success\">Login</button> -->\n         <!-- <button (click)=handleBasicAuthLogin() class=\"btn btn-success\">Login</button> -->\n          <button (click)=handleJWTAuthLogin() class=\"submit\" align=\"center\">Login</button>\n      </form>                   \n    </div>    \n</body>\n</html>"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_hardcoded_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/hardcoded-authentication.service */ "./src/app/service/hardcoded-authentication.service.ts");
/* harmony import */ var _service_basic_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../service/basic-authentication.service */ "./src/app/service/basic-authentication.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, hardcodedAuthenticationService, basicAuthenticationService) {
        this.router = router;
        this.hardcodedAuthenticationService = hardcodedAuthenticationService;
        this.basicAuthenticationService = basicAuthenticationService;
        this.username = 'Bipin';
        this.password = '';
        this.errorMessage = 'Invalid Cridentials';
        this.invalidLogin = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.handleLogin = function () {
        if (this.hardcodedAuthenticationService.authenticate(this.username, this.password)) {
            this.router.navigate(['welcome', this.username]);
            this.invalidLogin = false;
        }
        else {
            this.invalidLogin = true;
        }
        console.log(this.username, this.password);
    };
    LoginComponent.prototype.handleBasicAuthLogin = function () {
        var _this = this;
        // console.log(this.username);
        //if(this.username==="in28minutes" && this.password === 'dummy') {
        this.basicAuthenticationService.executeAuthenticationService(this.username, this.password)
            .subscribe(function (data) {
            console.log(data);
            _this.router.navigate(['welcome', _this.username]);
            _this.invalidLogin = false;
        }, function (error) {
            console.log(error);
            _this.invalidLogin = true;
        });
    };
    LoginComponent.prototype.handleJWTAuthLogin = function () {
        var _this = this;
        this.basicAuthenticationService.executeJWTAuthenticationService(this.username, this.password)
            .subscribe(function (data) {
            console.log(data);
            _this.router.navigate(['welcome', _this.username]);
            _this.invalidLogin = false;
        }, function (error) {
            console.log(error);
            _this.invalidLogin = true;
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _service_hardcoded_authentication_service__WEBPACK_IMPORTED_MODULE_2__["HardcodedAuthenticationService"],
            _service_basic_authentication_service__WEBPACK_IMPORTED_MODULE_3__["BasicAuthenticationService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/logout/logout.component.css":
/*!*********************************************!*\
  !*** ./src/app/logout/logout.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ291dC9sb2dvdXQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/logout/logout.component.html":
/*!**********************************************!*\
  !*** ./src/app/logout/logout.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>You are Successfully Logged Out!</h1>\n<div class=\"container\">\n  Thank You For Using Our Application...\n</div>"

/***/ }),

/***/ "./src/app/logout/logout.component.ts":
/*!********************************************!*\
  !*** ./src/app/logout/logout.component.ts ***!
  \********************************************/
/*! exports provided: LogoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoutComponent", function() { return LogoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_hardcoded_authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/hardcoded-authentication.service */ "./src/app/service/hardcoded-authentication.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LogoutComponent = /** @class */ (function () {
    function LogoutComponent(hardcodedAuthenticationService) {
        this.hardcodedAuthenticationService = hardcodedAuthenticationService;
    }
    LogoutComponent.prototype.ngOnInit = function () {
        this.hardcodedAuthenticationService.logout();
    };
    LogoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-logout',
            template: __webpack_require__(/*! ./logout.component.html */ "./src/app/logout/logout.component.html"),
            styles: [__webpack_require__(/*! ./logout.component.css */ "./src/app/logout/logout.component.css")]
        }),
        __metadata("design:paramtypes", [_service_hardcoded_authentication_service__WEBPACK_IMPORTED_MODULE_1__["HardcodedAuthenticationService"]])
    ], LogoutComponent);
    return LogoutComponent;
}());



/***/ }),

/***/ "./src/app/menu/menu.component.css":
/*!*****************************************!*\
  !*** ./src/app/menu/menu.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {margin: 0;}\r\n\r\nul.topnav {\r\n  list-style-type: none;\r\n  margin: 0;\r\n  padding: 0;\r\n  overflow: hidden;\r\n  background-color: #333;\r\n}\r\n\r\nul.topnav li {float: left;}\r\n\r\nul.topnav li a {\r\n  display: block;\r\n  color: white;\r\n  text-align: center;\r\n  padding: 14px 16px;\r\n  text-decoration: none;\r\n}\r\n\r\nul.topnav li a:hover:not(.active) {background-color: #111;}\r\n\r\nul.topnav li a.active {background-color: #4CAF50;}\r\n\r\nul.topnav li.right {float: right;}\r\n\r\n@media screen and (max-width: 600px) {\r\n  ul.topnav li.right, \r\n  ul.topnav li {float: none;}\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVudS9tZW51LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTSxTQUFTLENBQUM7O0FBRWhCO0VBQ0UscUJBQXFCO0VBQ3JCLFNBQVM7RUFDVCxVQUFVO0VBQ1YsZ0JBQWdCO0VBQ2hCLHNCQUFzQjtBQUN4Qjs7QUFFQSxjQUFjLFdBQVcsQ0FBQzs7QUFFMUI7RUFDRSxjQUFjO0VBQ2QsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIscUJBQXFCO0FBQ3ZCOztBQUVBLG1DQUFtQyxzQkFBc0IsQ0FBQzs7QUFFMUQsdUJBQXVCLHlCQUF5QixDQUFDOztBQUVqRCxvQkFBb0IsWUFBWSxDQUFDOztBQUVqQztFQUNFO2dCQUNjLFdBQVcsQ0FBQztBQUM1QiIsImZpbGUiOiJzcmMvYXBwL21lbnUvbWVudS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keSB7bWFyZ2luOiAwO31cclxuXHJcbnVsLnRvcG5hdiB7XHJcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcclxufVxyXG5cclxudWwudG9wbmF2IGxpIHtmbG9hdDogbGVmdDt9XHJcblxyXG51bC50b3BuYXYgbGkgYSB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nOiAxNHB4IDE2cHg7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG51bC50b3BuYXYgbGkgYTpob3Zlcjpub3QoLmFjdGl2ZSkge2JhY2tncm91bmQtY29sb3I6ICMxMTE7fVxyXG5cclxudWwudG9wbmF2IGxpIGEuYWN0aXZlIHtiYWNrZ3JvdW5kLWNvbG9yOiAjNENBRjUwO31cclxuXHJcbnVsLnRvcG5hdiBsaS5yaWdodCB7ZmxvYXQ6IHJpZ2h0O31cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgdWwudG9wbmF2IGxpLnJpZ2h0LCBcclxuICB1bC50b3BuYXYgbGkge2Zsb2F0OiBub25lO31cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/menu/menu.component.html":
/*!******************************************!*\
  !*** ./src/app/menu/menu.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">\n  <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css\">\n  <script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js\"></script>\n  <script src=\"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js\"></script>\n  <script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js\"></script>\n  <title>Document</title>\n</head>\n<body>\n \n      <ul class=\"topnav\">\n        <li><h3><a routerLink=\"#\"class=\"nav-link\" >JavaApp</a></h3></li>\n          <li><h4><a class=\"active\"  *ngIf=\"hardcodedAuthenticationService.isUserLoggedIn()\" routerLink=\"/welcome/Bipin\"class=\"nav-link\">Home</a></h4></li>\n          <li><h4><a *ngIf=\"hardcodedAuthenticationService.isUserLoggedIn()\" routerLink=\"/todos\"class=\"nav-link\">ToDos</a></h4></li>\n          <li class=\"right\"><h4><a *ngIf=\"!hardcodedAuthenticationService.isUserLoggedIn()\" routerLink=\"/login\"class=\"nav-link\">Login</a></h4></li>\n          <li class=\"right\"><h4><a *ngIf=\"hardcodedAuthenticationService.isUserLoggedIn()\" routerLink=\"/logout\"class=\"nav-link\">Logout</a></h4></li>\n         \n        </ul>\n</body>\n</html>\n"

/***/ }),

/***/ "./src/app/menu/menu.component.ts":
/*!****************************************!*\
  !*** ./src/app/menu/menu.component.ts ***!
  \****************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_hardcoded_authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/hardcoded-authentication.service */ "./src/app/service/hardcoded-authentication.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MenuComponent = /** @class */ (function () {
    //isUserLoggedIn: boolean = false;
    function MenuComponent(hardcodedAuthenticationService) {
        this.hardcodedAuthenticationService = hardcodedAuthenticationService;
    }
    MenuComponent.prototype.ngOnInit = function () {
        // this.isUserLoggedIn= this.hardcodedAuthenticationService.isUserLoggedIn();
    };
    MenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-menu',
            template: __webpack_require__(/*! ./menu.component.html */ "./src/app/menu/menu.component.html"),
            styles: [__webpack_require__(/*! ./menu.component.css */ "./src/app/menu/menu.component.css")]
        }),
        __metadata("design:paramtypes", [_service_hardcoded_authentication_service__WEBPACK_IMPORTED_MODULE_1__["HardcodedAuthenticationService"]])
    ], MenuComponent);
    return MenuComponent;
}());



/***/ }),

/***/ "./src/app/service/basic-authentication.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/service/basic-authentication.service.ts ***!
  \*********************************************************/
/*! exports provided: TOKEN, AUTHENTICATED_USER, BasicAuthenticationService, AuthenticationBean */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOKEN", function() { return TOKEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AUTHENTICATED_USER", function() { return AUTHENTICATED_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicAuthenticationService", function() { return BasicAuthenticationService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationBean", function() { return AuthenticationBean; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app.constants */ "./src/app/app.constants.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TOKEN = 'token';
var AUTHENTICATED_USER = 'authenticaterUser';
var BasicAuthenticationService = /** @class */ (function () {
    function BasicAuthenticationService(http) {
        this.http = http;
    }
    BasicAuthenticationService.prototype.executeJWTAuthenticationService = function (username, password) {
        return this.http.post(_app_constants__WEBPACK_IMPORTED_MODULE_2__["API_URL"] + "/authenticate", {
            username: username,
            password: password
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
            sessionStorage.setItem(AUTHENTICATED_USER, username);
            sessionStorage.setItem(TOKEN, "Bearer " + data.token);
            return data;
        }));
        //console.log("Execute Hello World Bean Service")
    };
    BasicAuthenticationService.prototype.executeAuthenticationService = function (username, password) {
        var basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            Authorization: basicAuthHeaderString
        });
        return this.http.get(_app_constants__WEBPACK_IMPORTED_MODULE_2__["API_URL"] + "/basicauth", { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
            sessionStorage.setItem(AUTHENTICATED_USER, username);
            sessionStorage.setItem(TOKEN, basicAuthHeaderString);
            return data;
        }));
        //console.log("Execute Hello World Bean Service")
    };
    BasicAuthenticationService.prototype.getAuthenticatedUser = function () {
        return sessionStorage.getItem(AUTHENTICATED_USER);
    };
    BasicAuthenticationService.prototype.getAuthenticatedToken = function () {
        if (this.getAuthenticatedUser())
            return sessionStorage.getItem(TOKEN);
    };
    BasicAuthenticationService.prototype.isUserLoggedIn = function () {
        var user = sessionStorage.getItem(AUTHENTICATED_USER);
        return !(user === null);
    };
    BasicAuthenticationService.prototype.logout = function () {
        sessionStorage.removeItem(AUTHENTICATED_USER);
        sessionStorage.removeItem(TOKEN);
    };
    BasicAuthenticationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], BasicAuthenticationService);
    return BasicAuthenticationService;
}());

var AuthenticationBean = /** @class */ (function () {
    function AuthenticationBean(message) {
        this.message = message;
    }
    return AuthenticationBean;
}());



/***/ }),

/***/ "./src/app/service/data/todo-data.service.ts":
/*!***************************************************!*\
  !*** ./src/app/service/data/todo-data.service.ts ***!
  \***************************************************/
/*! exports provided: TodoDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoDataService", function() { return TodoDataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app.constants */ "./src/app/app.constants.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TodoDataService = /** @class */ (function () {
    function TodoDataService(http) {
        this.http = http;
    }
    TodoDataService.prototype.retrieveAllTodos = function (username) {
        return this.http.get(_app_constants__WEBPACK_IMPORTED_MODULE_2__["TODO_JPA_URL"] + "/users/" + username + "/todos");
        // console.log("Execute Hello World Bean Service");
    };
    TodoDataService.prototype.deletetodo = function (username, id) {
        return this.http.delete(_app_constants__WEBPACK_IMPORTED_MODULE_2__["TODO_JPA_URL"] + "/users/" + username + "/todos/" + id);
    };
    TodoDataService.prototype.retrievetodo = function (username, id) {
        return this.http.get(_app_constants__WEBPACK_IMPORTED_MODULE_2__["TODO_JPA_URL"] + "/users/" + username + "/todos/" + id);
    };
    TodoDataService.prototype.updateTodo = function (username, id, todo) {
        return this.http.put(_app_constants__WEBPACK_IMPORTED_MODULE_2__["TODO_JPA_URL"] + "/users/" + username + "/todos/" + id, todo);
    };
    TodoDataService.prototype.createTodo = function (username, todo) {
        return this.http.post(_app_constants__WEBPACK_IMPORTED_MODULE_2__["TODO_JPA_URL"] + "/users/" + username + "/todos", todo);
    };
    TodoDataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], TodoDataService);
    return TodoDataService;
}());



/***/ }),

/***/ "./src/app/service/data/welcome-data.service.ts":
/*!******************************************************!*\
  !*** ./src/app/service/data/welcome-data.service.ts ***!
  \******************************************************/
/*! exports provided: HelloWorldBean, WelcomeDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelloWorldBean", function() { return HelloWorldBean; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomeDataService", function() { return WelcomeDataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HelloWorldBean = /** @class */ (function () {
    function HelloWorldBean(message) {
        this.message = message;
    }
    return HelloWorldBean;
}());

var WelcomeDataService = /** @class */ (function () {
    function WelcomeDataService(http) {
        this.http = http;
    }
    WelcomeDataService.prototype.executeHelloWorldBeanService = function () {
        return this.http.get('http://localhost:8080/hello-world-bean');
        // console.log("Execute Hello World Bean Service");
    };
    WelcomeDataService.prototype.executeHelloWorldServiceWithPathVariable = function (name) {
        // let basicAuthHeaderString = this.createBasicAuthenticationHttpHeader();
        //let headers = new HttpHeaders({
        //   Authorization: basicAuthHeaderString
        //  })
        return this.http.get("http://localhost:8080/hello-world/" + name
        // ,{headers}
        );
    };
    WelcomeDataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], WelcomeDataService);
    return WelcomeDataService;
}());



/***/ }),

/***/ "./src/app/service/hardcoded-authentication.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/service/hardcoded-authentication.service.ts ***!
  \*************************************************************/
/*! exports provided: HardcodedAuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HardcodedAuthenticationService", function() { return HardcodedAuthenticationService; });
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

var HardcodedAuthenticationService = /** @class */ (function () {
    function HardcodedAuthenticationService() {
    }
    HardcodedAuthenticationService.prototype.authenticate = function (username, password) {
        //console.log('before '+ this.isUserLoggedIn());
        if (username === "Bipin" && password === '1111') {
            sessionStorage.setItem('authenticaterUser', username);
            //console.log('After '+ this.isUserLoggedIn());
            return true;
        }
        return false;
    };
    HardcodedAuthenticationService.prototype.isUserLoggedIn = function () {
        var user = sessionStorage.getItem('authenticaterUser');
        return !(user === null);
    };
    HardcodedAuthenticationService.prototype.logout = function () {
        sessionStorage.removeItem('authenticaterUser');
    };
    HardcodedAuthenticationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], HardcodedAuthenticationService);
    return HardcodedAuthenticationService;
}());



/***/ }),

/***/ "./src/app/service/http/http-intercepter-basic-auth.service.ts":
/*!*********************************************************************!*\
  !*** ./src/app/service/http/http-intercepter-basic-auth.service.ts ***!
  \*********************************************************************/
/*! exports provided: HttpIntercepterBasicAuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpIntercepterBasicAuthService", function() { return HttpIntercepterBasicAuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _basic_authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../basic-authentication.service */ "./src/app/service/basic-authentication.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HttpIntercepterBasicAuthService = /** @class */ (function () {
    function HttpIntercepterBasicAuthService(basicAuthenticationService) {
        this.basicAuthenticationService = basicAuthenticationService;
    }
    HttpIntercepterBasicAuthService.prototype.intercept = function (request, next) {
        // let username = 'bipin'
        // let password = '1111'
        // let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);
        var basicAuthHeaderString = this.basicAuthenticationService.getAuthenticatedToken();
        var username = this.basicAuthenticationService.getAuthenticatedUser();
        if (basicAuthHeaderString && username) {
            request = request.clone({
                setHeaders: {
                    Authorization: basicAuthHeaderString
                }
            });
        }
        return next.handle(request);
    };
    HttpIntercepterBasicAuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_basic_authentication_service__WEBPACK_IMPORTED_MODULE_1__["BasicAuthenticationService"]])
    ], HttpIntercepterBasicAuthService);
    return HttpIntercepterBasicAuthService;
}());



/***/ }),

/***/ "./src/app/service/route-guard.service.ts":
/*!************************************************!*\
  !*** ./src/app/service/route-guard.service.ts ***!
  \************************************************/
/*! exports provided: RouteGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouteGuardService", function() { return RouteGuardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _hardcoded_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hardcoded-authentication.service */ "./src/app/service/hardcoded-authentication.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RouteGuardService = /** @class */ (function () {
    function RouteGuardService(hardcodedAuthenticationService, router) {
        this.hardcodedAuthenticationService = hardcodedAuthenticationService;
        this.router = router;
    }
    RouteGuardService.prototype.canActivate = function (route, state) {
        if (this.hardcodedAuthenticationService.isUserLoggedIn())
            return true;
        this.router.navigate(['login']);
        return false;
    };
    RouteGuardService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_hardcoded_authentication_service__WEBPACK_IMPORTED_MODULE_2__["HardcodedAuthenticationService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], RouteGuardService);
    return RouteGuardService;
}());



/***/ }),

/***/ "./src/app/todo/todo.component.css":
/*!*****************************************!*\
  !*** ./src/app/todo/todo.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ng-invalid:not(form){\r\n    border-left: 20px solid red;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdG9kby90b2RvLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSwyQkFBMkI7QUFDL0IiLCJmaWxlIjoic3JjL2FwcC90b2RvL3RvZG8uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uZy1pbnZhbGlkOm5vdChmb3JtKXtcclxuICAgIGJvcmRlci1sZWZ0OiAyMHB4IHNvbGlkIHJlZDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/todo/todo.component.html":
/*!******************************************!*\
  !*** ./src/app/todo/todo.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Todo</h1>\n<div classs=\"container\">\n  <div class=\"alert alert-warning\" *ngIf=\"todoForm.dirty && todoForm.invalid\">Enter Valid Values</div>\n  <div class=\"alert alert-warning\" *ngIf=\"todoForm.dirty && targetDate.invalid\">Enter Valid Target Date</div>\n  <div class=\"alert alert-warning\" *ngIf=\"todoForm.dirty && description.invalid\">Enter Valid Description of 5 character atleast</div>\n\n  <form (ngSubmit)=\"!todoForm.invalid && saveTodo()\" #todoForm=\"ngForm\">\n      <fieldset class=\"form-group\">\n        <label>Description</label>\n        <input type=\"text\" #description=\"ngModel\"\n        [(ngModel)]=\"todo.description\" class=\"form-control\" name=\"description\" required=\"required\" minlength=\"5\">\n    </fieldset>\n\n    <fieldset class=\"form-group\">\n        <label>Target Date</label>\n        <input type=\"date\" #targetDate=\"ngModel\"\n         [ngModel]=\"todo.targetDate | date:'yyyy-MM-dd'\" \n        (ngModelChange)=\"todo.targetDate=$event\" \n        class=\"form-control\"  name=\"targetDate\" required=\"required\">\n    </fieldset>\n    <button type=\"submit\"class=\"btn btn-success\">Save</button>\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/todo/todo.component.ts":
/*!****************************************!*\
  !*** ./src/app/todo/todo.component.ts ***!
  \****************************************/
/*! exports provided: TodoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoComponent", function() { return TodoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_data_todo_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/data/todo-data.service */ "./src/app/service/data/todo-data.service.ts");
/* harmony import */ var _list_todos_list_todos_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../list-todos/list-todos.component */ "./src/app/list-todos/list-todos.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TodoComponent = /** @class */ (function () {
    function TodoComponent(todoService, route, router) {
        this.todoService = todoService;
        this.route = route;
        this.router = router;
    }
    TodoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.id = this.route.snapshot.params['id'];
        this.todo = new _list_todos_list_todos_component__WEBPACK_IMPORTED_MODULE_2__["Todo"](this.id, '', false, new Date());
        if (this.id != -1) {
            this.todoService.retrievetodo('bipin', this.id).subscribe(function (data) { return _this.todo = data; });
        }
    };
    TodoComponent.prototype.saveTodo = function () {
        var _this = this;
        if (this.id == -1) {
            //create
            this.todoService.createTodo('bipin', this.todo).subscribe(function (data) {
                console.log(data);
                _this.router.navigate(['todos']);
            });
        }
        else {
            //update
            this.todoService.updateTodo('bipin', this.id, this.todo).subscribe(function (data) {
                console.log(data);
                _this.router.navigate(['todos']);
            });
        }
    };
    TodoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-todo',
            template: __webpack_require__(/*! ./todo.component.html */ "./src/app/todo/todo.component.html"),
            styles: [__webpack_require__(/*! ./todo.component.css */ "./src/app/todo/todo.component.css")]
        }),
        __metadata("design:paramtypes", [_service_data_todo_data_service__WEBPACK_IMPORTED_MODULE_1__["TodoDataService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], TodoComponent);
    return TodoComponent;
}());



/***/ }),

/***/ "./src/app/welcome/welcome.component.css":
/*!***********************************************!*\
  !*** ./src/app/welcome/welcome.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".carousel-inner > .item > img,\r\n.carousel-inner > .item > a > img {\r\n  width: 70%;\r\n  margin: auto;\r\n}\r\n.container{\r\n    height: 20%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2VsY29tZS93ZWxjb21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VBRUUsVUFBVTtFQUNWLFlBQVk7QUFDZDtBQUNBO0lBQ0ksV0FBVztBQUNmIiwiZmlsZSI6InNyYy9hcHAvd2VsY29tZS93ZWxjb21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2Fyb3VzZWwtaW5uZXIgPiAuaXRlbSA+IGltZyxcclxuLmNhcm91c2VsLWlubmVyID4gLml0ZW0gPiBhID4gaW1nIHtcclxuICB3aWR0aDogNzAlO1xyXG4gIG1hcmdpbjogYXV0bztcclxufVxyXG4uY29udGFpbmVye1xyXG4gICAgaGVpZ2h0OiAyMCU7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/welcome/welcome.component.html":
/*!************************************************!*\
  !*** ./src/app/welcome/welcome.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">\n    <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css\">\n    <script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js\"></script>\n    <script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js\"></script>\n\n    <title>Document</title>\n</head>\n<body>\n    <!-- <h1>Welcome to Our Page </h1>\n<div class=\"container\">\nYou can Manage your todos <a routerLink=\"/todos\">Here</a> \n</div> \n    <div class=\"container\">\n        Click Here to get a Customized Welcome Message with Parameter\n        <button (click)=\"getWelcomeMessageWithParameter()\" class=\"btn  btn-success\">Get Welcome Message</button>\n        </div>\n    <div class=\"container\" *ngIf=\"welcomeMessageFromService\">\n        <h2>Your Customized Welcome Message</h2> \n        {{welcomeMessageFromService}}\n        </div> -->\n\n\n        <div class=\"container\">\n            <h2>Welcome to Our Home Page</h2>  \n            <div id=\"myCarousel\" class=\"carousel slide\" data-ride=\"carousel\">\n              <!-- Indicators -->\n              <ol class=\"carousel-indicators\">\n                <li data-target=\"#myCarousel\" data-slide-to=\"0\" class=\"active\"></li>\n                <li data-target=\"#myCarousel\" data-slide-to=\"1\"></li>\n                <li data-target=\"#myCarousel\" data-slide-to=\"2\"></li>\n              </ol>\n          \n              <!-- Wrapper for slides -->\n              <div class=\"carousel-inner\">\n                <div class=\"item active\">\n                  <img src=\"/assets/images/la.jpg\" alt=\"Los Angeles\" style=\"width:100%;\">\n                </div>\n          \n                <div class=\"item \">\n                  <img src=\"/assets/images/chicago.jpg\" alt=\"Chicago\" style=\"width:100%;\">\n                </div>\n              \n                <div class=\"item\">\n                  <img src=\"/assets/images/ny.jpg\" alt=\"New york\" style=\"width:100%;\">\n                </div>\n              </div>\n          \n              <!-- Left and right controls\n              <a class=\"left carousel-control\" href=\"#myCarousel\" data-slide=\"prev\">\n                <span class=\"glyphicon glyphicon-chevron-left\"></span>\n                <span class=\"sr-only\">Previous</span>\n              </a>\n              <a class=\"right carousel-control\" href=\"#myCarousel\" data-slide=\"next\">\n                <span class=\"glyphicon glyphicon-chevron-right\"></span>\n                <span class=\"sr-only\">Next</span>\n              </a> -->\n            </div>\n          </div>\n          \n \n</body>\n</html> \n"

/***/ }),

/***/ "./src/app/welcome/welcome.component.ts":
/*!**********************************************!*\
  !*** ./src/app/welcome/welcome.component.ts ***!
  \**********************************************/
/*! exports provided: WelcomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomeComponent", function() { return WelcomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_data_welcome_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/data/welcome-data.service */ "./src/app/service/data/welcome-data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WelcomeComponent = /** @class */ (function () {
    function WelcomeComponent(route, service) {
        this.route = route;
        this.service = service;
        this.message = "Some Welcome Message";
        this.name = '';
    }
    WelcomeComponent.prototype.ngOnInit = function () {
        this.name = this.route.snapshot.params['name'];
        //console.log(this.message) 
    };
    WelcomeComponent.prototype.getWelcomeMessage = function () {
        // console.log(this.service.executeHelloWorldBeanService());
        var _this = this;
        this.service.executeHelloWorldBeanService().subscribe(function (response) { return _this.handleSuccessfulResponse(response); }, function (error) { return _this.handleErrorResponse(error); });
        //console.log('last line of getWelcomeMessage');
    };
    WelcomeComponent.prototype.getWelcomeMessageWithParameter = function () {
        // console.log(this.service.executeHelloWorldBeanService());
        var _this = this;
        this.service.executeHelloWorldServiceWithPathVariable(this.name).subscribe(function (response) { return _this.handleSuccessfulResponse(response); }, function (error) { return _this.handleErrorResponse(error); });
        //console.log('last line of getWelcomeMessage');
    };
    WelcomeComponent.prototype.handleSuccessfulResponse = function (response) {
        this.welcomeMessageFromService = response.message;
        //console.log(response);
        // console.log(response.message);
    };
    WelcomeComponent.prototype.handleErrorResponse = function (error) {
        this.welcomeMessageFromService = error.error.message;
        // console.log(error);
        // console.log(error.error);
        // console.log(error.error.message); 
    };
    WelcomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-welcome',
            template: __webpack_require__(/*! ./welcome.component.html */ "./src/app/welcome/welcome.component.html"),
            styles: [__webpack_require__(/*! ./welcome.component.css */ "./src/app/welcome/welcome.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _service_data_welcome_data_service__WEBPACK_IMPORTED_MODULE_2__["WelcomeDataService"]])
    ], WelcomeComponent);
    return WelcomeComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
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
var environment = {
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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\DELL\javaApp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map