exports.ids = [0];
exports.modules = {

/***/ "./components/ClusterGraph.js":
/*!************************************!*\
  !*** ./components/ClusterGraph.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Graph; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _antv_g6__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @antv/g6 */ "@antv/g6");
/* harmony import */ var _antv_g6__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_antv_g6__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var insert_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! insert-css */ "insert-css");
/* harmony import */ var insert_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(insert_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../constants */ "./constants/index.js");


var _jsxFileName = "/Users/tianhangliu/education/csci578/cluster-visualization/components/ClusterGraph.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;



 // Following code is based on examples from https://g6.antv.vision/en/examples/

insert_css__WEBPACK_IMPORTED_MODULE_4___default()(`
  .g6-tooltip {
    border: 1px solid #e2e2e2;
    border-radius: 4px;
    font-size: 12px;
    color: #000;
    background-color: rgba(255, 255, 255, 0.9);
    padding: 10px 8px; 
    box-shadow: rgb(174, 174, 174) 0px 0px 10px;
    white-space:pre-wrap;
  }
`);
_antv_g6__WEBPACK_IMPORTED_MODULE_3___default.a.registerEdge('line-arrow', {
  getShapeStyle(cfg) {
    const startPoint = cfg.startPoint;
    const endPoint = cfg.endPoint;
    let points = [startPoint]; // 添加起始点
    // 添加结束点

    points.push(endPoint);
    const path = this.getPath(points);
    const style = _antv_g6__WEBPACK_IMPORTED_MODULE_3___default.a.Util.mix({}, _antv_g6__WEBPACK_IMPORTED_MODULE_3___default.a.Global.defaultEdge.style, {
      stroke: '#BBB',
      lineWidth: 1,
      path,
      endArrow: {
        path: 'M 6,0 L -6,-6 L -3,0 L -6,6 Z',
        d: 6
      }
    }, cfg.style);
    return style;
  }

}, 'line');
function Graph(props) {
  const ref = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])();
  const graphRef = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])();

  const {
    style,
    data,
    handleNodeClick
  } = props,
        rest = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["style", "data", "handleNodeClick"]);

  const bindEvents = () => {
    if (graphRef.current) {
      graphRef.current.on('node:click', e => {
        const {
          item
        } = e;
        handleNodeClick && handleNodeClick(item);
      });
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    const calculatedWidth = ref.current.clientWidth || _constants__WEBPACK_IMPORTED_MODULE_5__["defaultContainerWidth"];
    const calculatedHeight = ref.current.clientHeight || _constants__WEBPACK_IMPORTED_MODULE_5__["defaultContainerHeight"];

    if (!graphRef.current) {
      graphRef.current = new _antv_g6__WEBPACK_IMPORTED_MODULE_3___default.a.Graph({
        container: ref.current,
        width: calculatedWidth,
        height: calculatedHeight,
        layout: {
          type: 'circular'
        },
        modes: {
          default: ['drag-canvas', 'zoom-canvas', 'activate-relations', {
            type: 'tooltip',
            formatText: model => {
              return `Full Name: ${model.name}\nACDC Cluster: ${model.acdcCluster || ''}`;
            }
          }, {
            type: 'collapse-expand-group',
            trigger: 'click'
          }]
        },
        defaultNode: {
          size: 20
        },
        defaultEdge: {
          shape: 'line-arrow',
          size: 2,
          style: {
            stroke: '#e2e2e2'
          }
        },
        nodeStateStyles: {
          active: {
            opacity: 1
          },
          inactive: {
            opacity: 0.2
          }
        },
        edgeStateStyles: {
          active: {
            stroke: '#000'
          }
        }
      });
      bindEvents();
    }

    data.nodes.sort((lhs, rhs) => {
      if (lhs.groupId === rhs.groupId) {
        return 0;
      } else if (lhs.groupId < rhs.groupId) {
        return 1;
      } else {
        return -1;
      }
    });
    graphRef.current.data(data);
    graphRef.current.render();
    const edges = graphRef.current.getEdges();
    graphRef.current.paint();
  }, [data]);
  return __jsx("div", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    ref: ref,
    style: style
  }, rest, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140
    },
    __self: this
  }));
}

/***/ }),

/***/ "./constants/graph.js":
/*!****************************!*\
  !*** ./constants/graph.js ***!
  \****************************/
/*! exports provided: defaultContainerWidth, defaultContainerHeight */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultContainerWidth", function() { return defaultContainerWidth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultContainerHeight", function() { return defaultContainerHeight; });
const defaultContainerWidth = 1200;
const defaultContainerHeight = 800;

/***/ }),

/***/ "./constants/index.js":
/*!****************************!*\
  !*** ./constants/index.js ***!
  \****************************/
/*! exports provided: defaultContainerWidth, defaultContainerHeight */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _graph__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./graph */ "./constants/graph.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defaultContainerWidth", function() { return _graph__WEBPACK_IMPORTED_MODULE_0__["defaultContainerWidth"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defaultContainerHeight", function() { return _graph__WEBPACK_IMPORTED_MODULE_0__["defaultContainerHeight"]; });



/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-symbols */ "core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);

function _extends() {
  _extends = _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default.a || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectWithoutProperties; });
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js");


function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = Object(_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(source, excluded);
  var key, i;

  if (_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0___default.a) {
    var sourceSymbolKeys = _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0___default()(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectWithoutPropertiesLoose; });
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__);

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};

  var sourceKeys = _core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(source);

  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

/***/ })

};;
//# sourceMappingURL=0.js.map