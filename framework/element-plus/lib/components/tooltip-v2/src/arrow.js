'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('../../../utils/index.js');
var common = require('./common.js');
var props = require('../../../utils/vue/props.js');

const tooltipV2ArrowProps = props.buildProps({
  width: {
    type: Number,
    default: 10
  },
  height: {
    type: Number,
    default: 10
  },
  style: {
    type: props.definePropType(Object),
    default: null
  }
});
const tooltipV2ArrowSpecialProps = props.buildProps({
  side: {
    type: props.definePropType(String),
    values: common.tooltipV2Sides,
    required: true
  }
});

exports.tooltipV2ArrowProps = tooltipV2ArrowProps;
exports.tooltipV2ArrowSpecialProps = tooltipV2ArrowSpecialProps;
//# sourceMappingURL=arrow.js.map
