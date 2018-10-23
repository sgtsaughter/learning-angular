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
/* harmony import */ var _components_todo_list_todo_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/todo-list/todo-list.component */ "./src/app/components/todo-list/todo-list.component.ts");
/* harmony import */ var _components_db_character_db_character_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/db-character/db-character.component */ "./src/app/components/db-character/db-character.component.ts");
/* harmony import */ var _components_db_character_detail_db_character_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/db-character-detail/db-character-detail.component */ "./src/app/components/db-character-detail/db-character-detail.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _services_auth_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/auth.guard */ "./src/app/services/auth.guard.ts");
/* harmony import */ var src_app_components_chat_chat_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/chat/chat.component */ "./src/app/components/chat/chat.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    {
        path: '',
        redirectTo: 'todo-list',
        pathMatch: 'full'
    },
    {
        path: 'todo-list',
        component: _components_todo_list_todo_list_component__WEBPACK_IMPORTED_MODULE_2__["TodoListComponent"],
        canActivate: [_services_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]]
    },
    {
        path: 'dbz',
        component: _components_db_character_db_character_component__WEBPACK_IMPORTED_MODULE_3__["DbCharacterComponent"]
    },
    {
        path: 'db-character/:id',
        component: _components_db_character_detail_db_character_detail_component__WEBPACK_IMPORTED_MODULE_4__["DbCharacterDetailComponent"]
    },
    {
        path: 'signup',
        component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"]
    },
    {
        path: 'chat',
        component: src_app_components_chat_chat_component__WEBPACK_IMPORTED_MODULE_7__["ChatComponent"]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _components_app_component_app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/app-component/app.component */ "./src/app/components/app-component/app.component.ts");
