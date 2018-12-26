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
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var routes = [];
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

module.exports = "<div class=\"container\" style=\"padding-bottom: 2em; padding-top: 2em;\">\n    <div class=\"row\">\n        <div class=\"col-lg-12\">\n            <h2>Chat Bot</h2>\n        </div>\n        <div class=\"col-lg-12\">\n            <h3><a [href]=\"URL\">{{URL}}</a></h3>\n        </div>\n    </div>\n</div>\n<div class=\"container\">\n    <div class=\"row\" style=\"padding-bottom: 2em;\">\n        <div class=\"col-lg-12\">\n            <form class=\"form-inline\">\n                <div class=\"form-group mx-sm-3 mb-2\">\n                    <label for=\"sparkQlQuery\" class=\"sr-only\">Password</label>\n                    <input type=\"text\" class=\"form-control\" id=\"sparQlQuery\" placeholder=\"Heraklion areaCode ?x\"\n                        #userInput>\n                </div>\n                <button type=\"button\" class=\"btn btn-primary mb-2\" (click)=\"userInputListener(userInput)\">Retrive\n                    Results</button>\n            </form>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-lg-6\">\n            <div class=\"row\">\n                <div class=\"col-lg-12\">\n                    <h5><b>User Input:</b></h5>\n                    <p>{{input}}</p>\n                </div>\n                <div class=\"col-lg-12\">\n                    <h5><b>Generated Query (SparQl):</b></h5>\n                    <p>{{sparQlQuery}}</p>\n                </div>\n                <div class=\"col-lg-12\">\n                    <h5><b>Final Results (JSON):</b></h5>\n                    <div *ngIf=\"sparQlData === null; else elseBlock\">\n                        <p>No data</p>\n                    </div>\n                    <ng-template #elseBlock>\n                        <div *ngFor=\"let result of finalResults\">\n                            <div class=\"card bg-default mb-3\" style=\"max-width: 18rem;\">\n                                <img *ngIf=\"imageSection !== null\" class=\"card-img-top\" [src]=\"imageSection\" [alt]=\"finalQuestionResults\">\n                                <div class=\"card-body\">\n                                    <h5 class=\"card-title\">{{finalQuestionResults}}</h5>\n                                    <p class=\"card-text\">{{result}}</p>\n                                    <a *ngIf=\"wikiSection !== null\" [href]=\"wikiSection\" class=\"btn btn-primary\">Wikipedia\n                                        Link</a>\n                                </div>\n                            </div>\n                        </div>\n                    </ng-template>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-lg-6\">\n            <h5><b>Input Examples:</b></h5>\n            <table class=\"table table-striped table-dark\">\n                <thead>\n                    <tr>\n                        <th scope=\"col\">#</th>\n                        <th scope=\"col\">Input</th>\n                    </tr>\n                </thead>\n                <tbody>\n                    <tr>\n                        <th scope=\"row\">1</th>\n                        <td>Heraklion areaCode ?x</td>\n                    </tr>\n                    <tr>\n                        <th scope=\"row\">2</th>\n                        <td>Albert Einstein award ?x</td>\n                    </tr>\n                    <tr>\n                        <th scope=\"row\">3</th>\n                        <td>Albert Einstein birthDate ?x</td>\n                    </tr>\n                    <tr>\n                        <th scope=\"row\">4</th>\n                        <td>Heraklion wikiPageID ?x</td>\n                    </tr>\n                    <tr>\n                        <th scope=\"row\">5</th>\n                        <td>Planet thumbnail ?x</td>\n                    </tr>\n                    <tr>\n                        <th scope=\"row\">6</th>\n                        <td>Planet wikiPageRevisionID ?x</td>\n                    </tr>\n                    <tr>\n                        <th scope=\"row\">7</th>\n                        <td>GEORGE (operating system) developer ?x</td>\n                    </tr>\n                    <tr>\n                        <th scope=\"row\">8</th>\n                        <td>GEORGE (operating system) status ?x</td>\n                    </tr>\n                    <tr>\n                        <th scope=\"row\">9</th>\n                        <td>United States language ?x</td>\n                    </tr>\n                    <tr>\n                        <th scope=\"row\">10</th>\n                        <td>United States governmentType ?x</td>\n                    </tr>\n                </tbody>\n            </table>\n        </div>\n    </div>\n</div>\n<router-outlet></router-outlet>"

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


