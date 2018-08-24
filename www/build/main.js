webpackJsonp([3],{

/***/ 134:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeDosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__agregar_agregar__ = __webpack_require__(246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_firestore__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__page_dos_page_dos__ = __webpack_require__(254);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the HomeDosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HomeDosPage = /** @class */ (function () {
    function HomeDosPage(afs, modalCtrl, navCtrl) {
        this.afs = afs;
        this.modalCtrl = modalCtrl;
        this.navCtrl = navCtrl;
        this.itemsCollection = afs.collection('platillos');
        this.platillos = this.itemsCollection.snapshotChanges().pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["map"])(function (actions) { return actions.map(function (a) {
            var data = a.payload.doc.data();
            var id = a.payload.doc.id;
            return __assign({ id: id }, data);
        }); }));
    }
    HomeDosPage.prototype.openModal = function () {
        var profileModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__agregar_agregar__["a" /* AgregarPage */]);
        profileModal.present();
    };
    HomeDosPage.prototype.bebidas = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__page_dos_page_dos__["a" /* PageDosPage */]);
    };
    HomeDosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home-dos',template:/*ion-inline-start:"/Users/Abigail/Desktop/firepic/src/pages/home-dos/home-dos.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>\n      Platillos\n    </ion-title>\n  <button (click)="bebidas()" ion-button icon-only>\n    <ion-icon class="arriba" name="md-beer"></ion-icon>\n  </button>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-list *ngFor="let platillo of platillos | async">\n    <ion-item>\n      <ion-thumbnail item-start>\n        <img src={{platillo.img}}>\n      </ion-thumbnail>\n      <h2>{{platillo.Nombre}}</h2>\n      <p>{{platillo.Sabor}}</p>\n      <p>{{platillo.Precio}}</p>\n      <button ion-button clear item-end>View</button>\n    </ion-item>\n  </ion-list>\n\n  <button ion-button color="primary" item-end (click)="openModal()" block>Agregar platillos</button>\n\n</ion-content>\n'/*ion-inline-end:"/Users/Abigail/Desktop/firepic/src/pages/home-dos/home-dos.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4_angularfire2_firestore__["a" /* AngularFirestore */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_angularfire2_firestore__["a" /* AngularFirestore */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* ModalController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* ModalController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" && _c || Object])
    ], HomeDosPage);
    return HomeDosPage;
    var _a, _b, _c;
}());

//# sourceMappingURL=home-dos.js.map

/***/ }),

/***/ 135:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FirebaseServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(247);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(460);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the FirebaseServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var FirebaseServiceProvider = /** @class */ (function () {
    function FirebaseServiceProvider(http) {
        this.http = http;
        console.log('Hello FirebaseServiceProvider Provider');
    }
    FirebaseServiceProvider.prototype.uploadImage = function (imageURI) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var storageRef = __WEBPACK_IMPORTED_MODULE_2_firebase__["storage"]().ref();
            var imageRef = storageRef.child('platillos');
            _this.encodeImageUri(imageURI, function (image64) {
                imageRef.putString(image64, 'data_url')
                    .then(function (snapshot) {
                    resolve(snapshot.downloadURL);
                }, function (err) {
                    reject(err);
                });
            });
        });
    };
    FirebaseServiceProvider.prototype.encodeImageUri = function (imageUri, callback) {
        var c = document.createElement('canvas');
        var ctx = c.getContext("2d");
        var img = new Image();
        img.onload = function () {
            var aux = this;
            c.width = aux.width;
            c.height = aux.height;
            ctx.drawImage(img, 0, 0);
            var dataURL = c.toDataURL("image/jpeg");
            callback(dataURL);
        };
        img.src = imageUri;
    };
    ;
    FirebaseServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], FirebaseServiceProvider);
    return FirebaseServiceProvider;
}());

//# sourceMappingURL=firebase-service.js.map

/***/ }),

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BebidasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators__ = __webpack_require__(13);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the BebidasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var BebidasPage = /** @class */ (function () {
    function BebidasPage(afs) {
        this.afs = afs;
        this.itemsCollection = afs.collection('bebidas');
        this.bebidas = this.itemsCollection.snapshotChanges().pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["map"])(function (actions) { return actions.map(function (a) {
            var data = a.payload.doc.data();
            var id = a.payload.doc.id;
            return __assign({ id: id }, data);
        }); }));
    }
    BebidasPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-bebidas',template:/*ion-inline-start:"/Users/Abigail/Desktop/firepic/src/pages/bebidas/bebidas.html"*/'<!--\n  Generated template for the BebidasPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Bebidas</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list *ngFor="let bebida of bebidas | async">\n    <ion-item>\n      <ion-thumbnail item-start>\n        <img src={{bebida.img}}>\n      </ion-thumbnail>\n      <h2>{{bebida.Nombre}}</h2>\n      <p>{{bebida.Sabor}}</p>\n        <p>{{bebida.Precio}}</p>\n      <button ion-button clear item-end>View</button>\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/Abigail/Desktop/firepic/src/pages/bebidas/bebidas.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__["a" /* AngularFirestore */]])
    ], BebidasPage);
    return BebidasPage;
}());

//# sourceMappingURL=bebidas.js.map

/***/ }),

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_dos_home_dos__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tabs_tabs__ = __webpack_require__(298);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
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