/* harmony import */ var _components_todo_list_todo_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/todo-list/todo-list.component */ "./src/app/components/todo-list/todo-list.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _components_db_character_db_character_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/db-character/db-character.component */ "./src/app/components/db-character/db-character.component.ts");
/* harmony import */ var _services_character_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/character.service */ "./src/app/services/character.service.ts");
/* harmony import */ var _components_db_character_detail_db_character_detail_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/db-character-detail/db-character-detail.component */ "./src/app/components/db-character-detail/db-character-detail.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var ngx_filter_pipe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-filter-pipe */ "./node_modules/ngx-filter-pipe/esm5/ngx-filter-pipe.js");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _services_auth_guard__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./services/auth.guard */ "./src/app/services/auth.guard.ts");
/* harmony import */ var _services_auth_services__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./services/auth.services */ "./src/app/services/auth.services.ts");
/* harmony import */ var _components_chat_chat_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/chat/chat.component */ "./src/app/components/chat/chat.component.ts");
/* harmony import */ var _services_socket_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./services/socket.service */ "./src/app/services/socket.service.ts");
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
                _components_app_component_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _components_todo_list_todo_list_component__WEBPACK_IMPORTED_MODULE_5__["TodoListComponent"],
                _components_db_character_db_character_component__WEBPACK_IMPORTED_MODULE_7__["DbCharacterComponent"],
                _components_db_character_detail_db_character_detail_component__WEBPACK_IMPORTED_MODULE_9__["DbCharacterDetailComponent"],
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_13__["LoginComponent"],
                _components_chat_chat_component__WEBPACK_IMPORTED_MODULE_16__["ChatComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_11__["ToastrModule"].forRoot(),
                ngx_filter_pipe__WEBPACK_IMPORTED_MODULE_12__["FilterPipeModule"],
            ],
            providers: [_services_character_service__WEBPACK_IMPORTED_MODULE_8__["CharacterService"], _services_auth_guard__WEBPACK_IMPORTED_MODULE_14__["AuthGuard"], _services_auth_services__WEBPACK_IMPORTED_MODULE_15__["AuthService"], _services_socket_service__WEBPACK_IMPORTED_MODULE_17__["SocketService"]],
            bootstrap: [_components_app_component_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/app-component/app.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/app-component/app.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/app-component/app.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/app-component/app.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"form-group\">\n    <h1>DB Character App</h1>\n    <!--<pre>\n      {{tokenInfo | json}}\n    </pre>\n    <div>{{tokenInfo.username}}</div>\n    <div>{{tokenInfo.gender}}</div>  -->\n    <ul class=\"nav nav-pills\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/dbz\" routerLinkActive=\"active\" href=\"#\">Dragon Ball</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/todo-list\" routerLinkActive=\"active\" href=\"#\">To Do List</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/signup\" routerLinkActive=\"active\" href=\"#\">Sign Up/Login</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/chat\" routerLinkActive=\"active\" href=\"#\">Chat</a>\n      </li>\n    </ul>\n  </div>\n</div>\n\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/components/app-component/app.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/app-component/app.component.ts ***!
  \***********************************************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/login.service */ "./src/app/services/login.service.ts");
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
    function AppComponent(loginService) {
        this.loginService = loginService;
        this.title = 'Angular Sandbox';
        this.tokenInfo = this.loginService.getUserDetails();
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/components/app-component/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/components/app-component/app.component.css")]
        }),
        __metadata("design:paramtypes", [_services_login_service__WEBPACK_IMPORTED_MODULE_1__["LoginService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/components/chat/chat.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/chat/chat.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".chat-window {\n    margin: 0;\n    padding: 0;\n    width: 100%;\n    height: 100%;\n  }\n  \n  .chat-window .col-xs-12.col-md-12 {\n    padding: 0;\n    height: 100%;\n  }\n  \n  /* line 13, ../sass/components/chat-window.scss */\n  \n  .chat-window .panel {\n    border: 0;\n    border-radius: 5px 5px 0 0;\n    margin-bottom: 0;\n    height: 100%;\n  }\n  \n  /* line 3, ../sass/components/chat-top-bar.scss */\n  \n  .chat-top-bar {\n    background: #666;\n    color: #fff;\n    overflow: hidden;\n    padding: 10px;\n    position: relative;\n    height: 70px;\n    max-height: 70px;\n    border-radius: 0;\n  }\n  \n  /* line 13, ../sass/components/chat-top-bar.scss */\n  \n  .chat-top-bar .icon-minim {\n    padding: 2px 10px;\n  }\n  \n  /* line 3, ../sass/components/chat-bottom-bar.scss */\n  \n  .chat-bottom-bar {\n    overflow: hidden;\n    padding: 10px;\n    position: relative;\n    height: 70px;\n    max-height: 70px;\n  }\n  \n  /* line 10, ../sass/components/chat-bottom-bar.scss */\n  \n  .chat-bottom-bar .icon-minim {\n    padding: 2px 10px;\n  }\n  \n  /* line 14, ../sass/components/chat-bottom-bar.scss */\n  \n  .chat-bottom-bar input {\n    height: calc(70px - 30px);\n  }\n  \n  /* line 4, ../sass/components/chat-msg-container.scss */\n  \n  .msg-container-base {\n    background: #e5e5e5;\n    margin: 0;\n    height: calc(100% - 140px);\n    overflow-x: hidden;\n    padding: 0 10px 10px;\n  }\n  \n  /* line 11, ../sass/components/chat-msg-container.scss */\n  \n  .msg-container-base::-webkit-scrollbar-track {\n    background-color: #f5f5f5;\n    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n  }\n  \n  /* line 16, ../sass/components/chat-msg-container.scss */\n  \n  .msg-container-base::-webkit-scrollbar {\n    background-color: #f5f5f5;\n    width: 12px;\n  }\n  \n  /* line 21, ../sass/components/chat-msg-container.scss */\n  \n  .msg-container-base::-webkit-scrollbar-thumb {\n    background-color: #555;\n    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n  }\n  \n  /* line 26, ../sass/components/chat-msg-container.scss */\n  \n  .msg-container-base {\n      min-height: 200px;\n  }\n  \n  .msg-container-base .msg-container {\n    display: flex;\n    overflow: hidden;\n    padding: 10px;\n  }\n  \n  /* line 2, ../sass/components/chat-msg.scss */\n  \n  .chat-msg {\n    background: #fff;\n    border-radius: 2px;\n    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);\n    max-width: 100%;\n    padding: 10px;\n  }\n  \n  /* line 9, ../sass/components/chat-msg.scss */\n  \n  .chat-msg p {\n    font-size: 15px;\n    margin: 0 0 .2rem 10px;\n  }\n  \n  /* line 14, ../sass/components/chat-msg.scss */\n  \n  .chat-msg time {\n    color: #ccc;\n    font-size: 11px;\n  }\n  \n  /* line 19, ../sass/components/chat-msg.scss */\n  \n  .chat-msg .chat-msg-author {\n    display: block;\n  }\n  \n  /* line 23, ../sass/components/chat-msg.scss */\n  \n  .chat-msg .chat-msg-received {\n    margin-right: 0;\n    padding-bottom: 20px;\n  }\n  \n  /* line 28, ../sass/components/chat-msg.scss */\n  \n  .chat-msg.chat-msg-sent {\n    margin-right: 0;\n    padding-bottom: 20px;\n  }\n  \n  /* line 32, ../sass/components/chat-msg.scss */\n  \n  .chat-msg.chat-msg-sent .chat-msg-author {\n    text-align: right;\n  }\n  \n  /* line 36, ../sass/components/chat-msg.scss */\n  \n  .chat-msg.chat-msg-sent time {\n    float: right;\n  }\n  \n  .chat-msg .profile {\n    height: 50px;\n  }"

/***/ }),

/***/ "./src/app/components/chat/chat.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/chat/chat.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h1>Welcome to the Chat</h1>\n</div>\n\n<!-- ngSubmit, ngModel, ngFor -->\n<div class=\"container\">\n<div class=\"row chat-window col-xs-5 col-md-12\">\n  <div class=\"col-xs-12 col-md-12\">\n      <div class=\"panel\">\n          <div class=\"panel-heading chat-top-bar\">\n              <div class=\"col-md-8 col-xs-8\">\n                  <h3 class=\"panel-title\">Start a conversation</h3>\n              </div>\n          </div>\n          <div class=\"panel-body\">\n              <div class=\"msg-container-base\">\n                  <div class=\"row msg-container\" *ngFor=\"let message of messages\">\n                      <div class=\"col-md-12 col-xs-12\">\n                          <div class=\"chat-msg\"\n                                  [ngClass]=\"{'chat-msg-sent': selfAuthored, 'chat-msg-recieved': !selfAuthored}\">\n                              <img *ngIf=\"message.imageUrl\"\n                                        class=\"profile\"\n                                        [ngClass]=\"{'pull-right': selfAuthored, 'pull-left': !selfAuthored}\"\n                                        [src]=\"message.imageUrl\" />\n                              <p>{{ message.text }}</p>\n                              <div class=\"chat-msg-author\">\n                                  <strong>{{ message.username }}</strong>&nbsp;\n                                  <span class=\"time\">Sent at: {{ message.date | date: 'shortTime' }}</span>\n                              </div>\n                          </div>\n                      </div>\n                  </div>\n              </div>\n              <div class=\"chat-bottom-bar\">\n                  <form style=\"display:inherit\" (ngSubmit)=\"sendMessage()\">\n                      <div class=\"input-group\" >\n                          <input type=\"text\"\n                                    class=\"form-control input-sm chat-input\"\n                                    placeholder=\"Enter message\"\n                                    name= \"messageText\"\n                                    [(ngModel)]=\"messageText\" />\n                          <span class=\"input-group-btn\">\n                          <input type=\"submit\" class=\"btn btn-sm chat-submit-button\" />\n                      </span>\n                      </div>\n                  </form>\n              </div>\n          </div>\n      </div>\n   </div>\n</div>\n</div>"

/***/ }),

