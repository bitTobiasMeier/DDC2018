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

/***/ "./src/app/Admin/add-restaurant/add-restaurant.component.html":
/*!********************************************************************!*\
  !*** ./src/app/Admin/add-restaurant/add-restaurant.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\r\n    <div class=\"card-header\">Neues Restaurant: </div>\r\n\r\n    <form #form=\"ngForm\" (ngSubmit)=\"save(form.value)\" class=\"form-horizontal\">\r\n\r\n\r\n      <div class=\"form-group\">\r\n        <label for=\"name\" class=\"control-label col-xs-1\">Restaurantname</label>\r\n        <div class=\"col-xs-3\">\r\n          <input type=\"text\" name=\"name\" ngModel [(ngModel)]=\"name\" class=\"form-control\">\r\n        </div>\r\n      </div>\r\n\r\n\r\n      <div class=\"form-group\">\r\n        <div class=\"col-xs-4\">\r\n          <span class=\"selected-message\">{{message}}</span>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <div class=\"col-xs-4\">\r\n          <button type=\"submit\" class=\"btn btn-default\" id=\"button\">Anlegen</button> </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n\r\n"

/***/ }),

/***/ "./src/app/Admin/add-restaurant/add-restaurant.component.sass":
/*!********************************************************************!*\
  !*** ./src/app/Admin/add-restaurant/add-restaurant.component.sass ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/Admin/add-restaurant/add-restaurant.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/Admin/add-restaurant/add-restaurant.component.ts ***!
  \******************************************************************/
/*! exports provided: AddRestaurantComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddRestaurantComponent", function() { return AddRestaurantComponent; });
/* harmony import */ var _shared_Controllers_generated__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/Controllers.generated */ "./src/app/shared/Controllers.generated.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};


var AddRestaurantComponent = /** @class */ (function () {
    function AddRestaurantComponent(adminClient) {
        this.adminClient = adminClient;
        this.restaurantAdded = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    AddRestaurantComponent.prototype.ngOnInit = function () {
    };
    AddRestaurantComponent.prototype.save = function (value) {
        return __awaiter(this, void 0, void 0, function () {
            var restaurant;
            var _this = this;
            return __generator(this, function (_a) {
                restaurant = new _shared_Controllers_generated__WEBPACK_IMPORTED_MODULE_0__["Restaurant"]();
                restaurant.name = this.name;
                this.adminClient.create(restaurant).subscribe(function (addedRestaurant) {
                    _this.message = 'Restaurant ' + addedRestaurant.name + '  added';
                    _this.restaurantAdded.emit(addedRestaurant);
                }, function (error) {
                    _this.message = 'Fehler beim Speichern ';
                    if (error.message) {
                        _this.message += error.message;
                    }
                    if (error.status) {
                        _this.message += ';Status: ' + error.status;
                    }
                });
                return [2 /*return*/];
            });
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        __metadata("design:type", Object)
    ], AddRestaurantComponent.prototype, "restaurantAdded", void 0);
    AddRestaurantComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'dinner-add-restaurant',
            template: __webpack_require__(/*! ./add-restaurant.component.html */ "./src/app/Admin/add-restaurant/add-restaurant.component.html"),
            styles: [__webpack_require__(/*! ./add-restaurant.component.sass */ "./src/app/Admin/add-restaurant/add-restaurant.component.sass")]
        }),
        __metadata("design:paramtypes", [_shared_Controllers_generated__WEBPACK_IMPORTED_MODULE_0__["AdminClient"]])
    ], AddRestaurantComponent);
    return AddRestaurantComponent;
}());



/***/ }),

/***/ "./src/app/admin-restaurant/admin-restaurant.component.html":
/*!******************************************************************!*\
  !*** ./src/app/admin-restaurant/admin-restaurant.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  admin-restaurant works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/admin-restaurant/admin-restaurant.component.sass":
/*!******************************************************************!*\
  !*** ./src/app/admin-restaurant/admin-restaurant.component.sass ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin-restaurant/admin-restaurant.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/admin-restaurant/admin-restaurant.component.ts ***!
  \****************************************************************/
/*! exports provided: AdminRestaurantComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminRestaurantComponent", function() { return AdminRestaurantComponent; });
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

var AdminRestaurantComponent = /** @class */ (function () {
    function AdminRestaurantComponent() {
    }
    AdminRestaurantComponent.prototype.ngOnInit = function () {
    };
    AdminRestaurantComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'dinner-admin-restaurant',
            template: __webpack_require__(/*! ./admin-restaurant.component.html */ "./src/app/admin-restaurant/admin-restaurant.component.html"),
            styles: [__webpack_require__(/*! ./admin-restaurant.component.sass */ "./src/app/admin-restaurant/admin-restaurant.component.sass")]
        }),
        __metadata("design:paramtypes", [])
    ], AdminRestaurantComponent);
    return AdminRestaurantComponent;
}());



/***/ }),

/***/ "./src/app/admin/add-dish/add-dish.component.html":
/*!********************************************************!*\
  !*** ./src/app/admin/add-dish/add-dish.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"adminNeuesRegister\">\r\n  <div class=\"card-header\">Neues Gericht: </div>\r\n  <div class=\"card-body\">\r\n    <form #form=\"ngForm\" (ngSubmit)=\"save(form.value)\" class=\"form-horizontal\">\r\n\r\n\r\n      <div class=\"form-group\">\r\n        <label for=\"name\" class=\"control-label col-xs-1\">Gericht</label>\r\n        <div class=\"col-xs-3\">\r\n          <input type=\"text\" name=\"name\" ngModel [(ngModel)]=\"name\" class=\"form-control\">\r\n        </div>\r\n        <label for=\"description\" class=\"control-label col-xs-1\">Beschreibung</label>\r\n        <div class=\"col-xs-3\">\r\n          <input type=\"text\" name=\"description\" ngModel [(ngModel)]=\"description\" class=\"form-control\">\r\n        </div>\r\n        <label for=\"imageUrl\" class=\"control-label col-xs-1\">Url Bild </label>\r\n        <div class=\"col-xs-3\">\r\n          <input type=\"text\" name=\"imageUrl\" ngModel [(ngModel)]=\"imageUrl\" class=\"form-control\">\r\n        </div>\r\n        <label for=\"price\" class=\"control-label col-xs-1\">Preis</label>\r\n        <div class=\"col-xs-3\">\r\n          <input type=\"number\" name=\"price\" ngModel [(ngModel)]=\"price\" class=\"form-control\">\r\n        </div>\r\n      </div>\r\n\r\n\r\n      <div class=\"form-group\">\r\n        <div class=\"col-xs-4\">\r\n          <span class=\"selected-message\">{{message}}</span>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <div class=\"col-xs-4\">\r\n          <button type=\"submit\" class=\"btn btn-default\" id=\"button\">Anlegen</button> </div>\r\n      </div>\r\n    </form>\r\n\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/admin/add-dish/add-dish.component.sass":
/*!********************************************************!*\
  !*** ./src/app/admin/add-dish/add-dish.component.sass ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/add-dish/add-dish.component.ts":
/*!******************************************************!*\
  !*** ./src/app/admin/add-dish/add-dish.component.ts ***!
  \******************************************************/
/*! exports provided: AddDishComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddDishComponent", function() { return AddDishComponent; });
/* harmony import */ var _shared_Controllers_generated__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/Controllers.generated */ "./src/app/shared/Controllers.generated.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AddDishComponent = /** @class */ (function () {
    function AddDishComponent(restaurantAdminClient) {
        this.restaurantAdminClient = restaurantAdminClient;
        this.dishAdded = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    AddDishComponent.prototype.save = function (value) {
        var _this = this;
        var dish = new _shared_Controllers_generated__WEBPACK_IMPORTED_MODULE_0__["Dish"]();
        dish.name = this.name;
        dish.price = this.price;
        dish.description = this.description;
        dish.imageUrl = this.imageUrl;
        this.restaurantAdminClient.addDish(this.restaurantId, dish).subscribe(function (result) {
            _this.dishAdded.emit(result);
        }, function (error) {
            console.log(error);
        });
    };
    AddDishComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", String)
    ], AddDishComponent.prototype, "restaurantId", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        __metadata("design:type", Object)
    ], AddDishComponent.prototype, "dishAdded", void 0);
    AddDishComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'dinner-add-dish',
            template: __webpack_require__(/*! ./add-dish.component.html */ "./src/app/admin/add-dish/add-dish.component.html"),
            styles: [__webpack_require__(/*! ./add-dish.component.sass */ "./src/app/admin/add-dish/add-dish.component.sass")]
        }),
        __metadata("design:paramtypes", [_shared_Controllers_generated__WEBPACK_IMPORTED_MODULE_0__["RestaurantAdminClient"]])
    ], AddDishComponent);
    return AddDishComponent;
}());



/***/ }),

/***/ "./src/app/admin/add-restaurant-table/add-restaurant-table.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/admin/add-restaurant-table/add-restaurant-table.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"adminNeuesRegister\">\r\n    <div class=\"card-header\">Neuer Tisch:</div>\r\n    <div class=\"card-body\">\r\n      <form #form=\"ngForm\" (ngSubmit)=\"save(form.value)\" class=\"form-horizontal\">\r\n\r\n\r\n              <div class=\"form-group\">\r\n                <label for=\"name\" class=\"control-label col-xs-1\">Tischnummer:</label>\r\n                <div class=\"col-xs-1\">\r\n                  <input type=\"text\" name=\"tablenr\" ngModel [(ngModel)]=\"tablenr\" class=\"form-control \">\r\n                </div>\r\n              </div>\r\n\r\n\r\n              <div class=\"form-group\">\r\n                <div class=\"col-xs-4\">\r\n                  <span class=\"selected-message\">{{message}}</span>\r\n                </div>\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <div class=\"col-xs-4\">\r\n                  <button type=\"submit\" class=\"btn btn-default\" id=\"button\">Anlegen</button> </div>\r\n              </div>\r\n            </form>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/admin/add-restaurant-table/add-restaurant-table.component.sass":
/*!********************************************************************************!*\
  !*** ./src/app/admin/add-restaurant-table/add-restaurant-table.component.sass ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/add-restaurant-table/add-restaurant-table.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/admin/add-restaurant-table/add-restaurant-table.component.ts ***!
  \******************************************************************************/
/*! exports provided: AddRestaurantTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddRestaurantTableComponent", function() { return AddRestaurantTableComponent; });
/* harmony import */ var _shared_Controllers_generated__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/Controllers.generated */ "./src/app/shared/Controllers.generated.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};


