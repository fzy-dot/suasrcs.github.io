'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var index$1 = require('../../popper/index.js');
require('../../../utils/index.js');
require('../../../hooks/index.js');
var content = require('./content.js');
var trigger = require('./trigger.js');
var tooltip = require('./tooltip.js');
var tokens = require('./tokens.js');
var pluginVue_exportHelper = require('../../../_virtual/plugin-vue_export-helper.js');
var index = require('../../../hooks/use-model-toggle/index.js');
var arrow = require('../../popper/src/arrow2.js');
var arrow$1 = require('../../popper/src/arrow.js');
var index$2 = require('../../../hooks/use-popper-container/index.js');
var types = require('../../../utils/types.js');
var error = require('../../../utils/error.js');
var core = require('@vueuse/core');
var index$3 = require('../../../hooks/use-id/index.js');
var index$4 = require('../../../hooks/use-delayed-toggle/index.js');

const { useModelToggleProps, useModelToggle, useModelToggleEmits } = index.createModelToggleComposable("visible");
const _sfc_main = vue.defineComponent({
  name: "ElTooltip",
  components: {
    ElPopper: index$1.ElPopper,
    ElPopperArrow: arrow["default"],
    ElTooltipContent: content["default"],
    ElTooltipTrigger: trigger["default"]
  },
  props: {
    ...useModelToggleProps,
    ...tooltip.useTooltipContentProps,
    ...tooltip.useTooltipTriggerProps,
    ...arrow$1.usePopperArrowProps,
    ...tooltip.useTooltipProps
  },
  emits: [...useModelToggleEmits, "before-show", "before-hide", "show", "hide"],
  setup(props, { emit }) {
    index$2.usePopperContainer();
    const compatShowAfter = vue.computed(() => {
      if (!types.isUndefined(props.openDelay)) {
        error.debugWarn("ElTooltip", "open-delay is about to be deprecated in the next major version, please use `show-after` instead");
      }
      return props.openDelay || props.showAfter;
    });
    const compatShowArrow = vue.computed(() => {
      if (!types.isUndefined(props.visibleArrow)) {
        error.debugWarn("ElTooltip", "`visible-arrow` is about to be deprecated in the next major version, please use `show-arrow` instead");
      }
      return core.isBoolean(props.visibleArrow) ? props.visibleArrow : props.showArrow;
    });
    const id = index$3.useId();
    const popperRef = vue.ref(null);
    const updatePopper = () => {
      var _a;
      const popperComponent = vue.unref(popperRef);
      if (popperComponent) {
        (_a = popperComponent.popperInstanceRef) == null ? void 0 : _a.update();
      }
    };
    const open = vue.ref(false);
    const { show, hide } = useModelToggle({
      indicator: open
    });
    const { onOpen, onClose } = index$4.useDelayedToggle({
      showAfter: compatShowAfter,
      hideAfter: vue.toRef(props, "hideAfter"),
      open: show,
      close: hide
    });
    const controlled = vue.computed(() => core.isBoolean(props.visible));
    vue.provide(tokens.TOOLTIP_INJECTION_KEY, {
      controlled,
      id,
      open: vue.readonly(open),
      trigger: vue.toRef(props, "trigger"),
      onOpen,
      onClose,
      onToggle: () => {
        if (vue.unref(open)) {
          onClose();
        } else {
          onOpen();
        }
      },
      onShow: () => {
        emit("show");
      },
      onHide: () => {
        emit("hide");
      },
      onBeforeShow: () => {
        emit("before-show");
      },
      onBeforeHide: () => {
        emit("before-hide");
      },
      updatePopper
    });
    vue.watch(() => props.disabled, (disabled) => {
      if (disabled && open.value) {
        open.value = false;
      }
    });
    return {
      compatShowAfter,
      compatShowArrow,
      popperRef,
      open,
      hide,
      updatePopper,
      onOpen,
      onClose
    };
  }
});
const _hoisted_1 = ["innerHTML"];
const _hoisted_2 = { key: 1 };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_tooltip_trigger = vue.resolveComponent("el-tooltip-trigger");
  const _component_el_popper_arrow = vue.resolveComponent("el-popper-arrow");
  const _component_el_tooltip_content = vue.resolveComponent("el-tooltip-content");
  const _component_el_popper = vue.resolveComponent("el-popper");
  return vue.openBlock(), vue.createBlock(_component_el_popper, { ref: "popperRef" }, {
    default: vue.withCtx(() => [
      vue.createVNode(_component_el_tooltip_trigger, {
        disabled: _ctx.disabled,
        trigger: _ctx.trigger,
        "virtual-ref": _ctx.virtualRef,
        "virtual-triggering": _ctx.virtualTriggering
      }, {
        default: vue.withCtx(() => [
          _ctx.$slots.default ? vue.renderSlot(_ctx.$slots, "default", { key: 0 }) : vue.createCommentVNode("v-if", true)
        ]),
        _: 3
      }, 8, ["disabled", "trigger", "virtual-ref", "virtual-triggering"]),
      vue.createVNode(_component_el_tooltip_content, {
        "aria-label": _ctx.ariaLabel,
        "boundaries-padding": _ctx.boundariesPadding,
        content: _ctx.content,
        disabled: _ctx.disabled,
        effect: _ctx.effect,
        enterable: _ctx.enterable,
        "fallback-placements": _ctx.fallbackPlacements,
        "hide-after": _ctx.hideAfter,
        "gpu-acceleration": _ctx.gpuAcceleration,
        offset: _ctx.offset,
        persistent: _ctx.persistent,
        "popper-class": _ctx.popperClass,
        "popper-style": _ctx.popperStyle,
        placement: _ctx.placement,
        "popper-options": _ctx.popperOptions,
        pure: _ctx.pure,
        "raw-content": _ctx.rawContent,
        "reference-el": _ctx.referenceEl,
        "show-after": _ctx.compatShowAfter,
        strategy: _ctx.strategy,
        teleported: _ctx.teleported,
        transition: _ctx.transition,
        "z-index": _ctx.zIndex,
        "append-to": _ctx.appendTo
      }, {
        default: vue.withCtx(() => [
          vue.renderSlot(_ctx.$slots, "content", {}, () => [
            _ctx.rawContent ? (vue.openBlock(), vue.createElementBlock("span", {
              key: 0,
              innerHTML: _ctx.content
            }, null, 8, _hoisted_1)) : (vue.openBlock(), vue.createElementBlock("span", _hoisted_2, vue.toDisplayString(_ctx.content), 1))
          ]),
          _ctx.compatShowArrow ? (vue.openBlock(), vue.createBlock(_component_el_popper_arrow, {
            key: 0,
            "arrow-offset": _ctx.arrowOffset
          }, null, 8, ["arrow-offset"])) : vue.createCommentVNode("v-if", true)
        ]),
        _: 3
      }, 8, ["aria-label", "boundaries-padding", "content", "disabled", "effect", "enterable", "fallback-placements", "hide-after", "gpu-acceleration", "offset", "persistent", "popper-class", "popper-style", "placement", "popper-options", "pure", "raw-content", "reference-el", "show-after", "strategy", "teleported", "transition", "z-index", "append-to"])
    ]),
    _: 3
  }, 512);
}
var Tooltip = /* @__PURE__ */ pluginVue_exportHelper["default"](_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/tooltip/src/tooltip.vue"]]);

exports["default"] = Tooltip;
//# sourceMappingURL=tooltip2.js.map