/***/ "./src/app/components/chat/chat.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/chat/chat.component.ts ***!
  \***************************************************/
/*! exports provided: ChatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatComponent", function() { return ChatComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_socket_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/socket.service */ "./src/app/services/socket.service.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ChatComponent = /** @class */ (function () {
    function ChatComponent(_socketService) {
        this._socketService = _socketService;
        this.avatar = 'https://api.adorable.io/avatars/30/abott@adorable.png';
        this.selfAuthored = false;
    }
    ChatComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.messages = new Array();
        this._socketService.on('message-received', function (msg) {
            _this.messages.push(msg);
            console.log(msg);
            console.log(_this.messages);
        });
    };
    ChatComponent.prototype.sendMessage = function () {
        var message = {
            text: this.messageText,
            date: Date.now(),
            imageUrl: this.avatar,
            isBot: false
        };
        console.log(message);
        this._socketService.emit('send-message', message);
        this.messageText = '';
        this.chatBot();
    };
    ChatComponent.prototype.chatBot = function () {
        var _this = this;
        var responseArray = [
            'GGWWWRGHH',
            'GGWWWRGHH',
            'AAARARRRGWWWH',
            'WWWWWWWGGGGHHHRRRRW',
            'WAGRRRRWWGAHHHHWWWRRGGAWWWWWWRR',
            'Aaaaaarrrrr rhhhnnn gggggrrrrr',
            'Rhhhnngggnn. Garrrrr!',
        ];
        var botMessage = lodash__WEBPACK_IMPORTED_MODULE_2__["sample"](responseArray);
        console.log(botMessage);
        var message = {
            text: botMessage,
            date: Date.now(),
            imageUrl: '/src/app/images/chewbacca_icon.png',
            isBot: true
        };
        console.log(message);
        //Set a timeout to give the illusion that the bot is taking time to think of a response. 
        setTimeout(function () {
            _this._socketService.emit('send-message', message);
        }, 2000);
    };
    ChatComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-chat',
            template: __webpack_require__(/*! ./chat.component.html */ "./src/app/components/chat/chat.component.html"),
            styles: [__webpack_require__(/*! ./chat.component.css */ "./src/app/components/chat/chat.component.css")]
        }),
        __metadata("design:paramtypes", [_services_socket_service__WEBPACK_IMPORTED_MODULE_1__["SocketService"]])
    ], ChatComponent);
    return ChatComponent;
}());



/***/ }),