var LoginPage = /** @class */ (function () {
    function LoginPage(afAuth, navCtrl, navParams, vc) {
        this.afAuth = afAuth;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.vc = vc;
        this.user = {};
    }
    LoginPage.prototype.register = function (user) {
        return __awaiter(this, void 0, void 0, function () {
            var result, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password)];
                    case 1:
                        result = _a.sent();
                        if (result) {
                            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_dos_home_dos__["a" /* HomeDosPage */]);
                            this.vc.dismiss();
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        e_1 = _a.sent();
                        console.error(e_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    LoginPage.prototype.login = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__tabs_tabs__["a" /* TabsPage */]);
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/Users/Abigail/Desktop/firepic/src/pages/login/login.html"*/'<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Login</ion-title>\n  </ion-navbar>\n</ion-header>\n\n  <ion-content padding>\n    \n    <ion-item>\n      <ion-label floating>Email:</ion-label>\n      <ion-input type="text" [(ngModel)]="user.email"></ion-input>\n    </ion-item>\n  \n    <ion-item>\n      <ion-label floating>Contraseña:</ion-label>\n      <ion-input type="password" [(ngModel)]="user.password"></ion-input>\n    </ion-item>\n  \n    <button ion-button (click)="login()">Solo Ver</button>\n    <button ion-button color="light" (click)="register(user)">Login</button>\n  </ion-content>\n\n'/*ion-inline-end:"/Users/Abigail/Desktop/firepic/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ViewController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ViewController */]) === "function" && _d || Object])
    ], LoginPage);
    return LoginPage;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 196:
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
webpackEmptyAsyncContext.id = 196;

/***/ }),

