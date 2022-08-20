/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Lobster&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700;900&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "html {\n    box-sizing: border-box;\n    font-size: 16px;\n    font-family: sans-serif;\n  }\n  \n  *, *:before, *:after {\n    box-sizing: inherit;\n  }\n  \n  body, h1, h2, h3, h4, h5, h6, p, ol, ul {\n    margin: 0;\n    padding: 0;\n    font-weight: normal;\n  }\n  \n  ol, ul {\n    list-style: none;\n  }\n\n\n  #header {\n    background-color: grey;\n    display: grid;\n    grid-auto-flow: column;\n    justify-content: start;\n    gap: 48px;\n    padding: 16px;\n    padding-left: 96px;\n    padding-right: 96px;\n  }\n\n  #logo {\n    color: white;\n    font-family: 'Lobster';\n    font-size: 3.5rem;\n  }\n\n  #city-search-form {\n    position: relative;\n    display: flex;\n    height: 24px;\n    align-self: center;\n    gap: 4px;\n    top: 7px;\n  }\n\n  #city-slug {\n    color: white;\n    background-color: #5fbcd4;\n    font-family: 'Roboto';\n    padding: 8px;\n    padding-left: 48px;\n    padding-right: 48px;\n    border-radius: 8px;\n    margin: 16px;\n    display: grid;\n    grid-template-columns: 1fr 2fr 1fr;\n    grid-template-rows: auto auto;\n    justify-content: space-around;\n    column-gap: 16px;\n    width: 100% - 32px;\n    box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);;\n  }\n\n  #moment {\n    font-size: 1.5rem;\n    display: flex;\n    flex-direction: row;\n    align-items: flex-start;\n    grid-column-start: 2;\n    grid-row-start: 2;\n    justify-self: center;\n    align-self: start;\n    gap: 16px;\n  }\n\n  #city-container {\n    font-size: 3rem;\n    font-weight: 525;\n    justify-self: center;\n    align-self: end;\n    grid-column-start: 2;\n    grid-row-start: 1;\n  }\n\n  #current-weather-container {\n    position: relative;\n    font-size: 5rem;\n    font-weight: 600;\n    grid-column-start: 1;\n    grid-row: 1 / 3;\n    align-self: center;\n    justify-self: center;\n  }\n\n  #condition {\n    font-size: 3rem;\n    font-weight: 525;\n    align-self: end;\n    grid-column-start: 2;\n    grid-row-start: 1;\n    text-transform: capitalize;\n    justify-self: start;\n  }\n\n  #weather-description {\n    justify-self: start;\n    font-size: 1.5rem;\n    text-transform: capitalize;\n    grid-row: 2 / 3;\n    grid-column: 2 / 3;\n  }\n\n  #weather-icon {\n    grid-row: 1 / 3;\n    grid-column: 1 / 2;\n    justify-self: end;\n    align-self: center;\n    width: 100px;\n    height: auto;\n  }\n\n  #condition-container {\n    grid-row: 1 / 3;\n    display: grid;\n    grid-template-columns: auto min-content;\n    grid-template-rows: auto auto;\n  }\n\n  #three-hr-container {\n    font-weight: 300;\n    font-size: 1.25rem;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    padding: 16px;\n  }\n\n  .three-hr-chunk {\n    display: grid;\n    grid-template-columns: repeat(4, 1fr);\n    justify-content: space-around;\n    text-align: center;\n    gap: 4px;\n    color: black;\n    border-bottom: 1px solid black;\n    padding: 8px;\n  }\n\n#toggle {\n    position: relative;\n    align-self: center;\n    top: 6px;\n}\n\n  #celsius, #fahrenheit {\n    font-weight: 550;\n    color: black;\n    background-color: white;\n    font-size: 1rem;\n    padding: 6px;\n  }\n\n  #celsius {\n    color: black;\n    background-color: white;\n    border-radius: 8px 0px 0px 8px;\n  }\n\n  #fahrenheit {\n    color: black;\n    background-color: white;\n    border-radius: 0px 8px 8px 0px;\n  }\n\n  #toggle > .active {\n    color: white;\n    background-color: #5fbcd4;\n    border: 1px solid black;\n  }\n\n  @media screen and (max-width: 500px) {\n    #header {\n        display: flex;\n        flex-direction: column;\n        gap: 16px;\n        align-items: center;\n        justify-items: center;\n    }\n\n    #city-search-form {\n        top: 0px;\n    }\n\n    #city-slug {\n        grid-template-columns: 1fr;\n        grid-template-rows: auto auto auto auto auto;\n        row-gap: 16px;\n      }\n\n      #current-weather-container {\n        font-size: 3rem;\n        position: inherit;\n        grid-row-start: 1;\n        grid-column-start: 1;\n        grid-row: 1 / 2;\n      }\n\n      #city-container {\n        position: inherit;\n        font-size: 2rem;\n        grid-row-start: 2;\n        grid-column-start: 1;\n      }\n\n      #moment {\n        flex-direction: column;\n        gap: 0px;\n        font-size: 1.25rem;\n        grid-row-start: 3;\n        grid-column-start: 1;\n        align-items: center;\n      }\n\n      #time, #date {\n        text-align: center;\n      }\n\n      #condition {\n        font-size: 2rem;\n        font-weight: 525;\n        align-self: end;\n        grid-column-start: 1;\n        grid-row-start: 1;\n        text-transform: capitalize;\n        justify-self: center;\n      }\n    \n      #weather-description {\n        justify-self: center;\n        font-size: 1.25rem;\n        text-transform: capitalize;\n        grid-row: 2 / 3;\n        grid-column: 1 / 2;\n      }\n\n      #weather-icon {\n        grid-row: 3 / 4;\n        grid-column: 1 / 1;\n        justify-self: center;\n        align-self: center;\n        width: 100px;\n        height: auto;\n      }\n\n      #condition-container {\n        grid-row: 4 / 5;\n        display: grid;\n        grid-template-columns: 1fr;\n        grid-template-rows: auto auto auto;\n      }\n\n      #three-hr-container {\n        flex-direction: column;\n      }\n\n      .three-hr-chunk {\n        display: flex;\n        flex-direction: column;\n        justify-content: space-around;\n        text-align: center;\n        gap: 4px;\n        color: black;\n        padding: 8px;\n      }\n  }", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Lobster&display=swap');\n@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700;900&display=swap');\n\nhtml {\n    box-sizing: border-box;\n    font-size: 16px;\n    font-family: sans-serif;\n  }\n  \n  *, *:before, *:after {\n    box-sizing: inherit;\n  }\n  \n  body, h1, h2, h3, h4, h5, h6, p, ol, ul {\n    margin: 0;\n    padding: 0;\n    font-weight: normal;\n  }\n  \n  ol, ul {\n    list-style: none;\n  }\n\n\n  #header {\n    background-color: grey;\n    display: grid;\n    grid-auto-flow: column;\n    justify-content: start;\n    gap: 48px;\n    padding: 16px;\n    padding-left: 96px;\n    padding-right: 96px;\n  }\n\n  #logo {\n    color: white;\n    font-family: 'Lobster';\n    font-size: 3.5rem;\n  }\n\n  #city-search-form {\n    position: relative;\n    display: flex;\n    height: 24px;\n    align-self: center;\n    gap: 4px;\n    top: 7px;\n  }\n\n  #city-slug {\n    color: white;\n    background-color: #5fbcd4;\n    font-family: 'Roboto';\n    padding: 8px;\n    padding-left: 48px;\n    padding-right: 48px;\n    border-radius: 8px;\n    margin: 16px;\n    display: grid;\n    grid-template-columns: 1fr 2fr 1fr;\n    grid-template-rows: auto auto;\n    justify-content: space-around;\n    column-gap: 16px;\n    width: 100% - 32px;\n    box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);;\n  }\n\n  #moment {\n    font-size: 1.5rem;\n    display: flex;\n    flex-direction: row;\n    align-items: flex-start;\n    grid-column-start: 2;\n    grid-row-start: 2;\n    justify-self: center;\n    align-self: start;\n    gap: 16px;\n  }\n\n  #city-container {\n    font-size: 3rem;\n    font-weight: 525;\n    justify-self: center;\n    align-self: end;\n    grid-column-start: 2;\n    grid-row-start: 1;\n  }\n\n  #current-weather-container {\n    position: relative;\n    font-size: 5rem;\n    font-weight: 600;\n    grid-column-start: 1;\n    grid-row: 1 / 3;\n    align-self: center;\n    justify-self: center;\n  }\n\n  #condition {\n    font-size: 3rem;\n    font-weight: 525;\n    align-self: end;\n    grid-column-start: 2;\n    grid-row-start: 1;\n    text-transform: capitalize;\n    justify-self: start;\n  }\n\n  #weather-description {\n    justify-self: start;\n    font-size: 1.5rem;\n    text-transform: capitalize;\n    grid-row: 2 / 3;\n    grid-column: 2 / 3;\n  }\n\n  #weather-icon {\n    grid-row: 1 / 3;\n    grid-column: 1 / 2;\n    justify-self: end;\n    align-self: center;\n    width: 100px;\n    height: auto;\n  }\n\n  #condition-container {\n    grid-row: 1 / 3;\n    display: grid;\n    grid-template-columns: auto min-content;\n    grid-template-rows: auto auto;\n  }\n\n  #three-hr-container {\n    font-weight: 300;\n    font-size: 1.25rem;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    padding: 16px;\n  }\n\n  .three-hr-chunk {\n    display: grid;\n    grid-template-columns: repeat(4, 1fr);\n    justify-content: space-around;\n    text-align: center;\n    gap: 4px;\n    color: black;\n    border-bottom: 1px solid black;\n    padding: 8px;\n  }\n\n#toggle {\n    position: relative;\n    align-self: center;\n    top: 6px;\n}\n\n  #celsius, #fahrenheit {\n    font-weight: 550;\n    color: black;\n    background-color: white;\n    font-size: 1rem;\n    padding: 6px;\n  }\n\n  #celsius {\n    color: black;\n    background-color: white;\n    border-radius: 8px 0px 0px 8px;\n  }\n\n  #fahrenheit {\n    color: black;\n    background-color: white;\n    border-radius: 0px 8px 8px 0px;\n  }\n\n  #toggle > .active {\n    color: white;\n    background-color: #5fbcd4;\n    border: 1px solid black;\n  }\n\n  @media screen and (max-width: 500px) {\n    #header {\n        display: flex;\n        flex-direction: column;\n        gap: 16px;\n        align-items: center;\n        justify-items: center;\n    }\n\n    #city-search-form {\n        top: 0px;\n    }\n\n    #city-slug {\n        grid-template-columns: 1fr;\n        grid-template-rows: auto auto auto auto auto;\n        row-gap: 16px;\n      }\n\n      #current-weather-container {\n        font-size: 3rem;\n        position: inherit;\n        grid-row-start: 1;\n        grid-column-start: 1;\n        grid-row: 1 / 2;\n      }\n\n      #city-container {\n        position: inherit;\n        font-size: 2rem;\n        grid-row-start: 2;\n        grid-column-start: 1;\n      }\n\n      #moment {\n        flex-direction: column;\n        gap: 0px;\n        font-size: 1.25rem;\n        grid-row-start: 3;\n        grid-column-start: 1;\n        align-items: center;\n      }\n\n      #time, #date {\n        text-align: center;\n      }\n\n      #condition {\n        font-size: 2rem;\n        font-weight: 525;\n        align-self: end;\n        grid-column-start: 1;\n        grid-row-start: 1;\n        text-transform: capitalize;\n        justify-self: center;\n      }\n    \n      #weather-description {\n        justify-self: center;\n        font-size: 1.25rem;\n        text-transform: capitalize;\n        grid-row: 2 / 3;\n        grid-column: 1 / 2;\n      }\n\n      #weather-icon {\n        grid-row: 3 / 4;\n        grid-column: 1 / 1;\n        justify-self: center;\n        align-self: center;\n        width: 100px;\n        height: auto;\n      }\n\n      #condition-container {\n        grid-row: 4 / 5;\n        display: grid;\n        grid-template-columns: 1fr;\n        grid-template-rows: auto auto auto;\n      }\n\n      #three-hr-container {\n        flex-direction: column;\n      }\n\n      .three-hr-chunk {\n        display: flex;\n        flex-direction: column;\n        justify-content: space-around;\n        text-align: center;\n        gap: 4px;\n        color: black;\n        padding: 8px;\n      }\n  }"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/clearDiv.js":
/*!*************************!*\
  !*** ./src/clearDiv.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const clearDiv = (div) => {
  if (div.children.length) {
    for (let i = 0; i < div.children.length + 1; i += 1) {
      div.removeChild(div.firstElementChild);
    }
    const parent = div.parentNode;
    parent.removeChild(div);
  } else {
    const parent = div.parentNode;
    parent.removeChild(div);
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clearDiv);


/***/ }),