var AppComponent = /** @class */ (function () {
    function AppComponent(http) {
        var _this = this;
        this.http = http;
        this.URL = 'https://dbpedia.org/sparql';
        this.propertiesJSON = './assets/properties.json';
        this.sparQlData = null;
        this.sparQlQuery = '';
        this.userInput = '';
        this.input = '';
        this.finalQuestionResults = '';
        this.imageSection = null;
        this.wikiSection = null;
        this.prefixes = 'PREFIX foaf: <http://xmlns.com/foaf/0.1/> ' +
            'PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> ' +
            'PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#> ' +
            'PREFIX dbo: <http://dbpedia.org/ontology/> ' +
            'PREFIX dbp: <http://dbpedia.org/property/> ' +
            'PREFIX dbr: <http://dbpedia.org/resource/> ' +
            'PREFIX dct: <http://purl.org/dc/terms/> ';
        this.getJSON().subscribe(function (data) {
            _this.propertyMatching = data;
            // console.log(this.propertyMatching);
        });
    }
    AppComponent.prototype.getJSON = function () {
        return this.http.get(this.propertiesJSON);
    };
    AppComponent.prototype.userInputListener = function (userInput) {
        var temp = userInput.value;
        this.argument = temp.split(' ');
        var argument1;
        var argument2;
        var argument3;
        if (this.argument.length > 3) {
            for (var i = 0; i < this.argument.length - 2; i++) {
                if (i === 0) {
                    argument1 = this.argument[i];
                }
                else if (i > 0 && argument1) {
                    argument1 = argument1 + ' ' + this.argument[i];
                }
            }
            argument2 = this.argument[this.argument.length - 2];
            argument3 = this.argument[this.argument.length - 1];
            if (argument3[0] !== '?') {
                this.input = 'Last arguments should contain (?).';
                this.sparQlQuery = 'Last arguments should contain (?).';
                this.sparQlData = null;
            }
            else {
                this.input = argument1 + ' ' + argument2 + ' ' + argument3;
                this.finalQuestionResults = argument2[0].toUpperCase() + argument2.slice(1) + ' of ' + argument1 + ' is ';
                this.searchArgument = argument2;
                this.sparQlGenerator(argument1, argument2, '?x');
            }
        }
        else if (this.argument.length < 3) {
            this.input = 'Please insert a valid question such as, Heraklion areaCode ?x.';
            this.sparQlQuery = 'Please insert a valid question such as, Heraklion areaCode ?x.';
            this.sparQlData = null;
        }
        else if (this.argument[0] && this.argument[1] && this.argument[2]) {
            argument1 = this.argument[0];
            argument2 = this.argument[1];
            argument3 = this.argument[2];
            if (argument3[0] !== '?') {
                this.input = 'Last arguments should contain (?).';
                this.sparQlQuery = 'Last arguments should contain (?).';
                this.sparQlData = null;
            }
            else {
                this.input = argument1 + ' ' + argument2 + ' ' + argument3;
                this.finalQuestionResults = argument2[0].toUpperCase() + argument2.slice(1) + ' of ' + argument1 + ' is ';
                this.searchArgument = argument2;
                this.sparQlGenerator(argument1, argument2, '?x');
            }
        }
        else {
            this.input = 'Please insert a valid question such as, Heraklion areaCode ?x.';
            this.sparQlQuery = 'Please insert a valid question such as, Heraklion areaCode ?x.';
            this.sparQlData = null;
        }
    };
    AppComponent.prototype.sparQlGenerator = function (argument1, argument2, argument3) {
        var sparQl = this.prefixes + 'SELECT distinct ' + argument3 + ' WHERE ' +
            '{ '
            + '?result rdfs:label "' + argument1 + '"@en . '
            + '?result dbo:' + argument2 + ' ' + argument3 + ' . '
            /*    + 'FILTER(lang(?x)="en" || '
                  + 'datatype(?x) = xsd:string || '
                  + 'datatype(?x) = xsd:integer || '
                  + 'datatype(?x) = xsd:anyURI) ' */
            + '}';
        this.sparQlQuery = sparQl;
        this.sparQlRequest(sparQl);
    };
    AppComponent.prototype.sparQlRequest = function (sparQlQuery) {
        var _this = this;
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]()
            .set('Content-Type', 'application/json');
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
            .set('default-graph-uri', 'http://dbpedia.org')
            .set('query', sparQlQuery)
            .set('format', 'application/json')
            .set('CXML_redir_for_subjs', '121')
            .set('CXML_redir_for_hrefs=', '')
            .set('timeout', '30000')
            .set('run', '+Run+Query+');
        var httpOptions = {
            headers: headers,
            params: params
        };
        this.http.get(this.URL, httpOptions)
            .subscribe(function (data) {
            console.log('GET Request is successful: ', data);
            _this.sparQlData = data;
            _this.dataVisualization(_this.sparQlData);
        }, function (error) {
            console.log('Error:', error);
            _this.sparQlData = error;
        });
    };
    AppComponent.prototype.dataVisualization = function (receivedData) {
        this.finalResults = new Array();
        this.imageSection = null;
        this.wikiSection = null;
        var result = receivedData.results.bindings;
        if (result.length > 1) {
            for (var i = 0; i < result.length; i++) {
                if (result[i].x['xml:lang']) {
                    if (result[i].x['xml:lang'] === 'en') {
                        this.finalResults.push(result[i].x.value);
                    }
                }
                else if (this.searchArgument === 'wikiPageID') {
                    this.finalResults.push(result[0].x.value);
                    this.wikiSection = 'http://en.wikipedia.org/?curid=' + result[0].x.value;
                }
                else {
                    this.finalResults.push(result[i].x.value);
                }
            }
        }
        else if (result[0].x.value.includes('.jpg')) {
            this.finalResults.push(result[0].x.value);
            this.imageSection = result[0].x.value;
        }
        else {
            this.finalResults.push(result[0].x.value);
        }
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
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
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
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

module.exports = __webpack_require__(/*! C:\Users\georg\Έγγραφα\Angular\chatbot\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map