/***/ 238:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/bebidas/bebidas.module": [
		496,
		2
	],
	"../pages/login/login.module": [
		497,
		1
	],
	"../pages/tabs/tabs.module": [
		498,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 238;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 246:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AgregarPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_firebase_service_firebase_service__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_storage__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_image_picker__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_operators__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_camera__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_whatwg_fetch__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_whatwg_fetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_whatwg_fetch__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//plugins angularfire2







var AgregarPage = /** @class */ (function () {
    function AgregarPage(afs, viewCtrl, navParams, toastCtrl, imagePicker, firebaseServiceProvider, platform, camera, fireStorage) {
        this.afs = afs;
        this.viewCtrl = viewCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.imagePicker = imagePicker;
        this.firebaseServiceProvider = firebaseServiceProvider;
        this.platform = platform;
        this.camera = camera;
        this.fireStorage = fireStorage;
        //Miniatura de la Imagen
        this.imagePreview = "";
    }
    AgregarPage.prototype.agregarPlatillo = function () {
        console.log("platillo agregado");
        this.itemsCollection = this.afs.collection('platillos');
        /* this.platillos = this.itemsCollection.snapshotChanges().pipe(
           map(actions => actions.map(a => {
             const data = a.payload.doc.data() as Platillo;
             const id = a.payload.doc.id;
             return { id, ...data };
           }))
         ); */
        var id = this.afs.createId();
        if (this.nombre != null && this.Sabor != null && this.img != null && this.Precio != null) {
            var plato = { 'Nombre': this.nombre, 'Sabor': this.Sabor, 'img': this.img, 'Precio': this.Precio };
            console.table(plato);
            this.afs.collection('platillos').doc(id).set(plato);
            this.presentToast('Platillo creado exitosamente');
            this.viewCtrl.dismiss();
        }
        else {
            this.presentToastError();
        }
    };
    AgregarPage.prototype.presentToastError = function () {
        var toast = this.toastCtrl.create({
            message: 'Faltan campos por llenar!',
            duration: 1000
        });
        toast.present();
    };
    AgregarPage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    AgregarPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AgregarPage');
    };
    AgregarPage.prototype.agregarPlatillo2 = function () {
        var _this = this;
        console.log("platillo agregado");
        this.itemsCollection = this.afs.collection('platillo');
        /* this.platillos = this.itemsCollection.snapshotChanges().pipe(
           map(actions => actions.map(a => {
             const data = a.payload.doc.data() as Platillo;
             const id = a.payload.doc.id;
             return { id, ...data };
           }))
         ); */
        var id = this.afs.createId(); //Crea un ID automáticamente
        //El registro debe ser completo
        if (this.nombre != null && this.Sabor != null && this.img != null) {
            //Cargando la imagen en el servidor
            var file = this.imagePreview;
            var filePath = '/platillos/' + this.nombre;
            var fileRef_1 = this.fireStorage.ref(filePath);
            //Carga de imagen por funcion "upload"
            var task = this.fireStorage.upload(filePath, file);
            this.presentToast("Cargando imagen...");
            // Mostrando el porcentage de carga
            this.uploadPercent = task.percentageChanges();
            // cuando el URL de descarga se encuentra disponible
            task.snapshotChanges().pipe(Object(__WEBPACK_IMPORTED_MODULE_6_rxjs_operators__["finalize"])(function () {
                _this.downloadURL = fileRef_1.getDownloadURL();
                _this.downloadURL.subscribe(function (imgURL) {
                    //console.log("imgURL: " + imgURL);
                    _this.img = imgURL;
                    //La imagen ya se encuentra disponible (deberia)
                    //Creando arreglo/objeto para su posterior envío
                    var id = _this.afs.createId();
                    if (_this.nombre != null && _this.Sabor != null && _this.img != null && _this.Precio != null) {
                        var plato = { 'Nombre': _this.nombre, 'Sabor': _this.Sabor, 'img': _this.img, 'Precio': _this.Precio };
                        console.table(plato);
                        _this.afs.collection('platillos').doc(id).set(plato);
                        _this.presentToast('Platillo creado exitosamente');
                        _this.viewCtrl.dismiss();
                    }
                    else {
                        _this.presentToastError();
                    }
                }, function (err) {
                    console.log("Error al cargar", err);
                    _this.presentToast("¡La imagen no pudo subirse!");
                });
            }))
                .subscribe();
        }
        else {
            //El registro no es completo
            this.presentToast("¡Platillo Incompleto!");
        }
    };
    AgregarPage.prototype.selectImageCamera = function (src) {
        var _this = this;
        //Formato de la imagen a tomar
        var config = {
            quality: 50,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            saveToPhotoAlbum: true,
            mediaType: this.camera.MediaType.PICTURE,
            sourceType: src // 0 = Galeria, 1 = Camara
        };
        //Promesa: Sí se pudo tomar la foto con la configuración indicada..
        this.camera.getPicture(config).then(function (imageData) {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64 (DATA_URL):
            _this.imagePreview = 'data:image/jpeg;base64,' + imageData;
            _this.imagen64 = imageData;
            _this.uploadFile(imageData);
        }, function (err) {
            console.log("Error en cámara", JSON.stringify(err));
            _this.presentToast("¡No se pudo tomar la foto!");
        });
    };
    //Función de Galería
    AgregarPage.prototype.selectImageGallery = function () {
        var _this = this;
        //Configuración de la imagen
        var conf = {
            quality: 50,
            outputType: 1,
            maximumImagesCount: 1
        };
        //Promesa: sí logra tomar una foto con la configuración dada...
        this.imagePicker.getPictures(conf).then(function (results) {
            for (var i = 0; i < results.length; i++) {
                // console.log('Image URI: ' + results[i]);
                _this.imagePreview = 'data:image/jpeg;base64,' + results[i];
                _this.imagen64 = results[i];
            }
        }, function (err) {
            console.log("ERROR: la imagen no es valida: ", JSON.stringify(err));
            _this.presentToast('¡La imagen no es válida!');
        });
    };
    //Carga Asicnrona de imagenes (funciona junto a un <input type ="file">)
    AgregarPage.prototype.uploadFile = function (event) {
        var _this = this;
        var file = event.target.files[0];
        var filePath = '/platillos/' + this.nombre;
        var fileRef = this.fireStorage.ref(filePath);
        var task = this.fireStorage.upload(filePath, file);
        // observe percentage changes
        this.uploadPercent = task.percentageChanges();
        // get notified when the download URL is available
        task.snapshotChanges().pipe(Object(__WEBPACK_IMPORTED_MODULE_6_rxjs_operators__["finalize"])(function () {
            _this.downloadURL = fileRef.getDownloadURL();
            //Tomando la URL tras descargarla
            _this.downloadURL.subscribe(function (imgURL) {
                //console.log("imgURL: " + imgURL);
                _this.img = imgURL;
            });
        }))
            .subscribe();
    };
    AgregarPage.prototype.presentToast = function (message) {
        var toast = this.toastCtrl.create({
            message: '' + message,
            duration: 4000,
            position: 'bottom'
        });
        toast.present();
    };
    AgregarPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-agregar',template:/*ion-inline-start:"/Users/Abigail/Desktop/firepic/src/pages/agregar/agregar.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Agregar platillo</ion-title>\n    \n\n    <button ion-button clear item-end (tap)="close()">Cerrar</button>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n    <ion-list no-lines>\n    \n      <ion-item>\n        <ion-label fixed>Nombre</ion-label>\n        <ion-input [(ngModel)]="Nombre" type="text" value=""></ion-input>\n      </ion-item>\n    \n      <ion-item>\n        <ion-label fixed>Sabor</ion-label>\n        <ion-input [(ngModel)]="Sabor" type="text"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label fixed>Precio</ion-label>\n        <ion-input [(ngModel)]="Precio" type="number"></ion-input>\n      </ion-item>\n    \n      <ion-item *ngIf="imagePreview">\n        <img [src]="imagePreview">\n        <div>{{ uploadPercent | async }}</div>\n        <a [href]="downloadURL | async">{{ downloadURL | async }}</a>\n      </ion-item>\n\n      <ion-item> \n        <ion-label fixed>Imagen</ion-label>\n        <button ion-button item-end large (click)="selectImageCamera(1)"><ion-icon name="camera"></ion-icon></button>\n        <button ion-button item-end large (click)="selectImageGallery()"><ion-icon name="images"></ion-icon></button>\n      </ion-item>\n    \n      <ion-item *ngFor="let item of assetCollection ; trackBy:trackByFunctison">\n        <img [src]=item.URL width="180px" class="padding">\n      </ion-item>\n\n      <br>\n\n    <input type="file" accept="image/*" (change)="uploadFile($event)" />\n    <div>{{ uploadPercent | async }}</div>\n     <a [href]="downloadURL | async">URL: {{ downloadURL | async }}</a> \n    \n\n    <br>\n\n      <button ion-button block (tap)="agregarPlatillo2()">Agregar</button>\n    \n    </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/Users/Abigail/Desktop/firepic/src/pages/agregar/agregar.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__["a" /* AngularFirestore */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__["a" /* AngularFirestore */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ViewController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ViewController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ToastController */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__ionic_native_image_picker__["a" /* ImagePicker */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__ionic_native_image_picker__["a" /* ImagePicker */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_3__providers_firebase_service_firebase_service__["a" /* FirebaseServiceProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_firebase_service_firebase_service__["a" /* FirebaseServiceProvider */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_7__ionic_native_camera__["a" /* Camera */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__ionic_native_camera__["a" /* Camera */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_4_angularfire2_storage__["a" /* AngularFireStorage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_angularfire2_storage__["a" /* AngularFireStorage */]) === "function" && _j || Object])
    ], AgregarPage);
    return AgregarPage;
    var _a, _b, _c, _d, _e, _f, _g, _h, _j;
}());