/***/ "./src/components.js":
/*!***************************!*\
  !*** ./src/components.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "buildContainer": () => (/* binding */ buildContainer),
/* harmony export */   "buildContent": () => (/* binding */ buildContent),
/* harmony export */   "buildHeader": () => (/* binding */ buildHeader)
/* harmony export */ });
/* harmony import */ var _clearDiv__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clearDiv */ "./src/clearDiv.js");
/* harmony import */ var _convert_unix_time__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./convert_unix_time */ "./src/convert_unix_time.js");
/* harmony import */ var _tempConvert__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tempConvert */ "./src/tempConvert.js");




const buildContainer = () => {
  let container = document.createElement('div');
  container.setAttribute('id', 'container');
  document.body.appendChild(container);
};

const buildLogo = (header) => {
  let logo = document.createElement('span');
  logo.setAttribute('id', 'logo');
  logo.innerText = 'Weather';
  header.appendChild(logo);
};

const buildCitySearch = (header) => {
  let citySearchForm = document.createElement('div');
  citySearchForm.setAttribute('id', 'city-search-form');
  let citySearch = document.createElement('input');
  citySearch.setAttribute('type', 'text');
  citySearch.setAttribute('id', 'city-search');
  citySearch.setAttribute('name', 'city-search');
  citySearch.setAttribute('placeholder', 'Enter a City');
  let citySearchSubmit = document.createElement('button');
  citySearchSubmit.setAttribute('type', 'button');
  citySearchSubmit.setAttribute('id', 'city-search-submit');
  citySearchSubmit.innerText = 'Search';
  citySearchForm.appendChild(citySearch);
  citySearchForm.appendChild(citySearchSubmit);
  header.appendChild(citySearchForm);
};

const tempFC = (header) => {
  let toggle = document.createElement('div');
  toggle.setAttribute('id', 'toggle');

  let celsius = document.createElement('span');
  celsius.setAttribute('id', 'celsius');
  celsius.innerText = 'C°';

  let fahrenheit = document.createElement('span');
  fahrenheit.setAttribute('id', 'fahrenheit');
  fahrenheit.innerText = 'F°';
  fahrenheit.classList.toggle('active');

  toggle.appendChild(celsius);
  toggle.appendChild(fahrenheit);

  header.appendChild(toggle);
};

const buildHeader = () => {
  let header = document.createElement('div');
  header.setAttribute('id', 'header');
  let container = document.getElementById('container');
  container.appendChild(header);
  buildLogo(header);
  buildCitySearch(header);
  tempFC(header);
};

const buildContent = (cityData) => {
  let container = document.getElementById('container');
  let isContent = document.getElementById('city-slug');
  let is3hr = document.getElementById('three-hr-container');
  let citySlug = document.createElement('div');
  citySlug.setAttribute('id', 'city-slug');
  container.appendChild(citySlug);

  const builder = () => {
    city();
    dateTime();
    currentTemp();
    currentWeather();
    build3Hour();
  };

  const city = () => {
    let cityContainer = document.createElement('div');
    cityContainer.setAttribute('id', 'city-container');
    citySlug.appendChild(cityContainer);

    let cityName = document.createElement('span');
    cityName.setAttribute('id', 'city-name');
    cityName.innerText = cityData[1].city.name + ', ';

    let countryName = document.createElement('span');
    countryName.setAttribute('id', 'country-name');
    countryName.innerText = cityData[1].city.country;

    cityContainer.appendChild(cityName);
    cityContainer.appendChild(countryName);
  };

  let dateTime = () => {
    let moment = document.createElement('div');
    moment.setAttribute('id', 'moment');
    let dateData = (0,_convert_unix_time__WEBPACK_IMPORTED_MODULE_1__["default"])(cityData[0].dt);
    console.log(cityData[0].timezone);

    let date = document.createElement('span');
    date.setAttribute('id', 'date');
    date.innerText = `${dateData.day}, ${dateData.month} ${dateData.date}`;

    let time = document.createElement('span');
    time.setAttribute('id', 'time');

    {
      let hour = dateData.hour + cityData[0].timezone / 3600;
      let min = dateData.min;
      let amPM = '';
      console.log(Math.sign(hour) === -1);
      if (Math.sign(hour) === -1) {
        hour += 24;
      }
      if (hour < 12) {
        amPM = 'a.m.';
      }
      if (hour > 12) {
        hour -= 12;
        amPM = 'p.m.';
      }
      if (hour === 12) {
        amPM = 'p.m.';
      }
      if (dateData.min < 10) {
        time.innerText = `${hour}:0${min} ${amPM}`;
      } else {
        time.innerText = `${hour}:${min} ${amPM}`;
      }
    }

    moment.appendChild(date);
    moment.appendChild(time);

    citySlug.appendChild(moment);
  };

  const currentTemp = () => {
    let currentWeatherContainer = document.createElement('div');
    currentWeatherContainer.setAttribute('id', 'current-weather-container');
    citySlug.appendChild(currentWeatherContainer);

    let temp = document.createElement('span');
    temp.setAttribute('id', 'current-temp');
    temp.setAttribute('class', 'temp');
    temp.innerText =
      Math.round(_tempConvert__WEBPACK_IMPORTED_MODULE_2__.tempConvert.kToF(cityData[0].main.temp)) + '° F';
    currentWeatherContainer.appendChild(temp);
  };

  const currentWeather = () => {
    let conditionContainer = document.createElement('div');
    conditionContainer.setAttribute('id', 'condition-container');
    citySlug.appendChild(conditionContainer);

    let weatherCondition = document.createElement('span');
    weatherCondition.setAttribute('id', 'condition');
    conditionContainer.appendChild(weatherCondition);
    weatherCondition.innerText = cityData[0].weather[0].main;

    let weatherDescription = document.createElement('span');
    weatherDescription.setAttribute('id', 'weather-description');
    conditionContainer.appendChild(weatherDescription);
    weatherDescription.innerText = cityData[0].weather[0].description;

    let weatherIcon = document.createElement('img');
    weatherIcon.setAttribute(
      'src',
      `http://openweathermap.org/img/wn/${cityData[0].weather[0].icon}@2x.png`
    );
    weatherIcon.setAttribute('id', 'weather-icon');
    conditionContainer.appendChild(weatherIcon);
  };

  const build3Hour = () => {
    let threeHourContainer = document.createElement('div');
    threeHourContainer.setAttribute('id', 'three-hr-container');
    container.appendChild(threeHourContainer);

    const threeHourHelper = (segment) => {
      let threeHrChunk = document.createElement('div');
      threeHrChunk.setAttribute('class', 'three-hr-chunk');
      threeHourContainer.appendChild(threeHrChunk);

      let dateData = (0,_convert_unix_time__WEBPACK_IMPORTED_MODULE_1__["default"])(segment.dt);
      let time = document.createElement('span');
      {
        let hour = dateData.hour + cityData[0].timezone / 3600;
        let min = dateData.min;
        let amPM = '';
        console.log(hour);
        if (Math.sign(hour) === -1) {
          hour += 24;
        }
        if (hour < 12) {
          amPM = 'a.m.';
        }
        if (hour > 12) {
          hour -= 12;
          amPM = 'p.m.';
        }
        if (hour === 12) {
          amPM = 'p.m.';
        }
        if (dateData.min < 10) {
          time.innerText = `${hour}:0${min} ${amPM}`;
        } else {
          time.innerText = `${hour}:${min} ${amPM}`;
        }
      }

      let threeHrTemp = document.createElement('span');
      threeHrTemp.setAttribute('class', 'temp');
      threeHrTemp.innerText =
        Math.round(_tempConvert__WEBPACK_IMPORTED_MODULE_2__.tempConvert.kToF(segment.main.temp)) + '° F';

      let threeHrCondition = document.createElement('span');
      threeHrCondition.innerText = segment.weather[0].main;

      let threeHrRain = document.createElement('span');
      threeHrRain.innerText = Math.round(segment.pop * 100) + '% PoP';

      [time, threeHrTemp, threeHrCondition, threeHrRain].forEach((element) => {
        threeHrChunk.appendChild(element);
      });
    };

    cityData[1].list.forEach((element) => {
      threeHourHelper(element);
    });
  };

  if (isContent && is3hr) {
    (0,_clearDiv__WEBPACK_IMPORTED_MODULE_0__["default"])(isContent);
    (0,_clearDiv__WEBPACK_IMPORTED_MODULE_0__["default"])(is3hr);
    builder();
  } else {
    builder();
  }
};




/***/ }),

/***/ "./src/convert_unix_time.js":
/*!**********************************!*\
  !*** ./src/convert_unix_time.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const convertUnixTime = (dt) => {
  const moment = new Date(dt * 1000);
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  const year = moment.getUTCFullYear();
  const month = months[moment.getUTCMonth()];
  const day = days[moment.getUTCDay()];
  const date = moment.getUTCDate();
  const hour = moment.getUTCHours();
  const min = moment.getUTCMinutes();
  const sec = moment.getUTCSeconds();
  const dateObj = { year, month, date, day, hour, min, sec };
  //   console.log(
  //     moment.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })
  //   );
  return dateObj;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (convertUnixTime);


/***/ }),

