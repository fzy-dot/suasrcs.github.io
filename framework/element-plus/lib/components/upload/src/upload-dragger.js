'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('../../../utils/index.js');
var props = require('../../../utils/vue/props.js');
var shared = require('@vue/shared');

const uploadDraggerProps = props.buildProps({
  disabled: {
    type: Boolean,
    default: false
  }
});
const uploadDraggerEmits = {
  file: (file) => shared.isArray(file)
};

exports.uploadDraggerEmits = uploadDraggerEmits;
exports.uploadDraggerProps = uploadDraggerProps;
//# sourceMappingURL=upload-dragger.js.map