var AddRestaurantTableComponent = /** @class */ (function () {
    function AddRestaurantTableComponent(restaurantAdminClient) {
        this.restaurantAdminClient = restaurantAdminClient;
        this.tableAdded = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    AddRestaurantTableComponent.prototype.ngOnInit = function () {
    };
    AddRestaurantTableComponent.prototype.save = function (value) {
        return __awaiter(this, void 0, void 0, function () {
            var table;
            var _this = this;
            return __generator(this, function (_a) {
                table = new _shared_Controllers_generated__WEBPACK_IMPORTED_MODULE_0__["RestaurantTable"]();
                table.tablenr = this.tablenr;
                this.restaurantAdminClient.createTable(this.restaurantId, table).subscribe(function (addedTable) {
                    _this.message = 'Tisch ' + addedTable.tablenr + ' wurde hinzugefügt';
                    _this.tableAdded.emit(addedTable);
                }, function (error) {
                    _this.message = 'Fehler beim Speichern ';
                    if (error.message) {
                        _this.message += error.message;
                    }
                    if (error.status) {
                        _this.message += ';Status: ' + error.status;
                    }
                });
                return [2 /*return*/];
            });
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", String)
    ], AddRestaurantTableComponent.prototype, "restaurantId", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        __metadata("design:type", Object)
    ], AddRestaurantTableComponent.prototype, "tableAdded", void 0);
    AddRestaurantTableComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'dinner-add-restaurant-table',
            template: __webpack_require__(/*! ./add-restaurant-table.component.html */ "./src/app/admin/add-restaurant-table/add-restaurant-table.component.html"),
            styles: [__webpack_require__(/*! ./add-restaurant-table.component.sass */ "./src/app/admin/add-restaurant-table/add-restaurant-table.component.sass")]
        }),
        __metadata("design:paramtypes", [_shared_Controllers_generated__WEBPACK_IMPORTED_MODULE_0__["RestaurantAdminClient"]])
    ], AddRestaurantTableComponent);
    return AddRestaurantTableComponent;
}());



/***/ }),

/***/ "./src/app/admin/admin.component.html":
/*!********************************************!*\
  !*** ./src/app/admin/admin.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card col-12\" style=\"border: 0px solid white\">\r\n  <h3>Administration</h3>\r\n\r\n  <div class=\"card col-6\" style=\"border: 0px\">\r\n  <dinner-add-restaurant (restaurantAdded)=\"restaurantAdded($event)\"></dinner-add-restaurant>\r\n  </div><br/>\r\n\r\n  <div [hidden]='restaurants.length == 0' class=\"col-12\">\r\n      <div class=\"card-header col-6\">Anzahl Restaurants: {{restaurants.length}}</div> <br/>\r\n\r\n      <div class=\"card  mb-6\" *ngFor=\"let restaurant of restaurants\" style=\"background-color: #d7dae0\">\r\n          <dinner-restaurant-detail [restaurant]=\"restaurant\"></dinner-restaurant-detail>\r\n       </div> \r\n  </div>\r\n  <br/>\r\n  <a [routerLink]=\"['/']\">Zurück zur Übersicht</a>\r\n\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/admin/admin.component.sass":
/*!********************************************!*\
  !*** ./src/app/admin/admin.component.sass ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/admin.component.ts":
/*!******************************************!*\
  !*** ./src/app/admin/admin.component.ts ***!
  \******************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var _shared_Controllers_generated__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/Controllers.generated */ "./src/app/shared/Controllers.generated.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AdminComponent = /** @class */ (function () {
    function AdminComponent(adminClient) {
        this.adminClient = adminClient;
        this.restaurants = [];
    }
    AdminComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.adminClient.get().subscribe(function (response) { return _this.restaurants = response != null ? response : []; });
    };
    AdminComponent.prototype.restaurantAdded = function (restaurant) {
        this.restaurants = this.restaurants.concat([restaurant]);
    };
    AdminComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'dinner-admin',
            template: __webpack_require__(/*! ./admin.component.html */ "./src/app/admin/admin.component.html"),
            styles: [__webpack_require__(/*! ./admin.component.sass */ "./src/app/admin/admin.component.sass")]
        }),
        __metadata("design:paramtypes", [_shared_Controllers_generated__WEBPACK_IMPORTED_MODULE_0__["AdminClient"]])
    ], AdminComponent);
    return AdminComponent;
}());



/***/ }),

/***/ "./src/app/admin/menucard-administration/menucard-administration.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/admin/menucard-administration/menucard-administration.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card-deck\">\r\n\r\n        <div class=\"adminTableNumber\" *ngFor=\"let dish of dishes\">\r\n          <div class=\"card-block\">\r\n              <img class=\"card-img-top\" [src]=\"dish.imageUrl\" [alt]=\"dish.name\">\r\n           <h5 class=\"card-title\"> {{dish.name}}</h5>\r\n           <div class=\"card-text\">{{dish.description}} €</div>\r\n           <div class=\"card-text\">Preis: {{dish.price}} €</div>\r\n          </div>\r\n        </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/admin/menucard-administration/menucard-administration.component.sass":
/*!**************************************************************************************!*\
  !*** ./src/app/admin/menucard-administration/menucard-administration.component.sass ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/menucard-administration/menucard-administration.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/admin/menucard-administration/menucard-administration.component.ts ***!
  \************************************************************************************/
/*! exports provided: MenucardAdministrationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenucardAdministrationComponent", function() { return MenucardAdministrationComponent; });
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

var MenucardAdministrationComponent = /** @class */ (function () {
    function MenucardAdministrationComponent() {
    }
    MenucardAdministrationComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], MenucardAdministrationComponent.prototype, "restaurantId", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], MenucardAdministrationComponent.prototype, "dishes", void 0);
    MenucardAdministrationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'dinner-menucard-administration',
            template: __webpack_require__(/*! ./menucard-administration.component.html */ "./src/app/admin/menucard-administration/menucard-administration.component.html"),
            styles: [__webpack_require__(/*! ./menucard-administration.component.sass */ "./src/app/admin/menucard-administration/menucard-administration.component.sass")]
        }),
        __metadata("design:paramtypes", [])
    ], MenucardAdministrationComponent);
    return MenucardAdministrationComponent;
}());



/***/ }),

/***/ "./src/app/admin/restaurant-detail/restaurant-detail.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/admin/restaurant-detail/restaurant-detail.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card-header\">{{restaurant.name}}</div>\r\n<div class=\"card-body\">\r\n  <div class=\"card-deck\">\r\n    <div class=\"card\">\r\n      <p id=\"anzahl\"><b>{{restaurantTables.length}} Tisch(e)</b></p>\r\n      <div class=\"card-body\">\r\n        <dinner-add-restaurant-table [restaurantId]=\"restaurant.id\" (tableAdded)=\"restaurantTableAdded($event)\"></dinner-add-restaurant-table>\r\n        <dinner-restaurant-tables [restaurantId]=\"restaurant.id\" [restaurantTables]=\"restaurantTables\"> </dinner-restaurant-tables>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"card\">\r\n      <p id=\"anzahl\"><b>{{dishes.length}} Gericht(e)</b></p>\r\n      <div class=\"card-body\">\r\n        <dinner-add-dish [restaurantId]=\"restaurant.id\" (dishAdded)=\"dishAdded($event)\"></dinner-add-dish>\r\n        <dinner-menucard-administration [restaurantId]=\"restaurant.id\" [dishes]=\"dishes\"></dinner-menucard-administration>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n\r\n  <hr>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/admin/restaurant-detail/restaurant-detail.component.sass":
/*!**************************************************************************!*\
  !*** ./src/app/admin/restaurant-detail/restaurant-detail.component.sass ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/restaurant-detail/restaurant-detail.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/admin/restaurant-detail/restaurant-detail.component.ts ***!
  \************************************************************************/
/*! exports provided: RestaurantDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestaurantDetailComponent", function() { return RestaurantDetailComponent; });
/* harmony import */ var _shared_Controllers_generated__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/Controllers.generated */ "./src/app/shared/Controllers.generated.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RestaurantDetailComponent = /** @class */ (function () {
    function RestaurantDetailComponent(restaurantAdmin) {
        this.restaurantAdmin = restaurantAdmin;
    }
    RestaurantDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.restaurantTables = [];
        this.dishes = [];
        this.restaurantAdmin.getTables(this.restaurant.id).subscribe(function (list) {
            _this.restaurantTables = list;
            console.log('tables loaded:' + list.length);
        }, function (error) {
            console.log('Fehler beim Laden der Tische' + error);
            // error
        });
        this.restaurantAdmin.getMenuCard(this.restaurant.id).subscribe(function (list) {
            _this.dishes = list;
            console.log('dishes loaded:' + list.length);
        }, function (error) {
            console.log('Fehler beim Laden der Menükarte' + error);
            // error
        });
    };
    RestaurantDetailComponent.prototype.restaurantTableAdded = function (table) {
        if (table) {
            this.restaurantTables = this.restaurantTables.concat([table]);
        }
    };
    RestaurantDetailComponent.prototype.dishAdded = function (dish) {
        if (dish) {
            this.dishes = this.dishes.concat([dish]);
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", _shared_Controllers_generated__WEBPACK_IMPORTED_MODULE_0__["Restaurant"])
    ], RestaurantDetailComponent.prototype, "restaurant", void 0);
    RestaurantDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'dinner-restaurant-detail',
            template: __webpack_require__(/*! ./restaurant-detail.component.html */ "./src/app/admin/restaurant-detail/restaurant-detail.component.html"),
            styles: [__webpack_require__(/*! ./restaurant-detail.component.sass */ "./src/app/admin/restaurant-detail/restaurant-detail.component.sass")]
        }),
        __metadata("design:paramtypes", [_shared_Controllers_generated__WEBPACK_IMPORTED_MODULE_0__["RestaurantAdminClient"]])
    ], RestaurantDetailComponent);
    return RestaurantDetailComponent;
}());



/***/ }),

/***/ "./src/app/admin/restaurant-tables/restaurant-tables.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/admin/restaurant-tables/restaurant-tables.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n  <div class=\"card-deck\">\r\n\r\n      <div class=\"adminTableNumber\" *ngFor=\"let table of restaurantTables\">\r\n        <div>\r\n         <h5 class=\"card-title \"> Tisch {{table.tablenr}} </h5>\r\n        </div>\r\n      </div>\r\n  </div>"

/***/ }),

/***/ "./src/app/admin/restaurant-tables/restaurant-tables.component.sass":
/*!**************************************************************************!*\
  !*** ./src/app/admin/restaurant-tables/restaurant-tables.component.sass ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/restaurant-tables/restaurant-tables.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/admin/restaurant-tables/restaurant-tables.component.ts ***!
  \************************************************************************/