//# sourceMappingURL=agregar.js.map

/***/ }),

/***/ 254:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageDosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__agregar_bebida_agregar_bebida__ = __webpack_require__(255);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the PageDosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PageDosPage = /** @class */ (function () {
    function PageDosPage(afs, modalCtrl, navCtrl) {
        this.afs = afs;
        this.modalCtrl = modalCtrl;
        this.navCtrl = navCtrl;
        this.itemsCollection = afs.collection('bebidas');
        this.bebidas = this.itemsCollection.snapshotChanges().pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["map"])(function (actions) { return actions.map(function (a) {
            var data = a.payload.doc.data();
            var id = a.payload.doc.id;
            return __assign({ id: id }, data);
        }); }));
    }
    PageDosPage.prototype.openModa = function () {
        var profileModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__agregar_bebida_agregar_bebida__["a" /* AgregarBebidaPage */]);
        profileModal.present();
    };
    PageDosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-page-dos',template:/*ion-inline-start:"/Users/Abigail/Desktop/firepic/src/pages/page-dos/page-dos.html"*/'<!--\n  Generated template for the PageDosPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Bebidas</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list *ngFor="let bebida of bebidas | async">\n    <ion-item>\n      <ion-thumbnail item-start>\n        <img src={{bebida.img}}>\n      </ion-thumbnail>\n      <h2>{{bebida.Nombre}}</h2>\n      <p>{{bebida.Sabor}}</p>\n      <p>{{bebida.Precio}}</p>\n      <button ion-button clear item-end>View</button>\n    </ion-item>\n  </ion-list>\n  <button ion-button color="primary" item-end (click)="openModa()" block>Agregar Bebidas</button>\n</ion-content>\n'/*ion-inline-end:"/Users/Abigail/Desktop/firepic/src/pages/page-dos/page-dos.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__["a" /* AngularFirestore */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], PageDosPage);
    return PageDosPage;
}());

//# sourceMappingURL=page-dos.js.map

/***/ }),

/***/ 255:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AgregarBebidaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_firebase_service_firebase_service__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_storage__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_image_picker__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_operators__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_camera__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_whatwg_fetch__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_whatwg_fetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_whatwg_fetch__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









