webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "ul > li {\r\n    list-style: none;\r\n}\r\n.fa-1x {\r\n    font-size: 1.5rem;\r\n}\r\n.navbar-toggler.toggler-example {\r\n    cursor: pointer;\r\n}\r\n.dark-blue-text {\r\n    color: #0A38F5;\r\n}\r\n.dark-pink-text {\r\n    color: #AC003A;\r\n}\r\n.dark-amber-text {\r\n    color: #ff6f00;\r\n}\r\n.dark-teal-text {\r\n    color: #004d40;\r\n}                \r\n                    ", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div class=\"container\">\n    <flash-messages></flash-messages>\n   <router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_service__ = __webpack_require__("../../../../../src/app/login.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    function AppComponent(router, loginService) {
        this.router = router;
        this.loginService = loginService;
        this.title = 'Intern Management System';
    }
    ;
    AppComponent.prototype.logout = function () {
        sessionStorage.removeItem("currentUser");
        this.router.navigate(['./logout']);
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2__login_service__["a" /* LoginService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__student_registration_student_registration_component__ = __webpack_require__("../../../../../src/app/student-registration/student-registration.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__mentor_registration_mentor_registration_component__ = __webpack_require__("../../../../../src/app/mentor-registration/mentor-registration.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__guards_StudentAuthGuard__ = __webpack_require__("../../../../../src/app/guards/StudentAuthGuard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__guards_AuthGuard__ = __webpack_require__("../../../../../src/app/guards/AuthGuard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__logout_logout_component__ = __webpack_require__("../../../../../src/app/logout/logout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__projects_list_projects_list_component__ = __webpack_require__("../../../../../src/app/projects-list/projects-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__registration_success_registration_success_component__ = __webpack_require__("../../../../../src/app/registration-success/registration-success.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__login_service__ = __webpack_require__("../../../../../src/app/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_validate_service__ = __webpack_require__("../../../../../src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__app_routing__ = __webpack_require__("../../../../../src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__project_details_project_details_component__ = __webpack_require__("../../../../../src/app/project-details/project-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__project_registration_project_registration_component__ = __webpack_require__("../../../../../src/app/project-registration/project-registration.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__data_share_service__ = __webpack_require__("../../../../../src/app/data-share.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__navbar_navbar_component__ = __webpack_require__("../../../../../src/app/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__register_register_component__ = __webpack_require__("../../../../../src/app/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__profile_profile_component__ = __webpack_require__("../../../../../src/app/profile/profile.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_4__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_5__student_registration_student_registration_component__["a" /* StudentRegistrationComponent */],
                __WEBPACK_IMPORTED_MODULE_6__mentor_registration_mentor_registration_component__["a" /* MentorRegistrationComponent */],
                __WEBPACK_IMPORTED_MODULE_10__logout_logout_component__["a" /* LogoutComponent */],
                __WEBPACK_IMPORTED_MODULE_11__projects_list_projects_list_component__["a" /* ProjectsListComponent */],
                __WEBPACK_IMPORTED_MODULE_12__registration_success_registration_success_component__["a" /* RegistrationSuccessComponent */],
                __WEBPACK_IMPORTED_MODULE_17__project_details_project_details_component__["a" /* ProjectDetailsComponent */],
                __WEBPACK_IMPORTED_MODULE_18__project_registration_project_registration_component__["a" /* ProjectRegistrationComponent */],
                __WEBPACK_IMPORTED_MODULE_20__navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_21__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_22__register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_24__profile_profile_component__["a" /* ProfileComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_16__app_routing__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_23__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_9_angular2_flash_messages__["FlashMessagesModule"]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_7__guards_StudentAuthGuard__["a" /* StudentAuthGuard */], __WEBPACK_IMPORTED_MODULE_14__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_9_angular2_flash_messages__["FlashMessagesService"], __WEBPACK_IMPORTED_MODULE_15__services_validate_service__["a" /* ValidateService */], __WEBPACK_IMPORTED_MODULE_8__guards_AuthGuard__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_13__login_service__["a" /* LoginService */], __WEBPACK_IMPORTED_MODULE_19__data_share_service__["a" /* DataShareService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__guards_StudentAuthGuard__ = __webpack_require__("../../../../../src/app/guards/StudentAuthGuard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__guards_AuthGuard__ = __webpack_require__("../../../../../src/app/guards/AuthGuard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__logout_logout_component__ = __webpack_require__("../../../../../src/app/logout/logout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__register_register_component__ = __webpack_require__("../../../../../src/app/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__profile_profile_component__ = __webpack_require__("../../../../../src/app/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__projects_list_projects_list_component__ = __webpack_require__("../../../../../src/app/projects-list/projects-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__registration_success_registration_success_component__ = __webpack_require__("../../../../../src/app/registration-success/registration-success.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__project_details_project_details_component__ = __webpack_require__("../../../../../src/app/project-details/project-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__project_registration_project_registration_component__ = __webpack_require__("../../../../../src/app/project-registration/project-registration.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var appRoutes = [
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_2__login_login_component__["a" /* LoginComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_6__register_register_component__["a" /* RegisterComponent */] },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_8__profile_profile_component__["a" /* ProfileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_4__guards_AuthGuard__["a" /* AuthGuard */]] },
    { path: '', component: __WEBPACK_IMPORTED_MODULE_7__home_home_component__["a" /* HomeComponent */] },
    { path: 'logout', component: __WEBPACK_IMPORTED_MODULE_5__logout_logout_component__["a" /* LogoutComponent */] },
    { path: 'success', component: __WEBPACK_IMPORTED_MODULE_10__registration_success_registration_success_component__["a" /* RegistrationSuccessComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_4__guards_AuthGuard__["a" /* AuthGuard */]] },
    { path: 'projectsList', component: __WEBPACK_IMPORTED_MODULE_9__projects_list_projects_list_component__["a" /* ProjectsListComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_3__guards_StudentAuthGuard__["a" /* StudentAuthGuard */]] },
    { path: 'projectDetails/:id', component: __WEBPACK_IMPORTED_MODULE_11__project_details_project_details_component__["a" /* ProjectDetailsComponent */] },
    { path: 'projectRegistration', component: __WEBPACK_IMPORTED_MODULE_12__project_registration_project_registration_component__["a" /* ProjectRegistrationComponent */] },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_2__login_login_component__["a" /* LoginComponent */] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(appRoutes)
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/data-share.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataShareService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var DataShareService = /** @class */ (function () {
    function DataShareService() {
    }
    DataShareService.prototype.setData = function (myData) {
        this.data = myData;
    };
    DataShareService.prototype.getData = function () {
        return this.data;
    };
    DataShareService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], DataShareService);
    return DataShareService;
}());