/*! exports provided: RestaurantTablesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestaurantTablesComponent", function() { return RestaurantTablesComponent; });
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

var RestaurantTablesComponent = /** @class */ (function () {
    function RestaurantTablesComponent() {
    }
    RestaurantTablesComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], RestaurantTablesComponent.prototype, "restaurantId", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], RestaurantTablesComponent.prototype, "restaurantTables", void 0);
    RestaurantTablesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'dinner-restaurant-tables',
            template: __webpack_require__(/*! ./restaurant-tables.component.html */ "./src/app/admin/restaurant-tables/restaurant-tables.component.html"),
            styles: [__webpack_require__(/*! ./restaurant-tables.component.sass */ "./src/app/admin/restaurant-tables/restaurant-tables.component.sass")]
        }),
        __metadata("design:paramtypes", [])
    ], RestaurantTablesComponent);
    return RestaurantTablesComponent;
}());



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
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./admin/admin.component */ "./src/app/admin/admin.component.ts");
/* harmony import */ var _restaurants_restaurants_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./restaurants/restaurants.component */ "./src/app/restaurants/restaurants.component.ts");
/* harmony import */ var _select_restaurant_select_restaurant_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./select-restaurant/select-restaurant.component */ "./src/app/select-restaurant/select-restaurant.component.ts");
/* harmony import */ var _restaurant_restaurant_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./restaurant/restaurant.component */ "./src/app/restaurant/restaurant.component.ts");
/* harmony import */ var _select_table_in_restaurant_select_table_in_restaurant_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./select-table-in-restaurant/select-table-in-restaurant.component */ "./src/app/select-table-in-restaurant/select-table-in-restaurant.component.ts");
/* harmony import */ var _selected_table_selected_table_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./selected-table/selected-table.component */ "./src/app/selected-table/selected-table.component.ts");
/* harmony import */ var _order_dish_order_dish_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./order-dish/order-dish.component */ "./src/app/order-dish/order-dish.component.ts");
/* harmony import */ var _order_status_order_status_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./order-status/order-status.component */ "./src/app/order-status/order-status.component.ts");
/* harmony import */ var _kitchen_kitchens_kitchens_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./kitchen/kitchens/kitchens.component */ "./src/app/kitchen/kitchens/kitchens.component.ts");
/* harmony import */ var _kitchen_kitchen_kitchen_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./kitchen/kitchen/kitchen.component */ "./src/app/kitchen/kitchen/kitchen.component.ts");
/* harmony import */ var _kitchen_select_kitchen_select_kitchen_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./kitchen/select-kitchen/select-kitchen.component */ "./src/app/kitchen/select-kitchen/select-kitchen.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var routes = [
    {
        path: '',
        redirectTo: 'restaurants',
        pathMatch: 'full'
    },
    {
        path: 'restaurants', component: _restaurants_restaurants_component__WEBPACK_IMPORTED_MODULE_3__["RestaurantsComponent"],
        children: [
            {
                path: '',
                redirectTo: 'select',
                pathMatch: 'full'
            },
            {
                path: 'select',
                component: _select_restaurant_select_restaurant_component__WEBPACK_IMPORTED_MODULE_4__["SelectRestaurantComponent"]
            },
            {
                path: ':restaurantId',
                component: _restaurant_restaurant_component__WEBPACK_IMPORTED_MODULE_5__["RestaurantComponent"],
                children: [
                    {
                        path: '',
                        redirectTo: 'select',
                        pathMatch: 'full'
                    },
                    {
                        path: 'select',
                        component: _select_table_in_restaurant_select_table_in_restaurant_component__WEBPACK_IMPORTED_MODULE_6__["SelectTableInRestaurantComponent"]
                    },
                    {
                        path: ':tableId',
                        component: _selected_table_selected_table_component__WEBPACK_IMPORTED_MODULE_7__["SelectedTableComponent"],
                        children: [
                            {
                                path: '',
                                redirectTo: 'order',
                                pathMatch: 'full'
                            },
                            {
                                path: 'order',
                                component: _order_dish_order_dish_component__WEBPACK_IMPORTED_MODULE_8__["OrderDishComponent"]
                            },
                            {
                                path: 'status',
                                component: _order_status_order_status_component__WEBPACK_IMPORTED_MODULE_9__["OrderStatusComponent"]
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        path: 'kitchens', component: _kitchen_kitchens_kitchens_component__WEBPACK_IMPORTED_MODULE_10__["KitchensComponent"],
        children: [
            {
                path: '',
                redirectTo: 'select',
                pathMatch: 'full'
            },
            {
                path: 'select',
                component: _kitchen_select_kitchen_select_kitchen_component__WEBPACK_IMPORTED_MODULE_12__["SelectKitchenComponent"]
            },
            {
                path: ':restaurantId',
                component: _kitchen_kitchen_kitchen_component__WEBPACK_IMPORTED_MODULE_11__["KitchenComponent"]
            }
        ]
    },
    {
        path: 'admin', component: _admin_admin_component__WEBPACK_IMPORTED_MODULE_2__["AdminComponent"]
    }
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

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\" id=\"header\"> \r\n  \r\n    <a href=\"http://www.bridging-it.de/\" class=\"card-img-top\" >\r\n      <img src=\"assets/bitlogo.png\"/> \r\n    </a><br/>\r\n    <h1>Microservices mit Azure Service Fabric:</h1>\r\n  </div>\r\n  \r\n <div class=\"container\"> \r\n\r\n  <nav class=\"navbar navbar-expand-lg navbar-light\">\r\n  <div  id=\"navbarSupportedContent\" class=\"col-md-12\">\r\n    <ul class=\"navbar-nav mr-auto\">\r\n      <li class=\"nav-item active\">\r\n        <a class=\"nav-link\" routerLink=\"/\">Home <span class=\"sr-only\">(current)</span></a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" [routerLink]=\"['/kitchens']\">Küche</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n          <a class=\"nav-link\" [routerLink]=\"['/admin']\">Admin</a>\r\n        </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link \" href=\"http://blog.bridging-it.de/author/Tobias.Meier\" _target=\"new\">Weitere Infos</a>\r\n          <ul class=\"dropdown-menu\">\r\n            <a href=\"\" >: http://blog.bridging-it-de/author/Tobias.Meier</a>\r\n          </ul>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n</nav> <br/>\r\n\r\n\r\n  <router-outlet></router-outlet>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/app.component.sass":
/*!************************************!*\
  !*** ./src/app/app.component.sass ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

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
        this.title = 'Service Fabric Dinner Demo';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'dinner-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.sass */ "./src/app/app.component.sass")]
        })
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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _admin_restaurant_admin_restaurant_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./admin-restaurant/admin-restaurant.component */ "./src/app/admin-restaurant/admin-restaurant.component.ts");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./admin/admin.component */ "./src/app/admin/admin.component.ts");
/* harmony import */ var _Admin_add_restaurant_add_restaurant_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Admin/add-restaurant/add-restaurant.component */ "./src/app/Admin/add-restaurant/add-restaurant.component.ts");
/* harmony import */ var _shared_Controllers_generated__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/Controllers.generated */ "./src/app/shared/Controllers.generated.ts");
/* harmony import */ var _admin_restaurant_tables_restaurant_tables_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./admin/restaurant-tables/restaurant-tables.component */ "./src/app/admin/restaurant-tables/restaurant-tables.component.ts");
/* harmony import */ var _admin_add_restaurant_table_add_restaurant_table_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./admin/add-restaurant-table/add-restaurant-table.component */ "./src/app/admin/add-restaurant-table/add-restaurant-table.component.ts");
/* harmony import */ var _admin_restaurant_detail_restaurant_detail_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./admin/restaurant-detail/restaurant-detail.component */ "./src/app/admin/restaurant-detail/restaurant-detail.component.ts");
/* harmony import */ var _admin_menucard_administration_menucard_administration_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./admin/menucard-administration/menucard-administration.component */ "./src/app/admin/menucard-administration/menucard-administration.component.ts");
/* harmony import */ var _admin_add_dish_add_dish_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./admin/add-dish/add-dish.component */ "./src/app/admin/add-dish/add-dish.component.ts");
/* harmony import */ var _restaurants_restaurants_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./restaurants/restaurants.component */ "./src/app/restaurants/restaurants.component.ts");
/* harmony import */ var _restaurant_restaurant_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./restaurant/restaurant.component */ "./src/app/restaurant/restaurant.component.ts");
/* harmony import */ var _select_restaurant_select_restaurant_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./select-restaurant/select-restaurant.component */ "./src/app/select-restaurant/select-restaurant.component.ts");
/* harmony import */ var _select_table_in_restaurant_select_table_in_restaurant_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./select-table-in-restaurant/select-table-in-restaurant.component */ "./src/app/select-table-in-restaurant/select-table-in-restaurant.component.ts");
/* harmony import */ var _selected_table_selected_table_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./selected-table/selected-table.component */ "./src/app/selected-table/selected-table.component.ts");
/* harmony import */ var _order_dish_order_dish_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./order-dish/order-dish.component */ "./src/app/order-dish/order-dish.component.ts");
/* harmony import */ var _order_status_order_status_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./order-status/order-status.component */ "./src/app/order-status/order-status.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _kitchen_kitchen_kitchen_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./kitchen/kitchen/kitchen.component */ "./src/app/kitchen/kitchen/kitchen.component.ts");
/* harmony import */ var _kitchen_kitchens_kitchens_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./kitchen/kitchens/kitchens.component */ "./src/app/kitchen/kitchens/kitchens.component.ts");
/* harmony import */ var _kitchen_select_kitchen_select_kitchen_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./kitchen/select-kitchen/select-kitchen.component */ "./src/app/kitchen/select-kitchen/select-kitchen.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

