/***/ "./src/app/components/db-character-detail/db-character-detail.component.css":
/*!**********************************************************************************!*\
  !*** ./src/app/components/db-character-detail/db-character-detail.component.css ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/db-character-detail/db-character-detail.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/components/db-character-detail/db-character-detail.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <h1>{{characterDetail.name}}'s Detail Page</h1>\n    <div class=\"row\">\n        <div class=\"col-md-6\">\n            <div class=\"card\" style=\"width: 18rem;\">\n                <img class=\"card-img-top\" src=\"http://192.168.1.161:4000/{{characterDetail.characterImage}}\" alt=\"Card image cap\">\n                <div class=\"card-body\">\n                <h5 class=\"card-title\">{{characterDetail.name}}</h5>\n                <p class=\"card-text\">{{characterDetail.description}}</p>\n                <p *ngIf=\"characterDetail.isCool\" class=\"card-text\">This guy is cool</p>\n                <p *ngIf=\"!characterDetail.isCool\" class=\"card-text\">This guy sucks</p>\n                <a (click)=\"deleteCharacter(characterDetail._id)\" class=\"btn btn-primary\">Delete</a>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"col-md-6\">\n        <pre>{{characterDetail | json }}</pre>\n        <h4>Edit this character</h4>\n            <form>\n                <div class=\"form-group\">\n                    <label for=\"characterName\">Character Name:</label>\n                    <input [(ngModel)]=\"characterDetail.name\" id=\"characterName\" type=\"text\" name=\"Name\" class=\"form-control\">\n                </div>\n                \n                <div class=\"form-group\">\n                    <label for=\"description\">Description:</label>\n                    <input [(ngModel)] = \"characterDetail.description\" type=\"text\" id=\"description\" name=\"Name\" class=\"form-control\">\n                </div>\n                \n                <div class=\"form-group form-check\">\n                    <div>Is this character cool?:</div>\n                    <div class=\"form-check form-check-inline\">\n                        <input  [(ngModel)] = \"characterDetail.isCool\" type=\"radio\" class=\"form-check-input\" id=\"true\" value=\"true\" name=\"Is this character cool\" checked />\n                        <label class=\"form-check-label\" for=\"true\">Yes</label>\n                    </div>\n    \n                    <div class=\"form-check form-check-inline\">\n                        <input [(ngModel)] = \"characterDetail.isCool\" type=\"radio\" class=\"form-check-input\" id=\"false\" value=\"false\" name=\"Is this character cool\" />\n                        <label class=\"form-check-label\" for=\"false\">No</label>\n                    </div>\n                </div>\n            \n                <div class=\"custom-file\">\n                <input class=\"custom-file-input\" type=\"file\" (change)=\"onFileSelected($event)\">\n                <label class=\"custom-file-label\">Character Image</label>\n                </div>\n    \n                <div class=\"form-group margin-top-10\">\n                    <button class=\"btn btn-success\" (click)=\"updateDetails(characterDetail.name, characterDetail.description, characterDetail.isCool)\">Submit Changes</button>\n                </div>\n                \n            </form>\n        </div>\n\n</div>"

/***/ }),

/***/ "./src/app/components/db-character-detail/db-character-detail.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/components/db-character-detail/db-character-detail.component.ts ***!
  \*********************************************************************************/
/*! exports provided: DbCharacterDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DbCharacterDetailComponent", function() { return DbCharacterDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _services_character_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/character.service */ "./src/app/services/character.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DbCharacterDetailComponent = /** @class */ (function () {
    function DbCharacterDetailComponent(route, characterService, toastr, router) {
        this.route = route;
        this.characterService = characterService;
        this.toastr = toastr;
        this.router = router;
        this.characterID = null;
        this.selectedFile = null;
    }
    DbCharacterDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.characterID = params['id'];
            console.log(params); //log the entire params object
            console.log(); //log the value of id
        });
        this.getCharacter(this.characterID);
    };
    DbCharacterDetailComponent.prototype.getCharacter = function (id) {
        var _this = this;
        this.characterService
            .getCharacterById(id)
            .subscribe(function (data) {
            _this.characterDetail = data;
            console.log("Data requested....");
            console.log(_this.characterDetail);
        });
    };
    DbCharacterDetailComponent.prototype.onFileSelected = function (event) {
        console.log(event);
        //Always pick the first file if we ever add functionality to add multiple files, we can't use the first item in the array. 
        this.selectedFile = event.target.files[0];
        console.log(this.selectedFile);
    };
    DbCharacterDetailComponent.prototype.updateDetails = function (name, description, isCool) {
        var _this = this;
        this.characterService
            .updateCharacter(this.characterID, name, description, isCool, this.selectedFile)
            .subscribe(function () {
            console.log('character has been updated');
            _this.getCharacter(_this.characterID);
            _this.toastr.info('Your Character Has Been Updated');
        });
    };
    DbCharacterDetailComponent.prototype.deleteCharacter = function (id) {
        var _this = this;
        this.characterService.deleteCharacter(id).subscribe(function () {
            //Upate the list of chracters again after deleted. 
            _this.getCharacter(_this.characterID);
            console.log('character deleted');
            _this.router.navigate(['dbz']);
            _this.toastr.info('Your Character Has Been Deleted');
        });
    };
    DbCharacterDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-db-character-detail',
            template: __webpack_require__(/*! ./db-character-detail.component.html */ "./src/app/components/db-character-detail/db-character-detail.component.html"),
            styles: [__webpack_require__(/*! ./db-character-detail.component.css */ "./src/app/components/db-character-detail/db-character-detail.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _services_character_service__WEBPACK_IMPORTED_MODULE_3__["CharacterService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], DbCharacterDetailComponent);
    return DbCharacterDetailComponent;
}());



