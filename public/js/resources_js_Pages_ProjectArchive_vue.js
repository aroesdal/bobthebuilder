(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_ProjectArchive_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/ProjectArchive.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/ProjectArchive.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************/
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
  name: "projectarchive",
  data: function data() {
    return {
      projects: [{
        id: null,
        project_name: null,
        is_active: null,
        time_spent: 0
      }]
    };
  },
  mounted: function mounted() {
    this.fetchProjects();
  },
  methods: {
    fetchProjects: function fetchProjects() {
      var _this = this;

      this.axios.get('/api/projects/archive').then(function (response) {
        _this.projects = response.data; // console.log(this.projects);

        Object.values(_this.projects).forEach(function (value) {
          value.time_spent = _this.timeSpent(value);
        });
      })["catch"](function (error) {
        console.error(error);
      });
    },
    deleteProject: function deleteProject(project) {
      var _this2 = this;

      console.log(project.id);
      this.axios["delete"]('/api/projects/' + project.id).then(function (response) {
        _this2.fetchProjects();
      })["catch"](function (error) {
        console.error(error);
      });
    },
    setProjectStatus: function setProjectStatus(project) {
      var _this3 = this;

      console.log(project.is_active, project.id);
      this.axios.patch('/api/projects/' + project.id, {
        current_status: project.is_active
      }).then(function (response) {
        _this3.fetchProjects();
      })["catch"](function (error) {
        console.error(error);
      });
    },
    timeSpent: function timeSpent(project) {
      var timespent = 0;
      Object.values(project.project_works).forEach(function (value) {
        timespent += value.time_spent_in_seconds;
      });
      var hours = Math.floor(timespent / 60 / 60);
      var minutes = Math.floor(timespent / 60) - hours * 60;
      var seconds = timespent % 60;
      return hours + ' hours ' + minutes + ' minutes ' + seconds + ' seconds';
    },
    finishProject: function finishProject(project) {
      var _this4 = this;

      this.axios.patch('/api/projects/' + project.id + '/finish').then(function (response) {
        _this4.fetchProjects();
      })["catch"](function (error) {
        console.error(error);
      });
    }
  },
  computed: {
    orderedProjects: function orderedProjects() {
      return _.orderBy(this.projects, 'id');
    }
  }
});

/***/ }),

/***/ "./resources/js/Pages/ProjectArchive.vue":
/*!***********************************************!*\
  !*** ./resources/js/Pages/ProjectArchive.vue ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ProjectArchive_vue_vue_type_template_id_1d7708d2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProjectArchive.vue?vue&type=template&id=1d7708d2&scoped=true& */ "./resources/js/Pages/ProjectArchive.vue?vue&type=template&id=1d7708d2&scoped=true&");
/* harmony import */ var _ProjectArchive_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProjectArchive.vue?vue&type=script&lang=js& */ "./resources/js/Pages/ProjectArchive.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _ProjectArchive_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _ProjectArchive_vue_vue_type_template_id_1d7708d2_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _ProjectArchive_vue_vue_type_template_id_1d7708d2_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "1d7708d2",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/ProjectArchive.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/ProjectArchive.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/Pages/ProjectArchive.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProjectArchive_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ProjectArchive.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/ProjectArchive.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProjectArchive_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/Pages/ProjectArchive.vue?vue&type=template&id=1d7708d2&scoped=true&":
/*!******************************************************************************************!*\
  !*** ./resources/js/Pages/ProjectArchive.vue?vue&type=template&id=1d7708d2&scoped=true& ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProjectArchive_vue_vue_type_template_id_1d7708d2_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProjectArchive_vue_vue_type_template_id_1d7708d2_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProjectArchive_vue_vue_type_template_id_1d7708d2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ProjectArchive.vue?vue&type=template&id=1d7708d2&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/ProjectArchive.vue?vue&type=template&id=1d7708d2&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/ProjectArchive.vue?vue&type=template&id=1d7708d2&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/ProjectArchive.vue?vue&type=template&id=1d7708d2&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************/
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
      _c("h1", [_vm._v("Project archive")]),
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
                        _vm._l(_vm.orderedProjects, function(project) {
                          return _c(
                            "v-card",
                            { key: project.id, staticClass: "mx-auto mb-3" },
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
                                            "\n                                        " +
                                              _vm._s(project.project_name) +
                                              "\n                                    "
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c("v-list-item-subtitle", [
                                        _vm._v(
                                          "You spent " +
                                            _vm._s(project.time_spent) +
                                            " on this project."
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