/**
 * Generated class for the AgregarBebidaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AgregarBebidaPage = /** @class */ (function () {
    function AgregarBebidaPage(afs, viewCtrl, navParams, toastCtrl, imagePicker, firebaseServiceProvider, platform, camera, fireStorage) {
        this.afs = afs;
        this.viewCtrl = viewCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.imagePicker = imagePicker;
        this.firebaseServiceProvider = firebaseServiceProvider;
        this.platform = platform;
        this.camera = camera;
        this.fireStorage = fireStorage;
        //Miniatura de la Imagen
        this.imagePreview = "";
    }
    AgregarBebidaPage.prototype.agregarBebida = function () {
        console.log("bebida agregada");
        this.itemsCollection = this.afs.collection('bebidas');
        /* this.platillos = this.itemsCollection.snapshotChanges().pipe(
           map(actions => actions.map(a => {
             const data = a.payload.doc.data() as Platillo;
             const id = a.payload.doc.id;
             return { id, ...data };
           }))
         ); */
        var id = this.afs.createId();
        if (this.nombre != null && this.Sabor != null && this.img != null && this.Precio != null) {
            var plato = { 'Nombre': this.nombre, 'Sabor': this.Sabor, 'img': this.img, 'Precio': this.Precio };
            console.table(plato);
            this.afs.collection('bebidas').doc(id).set(plato);
            this.presentToast('Bebida creada exitosamente');
            this.viewCtrl.dismiss();
        }
        else {
            this.presentToastError();
        }
    };
    AgregarBebidaPage.prototype.presentToastError = function () {
        var toast = this.toastCtrl.create({
            message: 'Faltan campos por llenar!',
            duration: 1000
        });
        toast.present();
    };
    AgregarBebidaPage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    AgregarBebidaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AgregarPage');
    };
    AgregarBebidaPage.prototype.agregarBebida2 = function () {
        var _this = this;
        console.log("bebida agregada");
        this.itemsCollection = this.afs.collection('bebida');
        /* this.platillos = this.itemsCollection.snapshotChanges().pipe(
           map(actions => actions.map(a => {
             const data = a.payload.doc.data() as Platillo;
             const id = a.payload.doc.id;
             return { id, ...data };
           }))
         ); */
        var id = this.afs.createId(); //Crea un ID automáticamente
        //El registro debe ser completo
        if (this.nombre != null && this.Sabor != null && this.img != null) {
            //Cargando la imagen en el servidor
            var file = this.imagePreview;
            var filePath = '/bebidas/' + this.nombre;
            var fileRef_1 = this.fireStorage.ref(filePath);
            //Carga de imagen por funcion "upload"
            var task = this.fireStorage.upload(filePath, file);
            this.presentToast("Cargando imagen...");
            // Mostrando el porcentage de carga
            this.uploadPercent = task.percentageChanges();
            // cuando el URL de descarga se encuentra disponible
            task.snapshotChanges().pipe(Object(__WEBPACK_IMPORTED_MODULE_6_rxjs_operators__["finalize"])(function () {
                _this.downloadURL = fileRef_1.getDownloadURL();
                _this.downloadURL.subscribe(function (imgURL) {
                    //console.log("imgURL: " + imgURL);
                    _this.img = imgURL;
                    //La imagen ya se encuentra disponible (deberia)
                    //Creando arreglo/objeto para su posterior envío
                    var id = _this.afs.createId();
                    if (_this.nombre != null && _this.Sabor != null && _this.img != null && _this.Precio != null) {
                        var plato = { 'Nombre': _this.nombre, 'Sabor': _this.Sabor, 'img': _this.img, 'Precio': _this.Precio };
                        console.table(plato);
                        _this.afs.collection('bebidas').doc(id).set(plato);
                        _this.presentToast('Bebida creada exitosamente');
                        _this.viewCtrl.dismiss();
                    }
                    else {
                        _this.presentToastError();
                    }
                }, function (err) {
                    console.log("Error al cargar", err);
                    _this.presentToast("¡La imagen no pudo subirse!");
                });
            }))
                .subscribe();
        }
        else {
            //El registro no es completo
            this.presentToast("¡Bebida Incompleta!");
        }
    };
    AgregarBebidaPage.prototype.selectImageCamera = function (src) {
        var _this = this;
        //Formato de la imagen a tomar
        var config = {
            quality: 50,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            saveToPhotoAlbum: true,
            mediaType: this.camera.MediaType.PICTURE,
            sourceType: src // 0 = Galeria, 1 = Camara
        };
        //Promesa: Sí se pudo tomar la foto con la configuración indicada..
        this.camera.getPicture(config).then(function (imageData) {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64 (DATA_URL):
            _this.imagePreview = 'data:image/jpeg;base64,' + imageData;
            _this.imagen64 = imageData;
            _this.uploadFile(imageData);
        }, function (err) {
            console.log("Error en cámara", JSON.stringify(err));
            _this.presentToast("¡No se pudo tomar la foto!");
        });
    };
    //Función de Galería
    AgregarBebidaPage.prototype.selectImageGallery = function () {
        var _this = this;
        //Configuración de la imagen
        var conf = {
            quality: 50,
            outputType: 1,
            maximumImagesCount: 1
        };
        //Promesa: sí logra tomar una foto con la configuración dada...
        this.imagePicker.getPictures(conf).then(function (results) {
            for (var i = 0; i < results.length; i++) {
                // console.log('Image URI: ' + results[i]);
                _this.imagePreview = 'data:image/jpeg;base64,' + results[i];
                _this.imagen64 = results[i];
            }
        }, function (err) {
            console.log("ERROR: la imagen no es valida: ", JSON.stringify(err));
            _this.presentToast('¡La imagen no es válida!');
        });
    };
    //Carga Asicnrona de imagenes (funciona junto a un <input type ="file">)
    AgregarBebidaPage.prototype.uploadFile = function (event) {
        var _this = this;
        var file = event.target.files[0];
        var filePath = '/bebidas/' + this.nombre;
        var fileRef = this.fireStorage.ref(filePath);
        var task = this.fireStorage.upload(filePath, file);
        // observe percentage changes
        this.uploadPercent = task.percentageChanges();
        // get notified when the download URL is available
        task.snapshotChanges().pipe(Object(__WEBPACK_IMPORTED_MODULE_6_rxjs_operators__["finalize"])(function () {
            _this.downloadURL = fileRef.getDownloadURL();
            //Tomando la URL tras descargarla
            _this.downloadURL.subscribe(function (imgURL) {
                //console.log("imgURL: " + imgURL);
                _this.img = imgURL;
            });
        }))
            .subscribe();
    };
    AgregarBebidaPage.prototype.presentToast = function (message) {
        var toast = this.toastCtrl.create({
            message: '' + message,
            duration: 4000,
            position: 'bottom'
        });
        toast.present();
    };
    AgregarBebidaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-agregar-bebida',template:/*ion-inline-start:"/Users/Abigail/Desktop/firepic/src/pages/agregar-bebida/agregar-bebida.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Agregar Bebidas</ion-title>\n\n\n    <button ion-button clear item-end (tap)="close()">Cerrar</button>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-list no-lines>\n\n    <ion-item>\n      <ion-label fixed>Nombre</ion-label>\n      <ion-input [(ngModel)]="Nombre" type="text" value=""></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label fixed>Sabor</ion-label>\n      <ion-input [(ngModel)]="Sabor" type="text"></ion-input>\n    </ion-item>\n\n    <ion-item *ngIf="imagePreview">\n      <img [src]="imagePreview">\n      <div>{{ uploadPercent | async }}</div>\n      <a [href]="downloadURL | async">{{ downloadURL | async }}</a>\n    </ion-item>\n\n    <ion-item>\n      <ion-label fixed>Imagen</ion-label>\n      <button ion-button item-end large (click)="selectImageCamera(1)"><ion-icon name="camera"></ion-icon></button>\n      <button ion-button item-end large (click)="selectImageGallery()"><ion-icon name="images"></ion-icon></button>\n    </ion-item>\n\n    <ion-item *ngFor="let item of assetCollection ; trackBy:trackByFunctison">\n      <img [src]=item.URL width="180px" class="padding">\n    </ion-item>\n\n    <br>\n\n    <input type="file" accept="image/*" (change)="uploadFile($event)" />\n    <div>{{ uploadPercent | async }}</div>\n    <a [href]="downloadURL | async">URL: {{ downloadURL | async }}</a>\n\n\n    <br>\n\n    <button ion-button block (tap)="agregarBebida2()">Agregar</button>\n\n  </ion-list>\n\n</ion-content>'/*ion-inline-end:"/Users/Abigail/Desktop/firepic/src/pages/agregar-bebida/agregar-bebida.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__["a" /* AngularFirestore */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__["a" /* AngularFirestore */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ViewController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ViewController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ToastController */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__ionic_native_image_picker__["a" /* ImagePicker */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__ionic_native_image_picker__["a" /* ImagePicker */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_3__providers_firebase_service_firebase_service__["a" /* FirebaseServiceProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_firebase_service_firebase_service__["a" /* FirebaseServiceProvider */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_7__ionic_native_camera__["a" /* Camera */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__ionic_native_camera__["a" /* Camera */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_4_angularfire2_storage__["a" /* AngularFireStorage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_angularfire2_storage__["a" /* AngularFireStorage */]) === "function" && _j || Object])
    ], AgregarBebidaPage);
    return AgregarBebidaPage;
    var _a, _b, _c, _d, _e, _f, _g, _h, _j;
}());

