import { isVNode, createVNode, render } from 'vue';
import { isClient, isNumber } from '@vueuse/core';
import '../../../utils/index.mjs';
import '../../../hooks/index.mjs';
import { messageConfig } from '../../config-provider/src/config-provider.mjs';
import MessageConstructor from './message2.mjs';
import { messageTypes } from './message.mjs';
import { isObject, isString, isFunction } from '@vue/shared';
import { useZIndex } from '../../../hooks/use-z-index/index.mjs';
import { isElement } from '../../../utils/types.mjs';
import { debugWarn } from '../../../utils/error.mjs';

const instances = [];
let seed = 1;
const message = function(options = {}, context) {
  if (!isClient)
    return { close: () => void 0 };
  if (isNumber(messageConfig.max) && instances.length >= messageConfig.max) {
    return { close: () => void 0 };
  }
  if (!isVNode(options) && isObject(options) && options.grouping && !isVNode(options.message) && instances.length) {
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
  if (isString(options) || isVNode(options)) {
    options = { message: options };
  }
  let verticalOffset = options.offset || 20;
  instances.forEach(({ vm: vm2 }) => {
    var _a;
    verticalOffset += (((_a = vm2.el) == null ? void 0 : _a.offsetHeight) || 0) + 16;
  });
  verticalOffset += 16;
  const { nextZIndex } = useZIndex();
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
  if (isElement(options.appendTo)) {
    appendTo = options.appendTo;
  } else if (isString(options.appendTo)) {
    appendTo = document.querySelector(options.appendTo);
  }
  if (!isElement(appendTo)) {
    debugWarn("ElMessage", "the appendTo option is not an HTMLElement. Falling back to document.body.");
    appendTo = document.body;
  }
  const container = document.createElement("div");
  container.className = `container_${id}`;
  const messageContent = props.message;
  const vm = createVNode(MessageConstructor, props, isFunction(messageContent) ? { default: messageContent } : isVNode(messageContent) ? { default: () => messageContent } : null);
  vm.appContext = context || message._context;
  vm.props.onDestroy = () => {
    render(null, container);
  };
  render(vm, container);
  instances.push({ vm });
  appendTo.appendChild(container.firstElementChild);
  return {
    close: () => vm.component.proxy.visible = false
  };
};
messageTypes.forEach((type) => {
  message[type] = (options = {}, appContext) => {
    if (isString(options) || isVNode(options)) {
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

export { close, closeAll, message as default };
//# sourceMappingURL=message-method.mjs.map