/***/ }),

/***/ "../../../../../src/app/guards/AuthGuard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthGuard = /** @class */ (function () {
    function AuthGuard(router) {
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (sessionStorage.getItem('user')) {
            // logged in so return true
            return true;
        }
        // not logged in so redirect to login page with the return url
        this.router.navigate(['/login']);
        return false;
    };
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "../../../../../src/app/guards/StudentAuthGuard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StudentAuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var StudentAuthGuard = /** @class */ (function () {
    function StudentAuthGuard(router, authService) {
        this.router = router;
        this.authService = authService;
    }
    StudentAuthGuard.prototype.canActivate = function () {
        if (JSON.parse(this.authService.getUserData()).usertype === 'student') {
            // logged in so return true
            return true;
        }
        // not logged in so redirect to login page with the return url
        return false;
    };
    StudentAuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]])
    ], StudentAuthGuard);
    return StudentAuthGuard;
}());



/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron text-center\">\n  <h1>Intern Management System</h1>\n  <p class=\"lead\">Welcome to Intern Management System Home Page</p>\n    <div>\n      <a [routerLink]=\"['/register']\" class=\"btn btn-primary\">Register</a>\n      <a [routerLink]=\"['/login']\" class=\"btn btn-primary\">login</a>\n    </div>\n</div>\n\n<div class=\"row\">\n  <div class=\"col-md-4 col-lg-4\">\n    <h3>First Section</h3>\n    <p>Lorem Ipsum is simply dummy text of the printing been the industry's standard c typesetting, remaining essentially unchanged</p>\n  </div>\n  <div class=\"col-md-4 col-lg-4\">\n    <h3>Second Section</h3>\n    <p>Lorem Ipsum is simply dummy text of the printing been the industry's standard c typesetting, remaining essentially unchanged</p>\n  </div>\n  <div class=\"col-md-4 col-lg-4\">\n    <h3>Second Section</h3>\n    <p>Lorem Ipsum is simply dummy text of the printing been the industry's standard c typesetting, remaining essentially unchanged</p>\n  </div>  \n</div>"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/login.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoginService = /** @class */ (function () {
    function LoginService() {
    }
    LoginService.prototype.isUserLoggedIn = function () {
        if (sessionStorage.getItem('currentUser')) {
            return true;
        }
        return false;
    };
    LoginService.prototype.getUserLoggedIn = function () {
        if (sessionStorage.getItem('currentUser')) {
            return sessionStorage.getItem('currentUser');
        }
    };
    LoginService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], LoginService);
    return LoginService;
}());



/***/ }),

/***/ "../../../../../src/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".form-control{\r\n    float : right;\r\n}\r\nlabel{\r\n    float:left;\r\n}\r\ntable{\r\n    margin : 0 auto;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\">Login</h2>\n<form #loginForm=\"ngForm\" (ngSubmit)=\"login(loginForm);\">\n    <div class=\"container\">\n      <div class=\"row form-group\">\n        <div class=\"col-lg-3\">\n          <label for=\"username\">Username</label>\n        </div>\n        <div class=\"col-lg-3\">\n            <input type=\"email\" \n            class=\"form-control\" \n            name=\"username\"\n            id=\"username\"\n            ngModel\n            [pattern]=\"emailPattern\"\n            #nameField=\"ngModel\"\n            required>\n        </div>\n      </div>\n      <div class=\"row form-group\">\n          <div class=\"col-lg-3\">\n            <label for=\"password\">Password</label>\n          </div>\n          <div class=\"col-lg-3\">\n            <input type=\"password\" \n            class=\"form-control\" \n            name=\"password\"\n            id=\"password\"\n            ngModel\n            #nameField=\"ngModel\"\n            required\n            minlength=\"3\">\n        </div>\n      </div>\n      <div class=\"row form-group\">\n          <div class=\"col-lg-3\">\n            <label for=\"\"></label>\n          </div>\n          <div class=\"col-lg-3\">\n              <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!loginForm.valid\">Login</button>\n          </div>\n        </div>\n    </div>    \n\n  </form>"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, authService, flashMessage) {
        this.router = router;
        this.authService = authService;
        this.flashMessage = flashMessage;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.usertypes = ['student', 'mentor'];
        this.title = 'Intern Management System';
        this.emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$';
    };
    LoginComponent.prototype.login = function (loginForm) {
        var _this = this;
        if (loginForm.value.userType === "student") {
            sessionStorage.setItem('currentUser', 'student');
            this.router.navigate(['./studentRegistration']);
        }
        else if (loginForm.value.userType === "mentor") {
            sessionStorage.setItem('currentUser', 'mentor');
            this.router.navigate(['./mentorRegistration']);
        }
        var user = {
            username: loginForm.value.username,
            password: loginForm.value.password
        };
        this.authService.authenticateUser(user).subscribe(function (data) {
            if (data.success) {
                _this.authService.storeUserData(data.token, data.user);
                _this.flashMessage.show("You are now logged in", { cssClass: 'alert-success', timeout: 5000 });
                _this.router.navigate(['./profile']);
            }
            else {
                _this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 5000 });
                _this.router.navigate(['./login']);
            }
        });
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/logout/logout.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/logout/logout.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Logged out Successful login again!</h1>\n\n<h3 [routerLink] = \"['/login']\">Login</h3>"