/***/ "./src/events.js":
/*!***********************!*\
  !*** ./src/events.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "citySubmit": () => (/* binding */ citySubmit),
/* harmony export */   "tempToggleBtn": () => (/* binding */ tempToggleBtn)
/* harmony export */ });
/* harmony import */ var _fetch_weather__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fetch_weather */ "./src/fetch_weather.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components */ "./src/components.js");
/* harmony import */ var _temptoggle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./temptoggle */ "./src/temptoggle.js");




const citySubmit = () => {
  let submit = document.getElementById('city-search-submit');

  const cityHelper = async () => {
    let citySearch = document.getElementById('city-search');
    let cityWeather = await (0,_fetch_weather__WEBPACK_IMPORTED_MODULE_0__["default"])(citySearch.value);
    if (citySearch.value === '') {
    } else {
      if (cityWeather) {
        if (cityWeather[0].cod != '200') {
          throw console.error(`${cityWeather[0].message} Hey there`);
        } else {
          (0,_components__WEBPACK_IMPORTED_MODULE_1__.buildContent)(cityWeather);
        }
      }
    }
  };

  submit.addEventListener('click', () => {
    cityHelper();
  });

  let cityField = document.getElementById('city-search');

  cityField.addEventListener('keydown', (e) => {
    if (e.code === 'Enter') {
      cityHelper();
    }
  });
};

const tempToggleBtn = () => {
  document.addEventListener('click', (e) => {
    let container = document.getElementById('container');
    if (e.target.parentNode.id === 'toggle') {
      if (container.childNodes.length > 1) {
        let celsius = document.getElementById('celsius');
        celsius.classList.toggle('active');
        let fahrenheit = document.getElementById('fahrenheit');
        fahrenheit.classList.toggle('active');
        (0,_temptoggle__WEBPACK_IMPORTED_MODULE_2__["default"])();
      }
    }
  });
};




/***/ }),

/***/ "./src/fetch_weather.js":
/*!******************************!*\
  !*** ./src/fetch_weather.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const fetchWeather = async (city) => {
  try {
    const apiKey = '3c68b43789bf56a9dc2ea91cc4a6309e';
    const weather5d3hr = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&cnt=16`,
      { cors: true }
    );
    const currentWeather = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
    );
    const weather5d = await weather5d3hr.json();
    const cWeather = await currentWeather.json();

    if (weather5d.message) {
      throw `${weather5d.message}`;
    }
    if (cWeather.message) {
      throw `${cWeather.message}`;
    }

    return [cWeather, weather5d];
  } catch (error) {
    alert(error);
    return;
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fetchWeather);


/***/ }),

/***/ "./src/tempConvert.js":
/*!****************************!*\
  !*** ./src/tempConvert.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "tempConvert": () => (/* binding */ tempConvert)
/* harmony export */ });
const tempConvert = (() => {
  // Kelvin to Fahrenheit
  const kToF = (temp) => {
    return ((temp - 273.15) * 9) / 5 + 32;
  };
  // Kelvin to Celsius
  const kToC = (temp) => {
    return temp - 273.15;
  };
  // Fahrenheit to Celsius
  const fToC = (temp) => {
    return ((temp - 32) * 5) / 9;
  };
  // Celsius to Fahrenheit
  const cToF = (temp) => {
    return (temp * 9) / 5 + 32;
  };

  return {
    kToF: kToF,
    kToC: kToC,
    fToC: fToC,
    cToF: cToF,
  };
})();




/***/ }),

/***/ "./src/temptoggle.js":
/*!***************************!*\
  !*** ./src/temptoggle.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _tempConvert__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tempConvert */ "./src/tempConvert.js");


const tempToggle = () => {
  let temps = document.getElementsByClassName('temp');
  let unit = document.getElementsByClassName('active');

  if (temps[0]) {
    for (let item of temps) {
      if (unit[0].id === 'fahrenheit') {
        item.innerText = `${Math.round(
          _tempConvert__WEBPACK_IMPORTED_MODULE_0__.tempConvert.cToF(parseInt(item.innerText.substring(0, 2)))
        )}° F`;
      }
      if (unit[0].id === 'celsius') {
        item.innerText = `${Math.round(
          _tempConvert__WEBPACK_IMPORTED_MODULE_0__.tempConvert.fToC(parseInt(item.innerText.substring(0, 2)))
        )}° C`;
      }
    }
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tempToggle);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components */ "./src/components.js");
/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./events */ "./src/events.js");
/* harmony import */ var _temptoggle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./temptoggle */ "./src/temptoggle.js");