var API_BASE_URL2 = 'http://localhost:8328';
if (window != null && window.location != null) {
    var loc = window.location;
    var server = loc.hostname;
    var port = loc.port;
    if (server === 'localhost' && port === '4200') {
        API_BASE_URL2 = "https://localhost:8333";
    }
    else {
        API_BASE_URL2 = loc.protocol + '//' + server + ':' + port;
    }
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _admin_restaurant_admin_restaurant_component__WEBPACK_IMPORTED_MODULE_5__["AdminRestaurantComponent"],
                _admin_admin_component__WEBPACK_IMPORTED_MODULE_6__["AdminComponent"],
                _Admin_add_restaurant_add_restaurant_component__WEBPACK_IMPORTED_MODULE_7__["AddRestaurantComponent"],
                _admin_restaurant_tables_restaurant_tables_component__WEBPACK_IMPORTED_MODULE_9__["RestaurantTablesComponent"],
                _admin_add_restaurant_table_add_restaurant_table_component__WEBPACK_IMPORTED_MODULE_10__["AddRestaurantTableComponent"],
                _admin_restaurant_detail_restaurant_detail_component__WEBPACK_IMPORTED_MODULE_11__["RestaurantDetailComponent"],
                _admin_menucard_administration_menucard_administration_component__WEBPACK_IMPORTED_MODULE_12__["MenucardAdministrationComponent"],
                _admin_add_dish_add_dish_component__WEBPACK_IMPORTED_MODULE_13__["AddDishComponent"],
                _restaurants_restaurants_component__WEBPACK_IMPORTED_MODULE_14__["RestaurantsComponent"],
                _restaurant_restaurant_component__WEBPACK_IMPORTED_MODULE_15__["RestaurantComponent"],
                _select_restaurant_select_restaurant_component__WEBPACK_IMPORTED_MODULE_16__["SelectRestaurantComponent"],
                _select_table_in_restaurant_select_table_in_restaurant_component__WEBPACK_IMPORTED_MODULE_17__["SelectTableInRestaurantComponent"],
                _selected_table_selected_table_component__WEBPACK_IMPORTED_MODULE_18__["SelectedTableComponent"],
                _order_dish_order_dish_component__WEBPACK_IMPORTED_MODULE_19__["OrderDishComponent"],
                _order_status_order_status_component__WEBPACK_IMPORTED_MODULE_20__["OrderStatusComponent"],
                _kitchen_kitchen_kitchen_component__WEBPACK_IMPORTED_MODULE_22__["KitchenComponent"],
                _kitchen_kitchens_kitchens_component__WEBPACK_IMPORTED_MODULE_23__["KitchensComponent"],
                _kitchen_select_kitchen_select_kitchen_component__WEBPACK_IMPORTED_MODULE_24__["SelectKitchenComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_21__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
            ],
            providers: [_shared_Controllers_generated__WEBPACK_IMPORTED_MODULE_8__["AdminClient"], _shared_Controllers_generated__WEBPACK_IMPORTED_MODULE_8__["RestaurantAdminClient"], _shared_Controllers_generated__WEBPACK_IMPORTED_MODULE_8__["OrderClient"], _shared_Controllers_generated__WEBPACK_IMPORTED_MODULE_8__["RestaurantClient"], _shared_Controllers_generated__WEBPACK_IMPORTED_MODULE_8__["KitchenClient"],
                { provide: _shared_Controllers_generated__WEBPACK_IMPORTED_MODULE_8__["API_BASE_URL"], useValue: API_BASE_URL2 }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/kitchen/kitchen/kitchen.component.html":
/*!********************************************************!*\
  !*** ./src/app/kitchen/kitchen/kitchen.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card-kitchen col-6\">\r\n<p><b>Offene Bestellungen:</b></p>\r\n<div *ngFor=\"let order of kitchenQueue\">\r\n  <div class=\"card-body\">\r\n    <h3 class=\"menue-title\">{{getDishname(order.dishId)}}</h3>    \r\n  </div>\r\n</div>\r\n</div>\r\n\r\n<div class=\"card-kitchen col-6\">\r\n<p><b> Folgende Gerichte werden gerade gekocht:</b></p>\r\n  <div *ngFor=\"let order of cookingQueue\">\r\n    <div class=\"card-body\">\r\n      <h3 class=\"menue-title\">{{getDishname(order.dishId)}}</h3>    \r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/kitchen/kitchen/kitchen.component.sass":
/*!********************************************************!*\
  !*** ./src/app/kitchen/kitchen/kitchen.component.sass ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/kitchen/kitchen/kitchen.component.ts":
/*!******************************************************!*\
  !*** ./src/app/kitchen/kitchen/kitchen.component.ts ***!
  \******************************************************/
/*! exports provided: KitchenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KitchenComponent", function() { return KitchenComponent; });
/* harmony import */ var _shared_Controllers_generated__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/Controllers.generated */ "./src/app/shared/Controllers.generated.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_observable_IntervalObservable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/observable/IntervalObservable */ "./node_modules/rxjs-compat/_esm5/observable/IntervalObservable.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var KitchenComponent = /** @class */ (function () {
    function KitchenComponent(route, kitchenClient, restaurantClient) {
        this.route = route;
        this.kitchenClient = kitchenClient;
        this.restaurantClient = restaurantClient;
        this.alive = true;
    }
    KitchenComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.kitchenQueue = [];
        this.cookingQueue = [];
        this.restaurantNr = this.route.snapshot.params['restaurantId'];
        this.restaurantClient.getMenuCard(this.restaurantNr).subscribe(function (dishes) {
            _this.dishMap = new Map();
            dishes.forEach(function (dish) {
                _this.dishMap.set(dish.id, dish);
            });
        });
        this.kitchenClient.getKitchenQueue(this.restaurantNr).subscribe(function (kitchenOrders) {
            _this.kitchenQueue = kitchenOrders;
        });
        this.kitchenClient.getKitchenCookingQueue(this.restaurantNr).subscribe(function (kitchenOrders) {
            _this.cookingQueue = kitchenOrders;
        });
        var that = this;
        rxjs_observable_IntervalObservable__WEBPACK_IMPORTED_MODULE_3__["IntervalObservable"].create(2000).subscribe(function (data) {
            if (that.subWaiting != null) {
                that.subWaiting.unsubscribe();
            }
            that.subWaiting = that.kitchenClient.getKitchenQueue(that.restaurantNr).subscribe(function (kitchenOrders) {
                that.kitchenQueue = kitchenOrders;
            });
            if (that.subCooking != null) {
                that.subCooking.unsubscribe();
            }
            that.subCooking = that.kitchenClient.getKitchenCookingQueue(that.restaurantNr).subscribe(function (kitchenOrders) {
                that.cookingQueue = kitchenOrders;
            });
        });
    };
    KitchenComponent.prototype.getDishname = function (id) {
        var found = this.dishMap.get(id);
        if (found)
            return found.name;
        return id;
    };
    KitchenComponent.prototype.ngOnDestroy = function () {
        this.alive = false;
        this.subCooking.unsubscribe();
        this.subWaiting.unsubscribe();
    };
    KitchenComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'dinner-kitchen',
            template: __webpack_require__(/*! ./kitchen.component.html */ "./src/app/kitchen/kitchen/kitchen.component.html"),
            styles: [__webpack_require__(/*! ./kitchen.component.sass */ "./src/app/kitchen/kitchen/kitchen.component.sass")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _shared_Controllers_generated__WEBPACK_IMPORTED_MODULE_0__["KitchenClient"], _shared_Controllers_generated__WEBPACK_IMPORTED_MODULE_0__["RestaurantAdminClient"]])
    ], KitchenComponent);
    return KitchenComponent;
}());



/***/ }),

/***/ "./src/app/kitchen/kitchens/kitchens.component.html":
/*!**********************************************************!*\
  !*** ./src/app/kitchen/kitchens/kitchens.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/kitchen/kitchens/kitchens.component.sass":
/*!**********************************************************!*\
  !*** ./src/app/kitchen/kitchens/kitchens.component.sass ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/kitchen/kitchens/kitchens.component.ts":
/*!********************************************************!*\
  !*** ./src/app/kitchen/kitchens/kitchens.component.ts ***!
  \********************************************************/
/*! exports provided: KitchensComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KitchensComponent", function() { return KitchensComponent; });
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

var KitchensComponent = /** @class */ (function () {
    function KitchensComponent() {
    }
    KitchensComponent.prototype.ngOnInit = function () {
    };
    KitchensComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'dinner-kitchens',
            template: __webpack_require__(/*! ./kitchens.component.html */ "./src/app/kitchen/kitchens/kitchens.component.html"),
            styles: [__webpack_require__(/*! ./kitchens.component.sass */ "./src/app/kitchen/kitchens/kitchens.component.sass")]
        }),
        __metadata("design:paramtypes", [])
    ], KitchensComponent);
    return KitchensComponent;
}());



/***/ }),

/***/ "./src/app/kitchen/select-kitchen/select-kitchen.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/kitchen/select-kitchen/select-kitchen.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p><b>Bitte wählen Sie eine Küche aus.</b></p>\r\n\r\n<div class=\"card  mb-3\" style=\"max-width: 40rem;\" *ngFor=\"let restaurant of restaurants\">\r\n  <div class=\"card-body\">\r\n    <h3 class=\"card-title\">{{restaurant.name}}</h3>\r\n    <a class=\"btn btn-primary\" [routerLink]=\"['/kitchens/', restaurant.id]\" role=\"button\">Auswählen</a>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/kitchen/select-kitchen/select-kitchen.component.sass":
/*!**********************************************************************!*\
  !*** ./src/app/kitchen/select-kitchen/select-kitchen.component.sass ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/kitchen/select-kitchen/select-kitchen.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/kitchen/select-kitchen/select-kitchen.component.ts ***!
  \********************************************************************/
/*! exports provided: SelectKitchenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectKitchenComponent", function() { return SelectKitchenComponent; });
/* harmony import */ var _shared_Controllers_generated__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/Controllers.generated */ "./src/app/shared/Controllers.generated.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SelectKitchenComponent = /** @class */ (function () {
    function SelectKitchenComponent(restaurantClient) {
        this.restaurantClient = restaurantClient;
    }
    SelectKitchenComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.restaurantClient.get().subscribe(function (restaurants) {
            _this.restaurants = restaurants;
        }, function (error) {
            console.log('Restaurants konnten nicht geladen werden: ' + error);
        });
    };
    SelectKitchenComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'dinner-select-kitchen',
            template: __webpack_require__(/*! ./select-kitchen.component.html */ "./src/app/kitchen/select-kitchen/select-kitchen.component.html"),
            styles: [__webpack_require__(/*! ./select-kitchen.component.sass */ "./src/app/kitchen/select-kitchen/select-kitchen.component.sass")]
        }),
        __metadata("design:paramtypes", [_shared_Controllers_generated__WEBPACK_IMPORTED_MODULE_0__["AdminClient"]])
    ], SelectKitchenComponent);
    return SelectKitchenComponent;
}());



/***/ }),

/***/ "./src/app/order-dish/order-dish.component.html":
/*!******************************************************!*\
  !*** ./src/app/order-dish/order-dish.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n\r\n<p><b>Bitte wählen Sie ein Gericht aus:</b></p>\r\n<p class=\"selected-message\">{{message}}</p>\r\n\r\n\r\n<div class=\"card col-md-3 mb-3\" *ngFor=\"let dish of dishes\" id=\"card-dish\">\r\n  \r\n  <div class=\"card-select-dish\">\r\n    <a class=\"btn btn-primary\" (click)=\"order(dish)\" role=\"button\" id=\"button\">Bestellen</a>\r\n    <div class=\"menue-text\">Preis: {{dish.price}} €</div>\r\n    <img class=\"card-img-top dishimg\" [src]=\"dish.imageUrl\" [alt]=\"dish.name\">\r\n    <h3 class=\"menue-title\" bg-primary> {{dish.name}}</h3>\r\n    <div class=\"menue-text\">{{dish.description}}</div><br/>\r\n  </div>\r\n  \r\n  \r\n</div><br/>\r\n </div>\r\n\r\n"

/***/ }),