/***/ }),

/***/ "../../../../../src/app/logout/logout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LogoutComponent = /** @class */ (function () {
    function LogoutComponent() {
    }
    LogoutComponent.prototype.ngOnInit = function () {
        sessionStorage.clear();
    };
    LogoutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-logout',
            template: __webpack_require__("../../../../../src/app/logout/logout.component.html"),
            styles: [__webpack_require__("../../../../../src/app/logout/logout.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LogoutComponent);
    return LogoutComponent;
}());



/***/ }),

/***/ "../../../../../src/app/mentor-registration/mentor-registration.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "label{\r\n    float:left;\r\n}\r\ninput[type=\"radio\"]{\r\n    width: auto;\r\n    display: inline;\r\n    margin:2%;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/mentor-registration/mentor-registration.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\">Update your profile</h2>\n<form #registrationForm=\"ngForm\" (ngSubmit)=\"register();\">\n    <div class=\"container\">\n      <div class=\"row form-group\">\n            <div class=\"col-lg-4\">\n                <label for=\"usertype\">User Type</label>\n            </div> \n            <div class=\"col-lg-4\">\n                <input type=\"text\" \n                class=\"form-control\" \n                name=\"usertype\"\n                id=\"usertype\"\n                [(ngModel)]=\"usertype\"\n                disabled>\n            </div>\n      </div>\n      <div class=\"row form-group\">\n        <div class=\"col-lg-4\">\n          <label for=\"name\">Name</label>\n        </div>\n        <div class=\"col-lg-4\">\n            <input type=\"text\" \n            class=\"form-control\" \n            name=\"name\"\n            id=\"name\"\n            [(ngModel)]=\"name\"\n            required\n            minlength=\"3\">\n        </div>\n      </div>\n      <div class=\"row form-group\">\n        <div class=\"col-lg-4\">\n          <label for=\"email\">Email</label>\n        </div>\n        <div class=\"col-lg-4\">\n            <input type=\"email\" \n            [pattern]=\"emailPattern\"\n            class=\"form-control\" \n            name=\"email\"\n            id=\"email\"\n            [(ngModel)]=\"email\"\n            required\n            minlength=\"3\"\n            disabled>\n        </div>\n      </div>\n      <div class=\"row form-group\">\n        <div class=\"col-lg-4\">\n            <label for=\"dob\">Date of Birth</label>\n        </div>\n        <div class=\"col-lg-4\">\n              <input type=\"date\" \n              class=\"form-control\" \n              name=\"dob\"\n              id=\"dob\"\n              [(ngModel)]=\"dob\"\n              required>\n        </div>\n      </div>\n      <div class=\"row form-group\">\n          <div class=\"col-lg-4\">\n              <label for=\"mobile\">Mobile</label>\n          </div>\n          <div class=\"col-lg-4\">\n                <input type=\"tel\" \n                \n                class=\"form-control\" \n                name=\"mobile\"\n                id=\"mobile\"\n                [(ngModel)]=\"mobile\"\n                required>\n          </div>\n        </div>\n        <div class=\"row form-group\">\n            <div class=\"col-lg-4\">\n                <label for=\"affiliation\">Affiliation</label>\n            </div>\n            <div class=\"col-lg-4\">\n                  <input type=\"text\" \n                  class=\"form-control\" \n                  name=\"affiliation\"\n                  id=\"affiliation\"\n                  [(ngModel)]=\"affiliation\"\n                  required>\n            </div>\n          </div>\n          <div class=\"row form-group\">\n              <div class=\"col-lg-4\">\n                  <label for=\"position_of_responsibility\">Position of Responsibility</label>\n              </div>\n              <div class=\"col-lg-4\">\n                    <input type=\"text\" \n                    class=\"form-control\" \n                    name=\"position_of_responsibility\"\n                    id=\"position_of_responsibility\"\n                    [(ngModel)]=\"position_of_responsibility\"\n                    required>\n              </div>\n            </div>\n            <div class=\"row form-group\">\n                <div class=\"col-lg-4\">\n                    <label for=\"association_with_log\">Are you associated with Life-of-Girl project?</label>\n                </div>\n                <div class=\"col-lg-4\">\n                      <input type=\"radio\" \n                      class=\"form-control\" \n                      name=\"association_with_log\"\n                      id=\"association_with_log\"\n                      value=\"yes\"\n                      [(ngModel)]=\"association_with_log\">Yes\n                      <input type=\"radio\" \n                      class=\"form-control\" \n                      name=\"association_with_log\"\n                      id=\"association_with_log\"\n                      value=\"no\"\n                      [(ngModel)]=\"association_with_log\">No\n                </div>\n              </div>\n              <div class=\"row form-group\" *ngIf=\"association_with_log === 'yes'\">\n                <div class=\"col-lg-4\">\n                    <label for=\"log_id\">Please Enter your LOG ID</label>\n                </div>\n                <div class=\"col-lg-4\">\n                      <input type=\"text\"\n                      class=\"form-control\" \n                      name=\"log_id\"\n                      id=\"log_id\"\n                      required\n                      [(ngModel)]=\"log_id\">\n                </div>\n              </div>   \n              <div class=\"row form-group\" *ngIf=\"association_with_log === 'no'\">\n                  <div class=\"col-lg-4\">\n                      <label for=\"log_objective_desc\">How do you like to extend your support to our Life-of-Girl (LoG) objectives? (in 100 words)</label>\n                  </div>\n                  <div class=\"col-lg-4\">\n                        <textarea \n                        rows=\"4\" cols=\"50\"\n                        class=\"form-control\" \n                        name=\"log_objective_desc\"\n                        id=\"log_objective_desc\"\n                        required\n                        maxlength=\"500\"\n                        [(ngModel)]=\"log_objective_desc\"></textarea>\n                  </div>\n                </div>      \n            </div>    \n\n    <button class=\"btn btn-primary\" [disabled]=\"!registrationForm.valid\">Register</button>\n\n  </form>"

/***/ }),