/***/ }),

/***/ "./src/app/components/db-character/db-character.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/db-character/db-character.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".margin-right-10 {\n    margin-right: 10px;\n}\n\n.margin-bottom-10 {\n    margin-bottom: 10px;\n}\n\n.margin-top-10 {\n    margin-top: 10px;\n}"

/***/ }),

/***/ "./src/app/components/db-character/db-character.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/db-character/db-character.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n    <div class=\"row form-group\">\n        <div class=\"col-sm-12 col-md-12 col-lg-12\">\n            <input class=\"form-control\" type=\"text\" [(ngModel)]=\"characterFilter.name\" placeholder=\"Search for your chracter's name\">\n            <div *ngIf=\"(characters | filterBy: characterFilter).length === 0\">\n                There are no characters by that name. Why don't you add one?!\n            </div>\n        </div>\n    </div>\n\n    <div class=\"row form-group card-group\">\n        <div class=\"col-md-4\" *ngFor=\"let character of characters | filterBy: characterFilter\">\n            <div class=\"card margin-bottom-10\" style=\"width: 18rem;\">\n                <img class=\"card-img-top\" src=\"http://192.168.1.161:4000/{{character.characterImage}}\" alt=\"Card image cap\">\n                <div class=\"card-body\">\n                    <h5 class=\"card-title\">{{character.name}}</h5>\n                    <p class=\"card-text\">{{character.description}}</p>\n                    <a routerLink=\"/db-character/{{character._id}}\" class=\"btn btn-primary margin-right-10\">Edit</a>\n                    <a (click)=\"deleteCharacter(character._id)\" class=\"btn btn-primary\">Delete</a>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"row\">\n        <div class=\"col-md-12\">\n            <h4>Add a new character</h4>\n            <form>\n                <div class=\"form-group\">\n                    <label for=\"characterName\">Character Name:</label>\n                    <input [(ngModel)]=\"characterName\" id=\"characterName\" type=\"text\" name=\"Name\" class=\"form-control\">\n                </div>\n\n                <div class=\"form-group\">\n                    <label for=\"description\">Description:</label>\n                    <input [(ngModel)]=\"description\" type=\"text\" id=\"description\" name=\"Name\" class=\"form-control\">\n                </div>\n\n                <div class=\"form-group form-check\">\n                    <div>Is this character cool?:</div>\n                    <div class=\"form-check form-check-inline\">\n                        <input [(ngModel)]=\"isCool\" type=\"radio\" class=\"form-check-input\" id=\"true\" value=\"true\" name=\"Is this character cool\"\n                            checked />\n                        <label class=\"form-check-label\" for=\"true\">Yes</label>\n                    </div>\n\n                    <div class=\"form-check form-check-inline\">\n                        <input [(ngModel)]=\"isCool\" type=\"radio\" class=\"form-check-input\" id=\"false\" value=\"false\" name=\"Is this character cool\" />\n                        <label class=\"form-check-label\" for=\"false\">No</label>\n                    </div>\n                </div>\n\n                <div class=\"custom-file\">\n                    <input class=\"custom-file-input\" type=\"file\" (change)=\"onFileSelected($event)\">\n                    <label class=\"custom-file-label\">Character Image</label>\n                </div>\n\n                <div class=\"form-group margin-top-10\">\n                    <button class=\"btn btn-success\" (click)=\"addCharacter(characterName, description, isCool)\">Add\n                        Character</button>\n                </div>\n\n            </form>\n        </div>\n    </div>\n\n</div>"

/***/ }),

/***/ "./src/app/components/db-character/db-character.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/db-character/db-character.component.ts ***!
  \*******************************************************************/