/***/ "./src/app/order-dish/order-dish.component.sass":
/*!******************************************************!*\
  !*** ./src/app/order-dish/order-dish.component.sass ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/order-dish/order-dish.component.ts":
/*!****************************************************!*\
  !*** ./src/app/order-dish/order-dish.component.ts ***!
  \****************************************************/
/*! exports provided: OrderDishComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderDishComponent", function() { return OrderDishComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_Controllers_generated__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/Controllers.generated */ "./src/app/shared/Controllers.generated.ts");
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



var OrderDishComponent = /** @class */ (function () {
    function OrderDishComponent(route, restaurantClient, restaurantAdminClient, orderClient) {
        this.route = route;
        this.restaurantClient = restaurantClient;
        this.restaurantAdminClient = restaurantAdminClient;
        this.orderClient = orderClient;
    }
    OrderDishComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dishes = [];
        this.restaurantId = this.route.snapshot.parent.parent.params['restaurantId'];
        this.tableId = this.route.snapshot.parent.params['tableId'];
        this.restaurantAdminClient.getMenuCard(this.restaurantId).subscribe(function (dishes) {
            _this.dishes = dishes;
        }, function (error) {
            console.log(error);
        });
    };
    OrderDishComponent.prototype.order = function (dish) {
        this.message = 'Bestellung starten';
        var order = new _shared_Controllers_generated__WEBPACK_IMPORTED_MODULE_1__["Order"]();
        order.dishId = dish.id;
        order.price = dish.price;
        order.tableId = this.tableId;
        order.restaurantId = this.restaurantId;
        var that = this;
        this.orderClient.create(order).subscribe(function (orderresult) {
            that.message = dish.name + ' ist bestellt! Order id ' + orderresult.orderId + ' State: ' + orderresult.orderState;
        }, function (error) {
            console.log('Bestellung konnte nicht abgegeben werden!' + error);
            that.message = 'Bestellung konnte nicht abgegeben werden!' + error;
        });
    };
    OrderDishComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'dinner-order-dish',
            template: __webpack_require__(/*! ./order-dish.component.html */ "./src/app/order-dish/order-dish.component.html"),
            styles: [__webpack_require__(/*! ./order-dish.component.sass */ "./src/app/order-dish/order-dish.component.sass")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _shared_Controllers_generated__WEBPACK_IMPORTED_MODULE_1__["RestaurantClient"],
            _shared_Controllers_generated__WEBPACK_IMPORTED_MODULE_1__["RestaurantAdminClient"],
            _shared_Controllers_generated__WEBPACK_IMPORTED_MODULE_1__["OrderClient"]])
    ], OrderDishComponent);
    return OrderDishComponent;
}());



/***/ }),

/***/ "./src/app/order-status/order-status.component.html":
/*!**********************************************************!*\
  !*** ./src/app/order-status/order-status.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\"> \r\n  <p><b>Getätigte Bestellungen</b></p>\r\n  <div class=\"card col-md-5 mb-3\" *ngFor=\"let order of orders\">\r\n    <h3 class=\"menue-title\">{{order.dish}}: {{order.state}}</h3>\r\n    <span class=\"menue-text\">{{order.price}} €</span>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/order-status/order-status.component.sass":
/*!**********************************************************!*\
  !*** ./src/app/order-status/order-status.component.sass ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/order-status/order-status.component.ts":
/*!********************************************************!*\
  !*** ./src/app/order-status/order-status.component.ts ***!
  \********************************************************/
/*! exports provided: OrderStatusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderStatusComponent", function() { return OrderStatusComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_Controllers_generated__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/Controllers.generated */ "./src/app/shared/Controllers.generated.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/Rx */ "./node_modules/rxjs-compat/_esm5/Rx.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var OrderStatusComponent = /** @class */ (function () {
    function OrderStatusComponent(route, restaurantClient, orderClient) {
        this.route = route;
        this.restaurantClient = restaurantClient;
        this.orderClient = orderClient;
        this.orders = [];
    }
    OrderStatusComponent.prototype.ngOnInit = function () {
        this.restaurantId = this.route.snapshot.parent.parent.params['restaurantId'];
        this.tableId = this.route.snapshot.parent.params['tableId'];
        var that = this;
        this.orderClient.getOrders(that.tableId).subscribe(function (orders) {
            that.orders = orders;
        }, function (error) {
            console.log('Fehler beim Laden der Bestellungen des Tisches: ' + error);
        });
        rxjs_Rx__WEBPACK_IMPORTED_MODULE_3__["Observable"].timer(10, 10).subscribe(function (data) {
            that.orderClient.getOrders(that.tableId).subscribe(function (orders) {
                that.orders = orders;
            }, function (error) {
                console.log('Fehler beim Laden der Bestellungen des Tisches: ' + error);
            });
        });
    };
    OrderStatusComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'dinner-order-status',
            template: __webpack_require__(/*! ./order-status.component.html */ "./src/app/order-status/order-status.component.html"),
            styles: [__webpack_require__(/*! ./order-status.component.sass */ "./src/app/order-status/order-status.component.sass")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _shared_Controllers_generated__WEBPACK_IMPORTED_MODULE_1__["RestaurantClient"],
            _shared_Controllers_generated__WEBPACK_IMPORTED_MODULE_1__["OrderClient"]])
    ], OrderStatusComponent);
    return OrderStatusComponent;
}());



/***/ }),

/***/ "./src/app/restaurant/restaurant.component.html":
/*!******************************************************!*\
  !*** ./src/app/restaurant/restaurant.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n<h2 *ngIf=\"restaurant!=null\" class=\"selected\">Restaurant: {{restaurant.name}}</h2><br/>\r\n</div>\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/restaurant/restaurant.component.sass":
/*!******************************************************!*\
  !*** ./src/app/restaurant/restaurant.component.sass ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/restaurant/restaurant.component.ts":
/*!****************************************************!*\
  !*** ./src/app/restaurant/restaurant.component.ts ***!
  \****************************************************/
/*! exports provided: RestaurantComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestaurantComponent", function() { return RestaurantComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_Controllers_generated__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/Controllers.generated */ "./src/app/shared/Controllers.generated.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RestaurantComponent = /** @class */ (function () {
    function RestaurantComponent(route, restaurantClient) {
        this.route = route;
        this.restaurantClient = restaurantClient;
    }
    RestaurantComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.restaurantNr = this.route.snapshot.params['restaurantId'];
        this.restaurantClient.get(this.restaurantNr).subscribe(function (restaurant) {
            _this.restaurant = restaurant;
        }, function (error) {
            console.log('Fehler beim Laden des Restaurants');
        });
    };
    RestaurantComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'dinner-restaurant',
            template: __webpack_require__(/*! ./restaurant.component.html */ "./src/app/restaurant/restaurant.component.html"),
            styles: [__webpack_require__(/*! ./restaurant.component.sass */ "./src/app/restaurant/restaurant.component.sass")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _shared_Controllers_generated__WEBPACK_IMPORTED_MODULE_2__["RestaurantClient"]])
    ], RestaurantComponent);
    return RestaurantComponent;
}());



/***/ }),

/***/ "./src/app/restaurants/restaurants.component.html":
/*!********************************************************!*\
  !*** ./src/app/restaurants/restaurants.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/restaurants/restaurants.component.sass":
/*!********************************************************!*\
  !*** ./src/app/restaurants/restaurants.component.sass ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/restaurants/restaurants.component.ts":
/*!******************************************************!*\
  !*** ./src/app/restaurants/restaurants.component.ts ***!
  \******************************************************/
/*! exports provided: RestaurantsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestaurantsComponent", function() { return RestaurantsComponent; });
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

var RestaurantsComponent = /** @class */ (function () {
    function RestaurantsComponent() {
    }
    RestaurantsComponent.prototype.ngOnInit = function () {
    };
    RestaurantsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'dinner-restaurants',
            template: __webpack_require__(/*! ./restaurants.component.html */ "./src/app/restaurants/restaurants.component.html"),
            styles: [__webpack_require__(/*! ./restaurants.component.sass */ "./src/app/restaurants/restaurants.component.sass")]
        }),
        __metadata("design:paramtypes", [])
    ], RestaurantsComponent);
    return RestaurantsComponent;
}());



/***/ }),

/***/ "./src/app/select-restaurant/select-restaurant.component.html":
/*!********************************************************************!*\
  !*** ./src/app/select-restaurant/select-restaurant.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"container\">\r\n  <p><b>Bitte wählen Sie ein Restaurant aus.</b></p>\r\n\r\n  <div class=\"card col-5  mb-3\" *ngFor=\"let restaurant of restaurants\">\r\n    <div class=\"card-select\">\r\n      <h3 class=\"card-title\">{{restaurant.name}}</h3>\r\n      <a class=\"btn btn-primary\" [routerLink]=\"['/restaurants/', restaurant.id]\" role=\"button\">Auswählen</a>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/select-restaurant/select-restaurant.component.sass":
/*!********************************************************************!*\
  !*** ./src/app/select-restaurant/select-restaurant.component.sass ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/select-restaurant/select-restaurant.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/select-restaurant/select-restaurant.component.ts ***!
  \******************************************************************/
/*! exports provided: SelectRestaurantComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectRestaurantComponent", function() { return SelectRestaurantComponent; });
/* harmony import */ var _shared_Controllers_generated__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/Controllers.generated */ "./src/app/shared/Controllers.generated.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SelectRestaurantComponent = /** @class */ (function () {
    function SelectRestaurantComponent(restaurantClient) {
        this.restaurantClient = restaurantClient;
    }
    SelectRestaurantComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.restaurantClient.get().subscribe(function (restaurants) {
            _this.restaurants = restaurants;
        }, function (error) {
            console.log('Restaurants konnten nicht geladen werden: ' + error);
        });
    };
    SelectRestaurantComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'dinner-select-restaurant',
            template: __webpack_require__(/*! ./select-restaurant.component.html */ "./src/app/select-restaurant/select-restaurant.component.html"),
            styles: [__webpack_require__(/*! ./select-restaurant.component.sass */ "./src/app/select-restaurant/select-restaurant.component.sass")]
        }),
        __metadata("design:paramtypes", [_shared_Controllers_generated__WEBPACK_IMPORTED_MODULE_0__["AdminClient"]])
    ], SelectRestaurantComponent);
    return SelectRestaurantComponent;
}());



/***/ }),

