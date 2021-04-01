(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_Invoices_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Invoices.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Invoices.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "invoices",
  data: function data() {
    return {
      project_id: null,
      invoices: []
    };
  },
  mounted: function mounted() {
    this.project_id = this.$route.params.id;
    this.fetchInvoices();
  },
  methods: {
    fetchInvoices: function fetchInvoices() {
      this.axios.get('/api/projects/' + this.project_id + '/invoices').then(function (response) {
        console.log(response); // this.invoices = response.data;
        // Object.values(this.invoices).forEach(value => {
        // 	console.log(value);
        // 	// value.time_spent = this.timeSpent(value);
        // });
      })["catch"](function (error) {
        console.error(error);
      });
    }
  } // timeSpent (project) {
  // 	let timespent = 0;
  // 	Object.values(project.project_works).forEach(value => {
  // 		timespent += value.time_spent_in_seconds;
  // 	});
  // 	let hours = Math.floor(timespent / 60 / 60);
  // 	let minutes = Math.floor(timespent / 60) - (hours * 60);
  // 	let seconds = timespent % 60;
  //
  // 	return hours + ' hours ' + minutes + ' minutes ' + seconds + ' seconds';
  // }

});

/***/ }),

/***/ "./resources/js/Pages/Invoices.vue":
/*!*****************************************!*\
  !*** ./resources/js/Pages/Invoices.vue ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Invoices_vue_vue_type_template_id_5a8bf2e2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Invoices.vue?vue&type=template&id=5a8bf2e2&scoped=true& */ "./resources/js/Pages/Invoices.vue?vue&type=template&id=5a8bf2e2&scoped=true&");
/* harmony import */ var _Invoices_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Invoices.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Invoices.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Invoices_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Invoices_vue_vue_type_template_id_5a8bf2e2_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Invoices_vue_vue_type_template_id_5a8bf2e2_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "5a8bf2e2",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Invoices.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Invoices.vue?vue&type=script&lang=js&":
/*!******************************************************************!*\
  !*** ./resources/js/Pages/Invoices.vue?vue&type=script&lang=js& ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Invoices_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Invoices.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Invoices.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Invoices_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/Pages/Invoices.vue?vue&type=template&id=5a8bf2e2&scoped=true&":
/*!************************************************************************************!*\
  !*** ./resources/js/Pages/Invoices.vue?vue&type=template&id=5a8bf2e2&scoped=true& ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Invoices_vue_vue_type_template_id_5a8bf2e2_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Invoices_vue_vue_type_template_id_5a8bf2e2_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Invoices_vue_vue_type_template_id_5a8bf2e2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Invoices.vue?vue&type=template&id=5a8bf2e2&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Invoices.vue?vue&type=template&id=5a8bf2e2&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Invoices.vue?vue&type=template&id=5a8bf2e2&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Invoices.vue?vue&type=template&id=5a8bf2e2&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-container",
    [
      _c("h1", [_vm._v("Invoices")]),
      _vm._v(" "),
      _c(
        "v-layout",
        [
          _c(
            "v-flex",
            { attrs: { md12: "", xs12: "", "mb-2": "" } },
            [
              _c(
                "v-container",
                { attrs: { "fill-height": "" } },
                [
                  _c(
                    "v-layout",
                    {
                      attrs: {
                        row: "",
                        wrap: "",
                        "text-md-center": "",
                        "text-sm-center": "",
                        "text-xs-center": ""
                      }
                    },
                    [
                      _c(
                        "v-flex",
                        { attrs: { md12: "", sm12: "", xs12: "" } },
                        _vm._l(_vm.invoices, function(invoice) {
                          return _c(
                            "v-card",
                            { key: invoice.id, staticClass: "mx-auto mb-3" },
                            [
                              _c(
                                "v-list-item",
                                { attrs: { "three-line": "" } },
                                [
                                  _c(
                                    "v-list-item-content",
                                    [
                                      _c(
                                        "v-list-item-title",
                                        { staticClass: "headline mb-1" },
                                        [
                                          _vm._v(
                                            "\n                                        Invoice id: " +
                                              _vm._s(invoice.id) +
                                              "\n                                    "
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c("v-list-item-subtitle", [
                                        _vm._v(
                                          "You spent " +
                                            _vm._s(invoice.time_spent) +
                                            " on this project, for a total of " +
                                            _vm._s(invoice.invoice_amount) +
                                            " DKK."
                                        )
                                      ])
                                    ],
                                    1
                                  )
                                ],
                                1
                              )
                            ],
                            1
                          )
                        }),
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);