/*! exports provided: DbCharacterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DbCharacterComponent", function() { return DbCharacterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _services_character_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/character.service */ "./src/app/services/character.service.ts");
/* harmony import */ var ngx_filter_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-filter-pipe */ "./node_modules/ngx-filter-pipe/esm5/ngx-filter-pipe.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DbCharacterComponent = /** @class */ (function () {
    function DbCharacterComponent(characterService, toastr, filterPipe) {
        this.characterService = characterService;
        this.toastr = toastr;
        this.filterPipe = filterPipe;
        this.selectedFile = null;
        this.characterFilter = { name: '' };
    }
    DbCharacterComponent.prototype.ngOnInit = function () {
        this.fetchCharacters();
    };
    DbCharacterComponent.prototype.addCharacter = function (name, description, isCool, characterImage) {
        var _this = this;
        this.characterService
            .addCharacter(name, description, isCool, this.selectedFile)
            .subscribe(function () {
            console.log('character has been created');
            _this.fetchCharacters();
            _this.toastr.success('Your New Character Has Been Added');
        });
    };
    DbCharacterComponent.prototype.fetchCharacters = function () {
        var _this = this;
        this.characterService
            .getCharacters()
            .subscribe(function (data) {
            _this.characters = data;
            console.log("Data requested....");
            console.log(_this.characters);
        });
    };
    DbCharacterComponent.prototype.deleteCharacter = function (id) {
        var _this = this;
        this.characterService.deleteCharacter(id).subscribe(function () {
            //Upate the list of chracters again after deleted. 
            _this.fetchCharacters();
            console.log('character deleted');
            _this.toastr.info('Your Character Has Been Deleted');
        });
    };
    DbCharacterComponent.prototype.onFileSelected = function (event) {
        console.log(event);
        //Always pick the first file if we ever add functionality to add multiple files, we can't use the first item in the array. 
        this.selectedFile = event.target.files[0];
        console.log(this.selectedFile);
    };
    DbCharacterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-db-character',
            template: __webpack_require__(/*! ./db-character.component.html */ "./src/app/components/db-character/db-character.component.html"),
            styles: [__webpack_require__(/*! ./db-character.component.css */ "./src/app/components/db-character/db-character.component.css")]
        }),
        __metadata("design:paramtypes", [_services_character_service__WEBPACK_IMPORTED_MODULE_2__["CharacterService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_1__["ToastrService"], ngx_filter_pipe__WEBPACK_IMPORTED_MODULE_3__["FilterPipe"]])
    ], DbCharacterComponent);
    return DbCharacterComponent;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/login/login.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login {\n    border-left: 2px solid grey\n}\n\nselect {\n    margin-left: 1rem;\n}\n\n.custom-file {\n    margin-bottom: 1rem;\n}"

/***/ }),