//# sourceMappingURL=agregar-bebida.js.map

/***/ }),

/***/ 256:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login__ = __webpack_require__(163);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomePage = /** @class */ (function () {
    function HomePage(afs, modalCtrl) {
        this.afs = afs;
        this.modalCtrl = modalCtrl;
        this.principal = __WEBPACK_IMPORTED_MODULE_4__login_login__["a" /* LoginPage */];
        this.itemsCollection = afs.collection('platillos');
        this.platillos = this.itemsCollection.snapshotChanges().pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["map"])(function (actions) { return actions.map(function (a) {
            var data = a.payload.doc.data();
            var id = a.payload.doc.id;
            return __assign({ id: id }, data);
        }); }));
    }
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/Abigail/Desktop/firepic/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>\n      Platillos\n    </ion-title>\n    <ion-icon class="user" name="ios-contact" [navPush]="principal"></ion-icon>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  \n  <ion-list *ngFor="let platillo of platillos | async">\n    <ion-item>\n      <ion-thumbnail item-start>\n        <img src={{platillo.img}}>\n      </ion-thumbnail>\n      <h2>{{platillo.Nombre}}</h2>\n      <p>{{platillo.Sabor}}</p>\n      <p>{{platillo.Precio}}</p>\n      <button ion-button clear item-end>View</button>\n    </ion-item>\n  </ion-list>\n\n \n</ion-content>\n'/*ion-inline-end:"/Users/Abigail/Desktop/firepic/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__["a" /* AngularFirestore */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* ModalController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 298:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bebidas_bebidas__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(256);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the TabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TabsPage = /** @class */ (function () {
    function TabsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.tab1 = __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */];
        this.tab2 = __WEBPACK_IMPORTED_MODULE_2__bebidas_bebidas__["a" /* BebidasPage */];
    }
    TabsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TabsPage');
    };
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tabs',template:/*ion-inline-start:"/Users/Abigail/Desktop/firepic/src/pages/tabs/tabs.html"*/'<ion-tabs color="primary">\n  <ion-tab tabTitle="Platillos" tabIcon="restaurant" [root]="tab1"></ion-tab>\n  <ion-tab tabTitle="Bebidas" tabIcon="beer" [root]="tab2"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/Users/Abigail/Desktop/firepic/src/pages/tabs/tabs.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 299:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(300);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(422);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 422:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(296);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(493);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_bebidas_bebidas__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_agregar_agregar__ = __webpack_require__(246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_camera__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_image_picker__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_common_http__ = __webpack_require__(247);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_angularfire2_firestore__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_angularfire2_storage__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__environments_environment__ = __webpack_require__(494);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_firebase_service_firebase_service__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_agregar_dos_agregar_dos__ = __webpack_require__(495);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_home_dos_home_dos__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_login_login__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_angularfire2__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_angularfire2_auth__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_page_dos_page_dos__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_agregar_bebida_agregar_bebida__ = __webpack_require__(255);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





//pages





//plugins



//plugins angularfire2
//import { AngularFireModule } from 'angularfire2';





//import { BebidasDosPage } from '../pages/bebidas-dos/bebidas-dos';






var FIREBASE_CREDENTIALS = {
    apiKey: "AIzaSyBKMAzT7fVFZ5BZ9boebFeW1aH7wiEpRyo",
    authDomain: "firepic-c3965.firebaseapp.com",
    databaseURL: "https://firepic-c3965.firebaseio.com",
    projectId: "firepic-c3965",
    storageBucket: "firepic-c3965.appspot.com",
    messagingSenderId: "1025646433878"
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_bebidas_bebidas__["a" /* BebidasPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_agregar_agregar__["a" /* AgregarPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_agregar_dos_agregar_dos__["a" /* AgregarDosPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_agregar_bebida_agregar_bebida__["a" /* AgregarBebidaPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_home_dos_home_dos__["a" /* HomeDosPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_page_dos_page_dos__["a" /* PageDosPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_13_angularfire2_firestore__["b" /* AngularFirestoreModule */],
                __WEBPACK_IMPORTED_MODULE_14_angularfire2_storage__["b" /* AngularFireStorageModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/bebidas/bebidas.module#BebidasPageModule', name: 'BebidasPage', segment: 'bebidas', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tabs/tabs.module#TabsPageModule', name: 'TabsPage', segment: 'tabs', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_20_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_15__environments_environment__["a" /* environment */].firebase),
                __WEBPACK_IMPORTED_MODULE_20_angularfire2__["a" /* AngularFireModule */].initializeApp(FIREBASE_CREDENTIALS),
                __WEBPACK_IMPORTED_MODULE_21_angularfire2_auth__["b" /* AngularFireAuthModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_bebidas_bebidas__["a" /* BebidasPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_agregar_agregar__["a" /* AgregarPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_agregar_dos_agregar_dos__["a" /* AgregarDosPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_agregar_bebida_agregar_bebida__["a" /* AgregarBebidaPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_home_dos_home_dos__["a" /* HomeDosPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_page_dos_page_dos__["a" /* PageDosPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_16__providers_firebase_service_firebase_service__["a" /* FirebaseServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_image_picker__["a" /* ImagePicker */],
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_camera__["a" /* Camera */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 493:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(296);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(163);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/Abigail/Desktop/firepic/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/Abigail/Desktop/firepic/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]) === "function" && _c || Object])
    ], MyApp);
    return MyApp;
    var _a, _b, _c;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 494:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true,
    firebase: {
        apiKey: "AIzaSyBKMAzT7fVFZ5BZ9boebFeW1aH7wiEpRyo",
        authDomain: "firepic-c3965.firebaseapp.com",
        databaseURL: "https://firepic-c3965.firebaseio.com",
        projectId: "firepic-c3965",
        storageBucket: "firepic-c3965.appspot.com",
        messagingSenderId: "1025646433878"
    }
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 495:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AgregarDosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_image_picker__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_firebase_service_firebase_service__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_storage__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_operators__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_whatwg_fetch__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_whatwg_fetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_whatwg_fetch__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









