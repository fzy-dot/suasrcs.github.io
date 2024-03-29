'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var core = require('@vueuse/core');
require('../../../utils/index.js');
require('../../../hooks/index.js');
var configProvider = require('../../config-provider/src/config-provider.js');
var message$1 = require('./message2.js');
var message$2 = require('./message.js');
var shared = require('@vue/shared');
var index = require('../../../hooks/use-z-index/index.js');
var types = require('../../../utils/types.js');
var error = require('../../../utils/error.js');

const instances = [];
let seed = 1;
const message = function(options = {}, context) {
  if (!core.isClient)
    return { close: () => void 0 };
  if (core.isNumber(configProvider.messageConfig.max) && instances.length >= configProvider.messageConfig.max) {
    return { close: () => void 0 };
  }
  if (!vue.isVNode(options) && shared.isObject(options) && options.grouping && !vue.isVNode(options.message) && instances.length) {
    const tempVm = instances.find((item) => {
      var _a, _b, _c;
      return `${(_b = (_a = item.vm.props) == null ? void 0 : _a.message) != null ? _b : ""}` === `${(_c = options.message) != null ? _c : ""}`;
    });
    if (tempVm) {
      tempVm.vm.component.props.repeatNum += 1;
      tempVm.vm.component.props.type = (options == null ? void 0 : options.type) || "info";
      return {
        close: () => vm.component.proxy.visible = false
      };
    }
  }
  if (shared.isString(options) || vue.isVNode(options)) {
    options = { message: options };
  }
  let verticalOffset = options.offset || 20;
  instances.forEach(({ vm: vm2 }) => {
    var _a;
    verticalOffset += (((_a = vm2.el) == null ? void 0 : _a.offsetHeight) || 0) + 16;
  });
  verticalOffset += 16;
  const { nextZIndex } = index.useZIndex();
  const id = `message_${seed++}`;
  const userOnClose = options.onClose;
  const props = {
    zIndex: nextZIndex(),
    ...options,
    offset: verticalOffset,
    id,
    onClose: () => {
      close(id, userOnClose);
    }
  };
  let appendTo = document.body;
  if (types.isElement(options.appendTo)) {
    appendTo = options.appendTo;
  } else if (shared.isString(options.appendTo)) {
    appendTo = document.querySelector(options.appendTo);
  }
  if (!types.isElement(appendTo)) {
    error.debugWarn("ElMessage", "the appendTo option is not an HTMLElement. Falling back to document.body.");
    appendTo = document.body;
  }
  const container = document.createElement("div");
  container.className = `container_${id}`;
  const messageContent = props.message;
  const vm = vue.createVNode(message$1["default"], props, shared.isFunction(messageContent) ? { default: messageContent } : vue.isVNode(messageContent) ? { default: () => messageContent } : null);
  vm.appContext = context || message._context;
  vm.props.onDestroy = () => {
    vue.render(null, container);
  };
  vue.render(vm, container);
  instances.push({ vm });
  appendTo.appendChild(container.firstElementChild);
  return {
    close: () => vm.component.proxy.visible = false
  };
};
message$2.messageTypes.forEach((type) => {
  message[type] = (options = {}, appContext) => {
    if (shared.isString(options) || vue.isVNode(options)) {
      options = {
        message: options
      };
    }
    return message({
      ...options,
      type
    }, appContext);
  };
});
function close(id, userOnClose) {
  const idx = instances.findIndex(({ vm: vm2 }) => id === vm2.component.props.id);
  if (idx === -1)
    return;
  const { vm } = instances[idx];
  if (!vm)
    return;
  userOnClose == null ? void 0 : userOnClose(vm);
  const removedHeight = vm.el.offsetHeight;
  instances.splice(idx, 1);
  const len = instances.length;
  if (len < 1)
    return;
  for (let i = idx; i < len; i++) {
    const pos = Number.parseInt(instances[i].vm.el.style["top"], 10) - removedHeight - 16;
    instances[i].vm.component.props.offset = pos;
  }
}
function closeAll() {
  var _a;
  for (let i = instances.length - 1; i >= 0; i--) {
    const instance = instances[i].vm.component;
    (_a = instance == null ? void 0 : instance.proxy) == null ? void 0 : _a.close();
  }
}
message.closeAll = closeAll;
message._context = null;

exports.close = close;
exports.closeAll = closeAll;
exports["default"] = message;
//# sourceMappingURL=message-method.js.map