/***/ "./src/app/components/login/login.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-md-6 signup\">\n            <h4>Add a new user or login</h4>\n            <p>\n                We're using this form for either signing up or loggin in. If you try to register a user that already\n                exists you'll receive an error\n            </p>\n            <form name=\"signUpForm\">\n                <div class=\"form-group\">\n                    <label for=\"email\">Email Address:</label>\n                    <input [(ngModel)]=\"signUpEmail\" id=\"email\" type=\"text\" name=\"Name\" class=\"form-control\">\n                </div>\n\n                <div class=\"form-group\">\n                    <label for=\"password\">Password:</label>\n                    <input [(ngModel)]=\"signUpPassword\" type=\"password\" id=\"password\" name=\"Password\" class=\"form-control\">\n                </div>\n\n                <div class=\"form-group\">\n                    <label for=\"username\">Username:</label>\n                    <input [(ngModel)]=\"signUpUsername\" type=\"username\" id=\"username\" name=\"Username\" class=\"form-control\">\n                </div>\n\n                <div class=\"form-group\">\n                    <label for=\"gender\">Gender:</label>\n                    <select name=\"Gender\" id=\"gender\" [(ngModel)]=\"selectedGender\" required>\n                        <option *ngFor=\"let g of gender\" [value]=\"g\">{{g}}</option>\n                    </select>\n                </div>\n\n                <div class=\"form-group\">\n                    <div>Sign up for our Newsletter?</div>\n                    <div class=\"form-check form-check-inline\">\n                        <input [(ngModel)]=\"newsletter\" type=\"radio\" class=\"form-check-input\" id=\"true\" value=\"true\"\n                            name=\"sign up for newsletter\" checked />\n                        <label class=\"form-check-label\" for=\"true\">Yes</label>\n                    </div>\n\n                    <div class=\"form-check form-check-inline\">\n                        <input [(ngModel)]=\"newsletter\" type=\"radio\" class=\"form-check-input\" id=\"false\" value=\"false\"\n                            name=\"sign up for newsletter\" />\n                        <label class=\"form-check-label\" for=\"false\">No</label>\n                    </div>\n                </div>\n\n                <div class=\"custom-file\">\n                    <input class=\"custom-file-input\" type=\"file\" (change)=\"onFileSelected($event)\">\n                    <label class=\"custom-file-label\">Avatar Image</label>\n                </div> \n\n                <div class=\"form-group margin-top-10\">\n                    <button class=\"btn btn-success\" (click)=\"addUser(signUpEmail, signUpPassword, signUpUsername, selectedGender, newsletter )\">Add\n                        User</button>\n                </div>\n            </form>\n        </div>\n        <div class=\"col-md-6 login\">\n            <h4>Login</h4>\n            <form name=\"loginForm\">\n                <div class=\"form-group\">\n                    <label for=\"email\">Email Address:</label>\n                    <input [(ngModel)]=\"loginEmail\" id=\"email\" type=\"text\" name=\"Name\" class=\"form-control\">\n                </div>\n\n                <div class=\"form-group\">\n                    <label for=\"password\">Password:</label>\n                    <input [(ngModel)]=\"loginPassword\" type=\"password\" id=\"password\" name=\"Name\" class=\"form-control\">\n                </div>\n\n                <div class=\"form-group margin-top-10\">\n                    <button class=\"btn btn-success\" (click)=\"login(loginEmail, loginPassword)\">Login</button>\n                </div>\n            </form>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/login.service */ "./src/app/services/login.service.ts");
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
    function LoginComponent(route, toastr, router, loginService) {
        this.route = route;
        this.toastr = toastr;
        this.router = router;
        this.loginService = loginService;
        this.selectedFile = null;
        this.gender = ["Male", "Female", "Non-Binary", "Other"];
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    };
    /* TODO: Add a page where the user can delete themselves, or other users...maybe a user profile page.
    Something so we can use the deleteUser API call */
    LoginComponent.prototype.addUser = function (email, password, username, gender, newsletter, userImage) {
        var _this = this;
        this.loginService
            .addUser(email, password, username, gender, newsletter, this.selectedFile)
            .subscribe(function (data) {
            _this.toastr.success('Your New User Has Been Added');
            console.log(data);
            _this.login(email, password);
            _this.toastr.success('You have now been logged in');
        }, function (error) {
            _this.toastr.error(error.error.message);
            console.log(error);
        });
    };
    LoginComponent.prototype.login = function (email, password) {
        var _this = this;
        this.loginService
            .loginUser(email, password)
            .subscribe(function (data) {
            _this.user = data;
            console.log(_this.user);
            localStorage.setItem('token', JSON.stringify(_this.user.token));
            _this.router.navigateByUrl(_this.returnUrl);
            _this.toastr.success(_this.user.message);
            console.log(_this.loginService.getUserDetails());
        }, function (error) {
            _this.toastr.error(error.error.message);
            console.log(error);
        });
    };
    LoginComponent.prototype.onFileSelected = function (event) {
        console.log(event);
        //Always pick the first file if we ever add functionality to add multiple files, we can't use the first item in the array. 
        this.selectedFile = event.target.files[0];
        console.log(this.selectedFile);
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/components/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/todo-list/todo-list.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/todo-list/todo-list.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/todo-list/todo-list.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/todo-list/todo-list.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul *ngIf=\"todoList.length > 0\">\n  <li *ngFor=\"let item of todoList\">{{item}}</li>\n</ul>\n\n<h4 *ngIf=\"todoList.length == 0\">Please add some items to the TO Do list</h4>\n\n<form name=\"todo-List\">\n  \n  <div>\n    <label>Enter an item for the To Do list </label>\n    <input name=\"enterTodoItem\" [(ngModel)] = \"todoListItem\">\n  </div>\n\n  <input type=\"submit\" value=\"add\" (click)=\"add(todoListItem); todoListItem=''\">\n\n</form>\n\n<button (click)=\"clear();\">\n  clear\n</button>"

/***/ }),

/***/ "./src/app/components/todo-list/todo-list.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/todo-list/todo-list.component.ts ***!
  \*************************************************************/
/*! exports provided: TodoListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoListComponent", function() { return TodoListComponent; });
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

var TodoListComponent = /** @class */ (function () {
    function TodoListComponent() {
        this.vm = this;
        this.todoList = new Array();
    }
    TodoListComponent.prototype.add = function (name) {
        if (name !== "") {
            this.todoList.push(name);
            console.log(this.todoList);
        }
    };
    TodoListComponent.prototype.clear = function () {
        this.todoList = [];
    };
    TodoListComponent.prototype.ngOnInit = function () {
    };
    TodoListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-todo-list',
            template: __webpack_require__(/*! ./todo-list.component.html */ "./src/app/components/todo-list/todo-list.component.html"),
            styles: [__webpack_require__(/*! ./todo-list.component.css */ "./src/app/components/todo-list/todo-list.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TodoListComponent);
    return TodoListComponent;
}());



/***/ }),

