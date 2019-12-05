import React, { useEffect, useState, useRef } from 'react';
import G6 from '@antv/g6';
import insertCss from 'insert-css';

import { defaultContainerWidth, defaultContainerHeight } from '../constants';

// Following code is based on examples from https://g6.antv.vision/en/examples/
insertCss(`
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

// Registers custom edge
G6.registerEdge(
  'line-arrow',
  {
    getShapeStyle(cfg) {
      // Generates line path
      const startPoint = cfg.startPoint;
      const endPoint = cfg.endPoint;
      let points = [startPoint, endPoint];
      const path = this.getPath(points);

      const style = G6.Util.mix(
        {},
        G6.Global.defaultEdge.style,
        {
          stroke: '#BBB',
          lineWidth: 1,
          path,
          endArrow: {
            path: 'M 6,0 L -6,-6 L -3,0 L -6,6 Z',
            d: 6
          }
        },
        cfg.style
      );
      return style;
    }
  },
  'line'
);

export default function Graph(props) {
  const ref = useRef();
  const graphRef = useRef();

  const { style, data, handleNodeClick, ...rest } = props;

  const bindEvents = () => {
    if (graphRef.current) {
      graphRef.current.on('node:click', e => {
        const { item } = e;
        handleNodeClick && handleNodeClick(item);
      });
    }
  };

  useEffect(() => {
    const calculatedWidth = ref.current.clientWidth || defaultContainerWidth;
    const calculatedHeight = ref.current.clientHeight || defaultContainerHeight;

    if (!graphRef.current) {
      graphRef.current = new G6.Graph({
        container: ref.current,
        width: calculatedWidth,
        height: calculatedHeight,
        layout: {
          type: 'circular'
        },
        modes: {
          default: [
            'drag-canvas',
            'zoom-canvas',
            'activate-relations',
            {
              type: 'tooltip',
              formatText: model => {
                return `Full Name: ${
                  model.name
                }\nACDC Cluster: ${model.acdcCluster || ''}`;
              }
            },
            {
              type: 'collapse-expand-group',
              trigger: 'click'
            }
          ]
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

    // Sorts nodes to make nodes grouped together according to groupId
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
    graphRef.current.paint();
  }, [data]);

  return <div ref={ref} style={style} {...rest}></div>;
}