(0,_components__WEBPACK_IMPORTED_MODULE_1__.buildContainer)();
(0,_components__WEBPACK_IMPORTED_MODULE_1__.buildHeader)();
(0,_events__WEBPACK_IMPORTED_MODULE_2__.citySubmit)();
(0,_events__WEBPACK_IMPORTED_MODULE_2__.tempToggleBtn)();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHFIQUFxSDtBQUNySCwrR0FBK0csSUFBSSxJQUFJLGtCQUFrQjtBQUN6STtBQUNBLGdEQUFnRCw2QkFBNkIsc0JBQXNCLDhCQUE4QixLQUFLLDhCQUE4QiwwQkFBMEIsS0FBSyxpREFBaUQsZ0JBQWdCLGlCQUFpQiwwQkFBMEIsS0FBSyxnQkFBZ0IsdUJBQXVCLEtBQUssaUJBQWlCLDZCQUE2QixvQkFBb0IsNkJBQTZCLDZCQUE2QixnQkFBZ0Isb0JBQW9CLHlCQUF5QiwwQkFBMEIsS0FBSyxhQUFhLG1CQUFtQiw2QkFBNkIsd0JBQXdCLEtBQUsseUJBQXlCLHlCQUF5QixvQkFBb0IsbUJBQW1CLHlCQUF5QixlQUFlLGVBQWUsS0FBSyxrQkFBa0IsbUJBQW1CLGdDQUFnQyw0QkFBNEIsbUJBQW1CLHlCQUF5QiwwQkFBMEIseUJBQXlCLG1CQUFtQixvQkFBb0IseUNBQXlDLG9DQUFvQyxvQ0FBb0MsdUJBQXVCLHlCQUF5QiwrQ0FBK0MsS0FBSyxlQUFlLHdCQUF3QixvQkFBb0IsMEJBQTBCLDhCQUE4QiwyQkFBMkIsd0JBQXdCLDJCQUEyQix3QkFBd0IsZ0JBQWdCLEtBQUssdUJBQXVCLHNCQUFzQix1QkFBdUIsMkJBQTJCLHNCQUFzQiwyQkFBMkIsd0JBQXdCLEtBQUssa0NBQWtDLHlCQUF5QixzQkFBc0IsdUJBQXVCLDJCQUEyQixzQkFBc0IseUJBQXlCLDJCQUEyQixLQUFLLGtCQUFrQixzQkFBc0IsdUJBQXVCLHNCQUFzQiwyQkFBMkIsd0JBQXdCLGlDQUFpQywwQkFBMEIsS0FBSyw0QkFBNEIsMEJBQTBCLHdCQUF3QixpQ0FBaUMsc0JBQXNCLHlCQUF5QixLQUFLLHFCQUFxQixzQkFBc0IseUJBQXlCLHdCQUF3Qix5QkFBeUIsbUJBQW1CLG1CQUFtQixLQUFLLDRCQUE0QixzQkFBc0Isb0JBQW9CLDhDQUE4QyxvQ0FBb0MsS0FBSywyQkFBMkIsdUJBQXVCLHlCQUF5QixvQkFBb0IsNkJBQTZCLDhCQUE4QixvQkFBb0IsS0FBSyx1QkFBdUIsb0JBQW9CLDRDQUE0QyxvQ0FBb0MseUJBQXlCLGVBQWUsbUJBQW1CLHFDQUFxQyxtQkFBbUIsS0FBSyxhQUFhLHlCQUF5Qix5QkFBeUIsZUFBZSxHQUFHLDZCQUE2Qix1QkFBdUIsbUJBQW1CLDhCQUE4QixzQkFBc0IsbUJBQW1CLEtBQUssZ0JBQWdCLG1CQUFtQiw4QkFBOEIscUNBQXFDLEtBQUssbUJBQW1CLG1CQUFtQiw4QkFBOEIscUNBQXFDLEtBQUsseUJBQXlCLG1CQUFtQixnQ0FBZ0MsOEJBQThCLEtBQUssNENBQTRDLGVBQWUsd0JBQXdCLGlDQUFpQyxvQkFBb0IsOEJBQThCLGdDQUFnQyxPQUFPLDJCQUEyQixtQkFBbUIsT0FBTyxvQkFBb0IscUNBQXFDLHVEQUF1RCx3QkFBd0IsU0FBUyxzQ0FBc0MsMEJBQTBCLDRCQUE0Qiw0QkFBNEIsK0JBQStCLDBCQUEwQixTQUFTLDJCQUEyQiw0QkFBNEIsMEJBQTBCLDRCQUE0QiwrQkFBK0IsU0FBUyxtQkFBbUIsaUNBQWlDLG1CQUFtQiw2QkFBNkIsNEJBQTRCLCtCQUErQiw4QkFBOEIsU0FBUyx3QkFBd0IsNkJBQTZCLFNBQVMsc0JBQXNCLDBCQUEwQiwyQkFBMkIsMEJBQTBCLCtCQUErQiw0QkFBNEIscUNBQXFDLCtCQUErQixTQUFTLG9DQUFvQywrQkFBK0IsNkJBQTZCLHFDQUFxQywwQkFBMEIsNkJBQTZCLFNBQVMseUJBQXlCLDBCQUEwQiw2QkFBNkIsK0JBQStCLDZCQUE2Qix1QkFBdUIsdUJBQXVCLFNBQVMsZ0NBQWdDLDBCQUEwQix3QkFBd0IscUNBQXFDLDZDQUE2QyxTQUFTLCtCQUErQixpQ0FBaUMsU0FBUywyQkFBMkIsd0JBQXdCLGlDQUFpQyx3Q0FBd0MsNkJBQTZCLG1CQUFtQix1QkFBdUIsdUJBQXVCLFNBQVMsS0FBSyxPQUFPLGlGQUFpRixZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksUUFBUSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxXQUFX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Q0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7OztBQ0FzQjtBQUNtRDtBQUNwQjtBQUNmOztBQUV0QywyREFBYztBQUNkLHdEQUFXO0FBQ1gsbURBQVU7QUFDVixzREFBYSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvc3R5bGVzLmNzcz80NGIyIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvY2xlYXJEaXYuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvY29tcG9uZW50cy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9jb252ZXJ0X3VuaXhfdGltZS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9ldmVudHMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvZmV0Y2hfd2VhdGhlci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy90ZW1wQ29udmVydC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy90ZW1wdG9nZ2xlLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TG9ic3RlciZkaXNwbGF5PXN3YXApO1wiXSk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG86d2dodEA0MDA7NTAwOzcwMDs5MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiaHRtbCB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxuICB9XFxuICBcXG4gICosICo6YmVmb3JlLCAqOmFmdGVyIHtcXG4gICAgYm94LXNpemluZzogaW5oZXJpdDtcXG4gIH1cXG4gIFxcbiAgYm9keSwgaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCwgb2wsIHVsIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgfVxcbiAgXFxuICBvbCwgdWwge1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbiAgfVxcblxcblxcbiAgI2hlYWRlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogc3RhcnQ7XFxuICAgIGdhcDogNDhweDtcXG4gICAgcGFkZGluZzogMTZweDtcXG4gICAgcGFkZGluZy1sZWZ0OiA5NnB4O1xcbiAgICBwYWRkaW5nLXJpZ2h0OiA5NnB4O1xcbiAgfVxcblxcbiAgI2xvZ28ge1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtZmFtaWx5OiAnTG9ic3Rlcic7XFxuICAgIGZvbnQtc2l6ZTogMy41cmVtO1xcbiAgfVxcblxcbiAgI2NpdHktc2VhcmNoLWZvcm0ge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGhlaWdodDogMjRweDtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBnYXA6IDRweDtcXG4gICAgdG9wOiA3cHg7XFxuICB9XFxuXFxuICAjY2l0eS1zbHVnIHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWZiY2Q0O1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90byc7XFxuICAgIHBhZGRpbmc6IDhweDtcXG4gICAgcGFkZGluZy1sZWZ0OiA0OHB4O1xcbiAgICBwYWRkaW5nLXJpZ2h0OiA0OHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICAgIG1hcmdpbjogMTZweDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMmZyIDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIGF1dG87XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgICBjb2x1bW4tZ2FwOiAxNnB4O1xcbiAgICB3aWR0aDogMTAwJSAtIDMycHg7XFxuICAgIGJveC1zaGFkb3c6IDAgM3B4IDEwcHggcmdiKDAgMCAwIC8gMC4yKTs7XFxuICB9XFxuXFxuICAjbW9tZW50IHtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgICBncmlkLWNvbHVtbi1zdGFydDogMjtcXG4gICAgZ3JpZC1yb3ctc3RhcnQ6IDI7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICBhbGlnbi1zZWxmOiBzdGFydDtcXG4gICAgZ2FwOiAxNnB4O1xcbiAgfVxcblxcbiAgI2NpdHktY29udGFpbmVyIHtcXG4gICAgZm9udC1zaXplOiAzcmVtO1xcbiAgICBmb250LXdlaWdodDogNTI1O1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgYWxpZ24tc2VsZjogZW5kO1xcbiAgICBncmlkLWNvbHVtbi1zdGFydDogMjtcXG4gICAgZ3JpZC1yb3ctc3RhcnQ6IDE7XFxuICB9XFxuXFxuICAjY3VycmVudC13ZWF0aGVyLWNvbnRhaW5lciB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZm9udC1zaXplOiA1cmVtO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBncmlkLWNvbHVtbi1zdGFydDogMTtcXG4gICAgZ3JpZC1yb3c6IDEgLyAzO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgfVxcblxcbiAgI2NvbmRpdGlvbiB7XFxuICAgIGZvbnQtc2l6ZTogM3JlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDUyNTtcXG4gICAgYWxpZ24tc2VsZjogZW5kO1xcbiAgICBncmlkLWNvbHVtbi1zdGFydDogMjtcXG4gICAgZ3JpZC1yb3ctc3RhcnQ6IDE7XFxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xcbiAgICBqdXN0aWZ5LXNlbGY6IHN0YXJ0O1xcbiAgfVxcblxcbiAgI3dlYXRoZXItZGVzY3JpcHRpb24ge1xcbiAgICBqdXN0aWZ5LXNlbGY6IHN0YXJ0O1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XFxuICAgIGdyaWQtcm93OiAyIC8gMztcXG4gICAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbiAgfVxcblxcbiAgI3dlYXRoZXItaWNvbiB7XFxuICAgIGdyaWQtcm93OiAxIC8gMztcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGVuZDtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICB3aWR0aDogMTAwcHg7XFxuICAgIGhlaWdodDogYXV0bztcXG4gIH1cXG5cXG4gICNjb25kaXRpb24tY29udGFpbmVyIHtcXG4gICAgZ3JpZC1yb3c6IDEgLyAzO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gbWluLWNvbnRlbnQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byBhdXRvO1xcbiAgfVxcblxcbiAgI3RocmVlLWhyLWNvbnRhaW5lciB7XFxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDE2cHg7XFxuICB9XFxuXFxuICAudGhyZWUtaHItY2h1bmsge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCAxZnIpO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBnYXA6IDRweDtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XFxuICAgIHBhZGRpbmc6IDhweDtcXG4gIH1cXG5cXG4jdG9nZ2xlIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIHRvcDogNnB4O1xcbn1cXG5cXG4gICNjZWxzaXVzLCAjZmFocmVuaGVpdCB7XFxuICAgIGZvbnQtd2VpZ2h0OiA1NTA7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgcGFkZGluZzogNnB4O1xcbiAgfVxcblxcbiAgI2NlbHNpdXMge1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXItcmFkaXVzOiA4cHggMHB4IDBweCA4cHg7XFxuICB9XFxuXFxuICAjZmFocmVuaGVpdCB7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDBweCA4cHggOHB4IDBweDtcXG4gIH1cXG5cXG4gICN0b2dnbGUgPiAuYWN0aXZlIHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWZiY2Q0O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIH1cXG5cXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7XFxuICAgICNoZWFkZXIge1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICBnYXA6IDE2cHg7XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICB9XFxuXFxuICAgICNjaXR5LXNlYXJjaC1mb3JtIHtcXG4gICAgICAgIHRvcDogMHB4O1xcbiAgICB9XFxuXFxuICAgICNjaXR5LXNsdWcge1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gYXV0byBhdXRvIGF1dG8gYXV0bztcXG4gICAgICAgIHJvdy1nYXA6IDE2cHg7XFxuICAgICAgfVxcblxcbiAgICAgICNjdXJyZW50LXdlYXRoZXItY29udGFpbmVyIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogM3JlbTtcXG4gICAgICAgIHBvc2l0aW9uOiBpbmhlcml0O1xcbiAgICAgICAgZ3JpZC1yb3ctc3RhcnQ6IDE7XFxuICAgICAgICBncmlkLWNvbHVtbi1zdGFydDogMTtcXG4gICAgICAgIGdyaWQtcm93OiAxIC8gMjtcXG4gICAgICB9XFxuXFxuICAgICAgI2NpdHktY29udGFpbmVyIHtcXG4gICAgICAgIHBvc2l0aW9uOiBpbmhlcml0O1xcbiAgICAgICAgZm9udC1zaXplOiAycmVtO1xcbiAgICAgICAgZ3JpZC1yb3ctc3RhcnQ6IDI7XFxuICAgICAgICBncmlkLWNvbHVtbi1zdGFydDogMTtcXG4gICAgICB9XFxuXFxuICAgICAgI21vbWVudCB7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgZ2FwOiAwcHg7XFxuICAgICAgICBmb250LXNpemU6IDEuMjVyZW07XFxuICAgICAgICBncmlkLXJvdy1zdGFydDogMztcXG4gICAgICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICB9XFxuXFxuICAgICAgI3RpbWUsICNkYXRlIHtcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICB9XFxuXFxuICAgICAgI2NvbmRpdGlvbiB7XFxuICAgICAgICBmb250LXNpemU6IDJyZW07XFxuICAgICAgICBmb250LXdlaWdodDogNTI1O1xcbiAgICAgICAgYWxpZ24tc2VsZjogZW5kO1xcbiAgICAgICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XFxuICAgICAgICBncmlkLXJvdy1zdGFydDogMTtcXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xcbiAgICAgICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgICAgfVxcbiAgICBcXG4gICAgICAjd2VhdGhlci1kZXNjcmlwdGlvbiB7XFxuICAgICAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xcbiAgICAgICAgZ3JpZC1yb3c6IDIgLyAzO1xcbiAgICAgICAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcbiAgICAgIH1cXG5cXG4gICAgICAjd2VhdGhlci1pY29uIHtcXG4gICAgICAgIGdyaWQtcm93OiAzIC8gNDtcXG4gICAgICAgIGdyaWQtY29sdW1uOiAxIC8gMTtcXG4gICAgICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICAgICAgd2lkdGg6IDEwMHB4O1xcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xcbiAgICAgIH1cXG5cXG4gICAgICAjY29uZGl0aW9uLWNvbnRhaW5lciB7XFxuICAgICAgICBncmlkLXJvdzogNCAvIDU7XFxuICAgICAgICBkaXNwbGF5OiBncmlkO1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gYXV0byBhdXRvO1xcbiAgICAgIH1cXG5cXG4gICAgICAjdGhyZWUtaHItY29udGFpbmVyIHtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgfVxcblxcbiAgICAgIC50aHJlZS1oci1jaHVuayB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgZ2FwOiA0cHg7XFxuICAgICAgICBjb2xvcjogYmxhY2s7XFxuICAgICAgICBwYWRkaW5nOiA4cHg7XFxuICAgICAgfVxcbiAgfVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUdBO0lBQ0ksc0JBQXNCO0lBQ3RCLGVBQWU7SUFDZix1QkFBdUI7RUFDekI7O0VBRUE7SUFDRSxtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxTQUFTO0lBQ1QsVUFBVTtJQUNWLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLGdCQUFnQjtFQUNsQjs7O0VBR0E7SUFDRSxzQkFBc0I7SUFDdEIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixzQkFBc0I7SUFDdEIsU0FBUztJQUNULGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0UsWUFBWTtJQUNaLHNCQUFzQjtJQUN0QixpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFFBQVE7RUFDVjs7RUFFQTtJQUNFLFlBQVk7SUFDWix5QkFBeUI7SUFDekIscUJBQXFCO0lBQ3JCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osYUFBYTtJQUNiLGtDQUFrQztJQUNsQyw2QkFBNkI7SUFDN0IsNkJBQTZCO0lBQzdCLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsdUNBQXVDO0VBQ3pDOztFQUVBO0lBQ0UsaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLG9CQUFvQjtJQUNwQixpQkFBaUI7SUFDakIsb0JBQW9CO0lBQ3BCLGlCQUFpQjtJQUNqQixTQUFTO0VBQ1g7O0VBRUE7SUFDRSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLG9CQUFvQjtJQUNwQixlQUFlO0lBQ2Ysb0JBQW9CO0lBQ3BCLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLG9CQUFvQjtJQUNwQixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLG9CQUFvQjtFQUN0Qjs7RUFFQTtJQUNFLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLG9CQUFvQjtJQUNwQixpQkFBaUI7SUFDakIsMEJBQTBCO0lBQzFCLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsMEJBQTBCO0lBQzFCLGVBQWU7SUFDZixrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLFlBQVk7RUFDZDs7RUFFQTtJQUNFLGVBQWU7SUFDZixhQUFhO0lBQ2IsdUNBQXVDO0lBQ3ZDLDZCQUE2QjtFQUMvQjs7RUFFQTtJQUNFLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsYUFBYTtFQUNmOztFQUVBO0lBQ0UsYUFBYTtJQUNiLHFDQUFxQztJQUNyQyw2QkFBNkI7SUFDN0Isa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixZQUFZO0lBQ1osOEJBQThCO0lBQzlCLFlBQVk7RUFDZDs7QUFFRjtJQUNJLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsUUFBUTtBQUNaOztFQUVFO0lBQ0UsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWix1QkFBdUI7SUFDdkIsZUFBZTtJQUNmLFlBQVk7RUFDZDs7RUFFQTtJQUNFLFlBQVk7SUFDWix1QkFBdUI7SUFDdkIsOEJBQThCO0VBQ2hDOztFQUVBO0lBQ0UsWUFBWTtJQUNaLHVCQUF1QjtJQUN2Qiw4QkFBOEI7RUFDaEM7O0VBRUE7SUFDRSxZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLHVCQUF1QjtFQUN6Qjs7RUFFQTtJQUNFO1FBQ0ksYUFBYTtRQUNiLHNCQUFzQjtRQUN0QixTQUFTO1FBQ1QsbUJBQW1CO1FBQ25CLHFCQUFxQjtJQUN6Qjs7SUFFQTtRQUNJLFFBQVE7SUFDWjs7SUFFQTtRQUNJLDBCQUEwQjtRQUMxQiw0Q0FBNEM7UUFDNUMsYUFBYTtNQUNmOztNQUVBO1FBQ0UsZUFBZTtRQUNmLGlCQUFpQjtRQUNqQixpQkFBaUI7UUFDakIsb0JBQW9CO1FBQ3BCLGVBQWU7TUFDakI7O01BRUE7UUFDRSxpQkFBaUI7UUFDakIsZUFBZTtRQUNmLGlCQUFpQjtRQUNqQixvQkFBb0I7TUFDdEI7O01BRUE7UUFDRSxzQkFBc0I7UUFDdEIsUUFBUTtRQUNSLGtCQUFrQjtRQUNsQixpQkFBaUI7UUFDakIsb0JBQW9CO1FBQ3BCLG1CQUFtQjtNQUNyQjs7TUFFQTtRQUNFLGtCQUFrQjtNQUNwQjs7TUFFQTtRQUNFLGVBQWU7UUFDZixnQkFBZ0I7UUFDaEIsZUFBZTtRQUNmLG9CQUFvQjtRQUNwQixpQkFBaUI7UUFDakIsMEJBQTBCO1FBQzFCLG9CQUFvQjtNQUN0Qjs7TUFFQTtRQUNFLG9CQUFvQjtRQUNwQixrQkFBa0I7UUFDbEIsMEJBQTBCO1FBQzFCLGVBQWU7UUFDZixrQkFBa0I7TUFDcEI7O01BRUE7UUFDRSxlQUFlO1FBQ2Ysa0JBQWtCO1FBQ2xCLG9CQUFvQjtRQUNwQixrQkFBa0I7UUFDbEIsWUFBWTtRQUNaLFlBQVk7TUFDZDs7TUFFQTtRQUNFLGVBQWU7UUFDZixhQUFhO1FBQ2IsMEJBQTBCO1FBQzFCLGtDQUFrQztNQUNwQzs7TUFFQTtRQUNFLHNCQUFzQjtNQUN4Qjs7TUFFQTtRQUNFLGFBQWE7UUFDYixzQkFBc0I7UUFDdEIsNkJBQTZCO1FBQzdCLGtCQUFrQjtRQUNsQixRQUFRO1FBQ1IsWUFBWTtRQUNaLFlBQVk7TUFDZDtFQUNKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUxvYnN0ZXImZGlzcGxheT1zd2FwJyk7XFxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvOndnaHRANDAwOzUwMDs3MDA7OTAwJmRpc3BsYXk9c3dhcCcpO1xcblxcbmh0bWwge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xcbiAgfVxcbiAgXFxuICAqLCAqOmJlZm9yZSwgKjphZnRlciB7XFxuICAgIGJveC1zaXppbmc6IGluaGVyaXQ7XFxuICB9XFxuICBcXG4gIGJvZHksIGgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIHAsIG9sLCB1bCB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gIH1cXG4gIFxcbiAgb2wsIHVsIHtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIH1cXG5cXG5cXG4gICNoZWFkZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xcbiAgICBnYXA6IDQ4cHg7XFxuICAgIHBhZGRpbmc6IDE2cHg7XFxuICAgIHBhZGRpbmctbGVmdDogOTZweDtcXG4gICAgcGFkZGluZy1yaWdodDogOTZweDtcXG4gIH1cXG5cXG4gICNsb2dvIHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LWZhbWlseTogJ0xvYnN0ZXInO1xcbiAgICBmb250LXNpemU6IDMuNXJlbTtcXG4gIH1cXG5cXG4gICNjaXR5LXNlYXJjaC1mb3JtIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBoZWlnaHQ6IDI0cHg7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgZ2FwOiA0cHg7XFxuICAgIHRvcDogN3B4O1xcbiAgfVxcblxcbiAgI2NpdHktc2x1ZyB7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzVmYmNkNDtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xcbiAgICBwYWRkaW5nOiA4cHg7XFxuICAgIHBhZGRpbmctbGVmdDogNDhweDtcXG4gICAgcGFkZGluZy1yaWdodDogNDhweDtcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgICBtYXJnaW46IDE2cHg7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDJmciAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byBhdXRvO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gICAgY29sdW1uLWdhcDogMTZweDtcXG4gICAgd2lkdGg6IDEwMCUgLSAzMnB4O1xcbiAgICBib3gtc2hhZG93OiAwIDNweCAxMHB4IHJnYigwIDAgMCAvIDAuMik7O1xcbiAgfVxcblxcbiAgI21vbWVudCB7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDI7XFxuICAgIGdyaWQtcm93LXN0YXJ0OiAyO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgYWxpZ24tc2VsZjogc3RhcnQ7XFxuICAgIGdhcDogMTZweDtcXG4gIH1cXG5cXG4gICNjaXR5LWNvbnRhaW5lciB7XFxuICAgIGZvbnQtc2l6ZTogM3JlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDUyNTtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIGFsaWduLXNlbGY6IGVuZDtcXG4gICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDI7XFxuICAgIGdyaWQtcm93LXN0YXJ0OiAxO1xcbiAgfVxcblxcbiAgI2N1cnJlbnQtd2VhdGhlci1jb250YWluZXIge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGZvbnQtc2l6ZTogNXJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XFxuICAgIGdyaWQtcm93OiAxIC8gMztcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gIH1cXG5cXG4gICNjb25kaXRpb24ge1xcbiAgICBmb250LXNpemU6IDNyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA1MjU7XFxuICAgIGFsaWduLXNlbGY6IGVuZDtcXG4gICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDI7XFxuICAgIGdyaWQtcm93LXN0YXJ0OiAxO1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcXG4gICAganVzdGlmeS1zZWxmOiBzdGFydDtcXG4gIH1cXG5cXG4gICN3ZWF0aGVyLWRlc2NyaXB0aW9uIHtcXG4gICAganVzdGlmeS1zZWxmOiBzdGFydDtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xcbiAgICBncmlkLXJvdzogMiAvIDM7XFxuICAgIGdyaWQtY29sdW1uOiAyIC8gMztcXG4gIH1cXG5cXG4gICN3ZWF0aGVyLWljb24ge1xcbiAgICBncmlkLXJvdzogMSAvIDM7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gMjtcXG4gICAganVzdGlmeS1zZWxmOiBlbmQ7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDEwMHB4O1xcbiAgICBoZWlnaHQ6IGF1dG87XFxuICB9XFxuXFxuICAjY29uZGl0aW9uLWNvbnRhaW5lciB7XFxuICAgIGdyaWQtcm93OiAxIC8gMztcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIG1pbi1jb250ZW50O1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gYXV0bztcXG4gIH1cXG5cXG4gICN0aHJlZS1oci1jb250YWluZXIge1xcbiAgICBmb250LXdlaWdodDogMzAwO1xcbiAgICBmb250LXNpemU6IDEuMjVyZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAxNnB4O1xcbiAgfVxcblxcbiAgLnRocmVlLWhyLWNodW5rIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMWZyKTtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZ2FwOiA0cHg7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICBwYWRkaW5nOiA4cHg7XFxuICB9XFxuXFxuI3RvZ2dsZSB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICB0b3A6IDZweDtcXG59XFxuXFxuICAjY2Vsc2l1cywgI2ZhaHJlbmhlaXQge1xcbiAgICBmb250LXdlaWdodDogNTUwO1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIHBhZGRpbmc6IDZweDtcXG4gIH1cXG5cXG4gICNjZWxzaXVzIHtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4IDBweCAwcHggOHB4O1xcbiAgfVxcblxcbiAgI2ZhaHJlbmhlaXQge1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXItcmFkaXVzOiAwcHggOHB4IDhweCAwcHg7XFxuICB9XFxuXFxuICAjdG9nZ2xlID4gLmFjdGl2ZSB7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzVmYmNkNDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICB9XFxuXFxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xcbiAgICAjaGVhZGVyIHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgZ2FwOiAxNnB4O1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgfVxcblxcbiAgICAjY2l0eS1zZWFyY2gtZm9ybSB7XFxuICAgICAgICB0b3A6IDBweDtcXG4gICAgfVxcblxcbiAgICAjY2l0eS1zbHVnIHtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIGF1dG8gYXV0byBhdXRvIGF1dG87XFxuICAgICAgICByb3ctZ2FwOiAxNnB4O1xcbiAgICAgIH1cXG5cXG4gICAgICAjY3VycmVudC13ZWF0aGVyLWNvbnRhaW5lciB7XFxuICAgICAgICBmb250LXNpemU6IDNyZW07XFxuICAgICAgICBwb3NpdGlvbjogaW5oZXJpdDtcXG4gICAgICAgIGdyaWQtcm93LXN0YXJ0OiAxO1xcbiAgICAgICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XFxuICAgICAgICBncmlkLXJvdzogMSAvIDI7XFxuICAgICAgfVxcblxcbiAgICAgICNjaXR5LWNvbnRhaW5lciB7XFxuICAgICAgICBwb3NpdGlvbjogaW5oZXJpdDtcXG4gICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgICAgIGdyaWQtcm93LXN0YXJ0OiAyO1xcbiAgICAgICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XFxuICAgICAgfVxcblxcbiAgICAgICNtb21lbnQge1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgIGdhcDogMHB4O1xcbiAgICAgICAgZm9udC1zaXplOiAxLjI1cmVtO1xcbiAgICAgICAgZ3JpZC1yb3ctc3RhcnQ6IDM7XFxuICAgICAgICBncmlkLWNvbHVtbi1zdGFydDogMTtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgfVxcblxcbiAgICAgICN0aW1lLCAjZGF0ZSB7XFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICAgfVxcblxcbiAgICAgICNjb25kaXRpb24ge1xcbiAgICAgICAgZm9udC1zaXplOiAycmVtO1xcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUyNTtcXG4gICAgICAgIGFsaWduLXNlbGY6IGVuZDtcXG4gICAgICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xcbiAgICAgICAgZ3JpZC1yb3ctc3RhcnQ6IDE7XFxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcXG4gICAgICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICAgIH1cXG4gICAgXFxuICAgICAgI3dlYXRoZXItZGVzY3JpcHRpb24ge1xcbiAgICAgICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgICAgICBmb250LXNpemU6IDEuMjVyZW07XFxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcXG4gICAgICAgIGdyaWQtcm93OiAyIC8gMztcXG4gICAgICAgIGdyaWQtY29sdW1uOiAxIC8gMjtcXG4gICAgICB9XFxuXFxuICAgICAgI3dlYXRoZXItaWNvbiB7XFxuICAgICAgICBncmlkLXJvdzogMyAvIDQ7XFxuICAgICAgICBncmlkLWNvbHVtbjogMSAvIDE7XFxuICAgICAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgICAgIHdpZHRoOiAxMDBweDtcXG4gICAgICAgIGhlaWdodDogYXV0bztcXG4gICAgICB9XFxuXFxuICAgICAgI2NvbmRpdGlvbi1jb250YWluZXIge1xcbiAgICAgICAgZ3JpZC1yb3c6IDQgLyA1O1xcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIGF1dG8gYXV0bztcXG4gICAgICB9XFxuXFxuICAgICAgI3RocmVlLWhyLWNvbnRhaW5lciB7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgIH1cXG5cXG4gICAgICAudGhyZWUtaHItY2h1bmsge1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgIGdhcDogNHB4O1xcbiAgICAgICAgY29sb3I6IGJsYWNrO1xcbiAgICAgICAgcGFkZGluZzogOHB4O1xcbiAgICAgIH1cXG4gIH1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiY29uc3QgY2xlYXJEaXYgPSAoZGl2KSA9PiB7XG4gIGlmIChkaXYuY2hpbGRyZW4ubGVuZ3RoKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkaXYuY2hpbGRyZW4ubGVuZ3RoICsgMTsgaSArPSAxKSB7XG4gICAgICBkaXYucmVtb3ZlQ2hpbGQoZGl2LmZpcnN0RWxlbWVudENoaWxkKTtcbiAgICB9XG4gICAgY29uc3QgcGFyZW50ID0gZGl2LnBhcmVudE5vZGU7XG4gICAgcGFyZW50LnJlbW92ZUNoaWxkKGRpdik7XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgcGFyZW50ID0gZGl2LnBhcmVudE5vZGU7XG4gICAgcGFyZW50LnJlbW92ZUNoaWxkKGRpdik7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNsZWFyRGl2O1xuIiwiaW1wb3J0IGNsZWFyRGl2IGZyb20gJy4vY2xlYXJEaXYnO1xuaW1wb3J0IGNvbnZlcnRVbml4VGltZSBmcm9tICcuL2NvbnZlcnRfdW5peF90aW1lJztcbmltcG9ydCB7IHRlbXBDb252ZXJ0IH0gZnJvbSAnLi90ZW1wQ29udmVydCc7XG5cbmNvbnN0IGJ1aWxkQ29udGFpbmVyID0gKCkgPT4ge1xuICBsZXQgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NvbnRhaW5lcicpO1xuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG59O1xuXG5jb25zdCBidWlsZExvZ28gPSAoaGVhZGVyKSA9PiB7XG4gIGxldCBsb2dvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICBsb2dvLnNldEF0dHJpYnV0ZSgnaWQnLCAnbG9nbycpO1xuICBsb2dvLmlubmVyVGV4dCA9ICdXZWF0aGVyJztcbiAgaGVhZGVyLmFwcGVuZENoaWxkKGxvZ28pO1xufTtcblxuY29uc3QgYnVpbGRDaXR5U2VhcmNoID0gKGhlYWRlcikgPT4ge1xuICBsZXQgY2l0eVNlYXJjaEZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY2l0eVNlYXJjaEZvcm0uc2V0QXR0cmlidXRlKCdpZCcsICdjaXR5LXNlYXJjaC1mb3JtJyk7XG4gIGxldCBjaXR5U2VhcmNoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgY2l0eVNlYXJjaC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xuICBjaXR5U2VhcmNoLnNldEF0dHJpYnV0ZSgnaWQnLCAnY2l0eS1zZWFyY2gnKTtcbiAgY2l0eVNlYXJjaC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnY2l0eS1zZWFyY2gnKTtcbiAgY2l0eVNlYXJjaC5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ0VudGVyIGEgQ2l0eScpO1xuICBsZXQgY2l0eVNlYXJjaFN1Ym1pdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBjaXR5U2VhcmNoU3VibWl0LnNldEF0dHJpYnV0ZSgndHlwZScsICdidXR0b24nKTtcbiAgY2l0eVNlYXJjaFN1Ym1pdC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NpdHktc2VhcmNoLXN1Ym1pdCcpO1xuICBjaXR5U2VhcmNoU3VibWl0LmlubmVyVGV4dCA9ICdTZWFyY2gnO1xuICBjaXR5U2VhcmNoRm9ybS5hcHBlbmRDaGlsZChjaXR5U2VhcmNoKTtcbiAgY2l0eVNlYXJjaEZvcm0uYXBwZW5kQ2hpbGQoY2l0eVNlYXJjaFN1Ym1pdCk7XG4gIGhlYWRlci5hcHBlbmRDaGlsZChjaXR5U2VhcmNoRm9ybSk7XG59O1xuXG5jb25zdCB0ZW1wRkMgPSAoaGVhZGVyKSA9PiB7XG4gIGxldCB0b2dnbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgdG9nZ2xlLnNldEF0dHJpYnV0ZSgnaWQnLCAndG9nZ2xlJyk7XG5cbiAgbGV0IGNlbHNpdXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gIGNlbHNpdXMuc2V0QXR0cmlidXRlKCdpZCcsICdjZWxzaXVzJyk7XG4gIGNlbHNpdXMuaW5uZXJUZXh0ID0gJ0PCsCc7XG5cbiAgbGV0IGZhaHJlbmhlaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gIGZhaHJlbmhlaXQuc2V0QXR0cmlidXRlKCdpZCcsICdmYWhyZW5oZWl0Jyk7XG4gIGZhaHJlbmhlaXQuaW5uZXJUZXh0ID0gJ0bCsCc7XG4gIGZhaHJlbmhlaXQuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XG5cbiAgdG9nZ2xlLmFwcGVuZENoaWxkKGNlbHNpdXMpO1xuICB0b2dnbGUuYXBwZW5kQ2hpbGQoZmFocmVuaGVpdCk7XG5cbiAgaGVhZGVyLmFwcGVuZENoaWxkKHRvZ2dsZSk7XG59O1xuXG5jb25zdCBidWlsZEhlYWRlciA9ICgpID0+IHtcbiAgbGV0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBoZWFkZXIuc2V0QXR0cmlidXRlKCdpZCcsICdoZWFkZXInKTtcbiAgbGV0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250YWluZXInKTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGhlYWRlcik7XG4gIGJ1aWxkTG9nbyhoZWFkZXIpO1xuICBidWlsZENpdHlTZWFyY2goaGVhZGVyKTtcbiAgdGVtcEZDKGhlYWRlcik7XG59O1xuXG5jb25zdCBidWlsZENvbnRlbnQgPSAoY2l0eURhdGEpID0+IHtcbiAgbGV0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250YWluZXInKTtcbiAgbGV0IGlzQ29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjaXR5LXNsdWcnKTtcbiAgbGV0IGlzM2hyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RocmVlLWhyLWNvbnRhaW5lcicpO1xuICBsZXQgY2l0eVNsdWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY2l0eVNsdWcuc2V0QXR0cmlidXRlKCdpZCcsICdjaXR5LXNsdWcnKTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNpdHlTbHVnKTtcblxuICBjb25zdCBidWlsZGVyID0gKCkgPT4ge1xuICAgIGNpdHkoKTtcbiAgICBkYXRlVGltZSgpO1xuICAgIGN1cnJlbnRUZW1wKCk7XG4gICAgY3VycmVudFdlYXRoZXIoKTtcbiAgICBidWlsZDNIb3VyKCk7XG4gIH07XG5cbiAgY29uc3QgY2l0eSA9ICgpID0+IHtcbiAgICBsZXQgY2l0eUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNpdHlDb250YWluZXIuc2V0QXR0cmlidXRlKCdpZCcsICdjaXR5LWNvbnRhaW5lcicpO1xuICAgIGNpdHlTbHVnLmFwcGVuZENoaWxkKGNpdHlDb250YWluZXIpO1xuXG4gICAgbGV0IGNpdHlOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIGNpdHlOYW1lLnNldEF0dHJpYnV0ZSgnaWQnLCAnY2l0eS1uYW1lJyk7XG4gICAgY2l0eU5hbWUuaW5uZXJUZXh0ID0gY2l0eURhdGFbMV0uY2l0eS5uYW1lICsgJywgJztcblxuICAgIGxldCBjb3VudHJ5TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBjb3VudHJ5TmFtZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NvdW50cnktbmFtZScpO1xuICAgIGNvdW50cnlOYW1lLmlubmVyVGV4dCA9IGNpdHlEYXRhWzFdLmNpdHkuY291bnRyeTtcblxuICAgIGNpdHlDb250YWluZXIuYXBwZW5kQ2hpbGQoY2l0eU5hbWUpO1xuICAgIGNpdHlDb250YWluZXIuYXBwZW5kQ2hpbGQoY291bnRyeU5hbWUpO1xuICB9O1xuXG4gIGxldCBkYXRlVGltZSA9ICgpID0+IHtcbiAgICBsZXQgbW9tZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbW9tZW50LnNldEF0dHJpYnV0ZSgnaWQnLCAnbW9tZW50Jyk7XG4gICAgbGV0IGRhdGVEYXRhID0gY29udmVydFVuaXhUaW1lKGNpdHlEYXRhWzBdLmR0KTtcbiAgICBjb25zb2xlLmxvZyhjaXR5RGF0YVswXS50aW1lem9uZSk7XG5cbiAgICBsZXQgZGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBkYXRlLnNldEF0dHJpYnV0ZSgnaWQnLCAnZGF0ZScpO1xuICAgIGRhdGUuaW5uZXJUZXh0ID0gYCR7ZGF0ZURhdGEuZGF5fSwgJHtkYXRlRGF0YS5tb250aH0gJHtkYXRlRGF0YS5kYXRlfWA7XG5cbiAgICBsZXQgdGltZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICB0aW1lLnNldEF0dHJpYnV0ZSgnaWQnLCAndGltZScpO1xuXG4gICAge1xuICAgICAgbGV0IGhvdXIgPSBkYXRlRGF0YS5ob3VyICsgY2l0eURhdGFbMF0udGltZXpvbmUgLyAzNjAwO1xuICAgICAgbGV0IG1pbiA9IGRhdGVEYXRhLm1pbjtcbiAgICAgIGxldCBhbVBNID0gJyc7XG4gICAgICBjb25zb2xlLmxvZyhNYXRoLnNpZ24oaG91cikgPT09IC0xKTtcbiAgICAgIGlmIChNYXRoLnNpZ24oaG91cikgPT09IC0xKSB7XG4gICAgICAgIGhvdXIgKz0gMjQ7XG4gICAgICB9XG4gICAgICBpZiAoaG91ciA8IDEyKSB7XG4gICAgICAgIGFtUE0gPSAnYS5tLic7XG4gICAgICB9XG4gICAgICBpZiAoaG91ciA+IDEyKSB7XG4gICAgICAgIGhvdXIgLT0gMTI7XG4gICAgICAgIGFtUE0gPSAncC5tLic7XG4gICAgICB9XG4gICAgICBpZiAoaG91ciA9PT0gMTIpIHtcbiAgICAgICAgYW1QTSA9ICdwLm0uJztcbiAgICAgIH1cbiAgICAgIGlmIChkYXRlRGF0YS5taW4gPCAxMCkge1xuICAgICAgICB0aW1lLmlubmVyVGV4dCA9IGAke2hvdXJ9OjAke21pbn0gJHthbVBNfWA7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aW1lLmlubmVyVGV4dCA9IGAke2hvdXJ9OiR7bWlufSAke2FtUE19YDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtb21lbnQuYXBwZW5kQ2hpbGQoZGF0ZSk7XG4gICAgbW9tZW50LmFwcGVuZENoaWxkKHRpbWUpO1xuXG4gICAgY2l0eVNsdWcuYXBwZW5kQ2hpbGQobW9tZW50KTtcbiAgfTtcblxuICBjb25zdCBjdXJyZW50VGVtcCA9ICgpID0+IHtcbiAgICBsZXQgY3VycmVudFdlYXRoZXJDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjdXJyZW50V2VhdGhlckNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2N1cnJlbnQtd2VhdGhlci1jb250YWluZXInKTtcbiAgICBjaXR5U2x1Zy5hcHBlbmRDaGlsZChjdXJyZW50V2VhdGhlckNvbnRhaW5lcik7XG5cbiAgICBsZXQgdGVtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICB0ZW1wLnNldEF0dHJpYnV0ZSgnaWQnLCAnY3VycmVudC10ZW1wJyk7XG4gICAgdGVtcC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3RlbXAnKTtcbiAgICB0ZW1wLmlubmVyVGV4dCA9XG4gICAgICBNYXRoLnJvdW5kKHRlbXBDb252ZXJ0LmtUb0YoY2l0eURhdGFbMF0ubWFpbi50ZW1wKSkgKyAnwrAgRic7XG4gICAgY3VycmVudFdlYXRoZXJDb250YWluZXIuYXBwZW5kQ2hpbGQodGVtcCk7XG4gIH07XG5cbiAgY29uc3QgY3VycmVudFdlYXRoZXIgPSAoKSA9PiB7XG4gICAgbGV0IGNvbmRpdGlvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbmRpdGlvbkNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NvbmRpdGlvbi1jb250YWluZXInKTtcbiAgICBjaXR5U2x1Zy5hcHBlbmRDaGlsZChjb25kaXRpb25Db250YWluZXIpO1xuXG4gICAgbGV0IHdlYXRoZXJDb25kaXRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgd2VhdGhlckNvbmRpdGlvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NvbmRpdGlvbicpO1xuICAgIGNvbmRpdGlvbkNvbnRhaW5lci5hcHBlbmRDaGlsZCh3ZWF0aGVyQ29uZGl0aW9uKTtcbiAgICB3ZWF0aGVyQ29uZGl0aW9uLmlubmVyVGV4dCA9IGNpdHlEYXRhWzBdLndlYXRoZXJbMF0ubWFpbjtcblxuICAgIGxldCB3ZWF0aGVyRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgd2VhdGhlckRlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZSgnaWQnLCAnd2VhdGhlci1kZXNjcmlwdGlvbicpO1xuICAgIGNvbmRpdGlvbkNvbnRhaW5lci5hcHBlbmRDaGlsZCh3ZWF0aGVyRGVzY3JpcHRpb24pO1xuICAgIHdlYXRoZXJEZXNjcmlwdGlvbi5pbm5lclRleHQgPSBjaXR5RGF0YVswXS53ZWF0aGVyWzBdLmRlc2NyaXB0aW9uO1xuXG4gICAgbGV0IHdlYXRoZXJJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgd2VhdGhlckljb24uc2V0QXR0cmlidXRlKFxuICAgICAgJ3NyYycsXG4gICAgICBgaHR0cDovL29wZW53ZWF0aGVybWFwLm9yZy9pbWcvd24vJHtjaXR5RGF0YVswXS53ZWF0aGVyWzBdLmljb259QDJ4LnBuZ2BcbiAgICApO1xuICAgIHdlYXRoZXJJY29uLnNldEF0dHJpYnV0ZSgnaWQnLCAnd2VhdGhlci1pY29uJyk7XG4gICAgY29uZGl0aW9uQ29udGFpbmVyLmFwcGVuZENoaWxkKHdlYXRoZXJJY29uKTtcbiAgfTtcblxuICBjb25zdCBidWlsZDNIb3VyID0gKCkgPT4ge1xuICAgIGxldCB0aHJlZUhvdXJDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0aHJlZUhvdXJDb250YWluZXIuc2V0QXR0cmlidXRlKCdpZCcsICd0aHJlZS1oci1jb250YWluZXInKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQodGhyZWVIb3VyQ29udGFpbmVyKTtcblxuICAgIGNvbnN0IHRocmVlSG91ckhlbHBlciA9IChzZWdtZW50KSA9PiB7XG4gICAgICBsZXQgdGhyZWVIckNodW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICB0aHJlZUhyQ2h1bmsuc2V0QXR0cmlidXRlKCdjbGFzcycsICd0aHJlZS1oci1jaHVuaycpO1xuICAgICAgdGhyZWVIb3VyQ29udGFpbmVyLmFwcGVuZENoaWxkKHRocmVlSHJDaHVuayk7XG5cbiAgICAgIGxldCBkYXRlRGF0YSA9IGNvbnZlcnRVbml4VGltZShzZWdtZW50LmR0KTtcbiAgICAgIGxldCB0aW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAge1xuICAgICAgICBsZXQgaG91ciA9IGRhdGVEYXRhLmhvdXIgKyBjaXR5RGF0YVswXS50aW1lem9uZSAvIDM2MDA7XG4gICAgICAgIGxldCBtaW4gPSBkYXRlRGF0YS5taW47XG4gICAgICAgIGxldCBhbVBNID0gJyc7XG4gICAgICAgIGNvbnNvbGUubG9nKGhvdXIpO1xuICAgICAgICBpZiAoTWF0aC5zaWduKGhvdXIpID09PSAtMSkge1xuICAgICAgICAgIGhvdXIgKz0gMjQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGhvdXIgPCAxMikge1xuICAgICAgICAgIGFtUE0gPSAnYS5tLic7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGhvdXIgPiAxMikge1xuICAgICAgICAgIGhvdXIgLT0gMTI7XG4gICAgICAgICAgYW1QTSA9ICdwLm0uJztcbiAgICAgICAgfVxuICAgICAgICBpZiAoaG91ciA9PT0gMTIpIHtcbiAgICAgICAgICBhbVBNID0gJ3AubS4nO1xuICAgICAgICB9XG4gICAgICAgIGlmIChkYXRlRGF0YS5taW4gPCAxMCkge1xuICAgICAgICAgIHRpbWUuaW5uZXJUZXh0ID0gYCR7aG91cn06MCR7bWlufSAke2FtUE19YDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aW1lLmlubmVyVGV4dCA9IGAke2hvdXJ9OiR7bWlufSAke2FtUE19YDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsZXQgdGhyZWVIclRlbXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICB0aHJlZUhyVGVtcC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3RlbXAnKTtcbiAgICAgIHRocmVlSHJUZW1wLmlubmVyVGV4dCA9XG4gICAgICAgIE1hdGgucm91bmQodGVtcENvbnZlcnQua1RvRihzZWdtZW50Lm1haW4udGVtcCkpICsgJ8KwIEYnO1xuXG4gICAgICBsZXQgdGhyZWVIckNvbmRpdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgIHRocmVlSHJDb25kaXRpb24uaW5uZXJUZXh0ID0gc2VnbWVudC53ZWF0aGVyWzBdLm1haW47XG5cbiAgICAgIGxldCB0aHJlZUhyUmFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgIHRocmVlSHJSYWluLmlubmVyVGV4dCA9IE1hdGgucm91bmQoc2VnbWVudC5wb3AgKiAxMDApICsgJyUgUG9QJztcblxuICAgICAgW3RpbWUsIHRocmVlSHJUZW1wLCB0aHJlZUhyQ29uZGl0aW9uLCB0aHJlZUhyUmFpbl0uZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgICB0aHJlZUhyQ2h1bmsuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgY2l0eURhdGFbMV0ubGlzdC5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICB0aHJlZUhvdXJIZWxwZXIoZWxlbWVudCk7XG4gICAgfSk7XG4gIH07XG5cbiAgaWYgKGlzQ29udGVudCAmJiBpczNocikge1xuICAgIGNsZWFyRGl2KGlzQ29udGVudCk7XG4gICAgY2xlYXJEaXYoaXMzaHIpO1xuICAgIGJ1aWxkZXIoKTtcbiAgfSBlbHNlIHtcbiAgICBidWlsZGVyKCk7XG4gIH1cbn07XG5cbmV4cG9ydCB7IGJ1aWxkQ29udGFpbmVyLCBidWlsZEhlYWRlciwgYnVpbGRDb250ZW50IH07XG4iLCJjb25zdCBjb252ZXJ0VW5peFRpbWUgPSAoZHQpID0+IHtcbiAgY29uc3QgbW9tZW50ID0gbmV3IERhdGUoZHQgKiAxMDAwKTtcbiAgY29uc3QgbW9udGhzID0gW1xuICAgICdKYW4nLFxuICAgICdGZWInLFxuICAgICdNYXInLFxuICAgICdBcHInLFxuICAgICdNYXknLFxuICAgICdKdW4nLFxuICAgICdKdWwnLFxuICAgICdBdWcnLFxuICAgICdTZXAnLFxuICAgICdPY3QnLFxuICAgICdOb3YnLFxuICAgICdEZWMnLFxuICBdO1xuICBjb25zdCBkYXlzID0gW1xuICAgICdTdW5kYXknLFxuICAgICdNb25kYXknLFxuICAgICdUdWVzZGF5JyxcbiAgICAnV2VkbmVzZGF5JyxcbiAgICAnVGh1cnNkYXknLFxuICAgICdGcmlkYXknLFxuICAgICdTYXR1cmRheScsXG4gIF07XG4gIGNvbnN0IHllYXIgPSBtb21lbnQuZ2V0VVRDRnVsbFllYXIoKTtcbiAgY29uc3QgbW9udGggPSBtb250aHNbbW9tZW50LmdldFVUQ01vbnRoKCldO1xuICBjb25zdCBkYXkgPSBkYXlzW21vbWVudC5nZXRVVENEYXkoKV07XG4gIGNvbnN0IGRhdGUgPSBtb21lbnQuZ2V0VVRDRGF0ZSgpO1xuICBjb25zdCBob3VyID0gbW9tZW50LmdldFVUQ0hvdXJzKCk7XG4gIGNvbnN0IG1pbiA9IG1vbWVudC5nZXRVVENNaW51dGVzKCk7XG4gIGNvbnN0IHNlYyA9IG1vbWVudC5nZXRVVENTZWNvbmRzKCk7XG4gIGNvbnN0IGRhdGVPYmogPSB7IHllYXIsIG1vbnRoLCBkYXRlLCBkYXksIGhvdXIsIG1pbiwgc2VjIH07XG4gIC8vICAgY29uc29sZS5sb2coXG4gIC8vICAgICBtb21lbnQudG9Mb2NhbGVUaW1lU3RyaW5nKCdlbi1VUycsIHsgaG91cjogJzItZGlnaXQnLCBtaW51dGU6ICcyLWRpZ2l0JyB9KVxuICAvLyAgICk7XG4gIHJldHVybiBkYXRlT2JqO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY29udmVydFVuaXhUaW1lO1xuIiwiaW1wb3J0IGZldGNoV2VhdGhlciBmcm9tICcuL2ZldGNoX3dlYXRoZXInO1xuaW1wb3J0IHsgYnVpbGRDb250ZW50IH0gZnJvbSAnLi9jb21wb25lbnRzJztcbmltcG9ydCB0ZW1wVG9nZ2xlIGZyb20gJy4vdGVtcHRvZ2dsZSc7XG5cbmNvbnN0IGNpdHlTdWJtaXQgPSAoKSA9PiB7XG4gIGxldCBzdWJtaXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2l0eS1zZWFyY2gtc3VibWl0Jyk7XG5cbiAgY29uc3QgY2l0eUhlbHBlciA9IGFzeW5jICgpID0+IHtcbiAgICBsZXQgY2l0eVNlYXJjaCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjaXR5LXNlYXJjaCcpO1xuICAgIGxldCBjaXR5V2VhdGhlciA9IGF3YWl0IGZldGNoV2VhdGhlcihjaXR5U2VhcmNoLnZhbHVlKTtcbiAgICBpZiAoY2l0eVNlYXJjaC52YWx1ZSA9PT0gJycpIHtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGNpdHlXZWF0aGVyKSB7XG4gICAgICAgIGlmIChjaXR5V2VhdGhlclswXS5jb2QgIT0gJzIwMCcpIHtcbiAgICAgICAgICB0aHJvdyBjb25zb2xlLmVycm9yKGAke2NpdHlXZWF0aGVyWzBdLm1lc3NhZ2V9IEhleSB0aGVyZWApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGJ1aWxkQ29udGVudChjaXR5V2VhdGhlcik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgc3VibWl0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNpdHlIZWxwZXIoKTtcbiAgfSk7XG5cbiAgbGV0IGNpdHlGaWVsZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjaXR5LXNlYXJjaCcpO1xuXG4gIGNpdHlGaWVsZC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGUpID0+IHtcbiAgICBpZiAoZS5jb2RlID09PSAnRW50ZXInKSB7XG4gICAgICBjaXR5SGVscGVyKCk7XG4gICAgfVxuICB9KTtcbn07XG5cbmNvbnN0IHRlbXBUb2dnbGVCdG4gPSAoKSA9PiB7XG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBsZXQgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRhaW5lcicpO1xuICAgIGlmIChlLnRhcmdldC5wYXJlbnROb2RlLmlkID09PSAndG9nZ2xlJykge1xuICAgICAgaWYgKGNvbnRhaW5lci5jaGlsZE5vZGVzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgbGV0IGNlbHNpdXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2Vsc2l1cycpO1xuICAgICAgICBjZWxzaXVzLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xuICAgICAgICBsZXQgZmFocmVuaGVpdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmYWhyZW5oZWl0Jyk7XG4gICAgICAgIGZhaHJlbmhlaXQuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XG4gICAgICAgIHRlbXBUb2dnbGUoKTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xufTtcblxuZXhwb3J0IHsgY2l0eVN1Ym1pdCwgdGVtcFRvZ2dsZUJ0biB9O1xuIiwiY29uc3QgZmV0Y2hXZWF0aGVyID0gYXN5bmMgKGNpdHkpID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCBhcGlLZXkgPSAnM2M2OGI0Mzc4OWJmNTZhOWRjMmVhOTFjYzRhNjMwOWUnO1xuICAgIGNvbnN0IHdlYXRoZXI1ZDNociA9IGF3YWl0IGZldGNoKFxuICAgICAgYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS9mb3JlY2FzdD9xPSR7Y2l0eX0mYXBwaWQ9JHthcGlLZXl9JmNudD0xNmAsXG4gICAgICB7IGNvcnM6IHRydWUgfVxuICAgICk7XG4gICAgY29uc3QgY3VycmVudFdlYXRoZXIgPSBhd2FpdCBmZXRjaChcbiAgICAgIGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9xPSR7Y2l0eX0mYXBwaWQ9JHthcGlLZXl9YFxuICAgICk7XG4gICAgY29uc3Qgd2VhdGhlcjVkID0gYXdhaXQgd2VhdGhlcjVkM2hyLmpzb24oKTtcbiAgICBjb25zdCBjV2VhdGhlciA9IGF3YWl0IGN1cnJlbnRXZWF0aGVyLmpzb24oKTtcblxuICAgIGlmICh3ZWF0aGVyNWQubWVzc2FnZSkge1xuICAgICAgdGhyb3cgYCR7d2VhdGhlcjVkLm1lc3NhZ2V9YDtcbiAgICB9XG4gICAgaWYgKGNXZWF0aGVyLm1lc3NhZ2UpIHtcbiAgICAgIHRocm93IGAke2NXZWF0aGVyLm1lc3NhZ2V9YDtcbiAgICB9XG5cbiAgICByZXR1cm4gW2NXZWF0aGVyLCB3ZWF0aGVyNWRdO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGFsZXJ0KGVycm9yKTtcbiAgICByZXR1cm47XG4gIH1cbn07XG5leHBvcnQgZGVmYXVsdCBmZXRjaFdlYXRoZXI7XG4iLCJjb25zdCB0ZW1wQ29udmVydCA9ICgoKSA9PiB7XG4gIC8vIEtlbHZpbiB0byBGYWhyZW5oZWl0XG4gIGNvbnN0IGtUb0YgPSAodGVtcCkgPT4ge1xuICAgIHJldHVybiAoKHRlbXAgLSAyNzMuMTUpICogOSkgLyA1ICsgMzI7XG4gIH07XG4gIC8vIEtlbHZpbiB0byBDZWxzaXVzXG4gIGNvbnN0IGtUb0MgPSAodGVtcCkgPT4ge1xuICAgIHJldHVybiB0ZW1wIC0gMjczLjE1O1xuICB9O1xuICAvLyBGYWhyZW5oZWl0IHRvIENlbHNpdXNcbiAgY29uc3QgZlRvQyA9ICh0ZW1wKSA9PiB7XG4gICAgcmV0dXJuICgodGVtcCAtIDMyKSAqIDUpIC8gOTtcbiAgfTtcbiAgLy8gQ2Vsc2l1cyB0byBGYWhyZW5oZWl0XG4gIGNvbnN0IGNUb0YgPSAodGVtcCkgPT4ge1xuICAgIHJldHVybiAodGVtcCAqIDkpIC8gNSArIDMyO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAga1RvRjoga1RvRixcbiAgICBrVG9DOiBrVG9DLFxuICAgIGZUb0M6IGZUb0MsXG4gICAgY1RvRjogY1RvRixcbiAgfTtcbn0pKCk7XG5cbmV4cG9ydCB7IHRlbXBDb252ZXJ0IH07XG4iLCJpbXBvcnQgeyB0ZW1wQ29udmVydCB9IGZyb20gJy4vdGVtcENvbnZlcnQnO1xuXG5jb25zdCB0ZW1wVG9nZ2xlID0gKCkgPT4ge1xuICBsZXQgdGVtcHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd0ZW1wJyk7XG4gIGxldCB1bml0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnYWN0aXZlJyk7XG5cbiAgaWYgKHRlbXBzWzBdKSB7XG4gICAgZm9yIChsZXQgaXRlbSBvZiB0ZW1wcykge1xuICAgICAgaWYgKHVuaXRbMF0uaWQgPT09ICdmYWhyZW5oZWl0Jykge1xuICAgICAgICBpdGVtLmlubmVyVGV4dCA9IGAke01hdGgucm91bmQoXG4gICAgICAgICAgdGVtcENvbnZlcnQuY1RvRihwYXJzZUludChpdGVtLmlubmVyVGV4dC5zdWJzdHJpbmcoMCwgMikpKVxuICAgICAgICApfcKwIEZgO1xuICAgICAgfVxuICAgICAgaWYgKHVuaXRbMF0uaWQgPT09ICdjZWxzaXVzJykge1xuICAgICAgICBpdGVtLmlubmVyVGV4dCA9IGAke01hdGgucm91bmQoXG4gICAgICAgICAgdGVtcENvbnZlcnQuZlRvQyhwYXJzZUludChpdGVtLmlubmVyVGV4dC5zdWJzdHJpbmcoMCwgMikpKVxuICAgICAgICApfcKwIENgO1xuICAgICAgfVxuICAgIH1cbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgdGVtcFRvZ2dsZTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZXMuY3NzJztcbmltcG9ydCB7IGJ1aWxkQ29udGFpbmVyLCBidWlsZEhlYWRlciwgYnVpbGRDb250ZW50IH0gZnJvbSAnLi9jb21wb25lbnRzJztcbmltcG9ydCB7IGNpdHlTdWJtaXQsIHRlbXBUb2dnbGVCdG4gfSBmcm9tICcuL2V2ZW50cyc7XG5pbXBvcnQgdGVtcFRvZ2dsZSBmcm9tICcuL3RlbXB0b2dnbGUnO1xuXG5idWlsZENvbnRhaW5lcigpO1xuYnVpbGRIZWFkZXIoKTtcbmNpdHlTdWJtaXQoKTtcbnRlbXBUb2dnbGVCdG4oKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==