/***/ "./src/app/select-table-in-restaurant/select-table-in-restaurant.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/select-table-in-restaurant/select-table-in-restaurant.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n\r\n<p><b>Bitte wählen Sie einen Tisch aus.</b></p>\r\n<div class=\"row\"> \r\n  \r\n  <div class=\"card col-md-5 mb-3\" *ngFor=\"let table of tables\">\r\n    <div class=\"card-select\">\r\n      <h3 class=\"card-title\">Tisch {{table.tablenr}}</h3>\r\n      <a class=\"btn btn-primary\" [routerLink]=\"['/restaurants/', restaurantId, table.id]\"  role=\"button\">Auswählen</a>\r\n    </div>\r\n  </div>\r\n</div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/select-table-in-restaurant/select-table-in-restaurant.component.sass":
/*!**************************************************************************************!*\
  !*** ./src/app/select-table-in-restaurant/select-table-in-restaurant.component.sass ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/select-table-in-restaurant/select-table-in-restaurant.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/select-table-in-restaurant/select-table-in-restaurant.component.ts ***!
  \************************************************************************************/
/*! exports provided: SelectTableInRestaurantComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectTableInRestaurantComponent", function() { return SelectTableInRestaurantComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_Controllers_generated__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/Controllers.generated */ "./src/app/shared/Controllers.generated.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SelectTableInRestaurantComponent = /** @class */ (function () {
    function SelectTableInRestaurantComponent(route, restaurantAdminClient) {
        this.route = route;
        this.restaurantAdminClient = restaurantAdminClient;
    }
    SelectTableInRestaurantComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.tables = [];
        this.restaurantId = this.route.snapshot.parent.params['restaurantId'];
        this.restaurantAdminClient.getTables(this.restaurantId).subscribe(function (tables) {
            _this.tables = tables;
        }, function (error) {
            console.log(error);
        });
    };
    SelectTableInRestaurantComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'dinner-select-table-in-restaurant',
            template: __webpack_require__(/*! ./select-table-in-restaurant.component.html */ "./src/app/select-table-in-restaurant/select-table-in-restaurant.component.html"),
            styles: [__webpack_require__(/*! ./select-table-in-restaurant.component.sass */ "./src/app/select-table-in-restaurant/select-table-in-restaurant.component.sass")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _shared_Controllers_generated__WEBPACK_IMPORTED_MODULE_2__["RestaurantAdminClient"]])
    ], SelectTableInRestaurantComponent);
    return SelectTableInRestaurantComponent;
}());



/***/ }),

/***/ "./src/app/selected-table/selected-table.component.html":
/*!**************************************************************!*\
  !*** ./src/app/selected-table/selected-table.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p *ngIf=\"table == true\">\r\n  Willkommen am Tisch {{table.tablenr}}\r\n</p>\r\n<div class=\"container\">  \r\n  <a routerLink=\"order\" class=\"btn btn-primary\">Gericht auswählen</a> &nbsp;&nbsp;\r\n  <a routerLink=\"status\" class=\"btn btn-primary\">Bestellungen</a>\r\n  \r\n</div><br/>\r\n\r\n\r\n<router-outlet></router-outlet>\r\n\r\n"

/***/ }),

/***/ "./src/app/selected-table/selected-table.component.sass":
/*!**************************************************************!*\
  !*** ./src/app/selected-table/selected-table.component.sass ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/selected-table/selected-table.component.ts":
/*!************************************************************!*\
  !*** ./src/app/selected-table/selected-table.component.ts ***!
  \************************************************************/
/*! exports provided: SelectedTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectedTableComponent", function() { return SelectedTableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_Controllers_generated__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/Controllers.generated */ "./src/app/shared/Controllers.generated.ts");
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



var SelectedTableComponent = /** @class */ (function () {
    function SelectedTableComponent(route, restaurantClient) {
        this.route = route;
        this.restaurantClient = restaurantClient;
    }
    SelectedTableComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.restaurantId = this.route.snapshot.parent.params['restaurantId'];
        this.tableId = this.route.snapshot.params['tableId'];
        this.restaurantClient.getTable(this.restaurantId, this.tableId).subscribe(function (table) {
            _this.table = table;
        }, function (error) {
            console.log('Error beim Laden der Table');
        });
    };
    SelectedTableComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'dinner-selected-table',
            template: __webpack_require__(/*! ./selected-table.component.html */ "./src/app/selected-table/selected-table.component.html"),
            styles: [__webpack_require__(/*! ./selected-table.component.sass */ "./src/app/selected-table/selected-table.component.sass")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _shared_Controllers_generated__WEBPACK_IMPORTED_MODULE_1__["RestaurantClient"]])
    ], SelectedTableComponent);
    return SelectedTableComponent;
}());



/***/ }),

/***/ "./src/app/shared/Controllers.generated.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/Controllers.generated.ts ***!
  \*************************************************/
/*! exports provided: API_BASE_URL, AdminClient, OrderClient, RestaurantAdminClient, RestaurantClient, KitchenClient, Restaurant, Order, OrderState, TableOrder, Dish, RestaurantTable, KitchenOrder, SwaggerException */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_BASE_URL", function() { return API_BASE_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminClient", function() { return AdminClient; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderClient", function() { return OrderClient; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestaurantAdminClient", function() { return RestaurantAdminClient; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestaurantClient", function() { return RestaurantClient; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KitchenClient", function() { return KitchenClient; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Restaurant", function() { return Restaurant; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Order", function() { return Order; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderState", function() { return OrderState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableOrder", function() { return TableOrder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dish", function() { return Dish; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestaurantTable", function() { return RestaurantTable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KitchenOrder", function() { return KitchenOrder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SwaggerException", function() { return SwaggerException; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* tslint:disable */
//----------------------
// <auto-generated>
//     Generated using the NSwag toolchain v11.20.1.0 (NJsonSchema v9.11.0.0 (Newtonsoft.Json v9.0.0.0)) (http://NSwag.org)
// </auto-generated>
//----------------------
// ReSharper disable InconsistentNaming
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var API_BASE_URL = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["InjectionToken"]('API_BASE_URL');
var AdminClient = /** @class */ (function () {
    function AdminClient(http, baseUrl) {
        this.jsonParseReviver = undefined;
        this.http = http;
        this.baseUrl = baseUrl ? baseUrl : "";
    }
    AdminClient.prototype.get = function () {
        var _this = this;
        var url_ = this.baseUrl + "/api/Admin/Get";
        url_ = url_.replace(/[?&]$/, "");
        var options_ = {
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                "Accept": "application/json"
            })
        };
        return this.http.request("get", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (response_) {
            return _this.processGet(response_);
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponseBase"]) {
                try {
                    return _this.processGet(response_);
                }
                catch (e) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(e);
                }
            }
            else
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(response_);
        }));
    };
    AdminClient.prototype.processGet = function (response) {
        var _this = this;
        var status = response.status;
        var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponse"] ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        var _headers = {};
        if (response.headers) {
            for (var _i = 0, _a = response.headers.keys(); _i < _a.length; _i++) {
                var key = _a[_i];
                _headers[key] = response.headers.get(key);
            }
        }
        ;
        if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
                var result200 = null;
                var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this.jsonParseReviver);
                if (resultData200 && resultData200.constructor === Array) {
                    result200 = [];
                    for (var _i = 0, resultData200_1 = resultData200; _i < resultData200_1.length; _i++) {
                        var item = resultData200_1[_i];
                        result200.push(Restaurant.fromJS(item));
                    }
                }
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(result200);
            }));
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
    };
    AdminClient.prototype.create = function (restaurant) {
        var _this = this;
        var url_ = this.baseUrl + "/api/Admin/Create";
        url_ = url_.replace(/[?&]$/, "");
        var content_ = JSON.stringify(restaurant);
        var options_ = {
            body: content_,
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                "Content-Type": "application/json",
                "Accept": "application/json"
            })
        };
        return this.http.request("post", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (response_) {
            return _this.processCreate(response_);
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponseBase"]) {
                try {
                    return _this.processCreate(response_);
                }
                catch (e) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(e);
                }
            }
            else
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(response_);
        }));
    };
    AdminClient.prototype.processCreate = function (response) {
        var _this = this;
        var status = response.status;
        var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponse"] ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        var _headers = {};
        if (response.headers) {
            for (var _i = 0, _a = response.headers.keys(); _i < _a.length; _i++) {
                var key = _a[_i];
                _headers[key] = response.headers.get(key);
            }
        }
        ;
        if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
                var result200 = null;
                var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this.jsonParseReviver);
                result200 = resultData200 ? Restaurant.fromJS(resultData200) : null;
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(result200);
            }));
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
    };
    AdminClient = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"])(_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])), __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"])()), __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"])(API_BASE_URL)),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], String])
    ], AdminClient);
    return AdminClient;
}());

var OrderClient = /** @class */ (function () {
    function OrderClient(http, baseUrl) {
        this.jsonParseReviver = undefined;
        this.http = http;
        this.baseUrl = baseUrl ? baseUrl : "";
    }
    OrderClient.prototype.create = function (order) {
        var _this = this;
        var url_ = this.baseUrl + "/api/Order";
        url_ = url_.replace(/[?&]$/, "");
        var content_ = JSON.stringify(order);
        var options_ = {
            body: content_,
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                "Content-Type": "application/json",
                "Accept": "application/json"
            })
        };
        return this.http.request("post", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (response_) {
            return _this.processCreate(response_);
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponseBase"]) {
                try {
                    return _this.processCreate(response_);
                }
                catch (e) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(e);
                }
            }
            else
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(response_);
        }));
    };
    OrderClient.prototype.processCreate = function (response) {
        var _this = this;
        var status = response.status;
        var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponse"] ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        var _headers = {};
        if (response.headers) {
            for (var _i = 0, _a = response.headers.keys(); _i < _a.length; _i++) {
                var key = _a[_i];
                _headers[key] = response.headers.get(key);
            }
        }
        ;
        if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
                var result200 = null;
                var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this.jsonParseReviver);
                result200 = resultData200 ? Order.fromJS(resultData200) : null;
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(result200);
            }));
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
    };
    OrderClient.prototype.getOrder = function (orderId) {
        var _this = this;
        var url_ = this.baseUrl + "/api/Order/GetOrder/{orderId}";
        if (orderId === undefined || orderId === null)
            throw new Error("The parameter 'orderId' must be defined.");
        url_ = url_.replace("{orderId}", encodeURIComponent("" + orderId));
        url_ = url_.replace(/[?&]$/, "");
        var options_ = {
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                "Accept": "application/json"
            })
        };
        return this.http.request("get", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (response_) {
            return _this.processGetOrder(response_);
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponseBase"]) {
                try {
                    return _this.processGetOrder(response_);
                }
                catch (e) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(e);
                }
            }
            else
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(response_);
        }));
    };
    OrderClient.prototype.processGetOrder = function (response) {
        var _this = this;
        var status = response.status;
        var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponse"] ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        var _headers = {};
        if (response.headers) {
            for (var _i = 0, _a = response.headers.keys(); _i < _a.length; _i++) {
                var key = _a[_i];
                _headers[key] = response.headers.get(key);
            }
        }
        ;
        if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
                var result200 = null;
                var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this.jsonParseReviver);
                result200 = resultData200 ? Order.fromJS(resultData200) : null;
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(result200);
            }));
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
    };
    OrderClient.prototype.getOrders = function (tableId) {
        var _this = this;
        var url_ = this.baseUrl + "/api/Order/GetOrders/{tableId}";
        if (tableId === undefined || tableId === null)
            throw new Error("The parameter 'tableId' must be defined.");
        url_ = url_.replace("{tableId}", encodeURIComponent("" + tableId));
        url_ = url_.replace(/[?&]$/, "");
        var options_ = {
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                "Accept": "application/json"
            })
        };
        return this.http.request("get", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (response_) {
            return _this.processGetOrders(response_);
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponseBase"]) {
                try {
                    return _this.processGetOrders(response_);
                }
                catch (e) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(e);
                }
            }
            else
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(response_);
        }));
    };
    OrderClient.prototype.processGetOrders = function (response) {
        var _this = this;
        var status = response.status;
        var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponse"] ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        var _headers = {};
        if (response.headers) {
            for (var _i = 0, _a = response.headers.keys(); _i < _a.length; _i++) {
                var key = _a[_i];
                _headers[key] = response.headers.get(key);
            }
        }
        ;
        if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
                var result200 = null;
                var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this.jsonParseReviver);
                if (resultData200 && resultData200.constructor === Array) {
                    result200 = [];
                    for (var _i = 0, resultData200_2 = resultData200; _i < resultData200_2.length; _i++) {
                        var item = resultData200_2[_i];
                        result200.push(TableOrder.fromJS(item));
                    }
                }
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(result200);
            }));
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
    };
    OrderClient = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"])(_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])), __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"])()), __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"])(API_BASE_URL)),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], String])
    ], OrderClient);
    return OrderClient;
}());

