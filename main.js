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
        hour += 20;
      }
      if (hour < 12) {
        amPM = 'a.m.';
      }
      if (hour > 12) {
        hour -= 12;
        amPM = 'p.m.';
      } else {
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
      threeHrRain.innerText = segment.pop + '% PoP';

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
    console.log(cityWeather);
    (0,_components__WEBPACK_IMPORTED_MODULE_1__.buildContent)(cityWeather);
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
    if (e.target.parentNode.id === 'toggle') {
      let celsius = document.getElementById('celsius');
      celsius.classList.toggle('active');
      let fahrenheit = document.getElementById('fahrenheit');
      fahrenheit.classList.toggle('active');
      (0,_temptoggle__WEBPACK_IMPORTED_MODULE_2__["default"])();
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
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&cnt=8`,
      { cors: true }
    );
    const currentWeather = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
    );
    const weather5d = await weather5d3hr.json();
    const cWeather = await currentWeather.json();
    return [cWeather, weather5d];
  } catch {
    console.log(err);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksUUFBUSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxXQUFX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Li9zcmMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9zdHlsZXMuY3NzPzQ0YjIiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9jbGVhckRpdi5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9jb21wb25lbnRzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2NvbnZlcnRfdW5peF90aW1lLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2V2ZW50cy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9mZXRjaF93ZWF0aGVyLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3RlbXBDb252ZXJ0LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3RlbXB0b2dnbGUuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Mb2JzdGVyJmRpc3BsYXk9c3dhcCk7XCJdKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90bzp3Z2h0QDQwMDs1MDA7NzAwOzkwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJodG1sIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXG4gIH1cXG4gIFxcbiAgKiwgKjpiZWZvcmUsICo6YWZ0ZXIge1xcbiAgICBib3gtc2l6aW5nOiBpbmhlcml0O1xcbiAgfVxcbiAgXFxuICBib2R5LCBoMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBwLCBvbCwgdWwge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICB9XFxuICBcXG4gIG9sLCB1bCB7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICB9XFxuXFxuXFxuICAjaGVhZGVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXG4gICAgZ2FwOiA0OHB4O1xcbiAgICBwYWRkaW5nOiAxNnB4O1xcbiAgICBwYWRkaW5nLWxlZnQ6IDk2cHg7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDk2cHg7XFxuICB9XFxuXFxuICAjbG9nbyB7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1mYW1pbHk6ICdMb2JzdGVyJztcXG4gICAgZm9udC1zaXplOiAzLjVyZW07XFxuICB9XFxuXFxuICAjY2l0eS1zZWFyY2gtZm9ybSB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgaGVpZ2h0OiAyNHB4O1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIGdhcDogNHB4O1xcbiAgICB0b3A6IDdweDtcXG4gIH1cXG5cXG4gICNjaXR5LXNsdWcge1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1ZmJjZDQ7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcXG4gICAgcGFkZGluZzogOHB4O1xcbiAgICBwYWRkaW5nLWxlZnQ6IDQ4cHg7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDQ4cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gICAgbWFyZ2luOiAxNnB4O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAyZnIgMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gYXV0bztcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICAgIGNvbHVtbi1nYXA6IDE2cHg7XFxuICAgIHdpZHRoOiAxMDAlIC0gMzJweDtcXG4gICAgYm94LXNoYWRvdzogMCAzcHggMTBweCByZ2IoMCAwIDAgLyAwLjIpOztcXG4gIH1cXG5cXG4gICNtb21lbnQge1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAyO1xcbiAgICBncmlkLXJvdy1zdGFydDogMjtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIGFsaWduLXNlbGY6IHN0YXJ0O1xcbiAgICBnYXA6IDE2cHg7XFxuICB9XFxuXFxuICAjY2l0eS1jb250YWluZXIge1xcbiAgICBmb250LXNpemU6IDNyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA1MjU7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICBhbGlnbi1zZWxmOiBlbmQ7XFxuICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAyO1xcbiAgICBncmlkLXJvdy1zdGFydDogMTtcXG4gIH1cXG5cXG4gICNjdXJyZW50LXdlYXRoZXItY29udGFpbmVyIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBmb250LXNpemU6IDVyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xcbiAgICBncmlkLXJvdzogMSAvIDM7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICB9XFxuXFxuICAjY29uZGl0aW9uIHtcXG4gICAgZm9udC1zaXplOiAzcmVtO1xcbiAgICBmb250LXdlaWdodDogNTI1O1xcbiAgICBhbGlnbi1zZWxmOiBlbmQ7XFxuICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAyO1xcbiAgICBncmlkLXJvdy1zdGFydDogMTtcXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XFxuICAgIGp1c3RpZnktc2VsZjogc3RhcnQ7XFxuICB9XFxuXFxuICAjd2VhdGhlci1kZXNjcmlwdGlvbiB7XFxuICAgIGp1c3RpZnktc2VsZjogc3RhcnQ7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcXG4gICAgZ3JpZC1yb3c6IDIgLyAzO1xcbiAgICBncmlkLWNvbHVtbjogMiAvIDM7XFxuICB9XFxuXFxuICAjd2VhdGhlci1pY29uIHtcXG4gICAgZ3JpZC1yb3c6IDEgLyAzO1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDI7XFxuICAgIGp1c3RpZnktc2VsZjogZW5kO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIHdpZHRoOiAxMDBweDtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgfVxcblxcbiAgI2NvbmRpdGlvbi1jb250YWluZXIge1xcbiAgICBncmlkLXJvdzogMSAvIDM7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byBtaW4tY29udGVudDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIGF1dG87XFxuICB9XFxuXFxuICAjdGhyZWUtaHItY29udGFpbmVyIHtcXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMTZweDtcXG4gIH1cXG5cXG4gIC50aHJlZS1oci1jaHVuayB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIDFmcik7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGdhcDogNHB4O1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcXG4gICAgcGFkZGluZzogOHB4O1xcbiAgfVxcblxcbiN0b2dnbGUge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgdG9wOiA2cHg7XFxufVxcblxcbiAgI2NlbHNpdXMsICNmYWhyZW5oZWl0IHtcXG4gICAgZm9udC13ZWlnaHQ6IDU1MDtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBwYWRkaW5nOiA2cHg7XFxuICB9XFxuXFxuICAjY2Vsc2l1cyB7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDhweCAwcHggMHB4IDhweDtcXG4gIH1cXG5cXG4gICNmYWhyZW5oZWl0IHtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMHB4IDhweCA4cHggMHB4O1xcbiAgfVxcblxcbiAgI3RvZ2dsZSA+IC5hY3RpdmUge1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1ZmJjZDQ7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgfVxcblxcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTAwcHgpIHtcXG4gICAgI2hlYWRlciB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgIGdhcDogMTZweDtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIH1cXG5cXG4gICAgI2NpdHktc2VhcmNoLWZvcm0ge1xcbiAgICAgICAgdG9wOiAwcHg7XFxuICAgIH1cXG5cXG4gICAgI2NpdHktc2x1ZyB7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byBhdXRvIGF1dG8gYXV0byBhdXRvO1xcbiAgICAgICAgcm93LWdhcDogMTZweDtcXG4gICAgICB9XFxuXFxuICAgICAgI2N1cnJlbnQtd2VhdGhlci1jb250YWluZXIge1xcbiAgICAgICAgZm9udC1zaXplOiAzcmVtO1xcbiAgICAgICAgcG9zaXRpb246IGluaGVyaXQ7XFxuICAgICAgICBncmlkLXJvdy1zdGFydDogMTtcXG4gICAgICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xcbiAgICAgICAgZ3JpZC1yb3c6IDEgLyAyO1xcbiAgICAgIH1cXG5cXG4gICAgICAjY2l0eS1jb250YWluZXIge1xcbiAgICAgICAgcG9zaXRpb246IGluaGVyaXQ7XFxuICAgICAgICBmb250LXNpemU6IDJyZW07XFxuICAgICAgICBncmlkLXJvdy1zdGFydDogMjtcXG4gICAgICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xcbiAgICAgIH1cXG5cXG4gICAgICAjbW9tZW50IHtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICBnYXA6IDBweDtcXG4gICAgICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcXG4gICAgICAgIGdyaWQtcm93LXN0YXJ0OiAzO1xcbiAgICAgICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgIH1cXG5cXG4gICAgICAjdGltZSwgI2RhdGUge1xcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAgIH1cXG5cXG4gICAgICAjY29uZGl0aW9uIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MjU7XFxuICAgICAgICBhbGlnbi1zZWxmOiBlbmQ7XFxuICAgICAgICBncmlkLWNvbHVtbi1zdGFydDogMTtcXG4gICAgICAgIGdyaWQtcm93LXN0YXJ0OiAxO1xcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XFxuICAgICAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgICB9XFxuICAgIFxcbiAgICAgICN3ZWF0aGVyLWRlc2NyaXB0aW9uIHtcXG4gICAgICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICAgICAgZm9udC1zaXplOiAxLjI1cmVtO1xcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XFxuICAgICAgICBncmlkLXJvdzogMiAvIDM7XFxuICAgICAgICBncmlkLWNvbHVtbjogMSAvIDI7XFxuICAgICAgfVxcblxcbiAgICAgICN3ZWF0aGVyLWljb24ge1xcbiAgICAgICAgZ3JpZC1yb3c6IDMgLyA0O1xcbiAgICAgICAgZ3JpZC1jb2x1bW46IDEgLyAxO1xcbiAgICAgICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgICAgICB3aWR0aDogMTAwcHg7XFxuICAgICAgICBoZWlnaHQ6IGF1dG87XFxuICAgICAgfVxcblxcbiAgICAgICNjb25kaXRpb24tY29udGFpbmVyIHtcXG4gICAgICAgIGdyaWQtcm93OiA0IC8gNTtcXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byBhdXRvIGF1dG87XFxuICAgICAgfVxcblxcbiAgICAgICN0aHJlZS1oci1jb250YWluZXIge1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICB9XFxuXFxuICAgICAgLnRocmVlLWhyLWNodW5rIHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICBnYXA6IDRweDtcXG4gICAgICAgIGNvbG9yOiBibGFjaztcXG4gICAgICAgIHBhZGRpbmc6IDhweDtcXG4gICAgICB9XFxuICB9XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBR0E7SUFDSSxzQkFBc0I7SUFDdEIsZUFBZTtJQUNmLHVCQUF1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QUFpQjtRQUNqQixlQUFlO1FBQ2YsaUJBQWlCO1FBQ2pCLG9CQUFvQjtNQUN0Qjs7TUFFQTtRQUNFLHNCQUFzQjtRQUN0QixRQUFRO1FBQ1Isa0JBQWtCO1FBQ2xCLGlCQUFpQjtRQUNqQixvQkFBb0I7UUFDcEIsbUJBQW1CO01BQ3JCOztNQUVBO1FBQ0Usa0JBQWtCO01BQ3BCOztNQUVBO1FBQ0UsZUFBZTtRQUNmLGdCQUFnQjtRQUNoQixlQUFlO1FBQ2Ysb0JBQW9CO1FBQ3BCLGlCQUFpQjtRQUNqQiwwQkFBMEI7UUFDMUIsb0JBQW9CO01BQ3RCOztNQUVBO1FBQ0Usb0JBQW9CO1FBQ3BCLGtCQUFrQjtRQUNsQiwwQkFBMEI7UUFDMUIsZUFBZTtRQUNmLGtCQUFrQjtNQUNwQjs7TUFFQTtRQUNFLGVBQWU7UUFDZixrQkFBa0I7UUFDbEIsb0JBQW9CO1FBQ3BCLGtCQUFrQjtRQUNsQixZQUFZO1FBQ1osWUFBWTtNQUNkOztNQUVBO1FBQ0UsZUFBZTtRQUNmLGFBQWE7UUFDYiwwQkFBMEI7UUFDMUIsa0NBQWtDO01BQ3BDOztNQUVBO1FBQ0Usc0JBQXNCO01BQ3hCOztNQUVBO1FBQ0UsYUFBYTtRQUNiLHNCQUFzQjtRQUN0Qiw2QkFBNkI7UUFDN0Isa0JBQWtCO1FBQ2xCLFFBQVE7UUFDUixZQUFZO1FBQ1osWUFBWTtNQUNkO0VBQ0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TG9ic3RlciZkaXNwbGF5PXN3YXAnKTtcXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG86d2dodEA0MDA7NTAwOzcwMDs5MDAmZGlzcGxheT1zd2FwJyk7XFxuXFxuaHRtbCB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxuICB9XFxuICBcXG4gICosICo6YmVmb3JlLCAqOmFmdGVyIHtcXG4gICAgYm94LXNpemluZzogaW5oZXJpdDtcXG4gIH1cXG4gIFxcbiAgYm9keSwgaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCwgb2wsIHVsIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgfVxcbiAgXFxuICBvbCwgdWwge1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbiAgfVxcblxcblxcbiAgI2hlYWRlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogc3RhcnQ7XFxuICAgIGdhcDogNDhweDtcXG4gICAgcGFkZGluZzogMTZweDtcXG4gICAgcGFkZGluZy1sZWZ0OiA5NnB4O1xcbiAgICBwYWRkaW5nLXJpZ2h0OiA5NnB4O1xcbiAgfVxcblxcbiAgI2xvZ28ge1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtZmFtaWx5OiAnTG9ic3Rlcic7XFxuICAgIGZvbnQtc2l6ZTogMy41cmVtO1xcbiAgfVxcblxcbiAgI2NpdHktc2VhcmNoLWZvcm0ge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGhlaWdodDogMjRweDtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBnYXA6IDRweDtcXG4gICAgdG9wOiA3cHg7XFxuICB9XFxuXFxuICAjY2l0eS1zbHVnIHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWZiY2Q0O1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90byc7XFxuICAgIHBhZGRpbmc6IDhweDtcXG4gICAgcGFkZGluZy1sZWZ0OiA0OHB4O1xcbiAgICBwYWRkaW5nLXJpZ2h0OiA0OHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICAgIG1hcmdpbjogMTZweDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMmZyIDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIGF1dG87XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgICBjb2x1bW4tZ2FwOiAxNnB4O1xcbiAgICB3aWR0aDogMTAwJSAtIDMycHg7XFxuICAgIGJveC1zaGFkb3c6IDAgM3B4IDEwcHggcmdiKDAgMCAwIC8gMC4yKTs7XFxuICB9XFxuXFxuICAjbW9tZW50IHtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgICBncmlkLWNvbHVtbi1zdGFydDogMjtcXG4gICAgZ3JpZC1yb3ctc3RhcnQ6IDI7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICBhbGlnbi1zZWxmOiBzdGFydDtcXG4gICAgZ2FwOiAxNnB4O1xcbiAgfVxcblxcbiAgI2NpdHktY29udGFpbmVyIHtcXG4gICAgZm9udC1zaXplOiAzcmVtO1xcbiAgICBmb250LXdlaWdodDogNTI1O1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgYWxpZ24tc2VsZjogZW5kO1xcbiAgICBncmlkLWNvbHVtbi1zdGFydDogMjtcXG4gICAgZ3JpZC1yb3ctc3RhcnQ6IDE7XFxuICB9XFxuXFxuICAjY3VycmVudC13ZWF0aGVyLWNvbnRhaW5lciB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZm9udC1zaXplOiA1cmVtO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBncmlkLWNvbHVtbi1zdGFydDogMTtcXG4gICAgZ3JpZC1yb3c6IDEgLyAzO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgfVxcblxcbiAgI2NvbmRpdGlvbiB7XFxuICAgIGZvbnQtc2l6ZTogM3JlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDUyNTtcXG4gICAgYWxpZ24tc2VsZjogZW5kO1xcbiAgICBncmlkLWNvbHVtbi1zdGFydDogMjtcXG4gICAgZ3JpZC1yb3ctc3RhcnQ6IDE7XFxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xcbiAgICBqdXN0aWZ5LXNlbGY6IHN0YXJ0O1xcbiAgfVxcblxcbiAgI3dlYXRoZXItZGVzY3JpcHRpb24ge1xcbiAgICBqdXN0aWZ5LXNlbGY6IHN0YXJ0O1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XFxuICAgIGdyaWQtcm93OiAyIC8gMztcXG4gICAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbiAgfVxcblxcbiAgI3dlYXRoZXItaWNvbiB7XFxuICAgIGdyaWQtcm93OiAxIC8gMztcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGVuZDtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICB3aWR0aDogMTAwcHg7XFxuICAgIGhlaWdodDogYXV0bztcXG4gIH1cXG5cXG4gICNjb25kaXRpb24tY29udGFpbmVyIHtcXG4gICAgZ3JpZC1yb3c6IDEgLyAzO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gbWluLWNvbnRlbnQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byBhdXRvO1xcbiAgfVxcblxcbiAgI3RocmVlLWhyLWNvbnRhaW5lciB7XFxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDE2cHg7XFxuICB9XFxuXFxuICAudGhyZWUtaHItY2h1bmsge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCAxZnIpO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBnYXA6IDRweDtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XFxuICAgIHBhZGRpbmc6IDhweDtcXG4gIH1cXG5cXG4jdG9nZ2xlIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIHRvcDogNnB4O1xcbn1cXG5cXG4gICNjZWxzaXVzLCAjZmFocmVuaGVpdCB7XFxuICAgIGZvbnQtd2VpZ2h0OiA1NTA7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgcGFkZGluZzogNnB4O1xcbiAgfVxcblxcbiAgI2NlbHNpdXMge1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXItcmFkaXVzOiA4cHggMHB4IDBweCA4cHg7XFxuICB9XFxuXFxuICAjZmFocmVuaGVpdCB7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDBweCA4cHggOHB4IDBweDtcXG4gIH1cXG5cXG4gICN0b2dnbGUgPiAuYWN0aXZlIHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWZiY2Q0O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIH1cXG5cXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7XFxuICAgICNoZWFkZXIge1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICBnYXA6IDE2cHg7XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICB9XFxuXFxuICAgICNjaXR5LXNlYXJjaC1mb3JtIHtcXG4gICAgICAgIHRvcDogMHB4O1xcbiAgICB9XFxuXFxuICAgICNjaXR5LXNsdWcge1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gYXV0byBhdXRvIGF1dG8gYXV0bztcXG4gICAgICAgIHJvdy1nYXA6IDE2cHg7XFxuICAgICAgfVxcblxcbiAgICAgICNjdXJyZW50LXdlYXRoZXItY29udGFpbmVyIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogM3JlbTtcXG4gICAgICAgIHBvc2l0aW9uOiBpbmhlcml0O1xcbiAgICAgICAgZ3JpZC1yb3ctc3RhcnQ6IDE7XFxuICAgICAgICBncmlkLWNvbHVtbi1zdGFydDogMTtcXG4gICAgICAgIGdyaWQtcm93OiAxIC8gMjtcXG4gICAgICB9XFxuXFxuICAgICAgI2NpdHktY29udGFpbmVyIHtcXG4gICAgICAgIHBvc2l0aW9uOiBpbmhlcml0O1xcbiAgICAgICAgZm9udC1zaXplOiAycmVtO1xcbiAgICAgICAgZ3JpZC1yb3ctc3RhcnQ6IDI7XFxuICAgICAgICBncmlkLWNvbHVtbi1zdGFydDogMTtcXG4gICAgICB9XFxuXFxuICAgICAgI21vbWVudCB7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgZ2FwOiAwcHg7XFxuICAgICAgICBmb250LXNpemU6IDEuMjVyZW07XFxuICAgICAgICBncmlkLXJvdy1zdGFydDogMztcXG4gICAgICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICB9XFxuXFxuICAgICAgI3RpbWUsICNkYXRlIHtcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICB9XFxuXFxuICAgICAgI2NvbmRpdGlvbiB7XFxuICAgICAgICBmb250LXNpemU6IDJyZW07XFxuICAgICAgICBmb250LXdlaWdodDogNTI1O1xcbiAgICAgICAgYWxpZ24tc2VsZjogZW5kO1xcbiAgICAgICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XFxuICAgICAgICBncmlkLXJvdy1zdGFydDogMTtcXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xcbiAgICAgICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgICAgfVxcbiAgICBcXG4gICAgICAjd2VhdGhlci1kZXNjcmlwdGlvbiB7XFxuICAgICAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xcbiAgICAgICAgZ3JpZC1yb3c6IDIgLyAzO1xcbiAgICAgICAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcbiAgICAgIH1cXG5cXG4gICAgICAjd2VhdGhlci1pY29uIHtcXG4gICAgICAgIGdyaWQtcm93OiAzIC8gNDtcXG4gICAgICAgIGdyaWQtY29sdW1uOiAxIC8gMTtcXG4gICAgICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICAgICAgd2lkdGg6IDEwMHB4O1xcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xcbiAgICAgIH1cXG5cXG4gICAgICAjY29uZGl0aW9uLWNvbnRhaW5lciB7XFxuICAgICAgICBncmlkLXJvdzogNCAvIDU7XFxuICAgICAgICBkaXNwbGF5OiBncmlkO1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gYXV0byBhdXRvO1xcbiAgICAgIH1cXG5cXG4gICAgICAjdGhyZWUtaHItY29udGFpbmVyIHtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgfVxcblxcbiAgICAgIC50aHJlZS1oci1jaHVuayB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgZ2FwOiA0cHg7XFxuICAgICAgICBjb2xvcjogYmxhY2s7XFxuICAgICAgICBwYWRkaW5nOiA4cHg7XFxuICAgICAgfVxcbiAgfVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJjb25zdCBjbGVhckRpdiA9IChkaXYpID0+IHtcbiAgaWYgKGRpdi5jaGlsZHJlbi5sZW5ndGgpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRpdi5jaGlsZHJlbi5sZW5ndGggKyAxOyBpICs9IDEpIHtcbiAgICAgIGRpdi5yZW1vdmVDaGlsZChkaXYuZmlyc3RFbGVtZW50Q2hpbGQpO1xuICAgIH1cbiAgICBjb25zdCBwYXJlbnQgPSBkaXYucGFyZW50Tm9kZTtcbiAgICBwYXJlbnQucmVtb3ZlQ2hpbGQoZGl2KTtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBwYXJlbnQgPSBkaXYucGFyZW50Tm9kZTtcbiAgICBwYXJlbnQucmVtb3ZlQ2hpbGQoZGl2KTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgY2xlYXJEaXY7XG4iLCJpbXBvcnQgY2xlYXJEaXYgZnJvbSAnLi9jbGVhckRpdic7XG5pbXBvcnQgY29udmVydFVuaXhUaW1lIGZyb20gJy4vY29udmVydF91bml4X3RpbWUnO1xuaW1wb3J0IHsgdGVtcENvbnZlcnQgfSBmcm9tICcuL3RlbXBDb252ZXJ0JztcblxuY29uc3QgYnVpbGRDb250YWluZXIgPSAoKSA9PiB7XG4gIGxldCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29udGFpbmVyLnNldEF0dHJpYnV0ZSgnaWQnLCAnY29udGFpbmVyJyk7XG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcbn07XG5cbmNvbnN0IGJ1aWxkTG9nbyA9IChoZWFkZXIpID0+IHtcbiAgbGV0IGxvZ28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gIGxvZ28uc2V0QXR0cmlidXRlKCdpZCcsICdsb2dvJyk7XG4gIGxvZ28uaW5uZXJUZXh0ID0gJ1dlYXRoZXInO1xuICBoZWFkZXIuYXBwZW5kQ2hpbGQobG9nbyk7XG59O1xuXG5jb25zdCBidWlsZENpdHlTZWFyY2ggPSAoaGVhZGVyKSA9PiB7XG4gIGxldCBjaXR5U2VhcmNoRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjaXR5U2VhcmNoRm9ybS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NpdHktc2VhcmNoLWZvcm0nKTtcbiAgbGV0IGNpdHlTZWFyY2ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICBjaXR5U2VhcmNoLnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG4gIGNpdHlTZWFyY2guc2V0QXR0cmlidXRlKCdpZCcsICdjaXR5LXNlYXJjaCcpO1xuICBjaXR5U2VhcmNoLnNldEF0dHJpYnV0ZSgnbmFtZScsICdjaXR5LXNlYXJjaCcpO1xuICBjaXR5U2VhcmNoLnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnRW50ZXIgYSBDaXR5Jyk7XG4gIGxldCBjaXR5U2VhcmNoU3VibWl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGNpdHlTZWFyY2hTdWJtaXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2J1dHRvbicpO1xuICBjaXR5U2VhcmNoU3VibWl0LnNldEF0dHJpYnV0ZSgnaWQnLCAnY2l0eS1zZWFyY2gtc3VibWl0Jyk7XG4gIGNpdHlTZWFyY2hTdWJtaXQuaW5uZXJUZXh0ID0gJ1NlYXJjaCc7XG4gIGNpdHlTZWFyY2hGb3JtLmFwcGVuZENoaWxkKGNpdHlTZWFyY2gpO1xuICBjaXR5U2VhcmNoRm9ybS5hcHBlbmRDaGlsZChjaXR5U2VhcmNoU3VibWl0KTtcbiAgaGVhZGVyLmFwcGVuZENoaWxkKGNpdHlTZWFyY2hGb3JtKTtcbn07XG5cbmNvbnN0IHRlbXBGQyA9IChoZWFkZXIpID0+IHtcbiAgbGV0IHRvZ2dsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB0b2dnbGUuc2V0QXR0cmlidXRlKCdpZCcsICd0b2dnbGUnKTtcblxuICBsZXQgY2Vsc2l1cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgY2Vsc2l1cy5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NlbHNpdXMnKTtcbiAgY2Vsc2l1cy5pbm5lclRleHQgPSAnQ8KwJztcblxuICBsZXQgZmFocmVuaGVpdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgZmFocmVuaGVpdC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2ZhaHJlbmhlaXQnKTtcbiAgZmFocmVuaGVpdC5pbm5lclRleHQgPSAnRsKwJztcbiAgZmFocmVuaGVpdC5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcblxuICB0b2dnbGUuYXBwZW5kQ2hpbGQoY2Vsc2l1cyk7XG4gIHRvZ2dsZS5hcHBlbmRDaGlsZChmYWhyZW5oZWl0KTtcblxuICBoZWFkZXIuYXBwZW5kQ2hpbGQodG9nZ2xlKTtcbn07XG5cbmNvbnN0IGJ1aWxkSGVhZGVyID0gKCkgPT4ge1xuICBsZXQgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGhlYWRlci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2hlYWRlcicpO1xuICBsZXQgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRhaW5lcicpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbiAgYnVpbGRMb2dvKGhlYWRlcik7XG4gIGJ1aWxkQ2l0eVNlYXJjaChoZWFkZXIpO1xuICB0ZW1wRkMoaGVhZGVyKTtcbn07XG5cbmNvbnN0IGJ1aWxkQ29udGVudCA9IChjaXR5RGF0YSkgPT4ge1xuICBsZXQgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRhaW5lcicpO1xuICBsZXQgaXNDb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NpdHktc2x1ZycpO1xuICBsZXQgaXMzaHIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGhyZWUtaHItY29udGFpbmVyJyk7XG4gIGxldCBjaXR5U2x1ZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjaXR5U2x1Zy5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NpdHktc2x1ZycpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY2l0eVNsdWcpO1xuXG4gIGNvbnN0IGJ1aWxkZXIgPSAoKSA9PiB7XG4gICAgY2l0eSgpO1xuICAgIGRhdGVUaW1lKCk7XG4gICAgY3VycmVudFRlbXAoKTtcbiAgICBjdXJyZW50V2VhdGhlcigpO1xuICAgIGJ1aWxkM0hvdXIoKTtcbiAgfTtcblxuICBjb25zdCBjaXR5ID0gKCkgPT4ge1xuICAgIGxldCBjaXR5Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY2l0eUNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NpdHktY29udGFpbmVyJyk7XG4gICAgY2l0eVNsdWcuYXBwZW5kQ2hpbGQoY2l0eUNvbnRhaW5lcik7XG5cbiAgICBsZXQgY2l0eU5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgY2l0eU5hbWUuc2V0QXR0cmlidXRlKCdpZCcsICdjaXR5LW5hbWUnKTtcbiAgICBjaXR5TmFtZS5pbm5lclRleHQgPSBjaXR5RGF0YVsxXS5jaXR5Lm5hbWUgKyAnLCAnO1xuXG4gICAgbGV0IGNvdW50cnlOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIGNvdW50cnlOYW1lLnNldEF0dHJpYnV0ZSgnaWQnLCAnY291bnRyeS1uYW1lJyk7XG4gICAgY291bnRyeU5hbWUuaW5uZXJUZXh0ID0gY2l0eURhdGFbMV0uY2l0eS5jb3VudHJ5O1xuXG4gICAgY2l0eUNvbnRhaW5lci5hcHBlbmRDaGlsZChjaXR5TmFtZSk7XG4gICAgY2l0eUNvbnRhaW5lci5hcHBlbmRDaGlsZChjb3VudHJ5TmFtZSk7XG4gIH07XG5cbiAgbGV0IGRhdGVUaW1lID0gKCkgPT4ge1xuICAgIGxldCBtb21lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtb21lbnQuc2V0QXR0cmlidXRlKCdpZCcsICdtb21lbnQnKTtcbiAgICBsZXQgZGF0ZURhdGEgPSBjb252ZXJ0VW5peFRpbWUoY2l0eURhdGFbMF0uZHQpO1xuICAgIGNvbnNvbGUubG9nKGNpdHlEYXRhWzBdLnRpbWV6b25lKTtcblxuICAgIGxldCBkYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIGRhdGUuc2V0QXR0cmlidXRlKCdpZCcsICdkYXRlJyk7XG4gICAgZGF0ZS5pbm5lclRleHQgPSBgJHtkYXRlRGF0YS5kYXl9LCAke2RhdGVEYXRhLm1vbnRofSAke2RhdGVEYXRhLmRhdGV9YDtcblxuICAgIGxldCB0aW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIHRpbWUuc2V0QXR0cmlidXRlKCdpZCcsICd0aW1lJyk7XG5cbiAgICB7XG4gICAgICBsZXQgaG91ciA9IGRhdGVEYXRhLmhvdXIgKyBjaXR5RGF0YVswXS50aW1lem9uZSAvIDM2MDA7XG4gICAgICBsZXQgbWluID0gZGF0ZURhdGEubWluO1xuICAgICAgbGV0IGFtUE0gPSAnJztcbiAgICAgIGNvbnNvbGUubG9nKE1hdGguc2lnbihob3VyKSA9PT0gLTEpO1xuICAgICAgaWYgKE1hdGguc2lnbihob3VyKSA9PT0gLTEpIHtcbiAgICAgICAgaG91ciArPSAyMDtcbiAgICAgIH1cbiAgICAgIGlmIChob3VyIDwgMTIpIHtcbiAgICAgICAgYW1QTSA9ICdhLm0uJztcbiAgICAgIH1cbiAgICAgIGlmIChob3VyID4gMTIpIHtcbiAgICAgICAgaG91ciAtPSAxMjtcbiAgICAgICAgYW1QTSA9ICdwLm0uJztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGFtUE0gPSAncC5tLic7XG4gICAgICB9XG4gICAgICBpZiAoZGF0ZURhdGEubWluIDwgMTApIHtcbiAgICAgICAgdGltZS5pbm5lclRleHQgPSBgJHtob3VyfTowJHttaW59ICR7YW1QTX1gO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGltZS5pbm5lclRleHQgPSBgJHtob3VyfToke21pbn0gJHthbVBNfWA7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbW9tZW50LmFwcGVuZENoaWxkKGRhdGUpO1xuICAgIG1vbWVudC5hcHBlbmRDaGlsZCh0aW1lKTtcblxuICAgIGNpdHlTbHVnLmFwcGVuZENoaWxkKG1vbWVudCk7XG4gIH07XG5cbiAgY29uc3QgY3VycmVudFRlbXAgPSAoKSA9PiB7XG4gICAgbGV0IGN1cnJlbnRXZWF0aGVyQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY3VycmVudFdlYXRoZXJDb250YWluZXIuc2V0QXR0cmlidXRlKCdpZCcsICdjdXJyZW50LXdlYXRoZXItY29udGFpbmVyJyk7XG4gICAgY2l0eVNsdWcuYXBwZW5kQ2hpbGQoY3VycmVudFdlYXRoZXJDb250YWluZXIpO1xuXG4gICAgbGV0IHRlbXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgdGVtcC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2N1cnJlbnQtdGVtcCcpO1xuICAgIHRlbXAuc2V0QXR0cmlidXRlKCdjbGFzcycsICd0ZW1wJyk7XG4gICAgdGVtcC5pbm5lclRleHQgPVxuICAgICAgTWF0aC5yb3VuZCh0ZW1wQ29udmVydC5rVG9GKGNpdHlEYXRhWzBdLm1haW4udGVtcCkpICsgJ8KwIEYnO1xuICAgIGN1cnJlbnRXZWF0aGVyQ29udGFpbmVyLmFwcGVuZENoaWxkKHRlbXApO1xuICB9O1xuXG4gIGNvbnN0IGN1cnJlbnRXZWF0aGVyID0gKCkgPT4ge1xuICAgIGxldCBjb25kaXRpb25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25kaXRpb25Db250YWluZXIuc2V0QXR0cmlidXRlKCdpZCcsICdjb25kaXRpb24tY29udGFpbmVyJyk7XG4gICAgY2l0eVNsdWcuYXBwZW5kQ2hpbGQoY29uZGl0aW9uQ29udGFpbmVyKTtcblxuICAgIGxldCB3ZWF0aGVyQ29uZGl0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIHdlYXRoZXJDb25kaXRpb24uc2V0QXR0cmlidXRlKCdpZCcsICdjb25kaXRpb24nKTtcbiAgICBjb25kaXRpb25Db250YWluZXIuYXBwZW5kQ2hpbGQod2VhdGhlckNvbmRpdGlvbik7XG4gICAgd2VhdGhlckNvbmRpdGlvbi5pbm5lclRleHQgPSBjaXR5RGF0YVswXS53ZWF0aGVyWzBdLm1haW47XG5cbiAgICBsZXQgd2VhdGhlckRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIHdlYXRoZXJEZXNjcmlwdGlvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3dlYXRoZXItZGVzY3JpcHRpb24nKTtcbiAgICBjb25kaXRpb25Db250YWluZXIuYXBwZW5kQ2hpbGQod2VhdGhlckRlc2NyaXB0aW9uKTtcbiAgICB3ZWF0aGVyRGVzY3JpcHRpb24uaW5uZXJUZXh0ID0gY2l0eURhdGFbMF0ud2VhdGhlclswXS5kZXNjcmlwdGlvbjtcblxuICAgIGxldCB3ZWF0aGVySWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIHdlYXRoZXJJY29uLnNldEF0dHJpYnV0ZShcbiAgICAgICdzcmMnLFxuICAgICAgYGh0dHA6Ly9vcGVud2VhdGhlcm1hcC5vcmcvaW1nL3duLyR7Y2l0eURhdGFbMF0ud2VhdGhlclswXS5pY29ufUAyeC5wbmdgXG4gICAgKTtcbiAgICB3ZWF0aGVySWNvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3dlYXRoZXItaWNvbicpO1xuICAgIGNvbmRpdGlvbkNvbnRhaW5lci5hcHBlbmRDaGlsZCh3ZWF0aGVySWNvbik7XG4gIH07XG5cbiAgY29uc3QgYnVpbGQzSG91ciA9ICgpID0+IHtcbiAgICBsZXQgdGhyZWVIb3VyQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGhyZWVIb3VyQ29udGFpbmVyLnNldEF0dHJpYnV0ZSgnaWQnLCAndGhyZWUtaHItY29udGFpbmVyJyk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHRocmVlSG91ckNvbnRhaW5lcik7XG5cbiAgICBjb25zdCB0aHJlZUhvdXJIZWxwZXIgPSAoc2VnbWVudCkgPT4ge1xuICAgICAgbGV0IHRocmVlSHJDaHVuayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgdGhyZWVIckNodW5rLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAndGhyZWUtaHItY2h1bmsnKTtcbiAgICAgIHRocmVlSG91ckNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aHJlZUhyQ2h1bmspO1xuXG4gICAgICBsZXQgZGF0ZURhdGEgPSBjb252ZXJ0VW5peFRpbWUoc2VnbWVudC5kdCk7XG4gICAgICBsZXQgdGltZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgIHtcbiAgICAgICAgbGV0IGhvdXIgPSBkYXRlRGF0YS5ob3VyICsgY2l0eURhdGFbMF0udGltZXpvbmUgLyAzNjAwO1xuICAgICAgICBsZXQgbWluID0gZGF0ZURhdGEubWluO1xuICAgICAgICBsZXQgYW1QTSA9ICcnO1xuICAgICAgICBpZiAoTWF0aC5zaWduKGhvdXIpID09PSAtMSkge1xuICAgICAgICAgIGhvdXIgKz0gMjQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGhvdXIgPCAxMikge1xuICAgICAgICAgIGFtUE0gPSAnYS5tLic7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGhvdXIgPiAxMikge1xuICAgICAgICAgIGhvdXIgLT0gMTI7XG4gICAgICAgICAgYW1QTSA9ICdwLm0uJztcbiAgICAgICAgfVxuICAgICAgICBpZiAoaG91ciA9PT0gMTIpIHtcbiAgICAgICAgICBhbVBNID0gJ3AubS4nO1xuICAgICAgICB9XG4gICAgICAgIGlmIChkYXRlRGF0YS5taW4gPCAxMCkge1xuICAgICAgICAgIHRpbWUuaW5uZXJUZXh0ID0gYCR7aG91cn06MCR7bWlufSAke2FtUE19YDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aW1lLmlubmVyVGV4dCA9IGAke2hvdXJ9OiR7bWlufSAke2FtUE19YDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsZXQgdGhyZWVIclRlbXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICB0aHJlZUhyVGVtcC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3RlbXAnKTtcbiAgICAgIHRocmVlSHJUZW1wLmlubmVyVGV4dCA9XG4gICAgICAgIE1hdGgucm91bmQodGVtcENvbnZlcnQua1RvRihzZWdtZW50Lm1haW4udGVtcCkpICsgJ8KwIEYnO1xuXG4gICAgICBsZXQgdGhyZWVIckNvbmRpdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgIHRocmVlSHJDb25kaXRpb24uaW5uZXJUZXh0ID0gc2VnbWVudC53ZWF0aGVyWzBdLm1haW47XG5cbiAgICAgIGxldCB0aHJlZUhyUmFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgIHRocmVlSHJSYWluLmlubmVyVGV4dCA9IHNlZ21lbnQucG9wICsgJyUgUG9QJztcblxuICAgICAgW3RpbWUsIHRocmVlSHJUZW1wLCB0aHJlZUhyQ29uZGl0aW9uLCB0aHJlZUhyUmFpbl0uZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgICB0aHJlZUhyQ2h1bmsuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgY2l0eURhdGFbMV0ubGlzdC5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICB0aHJlZUhvdXJIZWxwZXIoZWxlbWVudCk7XG4gICAgfSk7XG4gIH07XG5cbiAgaWYgKGlzQ29udGVudCAmJiBpczNocikge1xuICAgIGNsZWFyRGl2KGlzQ29udGVudCk7XG4gICAgY2xlYXJEaXYoaXMzaHIpO1xuICAgIGJ1aWxkZXIoKTtcbiAgfSBlbHNlIHtcbiAgICBidWlsZGVyKCk7XG4gIH1cbn07XG5cbmV4cG9ydCB7IGJ1aWxkQ29udGFpbmVyLCBidWlsZEhlYWRlciwgYnVpbGRDb250ZW50IH07XG4iLCJjb25zdCBjb252ZXJ0VW5peFRpbWUgPSAoZHQpID0+IHtcbiAgY29uc3QgbW9tZW50ID0gbmV3IERhdGUoZHQgKiAxMDAwKTtcbiAgY29uc3QgbW9udGhzID0gW1xuICAgICdKYW4nLFxuICAgICdGZWInLFxuICAgICdNYXInLFxuICAgICdBcHInLFxuICAgICdNYXknLFxuICAgICdKdW4nLFxuICAgICdKdWwnLFxuICAgICdBdWcnLFxuICAgICdTZXAnLFxuICAgICdPY3QnLFxuICAgICdOb3YnLFxuICAgICdEZWMnLFxuICBdO1xuICBjb25zdCBkYXlzID0gW1xuICAgICdTdW5kYXknLFxuICAgICdNb25kYXknLFxuICAgICdUdWVzZGF5JyxcbiAgICAnV2VkbmVzZGF5JyxcbiAgICAnVGh1cnNkYXknLFxuICAgICdGcmlkYXknLFxuICAgICdTYXR1cmRheScsXG4gIF07XG4gIGNvbnN0IHllYXIgPSBtb21lbnQuZ2V0VVRDRnVsbFllYXIoKTtcbiAgY29uc3QgbW9udGggPSBtb250aHNbbW9tZW50LmdldFVUQ01vbnRoKCldO1xuICBjb25zdCBkYXkgPSBkYXlzW21vbWVudC5nZXRVVENEYXkoKV07XG4gIGNvbnN0IGRhdGUgPSBtb21lbnQuZ2V0VVRDRGF0ZSgpO1xuICBjb25zdCBob3VyID0gbW9tZW50LmdldFVUQ0hvdXJzKCk7XG4gIGNvbnN0IG1pbiA9IG1vbWVudC5nZXRVVENNaW51dGVzKCk7XG4gIGNvbnN0IHNlYyA9IG1vbWVudC5nZXRVVENTZWNvbmRzKCk7XG4gIGNvbnN0IGRhdGVPYmogPSB7IHllYXIsIG1vbnRoLCBkYXRlLCBkYXksIGhvdXIsIG1pbiwgc2VjIH07XG4gIC8vICAgY29uc29sZS5sb2coXG4gIC8vICAgICBtb21lbnQudG9Mb2NhbGVUaW1lU3RyaW5nKCdlbi1VUycsIHsgaG91cjogJzItZGlnaXQnLCBtaW51dGU6ICcyLWRpZ2l0JyB9KVxuICAvLyAgICk7XG4gIHJldHVybiBkYXRlT2JqO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY29udmVydFVuaXhUaW1lO1xuIiwiaW1wb3J0IGZldGNoV2VhdGhlciBmcm9tICcuL2ZldGNoX3dlYXRoZXInO1xuaW1wb3J0IHsgYnVpbGRDb250ZW50IH0gZnJvbSAnLi9jb21wb25lbnRzJztcbmltcG9ydCB0ZW1wVG9nZ2xlIGZyb20gJy4vdGVtcHRvZ2dsZSc7XG5cbmNvbnN0IGNpdHlTdWJtaXQgPSAoKSA9PiB7XG4gIGxldCBzdWJtaXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2l0eS1zZWFyY2gtc3VibWl0Jyk7XG5cbiAgY29uc3QgY2l0eUhlbHBlciA9IGFzeW5jICgpID0+IHtcbiAgICBsZXQgY2l0eVNlYXJjaCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjaXR5LXNlYXJjaCcpO1xuICAgIGxldCBjaXR5V2VhdGhlciA9IGF3YWl0IGZldGNoV2VhdGhlcihjaXR5U2VhcmNoLnZhbHVlKTtcbiAgICBjb25zb2xlLmxvZyhjaXR5V2VhdGhlcik7XG4gICAgYnVpbGRDb250ZW50KGNpdHlXZWF0aGVyKTtcbiAgfTtcblxuICBzdWJtaXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY2l0eUhlbHBlcigpO1xuICB9KTtcblxuICBsZXQgY2l0eUZpZWxkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NpdHktc2VhcmNoJyk7XG5cbiAgY2l0eUZpZWxkLmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZSkgPT4ge1xuICAgIGlmIChlLmNvZGUgPT09ICdFbnRlcicpIHtcbiAgICAgIGNpdHlIZWxwZXIoKTtcbiAgICB9XG4gIH0pO1xufTtcblxuY29uc3QgdGVtcFRvZ2dsZUJ0biA9ICgpID0+IHtcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGlmIChlLnRhcmdldC5wYXJlbnROb2RlLmlkID09PSAndG9nZ2xlJykge1xuICAgICAgbGV0IGNlbHNpdXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2Vsc2l1cycpO1xuICAgICAgY2Vsc2l1cy5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcbiAgICAgIGxldCBmYWhyZW5oZWl0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZhaHJlbmhlaXQnKTtcbiAgICAgIGZhaHJlbmhlaXQuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XG4gICAgICB0ZW1wVG9nZ2xlKCk7XG4gICAgfVxuICB9KTtcbn07XG5cbmV4cG9ydCB7IGNpdHlTdWJtaXQsIHRlbXBUb2dnbGVCdG4gfTtcbiIsImNvbnN0IGZldGNoV2VhdGhlciA9IGFzeW5jIChjaXR5KSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgYXBpS2V5ID0gJzNjNjhiNDM3ODliZjU2YTlkYzJlYTkxY2M0YTYzMDllJztcbiAgICBjb25zdCB3ZWF0aGVyNWQzaHIgPSBhd2FpdCBmZXRjaChcbiAgICAgIGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvZm9yZWNhc3Q/cT0ke2NpdHl9JmFwcGlkPSR7YXBpS2V5fSZjbnQ9OGAsXG4gICAgICB7IGNvcnM6IHRydWUgfVxuICAgICk7XG4gICAgY29uc3QgY3VycmVudFdlYXRoZXIgPSBhd2FpdCBmZXRjaChcbiAgICAgIGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9xPSR7Y2l0eX0mYXBwaWQ9JHthcGlLZXl9YFxuICAgICk7XG4gICAgY29uc3Qgd2VhdGhlcjVkID0gYXdhaXQgd2VhdGhlcjVkM2hyLmpzb24oKTtcbiAgICBjb25zdCBjV2VhdGhlciA9IGF3YWl0IGN1cnJlbnRXZWF0aGVyLmpzb24oKTtcbiAgICByZXR1cm4gW2NXZWF0aGVyLCB3ZWF0aGVyNWRdO1xuICB9IGNhdGNoIHtcbiAgICBjb25zb2xlLmxvZyhlcnIpO1xuICB9XG59O1xuZXhwb3J0IGRlZmF1bHQgZmV0Y2hXZWF0aGVyO1xuIiwiY29uc3QgdGVtcENvbnZlcnQgPSAoKCkgPT4ge1xuICAvLyBLZWx2aW4gdG8gRmFocmVuaGVpdFxuICBjb25zdCBrVG9GID0gKHRlbXApID0+IHtcbiAgICByZXR1cm4gKCh0ZW1wIC0gMjczLjE1KSAqIDkpIC8gNSArIDMyO1xuICB9O1xuICAvLyBLZWx2aW4gdG8gQ2Vsc2l1c1xuICBjb25zdCBrVG9DID0gKHRlbXApID0+IHtcbiAgICByZXR1cm4gdGVtcCAtIDI3My4xNTtcbiAgfTtcbiAgLy8gRmFocmVuaGVpdCB0byBDZWxzaXVzXG4gIGNvbnN0IGZUb0MgPSAodGVtcCkgPT4ge1xuICAgIHJldHVybiAoKHRlbXAgLSAzMikgKiA1KSAvIDk7XG4gIH07XG4gIC8vIENlbHNpdXMgdG8gRmFocmVuaGVpdFxuICBjb25zdCBjVG9GID0gKHRlbXApID0+IHtcbiAgICByZXR1cm4gKHRlbXAgKiA5KSAvIDUgKyAzMjtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGtUb0Y6IGtUb0YsXG4gICAga1RvQzoga1RvQyxcbiAgICBmVG9DOiBmVG9DLFxuICAgIGNUb0Y6IGNUb0YsXG4gIH07XG59KSgpO1xuXG5leHBvcnQgeyB0ZW1wQ29udmVydCB9O1xuIiwiaW1wb3J0IHsgdGVtcENvbnZlcnQgfSBmcm9tICcuL3RlbXBDb252ZXJ0JztcblxuY29uc3QgdGVtcFRvZ2dsZSA9ICgpID0+IHtcbiAgbGV0IHRlbXBzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgndGVtcCcpO1xuICBsZXQgdW5pdCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2FjdGl2ZScpO1xuXG4gIGlmICh0ZW1wc1swXSkge1xuICAgIGZvciAobGV0IGl0ZW0gb2YgdGVtcHMpIHtcbiAgICAgIGlmICh1bml0WzBdLmlkID09PSAnZmFocmVuaGVpdCcpIHtcbiAgICAgICAgaXRlbS5pbm5lclRleHQgPSBgJHtNYXRoLnJvdW5kKFxuICAgICAgICAgIHRlbXBDb252ZXJ0LmNUb0YocGFyc2VJbnQoaXRlbS5pbm5lclRleHQuc3Vic3RyaW5nKDAsIDIpKSlcbiAgICAgICAgKX3CsCBGYDtcbiAgICAgIH1cbiAgICAgIGlmICh1bml0WzBdLmlkID09PSAnY2Vsc2l1cycpIHtcbiAgICAgICAgaXRlbS5pbm5lclRleHQgPSBgJHtNYXRoLnJvdW5kKFxuICAgICAgICAgIHRlbXBDb252ZXJ0LmZUb0MocGFyc2VJbnQoaXRlbS5pbm5lclRleHQuc3Vic3RyaW5nKDAsIDIpKSlcbiAgICAgICAgKX3CsCBDYDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IHRlbXBUb2dnbGU7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGVzLmNzcyc7XG5pbXBvcnQgeyBidWlsZENvbnRhaW5lciwgYnVpbGRIZWFkZXIsIGJ1aWxkQ29udGVudCB9IGZyb20gJy4vY29tcG9uZW50cyc7XG5pbXBvcnQgeyBjaXR5U3VibWl0LCB0ZW1wVG9nZ2xlQnRuIH0gZnJvbSAnLi9ldmVudHMnO1xuaW1wb3J0IHRlbXBUb2dnbGUgZnJvbSAnLi90ZW1wdG9nZ2xlJztcblxuYnVpbGRDb250YWluZXIoKTtcbmJ1aWxkSGVhZGVyKCk7XG5jaXR5U3VibWl0KCk7XG50ZW1wVG9nZ2xlQnRuKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=