/***/ "../../../../../src/app/mentor-registration/mentor-registration.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MentorRegistrationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MentorRegistrationComponent = /** @class */ (function () {
    function MentorRegistrationComponent(router, authService, flashMessage) {
        this.router = router;
        this.authService = authService;
        this.flashMessage = flashMessage;
    }
    MentorRegistrationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.usertype = "Mentor";
        this.emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
        this.email = JSON.parse(this.authService.getUserData()).username;
        this.authService.getProfile(this.email).subscribe(function (profile) {
            _this.profile = profile;
            _this.usertype = _this.profile.user.usertype;
            _this.email = _this.profile.user.username;
            _this.mobile = _this.profile.user.mobile;
            _this.dob = _this.profile.user.dob;
            _this.name = _this.profile.user.name;
            _this.affiliation = _this.profile.user.affiliation;
            _this.position_of_responsibility = _this.profile.user.position_of_responsibility;
            _this.association_with_log = _this.profile.user.association_with_log;
            _this.log_id = _this.profile.user.log_id;
            _this.log_objective_desc = _this.profile.user.log_objective_desc;
        });
    };
    MentorRegistrationComponent.prototype.register = function () {
        var _this = this;
        var profile = {
            usertype: this.usertype,
            username: this.email,
            name: this.name,
            dob: this.dob,
            mobile: this.mobile,
            affiliation: this.affiliation,
            position_of_responsibility: this.position_of_responsibility,
            association_with_log: this.association_with_log,
            log_id: this.log_id,
            log_objective_desc: this.log_objective_desc
        };
        //Register User
        this.authService.registerProfile(profile).subscribe(function (data) {
            if (data.success) {
                _this.flashMessage.show("Profile updated", { cssClass: 'alert-success', timeout: 3000 });
                _this.router.navigate(['./projectsList']);
            }
            else {
                _this.flashMessage.show("Something went wrong", { cssClass: 'alert-danger', timeout: 3000 });
                _this.router.navigate(['./profile']);
            }
        });
    };
    MentorRegistrationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'mentor-registration',
            template: __webpack_require__("../../../../../src/app/mentor-registration/mentor-registration.component.html"),
            styles: [__webpack_require__("../../../../../src/app/mentor-registration/mentor-registration.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]])
    ], MentorRegistrationComponent);
    return MentorRegistrationComponent;
}());



/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-sm navbar-dark bg-dark\">\n    <a class=\"navbar-brand\" [routerLink] = \"['/']\">{{title}}</a>\n    <button class=\"navbar-toggler\" (click)=\"collapse=!collapse\" type=\"button\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n  \n    <div class=\"navbar-collapse\" (click)=\"collapse=false\" [hidden]=\"!collapse\">\n      <ul class=\"navbar-nav mr-auto\">\n        <li class=\"nav-item\" *ngIf=\"!authService.isLoggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\n          <a class=\"nav-link\" [routerLink] = \"['/login']\">Login <span class=\"sr-only\">(current)</span></a>\n        </li>\n        <li class=\"nav-item\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\n            <a class=\"nav-link\" [routerLink] = \"['/register']\">Register </a>\n          </li>\n        <!-- <li class=\"nav-item\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"  *ngIf=\"loginService.getUserLoggedIn() === 'student'\">\n          <a class=\"nav-link\" [routerLink] = \"['/studentRegistration']\">Register</a>\n        </li>\n        <li class=\"nav-item\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\" *ngIf=\"loginService.getUserLoggedIn() === 'mentor'\">\n            <a class=\"nav-link\" [routerLink] = \"['/mentorRegistration']\">Register</a>\n          </li> -->\n        <li class=\"nav-item\" *ngIf=\"authService.isLoggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\n          <a class=\"nav-link\" [routerLink] = \"['/projectsList']\">Project List</a>\n        </li>\n        <li class=\"nav-item\" *ngIf=\"authService.isLoggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\n            <a class=\"nav-link\" [routerLink] = \"['/profile']\">Profile</a>\n          </li>\n        <li class=\"nav-item\" *ngIf=\"authService.isLoggedIn()\">\n          <a class=\"nav-link\" href=\"#\" (click)=\"onLogoutClick()\">Logout</a>\n        </li>\n      </ul>\n    </div>\n  </nav>"

