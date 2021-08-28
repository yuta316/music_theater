(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/movies/List.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/movies/List.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'movieList',
  props: {
    propedMovies: {
      defalut: null
    }
  },
  methods: {
    showMovieDetail: function showMovieDetail(movie_id) {
      this.$router.push({
        name: 'movieDetail',
        params: {
          movieId: movie_id
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/movies/index.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/movies/index.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _List__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./List */ "./resources/js/movies/List.vue");
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

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'movieIndex',
  components: {
    movieList: _List__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      movies: null,
      keyword: '',
      results: null,
      app_key: "2558a57104cd19abe96d231a650d0f42"
    };
  },
  methods: {
    getPopularMovie: function getPopularMovie() {
      var _this = this;

      var url = "https://api.themoviedb.org/3/movie/popular?api_key=".concat(this.app_key, "&language=ja-JA&page=1");
      axios.get(url).then(function (res) {
        if (res.status !== 200) {
          return;
        }

        _this.movies = res.data.results;
      })["catch"](function (err) {
        console.log('err:', err);
        return;
      });
    },
    search: function search() {
      var _this2 = this;

      var url = 'https://api.themoviedb.org/3/search/movie';
      axios.get(url, {
        params: {
          query: this.keyword,
          page: 1,
          language: 'ja-JA',
          api_key: this.app_key
        }
      }).then(function (response) {
        _this2.results = response.data.results;
      })["catch"](function (err) {
        console.log('err:', err);
      });
    }
  },
  mounted: function mounted() {
    this.getPopularMovie();
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/movies/List.vue?vue&type=template&id=49d4b808&":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/movies/List.vue?vue&type=template&id=49d4b808& ***!
  \***************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "el-row",
        { staticStyle: { display: "flex", overflow: "scroll" } },
        _vm._l(_vm.propedMovies, function(movie) {
          return _c(
            "div",
            { key: movie.id },
            [
              _c(
                "el-col",
                { attrs: { span: 4 } },
                [
                  _c(
                    "el-card",
                    {
                      staticStyle: {
                        width: "280px",
                        height: "300px",
                        position: "relative"
                      }
                    },
                    [
                      _c("div", { staticStyle: { "text-align": "center" } }, [
                        _c("img", {
                          attrs: {
                            src:
                              "https://image.tmdb.org/t/p/w185" +
                              movie.poster_path,
                            width: "90",
                            height: "160"
                          }
                        })
                      ]),
                      _vm._v(" "),
                      _c("div", { staticStyle: { height: "10%" } }, [
                        _c(
                          "div",
                          {
                            staticStyle: {
                              "text-align": "center",
                              "margin-top": "10px"
                            }
                          },
                          [_c("b", [_vm._v(_vm._s(movie.title))])]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticStyle: {
                              position: "absolute",
                              top: "240px",
                              left: "60px"
                            }
                          },
                          [
                            _c(
                              "el-button",
                              {
                                staticClass: "button",
                                attrs: { type: "warning", round: "" },
                                on: {
                                  click: function($event) {
                                    return _vm.showMovieDetail(movie.id)
                                  }
                                }
                              },
                              [_vm._v("詳細口コミを見る")]
                            )
                          ],
                          1
                        )
                      ])
                    ]
                  )
                ],
                1
              )
            ],
            1
          )
        }),
        0
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/movies/index.vue?vue&type=template&id=2ba13b84&":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/movies/index.vue?vue&type=template&id=2ba13b84& ***!
  \****************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c(
      "div",
      [
        _vm._m(0),
        _vm._v(" "),
        _c("movie-list", { attrs: { propedMovies: _vm.movies } })
      ],
      1
    ),
    _vm._v(" "),
    _c(
      "div",
      { staticStyle: { background: "#fff" } },
      [
        _c(
          "el-row",
          [
            _c("el-col", { attrs: { span: 8 } }, [
              _c(
                "h4",
                {
                  staticStyle: {
                    color: "#7db4e6",
                    padding: "20px",
                    "border-left": "solid 5px #7db4e6"
                  }
                },
                [
                  _c("i", { staticClass: "el-icon-search" }),
                  _vm._v("検索\n\t\t\t\t\t")
                ]
              )
            ]),
            _vm._v(" "),
            _c(
              "el-col",
              { attrs: { span: 12 } },
              [
                _c("el-input", {
                  staticStyle: { "padding-top": "20px" },
                  attrs: { placeholder: "映画検索" },
                  model: {
                    value: _vm.keyword,
                    callback: function($$v) {
                      _vm.keyword = $$v
                    },
                    expression: "keyword"
                  }
                })
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "el-col",
              { attrs: { span: 4 } },
              [
                _c(
                  "el-button",
                  {
                    staticStyle: { "margin-top": "20px" },
                    attrs: { type: "primary" },
                    on: { click: _vm.search }
                  },
                  [_vm._v("検索")]
                )
              ],
              1
            )
          ],
          1
        ),
        _vm._v(" "),
        _c("movie-list", { attrs: { propedMovies: _vm.results } })
      ],
      1
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "h4",
      {
        staticStyle: {
          color: "#7db4e6",
          padding: "20px",
          background: "#fff",
          "border-left": "solid 5px #7db4e6"
        }
      },
      [
        _c("i", { staticClass: "el-icon-video-camera-solid" }),
        _vm._v("最新映画一覧\n\t\t\t")
      ]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/movies/List.vue":
/*!**************************************!*\
  !*** ./resources/js/movies/List.vue ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _List_vue_vue_type_template_id_49d4b808___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./List.vue?vue&type=template&id=49d4b808& */ "./resources/js/movies/List.vue?vue&type=template&id=49d4b808&");
/* harmony import */ var _List_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./List.vue?vue&type=script&lang=js& */ "./resources/js/movies/List.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _List_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _List_vue_vue_type_template_id_49d4b808___WEBPACK_IMPORTED_MODULE_0__["render"],
  _List_vue_vue_type_template_id_49d4b808___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/movies/List.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/movies/List.vue?vue&type=script&lang=js&":
/*!***************************************************************!*\
  !*** ./resources/js/movies/List.vue?vue&type=script&lang=js& ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_List_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./List.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/movies/List.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_List_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/movies/List.vue?vue&type=template&id=49d4b808&":
/*!*********************************************************************!*\
  !*** ./resources/js/movies/List.vue?vue&type=template&id=49d4b808& ***!
  \*********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_List_vue_vue_type_template_id_49d4b808___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./List.vue?vue&type=template&id=49d4b808& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/movies/List.vue?vue&type=template&id=49d4b808&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_List_vue_vue_type_template_id_49d4b808___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_List_vue_vue_type_template_id_49d4b808___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/movies/index.vue":
/*!***************************************!*\
  !*** ./resources/js/movies/index.vue ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_2ba13b84___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=2ba13b84& */ "./resources/js/movies/index.vue?vue&type=template&id=2ba13b84&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/js/movies/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_2ba13b84___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_2ba13b84___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/movies/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/movies/index.vue?vue&type=script&lang=js&":
/*!****************************************************************!*\
  !*** ./resources/js/movies/index.vue?vue&type=script&lang=js& ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/movies/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/movies/index.vue?vue&type=template&id=2ba13b84&":
/*!**********************************************************************!*\
  !*** ./resources/js/movies/index.vue?vue&type=template&id=2ba13b84& ***!
  \**********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2ba13b84___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=2ba13b84& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/movies/index.vue?vue&type=template&id=2ba13b84&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2ba13b84___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2ba13b84___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);