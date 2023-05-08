'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var core = require('@vueuse/core');
require('../../slot/index.js');
require('../../../hooks/index.js');
require('../../../tokens/index.js');
require('../../../utils/index.js');
var trigger = require('./trigger.js');
var pluginVue_exportHelper = require('../../../_virtual/plugin-vue_export-helper.js');
var popper = require('../../../tokens/popper.js');
var index = require('../../../hooks/use-forward-ref/index.js');
var types = require('../../../utils/types.js');
var onlyChild = require('../../slot/src/only-child.js');

const __default__ = {
  name: "ElPopperTrigger",
  inheritAttrs: false
};
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  ...__default__,
  props: trigger.usePopperTriggerProps,
  setup(__props, { expose }) {
    const props = __props;
    const { triggerRef } = vue.inject(popper.POPPER_INJECTION_KEY, void 0);
    index.useForwardRef(triggerRef);
    vue.onMounted(() => {
      vue.watch(() => props.virtualRef, (virtualEl) => {
        if (virtualEl) {
          triggerRef.value = core.unrefElement(virtualEl);
        }
      }, {
        immediate: true
      });
      vue.watch(() => triggerRef.value, (el, prevEl) => {
        if (types.isElement(el)) {
          ;
          [
            "onMouseenter",
            "onMouseleave",
            "onClick",
            "onKeydown",
            "onFocus",
            "onBlur",
            "onContextmenu"
          ].forEach((eventName) => {
            var _a;
            const handler = props[eventName];
            if (handler) {
              ;
              el.addEventListener(eventName.slice(2).toLowerCase(), handler);
              (_a = prevEl == null ? void 0 : prevEl.removeEventListener) == null ? void 0 : _a.call(prevEl, eventName.slice(2).toLowerCase(), handler);
            }
          });
        }
      }, {
        immediate: true
      });
    });
    expose({
      triggerRef
    });
    return (_ctx, _cache) => {
      return !_ctx.virtualTriggering ? (vue.openBlock(), vue.createBlock(vue.unref(onlyChild.OnlyChild), vue.mergeProps({ key: 0 }, _ctx.$attrs, {
        "aria-describedby": _ctx.open ? _ctx.id : void 0
      }), {
        default: vue.withCtx(() => [
          vue.renderSlot(_ctx.$slots, "default")
        ]),
        _: 3
      }, 16, ["aria-describedby"])) : vue.createCommentVNode("v-if", true);
    };
  }
});
var ElPopperTrigger = /* @__PURE__ */ pluginVue_exportHelper["default"](_sfc_main, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/popper/src/trigger.vue"]]);

exports["default"] = ElPopperTrigger;
//# sourceMappingURL=trigger2.js.map
