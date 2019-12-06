webpackHotUpdate(1,{

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _antv_g6__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @antv/g6 */ "./node_modules/@antv/g6/build/g6.js");
/* harmony import */ var _antv_g6__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_antv_g6__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var insert_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! insert-css */ "./node_modules/insert-css/index.js");
/* harmony import */ var insert_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(insert_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../constants */ "./constants/index.js");


var _jsxFileName = "/Users/tianhangliu/education/csci578/cluster-visualization/components/ClusterGraph.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;



 // Following code is based on examples from https://g6.antv.vision/en/examples/

insert_css__WEBPACK_IMPORTED_MODULE_4___default()("\n  .g6-tooltip {\n    border: 1px solid #e2e2e2;\n    border-radius: 4px;\n    font-size: 12px;\n    color: #000;\n    background-color: rgba(255, 255, 255, 0.9);\n    padding: 10px 8px; \n    box-shadow: rgb(174, 174, 174) 0px 0px 10px;\n    white-space:pre-wrap;\n  }\n");
_antv_g6__WEBPACK_IMPORTED_MODULE_3___default.a.registerEdge('line-arrow', {
  getPath: function getPath(points) {
    var startPoint = points[0];
    var endPoint = points[1];
    return [['M', startPoint.x, startPoint.y], ['L', endPoint.x / 3 + 2 / 3 * startPoint.x, startPoint.y], ['L', endPoint.x / 3 + 2 / 3 * startPoint.x, endPoint.y], ['L', endPoint.x, endPoint.y]];
  },
  getShapeStyle: function getShapeStyle(cfg) {
    var startPoint = cfg.startPoint;
    var endPoint = cfg.endPoint;
    var controlPoints = this.getControlPoints(cfg);
    var points = [startPoint]; // 添加起始点
    // Add control points

    if (controlPoints) {
      points = points.concat(controlPoints);
    } // 添加结束点


    points.push(endPoint);
    var path = this.getPath(points);
    var style = _antv_g6__WEBPACK_IMPORTED_MODULE_3___default.a.Util.mix({}, _antv_g6__WEBPACK_IMPORTED_MODULE_3___default.a.Global.defaultEdge.style, {
      stroke: '#BBB',
      lineWidth: 1,
      path: path,
      endArrow: {
        path: 'M 6,0 L -6,-6 L -3,0 L -6,6 Z',
        d: 6
      }
    }, cfg.style);
    return style;
  }
}, 'line');
function Graph(props) {
  var ref = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])();
  var graphRef = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])();

  var style = props.style,
      data = props.data,
      handleNodeClick = props.handleNodeClick,
      rest = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["style", "data", "handleNodeClick"]);

  var bindEvents = function bindEvents() {
    if (graphRef.current) {
      graphRef.current.on('node:click', function (e) {
        var item = e.item;
        handleNodeClick && handleNodeClick(item);
      });
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    var calculatedWidth = ref.current.clientWidth || _constants__WEBPACK_IMPORTED_MODULE_5__["defaultContainerWidth"];
    var calculatedHeight = ref.current.clientHeight || _constants__WEBPACK_IMPORTED_MODULE_5__["defaultContainerHeight"];

    if (!graphRef.current) {
      graphRef.current = new _antv_g6__WEBPACK_IMPORTED_MODULE_3___default.a.Graph({
        container: ref.current,
        width: calculatedWidth,
        height: calculatedHeight,
        layout: {
          type: 'circular'
        },
        modes: {
          "default": ['drag-canvas', 'zoom-canvas', 'activate-relations', {
            type: 'tooltip',
            formatText: function formatText(model) {
              return "Full Name: ".concat(model.name, "\nACDC Cluster: ").concat(model.acdcCluster || '');
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

    data.nodes.sort(function (lhs, rhs) {
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
    var edges = graphRef.current.getEdges();
    graphRef.current.paint();
  }, [data]);
  return __jsx("div", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    ref: ref,
    style: style
  }, rest, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155
    },
    __self: this
  }));
}

/***/ })

})
//# sourceMappingURL=1.4847127931ed1ec1140a.hot-update.js.map