var RestaurantAdminClient = /** @class */ (function () {
    function RestaurantAdminClient(http, baseUrl) {
        this.jsonParseReviver = undefined;
        this.http = http;
        this.baseUrl = baseUrl ? baseUrl : "";
    }
    RestaurantAdminClient.prototype.getMenuCard = function (restaurantId) {
        var _this = this;
        var url_ = this.baseUrl + "/api/RestaurantAdmin/{restaurantId}";
        if (restaurantId === undefined || restaurantId === null)
            throw new Error("The parameter 'restaurantId' must be defined.");
        url_ = url_.replace("{restaurantId}", encodeURIComponent("" + restaurantId));
        url_ = url_.replace(/[?&]$/, "");
        var options_ = {
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                "Accept": "application/json"
            })
        };
        return this.http.request("get", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (response_) {
            return _this.processGetMenuCard(response_);
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponseBase"]) {
                try {
                    return _this.processGetMenuCard(response_);
                }
                catch (e) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(e);
                }
            }
            else
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(response_);
        }));
    };
    RestaurantAdminClient.prototype.processGetMenuCard = function (response) {
        var _this = this;
        var status = response.status;
        var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponse"] ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        var _headers = {};
        if (response.headers) {
            for (var _i = 0, _a = response.headers.keys(); _i < _a.length; _i++) {
                var key = _a[_i];
                _headers[key] = response.headers.get(key);
            }
        }
        ;
        if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
                var result200 = null;
                var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this.jsonParseReviver);
                if (resultData200 && resultData200.constructor === Array) {
                    result200 = [];
                    for (var _i = 0, resultData200_3 = resultData200; _i < resultData200_3.length; _i++) {
                        var item = resultData200_3[_i];
                        result200.push(Dish.fromJS(item));
                    }
                }
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(result200);
            }));
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
    };
    RestaurantAdminClient.prototype.addDish = function (restaurantId, dish) {
        var _this = this;
        var url_ = this.baseUrl + "/api/RestaurantAdmin/{restaurantId}";
        if (restaurantId === undefined || restaurantId === null)
            throw new Error("The parameter 'restaurantId' must be defined.");
        url_ = url_.replace("{restaurantId}", encodeURIComponent("" + restaurantId));
        url_ = url_.replace(/[?&]$/, "");
        var content_ = JSON.stringify(dish);
        var options_ = {
            body: content_,
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                "Content-Type": "application/json",
                "Accept": "application/json"
            })
        };
        return this.http.request("post", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (response_) {
            return _this.processAddDish(response_);
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponseBase"]) {
                try {
                    return _this.processAddDish(response_);
                }
                catch (e) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(e);
                }
            }
            else
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(response_);
        }));
    };
    RestaurantAdminClient.prototype.processAddDish = function (response) {
        var _this = this;
        var status = response.status;
        var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponse"] ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        var _headers = {};
        if (response.headers) {
            for (var _i = 0, _a = response.headers.keys(); _i < _a.length; _i++) {
                var key = _a[_i];
                _headers[key] = response.headers.get(key);
            }
        }
        ;
        if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
                var result200 = null;
                var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this.jsonParseReviver);
                result200 = resultData200 ? Dish.fromJS(resultData200) : null;
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(result200);
            }));
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
    };
    RestaurantAdminClient.prototype.createTable = function (restaurantId, table) {
        var _this = this;
        var url_ = this.baseUrl + "/api/RestaurantAdmin/CreateTable/{restaurantId}";
        if (restaurantId === undefined || restaurantId === null)
            throw new Error("The parameter 'restaurantId' must be defined.");
        url_ = url_.replace("{restaurantId}", encodeURIComponent("" + restaurantId));
        url_ = url_.replace(/[?&]$/, "");
        var content_ = JSON.stringify(table);
        var options_ = {
            body: content_,
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                "Content-Type": "application/json",
                "Accept": "application/json"
            })
        };
        return this.http.request("post", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (response_) {
            return _this.processCreateTable(response_);
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponseBase"]) {
                try {
                    return _this.processCreateTable(response_);
                }
                catch (e) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(e);
                }
            }
            else
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(response_);
        }));
    };
    RestaurantAdminClient.prototype.processCreateTable = function (response) {
        var _this = this;
        var status = response.status;
        var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponse"] ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        var _headers = {};
        if (response.headers) {
            for (var _i = 0, _a = response.headers.keys(); _i < _a.length; _i++) {
                var key = _a[_i];
                _headers[key] = response.headers.get(key);
            }
        }
        ;
        if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
                var result200 = null;
                var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this.jsonParseReviver);
                result200 = resultData200 ? RestaurantTable.fromJS(resultData200) : null;
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(result200);
            }));
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
    };
    RestaurantAdminClient.prototype.getTables = function (restaurantId) {
        var _this = this;
        var url_ = this.baseUrl + "/api/RestaurantAdmin/GetTables/{restaurantId}";
        if (restaurantId === undefined || restaurantId === null)
            throw new Error("The parameter 'restaurantId' must be defined.");
        url_ = url_.replace("{restaurantId}", encodeURIComponent("" + restaurantId));
        url_ = url_.replace(/[?&]$/, "");
        var options_ = {
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                "Accept": "application/json"
            })
        };
        return this.http.request("get", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (response_) {
            return _this.processGetTables(response_);
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponseBase"]) {
                try {
                    return _this.processGetTables(response_);
                }
                catch (e) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(e);
                }
            }
            else
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(response_);
        }));
    };
    RestaurantAdminClient.prototype.processGetTables = function (response) {
        var _this = this;
        var status = response.status;
        var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponse"] ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        var _headers = {};
        if (response.headers) {
            for (var _i = 0, _a = response.headers.keys(); _i < _a.length; _i++) {
                var key = _a[_i];
                _headers[key] = response.headers.get(key);
            }
        }
        ;
        if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
                var result200 = null;
                var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this.jsonParseReviver);
                if (resultData200 && resultData200.constructor === Array) {
                    result200 = [];
                    for (var _i = 0, resultData200_4 = resultData200; _i < resultData200_4.length; _i++) {
                        var item = resultData200_4[_i];
                        result200.push(RestaurantTable.fromJS(item));
                    }
                }
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(result200);
            }));
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
    };
    RestaurantAdminClient = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"])(_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])), __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"])()), __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"])(API_BASE_URL)),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], String])
    ], RestaurantAdminClient);
    return RestaurantAdminClient;
}());

var RestaurantClient = /** @class */ (function () {
    function RestaurantClient(http, baseUrl) {
        this.jsonParseReviver = undefined;
        this.http = http;
        this.baseUrl = baseUrl ? baseUrl : "";
    }
    RestaurantClient.prototype.get = function (restaurantId) {
        var _this = this;
        var url_ = this.baseUrl + "/api/Restaurant/Get/{restaurantId}";
        if (restaurantId === undefined || restaurantId === null)
            throw new Error("The parameter 'restaurantId' must be defined.");
        url_ = url_.replace("{restaurantId}", encodeURIComponent("" + restaurantId));
        url_ = url_.replace(/[?&]$/, "");
        var options_ = {
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                "Accept": "application/json"
            })
        };
        return this.http.request("get", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (response_) {
            return _this.processGet(response_);
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponseBase"]) {
                try {
                    return _this.processGet(response_);
                }
                catch (e) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(e);
                }
            }
            else
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(response_);
        }));
    };
    RestaurantClient.prototype.processGet = function (response) {
        var _this = this;
        var status = response.status;
        var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponse"] ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        var _headers = {};
        if (response.headers) {
            for (var _i = 0, _a = response.headers.keys(); _i < _a.length; _i++) {
                var key = _a[_i];
                _headers[key] = response.headers.get(key);
            }
        }
        ;
        if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
                var result200 = null;
                var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this.jsonParseReviver);
                result200 = resultData200 ? Restaurant.fromJS(resultData200) : null;
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(result200);
            }));
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
    };
    RestaurantClient.prototype.getTable = function (restaurantId, tableId) {
        var _this = this;
        var url_ = this.baseUrl + "/api/Restaurant/GetTable/{restaurantId}/{tableId}";
        if (restaurantId === undefined || restaurantId === null)
            throw new Error("The parameter 'restaurantId' must be defined.");
        url_ = url_.replace("{restaurantId}", encodeURIComponent("" + restaurantId));
        if (tableId === undefined || tableId === null)
            throw new Error("The parameter 'tableId' must be defined.");
        url_ = url_.replace("{tableId}", encodeURIComponent("" + tableId));
        url_ = url_.replace(/[?&]$/, "");
        var options_ = {
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                "Accept": "application/json"
            })
        };
        return this.http.request("get", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (response_) {
            return _this.processGetTable(response_);
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponseBase"]) {
                try {
                    return _this.processGetTable(response_);
                }
                catch (e) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(e);
                }
            }
            else
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(response_);
        }));
    };
    RestaurantClient.prototype.processGetTable = function (response) {
        var _this = this;
        var status = response.status;
        var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponse"] ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        var _headers = {};
        if (response.headers) {
            for (var _i = 0, _a = response.headers.keys(); _i < _a.length; _i++) {
                var key = _a[_i];
                _headers[key] = response.headers.get(key);
            }
        }
        ;
        if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
                var result200 = null;
                var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this.jsonParseReviver);
                result200 = resultData200 ? RestaurantTable.fromJS(resultData200) : null;
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(result200);
            }));
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
    };
    RestaurantClient = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"])(_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])), __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"])()), __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"])(API_BASE_URL)),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], String])
    ], RestaurantClient);
    return RestaurantClient;
}());