/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(flashMessage, authService, router) {
        this.flashMessage = flashMessage;
        this.authService = authService;
        this.router = router;
        this.title = 'Intern Management System';
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.onLogoutClick = function () {
        this.authService.logout();
        this.flashMessage.show('You are logged out!', { cssClass: 'alert-success', timeout: 3000 });
        this.router.navigate(['/login']);
        return false;
    };
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__("../../../../../src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"],
            __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/profile/profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"user\">\n  <div *ngIf=\"user.usertype==='mentor'\">\n    <mentor-registration></mentor-registration>\n  </div>\n  <div *ngIf=\"user.usertype==='student'\">\n    <student-registration></student-registration>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        this.user = JSON.parse(this.authService.getUserData());
    };
    ProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__("../../../../../src/app/profile/profile.component.html"),
            styles: [__webpack_require__("../../../../../src/app/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "../../../../../src/app/project-details/project-details.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".custom-table{\r\n    width: 80%;\r\n    text-align: left;\r\n    max-width: 80%;\r\n    margin-left: 10%;\r\n    margin-right: 10%;\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/project-details/project-details.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  Showing project details: {{project}}\n\n  <table class=\"table table-striped custom-table\">\n    <tbody class=\"container\">\n      <tr class=\"row\">\n        <td class=\"col-lg-3 col-md-3 col-sm-6\">Project Title</td>\n        <td class=\"col-lg-9 col-md-9 col-sm-6\">{{projectData.projectTile}}</td>\n      </tr>\n      <tr class=\"row\">\n        <td class=\"col-lg-3 col-md-3 col-sm-6\">Project Code</td>\n        <td class=\"col-lg-9 col-md-9 col-sm-6\">{{projectData.projectCode}}</td>\n      </tr>\n      <tr class=\"row\">\n        <td class=\"col-lg-3 col-md-3 col-sm-6\">Project Type</td>\n        <td class=\"col-lg-9 col-md-9 col-sm-6\">{{projectData.projectType}}</td>\n      </tr>\n      <tr class=\"row\">\n        <td class=\"col-lg-3 col-md-3 col-sm-6\">Mentor</td>\n        <td class=\"col-lg-9 col-md-9 col-sm-6\">{{projectData.mentor}}</td>\n      </tr>\n      <tr class=\"row\">\n        <td class=\"col-lg-3 col-md-3 col-sm-6 \">Credits</td>\n        <td class=\"col-lg-9 col-md-9 col-sm-6\">{{projectData.credits}}</td>\n      </tr>\n      <tr class=\"row\">\n        <td class=\"col-lg-3 col-md-3 col-sm-6\">Prerequisites</td>\n        <td class=\"col-lg-9 col-md-9 col-sm-6\">{{projectData.prerequisites}}</td>\n      </tr>\n      <tr class=\"row\">\n        <td class=\"col-lg-3 col-md-3 col-sm-6\">Work Duration</td>\n        <td class=\"col-lg-9 col-md-9 col-sm-6\">{{projectData.workDuration}}</td>\n      </tr>\n      <tr class=\"row\">\n          <td class=\"col-lg-3 col-md-3 col-sm-6\">Onsite/WFH</td>\n          <td class=\"col-lg-9 col-md-9 col-sm-6\">{{projectData.onsite}}</td>\n        </tr>\n      <tr class=\"row\">\n        <td class=\"col-lg-3 col-md-3 col-sm-6\">Start Date</td>\n        <td class=\"col-lg-9 col-md-9 col-sm-6\">{{projectData.startDate}}</td>\n      </tr>\n      <tr class=\"row\">\n        <td class=\"col-lg-3 col-md-3 col-sm-6\">Eligibility</td>\n        <td class=\"col-lg-9 col-md-9 col-sm-6\">{{projectData.eligibility}}</td>\n      </tr>\n      <tr class=\"row\">\n        <td class=\"col-lg-3 col-md-3 col-sm-6\">Description</td>\n        <td class=\"col-lg-9 col-md-9 col-sm-6\">{{projectData.description}}</td>\n      </tr>\n      <tr>\n        <button class=\"btn btn-primary btn-block\" (click)=\"apply(projectData)\">Apply</button>\n      </tr>\n    </tbody>\n  </table>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/project-details/project-details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectDetailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_share_service__ = __webpack_require__("../../../../../src/app/data-share.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProjectDetailsComponent = /** @class */ (function () {
    function ProjectDetailsComponent(route, dataService, router) {
        this.route = route;
        this.dataService = dataService;
        this.router = router;
    }
    ProjectDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.route.params.subscribe(function (params) {
            _this.project = params['id'];
        });
        this.projectData = {
            'projectTile': 'Life of Girl!!',
            'projectCode': '2120',
            'projectType': 'Fulltime',
            'mentor': 'Karishma Awesome',
            'credits': '4',
            'prerequisites': 'Maths, Biology, Physics, Chemistry',
            'workDuration': '36Hrs.',
            'onsite': 'WFH',
            'startDate': '30/10/1992',
            'eligibility': 'BTech in IIIT',
            'description': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum'
        };
    };
    ProjectDetailsComponent.prototype.apply = function (data) {
        // let navigationExtras : NavigationExtras = {queryParams: {"project" : JSON.stringify(this.projectData)}};
        // this.router.navigate(['./projectRegistration'], navigationExtras);
        this.dataService.setData(data);
        this.router.navigate(['./projectRegistration']);
    };
    ProjectDetailsComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    ProjectDetailsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-project-details',
            template: __webpack_require__("../../../../../src/app/project-details/project-details.component.html"),
            styles: [__webpack_require__("../../../../../src/app/project-details/project-details.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_2__data_share_service__["a" /* DataShareService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], ProjectDetailsComponent);
    return ProjectDetailsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/project-registration/project-registration.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".custom-table{\r\n    width: 80%;\r\n    text-align: left;\r\n    max-width: 80%;\r\n    margin-left: 10%;\r\n    margin-right: 10%;\r\n}\r\n\r\ninput[type=\"radio\"]{\r\n    margin-left: 20px;\r\n    margin-right: 20px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/project-registration/project-registration.component.html":
/***/ (function(module, exports) {

module.exports = "<p>Project Registration</p>\n<form #myForm=\"ngForm\" (ngSubmit)=\"submit(myForm.value)\">\n  <table class=\"table table-striped custom-table\">\n    <tbody class=\"container\">\n        <tr class=\"row\">\n            <td class=\"col-lg-3 col-md-3 col-sm-6\">Name</td>\n            <td class=\"col-lg-9 col-md-9 col-sm-6\">-- Name Placeholder --</td>\n          </tr>\n      <tr class=\"row\">\n        <td class=\"col-lg-3 col-md-3 col-sm-6\">Project Title</td>\n        <td class=\"col-lg-9 col-md-9 col-sm-6\">{{receivedData.projectTile}}</td>\n      </tr>\n      <tr class=\"row\">\n        <td class=\"col-lg-3 col-md-3 col-sm-6\">Project Code</td>\n        <td class=\"col-lg-9 col-md-9 col-sm-6\">{{receivedData.projectCode}}</td>\n      </tr>\n      <tr class=\"row\">\n        <td class=\"col-lg-3 col-md-3 col-sm-6 \">Credits</td>\n        <td class=\"col-lg-9 col-md-9 col-sm-6\">{{receivedData.credits}}</td>\n      </tr>\n      <tr class=\"row\">\n        <td class=\"col-lg-3 col-md-3 col-sm-6\">Prerequisites</td>\n        <td class=\"col-lg-9 col-md-9 col-sm-6\">{{receivedData.prerequisites}}</td>\n      </tr>\n      <tr class=\"row\">\n        <td class=\"col-lg-3 col-md-3 col-sm-6\">Work Duration</td>\n        <td class=\"col-lg-9 col-md-9 col-sm-6\">{{receivedData.workDuration}}</td>\n      </tr>\n      <tr class=\"row\">\n          <td class=\"col-lg-3 col-md-3 col-sm-6\">Onsite/WFH?</td>\n          <td class=\"col-lg-9 col-md-9 col-sm-6\">{{receivedData.onsite}}</td>\n        </tr>\n      <tr class=\"row\">\n        <td class=\"col-lg-3 col-md-3 col-sm-6\">Eligibility</td>\n        <td class=\"col-lg-9 col-md-9 col-sm-6\">{{receivedData.eligibility}}</td>\n      </tr>\n      <tr class=\"row form-group\">\n        <td class=\"col-lg-3 col-md-3 col-sm-6\">Skillset</td>\n        <td class=\"col-lg-9 col-md-9 col-sm-6\">\n          <input type=\"text\" name=\"skillSet\" id=\"skillSet\" class=\"form-control\" [(ngModel)]=\"skillSet\" required>\n        </td>\n      </tr>\n      <tr class=\"row form-group\">\n          <td class=\"col-lg-3 col-md-3 col-sm-6\">Given this project, what will you do to address the project objectives? </td>\n          <td class=\"col-lg-9 col-md-9 col-sm-6\">\n            <textarea name=\"projectObjective\" rows=\"4\" cols=\"50\" id=\"projectObjective\" class=\"form-control\" minlength=100 [(ngModel)]=\"projectObjective\" required></textarea>\n          </td>\n        </tr>\n        <tr class=\"row\">\n            <td colspan=\"2\"><p><input type=\"radio\" name=\"tnc\" required>I acknowledge that I have read and agree to the above Terms and Conditions</p></td>\n        </tr>\n        <tr>\n          <button class=\"btn btn-primary btn-block\" [disabled]=\"!myForm.valid\">Submit</button>\n        </tr>\n    </tbody>\n  </table>\n  \n</form>"

/***/ }),

/***/ "../../../../../src/app/project-registration/project-registration.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectRegistrationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_share_service__ = __webpack_require__("../../../../../src/app/data-share.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProjectRegistrationComponent = /** @class */ (function () {
    function ProjectRegistrationComponent(route, dataService) {
        this.route = route;
        this.dataService = dataService;
    }
    ProjectRegistrationComponent.prototype.ngOnInit = function () {
        // this.route.queryParams.subscribe((data) => {
        //   this.receivedData = JSON.parse(data["project"]);
        // });
        this.receivedData = this.dataService.getData();
        console.log("Received Data", this.receivedData);
    };
    ProjectRegistrationComponent.prototype.submit = function (formData) {
        console.log("received Data", this.receivedData);
        console.log("formData Data", formData);
    };
    ProjectRegistrationComponent.prototype.ngDestroy = function () {
    };
    ProjectRegistrationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-project-registration',
            template: __webpack_require__("../../../../../src/app/project-registration/project-registration.component.html"),
            styles: [__webpack_require__("../../../../../src/app/project-registration/project-registration.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_1__data_share_service__["a" /* DataShareService */]])
    ], ProjectRegistrationComponent);
    return ProjectRegistrationComponent;
}());



/***/ }),

/***/ "../../../../../src/app/projects-list/projects-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/projects-list/projects-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <ul *ngFor=\"let project of listOfProjects\">\n    <li [routerLink] = \"['/projectDetails/', project]\">{{project}}</li>\n  </ul>\n</div>"

/***/ }),

/***/ "../../../../../src/app/projects-list/projects-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectsListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProjectsListComponent = /** @class */ (function () {
    function ProjectsListComponent() {
    }
    ProjectsListComponent.prototype.ngOnInit = function () {
        this.listOfProjects = ['Project1', 'Project2', 'Project3', 'Project4', 'Project5'];
    };
    ProjectsListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-projects-list',
            template: __webpack_require__("../../../../../src/app/projects-list/projects-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/projects-list/projects-list.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProjectsListComponent);
    return ProjectsListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\">Register</h2>\n<form (submit)=\"onRegisterSubmit()\">\n  <div class=\"form-group\">\n    <label for=\"username\">Username</label>\n    <input type=\"email\" [(ngModel)]=\"username\" name=\"username\" class=\"form-control\">\n  </div>\n  <div class=\"form-group\">\n    <label for=\"password\">Password</label>\n    <input type=\"password\" [(ngModel)]=\"password\" name=\"password\" class=\"form-control\">\n  </div>\n  <div class=\"form-group\">\n      <label for=\"usertype\">User Type</label>\n      <select type=\"usertype\" [(ngModel)]=\"usertype\" name=\"usertype\" class=\"form-control\">\n        <option *ngFor=\"let usertype of usertypes\" [value]='usertype.toLowerCase()'>{{usertype}}</option>\n      </select>\n    </div>\n  <input type=\"submit\" class=\"btn btn-primary\" value=\"Submit\">\n</form>"

/***/ }),