/***/ "./src/app/services/auth.guard.ts":
/*!****************************************!*\
  !*** ./src/app/services/auth.guard.ts ***!
  \****************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.services */ "./src/app/services/auth.services.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthGuard = /** @class */ (function () {
    function AuthGuard(router, authService, toastr) {
        this.router = router;
        this.authService = authService;
        this.toastr = toastr;
    }
    AuthGuard.prototype.canActivate = function () {
        if (!this.authService.isTokenExpired()) {
            return true;
        }
        this.router.navigate(['/signup']);
        this.toastr.info('You must sign up/login to view this page');
        return false;
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _auth_services__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/services/auth.services.ts":
/*!*******************************************!*\
  !*** ./src/app/services/auth.services.ts ***!
  \*******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jwt-decode */ "./node_modules/jwt-decode/lib/index.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthService = /** @class */ (function () {
    function AuthService() {
    }
    AuthService.prototype.getTokenExpirationDate = function (token) {
        var decoded = jwt_decode__WEBPACK_IMPORTED_MODULE_1__(token);
        if (decoded.exp === undefined)
            return null;
        var date = new Date(0);
        date.setUTCSeconds(decoded.exp);
        return date;
    };
    AuthService.prototype.isTokenExpired = function (token) {
        if (!token)
            token = localStorage.getItem('token');
        if (!token)
            return true;
        var date = this.getTokenExpirationDate(token);
        if (date === undefined)
            return false;
        return !(date.valueOf() > new Date().valueOf());
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/character.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/character.service.ts ***!
  \***********************************************/
/*! exports provided: CharacterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CharacterService", function() { return CharacterService; });
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


var CharacterService = /** @class */ (function () {
    function CharacterService(http) {
        this.http = http;
        this.uri = 'http://192.168.1.161:4000';
    }
    CharacterService.prototype.getCharacters = function () {
        return this.http.get(this.uri + "/getCharacters");
    };
    CharacterService.prototype.getCharacterById = function (id) {
        return this.http.get(this.uri + "/getCharacters/" + id);
    };
    CharacterService.prototype.addCharacter = function (name, description, isCool, characterImage) {
        var character = new FormData();
        character.append('name', name);
        character.append('description', description);
        character.append('isCool', isCool);
        character.append('characterImage', characterImage, characterImage.name);
        console.log(character);
        return this.http.post(this.uri + "/saveCharacters", character);
    };
    CharacterService.prototype.updateCharacter = function (id, name, description, isCool, characterImage) {
        var character = new FormData();
        character.append('id', id);
        character.append('name', name);
        character.append('description', description);
        character.append('isCool', isCool);
        character.append('characterImage', characterImage, characterImage.name);
        return this.http.post(this.uri + "/updateCharacter/" + id, character);
    };
    CharacterService.prototype.deleteCharacter = function (id) {
        return this.http.get(this.uri + "/deleteCharacter/" + id);
    };
    CharacterService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], CharacterService);
    return CharacterService;
}());



/***/ }),

/***/ "./src/app/services/login.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/login.service.ts ***!
  \*******************************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
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


var LoginService = /** @class */ (function () {
    function LoginService(http) {
        this.http = http;
        this.uri = 'http://192.168.1.161:4000';
    }
    LoginService.prototype.addUser = function (email, password, username, gender, newsletter, userImage) {
        //TODO: Find out why when sending data using FormData() the request returns and empty obj 
        //but doesn't return an empty obj when using the other character api calls 
        var user = new FormData();
        user.append('email', email);
        user.append('password', password);
        user.append('username', username);
        user.append('gender', gender);
        user.append('newsletter', newsletter);
        user.append('userImage', userImage, userImage.name);
        // const user = {
        //   "email": email,
        //   "password": password,
        //   "username": username,
        //   "gender": gender,
        //   "newsletter": newsletter,
        // }
        return this.http.post(this.uri + "/signup", user);
    };
    LoginService.prototype.loginUser = function (email, password) {
        var user = {
            "email": email,
            "password": password,
        };
        return this.http.post(this.uri + "/login", user);
    };
    LoginService.prototype.deleteUser = function (id) {
        return this.http.get(this.uri + "/deleteUser/" + id);
    };
    LoginService.prototype.getUserDetails = function () {
        var token = localStorage.getItem('token');
        var payload;
        if (token) {
            payload = token.split('.')[1];
            payload = window.atob(payload);
            console.log(JSON.parse(payload));
            return JSON.parse(payload);
        }
        else {
            return null;
        }
    };
    LoginService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], LoginService);
    return LoginService;
}());



/***/ }),

/***/ "./src/app/services/socket.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/socket.service.ts ***!
  \********************************************/
/*! exports provided: SocketService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocketService", function() { return SocketService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SocketService = /** @class */ (function () {
    function SocketService() {
        this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_1__('http://192.168.1.161:4000');
    }
    SocketService.prototype.on = function (eventName, callback) {
        if (this.socket) {
            this.socket.on(eventName, function (data) {
                callback(data);
            });
        }
    };
    ;
    SocketService.prototype.emit = function (eventName, data) {
        if (this.socket) {
            this.socket.emit(eventName, data);
        }
    };
    ;
    SocketService.prototype.removeListener = function (eventName) {
        if (this.socket) {
            this.socket.removeListener(eventName);
        }
    };
    ;
    SocketService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], SocketService);
    return SocketService;
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

module.exports = __webpack_require__(/*! /Users/patrick/www/todo-list/src/main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map