/**
 * Generated class for the AgregarDosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AgregarDosPage = /** @class */ (function () {
    function AgregarDosPage(afs, viewCtrl, navParams, toastCtrl, imagePicker, firebaseServiceProvider, platform, camera, fireStorage) {
        this.afs = afs;
        this.viewCtrl = viewCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.imagePicker = imagePicker;
        this.firebaseServiceProvider = firebaseServiceProvider;
        this.platform = platform;
        this.camera = camera;
        this.fireStorage = fireStorage;
        //Miniatura de la Imagen
        this.imagePreview = "";
    }
    AgregarDosPage.prototype.agregarBebidas = function () {
        console.log("bebida agregado");
        this.itemsCollection = this.afs.collection('bebidas');
        /* this.platillos = this.itemsCollection.snapshotChanges().pipe(
           map(actions => actions.map(a => {
             const data = a.payload.doc.data() as Platillo;
             const id = a.payload.doc.id;
             return { id, ...data };
           }))
         ); */
        var id = this.afs.createId();
        if (this.nombre != null && this.Sabor != null && this.img != null && this.Precio != null) {
            var plato = { 'Nombre': this.nombre, 'Sabor': this.Sabor, 'img': this.img, 'Precio': this.Precio };
            console.table(plato);
            this.afs.collection('bebidas').doc(id).set(plato);
            this.presentToast('Bebida creada exitosamente');
            this.viewCtrl.dismiss();
        }
        else {
            this.presentToastError();
        }
    };
    AgregarDosPage.prototype.presentToastError = function () {
        var toast = this.toastCtrl.create({
            message: 'Faltan campos por llenar!',
            duration: 1000
        });
        toast.present();
    };
    AgregarDosPage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    AgregarDosPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AgregarDosPage');
    };
    AgregarDosPage.prototype.agregarBebida2 = function () {
        var _this = this;
        console.log("bebida agregada");
        this.itemsCollection = this.afs.collection('bebida');
        /* this.platillos = this.itemsCollection.snapshotChanges().pipe(
           map(actions => actions.map(a => {
             const data = a.payload.doc.data() as Platillo;
             const id = a.payload.doc.id;
             return { id, ...data };
           }))
         ); */
        var id = this.afs.createId(); //Crea un ID automáticamente
        //El registro debe ser completo
        if (this.nombre != null && this.Sabor != null && this.img != null) {
            //Cargando la imagen en el servidor
            var file = this.imagePreview;
            var filePath = '/bebidas/' + this.nombre;
            var fileRef_1 = this.fireStorage.ref(filePath);
            //Carga de imagen por funcion "upload"
            var task = this.fireStorage.upload(filePath, file);
            this.presentToast("Cargando imagen...");
            // Mostrando el porcentage de carga
            this.uploadPercent = task.percentageChanges();
            // cuando el URL de descarga se encuentra disponible
            task.snapshotChanges().pipe(Object(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators__["finalize"])(function () {
                _this.downloadURL = fileRef_1.getDownloadURL();
                _this.downloadURL.subscribe(function (imgURL) {
                    //console.log("imgURL: " + imgURL);
                    _this.img = imgURL;
                    //La imagen ya se encuentra disponible (deberia)
                    //Creando arreglo/objeto para su posterior envío
                    var id = _this.afs.createId();
                    if (_this.nombre != null && _this.Sabor != null && _this.img != null && _this.Precio != null) {
                        var plato = { 'Nombre': _this.nombre, 'Sabor': _this.Sabor, 'img': _this.img, 'Precio': _this.Precio };
                        console.table(plato);
                        _this.afs.collection('bebidas').doc(id).set(plato);
                        _this.presentToast('Bebida creada exitosamente');
                        _this.viewCtrl.dismiss();
                    }
                    else {
                        _this.presentToastError();
                    }
                }, function (err) {
                    console.log("Error al cargar", err);
                    _this.presentToast("¡La imagen no pudo subirse!");
                });
            }))
                .subscribe();
        }
        else {
            //El registro no es completo
            this.presentToast("¡Bebida Incompleta!");
        }
    };
    AgregarDosPage.prototype.selectImageCamera = function (src) {
        var _this = this;
        //Formato de la imagen a tomar
        var config = {
            quality: 50,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            saveToPhotoAlbum: true,
            mediaType: this.camera.MediaType.PICTURE,
            sourceType: src // 0 = Galeria, 1 = Camara
        };
        //Promesa: Sí se pudo tomar la foto con la configuración indicada..
        this.camera.getPicture(config).then(function (imageData) {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64 (DATA_URL):
            _this.imagePreview = 'data:image/jpeg;base64,' + imageData;
            _this.imagen64 = imageData;
            _this.uploadFile(imageData);
        }, function (err) {
            console.log("Error en cámara", JSON.stringify(err));
            _this.presentToast("¡No se pudo tomar la foto!");
        });
    };
    //Función de Galería
    AgregarDosPage.prototype.selectImageGallery = function () {
        var _this = this;
        //Configuración de la imagen
        var conf = {
            quality: 50,
            outputType: 1,
            maximumImagesCount: 1
        };
        //Promesa: sí logra tomar una foto con la configuración dada...
        this.imagePicker.getPictures(conf).then(function (results) {
            for (var i = 0; i < results.length; i++) {
                // console.log('Image URI: ' + results[i]);
                _this.imagePreview = 'data:image/jpeg;base64,' + results[i];
                _this.imagen64 = results[i];
            }
        }, function (err) {
            console.log("ERROR: la imagen no es valida: ", JSON.stringify(err));
            _this.presentToast('¡La imagen no es válida!');
        });
    };
    //Carga Asicnrona de imagenes (funciona junto a un <input type ="file">)
    AgregarDosPage.prototype.uploadFile = function (event) {
        var _this = this;
        var file = event.target.files[0];
        var filePath = '/bebidas/' + this.nombre;
        var fileRef = this.fireStorage.ref(filePath);
        var task = this.fireStorage.upload(filePath, file);
        // observe percentage changes
        this.uploadPercent = task.percentageChanges();
        // get notified when the download URL is available
        task.snapshotChanges().pipe(Object(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators__["finalize"])(function () {
            _this.downloadURL = fileRef.getDownloadURL();
            //Tomando la URL tras descargarla
            _this.downloadURL.subscribe(function (imgURL) {
                //console.log("imgURL: " + imgURL);
                _this.img = imgURL;
            });
        }))
            .subscribe();
    };
    AgregarDosPage.prototype.presentToast = function (message) {
        var toast = this.toastCtrl.create({
            message: '' + message,
            duration: 4000,
            position: 'bottom'
        });
        toast.present();
    };
    AgregarDosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-agregar-dos',template:/*ion-inline-start:"/Users/Abigail/Desktop/firepic/src/pages/agregar-dos/agregar-dos.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Agregar bebidas</ion-title>\n\n\n    <button ion-button clear item-end (tap)="close()">Cerrar</button>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-list no-lines>\n\n    <ion-item>\n      <ion-label fixed>Nombre</ion-label>\n      <ion-input [(ngModel)]="Nombre" type="text" value=""></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label fixed>Sabor</ion-label>\n      <ion-input [(ngModel)]="Sabor" type="text"></ion-input>\n    </ion-item>\n\n    <ion-item *ngIf="imagePreview">\n      <img [src]="imagePreview">\n      <div>{{ uploadPercent | async }}</div>\n      <a [href]="downloadURL | async">{{ downloadURL | async }}</a>\n    </ion-item>\n\n    <ion-item>\n      <ion-label fixed>Imagen</ion-label>\n      <button ion-button item-end large (click)="selectImageCamera(1)"><ion-icon name="camera"></ion-icon></button>\n      <button ion-button item-end large (click)="selectImageGallery()"><ion-icon name="images"></ion-icon></button>\n    </ion-item>\n\n    <ion-item *ngFor="let item of assetCollection ; trackBy:trackByFunctison">\n      <img [src]=item.URL width="180px" class="padding">\n    </ion-item>\n\n    <br>\n\n    <input type="file" accept="image/*" (change)="uploadFile($event)" />\n    <div>{{ uploadPercent | async }}</div>\n    <a [href]="downloadURL | async">URL: {{ downloadURL | async }}</a>\n\n\n    <br>\n\n    <button ion-button block (tap)="agregarBebida2()">Agregar</button>\n\n  </ion-list>\n\n</ion-content>'/*ion-inline-end:"/Users/Abigail/Desktop/firepic/src/pages/agregar-dos/agregar-dos.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__["a" /* AngularFirestore */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_image_picker__["a" /* ImagePicker */],
            __WEBPACK_IMPORTED_MODULE_4__providers_firebase_service_firebase_service__["a" /* FirebaseServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_6_angularfire2_storage__["a" /* AngularFireStorage */]])
    ], AgregarDosPage);
    return AgregarDosPage;
}());

//# sourceMappingURL=agregar-dos.js.map

/***/ })

},[299]);
//# sourceMappingURL=main.js.map