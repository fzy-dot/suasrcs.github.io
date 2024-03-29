'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var core = require('@vueuse/core');
require('../../popper/index.js');
require('../../visual-hidden/index.js');
require('../../../utils/index.js');
require('../../../hooks/index.js');
var tooltip = require('./tooltip.js');
var tokens = require('./tokens.js');
var pluginVue_exportHelper = require('../../../_virtual/plugin-vue_export-helper.js');
var content = require('../../popper/src/content2.js');
var visualHidden = require('../../visual-hidden/src/visual-hidden.js');
var index = require('../../../hooks/use-escape-keydown/index.js');
var event = require('../../../utils/dom/event.js');

const _sfc_main = vue.defineComponent({
  name: "ElTooltipContent",
  components: {
    ElPopperContent: content["default"],
    ElVisuallyHidden: visualHidden["default"]
  },
  inheritAttrs: false,
  props: tooltip.useTooltipContentProps,
  setup(props) {
    const contentRef = vue.ref(null);
    const intermediateOpen = vue.ref(false);
    const entering = vue.ref(false);
    const leaving = vue.ref(false);
    const destroyed = vue.ref(false);
    const {
      controlled,
      id,
      open,
      trigger,
      onClose,
      onOpen,
      onShow,
      onHide,
      onBeforeShow,
      onBeforeHide
    } = vue.inject(tokens.TOOLTIP_INJECTION_KEY, void 0);
    const persistentRef = vue.computed(() => {
      if (process.env.NODE_ENV === "test") {
        return true;
      }
      return props.persistent;
    });
    vue.onBeforeUnmount(() => {
      destroyed.value = true;
    });
    const shouldRender = vue.computed(() => {
      return vue.unref(persistentRef) ? true : vue.unref(open);
    });
    const shouldShow = vue.computed(() => {
      return props.disabled ? false : vue.unref(open);
    });
    const contentStyle = vue.computed(() => {
      var _a;
      return (_a = props.style) != null ? _a : {};
    });
    const ariaHidden = vue.computed(() => !vue.unref(open));
    index.useEscapeKeydown(onClose);
    const onTransitionLeave = () => {
      onHide();
    };
    const stopWhenControlled = () => {
      if (vue.unref(controlled))
        return true;
    };
    const onContentEnter = event.composeEventHandlers(stopWhenControlled, () => {
      if (props.enterable && vue.unref(trigger) === "hover") {
        onOpen();
      }
    });
    const onContentLeave = event.composeEventHandlers(stopWhenControlled, () => {
      if (vue.unref(trigger) === "hover") {
        onClose();
      }
    });
    const onBeforeEnter = () => {
      var _a, _b;
      (_b = (_a = contentRef.value) == null ? void 0 : _a.updatePopper) == null ? void 0 : _b.call(_a);
      onBeforeShow == null ? void 0 : onBeforeShow();
    };
    const onBeforeLeave = () => {
      onBeforeHide == null ? void 0 : onBeforeHide();
    };
    const onAfterShow = () => {
      onShow();
    };
    let stopHandle;
    vue.watch(() => vue.unref(open), (val) => {
      if (val) {
        stopHandle = core.onClickOutside(vue.computed(() => {
          var _a;
          return (_a = contentRef.value) == null ? void 0 : _a.popperContentRef;
        }), () => {
          if (vue.unref(controlled))
            return;
          const $trigger = vue.unref(trigger);
          if ($trigger !== "hover") {
            onClose();
          }
        });
      } else {
        stopHandle == null ? void 0 : stopHandle();
      }
    }, {
      flush: "post"
    });
    return {
      ariaHidden,
      entering,
      leaving,
      id,
      intermediateOpen,
      contentStyle,
      contentRef,
      destroyed,
      shouldRender,
      shouldShow,
      open,
      onAfterShow,
      onBeforeEnter,
      onBeforeLeave,
      onContentEnter,
      onContentLeave,
      onTransitionLeave
    };
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_visually_hidden = vue.resolveComponent("el-visually-hidden");
  const _component_el_popper_content = vue.resolveComponent("el-popper-content");
  return vue.openBlock(), vue.createBlock(vue.Teleport, {
    disabled: !_ctx.teleported,
    to: _ctx.appendTo
  }, [
    vue.createVNode(vue.Transition, {
      name: _ctx.transition,
      onAfterLeave: _ctx.onTransitionLeave,
      onBeforeEnter: _ctx.onBeforeEnter,
      onAfterEnter: _ctx.onAfterShow,
      onBeforeLeave: _ctx.onBeforeLeave
    }, {
      default: vue.withCtx(() => [
        _ctx.shouldRender ? vue.withDirectives((vue.openBlock(), vue.createBlock(_component_el_popper_content, vue.mergeProps({
          key: 0,
          ref: "contentRef"
        }, _ctx.$attrs, {
          "aria-hidden": _ctx.ariaHidden,
          "boundaries-padding": _ctx.boundariesPadding,
          "fallback-placements": _ctx.fallbackPlacements,
          "gpu-acceleration": _ctx.gpuAcceleration,
          offset: _ctx.offset,
          placement: _ctx.placement,
          "popper-options": _ctx.popperOptions,
          strategy: _ctx.strategy,
          effect: _ctx.effect,
          enterable: _ctx.enterable,
          pure: _ctx.pure,
          "popper-class": _ctx.popperClass,
          "popper-style": [_ctx.popperStyle, _ctx.contentStyle],
          "reference-el": _ctx.referenceEl,
          visible: _ctx.shouldShow,
          "z-index": _ctx.zIndex,
          onMouseenter: _ctx.onContentEnter,
          onMouseleave: _ctx.onContentLeave
        }), {
          default: vue.withCtx(() => [
            vue.createCommentVNode(" Workaround bug #6378 "),
            !_ctx.destroyed ? (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 0 }, [
              vue.renderSlot(_ctx.$slots, "default"),
              vue.createVNode(_component_el_visually_hidden, {
                id: _ctx.id,
                role: "tooltip"
              }, {
                default: vue.withCtx(() => [
                  vue.createTextVNode(vue.toDisplayString(_ctx.ariaLabel), 1)
                ]),
                _: 1
              }, 8, ["id"])
            ], 64)) : vue.createCommentVNode("v-if", true)
          ]),
          _: 3
        }, 16, ["aria-hidden", "boundaries-padding", "fallback-placements", "gpu-acceleration", "offset", "placement", "popper-options", "strategy", "effect", "enterable", "pure", "popper-class", "popper-style", "reference-el", "visible", "z-index", "onMouseenter", "onMouseleave"])), [
          [vue.vShow, _ctx.shouldShow]
        ]) : vue.createCommentVNode("v-if", true)
      ]),
      _: 3
    }, 8, ["name", "onAfterLeave", "onBeforeEnter", "onAfterEnter", "onBeforeLeave"])
  ], 8, ["disabled", "to"]);
}
var ElTooltipContent = /* @__PURE__ */ pluginVue_exportHelper["default"](_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/tooltip/src/content.vue"]]);

exports["default"] = ElTooltipContent;
//# sourceMappingURL=content.js.map
