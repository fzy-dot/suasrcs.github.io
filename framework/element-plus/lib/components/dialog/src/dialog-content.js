'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('../../../utils/index.js');
var props = require('../../../utils/vue/props.js');
var icon = require('../../../utils/vue/icon.js');

const dialogContentProps = props.buildProps({
  center: {
    type: Boolean,
    default: false
  },
  closeIcon: {
    type: icon.iconPropType,
    default: ""
  },
  customClass: {
    type: String,
    default: ""
  },
  draggable: {
    type: Boolean,
    default: false
  },
  fullscreen: {
    type: Boolean,
    default: false
  },
  showClose: {
    type: Boolean,
    default: true
  },
  title: {
    type: String,
    default: ""
  }
});
const dialogContentEmits = {
  close: () => true
};

exports.dialogContentEmits = dialogContentEmits;
exports.dialogContentProps = dialogContentProps;
//# sourceMappingURL=dialog-content.js.map
