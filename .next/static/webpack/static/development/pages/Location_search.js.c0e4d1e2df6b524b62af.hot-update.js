webpackHotUpdate("static/development/pages/Location_search.js",{

/***/ "./pages/Location_search.js":
/*!**********************************!*\
  !*** ./pages/Location_search.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_places_autocomplete__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-places-autocomplete */ "./node_modules/react-places-autocomplete/dist/index.js");
/* harmony import */ var react_places_autocomplete__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_places_autocomplete__WEBPACK_IMPORTED_MODULE_9__);








var _jsxFileName = "/home/geetha/practice/learning/menu/pages/Location_search.js";

 // import '../styles/styles.scss'

var selectPlace = {
  color: "#212529",
  position: "absolute",
  zIndex: 10,
  width: "90%",
  opacity: 0.6,
  fontSize: 15,
  lineHeight: 2
};

var LocationSearchInput =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(LocationSearchInput, _React$Component);

  function LocationSearchInput(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, LocationSearchInput);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(LocationSearchInput).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "handleSelectPlaceChange", function () {
      var address = _this.state;
      console.log(address, 'address');
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "handleChange", function (address) {
      _this.setState({
        address: address
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "handleSelect", function (address) {
      //   console.log(address)
      Object(react_places_autocomplete__WEBPACK_IMPORTED_MODULE_9__["geocodeByAddress"])(address).then(function (results) {
        return Object(react_places_autocomplete__WEBPACK_IMPORTED_MODULE_9__["getLatLng"])(results[0]);
      }).then(function (latLng) {
        console.log('Success', latLng);

        _this.setState({
          latLng: latLng
        });

        console.log(_this.state.latLng, 'statelatlong');
      }).catch(function (error) {
        return console.error('Error1', error);
      }); //   this.props.handleChange(this.state)
    });

    _this.state = {
      address: '',
      latLng: []
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(LocationSearchInput, [{
    key: "render",
    value: function render() {
      // console.log(this.props,'props in location')
      // console.log(this.state.address,'address')
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_places_autocomplete__WEBPACK_IMPORTED_MODULE_9___default.a, {
        className: " date-picker upPad-width",
        value: this.state.address,
        onChange: this.handleChange,
        onSelect: this.handleSelect // handleSelectPlaceChange={this.handleSelectPlaceChange()}
        ,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, function (_ref) {
        var getInputProps = _ref.getInputProps,
            suggestions = _ref.suggestions,
            getSuggestionItemProps = _ref.getSuggestionItemProps,
            loading = _ref.loading;
        return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 67
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("input", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, getInputProps({
          placeholder: 'Search place name',
          className: 'location-search-input form-control'
        }), {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 68
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
          className: "autocomplete-dropdown-container",
          style: selectPlace,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 76
          },
          __self: this
        }, loading && react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 77
          },
          __self: this
        }, "Loading..."), suggestions.map(function (suggestion) {
          var className = suggestion.active ? 'suggestion-item--active' : 'suggestion-item'; // inline style for demonstration purpose

          var style = suggestion.active ? {
            backgroundColor: '#fafafa',
            cursor: 'pointer'
          } : {
            backgroundColor: '#ffffff',
            cursor: 'pointer'
          };
          return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, getSuggestionItemProps(suggestion, {
            className: className,
            style: style
          }), {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 87
            },
            __self: this
          }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 93
            },
            __self: this
          }, suggestion.description));
        })));
      }));
    }
  }]);

  return LocationSearchInput;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (LocationSearchInput);

/***/ })

})
//# sourceMappingURL=Location_search.js.c0e4d1e2df6b524b62af.hot-update.js.map