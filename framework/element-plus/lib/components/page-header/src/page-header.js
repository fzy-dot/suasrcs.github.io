'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('../../../utils/index.js');
var iconsVue = require('@element-plus/icons-vue');
var props = require('../../../utils/vue/props.js');
var icon = require('../../../utils/vue/icon.js');

const pageHeaderProps = props.buildProps({
  icon: {
    type: icon.iconPropType,
    default: () => iconsVue.Back
  },
  title: String,
  content: {
    type: String,
    default: ""
  }
});
const pageHeaderEmits = {
  back: () => true
};

exports.pageHeaderEmits = pageHeaderEmits;
exports.pageHeaderProps = pageHeaderProps;
//# sourceMappingURL=page-header.js.map