var KitchenClient = /** @class */ (function () {
    function KitchenClient(http, baseUrl) {
        this.jsonParseReviver = undefined;
        this.http = http;
        this.baseUrl = baseUrl ? baseUrl : "";
    }
    KitchenClient.prototype.getKitchenQueue = function (restaurantId) {
        var _this = this;
        var url_ = this.baseUrl + "/api/Kitchen/{restaurantId}/KitchenQueue";
        if (restaurantId === undefined || restaurantId === null)
            throw new Error("The parameter 'restaurantId' must be defined.");
        url_ = url_.replace("{restaurantId}", encodeURIComponent("" + restaurantId));
        url_ = url_.replace(/[?&]$/, "");
        var options_ = {
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                "Accept": "application/json"
            })
        };
        return this.http.request("get", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (response_) {
            return _this.processGetKitchenQueue(response_);
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponseBase"]) {
                try {
                    return _this.processGetKitchenQueue(response_);
                }
                catch (e) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(e);
                }
            }
            else
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(response_);
        }));
    };
    KitchenClient.prototype.processGetKitchenQueue = function (response) {
        var _this = this;
        var status = response.status;
        var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponse"] ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        var _headers = {};
        if (response.headers) {
            for (var _i = 0, _a = response.headers.keys(); _i < _a.length; _i++) {
                var key = _a[_i];
                _headers[key] = response.headers.get(key);
            }
        }
        ;
        if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
                var result200 = null;
                var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this.jsonParseReviver);
                if (resultData200 && resultData200.constructor === Array) {
                    result200 = [];
                    for (var _i = 0, resultData200_5 = resultData200; _i < resultData200_5.length; _i++) {
                        var item = resultData200_5[_i];
                        result200.push(KitchenOrder.fromJS(item));
                    }
                }
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(result200);
            }));
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
    };
    KitchenClient.prototype.getKitchenCookingQueue = function (restaurantId) {
        var _this = this;
        var url_ = this.baseUrl + "/api/Kitchen/{restaurantId}/KitchenCookingQueue";
        if (restaurantId === undefined || restaurantId === null)
            throw new Error("The parameter 'restaurantId' must be defined.");
        url_ = url_.replace("{restaurantId}", encodeURIComponent("" + restaurantId));
        url_ = url_.replace(/[?&]$/, "");
        var options_ = {
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                "Accept": "application/json"
            })
        };
        return this.http.request("get", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (response_) {
            return _this.processGetKitchenCookingQueue(response_);
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponseBase"]) {
                try {
                    return _this.processGetKitchenCookingQueue(response_);
                }
                catch (e) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(e);
                }
            }
            else
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(response_);
        }));
    };
    KitchenClient.prototype.processGetKitchenCookingQueue = function (response) {
        var _this = this;
        var status = response.status;
        var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponse"] ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        var _headers = {};
        if (response.headers) {
            for (var _i = 0, _a = response.headers.keys(); _i < _a.length; _i++) {
                var key = _a[_i];
                _headers[key] = response.headers.get(key);
            }
        }
        ;
        if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
                var result200 = null;
                var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this.jsonParseReviver);
                if (resultData200 && resultData200.constructor === Array) {
                    result200 = [];
                    for (var _i = 0, resultData200_6 = resultData200; _i < resultData200_6.length; _i++) {
                        var item = resultData200_6[_i];
                        result200.push(KitchenOrder.fromJS(item));
                    }
                }
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(result200);
            }));
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
    };
    KitchenClient = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"])(_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])), __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"])()), __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"])(API_BASE_URL)),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], String])
    ], KitchenClient);
    return KitchenClient;
}());

var Restaurant = /** @class */ (function () {
    function Restaurant(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    Restaurant.prototype.init = function (data) {
        if (data) {
            this.name = data["name"];
            this.id = data["id"];
        }
    };
    Restaurant.fromJS = function (data) {
        data = typeof data === 'object' ? data : {};
        var result = new Restaurant();
        result.init(data);
        return result;
    };
    Restaurant.prototype.toJSON = function (data) {
        data = typeof data === 'object' ? data : {};
        data["name"] = this.name;
        data["id"] = this.id;
        return data;
    };
    return Restaurant;
}());

var Order = /** @class */ (function () {
    function Order(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    Order.prototype.init = function (data) {
        if (data) {
            this.restaurantId = data["restaurantId"];
            this.orderId = data["orderId"];
            this.tableId = data["tableId"];
            this.dishId = data["dishId"];
            this.price = data["price"];
            this.orderTime = data["orderTime"] ? new Date(data["orderTime"].toString()) : undefined;
            this.servedTime = data["servedTime"] ? new Date(data["servedTime"].toString()) : undefined;
            this.orderState = data["orderState"];
        }
    };
    Order.fromJS = function (data) {
        data = typeof data === 'object' ? data : {};
        var result = new Order();
        result.init(data);
        return result;
    };
    Order.prototype.toJSON = function (data) {
        data = typeof data === 'object' ? data : {};
        data["restaurantId"] = this.restaurantId;
        data["orderId"] = this.orderId;
        data["tableId"] = this.tableId;
        data["dishId"] = this.dishId;
        data["price"] = this.price;
        data["orderTime"] = this.orderTime ? this.orderTime.toISOString() : undefined;
        data["servedTime"] = this.servedTime ? this.servedTime.toISOString() : undefined;
        data["orderState"] = this.orderState;
        return data;
    };
    return Order;
}());

var OrderState;
(function (OrderState) {
    OrderState[OrderState["None"] = 0] = "None";
    OrderState[OrderState["Ordered"] = 1] = "Ordered";
    OrderState[OrderState["InKitchenQueue"] = 2] = "InKitchenQueue";
    OrderState[OrderState["Cooking"] = 3] = "Cooking";
    OrderState[OrderState["Cooked"] = 4] = "Cooked";
    OrderState[OrderState["Served"] = 5] = "Served";
    OrderState[OrderState["Payed"] = 6] = "Payed";
})(OrderState || (OrderState = {}));
var TableOrder = /** @class */ (function () {
    function TableOrder(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    TableOrder.prototype.init = function (data) {
        if (data) {
            this.orderId = data["orderId"];
            this.price = data["price"];
            this.servedAt = data["servedAt"] ? new Date(data["servedAt"].toString()) : undefined;
            this.dish = data["dish"];
            this.state = data["state"];
        }
    };
    TableOrder.fromJS = function (data) {
        data = typeof data === 'object' ? data : {};
        var result = new TableOrder();
        result.init(data);
        return result;
    };
    TableOrder.prototype.toJSON = function (data) {
        data = typeof data === 'object' ? data : {};
        data["orderId"] = this.orderId;
        data["price"] = this.price;
        data["servedAt"] = this.servedAt ? this.servedAt.toISOString() : undefined;
        data["dish"] = this.dish;
        data["state"] = this.state;
        return data;
    };
    return TableOrder;
}());

var Dish = /** @class */ (function () {
    function Dish(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    Dish.prototype.init = function (data) {
        if (data) {
            this.name = data["name"];
            this.price = data["price"];
            this.id = data["id"];
            this.description = data["description"];
            this.imageUrl = data["imageUrl"];
        }
    };
    Dish.fromJS = function (data) {
        data = typeof data === 'object' ? data : {};
        var result = new Dish();
        result.init(data);
        return result;
    };
    Dish.prototype.toJSON = function (data) {
        data = typeof data === 'object' ? data : {};
        data["name"] = this.name;
        data["price"] = this.price;
        data["id"] = this.id;
        data["description"] = this.description;
        data["imageUrl"] = this.imageUrl;
        return data;
    };
    return Dish;
}());

var RestaurantTable = /** @class */ (function () {
    function RestaurantTable(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    RestaurantTable.prototype.init = function (data) {
        if (data) {
            this.tablenr = data["tablenr"];
            this.id = data["id"];
        }
    };
    RestaurantTable.fromJS = function (data) {
        data = typeof data === 'object' ? data : {};
        var result = new RestaurantTable();
        result.init(data);
        return result;
    };
    RestaurantTable.prototype.toJSON = function (data) {
        data = typeof data === 'object' ? data : {};
        data["tablenr"] = this.tablenr;
        data["id"] = this.id;
        return data;
    };
    return RestaurantTable;
}());

var KitchenOrder = /** @class */ (function () {
    function KitchenOrder(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    KitchenOrder.prototype.init = function (data) {
        if (data) {
            this.orderId = data["orderId"];
            this.dishId = data["dishId"];
        }
    };
    KitchenOrder.fromJS = function (data) {
        data = typeof data === 'object' ? data : {};
        var result = new KitchenOrder();
        result.init(data);
        return result;
    };
    KitchenOrder.prototype.toJSON = function (data) {
        data = typeof data === 'object' ? data : {};
        data["orderId"] = this.orderId;
        data["dishId"] = this.dishId;
        return data;
    };
    return KitchenOrder;
}());

var SwaggerException = /** @class */ (function (_super) {
    __extends(SwaggerException, _super);
    function SwaggerException(message, status, response, headers, result) {
        var _this = _super.call(this) || this;
        _this.isSwaggerException = true;
        _this.message = message;
        _this.status = status;
        _this.response = response;
        _this.headers = headers;
        _this.result = result;
        return _this;
    }
    SwaggerException.isSwaggerException = function (obj) {
        return obj.isSwaggerException === true;
    };
    return SwaggerException;
}(Error));

function throwException(message, status, response, headers, result) {
    return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(new SwaggerException(message, status, response, headers, result));
}
function blobToText(blob) {
    return new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](function (observer) {
        if (!blob) {
            observer.next("");
            observer.complete();
        }
        else {
            var reader = new FileReader();
            reader.onload = function () {
                observer.next(this.result);
                observer.complete();
            };
            reader.readAsText(blob);
        }
    });
}


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
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


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
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]);


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\DDC2018\Source\SvcFabricDinnerDemo\AngularClient\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map