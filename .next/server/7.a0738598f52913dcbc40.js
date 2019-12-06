exports.ids = [7];
exports.modules = {

/***/ "3CR9":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js
var object_assign = __webpack_require__("UXZV");
var assign_default = /*#__PURE__*/__webpack_require__.n(object_assign);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js

function _extends() {
  _extends = assign_default.a || function (target) {
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
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js
var get_own_property_symbols = __webpack_require__("4mXO");
var get_own_property_symbols_default = /*#__PURE__*/__webpack_require__.n(get_own_property_symbols);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js
var keys = __webpack_require__("pLtp");
var keys_default = /*#__PURE__*/__webpack_require__.n(keys);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};

  var sourceKeys = keys_default()(source);

  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js


function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;

  if (get_own_property_symbols_default.a) {
    var sourceSymbolKeys = get_own_property_symbols_default()(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "@antv/g6"
var g6_ = __webpack_require__("M2yZ");
var g6_default = /*#__PURE__*/__webpack_require__.n(g6_);

// EXTERNAL MODULE: external "insert-css"
var external_insert_css_ = __webpack_require__("4/SI");
var external_insert_css_default = /*#__PURE__*/__webpack_require__.n(external_insert_css_);

// CONCATENATED MODULE: ./constants/graph.js
const defaultContainerWidth = 1200;
const defaultContainerHeight = 800;
// CONCATENATED MODULE: ./constants/index.js

// CONCATENATED MODULE: ./components/ClusterGraph.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Graph; });


var __jsx = external_react_default.a.createElement;



 // Following code is based on examples from https://g6.antv.vision/en/examples/

external_insert_css_default()(`
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
g6_default.a.registerEdge('line-arrow', {
  getShapeStyle(cfg) {
    const startPoint = cfg.startPoint;
    const endPoint = cfg.endPoint;
    let points = [startPoint]; // 添加起始点
    // 添加结束点

    points.push(endPoint);
    const path = this.getPath(points);
    const style = g6_default.a.Util.mix({}, g6_default.a.Global.defaultEdge.style, {
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
  const ref = Object(external_react_["useRef"])();
  const graphRef = Object(external_react_["useRef"])();

  const {
    style,
    data,
    handleNodeClick
  } = props,
        rest = _objectWithoutProperties(props, ["style", "data", "handleNodeClick"]);

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

  Object(external_react_["useEffect"])(() => {
    const calculatedWidth = ref.current.clientWidth || defaultContainerWidth;
    const calculatedHeight = ref.current.clientHeight || defaultContainerHeight;

    if (!graphRef.current) {
      graphRef.current = new g6_default.a.Graph({
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
  return __jsx("div", _extends({
    ref: ref,
    style: style
  }, rest));
}

/***/ }),

/***/ "4mXO":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("k1wZ");

/***/ }),

/***/ "UXZV":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("dGr4");

/***/ })

};;