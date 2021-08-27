(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/movies/index.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/movies/index.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************/
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
  data: function data() {
    return {
      reviews: {},
      keyword: '',
      results: [],
      movies: '',
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
        console.log(_this.movies);
      })["catch"](function (err) {
        console.log('err:', err);
        return;
      });
    },
    search: function search() {
      var _this2 = this;

      axios.get('https://api.themoviedb.org/3/search/movie', {
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
    } // getReviewMovie() {
    //     var reviews = $reviews;
    //     for (const [key, value] of Object.entries(reviews)) {
    //     const url = `https://api.themoviedb.org/3/movie/${value.movie_id}?api_key=${this.app_key}&language=ja-JA`
    //     axios.get(url)
    //         .then(response => {
    //         value.movie  = response.data.title
    //         value.movie_path  = response.data.poster_path
    //         }).catch(err => {
    //         console.log('err:', err);
    //         return
    //     });
    //     this.reviews = reviews;
    //     }
    // }

  },
  created: function created() {// this.getReviewMovie();
  },
  mounted: function mounted() {
    this.getPopularMovie();
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/movies/index.vue?vue&type=style&index=0&id=2ba13b84&scoped=true&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/movies/index.vue?vue&type=style&index=0&id=2ba13b84&scoped=true&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.movies__list[data-v-2ba13b84] {\n margin: 10px;\n background-color: #fff;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/movies/index.vue?vue&type=style&index=0&id=2ba13b84&scoped=true&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/movies/index.vue?vue&type=style&index=0&id=2ba13b84&scoped=true&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&id=2ba13b84&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/movies/index.vue?vue&type=style&index=0&id=2ba13b84&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/movies/index.vue?vue&type=template&id=2ba13b84&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/movies/index.vue?vue&type=template&id=2ba13b84&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************/
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
        [
          _c("el-col", { attrs: { span: 18 } }, [
            _c(
              "div",
              { staticClass: "movies__list" },
              [
                _c("h3", [_vm._v("最新映画一覧")]),
                _vm._v(" "),
                _c(
                  "el-row",
                  { staticStyle: { display: "flex", overflow: "scroll" } },
                  _vm._l(_vm.movies, function(movie) {
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
                                _c(
                                  "div",
                                  { staticStyle: { "text-align": "center" } },
                                  [
                                    _c("img", {
                                      attrs: {
                                        src:
                                          "https://image.tmdb.org/t/p/w185" +
                                          movie.poster_path,
                                        width: "90",
                                        height: "160"
                                      }
                                    })
                                  ]
                                ),
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
                                          attrs: { type: "warning", round: "" }
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
          ]),
          _vm._v(" "),
          _c("el-col", { attrs: { span: 6 } }, [
            _c(
              "div",
              { staticClass: "movies__list" },
              [
                _c(
                  "el-row",
                  [
                    _c(
                      "el-col",
                      { attrs: { span: 16 } },
                      [
                        _c("el-input", {
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
                      { attrs: { span: 8 } },
                      [
                        _c(
                          "el-button",
                          {
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
                _c(
                  "el-row",
                  { staticStyle: { display: "flex", overflow: "scroll" } },
                  _vm._l(_vm.results, function(movie) {
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
                                _c(
                                  "div",
                                  { staticStyle: { "text-align": "center" } },
                                  [
                                    _c("img", {
                                      attrs: {
                                        src:
                                          "https://image.tmdb.org/t/p/w185" +
                                          movie.poster_path,
                                        width: "90",
                                        height: "160"
                                      }
                                    })
                                  ]
                                ),
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
                                          attrs: { type: "warning", round: "" }
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
          ])
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/movies/index.vue":
/*!***************************************!*\
  !*** ./resources/js/movies/index.vue ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_2ba13b84_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=2ba13b84&scoped=true& */ "./resources/js/movies/index.vue?vue&type=template&id=2ba13b84&scoped=true&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/js/movies/index.vue?vue&type=script&lang=js&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _index_vue_vue_type_style_index_0_id_2ba13b84_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&id=2ba13b84&scoped=true&lang=css& */ "./resources/js/movies/index.vue?vue&type=style&index=0&id=2ba13b84&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_2ba13b84_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_2ba13b84_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "2ba13b84",
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
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/movies/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/movies/index.vue?vue&type=style&index=0&id=2ba13b84&scoped=true&lang=css&":
/*!************************************************************************************************!*\
  !*** ./resources/js/movies/index.vue?vue&type=style&index=0&id=2ba13b84&scoped=true&lang=css& ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_2ba13b84_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&id=2ba13b84&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/movies/index.vue?vue&type=style&index=0&id=2ba13b84&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_2ba13b84_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_2ba13b84_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_2ba13b84_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_2ba13b84_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/movies/index.vue?vue&type=template&id=2ba13b84&scoped=true&":
/*!**********************************************************************************!*\
  !*** ./resources/js/movies/index.vue?vue&type=template&id=2ba13b84&scoped=true& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2ba13b84_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=2ba13b84&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/movies/index.vue?vue&type=template&id=2ba13b84&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2ba13b84_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2ba13b84_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);