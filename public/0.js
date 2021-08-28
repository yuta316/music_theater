(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/movies/components/MovieComponent.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/movies/components/MovieComponent.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'MovieComponent',
  props: {
    movie: {
      type: Object
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/movies/components/MovieReviewComponent.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/movies/components/MovieReviewComponent.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'MovieReviewComponent',
  props: {
    reviews: {
      "default": {}
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/movies/detail.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/movies/detail.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_MovieComponent_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/MovieComponent.vue */ "./resources/js/movies/components/MovieComponent.vue");
/* harmony import */ var _components_MovieReviewComponent_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/MovieReviewComponent.vue */ "./resources/js/movies/components/MovieReviewComponent.vue");
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
  name: 'movieDetail',
  components: {
    MovieComponent: _components_MovieComponent_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    MovieReviewComponent: _components_MovieReviewComponent_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      movie: null,
      movieReviews: null,
      movieId: this.$route.params.movieId,
      tmdb_app_key: "2558a57104cd19abe96d231a650d0f42"
    };
  },
  methods: {
    getMovie: function getMovie() {
      var _this = this;

      var url = "https://api.themoviedb.org/3/movie/".concat(this.movieId, "?api_key=").concat(this.tmdb_app_key, "&language=ja-JA");
      axios.get(url).then(function (response) {
        _this.movie = response.data; // this.getTweet();
      })["catch"](function (err) {
        console.log('err:', err);
        return;
      });
    },
    getMovieReview: function getMovieReview() {
      var _this2 = this;

      var url = "/movie/".concat(this.movieId, "/review");
      console.log(url);
      axios.get(url).then(function (response) {
        _this2.movieReviews = response.data; // this.getTweet();
      })["catch"](function (err) {
        console.log('err:', err);
        return;
      });
    }
  },
  mounted: function mounted() {
    this.getMovie();
    this.getMovieReview();
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/movies/components/MovieComponent.vue?vue&type=template&id=642530d0&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/movies/components/MovieComponent.vue?vue&type=template&id=642530d0& ***!
  \************************************************************************************************************************************************************************************************************************/
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
      _c("el-row", [
        _c(
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
            _vm._v(" " + _vm._s(_vm.movie.title) + "\n\t\t\t")
          ]
        )
      ]),
      _vm._v(" "),
      _c(
        "el-row",
        [
          _c(
            "el-col",
            { staticStyle: { "text-align": "center" }, attrs: { span: 8 } },
            [
              _c("a", { attrs: { href: _vm.movie.homepage } }, [
                _c("img", {
                  attrs: {
                    src:
                      "https://image.tmdb.org/t/p/w185" + _vm.movie.poster_path
                  }
                })
              ])
            ]
          ),
          _vm._v(" "),
          _c(
            "el-col",
            { staticStyle: { background: "#fff" }, attrs: { span: 14 } },
            [
              _c("el-divider", { attrs: { "content-position": "left" } }, [
                _c("h4", [_vm._v("あらすじ")])
              ]),
              _vm._v(" "),
              _c("span", [_vm._v(_vm._s(_vm.movie.overview))]),
              _vm._v(" "),
              _c("el-divider", { attrs: { "content-position": "left" } }, [
                _c("h4", [_vm._v("公開日")])
              ]),
              _vm._v(" "),
              _c("span", [_vm._v(_vm._s(_vm.movie.release_date))])
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



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/movies/components/MovieReviewComponent.vue?vue&type=template&id=e953be40&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/movies/components/MovieReviewComponent.vue?vue&type=template&id=e953be40& ***!
  \******************************************************************************************************************************************************************************************************************************/
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
    _vm.reviews
      ? _c(
          "div",
          _vm._l(_vm.reviews, function(review) {
            return _c(
              "div",
              {
                key: review.id,
                staticStyle: {
                  border: "2px solid gray",
                  margin: "20px 80px 0 80px",
                  "background-color": "#fff"
                }
              },
              [
                _c(
                  "el-row",
                  [
                    _c(
                      "el-col",
                      {
                        staticStyle: {
                          "text-align": "center",
                          "margin-top": "10px"
                        },
                        attrs: { span: 4 }
                      },
                      [
                        _c("img", {
                          attrs: { src: review.user.img_path, width: "60%" }
                        }),
                        _vm._v(" "),
                        _c("div", [_vm._v(_vm._s(review.user.name))])
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "el-col",
                      { attrs: { span: 20 } },
                      [
                        _c(
                          "el-row",
                          [
                            _c(
                              "el-divider",
                              { attrs: { "content-position": "left" } },
                              [_c("h4", [_vm._v(_vm._s(review.title))])]
                            )
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "el-row",
                          [
                            _c("el-col", { attrs: { span: 12 } }, [
                              _vm._v(_vm._s(review.stars) + "/5.0")
                            ]),
                            _vm._v(" "),
                            _c("el-col", { attrs: { span: 12 } }, [
                              _vm._v(_vm._s(review.created_at))
                            ])
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c("el-row", [_c("p", [_vm._v(_vm._s(review.body))])])
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
          0
        )
      : _vm._e()
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/movies/detail.vue?vue&type=template&id=3e4d76e2&":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/movies/detail.vue?vue&type=template&id=3e4d76e2& ***!
  \*****************************************************************************************************************************************************************************************************/
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
  return _vm.movie
    ? _c(
        "div",
        [
          _c("movie-component", { attrs: { movie: _vm.movie } }),
          _vm._v(" "),
          _c(
            "el-row",
            [
              _c(
                "el-col",
                { attrs: { span: 6, offset: 15 } },
                [
                  _c("el-button", { attrs: { type: "primary" } }, [
                    _vm._v("口コミを投稿する")
                  ])
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c("movie-review-component", { attrs: { reviews: _vm.movieReviews } })
        ],
        1
      )
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/movies/components/MovieComponent.vue":
/*!***********************************************************!*\
  !*** ./resources/js/movies/components/MovieComponent.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MovieComponent_vue_vue_type_template_id_642530d0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MovieComponent.vue?vue&type=template&id=642530d0& */ "./resources/js/movies/components/MovieComponent.vue?vue&type=template&id=642530d0&");
/* harmony import */ var _MovieComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MovieComponent.vue?vue&type=script&lang=js& */ "./resources/js/movies/components/MovieComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _MovieComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _MovieComponent_vue_vue_type_template_id_642530d0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _MovieComponent_vue_vue_type_template_id_642530d0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/movies/components/MovieComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/movies/components/MovieComponent.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/movies/components/MovieComponent.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MovieComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./MovieComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/movies/components/MovieComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MovieComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/movies/components/MovieComponent.vue?vue&type=template&id=642530d0&":
/*!******************************************************************************************!*\
  !*** ./resources/js/movies/components/MovieComponent.vue?vue&type=template&id=642530d0& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MovieComponent_vue_vue_type_template_id_642530d0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./MovieComponent.vue?vue&type=template&id=642530d0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/movies/components/MovieComponent.vue?vue&type=template&id=642530d0&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MovieComponent_vue_vue_type_template_id_642530d0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MovieComponent_vue_vue_type_template_id_642530d0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/movies/components/MovieReviewComponent.vue":
/*!*****************************************************************!*\
  !*** ./resources/js/movies/components/MovieReviewComponent.vue ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MovieReviewComponent_vue_vue_type_template_id_e953be40___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MovieReviewComponent.vue?vue&type=template&id=e953be40& */ "./resources/js/movies/components/MovieReviewComponent.vue?vue&type=template&id=e953be40&");
/* harmony import */ var _MovieReviewComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MovieReviewComponent.vue?vue&type=script&lang=js& */ "./resources/js/movies/components/MovieReviewComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _MovieReviewComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _MovieReviewComponent_vue_vue_type_template_id_e953be40___WEBPACK_IMPORTED_MODULE_0__["render"],
  _MovieReviewComponent_vue_vue_type_template_id_e953be40___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/movies/components/MovieReviewComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/movies/components/MovieReviewComponent.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./resources/js/movies/components/MovieReviewComponent.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MovieReviewComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./MovieReviewComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/movies/components/MovieReviewComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MovieReviewComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/movies/components/MovieReviewComponent.vue?vue&type=template&id=e953be40&":
/*!************************************************************************************************!*\
  !*** ./resources/js/movies/components/MovieReviewComponent.vue?vue&type=template&id=e953be40& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MovieReviewComponent_vue_vue_type_template_id_e953be40___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./MovieReviewComponent.vue?vue&type=template&id=e953be40& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/movies/components/MovieReviewComponent.vue?vue&type=template&id=e953be40&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MovieReviewComponent_vue_vue_type_template_id_e953be40___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MovieReviewComponent_vue_vue_type_template_id_e953be40___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/movies/detail.vue":
/*!****************************************!*\
  !*** ./resources/js/movies/detail.vue ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _detail_vue_vue_type_template_id_3e4d76e2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./detail.vue?vue&type=template&id=3e4d76e2& */ "./resources/js/movies/detail.vue?vue&type=template&id=3e4d76e2&");
/* harmony import */ var _detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./detail.vue?vue&type=script&lang=js& */ "./resources/js/movies/detail.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _detail_vue_vue_type_template_id_3e4d76e2___WEBPACK_IMPORTED_MODULE_0__["render"],
  _detail_vue_vue_type_template_id_3e4d76e2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/movies/detail.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/movies/detail.vue?vue&type=script&lang=js&":
/*!*****************************************************************!*\
  !*** ./resources/js/movies/detail.vue?vue&type=script&lang=js& ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./detail.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/movies/detail.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/movies/detail.vue?vue&type=template&id=3e4d76e2&":
/*!***********************************************************************!*\
  !*** ./resources/js/movies/detail.vue?vue&type=template&id=3e4d76e2& ***!
  \***********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_detail_vue_vue_type_template_id_3e4d76e2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./detail.vue?vue&type=template&id=3e4d76e2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/movies/detail.vue?vue&type=template&id=3e4d76e2&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_detail_vue_vue_type_template_id_3e4d76e2___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_detail_vue_vue_type_template_id_3e4d76e2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);