webpackJsonp([1,4],{

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__house_list_house_list_component__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__house_details_house_details_component__ = __webpack_require__(68);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




// Route config let's you map routes to components
var routes = [
    // map '/houses' to the people list component
    {
        path: 'houses',
        component: __WEBPACK_IMPORTED_MODULE_2__house_list_house_list_component__["a" /* HouseListComponent */],
    },
    // map '/houses/:id' to house details component
    {
        path: 'houses/:id',
        component: __WEBPACK_IMPORTED_MODULE_3__house_details_house_details_component__["a" /* HouseDetailsComponent */]
    },
    // map '/' to '/houses' as our default route
    {
        path: '',
        redirectTo: '/houses',
        pathMatch: 'full'
    },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'GoT Houses';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(164),
        styles: [__webpack_require__(162)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__house_list_house_list_component__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__house_service__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__house_details_house_details_component__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_routing_module__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__min_validator_directive__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__max_validator_directive__ = __webpack_require__(106);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_5__house_list_house_list_component__["a" /* HouseListComponent */],
            __WEBPACK_IMPORTED_MODULE_7__house_details_house_details_component__["a" /* HouseDetailsComponent */],
            __WEBPACK_IMPORTED_MODULE_9__min_validator_directive__["a" /* MinValidatorDirective */],
            __WEBPACK_IMPORTED_MODULE_10__max_validator_directive__["a" /* MaxValidatorDirective */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_8__app_routing_module__["a" /* AppRoutingModule */],
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_6__house_service__["a" /* HouseService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(35);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaxValidatorDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MaxValidatorDirective = MaxValidatorDirective_1 = (function () {
    function MaxValidatorDirective() {
    }
    MaxValidatorDirective.prototype.validate = function (control) {
        var currentValue = control.value;
        var isValid = currentValue <= this.max;
        // return errors as an object
        return isValid ? null : {
            max: {
                valid: false
            }
        };
    };
    return MaxValidatorDirective;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Number)
], MaxValidatorDirective.prototype, "max", void 0);
MaxValidatorDirective = MaxValidatorDirective_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* Directive */])({
        selector: '[max]',
        // register validator in DI
        providers: [{ provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* NG_VALIDATORS */], useExisting: MaxValidatorDirective_1, multi: true }]
    }),
    __metadata("design:paramtypes", [])
], MaxValidatorDirective);

var MaxValidatorDirective_1;
//# sourceMappingURL=max-validator.directive.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(35);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MinValidatorDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MinValidatorDirective = MinValidatorDirective_1 = (function () {
    function MinValidatorDirective() {
    }
    // Define validation logic
    MinValidatorDirective.prototype.validate = function (control) {
        var currentValue = control.value;
        var isValid = currentValue >= this.min;
        // return errors as an object
        return isValid ? null : {
            min: {
                valid: false
            }
        };
    };
    return MinValidatorDirective;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Number)
], MinValidatorDirective.prototype, "min", void 0);
MinValidatorDirective = MinValidatorDirective_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* Directive */])({
        selector: '[min]',
        // register validator in DI
        providers: [{ provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* NG_VALIDATORS */], useExisting: MinValidatorDirective_1, multi: true }]
    }),
    __metadata("design:paramtypes", [])
], MinValidatorDirective);

var MinValidatorDirective_1;
//# sourceMappingURL=min-validator.directive.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 162:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(31)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 163:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(31)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 164:
/***/ (function(module, exports) {

module.exports = "<h1>\n  {{title}}\n</h1>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ 165:
/***/ (function(module, exports) {

module.exports = "<section *ngIf=\"house\">\n  <!-- description -->\n  <section>\n    <h2>You selected: {{house.name}}</h2>\n    <h3>Description</h3>\n    <p>\n      Below is the description about the : {{house.name}} .\n    </p>\n  </section>\n\n<!-- Below is the View for every Attribute that is returned from the Houses API Information-->\n  <section>\n      <!-- Name: of the House-->\n      <div>        \n          <b><label for=\"name\">Name: </label><p></b>\n        <!--<input type=\"text\" name=\"name\" [(ngModel)]=\"house.name\" #name=\"ngModel\">-->\n        {{house.name}}\n      </div><p></p>\n      <!-- Coat of Arms: of the House-->\n      <div>        \n          <b><label for=\"coatOfArms\">Coat of Arms: </label><p></b>\n        <!--<input type=\"string\" name=\"coatOfArms\" [(ngModel)]=\"house.coatOfArms\">-->\n        {{house.coatOfArms}}\n      </div><p></p>\n      <!-- Words: of the House-->\n      <div>\n          <b><label for=\"words\">Words: </label><p></b>\n        <!--<input type=\"string\" name=\"words\" [(ngModel)]=\"house.words\">-->\n        {{house.words}}\n      </div><p></p>\n      <!-- Region: of the House-->\n      <div>\n          <b><label for=\"region\">Region: </label><p></b>\n        <!--<input type=\"string\" name=\"region\" [(ngModel)]=\"house.region\">-->\n        {{house.region}}\n      </div> \n      <p></p>\n      <!-- Overlord: of the House-->     \n      <div>\n          <b><label for=\"Overlord\">Overlord: </label><p></b>\n        <!--<input type=\"string\" name=\"overlord\" [(ngModel)]=\"house.overlord\">-->\n        {{house.overlord}}\n      </div><p></p>\n      <!-- Founded: the House-->\n      <div>\n          <b><label for=\"Founded\">Founded: </label><p></b>\n        <!--<input type=\"string\" name=\"founded\" [(ngModel)]=\"house.founded\">-->\n        {{house.founded}}\n      </div><p></p>\n      <!-- Founder: of the House-->\n      <div>\n          <b><label for=\"Founder\">Founder: </label><p></b>\n        <!--<input type=\"string\" name=\"founder\" [(ngModel)]=\"house.founder\">-->\n        {{house.founder}}\n      </div><p></p>\n\n      \n  </section>\n  <p></p>\n\n  <button (click)=\"gotoHousesList()\">Back to Houses list</button>\n<section>\n"

/***/ }),

/***/ 217:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(98);


/***/ }),

