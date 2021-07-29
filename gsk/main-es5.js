(function () {
  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkgsk"] = self["webpackChunkgsk"] || []).push([["main"], {
    /***/
    8255:
    /*!*******************************************************!*\
      !*** ./$_lazy_route_resources/ lazy namespace object ***!
      \*******************************************************/

    /***/
    function _(module) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = 8255;
      module.exports = webpackEmptyAsyncContext;
      /***/
    },

    /***/
    158:
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppRoutingModule": function AppRoutingModule() {
          return (
            /* binding */
            _AppRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      9895);
      /* harmony import */


      var _pages__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./pages */
      7566);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      7716);

      var routes = [{
        path: "",
        redirectTo: "/admin",
        pathMatch: "full"
      }, {
        path: "assessment-admin",
        component: _pages__WEBPACK_IMPORTED_MODULE_0__.AssessmentAdminComponent
      }, {
        path: "finish-admin",
        component: _pages__WEBPACK_IMPORTED_MODULE_0__.FinishAdminComponent
      }, {
        path: "setup",
        component: _pages__WEBPACK_IMPORTED_MODULE_0__.SetupComponent
      }, {
        path: "admin",
        component: _pages__WEBPACK_IMPORTED_MODULE_0__.AdminComponent
      }, {
        path: "reports",
        component: _pages__WEBPACK_IMPORTED_MODULE_0__.ReportsComponent
      }];

      var _AppRoutingModule = function _AppRoutingModule() {
        _classCallCheck(this, _AppRoutingModule);
      };

      _AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) {
        return new (t || _AppRoutingModule)();
      };

      _AppRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: _AppRoutingModule
      });
      _AppRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(routes, {
          relativeLinkResolution: "legacy"
        })], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](_AppRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
        });
      })();
      /***/

    },

    /***/
    5041:
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppComponent": function AppComponent() {
          return (
            /* binding */
            _AppComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      7716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      9895);

      var _AppComponent = /*#__PURE__*/function () {
        function _AppComponent(router) {
          _classCallCheck(this, _AppComponent);

          this.router = router;
          this.title = "gsk";
        }

        _createClass(_AppComponent, [{
          key: "goHome",
          value: function goHome() {
            this.router.navigate(["/admin"]);
          }
        }]);

        return _AppComponent;
      }();

      _AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || _AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router));
      };

      _AppComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _AppComponent,
        selectors: [["app-root"]],
        decls: 2,
        vars: 0,
        consts: [["src", "../assets/img/logo.png", 1, "logo", 3, "click"]],
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "img", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_img_click_1_listener() {
              return ctx.goHome();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet],
        styles: [".logo[_ngcontent-%COMP%] {\n    position: fixed; \n    bottom: 30px; \n    left: 30px; \n    width: 80px; \n    height: auto;\n    cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtJQUNmLFlBQVk7SUFDWixVQUFVO0lBQ1YsV0FBVztJQUNYLFlBQVk7SUFDWixlQUFlO0FBQ25CIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ28ge1xuICAgIHBvc2l0aW9uOiBmaXhlZDsgXG4gICAgYm90dG9tOiAzMHB4OyBcbiAgICBsZWZ0OiAzMHB4OyBcbiAgICB3aWR0aDogODBweDsgXG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn0iXX0= */"]
      });
      /***/
    },

    /***/
    6747:
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppModule": function AppModule() {
          return (
            /* binding */
            _AppModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/platform-browser */
      9075);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./app-routing.module */
      158);
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./app.component */
      5041);
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      5835);
      /* harmony import */


      var _shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./shared */
      1679);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/common/http */
      1841);
      /* harmony import */


      var _pages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./pages */
      7566);
      /* harmony import */


      var _pages_reports_reports_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./pages/reports/reports.component */
      6625);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      7716);

      var _AppModule = function _AppModule() {
        _classCallCheck(this, _AppModule);
      };

      _AppModule.ɵfac = function AppModule_Factory(t) {
        return new (t || _AppModule)();
      };

      _AppModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
        type: _AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
      });
      _AppModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
        providers: [],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__.BrowserAnimationsModule, _shared__WEBPACK_IMPORTED_MODULE_2__.MaterialModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClientModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](_AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _pages__WEBPACK_IMPORTED_MODULE_3__.AssessmentAdminComponent, _pages__WEBPACK_IMPORTED_MODULE_3__.SetupComponent, _pages__WEBPACK_IMPORTED_MODULE_3__.FinishAdminComponent, _pages__WEBPACK_IMPORTED_MODULE_3__.AdminComponent, _pages_reports_reports_component__WEBPACK_IMPORTED_MODULE_4__.ReportsComponent],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__.BrowserAnimationsModule, _shared__WEBPACK_IMPORTED_MODULE_2__.MaterialModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClientModule]
        });
      })();
      /***/

    },

    /***/
    6601:
    /*!************************************************!*\
      !*** ./src/app/pages/admin/admin.component.ts ***!
      \************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AdminComponent": function AdminComponent() {
          return (
            /* binding */
            _AdminComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      945);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs */
      826);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      7716);
      /* harmony import */


      var _shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../shared */
      1679);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      9895);
      /* harmony import */


      var _admin_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./admin.service */
      9536);
      /* harmony import */


      var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/grid-list */
      4929);
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/button */
      1095);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common */
      8583);
      /* harmony import */


      var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/toolbar */
      2522);
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/icon */
      6627);

      function AdminComponent_mat_toolbar_21_Template(rf, ctx) {
        if (rf & 1) {
          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-toolbar", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-toolbar-row", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "span", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "mat-icon", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AdminComponent_mat_toolbar_21_Template_mat_icon_click_6_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3);

            var assessor_r1 = restoredCtx.$implicit;

            var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r2.deleteAssessorFN(assessor_r1.assessor_id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "close");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var assessor_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](assessor_r1.name);
        }
      }

      var _AdminComponent = /*#__PURE__*/function () {
        function _AdminComponent(assessorsService, currentService, router, adminService) {
          _classCallCheck(this, _AdminComponent);

          this.assessorsService = assessorsService;
          this.currentService = currentService;
          this.router = router;
          this.adminService = adminService;
          this.currentAssessors = [];
          this.currentInterval = (0, rxjs__WEBPACK_IMPORTED_MODULE_3__.interval)(2000);
          this.sub1 = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subscription();
        }

        _createClass(_AdminComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getAssessors();
          }
        }, {
          key: "getAssessors",
          value: function getAssessors() {
            var _this = this;

            this.assessorsService.currentAssessors$.subscribe(function (data) {
              _this.currentAssessors = data;
            });
            this.sub1 = this.currentInterval.subscribe(function (val) {
              return _this.assessorsService.currentAssessors();
            });
          }
        }, {
          key: "newAssessmentFN",
          value: function newAssessmentFN() {
            this.router.navigate(["/setup"]);
          }
        }, {
          key: "deleteAssessorFN",
          value: function deleteAssessorFN(id) {
            var _this2 = this;

            this.assessorsService.deleteAssessorFN(id).toPromise().then(function () {
              var index = _this2.currentAssessors.findIndex(function (a) {
                return a.assessor_id === id;
              });

              _this2.currentAssessors.splice(index, 1);
            })["catch"](function (err) {
              return console.log(err);
            });
          }
        }, {
          key: "deleteAllAssessorsFN",
          value: function deleteAllAssessorsFN() {
            var _this3 = this;

            this.assessorsService.deleteAllAssessors().subscribe(function (res) {
              _this3.currentAssessors = [];
              alert("Success!");
              console.log("Delete All -> ", res);
            }, function (err) {
              return console.log("Reset -> ", err);
            });
          }
        }, {
          key: "closeAssessments",
          value: function closeAssessments() {
            this.currentService.resetFN().subscribe(function (res) {
              alert("Success!");
              console.log("Reset -> ", res);
            }, function (err) {
              return console.log("Reset -> ", err);
            });
          }
        }, {
          key: "exportReports",
          value: function exportReports() {
            this.router.navigate(['/reports']);
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.sub1.unsubscribe();
          }
        }]);

        return _AdminComponent;
      }();

      _AdminComponent.ɵfac = function AdminComponent_Factory(t) {
        return new (t || _AdminComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_shared__WEBPACK_IMPORTED_MODULE_0__.AssessorsService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_shared__WEBPACK_IMPORTED_MODULE_0__.CurrentService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_admin_service__WEBPACK_IMPORTED_MODULE_1__.AdminService));
      };

      _AdminComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: _AdminComponent,
        selectors: [["app-admin"]],
        decls: 22,
        vars: 1,
        consts: [[2, "min-height", "500px", "padding-top", "0 !important", "padding-bottom", "50px"], ["cols", "2", 2, "margin-top", "0"], [1, "card"], ["mat-flat-button", "", "color", "primary", 1, "shortcut", 3, "click"], ["mat-stroked-button", "", "color", "primary", 1, "shortcut", 3, "click"], ["style", "margin-bottom: 10px", 4, "ngFor", "ngForOf"], [2, "margin-bottom", "10px"], [2, "color", "#333"], [2, "font-weight", "300"], [1, "example-spacer"], ["mat-icon-button", ""], [1, "example-icon", 3, "click"]],
        template: function AdminComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-grid-list", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "mat-grid-tile");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Shortcuts");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AdminComponent_Template_button_click_6_listener() {
              return ctx.newAssessmentFN();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, " New Assessment");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AdminComponent_Template_button_click_9_listener() {
              return ctx.closeAssessments();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, " Close All Assessments");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AdminComponent_Template_button_click_12_listener() {
              return ctx.deleteAllAssessorsFN();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, " Logout All Assessors");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AdminComponent_Template_button_click_15_listener() {
              return ctx.exportReports();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, " Extract Reports ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "mat-grid-tile");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "Logged In Assessors");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](21, AdminComponent_mat_toolbar_21_Template, 8, 1, "mat-toolbar", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](21);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.currentAssessors);
          }
        },
        directives: [_angular_material_grid_list__WEBPACK_IMPORTED_MODULE_6__.MatGridList, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_6__.MatGridTile, _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatButton, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__.MatToolbar, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__.MatToolbarRow, _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__.MatIcon],
        styles: ["button.shortcut[_ngcontent-%COMP%] {\n    display: block;\n    width: 250px;\n    margin-right: auto;\n    margin-left: auto;\n}\n\n.example-icon[_ngcontent-%COMP%] {\n    padding: 0 14px;\n}\n\n.example-spacer[_ngcontent-%COMP%] {\n    flex: 1 1 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkbWluLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjO0lBQ2QsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksY0FBYztBQUNsQiIsImZpbGUiOiJhZG1pbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYnV0dG9uLnNob3J0Y3V0IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMjUwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xufVxuXG4uZXhhbXBsZS1pY29uIHtcbiAgICBwYWRkaW5nOiAwIDE0cHg7XG59XG4gXG4uZXhhbXBsZS1zcGFjZXIge1xuICAgIGZsZXg6IDEgMSBhdXRvO1xufSJdfQ== */"]
      });
      /***/
    },

    /***/
    9536:
    /*!**********************************************!*\
      !*** ./src/app/pages/admin/admin.service.ts ***!
      \**********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AdminService": function AdminService() {
          return (
            /* binding */
            _AdminService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      7716);

      var _AdminService = function _AdminService() {
        _classCallCheck(this, _AdminService);

        this.fileType = "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
        this.fileExtension = ".xlsx";
      };

      _AdminService.ɵfac = function AdminService_Factory(t) {
        return new (t || _AdminService)();
      };

      _AdminService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: _AdminService,
        factory: _AdminService.ɵfac,
        providedIn: "root"
      });
      /***/
    },

    /***/
    405:
    /*!**********************************************************************!*\
      !*** ./src/app/pages/assessment-admin/assessment-admin.component.ts ***!
      \**********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AssessmentAdminComponent": function AssessmentAdminComponent() {
          return (
            /* binding */
            _AssessmentAdminComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      826);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      945);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      7716);
      /* harmony import */


      var _shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../shared */
      1679);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      9895);
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/button */
      1095);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      8583);
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/card */
      3738);
      /* harmony import */


      var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/toolbar */
      2522);
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/icon */
      6627);

      function AssessmentAdminComponent_mat_card_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-card", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "table", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "MUD ID");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "td", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Hiring Date");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "td", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "FLSL");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "td", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "SLSL");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "td", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Office");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "td", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "City");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.currentEmp.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.currentEmp.mudID);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.currentEmp.hireDate);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.currentEmp.flsl);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.currentEmp.slsl);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.currentEmp.office);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.getCity(ctx_r0.currentEmp.cityID));
        }
      }

      function AssessmentAdminComponent_mat_toolbar_14_mat_icon_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-icon", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " done ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function AssessmentAdminComponent_mat_toolbar_14_mat_icon_7_Template(rf, ctx) {
        if (rf & 1) {
          var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-icon", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AssessmentAdminComponent_mat_toolbar_14_mat_icon_7_Template_mat_icon_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9);

            var assessor_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

            var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r7.revoteFN(assessor_r4.assessor_id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " replay ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function AssessmentAdminComponent_mat_toolbar_14_Template(rf, ctx) {
        if (rf & 1) {
          var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-toolbar", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-toolbar-row", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, AssessmentAdminComponent_mat_toolbar_14_mat_icon_2_Template, 2, 0, "mat-icon", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "span", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, AssessmentAdminComponent_mat_toolbar_14_mat_icon_7_Template, 2, 0, "mat-icon", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "button", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "mat-icon", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AssessmentAdminComponent_mat_toolbar_14_Template_mat_icon_click_9_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11);

            var assessor_r4 = restoredCtx.$implicit;

            var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r10.deleteAssessorFN(assessor_r4.assessor_id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, " close ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var assessor_r4 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", assessor_r4.status == 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](assessor_r4.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", assessor_r4.status == 1);
        }
      }

      function AssessmentAdminComponent_ng_template_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h1", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Wait for next assessment...");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      var _AssessmentAdminComponent = /*#__PURE__*/function () {
        function _AssessmentAdminComponent(currentService, router, assessorsService, checkNAService, cityService) {
          _classCallCheck(this, _AssessmentAdminComponent);

          this.currentService = currentService;
          this.router = router;
          this.assessorsService = assessorsService;
          this.checkNAService = checkNAService;
          this.cityService = cityService;
          this.sub1 = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subscription();
          this.currentInterval = (0, rxjs__WEBPACK_IMPORTED_MODULE_3__.interval)(2000);
          this.invalidTXT = "";
          this.isValidNA = true;
        }

        _createClass(_AssessmentAdminComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this4 = this;

            this.cityService.getCities().subscribe(function (data) {
              _this4.cities = data;
            });
            this.currentService.getCurrent();
            this.currentService.current$.subscribe(function (current) {
              _this4.current = current;

              if (current.emp_id == 1000) {
                _this4.router.navigate(["/finish-admin"]);
              } else {
                _this4.currentEmpType = current.emp_type;

                _this4.getCurrentIDs();

                _this4.getAssessors();
              }
            });
          }
        }, {
          key: "getCurrentEmp",
          value: function getCurrentEmp() {
            var _this5 = this;

            this.currentService.getCurrentEmp().subscribe(function (data) {
              if (data) {
                _this5.currentEmp = data;
              }
            });
          }
        }, {
          key: "getCurrentIDs",
          value: function getCurrentIDs() {
            var _this6 = this;

            this.currentService.getCurrentIDs().subscribe(function (data) {
              if (data) {
                _this6.currentIDs = data;
                _this6.index = data.indexOf(_this6.currentService.currentEmpID);

                if (_this6.index < 0) {
                  _this6.nextEmp();
                } else {
                  _this6.getCurrentEmp();
                }
              }
            });
          }
        }, {
          key: "getAssessors",
          value: function getAssessors() {
            var _this7 = this;

            this.assessorsService.currentAssessors$.subscribe(function (data) {
              _this7.currentAssessors = data;
              _this7.i = 0;
              _this7.c = 0;
              data.forEach(function (assessor) {
                _this7.i++;
                if (Number(assessor.status) === 0) _this7.c++;
                if (_this7.i == data.length) _this7.checkNext();
              });
            });
            this.sub1 = this.currentInterval.subscribe(function (val) {
              return _this7.assessorsService.currentAssessors();
            });
          }
        }, {
          key: "checkNext",
          value: function checkNext() {
            var _this8 = this;

            if (this.c > 0) {
              this.next = false;
            } else {
              this.checkNAService.checkNA(this.currentEmp.id, this.currentEmpType).subscribe(function (data) {
                if (data) {
                  _this8.invalidTXT = "";
                  var a1 = data.filter(function (q) {
                    return Number(q.a1) !== 0;
                  });
                  var a2 = data.filter(function (q) {
                    return Number(q.a2) !== 0;
                  });
                  var a3 = data.filter(function (q) {
                    return Number(q.a3) !== 0;
                  });
                  var b1 = data.filter(function (q) {
                    return Number(q.b1) !== 0;
                  });
                  var b2 = data.filter(function (q) {
                    return Number(q.b2) !== 0;
                  });
                  var c = data.filter(function (q) {
                    return Number(q.c) !== 0;
                  });
                  _this8.invalidTXT += a1 === null || a1 === void 0 ? void 0 : a1.length;
                  _this8.invalidTXT += " - " + (a2 === null || a2 === void 0 ? void 0 : a2.length);
                  _this8.invalidTXT += " - " + (a3 === null || a3 === void 0 ? void 0 : a3.length);
                  _this8.invalidTXT += " - " + (b1 === null || b1 === void 0 ? void 0 : b1.length);
                  _this8.invalidTXT += " - " + (b2 === null || b2 === void 0 ? void 0 : b2.length);
                  _this8.invalidTXT += " - " + (c === null || c === void 0 ? void 0 : c.length); // console.log("a1 -> ", a1);

                  if ((a1 === null || a1 === void 0 ? void 0 : a1.length) < 2 || (a2 === null || a2 === void 0 ? void 0 : a2.length) < 2 || (a3 === null || a3 === void 0 ? void 0 : a3.length) < 2 || (b1 === null || b1 === void 0 ? void 0 : b1.length) < 2 || (b2 === null || b2 === void 0 ? void 0 : b2.length) < 2 || (c === null || c === void 0 ? void 0 : c.length) < 2) {
                    _this8.isValidNA = false;
                  } else {
                    _this8.isValidNA = true;
                  }
                }
              });
              this.next = true;
              this.sub1.unsubscribe();
            }
          }
        }, {
          key: "nextEmp",
          value: function nextEmp() {
            var _this9 = this;

            this.next = false;
            this.invalidTXT = "";

            if (this.index + 2 > this.currentIDs.length) {
              this.currentService.nextEmp(1000).subscribe(function (res) {
                _this9.router.navigate(["/finish-admin"]);
              });
            } else {
              this.index++;
              this.currentService.nextEmp(this.currentIDs[this.index]).toPromise().then(function (res) {
                _this9.currentService.getEmpByID(_this9.currentIDs[_this9.index]).subscribe(function (data) {
                  if (data) {
                    _this9.currentEmp = data;
                    _this9.sub1 = _this9.currentInterval.subscribe(function (val) {
                      return _this9.assessorsService.currentAssessors();
                    });
                  }
                });
              }, function (err) {
                return console.log("next -> ", err);
              });
            }
          }
        }, {
          key: "revoteFN",
          value: function revoteFN(assessorID) {
            var _this10 = this;

            this.next = false;
            this.currentService.revoteFN(assessorID, this.current.emp_id, this.current.emp_type).subscribe(function (res) {
              _this10.sub1 = _this10.currentInterval.subscribe(function (val) {
                return _this10.assessorsService.currentAssessors();
              });
            });
          }
        }, {
          key: "deleteAssessorFN",
          value: function deleteAssessorFN(id) {
            this.assessorsService.deleteAssessorFN(id).toPromise()["catch"](function (e) {
              return console.log("delete assessor failed -->", e);
            });
          }
        }, {
          key: "getCity",
          value: function getCity(id) {
            if (this.cities) {
              var city = this.cities.find(function (c) {
                return c.id === id;
              });
              return (city === null || city === void 0 ? void 0 : city.city) ? city.city : "";
            }

            return "";
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.sub1.unsubscribe();
          }
        }]);

        return _AssessmentAdminComponent;
      }();

      _AssessmentAdminComponent.ɵfac = function AssessmentAdminComponent_Factory(t) {
        return new (t || _AssessmentAdminComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared__WEBPACK_IMPORTED_MODULE_0__.CurrentService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared__WEBPACK_IMPORTED_MODULE_0__.AssessorsService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared__WEBPACK_IMPORTED_MODULE_0__.CheckNAService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared__WEBPACK_IMPORTED_MODULE_0__.CityService));
      };

      _AssessmentAdminComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: _AssessmentAdminComponent,
        selectors: [["app-assessment-admin"]],
        decls: 17,
        vars: 5,
        consts: [[1, "container"], [1, "empIMG"], ["onError", "this.src='assets/img/photo.jpg'", 3, "src"], [1, "invalidNA"], ["mat-flat-button", "", "color", "primary", 3, "disabled", "click"], ["class", "desc", 4, "ngIf"], [1, "assessors"], [1, "assessorsCon"], ["style", "margin-bottom: 10px;min-height: 50px!important;max-height: 50px!important;", 4, "ngFor", "ngForOf"], ["wait", ""], [1, "desc"], [1, "empData"], [1, "titleTD"], [2, "margin-bottom", "10px", "min-height", "50px!important", "max-height", "50px!important"], [2, "color", "#333"], ["class", "example-icon", 4, "ngIf"], [2, "font-weight", "300"], [1, "example-spacer"], ["mat-icon-button", ""], ["class", "example-icon", 3, "click", 4, "ngIf"], [1, "example-icon", 3, "click"], [1, "example-icon"], [1, "card", 2, "width", "90%", "max-width", "400px", "margin", "50px auto", "padding", "100px 20px 20px 20px", "position", "relative"], [1, "cardTitle"]],
        template: function AssessmentAdminComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AssessmentAdminComponent_Template_button_click_7_listener() {
              return ctx.nextEmp();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, " Next ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, AssessmentAdminComponent_mat_card_9_Template, 34, 7, "mat-card", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "mat-card", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Assessors");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, AssessmentAdminComponent_mat_toolbar_14_Template, 11, 3, "mat-toolbar", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, AssessmentAdminComponent_ng_template_15_Template, 3, 0, "ng-template", null, 9, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("src", "assets/img/", ctx.currentEmp == null ? null : ctx.currentEmp.mudID, ".jpg", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.invalidTXT);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx.next || !ctx.isValidNA);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.currentEmp);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.currentAssessors);
          }
        },
        directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatButton, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_material_card__WEBPACK_IMPORTED_MODULE_7__.MatCard, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__.MatToolbar, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__.MatToolbarRow, _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__.MatIcon],
        styles: [".example-icon[_ngcontent-%COMP%] {\n  margin: 0 14px;\n}\n\n.example-spacer[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n}\n\nh2[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 20px;\n  font-weight: 400;\n  margin-top: 32px !important;\n}\n\n.container[_ngcontent-%COMP%] {\n  width: 90%;\n  max-width: 1400px;\n  margin: 32px auto 0 auto;\n  display: flex;\n  justify-content: space-between;\n  align-items: stretch;\n}\n\n.empIMG[_ngcontent-%COMP%] {\n  width: 20%;\n  border-top:4px solid #fc601e;\n  text-align: center;\n}\n\n.desc[_ngcontent-%COMP%] {\n  width: 30%;\n  min-height: 550px;\n  padding:16px 0 0 0 !important;\n}\n\n.assessors[_ngcontent-%COMP%] {\n  width: 40%;\n  min-height: 550px;\n  padding: 16px 0 0 0 !important;\n}\n\ntable[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0px;\n  width: 100%;\n  margin:32px auto;\n  border-collapse: collapse;\n}\n\ntd[_ngcontent-%COMP%] {\n  padding: 16px 10px;\n  font-size: 14px;\n  border-top: 1px solid #ccc;\n}\n\ntd.titleTD[_ngcontent-%COMP%] {\n  color: #fc601e;\n  font-weight: bold;\n}\n\ntr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(2) {\n  color: #666;\n  border-left: 1px solid #ccc;\n}\n\n.assessorsCon[_ngcontent-%COMP%] {\n  padding: 16px;\n  width: 100%;\n  position: absolute;\n  bottom: 0;\n}\n\n.empIMG[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\n  width: 100%;\n}\n\n.empIMG[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin-top: 32px;\n  width: 100%;\n  \n}\n\n.invalidNA[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 0;\n  padding-bottom: 32px;\n  width: 100%;\n  text-align: center;\n  color: #ccc;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2Vzc21lbnQtYWRtaW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUNBO0VBQ0UsY0FBYztFQUNkLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsMkJBQTJCO0FBQzdCOztBQUNBO0VBQ0UsVUFBVTtFQUNWLGlCQUFpQjtFQUNqQix3QkFBd0I7RUFDeEIsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixvQkFBb0I7QUFDdEI7O0FBQ0E7RUFDRSxVQUFVO0VBQ1YsNEJBQTRCO0VBQzVCLGtCQUFrQjtBQUNwQjs7QUFDQTtFQUNFLFVBQVU7RUFDVixpQkFBaUI7RUFDakIsNkJBQTZCO0FBQy9COztBQUNBO0VBQ0UsVUFBVTtFQUNWLGlCQUFpQjtFQUNqQiw4QkFBOEI7QUFDaEM7O0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZiwwQkFBMEI7QUFDNUI7O0FBQ0E7RUFDRSxjQUFjO0VBQ2QsaUJBQWlCO0FBQ25COztBQUNBO0VBQ0UsV0FBVztFQUNYLDJCQUEyQjtBQUM3Qjs7QUFDQTtFQUNFLGFBQWE7RUFDYixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFNBQVM7QUFDWDs7QUFDQTtFQUNFLFdBQVc7QUFDYjs7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsMENBQTBDO0FBQzVDOztBQUNBO0VBQ0UsZUFBZTtFQUNmLFNBQVM7RUFDVCxvQkFBb0I7RUFDcEIsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixXQUFXO0FBQ2IiLCJmaWxlIjoiYXNzZXNzbWVudC1hZG1pbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtaWNvbiB7XG4gIG1hcmdpbjogMCAxNHB4O1xufVxuXG4uZXhhbXBsZS1zcGFjZXIge1xuICBmbGV4OiAxIDEgYXV0bztcbn1cbmgyIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbWFyZ2luLXRvcDogMzJweCAhaW1wb3J0YW50O1xufVxuLmNvbnRhaW5lciB7XG4gIHdpZHRoOiA5MCU7XG4gIG1heC13aWR0aDogMTQwMHB4O1xuICBtYXJnaW46IDMycHggYXV0byAwIGF1dG87XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG59XG4uZW1wSU1HIHtcbiAgd2lkdGg6IDIwJTtcbiAgYm9yZGVyLXRvcDo0cHggc29saWQgI2ZjNjAxZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmRlc2Mge1xuICB3aWR0aDogMzAlO1xuICBtaW4taGVpZ2h0OiA1NTBweDtcbiAgcGFkZGluZzoxNnB4IDAgMCAwICFpbXBvcnRhbnQ7XG59XG4uYXNzZXNzb3JzIHtcbiAgd2lkdGg6IDQwJTtcbiAgbWluLWhlaWdodDogNTUwcHg7XG4gIHBhZGRpbmc6IDE2cHggMCAwIDAgIWltcG9ydGFudDtcbn1cbnRhYmxlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjozMnB4IGF1dG87XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG59XG5cbnRkIHtcbiAgcGFkZGluZzogMTZweCAxMHB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjY2NjO1xufVxudGQudGl0bGVURCB7XG4gIGNvbG9yOiAjZmM2MDFlO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbnRyIHRkOm50aC1jaGlsZCgyKSB7XG4gIGNvbG9yOiAjNjY2O1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNjY2M7XG59XG4uYXNzZXNzb3JzQ29uIHtcbiAgcGFkZGluZzogMTZweDtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwO1xufVxuLmVtcElNRyBpbWd7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmVtcElNRyBidXR0b24ge1xuICBtYXJnaW4tdG9wOiAzMnB4O1xuICB3aWR0aDogMTAwJTtcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogI2ZjNjAxZSAhaW1wb3J0YW50OyAqL1xufVxuLmludmFsaWROQSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAwO1xuICBwYWRkaW5nLWJvdHRvbTogMzJweDtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICNjY2M7XG59Il19 */"]
      });
      /***/
    },

    /***/
    2204:
    /*!**************************************************************!*\
      !*** ./src/app/pages/finish-admin/finish-admin.component.ts ***!
      \**************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "FinishAdminComponent": function FinishAdminComponent() {
          return (
            /* binding */
            _FinishAdminComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      7716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      9895);
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/card */
      3738);
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/button */
      1095);

      var _FinishAdminComponent = /*#__PURE__*/function () {
        function _FinishAdminComponent(router) {
          _classCallCheck(this, _FinishAdminComponent);

          this.router = router;
        }

        _createClass(_FinishAdminComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "newAssessment",
          value: function newAssessment() {
            this.router.navigate(['/setup']);
          }
        }]);

        return _FinishAdminComponent;
      }();

      _FinishAdminComponent.ɵfac = function FinishAdminComponent_Factory(t) {
        return new (t || _FinishAdminComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router));
      };

      _FinishAdminComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _FinishAdminComponent,
        selectors: [["app-finish-admin"]],
        decls: 5,
        vars: 0,
        consts: [["mat-flat-button", "", "color", "primary", 3, "click"]],
        template: function FinishAdminComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Assessment Finished!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FinishAdminComponent_Template_button_click_3_listener() {
              return ctx.newAssessment();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " New Assessment ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCard, _angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatButton],
        styles: ["mat-card[_ngcontent-%COMP%] {\n    text-align: center;\n    max-width: 500px;\n    margin: 64px auto;\n}\nh2[_ngcontent-%COMP%] {\n    margin-top: 32px!important;\n}\nbutton[_ngcontent-%COMP%] {\n    margin: 100px auto 32px auto!important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbmlzaC1hZG1pbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLDBCQUEwQjtBQUM5QjtBQUNBO0lBQ0ksc0NBQXNDO0FBQzFDIiwiZmlsZSI6ImZpbmlzaC1hZG1pbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LWNhcmQge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXgtd2lkdGg6IDUwMHB4O1xuICAgIG1hcmdpbjogNjRweCBhdXRvO1xufVxuaDIge1xuICAgIG1hcmdpbi10b3A6IDMycHghaW1wb3J0YW50O1xufVxuYnV0dG9uIHtcbiAgICBtYXJnaW46IDEwMHB4IGF1dG8gMzJweCBhdXRvIWltcG9ydGFudDtcbn0iXX0= */"]
      });
      /***/
    },

    /***/
    7566:
    /*!********************************!*\
      !*** ./src/app/pages/index.ts ***!
      \********************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AdminComponent": function AdminComponent() {
          return (
            /* reexport safe */
            _admin_admin_component__WEBPACK_IMPORTED_MODULE_0__.AdminComponent
          );
        },

        /* harmony export */
        "AssessmentAdminComponent": function AssessmentAdminComponent() {
          return (
            /* reexport safe */
            _assessment_admin_assessment_admin_component__WEBPACK_IMPORTED_MODULE_1__.AssessmentAdminComponent
          );
        },

        /* harmony export */
        "FinishAdminComponent": function FinishAdminComponent() {
          return (
            /* reexport safe */
            _finish_admin_finish_admin_component__WEBPACK_IMPORTED_MODULE_2__.FinishAdminComponent
          );
        },

        /* harmony export */
        "SetupComponent": function SetupComponent() {
          return (
            /* reexport safe */
            _setup_setup_component__WEBPACK_IMPORTED_MODULE_3__.SetupComponent
          );
        },

        /* harmony export */
        "ReportsComponent": function ReportsComponent() {
          return (
            /* reexport safe */
            _reports_reports_component__WEBPACK_IMPORTED_MODULE_4__.ReportsComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _admin_admin_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./admin/admin.component */
      6601);
      /* harmony import */


      var _assessment_admin_assessment_admin_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./assessment-admin/assessment-admin.component */
      405);
      /* harmony import */


      var _finish_admin_finish_admin_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./finish-admin/finish-admin.component */
      2204);
      /* harmony import */


      var _setup_setup_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./setup/setup.component */
      4012);
      /* harmony import */


      var _reports_reports_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./reports/reports.component */
      6625);
      /***/

    },

    /***/
    6625:
    /*!****************************************************!*\
      !*** ./src/app/pages/reports/reports.component.ts ***!
      \****************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ReportsComponent": function ReportsComponent() {
          return (
            /* binding */
            _ReportsComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! tslib */
      4762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      7716);
      /* harmony import */


      var _reports_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./reports.service */
      6569);
      /* harmony import */


      var src_app_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/shared */
      1679);
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/card */
      3738);
      /* harmony import */


      var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/button-toggle */
      2542);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/button */
      1095);
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/form-field */
      8295);
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/input */
      3166);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/common */
      8583);

      function ReportsComponent_ng_contaier_27_Template(rf, ctx) {
        if (rf & 1) {
          var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ng-contaier");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "button", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ReportsComponent_ng_contaier_27_Template_button_click_3_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r2);

            var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r1.exportReport();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Export Report");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.selectedEmp.name);
        }
      }

      var _ReportsComponent = /*#__PURE__*/function () {
        function _ReportsComponent(reportsService, currentService) {
          _classCallCheck(this, _ReportsComponent);

          this.reportsService = reportsService;
          this.currentService = currentService;
          this.type = 'mr';
        }

        _createClass(_ReportsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee);
            }));
          }
        }, {
          key: "exportReports",
          value: function exportReports() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var reportsData, rawReport, scoredReport;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.reportsService.prepareReportsData(this.type);

                    case 2:
                      reportsData = _context2.sent;
                      console.log('reports data -----> ', reportsData);
                      _context2.next = 6;
                      return this.reportsService.getRawReport(reportsData === null || reportsData === void 0 ? void 0 : reportsData.allAssessors, reportsData === null || reportsData === void 0 ? void 0 : reportsData.allEmp, reportsData === null || reportsData === void 0 ? void 0 : reportsData.allReviews);

                    case 6:
                      rawReport = _context2.sent;
                      _context2.next = 9;
                      return this.reportsService.getScoredReport(reportsData === null || reportsData === void 0 ? void 0 : reportsData.allEmp, reportsData === null || reportsData === void 0 ? void 0 : reportsData.allReviews);

                    case 9:
                      scoredReport = _context2.sent;
                      this.reportsService.exportReport(rawReport, scoredReport, this.type);

                    case 11:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          } // async getAssessedIDs() {
          //   const reviews = await this.reportsService.getTypeReviews(this.type).toPromise()
          //   this.assessedIDs = [...new Set(reviews?.map((e) => String(e.emp_id)))];
          // }

        }, {
          key: "findEMP",
          value: function findEMP() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var _this11 = this;

              var allEmp;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return this.currentService.getAllByType(this.type).toPromise();

                    case 2:
                      allEmp = _context3.sent;
                      this.selectedEmp = allEmp.find(function (e) {
                        return e.mudID.toLowerCase() === _this11.mudID.toLowerCase();
                      });
                      console.log('selected emp -->', this.selectedEmp);

                    case 5:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "exportReport",
          value: function exportReport() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      _context4.next = 2;
                      return this.reportsService.exportSingleReport(this.selectedEmp, this.type);

                    case 2:
                      this.mudID = '';

                    case 3:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }
        }]);

        return _ReportsComponent;
      }();

      _ReportsComponent.ɵfac = function ReportsComponent_Factory(t) {
        return new (t || _ReportsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_reports_service__WEBPACK_IMPORTED_MODULE_0__.ReportsService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_shared__WEBPACK_IMPORTED_MODULE_1__.CurrentService));
      };

      _ReportsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: _ReportsComponent,
        selectors: [["app-reports"]],
        decls: 28,
        vars: 5,
        consts: [[1, "container"], [1, "cardFooter1"], [3, "ngModel", "ngModelChange"], ["value", "mr"], ["value", "flsl"], ["mat-stroked-button", "", "color", "primary", 3, "click"], [2, "min-height", "400px"], ["matInput", "", "placeholder", "MUD ID", 3, "ngModel", "ngModelChange"], [1, "cardFooter2"], [1, "imgCon"], ["onError", "this.src='assets/img/photo.jpg'", "width", "100%", 3, "src"], [4, "ngIf"], ["mat-flat-button", "", "color", "primary", 3, "click"]],
        template: function ReportsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Entire Assessment");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "mat-button-toggle-group", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ReportsComponent_Template_mat_button_toggle_group_ngModelChange_5_listener($event) {
              return ctx.type = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "mat-button-toggle", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "MR");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "mat-button-toggle", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "FLL");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ReportsComponent_Template_button_click_10_listener() {
              return ctx.exportReports();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, " Extract ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "mat-card", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "Individual Report");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "input", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ReportsComponent_Template_input_ngModelChange_16_listener($event) {
              return ctx.mudID = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "mat-button-toggle-group", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ReportsComponent_Template_mat_button_toggle_group_ngModelChange_17_listener($event) {
              return ctx.type = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "mat-button-toggle", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "MR");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "mat-button-toggle", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "FLL");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ReportsComponent_Template_button_click_22_listener() {
              return ctx.findEMP();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "Find");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](24, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](26, "img", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](27, ReportsComponent_ng_contaier_27_Template, 5, 1, "ng-contaier", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.type);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.mudID);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.type);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("src", "assets/img/", ctx.selectedEmp == null ? null : ctx.selectedEmp.mudID, ".jpg", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.selectedEmp);
          }
        },
        directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_4__.MatCard, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_5__.MatButtonToggleGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgModel, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_5__.MatButtonToggle, _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatButton, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatFormField, _angular_material_input__WEBPACK_IMPORTED_MODULE_9__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf],
        styles: [".container[_ngcontent-%COMP%] {\n  width: 90%;\n  max-width: 1000px;\n  margin: 32px auto 0 auto;\n  display: flex;\n  justify-content: space-between;\n  align-items: stretch;\n}\n.imgCon[_ngcontent-%COMP%] {\n  width: 25%;\n  text-align: center;\n}\n.imgCon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  border-top: 4px solid #fc601e;\n}\n.imgCon[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 80%;\n}\nmat-card[_ngcontent-%COMP%] {\n  width: 35%;\n  text-align: center;\n  padding: 0 !important;\n}\nmat-form-field[_ngcontent-%COMP%] {\n  display: block;\n  width: 50%;\n  margin: 0 auto;\n  text-align: center;\n}\nmat-button-toggle-group[_ngcontent-%COMP%] {\n  width: 50%;\n  margin: 0 auto 16px auto;\n}\nmat-button-toggle[_ngcontent-%COMP%]{\n  width: 50%;\n}\nbutton[_ngcontent-%COMP%] {\n  display: block;\n  width: 50%;\n  margin: 0 auto 16px auto;\n}\nh4[_ngcontent-%COMP%] {\n  color: #999;\n}\nh2[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 18px;\n  font-weight: 400;\n  margin-top: 32px !important;\n}\n.cardFooter1[_ngcontent-%COMP%] {\n  width: 100%;\n  position: absolute;\n  bottom: 30%;\n  text-align: center;\n}\n.cardFooter2[_ngcontent-%COMP%] {\n    width: 100%;\n    position: absolute;\n    bottom: 0;\n    text-align: center;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlcG9ydHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFVBQVU7RUFDVixpQkFBaUI7RUFDakIsd0JBQXdCO0VBQ3hCLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsb0JBQW9CO0FBQ3RCO0FBQ0E7RUFDRSxVQUFVO0VBQ1Ysa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSw2QkFBNkI7QUFDL0I7QUFDQTtFQUNFLFVBQVU7QUFDWjtBQUNBO0VBQ0UsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixxQkFBcUI7QUFDdkI7QUFFQTtFQUNFLGNBQWM7RUFDZCxVQUFVO0VBQ1YsY0FBYztFQUNkLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsVUFBVTtFQUNWLHdCQUF3QjtBQUMxQjtBQUVBO0VBQ0UsVUFBVTtBQUNaO0FBRUE7RUFDRSxjQUFjO0VBQ2QsVUFBVTtFQUNWLHdCQUF3QjtBQUMxQjtBQUVBO0VBQ0UsV0FBVztBQUNiO0FBRUE7RUFDRSxjQUFjO0VBQ2QsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQiwyQkFBMkI7QUFDN0I7QUFFQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLGtCQUFrQjtBQUNwQjtBQUVBO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1Qsa0JBQWtCO0VBQ3BCIiwiZmlsZSI6InJlcG9ydHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xuICB3aWR0aDogOTAlO1xuICBtYXgtd2lkdGg6IDEwMDBweDtcbiAgbWFyZ2luOiAzMnB4IGF1dG8gMCBhdXRvO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xufVxuLmltZ0NvbiB7XG4gIHdpZHRoOiAyNSU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5pbWdDb24gaW1nIHtcbiAgYm9yZGVyLXRvcDogNHB4IHNvbGlkICNmYzYwMWU7XG59XG4uaW1nQ29uIGJ1dHRvbiB7XG4gIHdpZHRoOiA4MCU7XG59XG5tYXQtY2FyZCB7XG4gIHdpZHRoOiAzNSU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xufVxuXG5tYXQtZm9ybS1maWVsZCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogNTAlO1xuICBtYXJnaW46IDAgYXV0bztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxubWF0LWJ1dHRvbi10b2dnbGUtZ3JvdXAge1xuICB3aWR0aDogNTAlO1xuICBtYXJnaW46IDAgYXV0byAxNnB4IGF1dG87XG59XG5cbm1hdC1idXR0b24tdG9nZ2xle1xuICB3aWR0aDogNTAlO1xufVxuXG5idXR0b24ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDUwJTtcbiAgbWFyZ2luOiAwIGF1dG8gMTZweCBhdXRvO1xufVxuXG5oNCB7XG4gIGNvbG9yOiAjOTk5O1xufVxuXG5oMiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIG1hcmdpbi10b3A6IDMycHggIWltcG9ydGFudDtcbn1cblxuLmNhcmRGb290ZXIxIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAzMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmNhcmRGb290ZXIyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAwO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICBcbiJdfQ== */"]
      });
      /***/
    },

    /***/
    6569:
    /*!**************************************************!*\
      !*** ./src/app/pages/reports/reports.service.ts ***!
      \**************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ReportsService": function ReportsService() {
          return (
            /* binding */
            _ReportsService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! tslib */
      4762);
      /* harmony import */


      var src_app_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/shared */
      1679);
      /* harmony import */


      var file_saver__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! file-saver */
      9457);
      /* harmony import */


      var file_saver__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_1__);
      /* harmony import */


      var xlsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! xlsx */
      8618);
      /* harmony import */


      var xlsx__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(xlsx__WEBPACK_IMPORTED_MODULE_2__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      7716);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common/http */
      1841);

      var _ReportsService = /*#__PURE__*/function () {
        function _ReportsService(assessorsService, currentService, http) {
          _classCallCheck(this, _ReportsService);

          this.assessorsService = assessorsService;
          this.currentService = currentService;
          this.http = http;
          this.fileType = "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
          this.fileExtension = ".xlsx";
        }

        _createClass(_ReportsService, [{
          key: "getTypeReviews",
          value: function getTypeReviews(type) {
            return this.http.post(src_app_shared__WEBPACK_IMPORTED_MODULE_0__.environment.typeReviewsAPI, {
              type: type
            });
          }
        }, {
          key: "prepareReportsData",
          value: function prepareReportsData(type) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              var allAssessors, allEmp, allReviews;
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      _context5.next = 2;
                      return this.assessorsService.getAllAssessors().toPromise();

                    case 2:
                      allAssessors = _context5.sent;
                      _context5.next = 5;
                      return this.currentService.getAllByType(type).toPromise();

                    case 5:
                      allEmp = _context5.sent;
                      _context5.next = 8;
                      return this.getTypeReviews(type).toPromise();

                    case 8:
                      allReviews = _context5.sent;
                      return _context5.abrupt("return", {
                        allAssessors: allAssessors,
                        allEmp: allEmp,
                        allReviews: allReviews
                      });

                    case 10:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));
          }
        }, {
          key: "getRawReport",
          value: function getRawReport(allAssessors, allEmp, allReviews) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
              var reportData;
              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      reportData = [];
                      allReviews.forEach(function (review) {
                        var report = {};
                        var emp = allEmp.find(function (m) {
                          return m.id == review.emp_id;
                        });
                        var assessor = allAssessors.find(function (a) {
                          return Number(a.id) == Number(review.assessor_id);
                        });
                        report.Name = emp === null || emp === void 0 ? void 0 : emp.name;
                        report.Assessor = assessor === null || assessor === void 0 ? void 0 : assessor.name;
                        report.Q1 = review.a1;
                        report.Q2 = review.a2;
                        report.Q3 = review.a3;
                        report.Q4 = review.b1;
                        report.Q5 = review.b2;
                        report.Q6 = review.c;
                        report.comment = review.comment;
                        reportData.push(report);
                      });
                      return _context6.abrupt("return", reportData);

                    case 3:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6);
            }));
          }
        }, {
          key: "getScoredReport",
          value: function getScoredReport(allEmp, allReviews) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
              var reportData, IDs;
              return regeneratorRuntime.wrap(function _callee7$(_context7) {
                while (1) {
                  switch (_context7.prev = _context7.next) {
                    case 0:
                      reportData = [];
                      IDs = _toConsumableArray(new Set(allReviews.map(function (e) {
                        return e.emp_id;
                      })));
                      IDs === null || IDs === void 0 ? void 0 : IDs.forEach(function (id) {
                        var reviews = allReviews.filter(function (r) {
                          return r.emp_id === id;
                        });
                        var emp = allEmp.find(function (m) {
                          return m.id === id;
                        });
                        var report = {};
                        report.Name = emp === null || emp === void 0 ? void 0 : emp.name;
                        report.office = emp === null || emp === void 0 ? void 0 : emp.office;
                        report.Q1 = 0;
                        report.Q2 = 0;
                        report.Q3 = 0;
                        report.Q4 = 0;
                        report.Q5 = 0;
                        report.Q6 = 0;
                        reviews === null || reviews === void 0 ? void 0 : reviews.forEach(function (review) {
                          report.Q1 += review.a1;
                          report.Q2 += review.a2;
                          report.Q3 += review.a3;
                          report.Q4 += review.b1;
                          report.Q5 += review.b2;
                          report.Q6 += review.c;
                        });
                        report.Q1 = Number((report.Q1 / reviews.length).toFixed(2));
                        report.Q2 = Number((report.Q2 / reviews.length).toFixed(2));
                        report.Q3 = Number((report.Q3 / reviews.length).toFixed(2));
                        report.Q4 = Number((report.Q4 / reviews.length).toFixed(2));
                        report.Q5 = Number((report.Q5 / reviews.length).toFixed(2));
                        report.Q6 = Number((report.Q6 / reviews.length).toFixed(2));
                        var sum = report.Q1 + report.Q2 + report.Q3 + report.Q4 + report.Q5 + report.Q6;
                        report.Total = Number((sum / 6).toFixed(2));
                        reportData.push(report);
                      });
                      return _context7.abrupt("return", reportData);

                    case 4:
                    case "end":
                      return _context7.stop();
                  }
                }
              }, _callee7);
            }));
          }
        }, {
          key: "exportReport",
          value: function exportReport(rawReport, scoredReport, type) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
              var cols1, cols2, wb, sheet1, sheet2, excelBuffer;
              return regeneratorRuntime.wrap(function _callee8$(_context8) {
                while (1) {
                  switch (_context8.prev = _context8.next) {
                    case 0:
                      cols1 = [{
                        width: 30
                      }, {
                        width: 30
                      }, {
                        width: 7
                      }, {
                        width: 7
                      }, {
                        width: 7
                      }, {
                        width: 7
                      }, {
                        width: 7
                      }, {
                        width: 7
                      }, {
                        width: 30
                      }];
                      cols2 = [{
                        width: 30
                      }, {
                        width: 20
                      }, {
                        width: 7
                      }, {
                        width: 7
                      }, {
                        width: 7
                      }, {
                        width: 7
                      }, {
                        width: 7
                      }, {
                        width: 7
                      }, {
                        width: 10
                      }];
                      wb = xlsx__WEBPACK_IMPORTED_MODULE_2__.utils.book_new();
                      sheet1 = xlsx__WEBPACK_IMPORTED_MODULE_2__.utils.json_to_sheet(rawReport);
                      sheet2 = xlsx__WEBPACK_IMPORTED_MODULE_2__.utils.json_to_sheet(scoredReport);
                      sheet1["!cols"] = cols1;
                      sheet2["!cols"] = cols2;
                      xlsx__WEBPACK_IMPORTED_MODULE_2__.utils.book_append_sheet(wb, sheet1, "Raw");
                      xlsx__WEBPACK_IMPORTED_MODULE_2__.utils.book_append_sheet(wb, sheet2, "Scored");
                      excelBuffer = xlsx__WEBPACK_IMPORTED_MODULE_2__.write(wb, {
                        bookType: "xlsx",
                        type: "array"
                      });
                      this.saveExcelFile(excelBuffer, type);
                      return _context8.abrupt("return");

                    case 12:
                    case "end":
                      return _context8.stop();
                  }
                }
              }, _callee8, this);
            }));
          }
        }, {
          key: "saveExcelFile",
          value: function saveExcelFile(buffer, fileName) {
            var data = new Blob([buffer], {
              type: this.fileType
            });
            file_saver__WEBPACK_IMPORTED_MODULE_1__.saveAs(data, fileName + this.fileExtension);
          }
        }, {
          key: "exportSingleReport",
          value: function exportSingleReport(emp, type) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
              var reportData, reviews, empReviews, allAssessors, cols1, wb, sheet1, excelBuffer;
              return regeneratorRuntime.wrap(function _callee9$(_context9) {
                while (1) {
                  switch (_context9.prev = _context9.next) {
                    case 0:
                      reportData = [];
                      _context9.next = 3;
                      return this.getTypeReviews(type).toPromise();

                    case 3:
                      reviews = _context9.sent;
                      empReviews = reviews === null || reviews === void 0 ? void 0 : reviews.filter(function (e) {
                        return e.emp_type === type;
                      });
                      _context9.next = 7;
                      return this.assessorsService.getAllAssessors().toPromise();

                    case 7:
                      allAssessors = _context9.sent;
                      empReviews.forEach(function (review) {
                        var report = {};
                        var assessor = allAssessors.find(function (a) {
                          return Number(a.id) == Number(review.assessor_id);
                        });
                        report.Assessor = assessor === null || assessor === void 0 ? void 0 : assessor.name;
                        report.Q1 = review.a1;
                        report.Q2 = review.a2;
                        report.Q3 = review.a3;
                        report.Q4 = review.b1;
                        report.Q5 = review.b2;
                        report.Q6 = review.c;
                        report.comment = review.comment;
                        reportData.push(report);
                      });
                      cols1 = [{
                        width: 30
                      }, {
                        width: 7
                      }, {
                        width: 7
                      }, {
                        width: 7
                      }, {
                        width: 7
                      }, {
                        width: 7
                      }, {
                        width: 7
                      }, {
                        width: 60
                      }];
                      wb = xlsx__WEBPACK_IMPORTED_MODULE_2__.utils.book_new();
                      sheet1 = xlsx__WEBPACK_IMPORTED_MODULE_2__.utils.json_to_sheet(reportData);
                      sheet1["!cols"] = cols1;
                      xlsx__WEBPACK_IMPORTED_MODULE_2__.utils.book_append_sheet(wb, sheet1, emp.mudID);
                      excelBuffer = xlsx__WEBPACK_IMPORTED_MODULE_2__.write(wb, {
                        bookType: "xlsx",
                        type: "array"
                      });
                      this.saveExcelFile(excelBuffer, emp.mudID);
                      return _context9.abrupt("return");

                    case 17:
                    case "end":
                      return _context9.stop();
                  }
                }
              }, _callee9, this);
            }));
          }
        }]);

        return _ReportsService;
      }();

      _ReportsService.ɵfac = function ReportsService_Factory(t) {
        return new (t || _ReportsService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](src_app_shared__WEBPACK_IMPORTED_MODULE_0__.AssessorsService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](src_app_shared__WEBPACK_IMPORTED_MODULE_0__.CurrentService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient));
      };

      _ReportsService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
        token: _ReportsService,
        factory: _ReportsService.ɵfac,
        providedIn: "root"
      });
      /***/
    },

    /***/
    4012:
    /*!************************************************!*\
      !*** ./src/app/pages/setup/setup.component.ts ***!
      \************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SetupComponent": function SetupComponent() {
          return (
            /* binding */
            _SetupComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      7716);
      /* harmony import */


      var _shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../shared */
      1679);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      9895);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      8583);
      /* harmony import */


      var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/stepper */
      4553);
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/form-field */
      8295);
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/select */
      7441);
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/button */
      1095);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/core */
      7817);

      function SetupComponent_mat_vertical_stepper_4_ng_template_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, "Cluster");
        }
      }

      function SetupComponent_mat_vertical_stepper_4_mat_option_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var cluster_r7 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", cluster_r7.id);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](cluster_r7.cluster);
        }
      }

      function SetupComponent_mat_vertical_stepper_4_ng_template_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, "City");
        }
      }

      function SetupComponent_mat_vertical_stepper_4_mat_option_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var city_r8 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", city_r8.id);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](city_r8.city);
        }
      }

      function SetupComponent_mat_vertical_stepper_4_ng_template_19_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, "Title");
        }
      }

      function SetupComponent_mat_vertical_stepper_4_Template(rf, ctx) {
        if (rf & 1) {
          var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-vertical-stepper", null, 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-step");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, SetupComponent_mat_vertical_stepper_4_ng_template_3_Template, 1, 0, "ng-template", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-form-field", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-select", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("selectionChange", function SetupComponent_mat_vertical_stepper_4_Template_mat_select_selectionChange_5_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10);

            var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r9.chooseCluster($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, SetupComponent_mat_vertical_stepper_4_mat_option_6_Template, 2, 2, "mat-option", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "button", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Next");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "mat-step");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, SetupComponent_mat_vertical_stepper_4_ng_template_11_Template, 1, 0, "ng-template", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "mat-form-field", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "mat-select", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SetupComponent_mat_vertical_stepper_4_Template_mat_select_ngModelChange_13_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10);

            var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r11.cityID = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, SetupComponent_mat_vertical_stepper_4_mat_option_14_Template, 2, 2, "mat-option", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "button", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Next");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "mat-step");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, SetupComponent_mat_vertical_stepper_4_ng_template_19_Template, 1, 0, "ng-template", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "mat-form-field", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "mat-select", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SetupComponent_mat_vertical_stepper_4_Template_mat_select_ngModelChange_21_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10);

            var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r12.data.emp_type = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "mat-option", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Choose");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "mat-option", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "MR");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "mat-option", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "FLSL");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "button", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SetupComponent_mat_vertical_stepper_4_Template_button_click_29_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10);

            var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r13.startAssessment();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Next");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.clusters);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r0.cityID);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.citiesFiltered);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r0.data.emp_type);
        }
      }

      var _SetupComponent = /*#__PURE__*/function () {
        function _SetupComponent(currentService, clustersService, cityService, router) {
          _classCallCheck(this, _SetupComponent);

          this.currentService = currentService;
          this.clustersService = clustersService;
          this.cityService = cityService;
          this.router = router;
          this.cityID = "1";
          this.data = {
            cityID: 1,
            emp_id: 1,
            emp_type: "mr"
          };
        }

        _createClass(_SetupComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this12 = this;

            this.clustersService.getClusters().subscribe(function (data) {
              _this12.clusters = data;
            });
            this.cityService.getCities().subscribe(function (data) {
              _this12.cities = data;
              _this12.citiesFiltered = data;
            });
          }
        }, {
          key: "startAssessment",
          value: function startAssessment() {
            var _this13 = this;

            this.data.cityID = Number(this.cityID);
            this.currentService.updateCurrent(this.data).subscribe(function (res) {
              console.log(res);

              _this13.currentService.getCurrent();

              if (res) _this13.router.navigate(["/assessment-admin"]);
            }, function (err) {
              return console.log(err);
            });
          }
        }, {
          key: "chooseCluster",
          value: function chooseCluster(e) {
            var _a;

            console.log("cluster change ->", e.value);
            this.citiesFiltered = this.cities.filter(function (c) {
              return c.clusterID === e.value;
            });
            this.cityID = (_a = this.citiesFiltered[0]) === null || _a === void 0 ? void 0 : _a.id;
          }
        }]);

        return _SetupComponent;
      }();

      _SetupComponent.ɵfac = function SetupComponent_Factory(t) {
        return new (t || _SetupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared__WEBPACK_IMPORTED_MODULE_0__.CurrentService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared__WEBPACK_IMPORTED_MODULE_0__.ClustersService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared__WEBPACK_IMPORTED_MODULE_0__.CityService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router));
      };

      _SetupComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: _SetupComponent,
        selectors: [["app-setup"]],
        decls: 5,
        vars: 1,
        consts: [[2, "min-height", "500px", "padding-top", "0 !important", "padding-bottom", "50px"], [1, "card"], [4, "ngIf"], ["stepper", ""], ["matStepLabel", ""], [2, "width", "100%"], ["value", "1", 3, "selectionChange"], [3, "value", 4, "ngFor", "ngForOf"], ["mat-stroked-button", "", "matStepperNext", ""], [3, "ngModel", "ngModelChange"], ["value", "sll"], ["value", "mr"], ["value", "flsl"], ["mat-stroked-button", "", 3, "click"], [3, "value"]],
        template: function SetupComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "New Assessment");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, SetupComponent_mat_vertical_stepper_4_Template, 31, 4, "mat-vertical-stepper", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.clusters);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_4__.MatStepper, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_4__.MatStep, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_4__.MatStepLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.MatFormField, _angular_material_select__WEBPACK_IMPORTED_MODULE_6__.MatSelect, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatButton, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_4__.MatStepperNext, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgModel, _angular_material_core__WEBPACK_IMPORTED_MODULE_9__.MatOption],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZXR1cC5jb21wb25lbnQuY3NzIn0= */"]
      });
      /***/
    },

    /***/
    4348:
    /*!****************************************************!*\
      !*** ./src/app/shared/environments/environment.ts ***!
      \****************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "environment": function environment() {
          return (
            /* binding */
            _environment
          );
        }
        /* harmony export */

      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var _environment = {
        production: false,
        typesAPI: "http://localhost:8080/gsk/types.php",
        assessorsAPI: "http://localhost:8080/gsk/assessors.php",
        currentAPI: "http://localhost:8080/gsk/current.php",
        empDataAPI: "http://localhost:8080/gsk/emp.php",
        reviewAPI: "http://localhost:8080/gsk/review.php",
        updateCurrentAPI: "http://localhost:8080/gsk/updateCurrent.php",
        clustersAPI: "http://localhost:8080/gsk/clusters.php",
        cityAPI: "http://localhost:8080/gsk/city.php",
        currentIDsAPI: "http://localhost:8080/gsk/currentIDs.php",
        nextEmpAPI: "http://localhost:8080/gsk/nextEmp.php",
        assessorLoginAPI: "http://localhost:8080/gsk/assessorLogin.php",
        currentAssessorsAPI: "http://localhost:8080/gsk/currentAssessors.php",
        revoteAPI: "http://localhost:8080/gsk/revote.php",
        skipAPI: "http://localhost:8080/gsk/skip.php",
        statusAPI: "http://localhost:8080/gsk/status.php",
        deleteAssessorAPI: "http://localhost:8080/gsk/deleteAssessor.php",
        deleteAllAssessorsAPI: "http://localhost:8080/gsk/deleteAllAssessors.php",
        resetAPI: "http://localhost:8080/gsk/reset.php",
        NAcheckAPI: "http://localhost:8080/gsk/checkNA.php",
        mrReviewsAPI: "http://localhost:8080/gsk/mrReviews.php",
        typeReviewsAPI: "http://localhost:8080/gsk/typeReviews.php",
        allAssessorsAPI: "http://localhost:8080/gsk/allAssessors.php",
        allMrAPI: "http://localhost:8080/gsk/allMR.php",
        allFllAPI: "http://localhost:8080/gsk/allFLL.php",
        allByTypeAPI: "http://localhost:8080/gsk/allByType.php"
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    1679:
    /*!*********************************!*\
      !*** ./src/app/shared/index.ts ***!
      \*********************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "MaterialModule": function MaterialModule() {
          return (
            /* reexport safe */
            _material_material_module__WEBPACK_IMPORTED_MODULE_0__.MaterialModule
          );
        },

        /* harmony export */
        "AssessorService": function AssessorService() {
          return (
            /* reexport safe */
            _services__WEBPACK_IMPORTED_MODULE_2__.AssessorService
          );
        },

        /* harmony export */
        "AssessorsService": function AssessorsService() {
          return (
            /* reexport safe */
            _services__WEBPACK_IMPORTED_MODULE_2__.AssessorsService
          );
        },

        /* harmony export */
        "CheckNAService": function CheckNAService() {
          return (
            /* reexport safe */
            _services__WEBPACK_IMPORTED_MODULE_2__.CheckNAService
          );
        },

        /* harmony export */
        "CityService": function CityService() {
          return (
            /* reexport safe */
            _services__WEBPACK_IMPORTED_MODULE_2__.CityService
          );
        },

        /* harmony export */
        "ClustersService": function ClustersService() {
          return (
            /* reexport safe */
            _services__WEBPACK_IMPORTED_MODULE_2__.ClustersService
          );
        },

        /* harmony export */
        "CurrentService": function CurrentService() {
          return (
            /* reexport safe */
            _services__WEBPACK_IMPORTED_MODULE_2__.CurrentService
          );
        },

        /* harmony export */
        "ReportService": function ReportService() {
          return (
            /* reexport safe */
            _services__WEBPACK_IMPORTED_MODULE_2__.ReportService
          );
        },

        /* harmony export */
        "ReviewService": function ReviewService() {
          return (
            /* reexport safe */
            _services__WEBPACK_IMPORTED_MODULE_2__.ReviewService
          );
        },

        /* harmony export */
        "TypesService": function TypesService() {
          return (
            /* reexport safe */
            _services__WEBPACK_IMPORTED_MODULE_2__.TypesService
          );
        },

        /* harmony export */
        "environment": function environment() {
          return (
            /* reexport safe */
            _environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _material_material_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./material/material.module */
      793);
      /* harmony import */


      var _models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./models */
      3157);
      /* harmony import */


      var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./services */
      7253);
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./environments/environment */
      4348);
      /***/

    },

    /***/
    793:
    /*!****************************************************!*\
      !*** ./src/app/shared/material/material.module.ts ***!
      \****************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "MaterialModule": function MaterialModule() {
          return (
            /* binding */
            _MaterialModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/cdk/a11y */
      9238);
      /* harmony import */


      var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/cdk/portal */
      7636);
      /* harmony import */


      var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/cdk/stepper */
      1394);
      /* harmony import */


      var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/autocomplete */
      1554);
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/button */
      1095);
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/card */
      3738);
      /* harmony import */


      var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/checkbox */
      7539);
      /* harmony import */


      var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/stepper */
      4553);
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/icon */
      6627);
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/input */
      3166);
      /* harmony import */


      var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/progress-spinner */
      4885);
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/select */
      7441);
      /* harmony import */


      var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/tabs */
      5939);
      /* harmony import */


      var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/grid-list */
      4929);
      /* harmony import */


      var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/material/toolbar */
      2522);
      /* harmony import */


      var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/material/button-toggle */
      2542);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      7716);

      var _MaterialModule = function _MaterialModule() {
        _classCallCheck(this, _MaterialModule);
      };

      _MaterialModule.ɵfac = function MaterialModule_Factory(t) {
        return new (t || _MaterialModule)();
      };

      _MaterialModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: _MaterialModule
      });
      _MaterialModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        imports: [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__.A11yModule, _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_2__.CdkStepperModule, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_3__.MatAutocompleteModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatButtonModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCardModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_6__.MatCheckboxModule, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_7__.MatStepperModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIconModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_9__.MatInputModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_10__.MatProgressSpinnerModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_11__.MatSelectModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_12__.MatTabsModule, _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_13__.PortalModule, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_14__.MatGridListModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_15__.MatToolbarModule, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_16__.MatButtonToggleModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](_MaterialModule, {
          exports: [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__.A11yModule, _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_2__.CdkStepperModule, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_3__.MatAutocompleteModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatButtonModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCardModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_6__.MatCheckboxModule, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_7__.MatStepperModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIconModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_9__.MatInputModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_10__.MatProgressSpinnerModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_11__.MatSelectModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_12__.MatTabsModule, _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_13__.PortalModule, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_14__.MatGridListModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_15__.MatToolbarModule, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_16__.MatButtonToggleModule]
        });
      })();
      /***/

    },

    /***/
    182:
    /*!****************************************************!*\
      !*** ./src/app/shared/models/assessorInterface.ts ***!
      \****************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /***/

    },

    /***/
    9599:
    /*!*************************************************!*\
      !*** ./src/app/shared/models/city.interface.ts ***!
      \*************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /***/

    },

    /***/
    7181:
    /*!****************************************************!*\
      !*** ./src/app/shared/models/cluster.interface.ts ***!
      \****************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /***/

    },

    /***/
    3621:
    /*!***********************************************************!*\
      !*** ./src/app/shared/models/currentAssessorInterface.ts ***!
      \***********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /***/

    },

    /***/
    459:
    /*!***************************************************!*\
      !*** ./src/app/shared/models/currentInterface.ts ***!
      \***************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /***/

    },

    /***/
    3157:
    /*!****************************************!*\
      !*** ./src/app/shared/models/index.ts ***!
      \****************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _assessorInterface__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./assessorInterface */
      182);
      /* harmony import */


      var _city_interface__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./city.interface */
      9599);
      /* harmony import */


      var _cluster_interface__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./cluster.interface */
      7181);
      /* harmony import */


      var _currentAssessorInterface__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./currentAssessorInterface */
      3621);
      /* harmony import */


      var _currentInterface__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./currentInterface */
      459);
      /* harmony import */


      var _reviewInterface__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./reviewInterface */
      8851);
      /* harmony import */


      var _typeInterface__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./typeInterface */
      603);
      /***/

    },

    /***/
    8851:
    /*!**************************************************!*\
      !*** ./src/app/shared/models/reviewInterface.ts ***!
      \**************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /***/

    },

    /***/
    603:
    /*!************************************************!*\
      !*** ./src/app/shared/models/typeInterface.ts ***!
      \************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /***/

    },

    /***/
    3570:
    /*!*****************************************************!*\
      !*** ./src/app/shared/services/assessor.service.ts ***!
      \*****************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AssessorService": function AssessorService() {
          return (
            /* binding */
            _AssessorService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      7716);

      var _AssessorService = function _AssessorService() {
        _classCallCheck(this, _AssessorService);
      };

      _AssessorService.ɵfac = function AssessorService_Factory(t) {
        return new (t || _AssessorService)();
      };

      _AssessorService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: _AssessorService,
        factory: _AssessorService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    301:
    /*!******************************************************!*\
      !*** ./src/app/shared/services/assessors.service.ts ***!
      \******************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AssessorsService": function AssessorsService() {
          return (
            /* binding */
            _AssessorsService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      6215);
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../environments/environment */
      4348);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      7716);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      1841);

      var _AssessorsService = /*#__PURE__*/function () {
        function _AssessorsService(http) {
          _classCallCheck(this, _AssessorsService);

          this.http = http;
          this.currentAssessors$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject([]);
        }

        _createClass(_AssessorsService, [{
          key: "getAllAssessors",
          value: function getAllAssessors() {
            return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.allAssessorsAPI);
          }
        }, {
          key: "getAssessors",
          value: function getAssessors(id) {
            return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.assessorsAPI, {
              "id": id
            });
          }
        }, {
          key: "getAssessorByID",
          value: function getAssessorByID(id) {
            return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.empDataAPI, {
              emp_type: "assessors",
              emp_id: id
            });
          }
        }, {
          key: "assessorLogin",
          value: function assessorLogin(assessor) {
            return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.assessorLoginAPI, assessor);
          }
        }, {
          key: "currentAssessors",
          value: function currentAssessors() {
            var _this14 = this;

            this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.currentAssessorsAPI).subscribe(function (data) {
              if (data) {
                _this14.currentAssessors$.next(data);
              }
            });
          }
        }, {
          key: "deleteAllAssessors",
          value: function deleteAllAssessors() {
            return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.deleteAllAssessorsAPI, {});
          }
        }, {
          key: "deleteAssessorFN",
          value: function deleteAssessorFN(id) {
            return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.deleteAssessorAPI, {
              assessor_id: id
            });
          }
        }]);

        return _AssessorsService;
      }();

      _AssessorsService.ɵfac = function AssessorsService_Factory(t) {
        return new (t || _AssessorsService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient));
      };

      _AssessorsService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
        token: _AssessorsService,
        factory: _AssessorsService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    4210:
    /*!****************************************************!*\
      !*** ./src/app/shared/services/checkNA.service.ts ***!
      \****************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CheckNAService": function CheckNAService() {
          return (
            /* binding */
            _CheckNAService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var src_app_shared_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/shared/environments/environment */
      4348);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      7716);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      1841);

      var _CheckNAService = /*#__PURE__*/function () {
        function _CheckNAService(http) {
          _classCallCheck(this, _CheckNAService);

          this.http = http;
        }

        _createClass(_CheckNAService, [{
          key: "checkNA",
          value: function checkNA(id, type) {
            return this.http.post(src_app_shared_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.NAcheckAPI, {
              empID: id,
              empType: type
            });
          }
        }]);

        return _CheckNAService;
      }();

      _CheckNAService.ɵfac = function CheckNAService_Factory(t) {
        return new (t || _CheckNAService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
      };

      _CheckNAService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: _CheckNAService,
        factory: _CheckNAService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    6931:
    /*!*************************************************!*\
      !*** ./src/app/shared/services/city.service.ts ***!
      \*************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CityService": function CityService() {
          return (
            /* binding */
            _CityService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var src_app_shared_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/shared/environments/environment */
      4348);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      7716);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      1841);

      var _CityService = /*#__PURE__*/function () {
        function _CityService(http) {
          _classCallCheck(this, _CityService);

          this.http = http;
        }

        _createClass(_CityService, [{
          key: "getCities",
          value: function getCities() {
            return this.http.get(src_app_shared_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.cityAPI);
          }
        }]);

        return _CityService;
      }();

      _CityService.ɵfac = function CityService_Factory(t) {
        return new (t || _CityService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
      };

      _CityService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: _CityService,
        factory: _CityService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    6637:
    /*!*****************************************************!*\
      !*** ./src/app/shared/services/clusters.service.ts ***!
      \*****************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ClustersService": function ClustersService() {
          return (
            /* binding */
            _ClustersService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var src_app_shared_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/shared/environments/environment */
      4348);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      7716);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      1841);

      var _ClustersService = /*#__PURE__*/function () {
        function _ClustersService(http) {
          _classCallCheck(this, _ClustersService);

          this.http = http;
        }

        _createClass(_ClustersService, [{
          key: "getClusters",
          value: function getClusters() {
            return this.http.get(src_app_shared_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.clustersAPI);
          }
        }]);

        return _ClustersService;
      }();

      _ClustersService.ɵfac = function ClustersService_Factory(t) {
        return new (t || _ClustersService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
      };

      _ClustersService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: _ClustersService,
        factory: _ClustersService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    1343:
    /*!****************************************************!*\
      !*** ./src/app/shared/services/current.service.ts ***!
      \****************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CurrentService": function CurrentService() {
          return (
            /* binding */
            _CurrentService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../environments/environment */
      4348);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      6215);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      5917);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      7716);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common/http */
      1841);

      var _CurrentService = /*#__PURE__*/function () {
        function _CurrentService(http) {
          _classCallCheck(this, _CurrentService);

          this.http = http;
          this.current$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject({
            cityID: 1,
            emp_id: 0,
            emp_type: "mr"
          });
          this.show$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(false);
          this.show = false;
          this.currentEmpID = 0;
          this.currentEmpType = "mr";
          this.currentCityID = 1;
          this.getCurrent();
        }

        _createClass(_CurrentService, [{
          key: "getAllMR",
          value: function getAllMR() {
            return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.allMrAPI);
          }
        }, {
          key: "getAllFLL",
          value: function getAllFLL() {
            return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.allFllAPI);
          }
        }, {
          key: "getAllByType",
          value: function getAllByType(type) {
            if (type) {
              return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.allByTypeAPI, {
                type: type
              });
            } else {
              return (0, rxjs__WEBPACK_IMPORTED_MODULE_2__.of)([]);
            }
          }
        }, {
          key: "getCurrent",
          value: function getCurrent() {
            var _this15 = this;

            this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.currentAPI).subscribe(function (data) {
              console.log("Current -> ", data);

              if (data.emp_id != _this15.currentEmpID) {
                _this15.currentEmpID = data.emp_id;
                _this15.currentEmpType = data.emp_type;
                _this15.currentCityID = data.cityID;

                _this15.current$.next(data);
              }
            });
          }
        }, {
          key: "getCurrentEmp",
          value: function getCurrentEmp() {
            console.log(this.currentEmpID + "  " + this.currentEmpType);
            return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.empDataAPI, {
              id: this.currentEmpID,
              emp_type: this.currentEmpType
            });
          }
        }, {
          key: "getEmpByID",
          value: function getEmpByID(id) {
            return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.empDataAPI, {
              id: id,
              emp_type: this.currentEmpType
            });
          }
        }, {
          key: "getCurrentIDs",
          value: function getCurrentIDs() {
            if (this.currentEmpType) {
              return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.currentIDsAPI, {
                emp_type: this.currentEmpType,
                cityID: this.currentCityID
              });
            } else {
              return (0, rxjs__WEBPACK_IMPORTED_MODULE_2__.of)([]);
            }
          }
        }, {
          key: "updateCurrent",
          value: function updateCurrent(data) {
            return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.updateCurrentAPI, data);
          }
        }, {
          key: "nextEmp",
          value: function nextEmp(id) {
            return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.nextEmpAPI, {
              id: id
            });
          }
        }, {
          key: "currentStatusFN",
          value: function currentStatusFN(id) {
            return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.statusAPI, {
              assessor_id: id
            });
          }
        }, {
          key: "revoteFN",
          value: function revoteFN(assessor_id, emp_id, emp_type) {
            console.log(assessor_id + "  " + emp_id + " " + emp_type);
            return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.revoteAPI, {
              assessor_id: assessor_id,
              emp_id: emp_id,
              emp_type: emp_type
            });
          }
        }, {
          key: "resetFN",
          value: function resetFN() {
            return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.resetAPI, {});
          }
        }]);

        return _CurrentService;
      }();

      _CurrentService.ɵfac = function CurrentService_Factory(t) {
        return new (t || _CurrentService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient));
      };

      _CurrentService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
        token: _CurrentService,
        factory: _CurrentService.ɵfac,
        providedIn: "root"
      });
      /***/
    },

    /***/
    7253:
    /*!******************************************!*\
      !*** ./src/app/shared/services/index.ts ***!
      \******************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AssessorService": function AssessorService() {
          return (
            /* reexport safe */
            _assessor_service__WEBPACK_IMPORTED_MODULE_0__.AssessorService
          );
        },

        /* harmony export */
        "AssessorsService": function AssessorsService() {
          return (
            /* reexport safe */
            _assessors_service__WEBPACK_IMPORTED_MODULE_1__.AssessorsService
          );
        },

        /* harmony export */
        "CheckNAService": function CheckNAService() {
          return (
            /* reexport safe */
            _checkNA_service__WEBPACK_IMPORTED_MODULE_2__.CheckNAService
          );
        },

        /* harmony export */
        "CityService": function CityService() {
          return (
            /* reexport safe */
            _city_service__WEBPACK_IMPORTED_MODULE_3__.CityService
          );
        },

        /* harmony export */
        "ClustersService": function ClustersService() {
          return (
            /* reexport safe */
            _clusters_service__WEBPACK_IMPORTED_MODULE_4__.ClustersService
          );
        },

        /* harmony export */
        "CurrentService": function CurrentService() {
          return (
            /* reexport safe */
            _current_service__WEBPACK_IMPORTED_MODULE_5__.CurrentService
          );
        },

        /* harmony export */
        "ReportService": function ReportService() {
          return (
            /* reexport safe */
            _report_service__WEBPACK_IMPORTED_MODULE_6__.ReportService
          );
        },

        /* harmony export */
        "ReviewService": function ReviewService() {
          return (
            /* reexport safe */
            _review_service__WEBPACK_IMPORTED_MODULE_7__.ReviewService
          );
        },

        /* harmony export */
        "TypesService": function TypesService() {
          return (
            /* reexport safe */
            _types_service__WEBPACK_IMPORTED_MODULE_8__.TypesService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _assessor_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./assessor.service */
      3570);
      /* harmony import */


      var _assessors_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./assessors.service */
      301);
      /* harmony import */


      var _checkNA_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./checkNA.service */
      4210);
      /* harmony import */


      var _city_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./city.service */
      6931);
      /* harmony import */


      var _clusters_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./clusters.service */
      6637);
      /* harmony import */


      var _current_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./current.service */
      1343);
      /* harmony import */


      var _report_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./report.service */
      3234);
      /* harmony import */


      var _review_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./review.service */
      5287);
      /* harmony import */


      var _types_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./types.service */
      2621);
      /***/

    },

    /***/
    3234:
    /*!***************************************************!*\
      !*** ./src/app/shared/services/report.service.ts ***!
      \***************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ReportService": function ReportService() {
          return (
            /* binding */
            _ReportService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      7716);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      1841);

      var _ReportService = function _ReportService(http) {
        _classCallCheck(this, _ReportService);

        this.http = http;
      };

      _ReportService.ɵfac = function ReportService_Factory(t) {
        return new (t || _ReportService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient));
      };

      _ReportService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: _ReportService,
        factory: _ReportService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    5287:
    /*!***************************************************!*\
      !*** ./src/app/shared/services/review.service.ts ***!
      \***************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ReviewService": function ReviewService() {
          return (
            /* binding */
            _ReviewService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var src_app_shared_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/shared/environments/environment */
      4348);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      7716);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      1841);

      var _ReviewService = /*#__PURE__*/function () {
        function _ReviewService(http) {
          _classCallCheck(this, _ReviewService);

          this.http = http;
        }

        _createClass(_ReviewService, [{
          key: "submitReview",
          value: function submitReview(review) {
            console.log(review);
            return this.http.post(src_app_shared_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.reviewAPI, review);
          }
        }, {
          key: "skipReviewFN",
          value: function skipReviewFN(id) {
            return this.http.post(src_app_shared_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.skipAPI, {
              assessor_id: id
            });
          }
        }]);

        return _ReviewService;
      }();

      _ReviewService.ɵfac = function ReviewService_Factory(t) {
        return new (t || _ReviewService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
      };

      _ReviewService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: _ReviewService,
        factory: _ReviewService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    2621:
    /*!**************************************************!*\
      !*** ./src/app/shared/services/types.service.ts ***!
      \**************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "TypesService": function TypesService() {
          return (
            /* binding */
            _TypesService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../environments/environment */
      4348);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      7716);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      1841);

      var _TypesService = /*#__PURE__*/function () {
        function _TypesService(http) {
          _classCallCheck(this, _TypesService);

          this.http = http;
          this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.typesAPI;
        }

        _createClass(_TypesService, [{
          key: "getTypes",
          value: function getTypes() {
            return this.http.get(this.url);
          }
        }]);

        return _TypesService;
      }();

      _TypesService.ɵfac = function TypesService_Factory(t) {
        return new (t || _TypesService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
      };

      _TypesService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: _TypesService,
        factory: _TypesService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    4431:
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      9075);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      7716);
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./app/app.module */
      6747);
      /* harmony import */


      var src_app_shared_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/shared/environments/environment */
      4348);

      if (src_app_shared_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
        (0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)["catch"](function (err) {
        return console.error(err);
      });
      /***/

    },

    /***/
    5382:
    /*!************************!*\
      !*** crypto (ignored) ***!
      \************************/

    /***/
    function _() {
      /* (ignored) */

      /***/
    },

    /***/
    2095:
    /*!********************!*\
      !*** fs (ignored) ***!
      \********************/

    /***/
    function _() {
      /* (ignored) */

      /***/
    },

    /***/
    1219:
    /*!************************!*\
      !*** stream (ignored) ***!
      \************************/

    /***/
    function _() {
      /* (ignored) */

      /***/
    }
  },
  /******/
  function (__webpack_require__) {
    // webpackRuntimeModules

    /******/
    "use strict";
    /******/

    /******/

    var __webpack_exec__ = function __webpack_exec__(moduleId) {
      return __webpack_require__(__webpack_require__.s = moduleId);
    };
    /******/


    __webpack_require__.O(0, ["vendor"], function () {
      return __webpack_exec__(4431);
    });
    /******/


    var __webpack_exports__ = __webpack_require__.O();
    /******/

  }]);
})();
//# sourceMappingURL=main-es5.js.map