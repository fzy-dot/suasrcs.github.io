'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('../../utils/index.js');
var popper$1 = require('./src/popper2.js');
var arrow = require('./src/arrow2.js');
var trigger = require('./src/trigger2.js');
var content = require('./src/content2.js');
var popper = require('./src/popper.js');
var trigger$1 = require('./src/trigger.js');
var content$1 = require('./src/content.js');
var arrow$1 = require('./src/arrow.js');
var deprecation = require('./src/deprecation.js');
var install = require('../../utils/vue/install.js');

const ElPopper = install.withInstall(popper$1["default"]);

exports.ElPopperArrow = arrow["default"];
exports.ElPopperTrigger = trigger["default"];
exports.ElPopperContent = content["default"];
exports.Effect = popper.Effect;
exports.usePopperProps = popper.usePopperProps;
exports.usePopperTriggerProps = trigger$1.usePopperTriggerProps;
exports.usePopperContentProps = content$1.usePopperContentProps;
exports.usePopperCoreConfigProps = content$1.usePopperCoreConfigProps;
exports.usePopperArrowProps = arrow$1.usePopperArrowProps;
exports.useDeprecateAppendToBody = deprecation.useDeprecateAppendToBody;
exports.ElPopper = ElPopper;
exports["default"] = ElPopper;
//# sourceMappingURL=index.js.map