/***/ 36:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HouseService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HouseService = (function () {
    function HouseService(http) {
        this.http = http;
        this.baseUrl = 'https://anapioficeandfire.com/api';
    }
    /*
    getAll() function is used to fetch all the Houses with the corresponding Headers Information in the HTTP Call
    */
    HouseService.prototype.getAll = function () {
        var house$ = this.http
            .get(this.baseUrl + "/houses/", { headers: this.getHeaders() })
            .map(mapHouses)
            .catch(handleError);
        return house$;
    };
    HouseService.prototype.getHeaders = function () {
        // I included these headers because otherwise FireFox
        // will request text/html
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Accept', 'application/json');
        return headers;
    };
    /*
    get() function is used to fetch the specific House Information with the corresponding Headers Information in the HTTP Call
    */
    HouseService.prototype.get = function (id) {
        var house$ = this.http
            .get(this.baseUrl + "/houses/" + id + "/", { headers: this.getHeaders() })
            .map(mapHouse)
            .catch(handleError);
        return house$;
    };
    return HouseService;
}());
HouseService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object])
], HouseService);

function mapHouses(response) {
    //throw new Error('ups! Force choke!');
    // The response of the API has a direct JSON Structure, i.e. the Results donot hang under any other Property
    return response.json().map(toHouse);
}
/*
  toHouse() function is used to assign the specific (fetched from API) House Information to Interface House and return it.
  */
function toHouse(r) {
    var house = ({
        id: extractId(r),
        url: r.url,
        name: r.name,
        coatOfArms: r.coatOfArms,
        words: r.words,
        region: r.region,
        currentLord: r.currentLord,
        overlord: r.overlord,
        founded: r.founded,
        founder: r.founder,
    });
    console.log('Parsed House:', house);
    return house;
}
// to avoid breaking the rest of our app
// I extract the id from the houses url
function extractId(houseData) {
    var extractedId = houseData.url.replace('https://anapioficeandfire.com/api/houses/', '').replace('/', '');
    return parseInt(extractedId);
}
function mapHouse(response) {
    // toHouse maps the House JSON Structure
    return toHouse(response.json());
}
// this could also be a private method of the component class
function handleError(error) {
    // log error
    // could be something more sophisticated
    var errorMsg = error.message || "Oops! There was a problem with the API and the data could not be retrieved!";
    console.error(errorMsg);
    // throw an application level error
    return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(errorMsg);
}
var _a;
//# sourceMappingURL=house.service.js.map

/***/ }),

/***/ 68:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__house_service__ = __webpack_require__(36);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HouseDetailsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// In this Component we define the House's Details
var HouseDetailsComponent = (function () {
    function HouseDetailsComponent(route, houseService, router) {
        this.route = route;
        this.houseService = houseService;
        this.router = router;
    }
    HouseDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            var id = Number.parseInt(params['id']);
            console.log('getting house with id: ', id);
            _this.houseService
                .get(id)
                .subscribe(function (p) { return _this.house = p; });
        });
    };
    HouseDetailsComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    /* To get the list of houses in URL Link Clickable format*/
    HouseDetailsComponent.prototype.gotoHousesList = function () {
        var link = ['/houses'];
        this.router.navigate(link);
    };
    return HouseDetailsComponent;
}());
HouseDetailsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-house-details',
        template: __webpack_require__(165),
        styles: []
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__house_service__["a" /* HouseService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__house_service__["a" /* HouseService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _c || Object])
], HouseDetailsComponent);

var _a, _b, _c;
//# sourceMappingURL=house-details.component.js.map

/***/ }),

/***/ 69:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__house_service__ = __webpack_require__(36);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HouseListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// In this Component we define the Houses List
var HouseListComponent = (function () {
    function HouseListComponent(houseService) {
        this.houseService = houseService;
        this.house = [];
        this.errorMessage = '';
        this.isLoading = true;
    }
    HouseListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.houseService
            .getAll()
            .subscribe(
        /* happy path */ function (p) { return _this.house = p; }, 
        /* error path */ function (e) { return _this.errorMessage = e; }, 
        /* onCompleted */ function () { return _this.isLoading = false; });
    };
    return HouseListComponent;
}());
HouseListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-house-list',
        template: "\n\n  <section *ngIf=\"isLoading && !errorMessage\">\n  Loading our hyperdrives!!! Retrieving data...\n  </section>\n  <!-- this is the new syntax for ng-repeat -->\n  <ul>\n    <li *ngFor=\"let house of house\">\n      <a [routerLink]=\"['/houses', house.id]\">\n        {{house.name}} \n      </a>\n    </li>\n  </ul>\n  <!-- HERE: added this error message -->\n  <section *ngIf=\"errorMessage\">\n    {{errorMessage}}\n  </section>\n  ",
        styles: [__webpack_require__(163)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__house_service__["a" /* HouseService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__house_service__["a" /* HouseService */]) === "function" && _a || Object])
], HouseListComponent);

var _a;
//# sourceMappingURL=house-list.component.js.map

/***/ }),

/***/ 97:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 97;


/***/ }),

/***/ 98:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(108);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ })

},[217]);
//# sourceMappingURL=main.bundle.js.map