/***/ "../../../../../src/app/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_validate_service__ = __webpack_require__("../../../../../src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(validateService, flashMessage, authService, router) {
        this.validateService = validateService;
        this.flashMessage = flashMessage;
        this.authService = authService;
        this.router = router;
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.usertypes = ["Student", "Mentor"];
    };
    RegisterComponent.prototype.onRegisterSubmit = function () {
        var _this = this;
        var user = {
            username: this.username,
            password: this.password,
            usertype: this.usertype
        };
        //Required Fields
        if (!this.validateService.validateRegister(user)) {
            this.flashMessage.show("Enter all the fields", { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        //Validate email
        if (!this.validateService.validateEmail(user.username)) {
            this.flashMessage.show("Enter valid email id", { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        //Register User
        this.authService.registerUser(user).subscribe(function (data) {
            if (data.success) {
                _this.flashMessage.show("You are now registered", { cssClass: 'alert-success', timeout: 3000 });
                _this.router.navigate(['./login']);
            }
            else {
                _this.flashMessage.show("Something went wrong", { cssClass: 'alert-danger', timeout: 3000 });
                _this.router.navigate(['./register']);
            }
        });
    };
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-register',
            template: __webpack_require__("../../../../../src/app/register/register.component.html"),
            styles: [__webpack_require__("../../../../../src/app/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */],
            __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"],
            __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/registration-success/registration-success.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/registration-success/registration-success.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  registration-success works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/registration-success/registration-success.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistrationSuccessComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RegistrationSuccessComponent = /** @class */ (function () {
    function RegistrationSuccessComponent() {
    }
    RegistrationSuccessComponent.prototype.ngOnInit = function () {
    };
    RegistrationSuccessComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-registration-success',
            template: __webpack_require__("../../../../../src/app/registration-success/registration-success.component.html"),
            styles: [__webpack_require__("../../../../../src/app/registration-success/registration-success.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], RegistrationSuccessComponent);
    return RegistrationSuccessComponent;
}());



/***/ }),

/***/ "../../../../../src/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
        this.registerUrl = 'users/register';
        this.authenticateUrl = 'users/authenticate';
        this.profileUrl = 'users/profile';
        //this.isDev = false;
    }
    AuthService.prototype.registerUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.registerUrl, user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.getProfile = function (username) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        headers.append('username', username);
        return this.http.get(this.profileUrl, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.authenticateUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.authenticateUrl, user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.registerProfile = function (profile) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.profileUrl, profile, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.storeUserData = function (token, user) {
        sessionStorage.setItem('id_token', token);
        sessionStorage.setItem('user', JSON.stringify(user));
        this.authToken = token;
        this.user = user;
    };
    AuthService.prototype.getUserData = function () {
        var user = sessionStorage.getItem('user');
        return user;
    };
    AuthService.prototype.loadToken = function () {
        var token = sessionStorage.getItem('id_token');
        this.authToken = token;
    };
    AuthService.prototype.logout = function () {
        this.authToken = null;
        this.user = null;
        sessionStorage.clear();
    };
    AuthService.prototype.isLoggedIn = function () {
        return sessionStorage.getItem('id_token');
    };
    AuthService.prototype.getUserType = function () {
        return JSON.parse(sessionStorage.getItem('user')).usertype;
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "../../../../../src/app/services/validate.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidateService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ValidateService = /** @class */ (function () {
    function ValidateService() {
    }
    ValidateService.prototype.validateRegister = function (user) {
        if (user.username === undefined || user.password === undefined || user.usertype === undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validateEmail = function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    };
    ValidateService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], ValidateService);
    return ValidateService;
}());



/***/ }),

/***/ "../../../../../src/app/student-registration/student-registration.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "label{\r\n    float:left;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/student-registration/student-registration.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\">Update your profile</h2>\n<div>\n<form #registrationForm=\"ngForm\" (ngSubmit)=\"register();showForm=false;\">\n    <div class=\"container\">\n        <div class=\"row form-group\">\n            <div class=\"col-lg-4\">\n                <label for=\"usertype\">User Type</label>\n            </div> \n            <div class=\"col-lg-4\">\n                <input type=\"text\" \n                class=\"form-control\" \n                name=\"usertype\"\n                id=\"usertype\"\n                [(ngModel)]=\"usertype\"\n                disabled>\n            </div>\n        </div>\n      <div class=\"row form-group\">\n        <div class=\"col-lg-4\">\n          <label for=\"name\">Name</label>\n        </div>\n        <div class=\"col-lg-4\">\n            <input type=\"text\" \n            class=\"form-control\" \n            name=\"name\"\n            id=\"name\"\n            [(ngModel)]=\"name\"\n            required\n            minlength=\"3\">\n        </div>\n      </div>\n      <div class=\"row form-group\">\n        <div class=\"col-lg-4\">\n          <label for=\"photo\">Photo</label>\n        </div>\n        <div class=\"col-lg-4\">\n            <input type=\"file\" \n            accept=\"image/*\"\n            class=\"form-control photo-input\" \n            name=\"photo\"\n            id=\"photo\"\n            (change)=\"readUrl($event)\"\n            [(ngModel)]=\"photo\">\n        </div>\n      </div>\n\n      <div class=\"row form-group\" *ngIf=\"photoUrl\">\n        <div class=\"col-lg-4\">\n            <img class=\"photo-preview\" [src]=\"photoUrl\">\n        </div>\n      </div>\n      <div class=\"row form-group\">\n        <div class=\"col-lg-4\">\n          <label for=\"email\">Email</label>\n        </div>\n        <div class=\"col-lg-4\">\n            <input type=\"email\" \n            class=\"form-control\" \n            name=\"email\"\n            id=\"email\"\n            [(ngModel)]=\"email\"\n            required\n            [pattern]=\"emailPattern\"\n            disabled>\n        </div>\n      </div>\n      <div class=\"row form-group\">\n        <div class=\"col-lg-4\">\n            <label for=\"dob\">Date of Birth</label>\n        </div>\n        <div class=\"col-lg-4\">\n              <input type=\"date\" \n              class=\"form-control\" \n              name=\"dob\"\n              id=\"dob\"\n              [(ngModel)]=\"dob\"\n              required>\n        </div>\n      </div>\n      <div class=\"row form-group\">\n        <div class=\"col-lg-4\">\n            <label for=\"aadhaar\">Aadhaar</label>\n        </div>\n        <div class=\"col-lg-4\">\n              <input type=\"number\" \n              class=\"form-control\" \n              name=\"aadhaar\"\n              id=\"aadhaar\"\n              [(ngModel)]=\"aadhaar\"\n              required>\n        </div>\n      </div>\n      <div class=\"row form-group\">\n          <div class=\"col-lg-4\">\n              <label for=\"mobile\">Mobile</label>\n          </div>\n          <div class=\"col-lg-4\">\n                <input type=\"tel\" \n                \n                class=\"form-control\" \n                name=\"mobile\"\n                id=\"mobile\"\n                [(ngModel)]=\"mobile\"\n                required>\n          </div>\n        </div>\n        <div class=\"row form-group\">\n            <div class=\"col-lg-4\">\n                <label for=\"college\">College/Instistute</label>\n            </div>\n            <div class=\"col-lg-4\">\n                  <input type=\"text\" \n                  class=\"form-control\" \n                  name=\"college\"\n                  id=\"college\"\n                  [(ngModel)]=\"college\"\n                  required>\n            </div>\n          </div>\n          <div class=\"row form-group\">\n              <div class=\"col-lg-4\">\n                  <label for=\"specialization\">Specialization</label>\n              </div>\n              <div class=\"col-lg-4\">\n                    <input type=\"text\" \n                    class=\"form-control\" \n                    name=\"specialization\"\n                    id=\"specialization\"\n                    [(ngModel)]=\"specialization\"\n                    required>\n              </div>\n            </div>\n            <div class=\"row form-group\">\n                <div class=\"col-lg-4\">\n                    <label for=\"year_of_study\">Year Of Study</label>\n                </div>\n                <div class=\"col-lg-4\">\n                      <input type=\"text\" \n                      class=\"form-control\" \n                      name=\"year_of_study\"\n                      id=\"year_of_study\"\n                      [(ngModel)]=\"year_of_study\"\n                      required>\n                </div>\n              </div>\n              <div class=\"row form-group\">\n                  <div class=\"col-lg-4\">\n                      <label for=\"cgpa\">CGPA</label>\n                  </div>\n                  <div class=\"col-lg-4\">\n                        <input type=\"number\" \n                    \n                        class=\"form-control\" \n                        name=\"cgpa\"\n                        id=\"cgpa\"\n                        required\n                        ng-pattern=\"cgpaRegex\"\n                        [(ngModel)]=\"cgpa\">\n                  </div>\n                </div>\n                <div class=\"row form-group\">\n                    <div class=\"col-lg-4\">\n                        <label for=\"dream_job\">Dream Job</label>\n                    </div>\n                    <div class=\"col-lg-4\">\n                        <select name=\"dream_job\" \n                        [(ngModel)]=\"dream_job\" \n                        id=\"dream_job\" \n                        required\n                        class=\"form-control\">\n                          <option *ngFor=\"let job of dreamJobs\" [ngValue]=\"job\">{{ job }}</option>\n                      </select>\n                    </div>\n                  </div>\n                  <!-- <span *ngIf=\"dreamJob.value==='Others'\">\n                      <input type=\"text\" \n                      class=\"form-control\" \n                      name=\"dreamJob\"\n                      id=\"dreamJob\"\n                      [(ngModel)]=\"dreamJob\"\n                      required>\n                  </span> -->\n                  \n                  \n    </div>    \n\n    <button class=\"btn btn-primary\" [disabled]=\"!registrationForm.valid\">Register</button>\n\n  </form>"

/***/ }),

/***/ "../../../../../src/app/student-registration/student-registration.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StudentRegistrationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var StudentRegistrationComponent = /** @class */ (function () {
    function StudentRegistrationComponent(router, authService, flashMessage) {
        this.router = router;
        this.authService = authService;
        this.flashMessage = flashMessage;
    }
    StudentRegistrationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.usertype = "Student";
        this.emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
        this.dreamJobs = ['Software Engineer', 'Core Job', 'Entrepreneur', 'Civil Services', 'Higher Studies', 'Research/Scientist', 'Other'];
        this.email = JSON.parse(this.authService.getUserData()).username;
        this.authService.getProfile(this.email).subscribe(function (profile) {
            console.log('profile', profile);
            if (profile.user) {
                console.log('user', profile.user);
                _this.profile = profile.user;
                _this.usertype = _this.profile.usertype;
                _this.email = _this.profile.username;
                _this.mobile = _this.profile.mobile;
                _this.dob = _this.profile.dob;
                _this.name = _this.profile.name;
                _this.cgpa = _this.profile.cgpa;
                _this.year_of_study = _this.profile.year_of_study;
                _this.dream_job = _this.profile.dream_job;
                _this.specialization = _this.profile.specialization;
                _this.college = _this.profile.college;
                _this.aadhaar = _this.profile.aadhaar;
            }
        });
    };
    StudentRegistrationComponent.prototype.register = function () {
        var _this = this;
        var profile = {
            usertype: this.usertype,
            username: this.email,
            name: this.name,
            dob: this.dob,
            aadhaar: this.aadhaar,
            mobile: this.mobile,
            college: this.college,
            specialization: this.specialization,
            year_of_study: this.year_of_study,
            cgpa: this.cgpa,
            dream_job: this.dream_job
        };
        //Register User
        this.authService.registerProfile(profile).subscribe(function (data) {
            if (data.success) {
                _this.flashMessage.show("Profile updated", { cssClass: 'alert-success', timeout: 3000 });
                _this.router.navigate(['./projectsList']);
            }
            else {
                _this.flashMessage.show("Something went wrong", { cssClass: 'alert-danger', timeout: 3000 });
                _this.router.navigate(['./profile']);
            }
        });
    };
    StudentRegistrationComponent.prototype.readUrl = function (event) {
        var _this = this;
        if (event.target.files && event.target.files[0]) {
            var reader = new FileReader();
            reader.onload = function (event) {
                _this.photoUrl = event.target.result;
            };
            reader.readAsDataURL(event.target.files[0]);
        }
    };
    StudentRegistrationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'student-registration',
            template: __webpack_require__("../../../../../src/app/student-registration/student-registration.component.html"),
            styles: [__webpack_require__("../../../../../src/app/student-registration/student-registration.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]])
    ], StudentRegistrationComponent);
    return StudentRegistrationComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map